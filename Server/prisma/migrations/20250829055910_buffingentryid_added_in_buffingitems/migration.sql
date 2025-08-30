/*
  Warnings:

  - Added the required column `buffing_entry_id` to the `BuffingItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `buffingitems` ADD COLUMN `buffing_entry_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `BuffingItems` ADD CONSTRAINT `BuffingItems_buffing_entry_id_fkey` FOREIGN KEY (`buffing_entry_id`) REFERENCES `BuffingEntry`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
