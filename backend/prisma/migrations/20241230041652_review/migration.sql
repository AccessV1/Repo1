/*
  Warnings:

  - Added the required column `payment_type` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "payment_type" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "service_review" (
    "id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "review" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "service_review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "service_review_service_id_key" ON "service_review"("service_id");

-- CreateIndex
CREATE UNIQUE INDEX "service_review_customer_id_key" ON "service_review"("customer_id");

-- AddForeignKey
ALTER TABLE "service_review" ADD CONSTRAINT "service_review_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_review" ADD CONSTRAINT "service_review_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;
