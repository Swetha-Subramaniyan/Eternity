/*
  Warnings:

  - You are about to drop the column `total_balance` on the `settingtotalbalance` table. All the data in the column will be lost.
  - Added the required column `current_balance_weight` to the `SettingTotalBalance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `settingtotalbalance` DROP COLUMN `total_balance`,
    ADD COLUMN `current_balance_weight` DOUBLE NOT NULL;
