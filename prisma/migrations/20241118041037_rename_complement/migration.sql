/*
  Warnings:

  - You are about to drop the column `complemento` on the `customer_addresses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "customer_addresses" DROP COLUMN "complemento",
ADD COLUMN     "complement" TEXT;
