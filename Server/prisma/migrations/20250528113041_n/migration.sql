/*
  Warnings:

  - You are about to drop the `addcasting` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `additem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `castingentry` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `castingentry` DROP FOREIGN KEY `CastingEntry_castingId_fkey`;

-- DropForeignKey
ALTER TABLE `castingentry` DROP FOREIGN KEY `CastingEntry_itemId_fkey`;

-- DropTable
DROP TABLE `addcasting`;

-- DropTable
DROP TABLE `additem`;

-- DropTable
DROP TABLE `castingentry`;
