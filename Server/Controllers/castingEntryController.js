import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

// CREATE Casting Entry
export const createCastingEntry = async (req, res) => {
  try {
    const {
      date,
      given_gold,
      given_touch,
      purity,
      final_touch,
      pure_value,
      copper,
      final_weight,
      casting_customer_id,
    } = req.body;

    const newEntry = await prisma.castingEntry.create({
      data: {
        given_gold: parseFloat(given_gold),
        given_touch: parseFloat(given_touch),
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
    console.log(newEntry)
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
      given_touch,
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
        given_touch: parseFloat(given_touch),
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
export const deleteCastingEntry = async (req, res) => {
  try {
    const { id } = req.params;

    // First, delete related items
    await prisma.castingItems.deleteMany({
      where: { casting_entry_id: parseInt(id) },
    });

    // Then, delete the casting entry
    await prisma.castingEntry.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: 'Casting entry and its items deleted successfully' });
  } catch (error) {
    console.error("Error deleting entry:", error);
    res.status(500).json({ error: 'Failed to delete casting entryyyy' });
  }
};
