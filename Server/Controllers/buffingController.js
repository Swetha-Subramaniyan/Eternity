import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();


export const createBuffing = async(req,res)=>{

    try{
        const {name,email,phoneNumber,address} = req.body;
        const newCustomer = await prisma.addBuffing.create(
            {
                data: {name,email,phoneNumber,address}
            }
        )
        res.status(201).json(newCustomer)

    }catch(error){
        res.status(400).json(error)
    }

}


export const getBuffing = async (req,res)=>{

    try{

        const buffing = await prisma.addBuffing.findMany();
        res.status(201).json(buffing)


    }catch(error){
        res.status(400).json(error)
    }

}


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

export const deleteBuffing = async (req,res) =>{
    const {id} = req.params;

    try{
        const deleted = await prisma.addBuffing.delete({
            where :{id:Number(id)}
        })
        res.status(201).json(deleted)

    }catch(error){
        res.status(400).json(error)
    }

}