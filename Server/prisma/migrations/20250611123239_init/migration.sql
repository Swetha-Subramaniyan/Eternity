-- DropIndex
DROP INDEX `AddBuffing_email_key` ON `addbuffing`;

-- DropIndex
DROP INDEX `AddCasting_email_key` ON `addcasting`;

-- DropIndex
DROP INDEX `AddCustomer_email_key` ON `addcustomer`;

-- DropIndex
DROP INDEX `AddFiling_email_key` ON `addfiling`;

-- DropIndex
DROP INDEX `AddSetting_email_key` ON `addsetting`;

-- DropIndex
DROP INDEX `AddSupplierItem_email_key` ON `addsupplieritem`;

-- AlterTable
ALTER TABLE `addbuffing` MODIFY `phoneNumber` VARCHAR(191) NULL,
    MODIFY `address` VARCHAR(191) NULL,
    MODIFY `email` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `addcasting` MODIFY `phoneNumber` VARCHAR(191) NULL,
    MODIFY `address` VARCHAR(191) NULL,
    MODIFY `email` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `addcustomer` MODIFY `phoneNumber` VARCHAR(191) NULL,
    MODIFY `address` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `addfiling` MODIFY `phoneNumber` VARCHAR(191) NULL,
    MODIFY `address` VARCHAR(191) NULL,
    MODIFY `email` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `addsetting` MODIFY `phoneNumber` VARCHAR(191) NULL,
    MODIFY `address` VARCHAR(191) NULL,
    MODIFY `email` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `addsupplieritem` MODIFY `email` VARCHAR(191) NULL,
    MODIFY `phoneNumber` VARCHAR(191) NULL,
    MODIFY `address` VARCHAR(191) NULL;
