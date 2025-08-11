/*
  Warnings:

  - Added the required column `current_balance_weight` to the `FilingTotalBalance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `filingtotalbalance` ADD COLUMN `current_balance_weight` DOUBLE NOT NULL;
