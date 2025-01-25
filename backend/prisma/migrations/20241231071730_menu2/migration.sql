/*
  Warnings:

  - A unique constraint covering the columns `[additionalOptions_id]` on the table `MenuItems` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `additionalOptions_id` to the `MenuItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foodType` to the `MenuItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `images` to the `MenuItems` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "foodType" AS ENUM ('Non_Veg', 'Vegan', 'Vegitarian', 'Egg');

-- AlterTable
ALTER TABLE "MenuItems" ADD COLUMN     "additionalOptions_id" TEXT NOT NULL,
ADD COLUMN     "foodType" "foodType" NOT NULL,
ADD COLUMN     "images" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "AdditionsToMeal" (
    "id" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "additional_menu_items_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdditionsToMeal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MenuItems_additionalOptions_id_key" ON "MenuItems"("additionalOptions_id");

-- AddForeignKey
ALTER TABLE "AdditionsToMeal" ADD CONSTRAINT "AdditionsToMeal_additional_menu_items_id_fkey" FOREIGN KEY ("additional_menu_items_id") REFERENCES "MenuItems"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
