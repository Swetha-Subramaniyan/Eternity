/*
  Warnings:

  - You are about to drop the column `casting_item_id` on the `lotfilingmapper` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[item_entry]` on the table `CastiingTotalBalance` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `item_id` to the `LotFilingMapper` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `lotfilingmapper` DROP FOREIGN KEY `LotFilingMapper_casting_item_id_fkey`;

-- DropIndex
DROP INDEX `LotFilingMapper_casting_item_id_fkey` ON `lotfilingmapper`;

-- AlterTable
ALTER TABLE `lotfilingmapper` DROP COLUMN `casting_item_id`,
    ADD COLUMN `item_id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `CastiingTotalBalance_item_entry_key` ON `CastiingTotalBalance`(`item_entry`);

-- AddForeignKey
ALTER TABLE `LotFilingMapper` ADD CONSTRAINT `LotFilingMapper_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `CastingItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
