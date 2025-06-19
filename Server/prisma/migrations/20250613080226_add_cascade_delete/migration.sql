-- DropForeignKey
ALTER TABLE `castingitems` DROP FOREIGN KEY `CastingItems_casting_entry_id_fkey`;

-- DropIndex
DROP INDEX `CastingItems_casting_entry_id_fkey` ON `castingitems`;

-- AddForeignKey
ALTER TABLE `CastingItems` ADD CONSTRAINT `CastingItems_casting_entry_id_fkey` FOREIGN KEY (`casting_entry_id`) REFERENCES `CastingEntry`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
