-- CreateTable
CREATE TABLE `AddCustomer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AddCasting` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AddFiling` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AddSetting` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AddBuffing` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AddSupplierItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AddPurchaseStock` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,
    `item` ENUM('Gold', 'Silver') NOT NULL,
    `goldWeight` INTEGER NULL,
    `goldTouch` DOUBLE NULL,
    `goldPurity` DOUBLE NULL,
    `goldRate` DOUBLE NULL,
    `goldtotalValue` DOUBLE NULL,
    `silverWeight` INTEGER NULL,
    `silverTouch` DOUBLE NULL,
    `silverPurity` DOUBLE NULL,
    `silverRate` DOUBLE NULL,
    `silvertotalValue` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CustomerTransaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date` DATETIME(3) NOT NULL,
    `value` DOUBLE NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `touch` DOUBLE NULL,
    `purity` DOUBLE NULL,
    `goldRate` DOUBLE NULL,
    `customerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AddItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AddTouch` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `touch` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CastingEntry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date` DATETIME(3) NOT NULL,
    `given_gold` DOUBLE NOT NULL,
    `touch_id` INTEGER NOT NULL,
    `purity` DOUBLE NOT NULL,
    `final_touch` DOUBLE NOT NULL,
    `pure_value` DOUBLE NOT NULL,
    `copper` DOUBLE NOT NULL,
    `final_weight` DOUBLE NOT NULL,
    `casting_customer_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CastingItems` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `type` ENUM('Items', 'ScrapItems') NOT NULL,
    `item_id` INTEGER NOT NULL,
    `weight` DOUBLE NOT NULL,
    `touch_id` INTEGER NOT NULL,
    `item_purity` DOUBLE NOT NULL,
    `remarks` VARCHAR(191) NULL,
    `after_weight` DOUBLE NULL,
    `scrap_weight` DOUBLE NULL,
    `scrap_wastage` DOUBLE NULL,
    `casting_entry_id` INTEGER NOT NULL,
    `casting_customer_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FilingEntry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `filing_person_id` INTEGER NOT NULL,
    `casting_item_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FilingItems` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `type` ENUM('Items', 'ScrapItems') NOT NULL,
    `item_id` INTEGER NOT NULL,
    `weight` DOUBLE NOT NULL,
    `touch_id` INTEGER NOT NULL,
    `item_purity` DOUBLE NOT NULL,
    `remarks` VARCHAR(191) NULL,
    `wastage` BOOLEAN NULL,
    `stone_option` ENUM('WithStone', 'WithoutStone') NULL,
    `after_weight` DOUBLE NULL,
    `scrap_weight` DOUBLE NULL,
    `scrap_wastage` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FilingWastage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `wastage_percentage` INTEGER NOT NULL,
    `given_gold` INTEGER NULL,
    `add_wastage` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SettingEntry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `setting_person_id` INTEGER NOT NULL,
    `casting_item_id` INTEGER NOT NULL,

    UNIQUE INDEX `SettingEntry_casting_item_id_key`(`casting_item_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SettingItems` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `receipt_weight` DOUBLE NOT NULL,
    `stone_count` DOUBLE NOT NULL,
    `stone_weight` DOUBLE NOT NULL,
    `remarks` VARCHAR(191) NULL,
    `wastage` BOOLEAN NOT NULL,
    `type` ENUM('Items', 'ScrapItems') NOT NULL,
    `item_id` INTEGER NOT NULL,
    `scrap_weight` DOUBLE NOT NULL,
    `touch_id` INTEGER NOT NULL,
    `item_purity` DOUBLE NOT NULL,
    `scrap_remarks` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SettingWastage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `wastage_percentage` INTEGER NOT NULL,
    `given_gold` INTEGER NULL,
    `add_wastage` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BuffingEntry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `buffing_person_id` INTEGER NOT NULL,
    `casting_item_id` INTEGER NOT NULL,

    UNIQUE INDEX `BuffingEntry_casting_item_id_key`(`casting_item_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BuffingItems` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `receipt_weight` DOUBLE NOT NULL,
    `remarks` VARCHAR(191) NOT NULL,
    `wastage` BOOLEAN NOT NULL,
    `type` ENUM('Items', 'ScrapItems') NOT NULL,
    `item_id` INTEGER NOT NULL,
    `scrap_weight` DOUBLE NOT NULL,
    `touch_id` INTEGER NOT NULL,
    `item_purity` DOUBLE NOT NULL,
    `scrap_remarks` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Stock` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `casting_item_id` INTEGER NOT NULL,
    `filing_item_id` INTEGER NOT NULL,
    `setting_item_id` INTEGER NOT NULL,
    `buffing_item_id` INTEGER NOT NULL,
    `item_id` INTEGER NOT NULL,
    `weight` DOUBLE NOT NULL,
    `touch_id` INTEGER NOT NULL,
    `item_purity` DOUBLE NOT NULL,
    `remarks` VARCHAR(191) NULL,
    `scrap_weight` DOUBLE NULL,
    `scrap_wastage` DOUBLE NULL,
    `casting_customer_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FilingItemsToSettingEntry` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FilingItemsToSettingEntry_AB_unique`(`A`, `B`),
    INDEX `_FilingItemsToSettingEntry_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FilingItemsToFilingWastage` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FilingItemsToFilingWastage_AB_unique`(`A`, `B`),
    INDEX `_FilingItemsToFilingWastage_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_SettingItemsToSettingWastage` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_SettingItemsToSettingWastage_AB_unique`(`A`, `B`),
    INDEX `_SettingItemsToSettingWastage_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BuffingEntryToFilingItems` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BuffingEntryToFilingItems_AB_unique`(`A`, `B`),
    INDEX `_BuffingEntryToFilingItems_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BuffingEntryToSettingItems` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BuffingEntryToSettingItems_AB_unique`(`A`, `B`),
    INDEX `_BuffingEntryToSettingItems_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CustomerTransaction` ADD CONSTRAINT `CustomerTransaction_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `AddCustomer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CastingEntry` ADD CONSTRAINT `CastingEntry_touch_id_fkey` FOREIGN KEY (`touch_id`) REFERENCES `AddTouch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CastingEntry` ADD CONSTRAINT `CastingEntry_casting_customer_id_fkey` FOREIGN KEY (`casting_customer_id`) REFERENCES `AddCasting`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CastingItems` ADD CONSTRAINT `CastingItems_touch_id_fkey` FOREIGN KEY (`touch_id`) REFERENCES `AddTouch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CastingItems` ADD CONSTRAINT `CastingItems_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `AddItem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CastingItems` ADD CONSTRAINT `CastingItems_casting_entry_id_fkey` FOREIGN KEY (`casting_entry_id`) REFERENCES `CastingEntry`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CastingItems` ADD CONSTRAINT `CastingItems_casting_customer_id_fkey` FOREIGN KEY (`casting_customer_id`) REFERENCES `AddCasting`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FilingEntry` ADD CONSTRAINT `FilingEntry_filing_person_id_fkey` FOREIGN KEY (`filing_person_id`) REFERENCES `AddFiling`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FilingEntry` ADD CONSTRAINT `FilingEntry_casting_item_id_fkey` FOREIGN KEY (`casting_item_id`) REFERENCES `CastingItems`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FilingItems` ADD CONSTRAINT `FilingItems_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `AddItem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FilingItems` ADD CONSTRAINT `FilingItems_touch_id_fkey` FOREIGN KEY (`touch_id`) REFERENCES `AddTouch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SettingEntry` ADD CONSTRAINT `SettingEntry_setting_person_id_fkey` FOREIGN KEY (`setting_person_id`) REFERENCES `AddSetting`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SettingEntry` ADD CONSTRAINT `SettingEntry_casting_item_id_fkey` FOREIGN KEY (`casting_item_id`) REFERENCES `CastingItems`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SettingItems` ADD CONSTRAINT `SettingItems_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `AddItem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SettingItems` ADD CONSTRAINT `SettingItems_touch_id_fkey` FOREIGN KEY (`touch_id`) REFERENCES `AddTouch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BuffingEntry` ADD CONSTRAINT `BuffingEntry_buffing_person_id_fkey` FOREIGN KEY (`buffing_person_id`) REFERENCES `AddBuffing`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BuffingEntry` ADD CONSTRAINT `BuffingEntry_casting_item_id_fkey` FOREIGN KEY (`casting_item_id`) REFERENCES `CastingItems`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BuffingItems` ADD CONSTRAINT `BuffingItems_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `AddItem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BuffingItems` ADD CONSTRAINT `BuffingItems_touch_id_fkey` FOREIGN KEY (`touch_id`) REFERENCES `AddTouch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_casting_item_id_fkey` FOREIGN KEY (`casting_item_id`) REFERENCES `CastingItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_filing_item_id_fkey` FOREIGN KEY (`filing_item_id`) REFERENCES `FilingItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_setting_item_id_fkey` FOREIGN KEY (`setting_item_id`) REFERENCES `SettingItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_buffing_item_id_fkey` FOREIGN KEY (`buffing_item_id`) REFERENCES `BuffingItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `AddItem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_touch_id_fkey` FOREIGN KEY (`touch_id`) REFERENCES `AddTouch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_casting_customer_id_fkey` FOREIGN KEY (`casting_customer_id`) REFERENCES `AddCasting`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FilingItemsToSettingEntry` ADD CONSTRAINT `_FilingItemsToSettingEntry_A_fkey` FOREIGN KEY (`A`) REFERENCES `FilingItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FilingItemsToSettingEntry` ADD CONSTRAINT `_FilingItemsToSettingEntry_B_fkey` FOREIGN KEY (`B`) REFERENCES `SettingEntry`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FilingItemsToFilingWastage` ADD CONSTRAINT `_FilingItemsToFilingWastage_A_fkey` FOREIGN KEY (`A`) REFERENCES `FilingItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FilingItemsToFilingWastage` ADD CONSTRAINT `_FilingItemsToFilingWastage_B_fkey` FOREIGN KEY (`B`) REFERENCES `FilingWastage`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SettingItemsToSettingWastage` ADD CONSTRAINT `_SettingItemsToSettingWastage_A_fkey` FOREIGN KEY (`A`) REFERENCES `SettingItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SettingItemsToSettingWastage` ADD CONSTRAINT `_SettingItemsToSettingWastage_B_fkey` FOREIGN KEY (`B`) REFERENCES `SettingWastage`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BuffingEntryToFilingItems` ADD CONSTRAINT `_BuffingEntryToFilingItems_A_fkey` FOREIGN KEY (`A`) REFERENCES `BuffingEntry`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BuffingEntryToFilingItems` ADD CONSTRAINT `_BuffingEntryToFilingItems_B_fkey` FOREIGN KEY (`B`) REFERENCES `FilingItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BuffingEntryToSettingItems` ADD CONSTRAINT `_BuffingEntryToSettingItems_A_fkey` FOREIGN KEY (`A`) REFERENCES `BuffingEntry`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BuffingEntryToSettingItems` ADD CONSTRAINT `_BuffingEntryToSettingItems_B_fkey` FOREIGN KEY (`B`) REFERENCES `SettingItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
