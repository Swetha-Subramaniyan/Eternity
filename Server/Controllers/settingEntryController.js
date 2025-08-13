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
