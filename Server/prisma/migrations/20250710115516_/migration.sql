/*
  Warnings:

  - You are about to drop the column `weight` on the `stock` table. All the data in the column will be lost.
  - Made the column `scrap_weight` on table `stock` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `stock` DROP COLUMN `weight`,
    MODIFY `scrap_weight` DOUBLE NOT NULL;
