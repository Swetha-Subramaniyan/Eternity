import express from 'express';
import { createFilingEntry, getAllFilingEntry,getFilingEntryById,updateFilingEntry,deleteFilingEntry } from '../Controllers/filingEntryController.js';


const router = express.Router();

router.post("/", createFilingEntry);             // CREATE
router.get("/", getAllFilingEntry);              // READ ALL
router.get("/:id", getFilingEntryById);          // READ BY ID
router.put("/:id", updateFilingEntry);           // UPDATE
router.delete("/:id", deleteFilingEntry);        // DELETE

export default router;