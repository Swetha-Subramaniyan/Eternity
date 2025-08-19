import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();


export const createSettingEntry = async (req, res) => {
  try {
    const { setting_person_id, lot_number, items } = req.body;

    // Convert items array into plain array of filing item IDs
    const filingItemIds = items?.map(i => i.filing_item_id) || [];
    
    // Validate
    if (
      !setting_person_id ||
      !lot_number ||
      !Array.isArray(filingItemIds) ||
      filingItemIds.length === 0
    ) {
      return res.status(400).json({
        error:
          'setting_person_id, lot_number, and at least one filing_item_id are required',
      });
    }

    // Find lot by lot_number
    const lot = await prisma.lotInfo.findFirst({
      where: { lotNumber: parseInt(lot_number) },
    });

    if (!lot) {
      return res.status(404).json({ error: 'Lot not found with the given lot_number' });
    }

    // Get the first filing item's casting_item_id from its filing_entry relation
    const firstFilingItem = await prisma.filingItems.findUnique({
      where: { id: filingItemIds[0] },
      select: {
        filing_entry: {
          select: { casting_item_id: true },
        },
      },
    });

    if (!firstFilingItem) {
      return res.status(400).json({ error: 'First filing item not found' });
    }

    const castingItemId = firstFilingItem.filing_entry.casting_item_id;


    const existingSettingEntry = await prisma.settingEntry.findFirst({
      where: { casting_item_id: castingItemId }
    });
    if (existingSettingEntry) {
      return res.status(400).json({
        error: 'This casting item already has a setting entry'
      });
    }
    

    // Create SettingEntry (linking to the casting item)
    const settingEntry = await prisma.settingEntry.create({
      data: {
        setting_person: { connect: { id: setting_person_id } },
        castingItem: { connect: { id: castingItemId } },
      },
      include: {
        setting_person: true,
        filingItems: true,
      },
    });


    // Map all filing items to this SettingEntry in LotSettingMapper
    await Promise.all(
      filingItemIds.map((filingItemId) =>
        prisma.lotSettingMapper.create({
          data: {
            setting_id: setting_person_id,
            lot_id: lot.id,
            filing_item_id: filingItemId,
            setting_entry_id: settingEntry.id,
          },
        })
      )
    );

    // Fetch full filing items with details
    const fullItems = await prisma.filingItems.findMany({
      where: { id: { in: filingItemIds } },
      include: { filingitem: true, touch: true },
    });

    return res.status(201).json({
      message:
        'Single SettingEntry created for multiple filing items successfully',
      entry: {
        ...settingEntry,
        filingItems: fullItems,
      },
    });
  } catch (error) {
    console.error(
      'Error creating single setting entry for multiple items:',
      error
    );
    return res.status(500).json({
      error: 'Internal server error',
      details: error?.message || error,
    });
  }
};


// GET - http://localhost:5000/api/settingentry/person/:id
export const getSettingEntriesByPersonId = async (req, res) => {
  try {
    const setting_person_id = parseInt(req.params.setting_person_id);

    if (!setting_person_id) {
      return res.status(400).json({ error: "setting_person_id is required" });
    }

    const entries = await prisma.settingEntry.findMany({
      where: { setting_person_id },
      include: {
        setting_person: true,
        castingItem: {
          include: {
            item: true,
            touch: true,
          },
        },
        filingItems: {
          include: {
            filing_entry: {
              include: {
                filing_person: true,
              },
            },
            touch: true,
            stock: true,
          },
        },
        LotSettingMapper: {
          include: {
            lotId: true,
            itemId: {
              include: {
                filingitem:true,
                touch: true,
                filing_entry: {
                  include: {
                    filing_person: true,
                  },
                },
              },
            },
            settingEntry: true,
          },
        },
        settingTotalBalance: true,
        settingWastage: {
          include: {
            setting_items: {
              include: {
                item: true,
                touch: true,
              },
            },
          },
        },
      },
      orderBy: { id: "asc" },
    });

    if (!entries || entries.length === 0) {
      return res
        .status(404)
        .json({ message: "No setting entries found for this person" });
    }

    const result = entries.map((entry) => ({
      id: entry.id,
      createdAt: entry.createdAt,
      setting_person_id: entry.setting_person_id,
      setting_person_name: entry.setting_person?.name || "",

      casting_item_id: entry.casting_item_id,
      casting_item_weight: entry.castingItem?.weight || 0,
      casting_item_type: entry.castingItem?.type || "",
      casting_item_purity: entry.castingItem?.item_purity || 0,
      casting_item_remarks: entry.castingItem?.remarks || "",
      item_name: entry.castingItem?.item?.name || "",
      touch: entry.castingItem?.touch?.touch || "",

      //  filing items combined from direct relation + LotSettingMapper
      filingItems: [
        // from direct relation (if any)
        ...entry.filingItems.map((f) => ({
          id: f.id,
          type: f.type,
          item_name: f.filingitem?.name || "",
          weight: f.weight || 0,
          purity: f.item_purity || 0,
          touch: f.touch?.touch || "",
          remarks: f.remarks || "",
          stone_option: f.stone_option || "",
          filing_entry_id: f.filing_entry_id,
          filing_person_name: f.filing_entry?.filing_person?.name || "",
        })),

        // from LotSettingMapper → itemId
        ...entry.LotSettingMapper.map((mapper) => ({
          id: mapper.itemId?.id,
          type: mapper.itemId?.type,
          item_name: mapper.itemId?.filingitem?.name || "",
          weight: mapper.itemId?.weight || 0,
          purity: mapper.itemId?.item_purity || 0,
          touch: mapper.itemId?.touch?.touch || "",
          remarks: mapper.itemId?.remarks || "",
          stone_option: mapper.itemId?.stone_option || "",
          filing_entry_id: mapper.itemId?.filing_entry_id || null,
          filing_person_name:
            mapper.itemId?.filing_entry?.filing_person?.name || "",
        })),
      ],

      // lot mapping
      lotSettingMapper: entry.LotSettingMapper.map((mapper) => ({
        lot_id: mapper.lot_id,
        lot_number: mapper.lotId?.lotNumber || "",
        filing_item_id: mapper.filing_item_id,
        filing_item_name: mapper.itemId?.filingitem?.name || "",
        filing_entry_id: mapper.itemId?.filing_entry_id || null,
        filing_person_name:
          mapper.itemId?.filing_entry?.filing_person?.name || "",
        setting_entry_id: mapper.setting_entry_id,
      })),

      // balances
      settingTotalBalance: entry.settingTotalBalance.map((balance) => ({
        receipt_weight: balance.receipt_weight ?? null,
        stone_count: balance.stone_count ?? null,
        stone_weight: balance.stone_weight ?? null,
        remarks: balance.remarks ?? "",
        wastage: balance.wastage ?? null,
        total_product_weight: balance.total_product_weight ?? null,
        current_balance_weight: balance.current_balance_weight ?? null,
        total_scrap_weight: balance.total_scrap_weight ?? null,
        balance: balance.balance ?? null,
      })),

      // wastage
      settingWastage: entry.settingWastage.map((w) => ({
        id: w.id,
        total_receipt: w.total_receipt,
        total_wastage: w.total_wastage,
        balance: w.balance,
        wastage_percentage: w.wastage_percentage,
        given_gold: w.given_gold,
        add_wastage: w.add_wastage,
        overall_wastage: w.overall_wastage,
        closing_balance: w.closing_balance,
        opening_balance: w.opening_balance,
        items: w.setting_items.map((si) => ({
          id: si.id,
          type: si.type,
          item_name: si.item?.name || "",
          scrap_weight: si.scrap_weight || 0,
          purity: si.item_purity || 0,
          touch: si.touch?.touch || "",
          scrap_remarks: si.scrap_remarks || "",
        })),
      })),
    }));

    res.status(200).json(result);
  } catch (error) {
    console.error("Error in getSettingEntriesByPersonId:", error);
    res.status(500).json({ error: error.message });
  }
}; 







