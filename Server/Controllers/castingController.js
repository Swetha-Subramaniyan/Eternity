import { PrismaClient } from '../generated/prisma/index.js'; 
const prisma = new PrismaClient();

// Create
export const createCasting = async (req, res) => {
  try {
    const { name, phoneNumber, address, email } = req.body;
    const newCasting = await prisma.addCasting.create({
      data: { name, phoneNumber, address, email },
    });
    res.status(201).json(newCasting);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all
export const getCastings = async (req, res) => {
  try {
    const castings = await prisma.addCasting.findMany();
    res.json(castings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
export const updateCasting = async (req, res) => {
  const { id } = req.params;
  const { name, phoneNumber, address, email } = req.body;
  try {
    const updated = await prisma.addCasting.update({
      where: { id: Number(id) },
      data: { name, phoneNumber, address, email },
    });
    res.json(updated);
  } catch (error) {
    res.status(404).json({ error: "Casting not found" });
  }
};

// Delete
export const deleteCasting = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.addCasting.delete({ where: { id: Number(id) } });
    res.json({ message: "Casting deleted" });
  } catch (error) {
    res.status(404).json({ error: "Casting not found" });
  }
};
