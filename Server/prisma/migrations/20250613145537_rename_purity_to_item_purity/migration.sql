/*
  Warnings:

  - You are about to drop the column `purity` on the `stock` table. All the data in the column will be lost.
  - Added the required column `item_purity` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `stock` DROP COLUMN `purity`,
    ADD COLUMN `item_purity` DOUBLE NOT NULL;
