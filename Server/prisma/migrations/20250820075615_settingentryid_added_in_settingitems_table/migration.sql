/*
  Warnings:

  - Added the required column `setting_entry_id` to the `SettingItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `settingitems` ADD COLUMN `setting_entry_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `SettingItems` ADD CONSTRAINT `SettingItems_setting_entry_id_fkey` FOREIGN KEY (`setting_entry_id`) REFERENCES `SettingEntry`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
