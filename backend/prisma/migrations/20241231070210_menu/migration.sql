/*
  Warnings:

  - You are about to drop the column `rating` on the `ServiceProvider` table. All the data in the column will be lost.
  - You are about to drop the `Menu` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `serving_hours` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number_same_as_restaurant` to the `ServiceProvider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `floor_number` to the `Service_Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shop_building_number` to the `Service_Location` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_menu_id_fkey";

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "serving_hours" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ServiceProvider" DROP COLUMN "rating",
ADD COLUMN     "number_same_as_restaurant" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Service_Location" ADD COLUMN     "floor_number" INTEGER NOT NULL,
ADD COLUMN     "shop_building_number" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Menu";

-- CreateTable
CREATE TABLE "Restaurant_Service" (
    "id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "Restaurant_Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenuCatagory" (
    "menu_id" TEXT NOT NULL,
    "catagory_name" TEXT NOT NULL,
    "servingHours" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "service_id" TEXT NOT NULL,

    CONSTRAINT "MenuCatagory_pkey" PRIMARY KEY ("menu_id")
);

-- CreateTable
CREATE TABLE "MenuItems" (
    "id" TEXT NOT NULL,
    "menu_id" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MenuItems_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_Service_service_id_key" ON "Restaurant_Service"("service_id");

-- AddForeignKey
ALTER TABLE "MenuCatagory" ADD CONSTRAINT "MenuCatagory_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuItems" ADD CONSTRAINT "MenuItems_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "MenuCatagory"("menu_id") ON DELETE RESTRICT ON UPDATE CASCADE;
