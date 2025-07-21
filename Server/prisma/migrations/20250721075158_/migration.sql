-- AlterTable
ALTER TABLE `lotinfo` ADD COLUMN `buffing_customer_id` INTEGER NULL,
    ADD COLUMN `setting_customer_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `LotInfo` ADD CONSTRAINT `LotInfo_setting_customer_id_fkey` FOREIGN KEY (`setting_customer_id`) REFERENCES `AddSetting`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LotInfo` ADD CONSTRAINT `LotInfo_buffing_customer_id_fkey` FOREIGN KEY (`buffing_customer_id`) REFERENCES `AddBuffing`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
