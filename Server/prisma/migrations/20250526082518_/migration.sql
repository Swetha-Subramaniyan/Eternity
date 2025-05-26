/*
  Warnings:

  - You are about to drop the column `phoneNumber` on the `addpurchasestock` table. All the data in the column will be lost.
  - You are about to drop the column `purchasePrice` on the `addpurchasestock` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `addpurchasestock` table. All the data in the column will be lost.
  - You are about to alter the column `item` on the `addpurchasestock` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `addpurchasestock` DROP COLUMN `phoneNumber`,
    DROP COLUMN `purchasePrice`,
    DROP COLUMN `quantity`,
    ADD COLUMN `goldPurity` DOUBLE NULL,
    ADD COLUMN `goldRate` DOUBLE NULL,
    ADD COLUMN `goldTouch` DOUBLE NULL,
    ADD COLUMN `goldWeight` INTEGER NULL,
    ADD COLUMN `goldtotalValue` DOUBLE NULL,
    ADD COLUMN `silverPurity` DOUBLE NULL,
    ADD COLUMN `silverRate` DOUBLE NULL,
    ADD COLUMN `silverTouch` DOUBLE NULL,
    ADD COLUMN `silverWeight` INTEGER NULL,
    ADD COLUMN `silvertotalValue` DOUBLE NULL,
    MODIFY `item` ENUM('gold', 'silver') NOT NULL;

-- CreateTable
CREATE TABLE `AddSupplierItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `AddSupplierItem_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
