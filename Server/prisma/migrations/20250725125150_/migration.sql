-- AlterTable
ALTER TABLE `filingitems` ADD COLUMN `lot_filing_mapper_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `FilingItems` ADD CONSTRAINT `FilingItems_lot_filing_mapper_id_fkey` FOREIGN KEY (`lot_filing_mapper_id`) REFERENCES `LotFilingMapper`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
