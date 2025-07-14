import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

// CREATE Casting Entry

export const createCastingEntry = async (req, res) => {
  try {
    const {
      date,
      given_gold,
      touch_id, 
      purity,
      final_touch,
      pure_value,
      copper,
      final_weight,
      casting_customer_id,
    } = req.body;

    //  Check if the given touch_id exists in AddTouch table
    const touchExists = await prisma.addTouch.findUnique({
      where: { id: parseInt(touch_id) }
    });

    if (!touchExists) {
      return res.status(400).json({ error: "Invalid touch_id: no such value exists in AddTouch table" });
    }

    const newEntry = await prisma.castingEntry.create({
      data: {
        given_gold: parseFloat(given_gold),
        touch_id: parseInt(touch_id), 
        purity: parseFloat(purity),
        final_touch: parseFloat(final_touch),
        pure_value: parseFloat(pure_value),
        copper: parseFloat(copper),
        final_weight: parseFloat(final_weight),
        casting_customer_id: parseInt(casting_customer_id),
        date: new Date(date)
      },
    });

    res.status(201).json({ message: 'Casting entry created successfully', data: newEntry });
    console.log(newEntry);
  } catch (error) {
    console.error("Error creating casting entry:", error);
    res.status(500).json({ error: 'Failed to create casting entry' });
  }
};


// Post - http://localhost:5000/api/castingentry



// GET ALL Casting Entries
export const getAllCastingEntry = async (req, res) => {
  try {
    const entries = await prisma.castingEntry.findMany({
      include: {
        items: true,
        casting_customer: true,
        touch:true
      },
    });
    res.status(200).json(entries);
    console.log(entries);
  } catch (error) {
    console.error("Error fetching entries:", error);
    res.status(500).json({ error: 'Failed to fetch entries' });
  }
};

// READ Casting Entry by ID
export const getCastingEntryById = async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await prisma.castingEntry.findUnique({
      where: { id: parseInt(id) },
      include: {
        items: true,
        casting_customer: true,
        touch:true
      },
    });

    if (!entry) {
      return res.status(404).json({ error: 'Casting entry not found' });
    }

    res.status(200).json(entry);
  } catch (error) {
    console.error("Error fetching entry:", error);
    res.status(500).json({ error: 'Failed to fetch entry' });
  }
};

// UPDATE Casting Entry
export const updateCastingEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      date,
      given_gold,
      touch_id,
      purity,
      final_touch,
      pure_value,
      copper,
      final_weight,
      casting_customer_id,
    } = req.body;

    const updatedEntry = await prisma.castingEntry.update({
      where: { id: parseInt(id) },
      data: {
        date: new Date(date),
        given_gold: parseFloat(given_gold),
        touch_id: parseFloat(touch_id),
        purity: parseFloat(purity),
        final_touch: parseFloat(final_touch),
        pure_value: parseFloat(pure_value),
        copper: parseFloat(copper),
        final_weight: parseFloat(final_weight),
        casting_customer_id: parseInt(casting_customer_id),
      },
    });
   console.log(updatedEntry);
    res.status(200).json({ message: 'Casting entry updated successfully', data: updatedEntry });
  } catch (error) {
    console.error("Error updating entry:", error);
    res.status(500).json({ error: 'Failed to update casting entry' });
  }
};



// DELETE Casting Entry
// export const deleteCastingEntry = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // First, delete related items
//     await prisma.castingItems.deleteMany({
//       where: { casting_entry_id: parseInt(id) },
//     });

//     // Then, delete the casting entry
//     await prisma.castingEntry.delete({
//       where: { id: parseInt(id) },
//     });

//     res.status(200).json({ message: 'Casting entry and its items deleted successfully' });
//   } catch (error) {
//     console.error("Error deleting entry:", error);
//     res.status(500).json({ error: 'Failed to delete casting entryyyy' });
//   }
// };



export const deleteCastingEntry = async (req, res) => {
  try {
    const { id } = req.params;

    // Get all casting items related to this casting entry
    const relatedCastingItems = await prisma.castingItems.findMany({
      where: { casting_entry_id: parseInt(id) },
    });

    // Loop through each casting item and delete dependent records
    for (const item of relatedCastingItems) {
      const castingItemId = item.id;

      // Delete FilingEntries
      await prisma.filingEntry.deleteMany({
        where: { casting_item_id: castingItemId },
      });

      // Delete SettingEntries
      await prisma.settingEntry.deleteMany({
        where: { casting_item_id: castingItemId },
      });

      // Delete BuffingEntries
      await prisma.buffingEntry.deleteMany({
        where: { casting_item_id: castingItemId },
      });

      // Delete Stock linked to this casting item
      await prisma.stock.deleteMany({
        where: { casting_item_id: castingItemId },
      });
    }

    // Now delete all casting items for this casting entry
    await prisma.castingItems.deleteMany({
      where: { casting_entry_id: parseInt(id) },
    });

    // Finally, delete the casting entry itself
    await prisma.castingEntry.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: 'Casting entry and all related items deleted successfully' });
  } catch (error) {
    console.error("Error deleting entry:", error);
    res.status(500).json({ error: 'Failed to delete casting entry' });
  }
};
