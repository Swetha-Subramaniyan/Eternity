/*
  Warnings:

  - Added the required column `casting_item_id` to the `BuffingEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `casting_item_id` to the `SettingEntry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `buffingentry` ADD COLUMN `casting_item_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `settingentry` ADD COLUMN `casting_item_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `SettingEntry` ADD CONSTRAINT `SettingEntry_casting_item_id_fkey` FOREIGN KEY (`casting_item_id`) REFERENCES `CastingItems`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BuffingEntry` ADD CONSTRAINT `BuffingEntry_casting_item_id_fkey` FOREIGN KEY (`casting_item_id`) REFERENCES `CastingItems`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
