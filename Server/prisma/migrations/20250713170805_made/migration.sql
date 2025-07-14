/*
  Warnings:

  - You are about to drop the column `scrap_weight` on the `stock` table. All the data in the column will be lost.
  - Added the required column `weight` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `stock` DROP COLUMN `scrap_weight`,
    ADD COLUMN `weight` DOUBLE NOT NULL;
