// import { PrismaClient } from "../generated/prisma/index.js";
// const prisma = new PrismaClient();

// export const addToStock = async (req, res) => {
//   try {
//     const { casting_item_id } = req.body;

//     const newStock = await prisma.stock.create({
//       data: {
//         casting_item_id,
//         createdAt: new Date()
//       }
//     });

//     res.status(201).json(newStock);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// export const getAllStock = async (req, res) => {
//   try {
//     const stock = await prisma.stock.findMany({
//       include: { castingItem: true }
//     });
//     res.json(stock);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };



import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

// CREATE
export const addToStock = async (req, res) => {
  try {
    const { casting_item_id } = req.body;

    const newStock = await prisma.stock.create({
      data: {
        casting_item_id,
        createdAt: new Date()
      }
    });

    res.status(201).json(newStock);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// READ ALL
export const getAllStock = async (req, res) => {
  try {
    const stock = await prisma.stock.findMany({
      include: { castingItem: true }
    });
    res.status(200).json(stock);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// READ BY ID
export const getStockById = async (req, res) => {
  const { id } = req.params;
  try {
    const stock = await prisma.stock.findUnique({
      where: { id: Number(id) },
      include: { castingItem: true }
    });

    if (!stock) return res.status(404).json({ error: "Stock not found" });

    res.status(200).json(stock);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE
export const updateStock = async (req, res) => {
  const { id } = req.params;
  const { casting_item_id } = req.body;

  try {
    const updatedStock = await prisma.stock.update({
      where: { id: Number(id) },
      data: {
        casting_item_id
      }
    });

    res.status(200).json(updatedStock);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
export const deleteStock = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.stock.delete({
      where: { id: Number(id) }
    });

    res.status(200).json({ message: "Stock deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
