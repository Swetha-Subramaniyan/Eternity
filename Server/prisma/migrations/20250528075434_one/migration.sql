/*
  Warnings:

  - You are about to drop the column `name` on the `additem` table. All the data in the column will be lost.
  - You are about to drop the `_castingtocastingscrapitem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `casting` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `castingitem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `castingscrapitem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `item` to the `AddItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_castingtocastingscrapitem` DROP FOREIGN KEY `_CastingToCastingScrapItem_A_fkey`;

-- DropForeignKey
ALTER TABLE `_castingtocastingscrapitem` DROP FOREIGN KEY `_CastingToCastingScrapItem_B_fkey`;

-- DropForeignKey
ALTER TABLE `casting` DROP FOREIGN KEY `Casting_castingId_fkey`;

-- DropForeignKey
ALTER TABLE `castingitem` DROP FOREIGN KEY `CastingItem_castingId_fkey`;

-- DropForeignKey
ALTER TABLE `castingscrapitem` DROP FOREIGN KEY `CastingScrapItem_castingId_fkey`;

-- AlterTable
ALTER TABLE `additem` DROP COLUMN `name`,
    ADD COLUMN `item` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_castingtocastingscrapitem`;

-- DropTable
DROP TABLE `casting`;

-- DropTable
DROP TABLE `castingitem`;

-- DropTable
DROP TABLE `castingscrapitem`;

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
    `afterWeight` DOUBLE NOT NULL,
    `wastage` DOUBLE NOT NULL,
    `type` ENUM('Items', 'ScrapItems') NOT NULL,
    `itemId` INTEGER NOT NULL,
    `weight` DOUBLE NOT NULL,
    `touch` DOUBLE NOT NULL,
    `itemPurity` DOUBLE NOT NULL,
    `remarks` VARCHAR(191) NULL,
    `castingId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CastingEntry` ADD CONSTRAINT `CastingEntry_castingId_fkey` FOREIGN KEY (`castingId`) REFERENCES `AddCasting`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CastingEntry` ADD CONSTRAINT `CastingEntry_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `AddItem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
