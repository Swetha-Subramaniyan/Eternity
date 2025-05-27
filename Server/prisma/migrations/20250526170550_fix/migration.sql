/*
  Warnings:

  - The values [gold,silver] on the enum `AddPurchaseStock_item` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `addpurchasestock` MODIFY `item` ENUM('Gold', 'Silver') NOT NULL;
