/*
  Warnings:

  - Added the required column `filing_entry_id` to the `BuffingEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `setting_entry_id` to the `BuffingEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `BuffingEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filing_entry_id` to the `SettingEntry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `addpurchasestock` ALTER COLUMN `createdAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `buffingentry` ADD COLUMN `filing_entry_id` INTEGER NOT NULL,
    ADD COLUMN `setting_entry_id` INTEGER NOT NULL,
    ADD COLUMN `type` ENUM('WithStone', 'WithoutStone') NOT NULL,
    ALTER COLUMN `createdAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `castingentry` ALTER COLUMN `createdAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `castingitems` ALTER COLUMN `createdAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `customertransaction` ALTER COLUMN `createdAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `filingentry` ALTER COLUMN `createdAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `settingentry` ADD COLUMN `filing_entry_id` INTEGER NOT NULL,
    ALTER COLUMN `createdAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `stock` ALTER COLUMN `createdAt` DROP DEFAULT;

-- AddForeignKey
ALTER TABLE `SettingEntry` ADD CONSTRAINT `SettingEntry_filing_entry_id_fkey` FOREIGN KEY (`filing_entry_id`) REFERENCES `FilingEntry`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BuffingEntry` ADD CONSTRAINT `BuffingEntry_setting_entry_id_fkey` FOREIGN KEY (`setting_entry_id`) REFERENCES `SettingEntry`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BuffingEntry` ADD CONSTRAINT `BuffingEntry_filing_entry_id_fkey` FOREIGN KEY (`filing_entry_id`) REFERENCES `FilingEntry`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
