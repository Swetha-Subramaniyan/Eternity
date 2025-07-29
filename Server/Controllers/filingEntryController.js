// // import { PrismaClient } from "../generated/prisma/index.js";
// // const prisma = new PrismaClient();

// // //  POST - http://localhost:5000/api/filingentry

// // export const createFilingEntry = async (req, res) => {
// //   try {
// //     const { filing_person_id, casting_item_id, lot_number } = req.body;

// //     console.log(" Received request to create FilingEntry with:", {
// //       filing_person_id,
// //       casting_item_id,
// //       lot_number
// //     });

// //     if (!filing_person_id || !casting_item_id || !lot_number) {
// //       console.warn(" Missing required fields");
// //       return res.status(400).json({ error: "filing_person_id, casting_item_id, and lot_number are required" });
// //     }

// //     // Check if casting item already assigned
// //     const existingEntry = await prisma.filingEntry.findFirst({
// //       where: { casting_item_id },
// //     });

// //     if (existingEntry) {
// //       console.warn(" Casting item already assigned:", casting_item_id);
// //       return res.status(400).json({ message: 'Casting Item already assigned' });
// //     }

// //     // Create Filing Entry
// //     const newFilingEntry = await prisma.filingEntry.create({
// //       data: {
// //         filing_person_id,
// //         casting_item_id,
// //       },
// //     });

// //     console.log(" Created new FilingEntry:", newFilingEntry);

// //     // Create LotFilingMapper entry
// //     const lotFilingMapper = await prisma.lotFilingMapper.create({
// //       data: {
// //         filing_id: filing_person_id,
// //         lot_id: parseInt(lot_number),
// //         casting_item_id: casting_item_id,
// //       }
// //     });

// //     console.log(" Created new LotFilingMapper:", lotFilingMapper);

// //     res.status(201).json({
// //       message: 'Filing Entry and Lot Mapping created successfully',
// //       entry: newFilingEntry,
// //       mapper: lotFilingMapper
// //     });

// //   } catch (error) {
// //     console.error(" Error creating filing entry:", error);
// //     res.status(500).json({ error: error.message });
// //   }
// // };


// // export const getAllFilingEntries = async (req, res) => {
// //   try {
// //     const entries = await prisma.filingEntry.findMany({
// //       include: {
// //         CastingItemId: {
// //           include: {
// //             item: true, // if you have a relation from CastingItems → AddItem
// //           },
// //         },
// //         filing_person: true,
// //         filingItems: true,
// //       },
// //     });

// //     const flatEntries = entries.map(entry => ({
// //       id: entry.id,
// //       createdAt: entry.createdAt,
// //       filing_person_id: entry.filing_person_id,
// //       casting_item_id: entry.casting_item_id,

// //       // Flattened fields
// //       filing_person_name: entry.filing_person?.name || '',
// //       casting_item_weight: entry.CastingItemId?.weight || 0,
// //       casting_item_type: entry.CastingItemId?.type || '',
// //       casting_item_purity: entry.CastingItemId?.item_purity || 0,
// //       casting_item_remarks: entry.CastingItemId?.remarks || '',
// //       item_name: entry.CastingItemId?.item?.name || '',

// //       filingItems: entry.filingItems,
// //     }));

// //     res.status(200).json(flatEntries);
// //   } catch (error) {
// //     console.error("Error fetching filing entries:", error);
// //     res.status(500).json({ error: error.message });
// //   }
// // };


// // // export const getAllFilingEntries = async (req, res) => {
// // //   try {
// // //     const entries = await prisma.filingEntry.findMany({
// // //       include: {
// // //         castingItem: {
// // //           include: {
// // //             item: true,
// // //           },
// // //         },
// // //         filing_person: true,
// // //         filingItems: true,
// // //       },
// // //     });

// // //     // Flatten each entry
// // //     const flatEntries = entries.map(entry => ({
// // //       id: entry.id,
// // //       createdAt: entry.createdAt,
// // //       filing_person_id: entry.filing_person_id,
// // //       casting_item_id: entry.casting_item_id,

// // //       // Flattened fields
// // //       filing_person_name: entry.filing_person?.name || '',
// // //       casting_item_weight: entry.castingItem?.weight || 0,
// // //       casting_item_type: entry.castingItem?.type || '',
// // //       casting_item_purity: entry.castingItem?.item_purity || 0,
// // //       casting_item_remarks: entry.castingItem?.remarks || '',
// // //       item_name: entry.castingItem?.item?.name || '',

// // //       // Optional: you can add filingItems count or more if needed
// // //       filingItems: entry.filingItems,
// // //     }));

// // //     res.status(200).json(flatEntries);
// // //   } catch (error) {
// // //     console.error("Error fetching filing entries:", error);
// // //     res.status(500).json({ error: error.message });
// // //   }
// // // };

// // // export const getAllFilingEntries = async (req, res) => {
// // //   try {
// // //     const entries = await prisma.filingEntry.findMany({
// // //       include: {
// // //         castingItem: {
// // //           include: {
// // //             item: true,
// // //           },
// // //         },
// // //         filing_person: true,
// // //         filingItems: true,
// // //       },
// // //     });

// // //     // Flatten each entry
// // //     const flatEntries = entries.map(entry => ({
// // //       id: entry.id,
// // //       createdAt: entry.createdAt,
// // //       filing_person_id: entry.filing_person_id,
// // //       casting_item_id: entry.casting_item_id,

// // //       // Flattened fields
// // //       filing_person_name: entry.filing_person_id?.name || '',
// // //       casting_item_weight: entry.castingItem?.weight || 0,
// // //       casting_item_type: entry.castingItem?.type || '',
// // //       casting_item_purity: entry.castingItem?.item_purity || 0,
// // //       casting_item_remarks: entry.castingItem?.remarks || '',
// // //       item_name: entry.castingItem?.item?.name || '',

// // //       // Optional: you can add filingItems count or more if needed
// // //       filingItems: entry.filingItems,
// // //     }));

// // //     res.status(200).json(flatEntries);
// // //   } catch (error) {
// // //     console.error("Error fetching filing entries:", error);
// // //     res.status(500).json({ error: error.message });
// // //   }
// // // };


// // export const getFilingEntryById = async (req, res) => {
// //   try {
// //     const id = parseInt(req.params.id);

// //     const entry = await prisma.filingEntry.findUnique({
// //       where: { id },
// //       include: {
// //         filing_person: true,
// //         castingItem: {
// //           include: {
// //             item: true,
// //             touch: true,
// //           },
// //         },
// //         filingItems: true,
// //       },
// //     });

// //     if (!entry) {
// //       return res.status(404).json({ message: 'Filing Entry not found' });
// //     }

// //     res.status(200).json(entry);
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };







// // export const getFilingEntriesByPersonId = async (req, res) => {
// //   try {
// //     const filing_person_id = parseInt(req.params.filing_person_id);

// //     const entries = await prisma.filingEntry.findMany({
// //       where: { filing_person_id },
// //       include: {
// //         filing_person: true,
// //         castingItem: {
// //           include: {
// //             item: true,
// //             touch: true,
// //           },
// //         },
// //         filingItems: true,
// //       },
// //       orderBy: { id: 'desc' },
// //     });

// //     if (!entries || entries.length === 0) {
// //       return res.status(404).json({ message: 'No entries found for this person' });
// //     }

// //     res.status(200).json(entries);
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };




// // export const updateFilingEntry = async (req, res) => {
// //   try {
// //     const id = parseInt(req.params.id);
// //     const { filing_person_id, casting_item_id } = req.body;

// //     const updatedEntry = await prisma.filingEntry.update({
// //       where: { id },
// //       data: {
// //         filing_person_id,
// //         casting_item_id,
// //       },
// //     });

// //     res.status(200).json({ message: 'Filing Entry updated', entry: updatedEntry });
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };


// // export const deleteFilingEntry = async (req, res) => {
// //   try {
// //     const id = parseInt(req.params.id);

// //     await prisma.filingEntry.delete({
// //       where: { id },
// //     });

// //     res.status(200).json({ message: 'Filing Entry deleted' });
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };



// import { PrismaClient } from "../generated/prisma/index.js";
// const prisma = new PrismaClient();

// //  POST - http://localhost:5000/api/filingentry

// export const createFilingEntry = async (req, res) => {
//   try {
//     const { filing_person_id, casting_item_id, lot_number } = req.body;

//     console.log(" Received request to create FilingEntry with:", {
//       filing_person_id,
//       casting_item_id,
//       lot_number
//     });

//     if (!filing_person_id || !casting_item_id || !lot_number) {
//       console.warn(" Missing required fields");
//       return res.status(400).json({ error: "filing_person_id, casting_item_id, and lot_number are required" });
//     }

//     // Check if casting item already assigned
//     const existingEntry = await prisma.filingEntry.findFirst({
//       where: { casting_item_id },
//     });

//     if (existingEntry) {
//       console.warn(" Casting item already assigned:", casting_item_id);
//       return res.status(400).json({ message: 'Casting Item already assigned' });
//     }

//     // Create Filing Entry
//     const newFilingEntry = await prisma.filingEntry.create({
//       data: {
//         filing_person_id,
//         casting_item_id,
//       },
//     });

//     console.log(" Created new FilingEntry:", newFilingEntry);

//     // Create LotFilingMapper entry
//     const lotFilingMapper = await prisma.lotFilingMapper.create({
//       data: {
//         filing_id: filing_person_id,
//         lot_id: parseInt(lot_number),
//         item_id: casting_item_id,
//       }
//     });

//     console.log(" Created new LotFilingMapper:", lotFilingMapper);

//     res.status(201).json({
//       message: 'Filing Entry and Lot Mapping created successfully',
//       entry: newFilingEntry,
//       mapper: lotFilingMapper
//     });

//   } catch (error) {
//     console.error(" Error creating filing entry:", error);
//     res.status(500).json({ error: error.message });
//   }
// };

// export const getAllFilingEntries = async (req, res) => {
//   try {
//     const entries = await prisma.filingEntry.findMany({
//       include: {
//         castingItem: {
//           include: {
//             item: true,
//           },
//         },
//         filing_person: true,
//         filingItems: true,
//       },
//     });

//     // Flatten each entry
//     const flatEntries = entries.map(entry => ({
//       id: entry.id,
//       createdAt: entry.createdAt,
//       filing_person_id: entry.filing_person_id,
//       casting_item_id: entry.casting_item_id,

//       // Flattened fields
//       filing_person_name: entry.filing_person?.name || '',
//       casting_item_weight: entry.castingItem?.weight || 0,
//       casting_item_type: entry.castingItem?.type || '',
//       casting_item_purity: entry.castingItem?.item_purity || 0,
//       casting_item_remarks: entry.castingItem?.remarks || '',
//       item_name: entry.castingItem?.item?.name || '',

//       // Optional: you can add filingItems count or more if needed
//       filingItems: entry.filingItems,
//     }));

//     res.status(200).json(flatEntries);
//   } catch (error) {
//     console.error("Error fetching filing entries:", error);
//     res.status(500).json({ error: error.message });
//   }
// };



// // export const getAllFilingEntries = async (req, res) => {
// //   try {
// //     const entries = await prisma.filingEntry.findMany({

// //       include: {
// //         castingItem: {
// //           include: {
// //             item: true,
// //           }
// //         },
// //         filing_person: true,
// //         filingItems: true,
// //       }
     
// //     });
// //     res.status(200).json(entries);
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };


// export const getFilingEntryById = async (req, res) => {
//   try {
//     const id = parseInt(req.params.id);

//     const entry = await prisma.filingEntry.findUnique({
//       where: { id },
//       include: {
//         filing_person: true,
//         castingItem: {
//           include: {
//             item: true,
//             touch: true,
//           },
//         },
//         filingItems: true,
//       },
//     });

//     if (!entry) {
//       return res.status(404).json({ message: 'Filing Entry not found' });
//     }

//     res.status(200).json(entry);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };







// export const getFilingEntriesByPersonId = async (req, res) => {
//   try {
//     const filing_person_id = parseInt(req.params.filing_person_id);

//     const entries = await prisma.filingEntry.findMany({
//       where: { filing_person_id },
//       include: {
//         filing_person: true,
//         castingItem: {
//           include: {
//             item: true,
//             touch: true,
//           },
//         },
//         filingItems: true,
//       },
//       orderBy: { id: 'desc' },
//     });

//     if (!entries || entries.length === 0) {
//       return res.status(404).json({ message: 'No entries found for this person' });
//     }

//     res.status(200).json(entries);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };




// export const updateFilingEntry = async (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     const { filing_person_id, casting_item_id } = req.body;

//     const updatedEntry = await prisma.filingEntry.update({
//       where: { id },
//       data: {
//         filing_person_id,
//         casting_item_id,
//       },
//     });

//     res.status(200).json({ message: 'Filing Entry updated', entry: updatedEntry });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


// export const deleteFilingEntry = async (req, res) => {
//   try {
//     const id = parseInt(req.params.id);

//     await prisma.filingEntry.delete({
//       where: { id },
//     });

//     res.status(200).json({ message: 'Filing Entry deleted' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };




import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

//  POST - http://localhost:5000/api/filingentry

export const createFilingEntry = async (req, res) => {
  try {
    const { filing_person_id, casting_item_id, lot_number } = req.body;

    console.log(" Received request to create FilingEntry with:", {
      filing_person_id,
      casting_item_id,
      lot_number
    });

    if (!filing_person_id || !casting_item_id || !lot_number) {
      console.warn(" Missing required fields");
      return res.status(400).json({ error: "filing_person_id, casting_item_id, and lot_number are required" });
    }

    // Check if casting item already assigned
    const existingEntry = await prisma.filingEntry.findFirst({
      where: { casting_item_id },
    });

    if (existingEntry) {
      console.warn(" Casting item already assigned:", casting_item_id);
      return res.status(400).json({ message: 'Casting Item already assigned' });
    }

    // Create Filing Entry
    const newFilingEntry = await prisma.filingEntry.create({
      data: {
        filing_person_id,
        casting_item_id,
      },
    });

    console.log(" Created new FilingEntry:", newFilingEntry);

    // Create LotFilingMapper entry
    const lotFilingMapper = await prisma.lotFilingMapper.create({
      data: {
        filing_id: filing_person_id,
        lot_id: parseInt(lot_number),
        item_id: casting_item_id,
      }
    });

    console.log(" Created new LotFilingMapper:", lotFilingMapper);

    res.status(201).json({
      message: 'Filing Entry and Lot Mapping created successfully',
      entry: newFilingEntry,
      mapper: lotFilingMapper
    });

  } catch (error) {
    console.error(" Error creating filing entry:", error);
    res.status(500).json({ error: error.message });
  }
};

export const getAllFilingEntries = async (req, res) => {
  try {
    const entries = await prisma.filingEntry.findMany({
      include: {
        castingItem: {
          include: {
            item: true,
          },
        },
        filing_person: true,
        filingItems: true,
      },
    });

    // Flatten each entry
    const flatEntries = entries.map(entry => ({
      id: entry.id,
      createdAt: entry.createdAt,
      filing_person_id: entry.filing_person_id,
      casting_item_id: entry.casting_item_id,

      // Flattened fields
      filing_person_name: entry.filing_person?.name || '',
      casting_item_weight: entry.castingItem?.weight || 0,
      casting_item_type: entry.castingItem?.type || '',
      casting_item_purity: entry.castingItem?.item_purity || 0,
      casting_item_remarks: entry.castingItem?.remarks || '',
      item_name: entry.castingItem?.item?.name || '',

      // Optional: you can add filingItems count or more if needed
      filingItems: entry.filingItems,
    }));

    res.status(200).json(flatEntries);
  } catch (error) {
    console.error("Error fetching filing entries:", error);
    res.status(500).json({ error: error.message });
  }
};



// export const getAllFilingEntries = async (req, res) => {
//   try {
//     const entries = await prisma.filingEntry.findMany({

//       include: {
//         castingItem: {
//           include: {
//             item: true,
//           }
//         },
//         filing_person: true,
//         filingItems: true,
//       }
     
//     });
//     res.status(200).json(entries);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


export const getFilingEntryById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const entry = await prisma.filingEntry.findUnique({
      where: { id },
      include: {
        filing_person: true,
        castingItem: {
          include: {
            item: true,
            touch: true,
          },
        },
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







export const getFilingEntriesByPersonId = async (req, res) => {
  try {
    const filing_person_id = parseInt(req.params.filing_person_id);

    const entries = await prisma.filingEntry.findMany({
      where: { filing_person_id },
      include: {
        filing_person: true,
        castingItem: {
          include: {
            item: true,
            touch: true,
          },
        },
        filingItems: true,
      },
      orderBy: { id: 'desc' },
    });

    if (!entries || entries.length === 0) {
      return res.status(404).json({ message: 'No entries found for this person' });
    }

    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




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

