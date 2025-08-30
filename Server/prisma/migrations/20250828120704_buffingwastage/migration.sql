/*
  Warnings:

  - You are about to drop the column `buffing_entry_id` on the `buffingwastage` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `buffingwastage` DROP FOREIGN KEY `BuffingWastage_buffing_entry_id_fkey`;

-- DropIndex
DROP INDEX `BuffingWastage_buffing_entry_id_fkey` ON `buffingwastage`;

-- AlterTable
ALTER TABLE `buffingwastage` DROP COLUMN `buffing_entry_id`,
    ADD COLUMN `buffing_lot_id` INTEGER NULL,
    ADD COLUMN `buffing_person_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `BuffingWastage` ADD CONSTRAINT `BuffingWastage_buffing_person_id_fkey` FOREIGN KEY (`buffing_person_id`) REFERENCES `AddBuffing`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BuffingWastage` ADD CONSTRAINT `BuffingWastage_buffing_lot_id_fkey` FOREIGN KEY (`buffing_lot_id`) REFERENCES `LotInfo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
