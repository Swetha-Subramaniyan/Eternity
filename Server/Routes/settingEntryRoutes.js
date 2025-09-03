import express from 'express';
import { createSettingEntry, getAllLotSettingMapperWithItems, getLotSettingMapperWithItems, getSettingEntriesByPersonId } from '../Controllers/settingEntryController.js';
const router = express.Router();


router.post("/", createSettingEntry);
router.get("/person/:setting_person_id", getSettingEntriesByPersonId);
router.get('/lotsettingmapper/:id',getLotSettingMapperWithItems);
router.get("/lotsettingmapper", getAllLotSettingMapperWithItems);

export default router;




