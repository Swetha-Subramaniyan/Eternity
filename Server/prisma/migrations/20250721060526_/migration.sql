-- CreateTable
CREATE TABLE `LotInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lotNumber` INTEGER NOT NULL,
    `lot_customer_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LotFilingMapper` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `filing_id` INTEGER NOT NULL,
    `lot_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LotSettingMapper` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `setting_id` INTEGER NOT NULL,
    `lot_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LotBuffingMapper` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `buffing_id` INTEGER NOT NULL,
    `lot_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LotInfo` ADD CONSTRAINT `LotInfo_lot_customer_id_fkey` FOREIGN KEY (`lot_customer_id`) REFERENCES `AddFiling`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LotFilingMapper` ADD CONSTRAINT `LotFilingMapper_filing_id_fkey` FOREIGN KEY (`filing_id`) REFERENCES `AddFiling`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LotFilingMapper` ADD CONSTRAINT `LotFilingMapper_lot_id_fkey` FOREIGN KEY (`lot_id`) REFERENCES `LotInfo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LotSettingMapper` ADD CONSTRAINT `LotSettingMapper_setting_id_fkey` FOREIGN KEY (`setting_id`) REFERENCES `AddSetting`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LotSettingMapper` ADD CONSTRAINT `LotSettingMapper_lot_id_fkey` FOREIGN KEY (`lot_id`) REFERENCES `LotInfo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LotBuffingMapper` ADD CONSTRAINT `LotBuffingMapper_buffing_id_fkey` FOREIGN KEY (`buffing_id`) REFERENCES `AddBuffing`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LotBuffingMapper` ADD CONSTRAINT `LotBuffingMapper_lot_id_fkey` FOREIGN KEY (`lot_id`) REFERENCES `LotInfo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
