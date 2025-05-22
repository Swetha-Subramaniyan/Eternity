import express from 'express';
import { createFiling,getFiling,updateFiling,deleteFiling } from '../Controllers/filingControllers.js';

const router = express.Router();

router.post("/", createFiling);
router.get("/", getFiling);
router.put("/:id", updateFiling);
router.delete("/:id", deleteFiling);



export default router;