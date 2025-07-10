-- CreateTable
CREATE TABLE `BuffingWastage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `wastage_percentage` INTEGER NOT NULL,
    `given_gold` INTEGER NULL,
    `add_wastage` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BuffingItemsToBuffingWastage` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BuffingItemsToBuffingWastage_AB_unique`(`A`, `B`),
    INDEX `_BuffingItemsToBuffingWastage_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_BuffingItemsToBuffingWastage` ADD CONSTRAINT `_BuffingItemsToBuffingWastage_A_fkey` FOREIGN KEY (`A`) REFERENCES `BuffingItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BuffingItemsToBuffingWastage` ADD CONSTRAINT `_BuffingItemsToBuffingWastage_B_fkey` FOREIGN KEY (`B`) REFERENCES `BuffingWastage`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
