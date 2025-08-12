/*
  Warnings:

  - Added the required column `setting_entry_id` to the `LotSettingMapper` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lotsettingmapper` ADD COLUMN `setting_entry_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `LotSettingMapper` ADD CONSTRAINT `LotSettingMapper_setting_entry_id_fkey` FOREIGN KEY (`setting_entry_id`) REFERENCES `SettingEntry`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
