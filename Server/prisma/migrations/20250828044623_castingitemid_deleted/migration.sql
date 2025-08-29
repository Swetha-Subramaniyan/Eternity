/*
  Warnings:

  - You are about to drop the column `casting_item_id` on the `buffingentry` table. All the data in the column will be lost.
  - You are about to drop the column `casting_item_id` on the `settingentry` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `buffingentry` DROP FOREIGN KEY `BuffingEntry_casting_item_id_fkey`;

-- DropForeignKey
ALTER TABLE `settingentry` DROP FOREIGN KEY `SettingEntry_casting_item_id_fkey`;

-- DropIndex
DROP INDEX `BuffingEntry_casting_item_id_key` ON `buffingentry`;

-- DropIndex
DROP INDEX `SettingEntry_casting_item_id_key` ON `settingentry`;

-- AlterTable
ALTER TABLE `buffingentry` DROP COLUMN `casting_item_id`;

-- AlterTable
ALTER TABLE `settingentry` DROP COLUMN `casting_item_id`;
