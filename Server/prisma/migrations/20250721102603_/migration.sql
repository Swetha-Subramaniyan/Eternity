-- DropForeignKey
ALTER TABLE `lotbuffingmapper` DROP FOREIGN KEY `LotBuffingMapper_buffing_id_fkey`;

-- DropForeignKey
ALTER TABLE `lotbuffingmapper` DROP FOREIGN KEY `LotBuffingMapper_lot_id_fkey`;

-- DropForeignKey
ALTER TABLE `lotfilingmapper` DROP FOREIGN KEY `LotFilingMapper_filing_id_fkey`;

-- DropForeignKey
ALTER TABLE `lotfilingmapper` DROP FOREIGN KEY `LotFilingMapper_lot_id_fkey`;

-- DropForeignKey
ALTER TABLE `lotinfo` DROP FOREIGN KEY `LotInfo_buffing_customer_id_fkey`;

-- DropForeignKey
ALTER TABLE `lotinfo` DROP FOREIGN KEY `LotInfo_filing_customer_id_fkey`;

-- DropForeignKey
ALTER TABLE `lotinfo` DROP FOREIGN KEY `LotInfo_setting_customer_id_fkey`;

-- DropForeignKey
ALTER TABLE `lotsettingmapper` DROP FOREIGN KEY `LotSettingMapper_lot_id_fkey`;

-- DropForeignKey
ALTER TABLE `lotsettingmapper` DROP FOREIGN KEY `LotSettingMapper_setting_id_fkey`;

-- DropIndex
DROP INDEX `LotBuffingMapper_buffing_id_fkey` ON `lotbuffingmapper`;

-- DropIndex
DROP INDEX `LotBuffingMapper_lot_id_fkey` ON `lotbuffingmapper`;

-- DropIndex
DROP INDEX `LotFilingMapper_filing_id_fkey` ON `lotfilingmapper`;

-- DropIndex
DROP INDEX `LotFilingMapper_lot_id_fkey` ON `lotfilingmapper`;

-- DropIndex
DROP INDEX `LotInfo_buffing_customer_id_fkey` ON `lotinfo`;

-- DropIndex
DROP INDEX `LotInfo_filing_customer_id_fkey` ON `lotinfo`;

-- DropIndex
DROP INDEX `LotInfo_setting_customer_id_fkey` ON `lotinfo`;

-- DropIndex
DROP INDEX `LotSettingMapper_lot_id_fkey` ON `lotsettingmapper`;

-- DropIndex
DROP INDEX `LotSettingMapper_setting_id_fkey` ON `lotsettingmapper`;

-- AddForeignKey
ALTER TABLE `LotInfo` ADD CONSTRAINT `LotInfo_filing_customer_id_fkey` FOREIGN KEY (`filing_customer_id`) REFERENCES `AddFiling`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LotInfo` ADD CONSTRAINT `LotInfo_setting_customer_id_fkey` FOREIGN KEY (`setting_customer_id`) REFERENCES `AddSetting`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LotInfo` ADD CONSTRAINT `LotInfo_buffing_customer_id_fkey` FOREIGN KEY (`buffing_customer_id`) REFERENCES `AddBuffing`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LotFilingMapper` ADD CONSTRAINT `LotFilingMapper_filing_id_fkey` FOREIGN KEY (`filing_id`) REFERENCES `AddFiling`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LotFilingMapper` ADD CONSTRAINT `LotFilingMapper_lot_id_fkey` FOREIGN KEY (`lot_id`) REFERENCES `LotInfo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LotSettingMapper` ADD CONSTRAINT `LotSettingMapper_setting_id_fkey` FOREIGN KEY (`setting_id`) REFERENCES `AddSetting`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LotSettingMapper` ADD CONSTRAINT `LotSettingMapper_lot_id_fkey` FOREIGN KEY (`lot_id`) REFERENCES `LotInfo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LotBuffingMapper` ADD CONSTRAINT `LotBuffingMapper_buffing_id_fkey` FOREIGN KEY (`buffing_id`) REFERENCES `AddBuffing`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LotBuffingMapper` ADD CONSTRAINT `LotBuffingMapper_lot_id_fkey` FOREIGN KEY (`lot_id`) REFERENCES `LotInfo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
