/*
  Warnings:

  - Added the required column `item_id` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purity` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `touch` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `stock` ADD COLUMN `item_id` INTEGER NOT NULL,
    ADD COLUMN `purity` DOUBLE NOT NULL,
    ADD COLUMN `remarks` VARCHAR(191) NULL,
    ADD COLUMN `scrap_wastage` DOUBLE NULL,
    ADD COLUMN `scrap_weight` DOUBLE NULL,
    ADD COLUMN `touch` DOUBLE NOT NULL,
    ADD COLUMN `weight` DOUBLE NOT NULL;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `AddItem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
