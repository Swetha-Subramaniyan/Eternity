import express from 'express';
import { createSettingEntry, getSettingEntriesByPersonId } from '../Controllers/settingEntryController.js';
const router = express.Router();


router.post("/", createSettingEntry);
router.get("/person/:setting_person_id", getSettingEntriesByPersonId);

export default router;

