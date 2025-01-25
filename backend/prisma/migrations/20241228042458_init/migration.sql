/*
  Warnings:

  - You are about to drop the column `service_id` on the `Terms_of_Services` table. All the data in the column will be lost.
  - You are about to drop the column `device_id` on the `User_Device` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Terms_of_Services" DROP CONSTRAINT "Terms_of_Services_service_id_fkey";

-- DropForeignKey
ALTER TABLE "User_Device" DROP CONSTRAINT "User_Device_device_id_fkey";

-- DropIndex
DROP INDEX "Terms_of_Services_service_id_key";

-- DropIndex
DROP INDEX "User_Device_device_id_key";

-- AlterTable
ALTER TABLE "Terms_of_Services" DROP COLUMN "service_id";

-- AlterTable
ALTER TABLE "User_Device" DROP COLUMN "device_id";

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "profile_pic" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "location_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_user_id_key" ON "Profile"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_service_id_key" ON "Profile"("service_id");

-- AddForeignKey
ALTER TABLE "Terms_of_Services" ADD CONSTRAINT "Terms_of_Services_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("service_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Device" ADD CONSTRAINT "User_Device_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
