import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

//  POST - http://localhost:5000/api/filingentry

// CREATE filing entry
// export const createFilingEntry = async (req, res) => {
//   try {
//     const { filing_person_id, casting_item_id } = req.body;

//     const newEntry = await prisma.filingEntry.create({
//       data: {

//         filing_person_id: parseInt(filing_person_id),
//         casting_item_id, 
//       },
//     });

//     res.status(201).json(newEntry);
//   } catch (error) {
//     console.error("Error creating filing entry:", error);
//     res.status(500).json({ error: "Failed to create filing entry" });
//   }
// };


export const createFilingEntry = async (req, res) => {
  try {
    const { filing_person_id, casting_item_id } = req.body;

    const existingEntry = await prisma.filingEntry.findFirst({
      where: { casting_item_id },
    });

    if (existingEntry) {
      return res.status(400).json({ message: 'Casting Item already assigned' });
    }

    const newFilingEntry = await prisma.filingEntry.create({
      data: {
        filing_person_id,
        casting_item_id,
      },
    });

    res.status(201).json({ message: 'Filing Entry created', entry: newFilingEntry });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get All Filing Entries
export const getAllFilingEntries = async (req, res) => {
  try {
    const entries = await prisma.filingEntry.findMany({
      include: {
        filing_person: true,
        castingItem: true,
        filingItems: true,
      },
    });
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Filing Entry by ID
export const getFilingEntryById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const entry = await prisma.filingEntry.findUnique({
      where: { id },
      include: {
        filing_person: true,
        castingItem: true,
        filingItems: true,
      },
    });

    if (!entry) {
      return res.status(404).json({ message: 'Filing Entry not found' });
    }

    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Filing Entry
export const updateFilingEntry = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { filing_person_id, casting_item_id } = req.body;

    const updatedEntry = await prisma.filingEntry.update({
      where: { id },
      data: {
        filing_person_id,
        casting_item_id,
      },
    });

    res.status(200).json({ message: 'Filing Entry updated', entry: updatedEntry });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Filing Entry
export const deleteFilingEntry = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    await prisma.filingEntry.delete({
      where: { id },
    });

    res.status(200).json({ message: 'Filing Entry deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// export const getAllFilingEntries = async (req, res) => {
//   try {
//     const entries = await prisma.filingEntry.findMany({
//       include: {
//         filingItems: true,
//         castingItem: {
//           include: {
//             item: true
//           }
//         }
//       },
//       orderBy: {
//         createdAt: 'desc'
//       }
//     });

//     const formattedEntries = entries.map(entry => {
//       const productItems = entry.filingItems.filter(item => item.type === 'Items');
//       const scrapItems = entry.filingItems.filter(item => item.type === 'ScrapItems');

//       return {
//         ...entry,
//         productItems,
//         date: entry.createdAt,
//         scrapItems,
//         wastage: productItems.some(i => i.wastage === true) ? 'Yes' : 'No',
//         items: entry.castingItem ? [{
//           item: entry.castingItem.item.name,
//           beforeWeight: entry.castingItem.weight
//         }] : []
//       };
//     });

//     res.status(200).json(formattedEntries);
//   } catch (error) {
//     console.error("Failed to fetch filing entries:", error);
//     res.status(500).json({ message: "Error fetching entries" });
//   }
// };


// export const getFilingEntryById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const entry = await prisma.filingEntry.findUnique({
//       where: { id: parseInt(id) },
//       include: {
//         filing_person: true,
//         castingItem: {
//           include: {
//             item: true,
//             casting_customer: true,
//           },
//         },
//       },
//     });

//     if (!entry) {
//       return res.status(404).json({ error: "Filing entry not found" });
//     }

//     res.json(entry);
//   } catch (error) {
//     console.error("Error fetching filing entry:", error);
//     res.status(500).json({ error: "Failed to fetch filing entry" });
//   }
// };


// export const updateFilingEntry = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { filing_person_id, casting_item_id } = req.body;

//     const updatedEntry = await prisma.filingEntry.update({
//       where: { id: parseInt(id) },
//       data: {
//         filing_person_id,
//         casting_item_id,
//       },
//     });

//     res.json(updatedEntry);
//   } catch (error) {
//     console.error("Error updating filing entry:", error);
//     res.status(500).json({ error: "Failed to update filing entry" });
//   }
// };


// export const deleteFilingEntry = async (req, res) => {
//   try {
//     const { id } = req.params;

//     await prisma.filingEntry.delete({
//       where: { id: parseInt(id) },
//     });

//     res.json({ message: "Filing entry deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting filing entry:", error);
//     res.status(500).json({ error: "Failed to delete filing entry" });
//   }
// };
