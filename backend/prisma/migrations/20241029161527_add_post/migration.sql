/*
  Warnings:

  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Menu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Orders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Promotions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceImages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceProvider` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceTypes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_payment_id_fkey";

-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_location_id_fkey";

-- DropForeignKey
ALTER TABLE "Promotions" DROP CONSTRAINT "Promotions_service_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_menu_id_fkey";

-- DropForeignKey
ALTER TABLE "ServiceImages" DROP CONSTRAINT "ServiceImages_service_id_fkey";

-- DropForeignKey
ALTER TABLE "ServiceProvider" DROP CONSTRAINT "ServiceProvider_location_id_fkey";

-- DropForeignKey
ALTER TABLE "ServiceProvider" DROP CONSTRAINT "ServiceProvider_user_id_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "phoneNumber" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "Location";

-- DropTable
DROP TABLE "Menu";

-- DropTable
DROP TABLE "Orders";

-- DropTable
DROP TABLE "Payment";

-- DropTable
DROP TABLE "Promotions";

-- DropTable
DROP TABLE "ServiceImages";

-- DropTable
DROP TABLE "ServiceProvider";

-- DropTable
DROP TABLE "ServiceTypes";

-- CreateTable
CREATE TABLE "Post" (
    "post_id" INTEGER NOT NULL,
    "post_content" TEXT NOT NULL,
    "post_time" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "post_status" TEXT NOT NULL,
    "caption" TEXT,
    "post_privacy" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("post_id")
);
