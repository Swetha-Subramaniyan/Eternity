import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();


export const createBuffing = async (req, res) => {
  try {
    const { name, email, address, phoneNumber } = req.body;

    const newBuffing = await prisma.addBuffing.create({
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
        buffing_customer_id: newBuffing.id,
      },
    });

    const newLotMapper = await prisma.lotBuffingMapper.create({
      data: {
        buffing_id: newBuffing.id,
        lot_id: newLot.id,
      },
    });

    res.status(201).json({
      message: 'Buffing, Lot, and Mapper created',
      buffing: newBuffing,
      lot: newLot,
      mapper: newLotMapper,
    });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


export const getBuffing = async (req, res) => {
    try {
      const buffings = await prisma.addBuffing.findMany({
        include: {
          lotInfo: true, 
          buffingMapper: {
            include: {
              lotId: true, 
            },
          },
        },
      });
  
      res.json(buffings);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  export const getBuffingById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const buffing = await prisma.addBuffing.findUnique({
        where: { id: Number(id) },
        include: {
          lotInfo: true,
          buffingMapper: {
            include: {
              lotId: true 
            }
          },
        }
      });
  
      if (!buffing) {
        return res.status(404).json({ message: "Buffing member not found" });
      }
  
      res.status(200).json(buffing);
    } catch (error) {
      console.error("Error in getBuffingById:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
export const updateBuffing = async(req,res) =>{
    const {id} = req.params;
    const {name,email,address,phoneNumber} = req.body;
    try{
        const updated = await prisma.addBuffing.update(
            {
                where:{id: Number(id)},
                data:{name,email,address,phoneNumber}
            }
        )
        res.status(201).json(updated)

    }catch(error){
        res.status(400).json(error)
    }

}


export const deleteBuffing = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedBuffing = await prisma.addBuffing.delete({
        where: { id: Number(id) }
      });
  
      res.status(200).json(deletedBuffing);
    } catch (error) {
      console.error("Error deleting buffing:", error);
      res.status(400).json({ error: error.message });
    }
  };