import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

//  POST - http://localhost:5000/api/filingentry

// CREATE filing entry
export const createFilingEntry = async (req, res) => {
  try {
    const {
      filing_person_id,
      casting_item_id,
      type,       // "Items" or "ScrapItems"
      item,       // Item name string
      weight,
      touch,
      item_purity,
      remarks,
      after_weight,
      stone_option, // "WithStone" or "WithoutStone"
    } = req.body;

    const newEntry = await prisma.filingEntry.create({
      data: {
        filing_person_id,
        casting_item_id,
        type,
        item,
        weight,
        touch,
        item_purity,
        remarks,
        after_weight,
        stone_option,
      },
    });

    res.status(201).json(newEntry);
  } catch (error) {
    console.error("Error creating filing entry:", error);
    res.status(500).json({ error: "Failed to create filing entry" });
  }
};

// READ ALL filing entries
export const getAllFilingEntry = async (req, res) => {
  try {
    const entries = await prisma.filingEntry.findMany({
      include: {
        filing_person: true,
        castingItem: {
          include: {
            item: true,
            casting_customer: true,
          },
        },
        settingEntry: true,
        buffingEntries: true,
      },
      orderBy: { createdAt: "desc" },
    });
    res.json(entries);
  } catch (error) {
    console.error("Error fetching filing entries:", error);
    res.status(500).json({ error: "Failed to fetch filing entries" });
  }
};

// READ filing entry by ID
export const getFilingEntryById = async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await prisma.filingEntry.findUnique({
      where: { id: parseInt(id) },
      include: {
        filing_person: true,
        castingItem: {
          include: { item: true, casting_customer: true },
        },
        settingEntry: true,
        buffingEntries: true,
      },
    });

    if (!entry) return res.status(404).json({ error: "Entry not found" });

    res.json(entry);
  } catch (error) {
    console.error("Error fetching filing entry by ID:", error);
    res.status(500).json({ error: "Failed to fetch filing entry" });
  }
};

// UPDATE filing entry
export const updateFilingEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      filing_person_id,
      type,
      item,
      weight,
      touch,
      item_purity,
      remarks,
      after_weight,
      stone_option,
    } = req.body;

    const updatedEntry = await prisma.filingEntry.update({
      where: { id: parseInt(id) },
      data: {
        filing_person_id,
        type,
        item,
        weight,
        touch,
        item_purity,
        remarks,
        after_weight,
        stone_option,
      },
    });

    res.json(updatedEntry);
  } catch (error) {
    console.error("Error updating filing entry:", error);
    res.status(500).json({ error: "Failed to update filing entry" });
  }
};

// DELETE filing entry
export const deleteFilingEntry = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.filingEntry.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: "Filing entry deleted successfully" });
  } catch (error) {
    console.error("Error deleting filing entry:", error);
    res.status(500).json({ error: "Failed to delete filing entry" });
  }
};
