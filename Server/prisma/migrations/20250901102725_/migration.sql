/*
  Warnings:

  - You are about to drop the column `buffing_item_id` on the `buffingtotalbalance` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `buffingtotalbalance` DROP FOREIGN KEY `BuffingTotalBalance_buffing_item_id_fkey`;

-- DropIndex
DROP INDEX `BuffingTotalBalance_buffing_item_id_fkey` ON `buffingtotalbalance`;

-- AlterTable
ALTER TABLE `buffingtotalbalance` DROP COLUMN `buffing_item_id`;
