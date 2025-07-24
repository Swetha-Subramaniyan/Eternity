/*
  Warnings:

  - You are about to drop the column `item_id` on the `buffingitems` table. All the data in the column will be lost.
  - You are about to drop the column `item_id` on the `filingitems` table. All the data in the column will be lost.
  - You are about to drop the column `item_id` on the `settingitems` table. All the data in the column will be lost.
  - Added the required column `buffing_item_id` to the `BuffingItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filing_item_id` to the `FilingItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `item_id` to the `LotFilingMapper` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filing_item_id` to the `LotSettingMapper` table without a default value. This is not possible if the table is not empty.
  - Added the required column `setting_item_id` to the `SettingItems` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `buffingitems` DROP FOREIGN KEY `BuffingItems_item_id_fkey`;

-- DropForeignKey
ALTER TABLE `filingitems` DROP FOREIGN KEY `FilingItems_item_id_fkey`;

-- DropForeignKey
ALTER TABLE `settingitems` DROP FOREIGN KEY `SettingItems_item_id_fkey`;

-- DropIndex
DROP INDEX `BuffingItems_item_id_fkey` ON `buffingitems`;

-- DropIndex
DROP INDEX `FilingItems_item_id_fkey` ON `filingitems`;

-- DropIndex
DROP INDEX `SettingItems_item_id_fkey` ON `settingitems`;

-- AlterTable
ALTER TABLE `buffingitems` DROP COLUMN `item_id`,
    ADD COLUMN `buffing_item_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `filingitems` DROP COLUMN `item_id`,
    ADD COLUMN `filing_item_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `lotbuffingmapper` ADD COLUMN `filing_item_id` INTEGER NULL,
    ADD COLUMN `setting_item_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `lotfilingmapper` ADD COLUMN `item_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `lotsettingmapper` ADD COLUMN `filing_item_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `settingitems` DROP COLUMN `item_id`,
    ADD COLUMN `setting_item_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `FilingItems` ADD CONSTRAINT `FilingItems_filing_item_id_fkey` FOREIGN KEY (`filing_item_id`) REFERENCES `AddItem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LotFilingMapper` ADD CONSTRAINT `LotFilingMapper_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `CastingItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SettingItems` ADD CONSTRAINT `SettingItems_setting_item_id_fkey` FOREIGN KEY (`setting_item_id`) REFERENCES `AddItem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LotSettingMapper` ADD CONSTRAINT `LotSettingMapper_filing_item_id_fkey` FOREIGN KEY (`filing_item_id`) REFERENCES `FilingItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BuffingItems` ADD CONSTRAINT `BuffingItems_buffing_item_id_fkey` FOREIGN KEY (`buffing_item_id`) REFERENCES `AddItem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LotBuffingMapper` ADD CONSTRAINT `LotBuffingMapper_setting_item_id_fkey` FOREIGN KEY (`setting_item_id`) REFERENCES `SettingItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LotBuffingMapper` ADD CONSTRAINT `LotBuffingMapper_filing_item_id_fkey` FOREIGN KEY (`filing_item_id`) REFERENCES `FilingItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
