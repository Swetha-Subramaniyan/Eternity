/*
  Warnings:

  - Added the required column `total` to the `SettingTotalBalance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_balance` to the `SettingTotalBalance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `settingtotalbalance` ADD COLUMN `total` DOUBLE NOT NULL,
    ADD COLUMN `total_balance` DOUBLE NOT NULL;
