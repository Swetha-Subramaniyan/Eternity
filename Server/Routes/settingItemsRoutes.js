import express from "express";
import { createSettingItem, deleteSettingItem, getAllSettingItems, getSettingItemById } from "../Controllers/settingItemsController.js";

const router = express.Router();

router.post("/", createSettingItem);
router.get("/",getAllSettingItems);
router.get("/:id", getSettingItemById)
router.delete("/:id",deleteSettingItem)

export default router;