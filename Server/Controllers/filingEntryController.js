import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

//  POST - http://localhost:5000/api/filingentry

// CREATE filing entry
export const createFilingEntry = async (req, res) => {
  try {
    const { filing_person_id, casting_item_id } = req.body;

    const newEntry = await prisma.filingEntry.create({
      data: {

        filing_person_id: parseInt(filing_person_id),
        casting_item_id, 
      },
    });

    res.status(201).json(newEntry);
  } catch (error) {
    console.error("Error creating filing entry:", error);
    res.status(500).json({ error: "Failed to create filing entry" });
  }
};


export const getAllFilingEntries = async (req, res) => {
  try {
    const entries = await prisma.filingEntry.findMany({
      include: {
        filingItems: true,
        castingItem: {
          include: {
            item: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    const formattedEntries = entries.map(entry => {
      const productItems = entry.filingItems.filter(item => item.type === 'Items');
      const scrapItems = entry.filingItems.filter(item => item.type === 'ScrapItems');

      return {
        ...entry,
        productItems,
        date: entry.createdAt,
        scrapItems,
        wastage: productItems.some(i => i.wastage === true) ? 'Yes' : 'No',
        items: entry.castingItem ? [{
          item: entry.castingItem.item.name,
          beforeWeight: entry.castingItem.weight
        }] : []
      };
    });

    res.status(200).json(formattedEntries);
  } catch (error) {
    console.error("Failed to fetch filing entries:", error);
    res.status(500).json({ message: "Error fetching entries" });
  }
};


export const getFilingEntryById = async (req, res) => {
  try {
    const { id } = req.params;

    const entry = await prisma.filingEntry.findUnique({
      where: { id: parseInt(id) },
      include: {
        filing_person: true,
        castingItem: {
          include: {
            item: true,
            casting_customer: true,
          },
        },
      },
    });

    if (!entry) {
      return res.status(404).json({ error: "Filing entry not found" });
    }

    res.json(entry);
  } catch (error) {
    console.error("Error fetching filing entry:", error);
    res.status(500).json({ error: "Failed to fetch filing entry" });
  }
};


export const updateFilingEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { filing_person_id, casting_item_id } = req.body;

    const updatedEntry = await prisma.filingEntry.update({
      where: { id: parseInt(id) },
      data: {
        filing_person_id,
        casting_item_id,
      },
    });

    res.json(updatedEntry);
  } catch (error) {
    console.error("Error updating filing entry:", error);
    res.status(500).json({ error: "Failed to update filing entry" });
  }
};


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
