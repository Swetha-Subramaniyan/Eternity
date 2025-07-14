import { PrismaClient } from "../generated/prisma/index.js";
const prisma =new PrismaClient();

// CREATE a new FilingItem

export const createFilingItem = async (req, res) => {
  try {
    const {
      filing_entry_id,
      type,
      item_id,
      weight,
      touch_id,
      item_purity,
      remarks,
      stone_option,
      after_weight,
      wastage,
    } = req.body;

    // Step 1: Get casting_customer_id via the related castingItem
    const filingEntry = await prisma.filingEntry.findUnique({
      where: { id: parseInt(filing_entry_id) },
      include: {
        castingItem: {
          select: {
            casting_customer_id: true,
          },
        },
      },
    });

    if (!filingEntry || !filingEntry.castingItem) {
      return res.status(404).json({ error: "Casting customer not found for this filing entry." });
    }

    const castingCustomerId = filingEntry.castingItem.casting_customer_id;

    // Step 2: Create the Filing Item
    const created = await prisma.filingItems.create({
      data: {
        filing_entry_id: Number(filing_entry_id),
        type,
        item_id: Number(item_id),
        weight: Number(weight),
        touch_id: Number(touch_id),
        item_purity: Number(item_purity),
        remarks,
        stone_option,
        after_weight: Number(after_weight),
        wastage,
      },
    });

    // Step 3: If ScrapItem, create a stock entry
    if (type === "ScrapItems") {
      await prisma.stock.create({
        data: {
          item: { connect: { id: Number(item_id) } },
          weight: Number(weight),
          touch: { connect: { id: Number(touch_id) } },
          item_purity: Number(item_purity),
          remarks,
          filingItem: {
            connect: { id: created.id },
          },
          casting_customer: { connect: { id: castingCustomerId } },
        },
      });
    }

    res.status(201).json(created);
  } catch (error) {
    console.error("Filing item creation error:", error);
    res.status(500).json({ message: "Failed to create filing item" });
  }
};

  export const getAllFilingItems = async (req, res) => {
    try {
      const items = await prisma.filingItems.findMany({
        include: {
          item: true,         // includes AddItem relation
          touch: true,        // includes AddTouch relation
          filing_entry: true, // includes FilingEntry relation
        },
      });
      res.status(200).json(items);
    } catch (error) {
      console.error("Error fetching filing items:", error);
      res.status(500).json({ message: "Failed to fetch filing items" });
    }
  };
  
  


  export const getFilingItemById = async (req, res) => {
    try {
      const { id } = req.params;
  
      const item = await prisma.filingItems.findUnique({
        where: { id: parseInt(id) },
        include: {
          item: true,
          touch: true,
          stock: true,
          setting_entry: true,
          buffing_entry: true,
          filing_wastage: true,
        },
      });
  
      if (!item) return res.status(404).json({ error: "Filing item not found" });
  
      res.json(item);
    } catch (error) {
      console.error("Error fetching filing item:", error);
      res.status(500).json({ error: "Failed to fetch filing item" });
    }
  };
  


  export const updateFilingItem = async (req, res) => {
    try {
      const { id } = req.params;
      const {
        item_id,
        type,
        weight,
        touch_id,
        item_purity,
        remarks,
        wastage,
        stone_option,
        after_weight,
        scrap_weight,
        scrap_wastage,
      } = req.body;
  
      const updatedItem = await prisma.filingItems.update({
        where: { id: parseInt(id) },
        data: {
          item_id,
          type,
          weight,
          touch_id,
          item_purity,
          remarks,
          wastage,
          stone_option,
          after_weight,
          scrap_weight,
          scrap_wastage,
        },
      });
  
      res.json(updatedItem);
    } catch (error) {
      console.error("Error updating filing item:", error);
      res.status(500).json({ error: "Failed to update filing item" });
    }
  };

  
  export const deleteFilingItem = async (req, res) => {
    try {
      const { id } = req.params;
  
      await prisma.filingItems.delete({
        where: { id: parseInt(id) },
      });
  
      res.json({ message: "Filing item deleted successfully" });
    } catch (error) {
      console.error("Error deleting filing item:", error);
      res.status(500).json({ error: "Failed to delete filing item" });
    }
  };
  