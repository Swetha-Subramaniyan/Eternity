import express from 'express';
import { createAddItems,getAddItems,updateAddItems,deleteAddItems } from '../Controllers/additemControllers.js';

const router = express.Router();

router.post ("/",createAddItems);
router.get ("/", getAddItems);
router.put("/:id",updateAddItems);
router.delete("/:id",deleteAddItems)


export default router;