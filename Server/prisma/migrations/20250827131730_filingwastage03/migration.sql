/*
  Warnings:

  - You are about to alter the column `given_gold` on the `filingwastage` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `filingwastage` MODIFY `given_gold` DOUBLE NULL;
