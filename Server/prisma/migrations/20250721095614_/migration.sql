/*
  Warnings:

  - You are about to drop the column `lot_customer_id` on the `lotinfo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `lotinfo` DROP FOREIGN KEY `LotInfo_lot_customer_id_fkey`;

-- DropIndex
DROP INDEX `LotInfo_lot_customer_id_fkey` ON `lotinfo`;

-- AlterTable
ALTER TABLE `lotinfo` DROP COLUMN `lot_customer_id`,
    ADD COLUMN `filing_customer_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `LotInfo` ADD CONSTRAINT `LotInfo_filing_customer_id_fkey` FOREIGN KEY (`filing_customer_id`) REFERENCES `AddFiling`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
