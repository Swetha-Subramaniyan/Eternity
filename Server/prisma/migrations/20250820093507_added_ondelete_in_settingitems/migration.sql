-- DropForeignKey
ALTER TABLE `settingitems` DROP FOREIGN KEY `SettingItems_setting_entry_id_fkey`;

-- DropIndex
DROP INDEX `SettingItems_setting_entry_id_fkey` ON `settingitems`;

-- AddForeignKey
ALTER TABLE `SettingItems` ADD CONSTRAINT `SettingItems_setting_entry_id_fkey` FOREIGN KEY (`setting_entry_id`) REFERENCES `SettingEntry`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
