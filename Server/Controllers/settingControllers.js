import {PrismaClient} from "../generated/prisma/index.js";
const prisma = new PrismaClient();

export const createSetting = async (req,res) =>{
    try{
const {name,email,phoneNumber,address} = req.body;
const newCustomer = await prisma.addSetting.create(
    {
        data: {name,email,phoneNumber,address}
    }
)
res.status(201).json(newCustomer)

    }catch(error){
        res.status(400).json(error)
    }

}


export const getSetting = async (req,res)=>{  
    try{
    const customer = await prisma.addSetting.findMany()
    res.json(customer)
    }catch(error){
        res.status(400).json(error)
    }
}

export const getSettingById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const setting = await prisma.addSetting.findUnique({
        where: { id: Number(id) },
      });
  
      if (!setting) {
        return res.status(404).json({ message: "Setting member not found" });
      }
  
      res.status(200).json(setting);
    } catch (error) {
      console.error("Error fetching setting by ID:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

export const updateSetting = async (req,res) =>{

    const {id} = req.params;
    const {name,email,phoneNumber,address} =req.body
    try{
        const updated = await prisma.addSetting.update({
            where:{id:Number(id)},
            data:{name,email,phoneNumber,address}

        })
        res. status(201).json(updated)

    }catch(error){
        res.status(400).json(error)
    }
}

export const deleteSetting = async( req,res)=>{
const {id} = req.params;
    try{
        const deleted = await prisma.addSetting.delete(
            {
                where: {id:Number(id)},
             
            }
        )
        res.status(201).json(deleted)

    }catch(error){
        res.status(400).json(error)
    }

}

