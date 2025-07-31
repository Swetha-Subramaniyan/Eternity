import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

//  POST - http://localhost:5000/api/filingentry

export const createFilingEntry = async (req, res) => {
  try {
    const { filing_person_id, lot_number, itemIds } = req.body;

    if (!filing_person_id || !lot_number || !Array.isArray(itemIds) || itemIds.length === 0) {
      return res.status(400).json({
        error: 'filing_person_id, lot_number, and at least one casting_item_id are required',
      });
    }

    const lot = await prisma.lotInfo.findFirst({
      where: { lotNumber: parseInt(lot_number) },
    });
    

    if (!lot) {
      return res.status(404).json({ error: 'Lot not found with the given lot_number' });
    }

    //  Create the FilingEntry using first casting item ID (schema requires one)
    const filingEntry = await prisma.filingEntry.create({
      data: {
        filing_person: {
          connect: { id: filing_person_id },
        },
        castingItem: {
          connect: { id: itemIds[0] },
        },
      },
    });

    // Create mapping entries for each itemId
    const mapperEntries = await Promise.all(
      itemIds.map(async (itemId) => {
        return await prisma.lotFilingMapper.create({
          data: {
            filing_id: filing_person_id,
            lot_id: lot.id,
            item_id: itemId,
            filing_entry_id: filingEntry.id,
          },
        });
      })
    );

    return res.status(201).json({
      message: 'Filing Entry and Grouped Lot Mappings created successfully',
      entry: filingEntry,
      mappers: mapperEntries,
    });
  } catch (error) {
    console.error('Error creating grouped filing entry:', error);
    return res.status(500).json({
      error: 'Internal server error',
      details: error?.message || error,
    });
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
        LotFilingMapper: {
          include: {
            lotId: true,
            itemId: {
              include: {
                item: true
              }
            },
            filingId: true
          }
        }
      },
    });
    console.log(entries);

    const flatEntries = entries.map(entry => ({
      id: entry.id,
      createdAt: entry.createdAt,
      filing_person_id: entry.filing_person_id,
      casting_item_id: entry.casting_item_id,

      // Flattened related data
      filing_person_name: entry.filing_person?.name || '',
      casting_item_weight: entry.castingItem?.weight || 0,
      casting_item_type: entry.castingItem?.type || '',
      casting_item_purity: entry.castingItem?.item_purity || 0,
      casting_item_remarks: entry.castingItem?.remarks || '',
      item_name: entry.castingItem?.item?.name || '',

      filingItems: entry.filingItems,

      // Flattened LotFilingMapper array
      lotFilingMapper: entry.LotFilingMapper.map(mapper => ({
        lot_id: mapper.lot_id,
        lot_name: mapper.lotId?.lot_no || '',
        item_id: mapper.item_id,
        item_name: mapper.itemId?.item?.name || '',
        filing_id: mapper.filing_id,
        filing_person_name: mapper.filingId?.name || '',
      
      }))
    }));

    res.status(200).json(flatEntries);
  } catch (error) {
    console.error("Error fetching filing entries:", error);
    res.status(500).json({ error: error.message });
  }
};



export const getFilingEntryById = async (req, res) => {
  const { filing_id } = req.params;

  if (!filing_id) {
    return res.status(400).json({ error: "filing_id is required in params" });
  }

  try {
    const data = await prisma.lotFilingMapper.findMany({
      where: {
        filing_entry_id: parseInt(filing_id),
      },
      include: {
        filingId: true,  // AddFiling info
        lotId: true,     // LotInfo
        filingEntry: {
          include: {
            filing_person: true,
            castingItem: {
              include: {
                item: true, // <- AddItem details
                touch: true,
              }
            }
          }
        },
        itemId: {
          include: {
            item: true,   // <- this includes AddItem based on item_id
            touch: true,
            casting_customer: true,
            castingEntry: true
          }
        },
      },
    });

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching lot filing data:", error);
    res.status(500).json({ error: error.message });
  }
};


export const getFilingEntryByFilingId = async (req, res) => {
  try {
    const { filing_id } = req.params;
    console.log("Received filing_id:", filing_id);

    if (!filing_id) {
      return res.status(400).json({ error: "filing_id is required in params" });
    }

    const entries = await prisma.filingEntry.findMany({
      where: {
        LotFilingMapper: {
          some: {
            filing_id: parseInt(filing_id),
          }
        }
      },
      include: {
        castingItem: {
          include: {
            item: true,
          },
        },
        filing_person: true,
        filingItems: true,
        LotFilingMapper: {
          where: {
            filing_id: parseInt(filing_id),
          },
          include: {
            lotId: true,
            itemId: {
              include: {
                item: true,
              },
            },
            filingId: true,
          },
        },
      },
    });

    const groupedEntries = entries.map(entry => ({
      id: entry.id,
      createdAt: entry.createdAt,
      filing_person_id: entry.filing_person_id,
      casting_item_id: entry.casting_item_id,
      filing_person_name: entry.filing_person?.name || '',
      casting_item_weight: entry.castingItem?.weight || 0,
      casting_item_type: entry.castingItem?.type || '',
      casting_item_purity: entry.castingItem?.item_purity || 0,
      casting_item_remarks: entry.castingItem?.remarks || '',
      item_name: entry.castingItem?.item?.name || '',
      filingItems: entry.filingItems,
      lotFilingMapper: entry.LotFilingMapper.map(mapper => ({
        lot_id: mapper.lot_id,
        lot_name: mapper.lotId?.lot_no || '',
        item_id: mapper.item_id,
        item_name: mapper.itemId?.item?.name || '',
        filing_id: mapper.filing_id,
        filing_person_name: mapper.filingId?.name || '',
      }))
    }));

    res.status(200).json(groupedEntries);

  } catch (error) {
    console.error("Error fetching entries by filing_id:", error);
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

