/*
  Warnings:

  - You are about to drop the column `type` on the `Payment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ssn]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[service_id]` on the table `Terms_of_Services` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[service_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Account_type` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Terms_of_Services" DROP CONSTRAINT "Terms_of_Services_service_id_fkey";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "type",
ADD COLUMN     "Account_type" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Employee_ssn_key" ON "Employee"("ssn");

-- CreateIndex
CREATE UNIQUE INDEX "Terms_of_Services_service_id_key" ON "Terms_of_Services"("service_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_service_id_key" ON "User"("service_id");

-- AddForeignKey
ALTER TABLE "Terms_of_Services" ADD CONSTRAINT "Terms_of_Services_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "User"("service_id") ON DELETE RESTRICT ON UPDATE CASCADE;
