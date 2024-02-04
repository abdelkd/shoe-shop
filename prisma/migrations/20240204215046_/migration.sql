-- CreateEnum
CREATE TYPE "Audience" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "audience" "Audience" NOT NULL,
    "images" TEXT[],
    "addedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "visits" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Size" (
    "size" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "productId" TEXT,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("size")
);

-- CreateTable
CREATE TABLE "Color" (
    "color" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "productId" TEXT,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("color")
);

-- AddForeignKey
ALTER TABLE "Size" ADD CONSTRAINT "Size_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Color" ADD CONSTRAINT "Color_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
