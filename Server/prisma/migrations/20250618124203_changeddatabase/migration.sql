/*
  Warnings:

  - Added the required column `casting_customer_id` to the `CastingItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `casting_customer_id` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `castingitems` ADD COLUMN `casting_customer_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `stock` ADD COLUMN `casting_customer_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `CastingItems` ADD CONSTRAINT `CastingItems_casting_customer_id_fkey` FOREIGN KEY (`casting_customer_id`) REFERENCES `AddCasting`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_casting_customer_id_fkey` FOREIGN KEY (`casting_customer_id`) REFERENCES `AddCasting`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
