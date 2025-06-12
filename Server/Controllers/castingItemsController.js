// import { PrismaClient } from "../generated/prisma/index.js";
// const prisma = new PrismaClient();


// export const updateCastingItems = async(req,res) =>{
//     const {id} = req.params;
//     const { weight,touch,item_purity,remarks,after_weight,scrap_weight,scrap_wastage} = req.body;
//     try{
//         const updatedItems = await prisma.castingItems.update({
//             where:{id:Number(id)},
//             data:{
//                 weight,
//                 touch,
//                 item_purity,
//                 remarks,
//                 after_weight,
//                 scrap_weight,
//                 scrap_wastage
//             }
//         })
//         res.status(201).json(updatedItems)
//     }catch(error){
//         res.status(400).json({error:error.message } )
//     }
      
// }






import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

// CREATE
export const createCastingItem = async (req, res) => {
  const {
    weight,
    touch,
    item_purity,
    remarks,
    after_weight,
    scrap_weight,
    scrap_wastage,
    castingEntryId,
    item_id,
    type
  } = req.body;

  try {
    const newItem = await prisma.castingItems.create({
      data: {
        weight,
        touch,
        item_purity,
        remarks,
        after_weight,
        scrap_weight,
        scrap_wastage,
        // castingEntryId: Number(castingEntryId),
        item_id,
        type,
        createdAt: new Date(),
        casting_entry_id: Number(castingEntryId),
        
      },
    });
    console.log('Created casting Item ',newItem);
    res.status(201).json(newItem);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message });
  }
};

// GET (all)
export const getAllCastingItems = async (req, res) => {
  try {
    const items = await prisma.castingItems.findMany();
    console.log('All casting Items',items);
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ (by ID)
export const getCastingItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await prisma.castingItems.findUnique({
      where: { id: Number(id) },
    });
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
export const updateCastingItems = async (req, res) => {
  const { id } = req.params;
  const {
    weight,
    touch,
    item_purity,
    remarks,
    after_weight,
    scrap_weight,
    scrap_wastage,
  } = req.body;

  try {
    const updatedItem = await prisma.castingItems.update({
      where: { id: Number(id) },
      data: {
        weight,
        touch,
        item_purity,
        remarks,
        after_weight,
        scrap_weight,
        scrap_wastage,
      },
    });
    console.log('Updated Casting Items',updatedItem)
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
export const deleteCastingItem = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.castingItems.delete({
      where: { id: Number(id) },
    });
    res.status(200).json({ message: "Casting item deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
