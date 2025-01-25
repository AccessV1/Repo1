/*
  Warnings:

  - A unique constraint covering the columns `[Contract_Worker_Paymentid]` on the table `Contract_Worker` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Contract_Worker" ADD COLUMN     "Contract_Worker_Paymentid" TEXT;

-- CreateTable
CREATE TABLE "Contract_Worker_Payment" (
    "id" TEXT NOT NULL,
    "employee_id" TEXT NOT NULL,
    "AccountHolder" TEXT NOT NULL,
    "BankName" TEXT NOT NULL,
    "RoutingNumber" TEXT NOT NULL,
    "AccountNumber" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contract_Worker_Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contract_Worker_Contract_Worker_Paymentid_key" ON "Contract_Worker"("Contract_Worker_Paymentid");

-- AddForeignKey
ALTER TABLE "Contract_Worker" ADD CONSTRAINT "Contract_Worker_Contract_Worker_Paymentid_fkey" FOREIGN KEY ("Contract_Worker_Paymentid") REFERENCES "Contract_Worker_Payment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
