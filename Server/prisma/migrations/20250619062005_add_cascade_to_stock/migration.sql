-- DropForeignKey
ALTER TABLE `stock` DROP FOREIGN KEY `Stock_casting_item_id_fkey`;

-- DropIndex
DROP INDEX `Stock_casting_item_id_fkey` ON `stock`;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_casting_item_id_fkey` FOREIGN KEY (`casting_item_id`) REFERENCES `CastingItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
