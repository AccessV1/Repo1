/*
  Warnings:

  - You are about to drop the column `availibility` on the `Service` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Service" DROP COLUMN "availibility";

-- CreateTable
CREATE TABLE "Service_Payment" (
    "id" TEXT NOT NULL,
    "AccountHolder" TEXT NOT NULL,
    "BankName" TEXT NOT NULL,
    "RoutingNumber" TEXT NOT NULL,
    "AccountNumber" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,

    CONSTRAINT "Service_Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Service_Payment_service_id_key" ON "Service_Payment"("service_id");

-- AddForeignKey
ALTER TABLE "Service_Payment" ADD CONSTRAINT "Service_Payment_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "ServiceProvider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
