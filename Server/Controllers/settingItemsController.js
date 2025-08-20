import { PrismaClient, CASTINGENTRYTYPE } from "../generated/prisma/index.js";
const prisma =new PrismaClient();


export const createSettingItem = async (req, res) => {
  try {
    let {
      settingEntryId,
      items,
      scrapItems,
      receiptWeight,
      stoneCount,
      stoneWeight,
      totalProductWeight,
      currentBalanceWeight,
      wastage,
      totalScrapWeight,
      balance,
    } = req.body;

    const finalItems = items || scrapItems || [];
    if (!settingEntryId || finalItems.length === 0) {
      return res.status(400).json({
        error: "settingEntryId and at least one item (Scrap or Product) are required",
      });
    }

    const normalizedWastage = wastage === "Yes" || wastage === true;

    // 1. Upsert settingItems (update if exists, insert if not)
    for (const item of finalItems) {
      const existingItem = await prisma.settingItems.findFirst({
        where: {
          setting_entry_id: settingEntryId,
          setting_item_id: item.setting_item_id,
        },
      });
    
      if (existingItem) {
        await prisma.settingItems.update({
          where: { id: existingItem.id },
          data: {
            type: item.type || "ScrapItems",
            scrap_weight: item.weight,
            touch_id: item.touch_id || null,
            item_purity: item.purity || 0,
            scrap_remarks: item.remarks || null,
          },
        });
      } else {
        await prisma.settingItems.create({
          data: {
            setting_entry_id: settingEntryId,
            setting_item_id: item.setting_item_id,
            type: item.type || "ScrapItems",
            scrap_weight: item.weight,
            touch_id: item.touch_id || null,
            item_purity: item.purity || 0,
            scrap_remarks: item.remarks || null,
          },
        });
      }
    }
    

    // 2. Upsert settingTotalBalance (update if exists, create if not)
    const existingBalance = await prisma.settingTotalBalance.findFirst({
      where: { setting_entry_id: settingEntryId },
    });

    if (existingBalance) {
      await prisma.settingTotalBalance.update({
        where: { id: existingBalance.id },
        data: {
          receipt_weight: receiptWeight,
          stone_count: stoneCount,
          stone_weight: stoneWeight,
          total_product_weight: totalProductWeight,
          current_balance_weight: currentBalanceWeight,
          wastage: normalizedWastage,
          total_scrap_weight: totalScrapWeight,
          balance: balance,
        },
      });
    } else {
      await prisma.settingTotalBalance.create({
        data: {
          setting_entry_id: settingEntryId,
          receipt_weight: receiptWeight,
          stone_count: stoneCount,
          stone_weight: stoneWeight,
          total_product_weight: totalProductWeight,
          current_balance_weight: currentBalanceWeight,
          wastage: normalizedWastage,
          total_scrap_weight: totalScrapWeight,
          balance: balance,
        },
      });
    }

    return res.status(200).json({
      message: "Setting items and balance upserted successfully",
    });
  } catch (error) {
    console.error("Error in createOrUpdateSettingItem:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};



export const getAllSettingItems = async (req, res) => {
  try {
    const items = await prisma.settingItems.findMany({
      include: {      
        touch: true,   
        settingEntryId: true,     
      },
    });
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching setting items:", error);
    res.status(500).json({ message: "Failed to fetch setting items" });
  }
};



export const getSettingItemById = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await prisma.settingItems.findUnique({
      where: { id: parseInt(id) },
      include: {       
        touch: true,
        stock: true,
        settingEntryId: true,
        buffing_entry: true,
        setting_wastage:true,
  
      },
    });

    if (!item) return res.status(404).json({ error: "Setting item not found" });

    res.json(item);
  } catch (error) {
    console.error("Error fetching setting item:", error);
    res.status(500).json({ error: "Failed to fetch setting item" });
  }
};


export const deleteSettingItem = async (req, res) => {
  const { id } = req.params;

  try {
    const existingItem = await prisma.settingItems.findUnique({ where: { id: Number(id) } });

    if (!existingItem) {
      return res.status(404).json({ message: "Setting item not found" });
    }

    await prisma.settingItems.delete({ where: { id: Number(id) } });

    res.status(200).json({ message: "Setting item deleted successfully" });
  } catch (error) {
    console.error("Error deleting setting item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
