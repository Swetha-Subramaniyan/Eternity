import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

export const addToStock = async (req, res) => {
  try {
    const { casting_item_id } = req.body;

    // Step 1: Get the casting item by ID
    const castingItem = await prisma.castingItems.findUnique({
      where: { id: Number(casting_item_id) },
      include: { item: true, castingEntry: true },
    });

    if (!castingItem) {
      return res.status(404).json({ error: "Casting item not found" });
    }

    if (castingItem.type !== "ScrapItems") {
      return res
        .status(400)
        .json({ error: "Only ScrapItems can be added to stock" });
    }

    const casting_customer_id = castingItem.castingEntry.casting_customer_id;

    // Step 2: Create Stock from casting item data
    const newStock = await prisma.stock.create({
      data: {
        casting_item_id: castingItem.id,
        item_id: castingItem.item_id,
        weight: castingItem.weight,
        touch_id: castingItem.touch_id,

        purity: castingItem.item_purity,
        remarks: castingItem.remarks,
        scrap_weight: castingItem.scrap_weight,
        scrap_wastage: castingItem.scrap_wastage,
        createdAt: new Date(),
        casting_customer_id: casting_customer_id,
      },
    });

    res.status(201).json(newStock);
  } catch (error) {
    console.error("Stock creation error:", error);
    res.status(400).json({ error: error.message });
  }
};

export const getAllStock = async (req, res) => {
  try {
    const stock = await prisma.stock.findMany({
      include: {
        // Purchase details
        purchaseId: {
          include: {
            SupplierId: true,
            TouchId: true,
          },
        },
        item: true,
        touch: true,

        // Casting flow
        castingItem: {
          include: {
            castingEntry: {
              include: {
                casting_customer: true,
              },
            },
          },
        },

        // Filing flow
        filingItem: {
          include: {
            filing_entry: {
              include: {
                filing_person: true,
              },
            },
          },
        },

        // Setting flow
        settingItem: {
          include: {
            settingEntryId: {
              include: {
                setting_person: true,
              },
            },
          },
        },

        // Buffing flow
        buffingItem: {
          include: {
            buffingEntryId: {
              include: {
                buffing_person: true,
              },
            },
          },
        },
      },
    });

    res.status(200).json(stock);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const reduceStock = async (items) => {
  try {
    console.log("Items to reduce from stock:", items);

    const purityByTouch = {};

    items.forEach((item) => {
      const { touch_id, item_purity, weight } = item;
      const totalPurity = item_purity;

      if (!purityByTouch[touch_id]) {
        purityByTouch[touch_id] = 0;
      }
      purityByTouch[touch_id] += totalPurity;
    });

    console.log("Purity to reduce by touch:", purityByTouch);

    for (const [touch_id, totalPurityToReduce] of Object.entries(
      purityByTouch
    )) {
      const availableStock = await prisma.stock.findMany({
        where: {
          touch_id: parseInt(touch_id),
          item_purity: {
            gt: 0,
          },
        },
        orderBy: {
          createdAt: "asc", 
        },
      });

      const totalAvailablePurity = availableStock.reduce(
        (sum, item) => sum + item.item_purity,
        0
      );

      if (totalAvailablePurity < totalPurityToReduce) {
        throw new Error(
          `Insufficient stock for touch ${touch_id}. Needed: ${totalPurityToReduce}, Available: ${totalAvailablePurity}`
        );
      }

      let remainingPurityToReduce = totalPurityToReduce;

      for (const stockItem of availableStock) {
        if (remainingPurityToReduce <= 0) break;

        if (stockItem.item_purity >= remainingPurityToReduce) {
          await prisma.stock.update({
            where: { id: stockItem.id },
            data: {
              item_purity: stockItem.item_purity - remainingPurityToReduce,
            },
          });
          remainingPurityToReduce = 0;
        } else {
          await prisma.stock.update({
            where: { id: stockItem.id },
            data: {
              item_purity: 0,
            },
          });
          remainingPurityToReduce -= stockItem.item_purity;
        }
      }
    }

    return { success: true };
  } catch (error) {
    console.error("Error reducing stock:", error);
    throw error;
  }
};

export const increaseStock = async (item) => {
  try {
    console.log("Increasing stock for item:", item);

    const existingStock = await prisma.stock.findFirst({
      where: {
        touch_id: item.touch_id,
      },
      orderBy: {
        createdAt: 'desc', 
      },
    });

    console.log("Existing stock found:", existingStock);

    if (existingStock) {
      await prisma.stock.update({
        where: { id: existingStock.id },
        data: {
          item_purity: existingStock.item_purity + item.item_purity,
          weight: existingStock.weight + item.weight,
        },
      });
    } else {
      await prisma.stock.create({
        data: {
          item_id: item.item_id,
          touch_id: item.touch_id,
          item_purity: item.item_purity,
          weight: item.weight,
          remarks: item.remarks,
          casting_customer_id: item.casting_customer_id,
        },
      });
    }

    return { success: true };
  } catch (error) {
    console.error("Error increasing stock:", error);
    throw error;
  }
};

// READ BY ID
export const getStockById = async (req, res) => {
  const { id } = req.params;
  try {
    const stock = await prisma.stock.findUnique({
      where: { id: Number(id) },
      include: { castingItem: true },
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
        casting_item_id,
      },
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
      where: { id: Number(id) },
    });

    res.status(200).json({ message: "Stock deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
