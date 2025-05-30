/*
  Warnings:

  - You are about to drop the column `castingId` on the `castingentry` table. All the data in the column will be lost.
  - You are about to drop the column `finalTouch` on the `castingentry` table. All the data in the column will be lost.
  - You are about to drop the column `finalWeight` on the `castingentry` table. All the data in the column will be lost.
  - You are about to drop the column `givenGold` on the `castingentry` table. All the data in the column will be lost.
  - You are about to drop the column `givenTouch` on the `castingentry` table. All the data in the column will be lost.
  - You are about to drop the column `itemId` on the `castingentry` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `castingentry` table. All the data in the column will be lost.
  - You are about to drop the column `pureValue` on the `castingentry` table. All the data in the column will be lost.
  - You are about to drop the column `afterWeight` on the `castingitems` table. All the data in the column will be lost.
  - You are about to drop the column `castingEntryId` on the `castingitems` table. All the data in the column will be lost.
  - You are about to drop the column `itemPurity` on the `castingitems` table. All the data in the column will be lost.
  - You are about to drop the column `scrapWastage` on the `castingitems` table. All the data in the column will be lost.
  - You are about to drop the column `scrapWeight` on the `castingitems` table. All the data in the column will be lost.
  - Added the required column `casting_customer_id` to the `CastingEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `final_touch` to the `CastingEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `final_weight` to the `CastingEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `given_gold` to the `CastingEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `given_touch` to the `CastingEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pure_value` to the `CastingEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `casting_entry_id` to the `CastingItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `item_id` to the `CastingItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `item_purity` to the `CastingItems` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `castingentry` DROP FOREIGN KEY `CastingEntry_castingId_fkey`;

-- DropForeignKey
ALTER TABLE `castingentry` DROP FOREIGN KEY `CastingEntry_itemId_fkey`;

-- DropForeignKey
ALTER TABLE `castingitems` DROP FOREIGN KEY `CastingItems_castingEntryId_fkey`;

-- DropIndex
DROP INDEX `CastingEntry_castingId_fkey` ON `castingentry`;

-- DropIndex
DROP INDEX `CastingEntry_itemId_fkey` ON `castingentry`;

-- DropIndex
DROP INDEX `CastingItems_castingEntryId_fkey` ON `castingitems`;

-- AlterTable
ALTER TABLE `castingentry` DROP COLUMN `castingId`,
    DROP COLUMN `finalTouch`,
    DROP COLUMN `finalWeight`,
    DROP COLUMN `givenGold`,
    DROP COLUMN `givenTouch`,
    DROP COLUMN `itemId`,
    DROP COLUMN `name`,
    DROP COLUMN `pureValue`,
    ADD COLUMN `casting_customer_id` INTEGER NOT NULL,
    ADD COLUMN `final_touch` DOUBLE NOT NULL,
    ADD COLUMN `final_weight` DOUBLE NOT NULL,
    ADD COLUMN `given_gold` DOUBLE NOT NULL,
    ADD COLUMN `given_touch` DOUBLE NOT NULL,
    ADD COLUMN `pure_value` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `castingitems` DROP COLUMN `afterWeight`,
    DROP COLUMN `castingEntryId`,
    DROP COLUMN `itemPurity`,
    DROP COLUMN `scrapWastage`,
    DROP COLUMN `scrapWeight`,
    ADD COLUMN `after_weight` DOUBLE NULL,
    ADD COLUMN `casting_entry_id` INTEGER NOT NULL,
    ADD COLUMN `item_id` INTEGER NOT NULL,
    ADD COLUMN `item_purity` DOUBLE NOT NULL,
    ADD COLUMN `scrap_wastage` DOUBLE NULL,
    ADD COLUMN `scrap_weight` DOUBLE NULL;

-- CreateTable
CREATE TABLE `FilingEntry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `filing_person_id` INTEGER NOT NULL,
    `casting_item_id` INTEGER NOT NULL,
    `weight` DOUBLE NOT NULL,
    `touch` DOUBLE NOT NULL,
    `item_purity` DOUBLE NOT NULL,
    `remarks` VARCHAR(191) NULL,
    `after_weight` DOUBLE NULL,
    `stone_option` ENUM('WithStone', 'WithoutStone') NOT NULL,

    UNIQUE INDEX `FilingEntry_casting_item_id_key`(`casting_item_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SettingEntry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `setting_person_id` INTEGER NOT NULL,
    `casting_item_id` INTEGER NOT NULL,
    `weight` DOUBLE NOT NULL,
    `touch` DOUBLE NOT NULL,
    `item_purity` DOUBLE NOT NULL,
    `remarks` VARCHAR(191) NULL,
    `after_weight` DOUBLE NULL,

    UNIQUE INDEX `SettingEntry_casting_item_id_key`(`casting_item_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BuffingEntry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `buffing_person_id` INTEGER NOT NULL,
    `casting_item_id` INTEGER NOT NULL,
    `weight` DOUBLE NOT NULL,
    `touch` DOUBLE NOT NULL,
    `item_purity` DOUBLE NOT NULL,
    `remarks` VARCHAR(191) NULL,
    `after_weight` DOUBLE NULL,

    UNIQUE INDEX `BuffingEntry_casting_item_id_key`(`casting_item_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Stock` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `casting_item_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CastingEntry` ADD CONSTRAINT `CastingEntry_casting_customer_id_fkey` FOREIGN KEY (`casting_customer_id`) REFERENCES `AddCasting`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CastingItems` ADD CONSTRAINT `CastingItems_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `AddItem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CastingItems` ADD CONSTRAINT `CastingItems_casting_entry_id_fkey` FOREIGN KEY (`casting_entry_id`) REFERENCES `CastingEntry`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FilingEntry` ADD CONSTRAINT `FilingEntry_filing_person_id_fkey` FOREIGN KEY (`filing_person_id`) REFERENCES `AddFiling`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FilingEntry` ADD CONSTRAINT `FilingEntry_casting_item_id_fkey` FOREIGN KEY (`casting_item_id`) REFERENCES `CastingItems`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SettingEntry` ADD CONSTRAINT `SettingEntry_setting_person_id_fkey` FOREIGN KEY (`setting_person_id`) REFERENCES `AddSetting`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SettingEntry` ADD CONSTRAINT `SettingEntry_casting_item_id_fkey` FOREIGN KEY (`casting_item_id`) REFERENCES `CastingItems`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BuffingEntry` ADD CONSTRAINT `BuffingEntry_buffing_person_id_fkey` FOREIGN KEY (`buffing_person_id`) REFERENCES `AddBuffing`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BuffingEntry` ADD CONSTRAINT `BuffingEntry_casting_item_id_fkey` FOREIGN KEY (`casting_item_id`) REFERENCES `CastingItems`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_casting_item_id_fkey` FOREIGN KEY (`casting_item_id`) REFERENCES `CastingItems`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
