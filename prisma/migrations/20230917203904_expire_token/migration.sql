/*
  Warnings:

  - You are about to alter the column `refresh_token_expires_in` on the `account` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `account` MODIFY `refresh_token_expires_in` INTEGER NULL;
