/*
  Warnings:

  - You are about to drop the column `total` on the `settingtotalbalance` table. All the data in the column will be lost.
  - Added the required column `total_product_weight` to the `SettingTotalBalance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `settingtotalbalance` DROP COLUMN `total`,
    ADD COLUMN `total_product_weight` DOUBLE NOT NULL;
