
import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

export const createCastingItem = async (req, res) => {
  try {
    const {
      weight,
      touch,
      item_purity,
      remarks,
      after_weight,
      scrap_weight,
      scrap_wastage,
      castingEntryId,
      item_id,
      type,
    } = req.body;

    const castingEntry = await prisma.castingEntry.findUnique({
      where: { id: parseInt(castingEntryId) },
      select: { casting_customer_id: true }
    });

    if (!castingEntry) {
      return res.status(404).json({ error: "Casting entry not found" });
    }

    const newItem = await prisma.castingItems.create({
      data: {
        weight,
        touch,
        item_purity,
        remarks,
        after_weight,
        scrap_weight,
        scrap_wastage,
        casting_entry_id: parseInt(castingEntryId),
        casting_customer_id: castingEntry.casting_customer_id,
        item_id: parseInt(item_id),
        type,
      },
    });

    // if (type === "ScrapItems") {
    //   await prisma.stock.create({
    //     data: {
    //       item_id: parseInt(item_id),
    //       weight,
    //       touch,
    //       item_purity,
    //       remarks: `Auto-added from scrap in casting ID ${castingEntryId}`,
    //       casting_item_id: newItem.id,
    //       scrap_weight,
    //       scrap_wastage,
    //       casting_customer_id: castingEntry.casting_customer_id,
    //     },
    //   });
    // }
    if (type === "ScrapItems") {
      await prisma.stock.create({
        data: {
          item_id: parseInt(item_id),
          weight,
          touch,
          item_purity,
          remarks, // use user-provided remarks directly
          casting_item_id: newItem.id,
          scrap_weight,
          scrap_wastage,
          casting_customer_id: castingEntry.casting_customer_id,
        },
      });
    }
    
    

    res.status(201).json(newItem);
  } catch (err) {
    console.error("Error creating casting item:", err);
    res.status(500).json({ error: "Failed to create casting item" });
  }
};



// GET (all)
export const getAllCastingItems = async (req, res) => {
  try {
    const items = await prisma.castingItems.findMany(
      {
        include:{
          item:true,
          casting_customer:true,
          castingEntry:{
            select: {
              id: true,
              date: true,
            }
          }
        }
      }
    );
    console.log('All casting Items',items);
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ (by ID)
export const getCastingItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await prisma.castingItems.findUnique({
      where: { id: Number(id) },
    });
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
export const updateCastingItems = async (req, res) => {
  const { id } = req.params;
  const {
    weight,
    touch,
    item_purity,
    remarks,
    after_weight,
    scrap_weight,
    scrap_wastage,
  } = req.body;

  try {
    const updatedItem = await prisma.castingItems.update({
      where: { id: Number(id) },
      data: {
        weight,
        touch,
        item_purity,
        remarks,
        after_weight,
        scrap_weight,
        scrap_wastage,
      },
    });
    console.log('Updated Casting Items',updatedItem)
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
export const deleteCastingItem = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.castingItems.delete({
      where: { id: Number(id) },
    });
    res.status(200).json({ message: "Casting item deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
