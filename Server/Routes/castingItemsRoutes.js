import express from 'express';
import { updateCastingItems,createCastingItem,getAllCastingItems,getCastingItemById,deleteCastingItem, getAvailableCastingItems } from "../Controllers/castingItemsController.js";

const router = express.Router();

router.post("/", createCastingItem);            // Create
router.get("/", getAllCastingItems);            // Read All
router.get("/:id", getCastingItemById);         // Read by ID
router.put("/:id", updateCastingItems);         // Update
router.delete("/:id", deleteCastingItem);       // Delete

router.get('/castingitems/available', getAvailableCastingItems);

export default router;


// Post - http://localhost:5000/api/castingitems