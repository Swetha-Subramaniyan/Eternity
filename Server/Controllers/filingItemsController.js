// app.use("/api/filingitems",filingItemsRoutes);

import { PrismaClient } from "../generated/prisma/index.js";
const prisma =new PrismaClient();


export const createFilingItem = async (req, res) => {
  try {
    const {
      filing_entry_id,
      type,
      filing_item_id,
      weight,
      touch_id,
      item_purity,
      remarks,
      wastage,
      stone_option,
      after_weight,
      scrap_weight,
      scrap_wastage,
      lot_filing_mapper_id, 
    } = req.body;

    if (!filing_entry_id || !type || !weight || !touch_id || !item_purity) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (type !== "ScrapItems" && !filing_item_id) {
      return res.status(400).json({ message: "filing_item_id is required for non-scrap items" });
    }

    const wastageBool = wastage === "Yes" ? true : false;

    //  Create FilingItem with optional lot_filing_mapper_id
    const filingItem = await prisma.filingItems.create({
      data: {
        filing_entry_id: parseInt(filing_entry_id),
        type,
        filing_item_id: filing_item_id ? parseInt(filing_item_id) : null,
        weight: parseFloat(weight),
        touch_id: parseInt(touch_id),
        item_purity: parseFloat(item_purity),
        remarks,
        wastage: wastageBool,
        stone_option,
        after_weight: after_weight ? parseFloat(after_weight) : null,
        scrap_weight: scrap_weight ? parseFloat(scrap_weight) : null,
        scrap_wastage: scrap_wastage ? parseFloat(scrap_wastage) : null,
        lot_filing_mapper_id: lot_filing_mapper_id ? parseInt(lot_filing_mapper_id) : null,
      },
    });

    //  If ScrapItem, also post to stock
    if (type === "ScrapItems") {
      const filingEntry = await prisma.filingEntry.findUnique({
        where: { id: parseInt(filing_entry_id) },
        include: {
          castingItem: true,
        },
      });

      if (!filingEntry) {
        return res.status(404).json({ message: "Filing entry not found" });
      }

      await prisma.stock.create({
        data: {
          filing_item_id: filingItem.id,
          item_id: filing_item_id ? parseInt(filing_item_id) : null,
          weight: parseFloat(weight),
          touch_id: parseInt(touch_id),
          item_purity: parseFloat(item_purity),
          remarks,
          scrap_wastage: scrap_wastage ? parseFloat(scrap_wastage) : null,
          casting_customer_id: filingEntry.castingItem.casting_customer_id,
        },
      });
    }

    res.status(201).json({ message: "Filing item created successfully", filingItem });
  } catch (error) {
    console.error("Error creating filing item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


// export const createFilingItem = async (req, res) => {
//   try {
//     const {
//       filing_entry_id,
//       type,
//       filing_item_id,
//       weight,
//       touch_id,
//       item_purity,
//       remarks,
//       wastage,
//       stone_option,
//       after_weight,
//       scrap_weight,
//       scrap_wastage,
//       lot_filing_mapper_id,
//     } = req.body;

//     if (!filing_entry_id || !type || !weight || !touch_id || !item_purity) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }
    
//     if (type !== "ScrapItems" && !filing_item_id) {
//       return res.status(400).json({ message: "filing_item_id is required for non-scrap items" });
//     }
    
//     const wastageBool = wastage === "Yes" ? true : false;

//     const filingItem = await prisma.filingItems.create({
//       data: {
//         filing_entry_id,
//         type,
//         filing_item_id,
//         weight,
//         touch_id,
//         item_purity,
//         remarks,
//         wastage: wastageBool,
//         stone_option,
//         after_weight,
//         scrap_weight,
//         scrap_wastage,
//         lot_filing_mapper_id: lot_filing_mapper_id ? parseInt(lot_filing_mapper_id) : null,
//       },
//     });


//     if (type === "ScrapItems") {
  
//       const filingEntry = await prisma.filingEntry.findUnique({
//         where: { id: filing_entry_id },
//         include: {
//           castingItem: true,
//         },
//       });

//       if (!filingEntry) {
//         return res.status(404).json({ message: "Filing entry not found" });
//       }

//       await prisma.stock.create({
//         data: {
//           filing_item_id: parseInt(filingItem.id),
//           item_id: filing_item_id,
//           weight,
//           touch_id,
//           item_purity,
//           remarks,
//           scrap_wastage,
//           casting_customer_id: filingEntry.castingItem.casting_customer_id,
//         },
//       });
//     }

//     res.status(201).json({ message: "Filing item created successfully", filingItem });
//   } catch (error) {
//     console.error("Error creating filing item:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

  export const getAllFilingItems = async (req, res) => {
    try {
      const items = await prisma.filingItems.findMany({
        include: {      
          touch: true,        
          filing_entry: true, 
        },
      });
      res.status(200).json(items);
    } catch (error) {
      console.error("Error fetching filing items:", error);
      res.status(500).json({ message: "Failed to fetch filing items" });
    }
  };
  
  


  export const getFilingItemById = async (req, res) => {
    try {
      const { id } = req.params;
  
      const item = await prisma.filingItems.findUnique({
        where: { id: parseInt(id) },
        include: {       
          touch: true,
          stock: true,
          setting_entry: true,
          buffing_entry: true,
          filing_wastage: true,
          filing_entry: true,
        },
      });
  
      if (!item) return res.status(404).json({ error: "Filing item not found" });
  
      res.json(item);
    } catch (error) {
      console.error("Error fetching filing item:", error);
      res.status(500).json({ error: "Failed to fetch filing item" });
    }
  };
  


  export const updateFilingItem = async (req, res) => {
    const { id } = req.params;
    const {
      type,
      filing_item_id,
      weight,
      touch_id,
      item_purity,
      remarks,
      wastage,
      stone_option,
      after_weight,
      scrap_weight,
      scrap_wastage,
    } = req.body;
  
    try {
      const existingItem = await prisma.filingItems.findUnique({ where: { id: Number(id) } });
  
      if (!existingItem) {
        return res.status(404).json({ message: "Filing item not found" });
      }
  
      const updatedItem = await prisma.filingItems.update({
        where: { id: Number(id) },
        data: {
          type,
          filing_item_id,
          weight,
          touch_id,
          item_purity,
          remarks,
          wastage: wastage === "Yes" ? true : false,
          stone_option,
          after_weight,
          scrap_weight,
          scrap_wastage,
        },
      });
  
      res.status(200).json({ message: "Filing item updated", updatedItem });
    } catch (error) {
      console.error("Error updating filing item:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  

  
  export const deleteFilingItem = async (req, res) => {
    const { id } = req.params;
  
    try {
      const existingItem = await prisma.filingItems.findUnique({ where: { id: Number(id) } });
  
      if (!existingItem) {
        return res.status(404).json({ message: "Filing item not found" });
      }
  
      await prisma.filingItems.delete({ where: { id: Number(id) } });
  
      res.status(200).json({ message: "Filing item deleted successfully" });
    } catch (error) {
      console.error("Error deleting filing item:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  




  