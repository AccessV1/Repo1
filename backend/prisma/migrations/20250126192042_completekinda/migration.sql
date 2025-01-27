/*
  Warnings:

  - The values [Certificate_of_Registartion] on the enum `RequiredFiles` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[admin_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `privacy_Policy_id` to the `Privacy_Policy` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `password` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "RequiredFiles_new" AS ENUM ('Certificate_of_Registration');
ALTER TABLE "HomeKitchen" ALTER COLUMN "requiredFiles" TYPE "RequiredFiles_new" USING ("requiredFiles"::text::"RequiredFiles_new");
ALTER TYPE "RequiredFiles" RENAME TO "RequiredFiles_old";
ALTER TYPE "RequiredFiles_new" RENAME TO "RequiredFiles";
DROP TYPE "RequiredFiles_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_id_fkey";

-- AlterTable
ALTER TABLE "Privacy_Policy" ADD COLUMN     "privacy_Policy_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "admin_id" TEXT,
ALTER COLUMN "email" DROP NOT NULL,
DROP COLUMN "password",
ADD COLUMN     "password" BOOLEAN NOT NULL,
ALTER COLUMN "phoneNumber" DROP NOT NULL,
ALTER COLUMN "policy_id" DROP NOT NULL,
ALTER COLUMN "DOB" SET DEFAULT '2006-01-01T00:00:00.000Z';

-- CreateTable
CREATE TABLE "Login" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "login_service" TEXT NOT NULL,
    "loginTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "logoutTime" TIMESTAMP(3),

    CONSTRAINT "Login_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_admin_id_key" ON "User"("admin_id");

-- AddForeignKey
ALTER TABLE "Login" ADD CONSTRAINT "Login_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("admin_id") ON DELETE RESTRICT ON UPDATE CASCADE;
