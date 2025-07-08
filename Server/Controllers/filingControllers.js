import {PrismaClient} from '../generated/prisma/index.js';
const prisma = new PrismaClient();


export const createFiling = async(req,res) =>{
    try{
        const {name,email,address,phoneNumber} = req.body;
        const newCustomer = await prisma.addFiling.create({
            data: { name,email,address,phoneNumber }
        });
        res.status(201).json(newCustomer);

    } catch(error) {
        res.status(400).json(error)
    }
}

export const getFiling = async(req,res) =>{
    try{
        const customer = await prisma.addFiling.findMany();
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
      });
  
      if (!filing) {
        return res.status(404).json({ message: "Filing member not found" });
      }
  
      res.status(200).json(filing);
    } catch (error) {
      console.error("Error fetching filing by ID:", error);
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

export const deleteFiling = async (req,res) =>{
    const {id} = req.params;

    try{
        const deleted = await prisma.addFiling.delete({
            where: {id: Number(id)}
        })
        res.status(201).json(deleted)

    }catch(error){
        res.status(400).json(error)
    }

}