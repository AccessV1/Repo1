/*
  Warnings:

  - Added the required column `accepted` to the `Terms_of_Services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Terms_of_Services" ADD COLUMN     "accepted" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "Login_services" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "login_service" TEXT NOT NULL,
    "login_token" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "used_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Login_services_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Login_services" ADD CONSTRAINT "Login_services_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
