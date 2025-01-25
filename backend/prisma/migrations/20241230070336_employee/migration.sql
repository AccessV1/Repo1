/*
  Warnings:

  - The primary key for the `Contract_Worker` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Contract_Worker` table. All the data in the column will be lost.
  - You are about to drop the column `ssn` on the `Contract_Worker` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phoneNumber]` on the table `Contract_Worker` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `DriversLicense` to the `Contract_Worker` table without a default value. This is not possible if the table is not empty.
  - The required column `employee_id` was added to the `Contract_Worker` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `phoneNumber` to the `Contract_Worker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo` to the `Contract_Worker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vehicleID` to the `Contract_Worker` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "vehicleType" AS ENUM ('Car', 'Motorcycle', 'Truck');

-- DropIndex
DROP INDEX "Contract_Worker_ssn_key";

-- AlterTable
ALTER TABLE "Contract_Worker" DROP CONSTRAINT "Contract_Worker_pkey",
DROP COLUMN "id",
DROP COLUMN "ssn",
ADD COLUMN     "DriversLicense" TEXT NOT NULL,
ADD COLUMN     "employee_id" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "photo" TEXT NOT NULL,
ADD COLUMN     "vehicleID" TEXT NOT NULL,
ADD CONSTRAINT "Contract_Worker_pkey" PRIMARY KEY ("employee_id");

-- CreateTable
CREATE TABLE "Vehicles" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "vehicle_type" "vehicleType" NOT NULL,
    "vehicle_photo" TEXT NOT NULL,
    "vehicle_registration_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vehicleModel" TEXT NOT NULL,

    CONSTRAINT "Vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vehicles_user_id_key" ON "Vehicles"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Contract_Worker_phoneNumber_key" ON "Contract_Worker"("phoneNumber");
