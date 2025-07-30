/*
  Warnings:

  - Added the required column `filing_entry_id` to the `LotFilingMapper` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lotfilingmapper` ADD COLUMN `filing_entry_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `LotFilingMapper` ADD CONSTRAINT `LotFilingMapper_filing_entry_id_fkey` FOREIGN KEY (`filing_entry_id`) REFERENCES `FilingEntry`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
