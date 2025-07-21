-- DropForeignKey
ALTER TABLE `lotinfo` DROP FOREIGN KEY `LotInfo_lot_customer_id_fkey`;

-- DropIndex
DROP INDEX `LotInfo_lot_customer_id_fkey` ON `lotinfo`;

-- AlterTable
ALTER TABLE `lotinfo` MODIFY `lot_customer_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `LotInfo` ADD CONSTRAINT `LotInfo_lot_customer_id_fkey` FOREIGN KEY (`lot_customer_id`) REFERENCES `AddFiling`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
