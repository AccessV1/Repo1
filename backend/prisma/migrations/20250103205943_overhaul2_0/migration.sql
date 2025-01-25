/*
  Warnings:

  - You are about to drop the column `DriversLicense` on the `Contract_Worker` table. All the data in the column will be lost.
  - You are about to drop the `Sell_Schedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User_Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserToUser_Address` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[location_id]` on the table `Service` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[service_id]` on the table `ServiceProvider` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[worker_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `files` to the `Contract_Worker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_id` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_id` to the `ServiceProvider` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contract_Worker" DROP CONSTRAINT "Contract_Worker_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_location_id_fkey";

-- DropForeignKey
ALTER TABLE "Sell_Schedule" DROP CONSTRAINT "Sell_Schedule_service_id_fkey";

-- DropForeignKey
ALTER TABLE "ServiceProvider" DROP CONSTRAINT "ServiceProvider_id_fkey";

-- DropForeignKey
ALTER TABLE "ServiceProvider" DROP CONSTRAINT "ServiceProvider_location_id_fkey";

-- DropForeignKey
ALTER TABLE "UserFiles" DROP CONSTRAINT "UserFiles_user_id_fkey";

-- DropForeignKey
ALTER TABLE "_UserToUser_Address" DROP CONSTRAINT "_UserToUser_Address_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserToUser_Address" DROP CONSTRAINT "_UserToUser_Address_B_fkey";

-- DropIndex
DROP INDEX "Contract_Worker_DriversLicense_key";

-- AlterTable
ALTER TABLE "Contract_Worker" DROP COLUMN "DriversLicense",
ADD COLUMN     "files" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "HomeService_Sell" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "date_cancelled" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "date_shipped" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "service_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ServiceProvider" ADD COLUMN     "service_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "worker_id" TEXT;

-- AlterTable
ALTER TABLE "UserFiles" ADD COLUMN     "deletedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Sell_Schedule";

-- DropTable
DROP TABLE "User_Address";

-- DropTable
DROP TABLE "_UserToUser_Address";

-- CreateTable
CREATE TABLE "HomeServiceSell_Schedule" (
    "id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "schedule_date_Update" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "days" "days" NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HomeServiceSell_Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zip" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_Location" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "location_id" TEXT NOT NULL,

    CONSTRAINT "User_Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LocationToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_LocationToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "HomeServiceSell_Schedule_service_id_key" ON "HomeServiceSell_Schedule"("service_id");

-- CreateIndex
CREATE UNIQUE INDEX "Location_user_id_key" ON "Location"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_Location_user_id_key" ON "User_Location"("user_id");

-- CreateIndex
CREATE INDEX "_LocationToUser_B_index" ON "_LocationToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Service_location_id_key" ON "Service"("location_id");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceProvider_service_id_key" ON "ServiceProvider"("service_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_worker_id_key" ON "User"("worker_id");

-- AddForeignKey
ALTER TABLE "ServiceProvider" ADD CONSTRAINT "ServiceProvider_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("provider_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service_Location" ADD CONSTRAINT "Service_Location_id_fkey" FOREIGN KEY ("id") REFERENCES "Service"("location_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeServiceSell_Schedule" ADD CONSTRAINT "HomeServiceSell_Schedule_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "HomeService_Sell"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Location" ADD CONSTRAINT "User_Location_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Location" ADD CONSTRAINT "User_Location_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract_Worker" ADD CONSTRAINT "Contract_Worker_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("worker_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LocationToUser" ADD CONSTRAINT "_LocationToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LocationToUser" ADD CONSTRAINT "_LocationToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
