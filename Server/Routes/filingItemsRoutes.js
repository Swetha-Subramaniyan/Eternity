import express from "express";
import {
  createFilingItem,
  getAllFilingItems,
  getFilingItemById,
  updateFilingItem,
  deleteFilingItem,
  createFilingItemsBulk,
} from "../Controllers/filingItemsController.js"

const router = express.Router();

router.post("/", createFilingItem);
router.get("/", getAllFilingItems);
router.get("/:id", getFilingItemById);
router.put("/:id", updateFilingItem);
router.delete("/:id", deleteFilingItem);
router.post('/bulk', createFilingItemsBulk);


export default router;
