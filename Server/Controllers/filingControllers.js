import {PrismaClient} from '../generated/prisma/index.js';
const prisma = new PrismaClient();

  export const createFiling = async (req, res) => {
    try {
      const { name, email, address, phoneNumber } = req.body;
  
      const newFiling = await prisma.addFiling.create({
        data: {
          name,
          email,
          address,
          phoneNumber,
        },
      });
  
      const newLot = await prisma.lotInfo.create({
        data: {
          lotNumber: 1, 
          filing_customer_id: newFiling.id,
        },
      });
  
      const newLotMapper = await prisma.lotFilingMapper.create({
        data: {
          filing_id: newFiling.id,
          lot_id: newLot.id,
        },
      });
  
      res.status(201).json({
        message: 'Filing, Lot, and Mapper created',
        filing: newFiling,
        lot: newLot,
        mapper: newLotMapper,
      });
  
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  
export const getFiling = async(req,res) =>{
    try{
        const customer = await prisma.addFiling.findMany(
            {
             include:{
                lotInfo:true,
                lotFilingMapper:true,
             }
            }
        );
        res.json(customer);

    } catch(error){
        res.status(400).json(error)
    }
}

export const getFilingById = async (req, res) => {
  const { id } = req.params;

  try {
    const filing = await prisma.addFiling.findUnique({
      where: { id: Number(id) },
      include: {
        lotInfo: true,
        lotFilingMapper: true
      }
    });

    if (!filing) {
      return res.status(404).json({ message: "Filing member not found" });
    }

    res.status(200).json(filing);
  } catch (error) {
    console.error(" Error in getFilingById:", error); 
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateFiling =async (req,res) =>{
    const {id} = req.params;
    const {name,email,phoneNumber,address} = req.body;

    try{
        const updated = await prisma.addFiling.update(
            {
                where:{id: Number(id)},
                data: {name,email,phoneNumber,address}
            }
        )
        res.status(201).json(updated);

    } catch(error){
        res.status(400).json(error);
    }
}

export const deleteFiling = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedFiling = await prisma.addFiling.delete({
        where: { id: Number(id) }
      });
  
      res.status(200).json(deletedFiling);
    } catch (error) {
      console.error("Error deleting filing:", error);
      res.status(400).json({ error: error.message });
    }
  };



  