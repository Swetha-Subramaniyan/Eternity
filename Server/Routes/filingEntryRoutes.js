import express from "express";
import {
  createFilingEntry,
  getAllFilingEntries,
  getFilingEntryById,
  updateFilingEntry,
  deleteFilingEntry,
  getFilingEntriesByPersonId
} from "../Controllers/filingEntryController.js"

const router = express.Router();

router.post("/", createFilingEntry);
router.get("/", getAllFilingEntries);
router.get("/:id", getFilingEntryById);
router.put("/:id", updateFilingEntry);
router.delete("/:id", deleteFilingEntry);
router.get("/person/:filing_person_id", getFilingEntriesByPersonId);

export default router;
