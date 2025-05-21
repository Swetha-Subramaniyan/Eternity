import express from 'express';
import { getCastings,createCasting,updateCasting,deleteCasting } from '../Controllers/castingController.js';


const router = express.Router();

router.get("/", getCastings)
router.post("/", createCasting)
router.put ("/:id", updateCasting)
router.delete("/:id",deleteCasting)


export default router;