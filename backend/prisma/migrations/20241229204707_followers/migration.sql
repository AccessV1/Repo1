/*
  Warnings:

  - You are about to drop the column `birth_date` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[follower]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[following]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `follower` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `following` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `views` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_type` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "serviceType" AS ENUM ('Home_Kitchen', 'commerial_Kitchen');

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "birth_date",
DROP COLUMN "gender",
ADD COLUMN     "follower" INTEGER NOT NULL,
ADD COLUMN     "following" INTEGER NOT NULL,
ADD COLUMN     "views" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "service_type" "serviceType" NOT NULL;

-- CreateTable
CREATE TABLE "Followers" (
    "id" TEXT NOT NULL,
    "follower_id" TEXT NOT NULL,
    "following_id" TEXT NOT NULL,

    CONSTRAINT "Followers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_follower_key" ON "Profile"("follower");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_following_key" ON "Profile"("following");

-- AddForeignKey
ALTER TABLE "Followers" ADD CONSTRAINT "Followers_follower_id_fkey" FOREIGN KEY ("follower_id") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Followers" ADD CONSTRAINT "Followers_following_id_fkey" FOREIGN KEY ("following_id") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
