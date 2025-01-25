/*
  Warnings:

  - The values [CUSTOMER] on the enum `User_roles` will be removed. If these variants are still used in the database, this will fail.
  - The values [commerial_Kitchen] on the enum `serviceType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `user_id` on the `Bank_type` table. All the data in the column will be lost.
  - You are about to drop the column `customer_id` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `images` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `license_id` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `menu_id` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `service_price` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `service_type_id` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `image_url` on the `ServiceImages` table. All the data in the column will be lost.
  - You are about to drop the column `DriverLicense` on the `UserFiles` table. All the data in the column will be lost.
  - You are about to drop the column `KictchenCertificate` on the `UserFiles` table. All the data in the column will be lost.
  - You are about to drop the column `License_id` on the `UserFiles` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `UserFiles` table. All the data in the column will be lost.
  - You are about to drop the column `file_name` on the `UserFiles` table. All the data in the column will be lost.
  - You are about to drop the column `customer_id` on the `service_review` table. All the data in the column will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `KitchenCertificate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `License` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Restaurant_Service` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceTypes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Service_Sell` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[payment_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `service_review` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `files` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foodimage_url` to the `ServiceImages` table without a default value. This is not possible if the table is not empty.
  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `FileTypes` to the `UserFiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileName` to the `UserFiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileURL` to the `UserFiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `service_review` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RequiredFiles" AS ENUM ('Certificate_of_Registartion');

-- CreateEnum
CREATE TYPE "RequiredFiles2" AS ENUM ('Food_Handlers_Certificate', 'OwnersGov_ID');

-- CreateEnum
CREATE TYPE "FileTypes" AS ENUM ('Certificate_of_Registartion', 'Food_Handlers_Certificate', 'OwnersGov_ID', 'DriverLicense', 'Other');

-- AlterEnum
BEGIN;
CREATE TYPE "User_roles_new" AS ENUM ('ADMIN', 'USER', 'CONTRACT_EMPLOYEE', 'SERVICE_PROVIDER');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "User_roles_new" USING ("role"::text::"User_roles_new");
ALTER TYPE "User_roles" RENAME TO "User_roles_old";
ALTER TYPE "User_roles_new" RENAME TO "User_roles";
DROP TYPE "User_roles_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'USER';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "serviceType_new" AS ENUM ('Home_Kitchen', 'Restaurant');
ALTER TABLE "Service" ALTER COLUMN "service_type" TYPE "serviceType_new" USING ("service_type"::text::"serviceType_new");
ALTER TYPE "serviceType" RENAME TO "serviceType_old";
ALTER TYPE "serviceType_new" RENAME TO "serviceType";
DROP TYPE "serviceType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_payment_id_fkey";

-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_user_id_fkey";

-- DropForeignKey
ALTER TABLE "KitchenCertificate" DROP CONSTRAINT "KitchenCertificate_Certificatefile_fkey";

-- DropForeignKey
ALTER TABLE "License" DROP CONSTRAINT "License_License_file_fkey";

-- DropForeignKey
ALTER TABLE "MenuCatagory" DROP CONSTRAINT "MenuCatagory_service_id_fkey";

-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "Promotions" DROP CONSTRAINT "Promotions_service_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Sell_Schedule" DROP CONSTRAINT "Sell_Schedule_service_id_fkey";

-- DropForeignKey
ALTER TABLE "Service_Sell" DROP CONSTRAINT "Service_Sell_service_id_fkey";

-- DropForeignKey
ALTER TABLE "UserFiles" DROP CONSTRAINT "UserFiles_DriverLicense_fkey";

-- DropForeignKey
ALTER TABLE "UserFiles" DROP CONSTRAINT "UserFiles_License_id_fkey";

-- DropForeignKey
ALTER TABLE "service_review" DROP CONSTRAINT "service_review_customer_id_fkey";

-- DropIndex
DROP INDEX "Bank_type_user_id_key";

-- DropIndex
DROP INDEX "Service_license_id_key";

-- DropIndex
DROP INDEX "UserFiles_DriverLicense_key";

-- DropIndex
DROP INDEX "UserFiles_KictchenCertificate_key";

-- DropIndex
DROP INDEX "UserFiles_License_id_key";

-- DropIndex
DROP INDEX "service_review_customer_id_key";

-- AlterTable
ALTER TABLE "AdditionsToMeal" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Bank_type" DROP COLUMN "user_id";

-- AlterTable
ALTER TABLE "MenuItems" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "customer_id",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "images",
DROP COLUMN "license_id",
DROP COLUMN "menu_id",
DROP COLUMN "service_price",
DROP COLUMN "service_type_id",
ADD COLUMN     "files" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ServiceImages" DROP COLUMN "image_url",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "foodimage_url" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "payment_id" TEXT,
ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "phoneNumber" SET NOT NULL,
ALTER COLUMN "profilePicture" DROP NOT NULL,
ALTER COLUMN "service_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserFiles" DROP COLUMN "DriverLicense",
DROP COLUMN "KictchenCertificate",
DROP COLUMN "License_id",
DROP COLUMN "createdAt",
DROP COLUMN "file_name",
ADD COLUMN     "DateModified" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "DateUploaded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "FileTypes" "FileTypes" NOT NULL,
ADD COLUMN     "fileName" TEXT NOT NULL,
ADD COLUMN     "fileURL" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "service_review" DROP COLUMN "customer_id",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "KitchenCertificate";

-- DropTable
DROP TABLE "License";

-- DropTable
DROP TABLE "Restaurant_Service";

-- DropTable
DROP TABLE "ServiceTypes";

-- DropTable
DROP TABLE "Service_Sell";

-- CreateTable
CREATE TABLE "Uploaded_picture" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "picture_url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Uploaded_picture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HomeKitchen" (
    "id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "requiredFiles" "RequiredFiles" NOT NULL,

    CONSTRAINT "HomeKitchen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Restaurante" (
    "id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "requiredFiles" "RequiredFiles2" NOT NULL,
    "signedContract" BOOLEAN NOT NULL,
    "menu_id" TEXT NOT NULL,

    CONSTRAINT "Restaurante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RestaurantContract" (
    "id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "contract_contents" TEXT NOT NULL,
    "DateUploaded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "DateModified" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RestaurantContract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HomeService_Sell" (
    "id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "meal_image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "additional_items" TEXT NOT NULL,
    "allow_customization" BOOLEAN NOT NULL,
    "schedule_id" TEXT NOT NULL,

    CONSTRAINT "HomeService_Sell_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HomeKitchen_service_id_key" ON "HomeKitchen"("service_id");

-- CreateIndex
CREATE UNIQUE INDEX "Restaurante_service_id_key" ON "Restaurante"("service_id");

-- CreateIndex
CREATE UNIQUE INDEX "RestaurantContract_service_id_key" ON "RestaurantContract"("service_id");

-- CreateIndex
CREATE UNIQUE INDEX "HomeService_Sell_service_id_key" ON "HomeService_Sell"("service_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_payment_id_key" ON "User"("payment_id");

-- CreateIndex
CREATE UNIQUE INDEX "service_review_user_id_key" ON "service_review"("user_id");

-- AddForeignKey
ALTER TABLE "Uploaded_picture" ADD CONSTRAINT "Uploaded_picture_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeKitchen" ADD CONSTRAINT "HomeKitchen_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restaurante" ADD CONSTRAINT "Restaurante_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantContract" ADD CONSTRAINT "RestaurantContract_id_fkey" FOREIGN KEY ("id") REFERENCES "Restaurante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFiles" ADD CONSTRAINT "UserFiles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeService_Sell" ADD CONSTRAINT "HomeService_Sell_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "HomeKitchen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sell_Schedule" ADD CONSTRAINT "Sell_Schedule_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "HomeService_Sell"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("payment_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuCatagory" ADD CONSTRAINT "MenuCatagory_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Restaurante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_review" ADD CONSTRAINT "service_review_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicles" ADD CONSTRAINT "Vehicles_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Contract_Worker"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;
