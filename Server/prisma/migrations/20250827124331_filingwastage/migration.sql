/*
  Warnings:

  - You are about to drop the column `filing_entry_id` on the `filingwastage` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `filingwastage` DROP FOREIGN KEY `FilingWastage_filing_entry_id_fkey`;

-- DropIndex
DROP INDEX `FilingWastage_filing_entry_id_fkey` ON `filingwastage`;

-- AlterTable
ALTER TABLE `filingwastage` DROP COLUMN `filing_entry_id`,
    ADD COLUMN `filing_lot_id` INTEGER NULL,
    ADD COLUMN `filing_person_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `FilingWastage` ADD CONSTRAINT `FilingWastage_filing_person_id_fkey` FOREIGN KEY (`filing_person_id`) REFERENCES `AddFiling`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FilingWastage` ADD CONSTRAINT `FilingWastage_filing_lot_id_fkey` FOREIGN KEY (`filing_lot_id`) REFERENCES `LotInfo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
