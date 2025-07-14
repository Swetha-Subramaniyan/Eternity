import express from "express";
import {
  createFilingEntry,
  getAllFilingEntries,
  getFilingEntryById,
  updateFilingEntry,
  deleteFilingEntry
} from "../Controllers/filingEntryController.js"

const router = express.Router();

router.post("/", createFilingEntry);
router.get("/", getAllFilingEntries);
router.get("/:id", getFilingEntryById);
router.put("/:id", updateFilingEntry);
router.delete("/:id", deleteFilingEntry);

export default router;
