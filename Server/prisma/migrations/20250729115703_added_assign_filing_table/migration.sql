/*
  Warnings:

  - You are about to drop the column `casting_item_id` on the `filingentry` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `filingentry` DROP FOREIGN KEY `FilingEntry_casting_item_id_fkey`;

-- DropIndex
DROP INDEX `FilingEntry_casting_item_id_fkey` ON `filingentry`;

-- AlterTable
ALTER TABLE `filingentry` DROP COLUMN `casting_item_id`;

-- CreateTable
CREATE TABLE `AssignFiling` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `casting_item_id` INTEGER NOT NULL,
    `filing_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CastingItemsToFilingEntry` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CastingItemsToFilingEntry_AB_unique`(`A`, `B`),
    INDEX `_CastingItemsToFilingEntry_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AssignFiling` ADD CONSTRAINT `AssignFiling_casting_item_id_fkey` FOREIGN KEY (`casting_item_id`) REFERENCES `CastingItems`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AssignFiling` ADD CONSTRAINT `AssignFiling_filing_id_fkey` FOREIGN KEY (`filing_id`) REFERENCES `FilingEntry`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CastingItemsToFilingEntry` ADD CONSTRAINT `_CastingItemsToFilingEntry_A_fkey` FOREIGN KEY (`A`) REFERENCES `CastingItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CastingItemsToFilingEntry` ADD CONSTRAINT `_CastingItemsToFilingEntry_B_fkey` FOREIGN KEY (`B`) REFERENCES `FilingEntry`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
