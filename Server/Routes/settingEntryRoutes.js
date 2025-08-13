import express from 'express';
import { createSettingEntry } from '../Controllers/settingEntryController.js';
const router = express.Router();


router.post("/", createSettingEntry);

export default router;

