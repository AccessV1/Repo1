/*
  Warnings:

  - Added the required column `schedule_id` to the `Service_Sell` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "days" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

-- AlterTable
ALTER TABLE "Service_Sell" ADD COLUMN     "schedule_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Sell_Schedule" (
    "id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "schedule_date_Update" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "days" "days" NOT NULL,

    CONSTRAINT "Sell_Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sell_Schedule_service_id_key" ON "Sell_Schedule"("service_id");

-- AddForeignKey
ALTER TABLE "Sell_Schedule" ADD CONSTRAINT "Sell_Schedule_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service_Sell"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
