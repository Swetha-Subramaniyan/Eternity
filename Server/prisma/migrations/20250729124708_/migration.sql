/*
  Warnings:

  - You are about to drop the column `item_id` on the `lotfilingmapper` table. All the data in the column will be lost.
  - You are about to drop the `_castingitemstofilingentry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `assignfiling` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `casting_item_id` to the `FilingEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `casting_item_id` to the `LotFilingMapper` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_castingitemstofilingentry` DROP FOREIGN KEY `_CastingItemsToFilingEntry_A_fkey`;

-- DropForeignKey
ALTER TABLE `_castingitemstofilingentry` DROP FOREIGN KEY `_CastingItemsToFilingEntry_B_fkey`;

-- DropForeignKey
ALTER TABLE `assignfiling` DROP FOREIGN KEY `AssignFiling_casting_item_id_fkey`;

-- DropForeignKey
ALTER TABLE `assignfiling` DROP FOREIGN KEY `AssignFiling_filing_id_fkey`;

-- DropForeignKey
ALTER TABLE `lotfilingmapper` DROP FOREIGN KEY `LotFilingMapper_item_id_fkey`;

-- DropIndex
DROP INDEX `LotFilingMapper_item_id_fkey` ON `lotfilingmapper`;

-- AlterTable
ALTER TABLE `filingentry` ADD COLUMN `casting_item_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `lotfilingmapper` DROP COLUMN `item_id`,
    ADD COLUMN `casting_item_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_castingitemstofilingentry`;

-- DropTable
DROP TABLE `assignfiling`;

-- AddForeignKey
ALTER TABLE `FilingEntry` ADD CONSTRAINT `FilingEntry_casting_item_id_fkey` FOREIGN KEY (`casting_item_id`) REFERENCES `CastingItems`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LotFilingMapper` ADD CONSTRAINT `LotFilingMapper_casting_item_id_fkey` FOREIGN KEY (`casting_item_id`) REFERENCES `CastingItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
