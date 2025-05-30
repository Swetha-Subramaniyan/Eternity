-- CreateTable
CREATE TABLE `AddCasting` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `AddCasting_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AddItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CastingEntry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,
    `givenGold` DOUBLE NOT NULL,
    `givenTouch` DOUBLE NOT NULL,
    `purity` DOUBLE NOT NULL,
    `finalTouch` DOUBLE NOT NULL,
    `pureValue` DOUBLE NOT NULL,
    `copper` DOUBLE NOT NULL,
    `finalWeight` DOUBLE NOT NULL,
    `castingId` INTEGER NOT NULL,
    `itemId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CastingItems` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `type` ENUM('Items', 'ScrapItems') NOT NULL,
    `weight` DOUBLE NOT NULL,
    `touch` DOUBLE NOT NULL,
    `itemPurity` DOUBLE NOT NULL,
    `remarks` VARCHAR(191) NULL,
    `afterWeight` DOUBLE NULL,
    `scrapWeight` DOUBLE NULL,
    `scrapWastage` DOUBLE NULL,
    `castingEntryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CastingEntry` ADD CONSTRAINT `CastingEntry_castingId_fkey` FOREIGN KEY (`castingId`) REFERENCES `AddCasting`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CastingEntry` ADD CONSTRAINT `CastingEntry_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `AddItem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CastingItems` ADD CONSTRAINT `CastingItems_castingEntryId_fkey` FOREIGN KEY (`castingEntryId`) REFERENCES `CastingEntry`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
