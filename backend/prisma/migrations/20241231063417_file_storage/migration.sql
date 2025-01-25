/*
  Warnings:

  - You are about to drop the column `license` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Vehicles` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[DriversLicense]` on the table `Contract_Worker` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[license_id]` on the table `Service` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[provider_id]` on the table `Service` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[employee_id]` on the table `Vehicles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `license_id` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_id` to the `Vehicles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `work_area` to the `Vehicles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `work_hours` to the `Vehicles` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Vehicles_user_id_key";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "license",
ADD COLUMN     "license_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Vehicles" DROP COLUMN "user_id",
ADD COLUMN     "employee_id" TEXT NOT NULL,
ADD COLUMN     "work_area" TEXT NOT NULL,
ADD COLUMN     "work_hours" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "UserFiles" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "Service_id" TEXT NOT NULL,
    "License_id" TEXT NOT NULL,
    "file_name" TEXT NOT NULL,
    "DriverLicense" TEXT NOT NULL,
    "KictchenCertificate" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserFiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "License" (
    "License_file" TEXT NOT NULL,
    "Service_file" TEXT NOT NULL,
    "licensePicture" TEXT NOT NULL,
    "expiration_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "License_pkey" PRIMARY KEY ("License_file")
);

-- CreateTable
CREATE TABLE "KitchenCertificate" (
    "Certificate_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "Certificatefile" TEXT NOT NULL,
    "expiration_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KitchenCertificate_pkey" PRIMARY KEY ("Certificate_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserFiles_user_id_key" ON "UserFiles"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "UserFiles_Service_id_key" ON "UserFiles"("Service_id");

-- CreateIndex
CREATE UNIQUE INDEX "UserFiles_License_id_key" ON "UserFiles"("License_id");

-- CreateIndex
CREATE UNIQUE INDEX "UserFiles_DriverLicense_key" ON "UserFiles"("DriverLicense");

-- CreateIndex
CREATE UNIQUE INDEX "UserFiles_KictchenCertificate_key" ON "UserFiles"("KictchenCertificate");

-- CreateIndex
CREATE UNIQUE INDEX "License_Service_file_key" ON "License"("Service_file");

-- CreateIndex
CREATE UNIQUE INDEX "KitchenCertificate_user_id_key" ON "KitchenCertificate"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "KitchenCertificate_Certificatefile_key" ON "KitchenCertificate"("Certificatefile");

-- CreateIndex
CREATE UNIQUE INDEX "Contract_Worker_DriversLicense_key" ON "Contract_Worker"("DriversLicense");

-- CreateIndex
CREATE UNIQUE INDEX "Service_license_id_key" ON "Service"("license_id");

-- CreateIndex
CREATE UNIQUE INDEX "Service_provider_id_key" ON "Service"("provider_id");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicles_employee_id_key" ON "Vehicles"("employee_id");

-- AddForeignKey
ALTER TABLE "ServiceProvider" ADD CONSTRAINT "ServiceProvider_id_fkey" FOREIGN KEY ("id") REFERENCES "Service"("provider_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFiles" ADD CONSTRAINT "UserFiles_Service_id_fkey" FOREIGN KEY ("Service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFiles" ADD CONSTRAINT "UserFiles_License_id_fkey" FOREIGN KEY ("License_id") REFERENCES "Service"("license_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFiles" ADD CONSTRAINT "UserFiles_DriverLicense_fkey" FOREIGN KEY ("DriverLicense") REFERENCES "Contract_Worker"("DriversLicense") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "License" ADD CONSTRAINT "License_License_file_fkey" FOREIGN KEY ("License_file") REFERENCES "UserFiles"("License_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KitchenCertificate" ADD CONSTRAINT "KitchenCertificate_Certificatefile_fkey" FOREIGN KEY ("Certificatefile") REFERENCES "UserFiles"("KictchenCertificate") ON DELETE RESTRICT ON UPDATE CASCADE;
