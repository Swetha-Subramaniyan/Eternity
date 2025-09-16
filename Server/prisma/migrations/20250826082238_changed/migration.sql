-- DropForeignKey
ALTER TABLE `buffingentry` DROP FOREIGN KEY `BuffingEntry_casting_item_id_fkey`;

-- DropForeignKey
ALTER TABLE `settingentry` DROP FOREIGN KEY `SettingEntry_casting_item_id_fkey`;

-- DropIndex
DROP INDEX `BuffingEntry_casting_item_id_key` ON `buffingentry`;

-- DropIndex
DROP INDEX `SettingEntry_casting_item_id_key` ON `settingentry`;

-- AddForeignKey
ALTER TABLE `LotFilingMapper` ADD CONSTRAINT `LotFilingMapper_filing_id_fkey` FOREIGN KEY (`filing_id`) REFERENCES `AddFiling`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_touch_id_fkey` FOREIGN KEY (`touch_id`) REFERENCES `AddTouch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
