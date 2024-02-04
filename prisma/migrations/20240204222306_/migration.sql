/*
  Warnings:

  - You are about to drop the `Color` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Size` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Color" DROP CONSTRAINT "Color_productId_fkey";

-- DropForeignKey
ALTER TABLE "Size" DROP CONSTRAINT "Size_productId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "availableColors" TEXT[],
ADD COLUMN     "availableSizes" TEXT[];

-- DropTable
DROP TABLE "Color";

-- DropTable
DROP TABLE "Size";
