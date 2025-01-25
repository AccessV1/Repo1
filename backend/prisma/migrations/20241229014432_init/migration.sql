/*
  Warnings:

  - The values [Contract_Worker] on the enum `User_roles` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `location_id` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `terms_of_service` on the `Terms_of_Services` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[policy_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `terms_of_service_content` to the `Terms_of_Services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `policy_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "User_roles_new" AS ENUM ('ADMIN', 'USER', 'CONTRACT_EMPLOYEE', 'SERVICE_PROVIDER', 'CUSTOMER');
ALTER TABLE "User" ALTER COLUMN "role" TYPE "User_roles_new" USING ("role"::text::"User_roles_new");
ALTER TYPE "User_roles" RENAME TO "User_roles_old";
ALTER TYPE "User_roles_new" RENAME TO "User_roles";
DROP TYPE "User_roles_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_id_fkey";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "location_id";

-- AlterTable
ALTER TABLE "Terms_of_Services" DROP COLUMN "terms_of_service",
ADD COLUMN     "terms_of_service_content" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "policy_id" TEXT NOT NULL,
ALTER COLUMN "role" SET DEFAULT 'USER';

-- CreateTable
CREATE TABLE "Privacy_Policy" (
    "id" TEXT NOT NULL,
    "Privacy_Policy_content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accepted" BOOLEAN NOT NULL,

    CONSTRAINT "Privacy_Policy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserToUser_Address" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_UserToUser_Address_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_UserToUser_Address_B_index" ON "_UserToUser_Address"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_policy_id_key" ON "User"("policy_id");

-- AddForeignKey
ALTER TABLE "Privacy_Policy" ADD CONSTRAINT "Privacy_Policy_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("policy_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToUser_Address" ADD CONSTRAINT "_UserToUser_Address_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToUser_Address" ADD CONSTRAINT "_UserToUser_Address_B_fkey" FOREIGN KEY ("B") REFERENCES "User_Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;
