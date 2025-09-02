/*
  Warnings:

  - Added the required column `buffing_item_id` to the `BuffingTotalBalance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `buffingtotalbalance` ADD COLUMN `buffing_item_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `BuffingTotalBalance` ADD CONSTRAINT `BuffingTotalBalance_buffing_item_id_fkey` FOREIGN KEY (`buffing_item_id`) REFERENCES `BuffingItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
