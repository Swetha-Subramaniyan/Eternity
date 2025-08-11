import express from "express";
import {
  createFilingItem,
  getAllFilingItems,
  getFilingItemById,
  deleteFilingItem
} from "../Controllers/filingItemsController.js"

const router = express.Router();

router.post("/", createFilingItem);
router.get("/", getAllFilingItems);
router.get("/:id", getFilingItemById);
router.delete("/:id", deleteFilingItem);

export default router;
