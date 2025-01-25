/*
  Warnings:

  - The values [pending,delivered,cancelled,missing] on the enum `Order_status` will be removed. If these variants are still used in the database, this will fail.
  - The values [EMPLOYEE] on the enum `User_roles` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `date_cancelled` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `Account_type` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[bank_id]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bank_id` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Order_status_new" AS ENUM ('Preparing_Order', 'Order_Recived', 'Cancelled', 'Out_For_Delivery');
ALTER TABLE "Orders" ALTER COLUMN "status" TYPE "Order_status_new" USING ("status"::text::"Order_status_new");
ALTER TYPE "Order_status" RENAME TO "Order_status_old";
ALTER TYPE "Order_status_new" RENAME TO "Order_status";
DROP TYPE "Order_status_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "User_roles_new" AS ENUM ('ADMIN', 'USER', 'Contract_Worker', 'SERVICE_PROVIDER', 'CUSTOMER');
ALTER TABLE "User" ALTER COLUMN "role" TYPE "User_roles_new" USING ("role"::text::"User_roles_new");
ALTER TYPE "User_roles" RENAME TO "User_roles_old";
ALTER TYPE "User_roles_new" RENAME TO "User_roles";
DROP TYPE "User_roles_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_user_id_fkey";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "date_cancelled",
ADD COLUMN     "date_recived" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "Account_type",
ADD COLUMN     "bank_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "Employee";

-- CreateTable
CREATE TABLE "Bank_type" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "account_type" TEXT NOT NULL,
    "bank_name" TEXT NOT NULL,

    CONSTRAINT "Bank_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contract_Worker" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "hire_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ssn" TEXT NOT NULL,

    CONSTRAINT "Contract_Worker_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bank_type_user_id_key" ON "Bank_type"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Contract_Worker_user_id_key" ON "Contract_Worker"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Contract_Worker_ssn_key" ON "Contract_Worker"("ssn");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_bank_id_key" ON "Payment"("bank_id");

-- AddForeignKey
ALTER TABLE "Bank_type" ADD CONSTRAINT "Bank_type_id_fkey" FOREIGN KEY ("id") REFERENCES "Payment"("bank_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract_Worker" ADD CONSTRAINT "Contract_Worker_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
