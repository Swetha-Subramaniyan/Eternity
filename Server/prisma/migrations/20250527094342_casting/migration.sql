/*
  Warnings:

  - Added the required column `afterWeight` to the `Casting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wastage` to the `Casting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `casting` ADD COLUMN `afterWeight` DOUBLE NOT NULL,
    ADD COLUMN `wastage` DOUBLE NOT NULL;

-- CreateTable
CREATE TABLE `CastingItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `castingId` INTEGER NOT NULL,
    `item` VARCHAR(191) NOT NULL,
    `weight` DOUBLE NOT NULL,
    `touch` DOUBLE NOT NULL,
    `purity` DOUBLE NOT NULL,
    `remarks` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CastingScrapItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `castingId` INTEGER NOT NULL,
    `item` VARCHAR(191) NOT NULL,
    `weight` DOUBLE NOT NULL,
    `touch` DOUBLE NOT NULL,
    `purity` DOUBLE NOT NULL,
    `remarks` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CastingToCastingScrapItem` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CastingToCastingScrapItem_AB_unique`(`A`, `B`),
    INDEX `_CastingToCastingScrapItem_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CastingItem` ADD CONSTRAINT `CastingItem_castingId_fkey` FOREIGN KEY (`castingId`) REFERENCES `Casting`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CastingScrapItem` ADD CONSTRAINT `CastingScrapItem_castingId_fkey` FOREIGN KEY (`castingId`) REFERENCES `CastingItem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CastingToCastingScrapItem` ADD CONSTRAINT `_CastingToCastingScrapItem_A_fkey` FOREIGN KEY (`A`) REFERENCES `Casting`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CastingToCastingScrapItem` ADD CONSTRAINT `_CastingToCastingScrapItem_B_fkey` FOREIGN KEY (`B`) REFERENCES `CastingScrapItem`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
