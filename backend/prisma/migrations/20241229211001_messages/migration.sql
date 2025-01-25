/*
  Warnings:

  - You are about to drop the column `created_at` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "created_at",
ADD COLUMN     "ImagesUpload_Created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "ImagesUpload_Updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "imageUrls" TEXT;

-- CreateTable
CREATE TABLE "messege" (
    "id" TEXT NOT NULL,
    "User_sender_id" TEXT NOT NULL,
    "User_receiver_id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "messege_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "messege" ADD CONSTRAINT "messege_User_sender_id_fkey" FOREIGN KEY ("User_sender_id") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messege" ADD CONSTRAINT "messege_User_receiver_id_fkey" FOREIGN KEY ("User_receiver_id") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
