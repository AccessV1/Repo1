/*
  Warnings:

  - The primary key for the `Location` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `location_address` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `location_city` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `location_country` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `location_id` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `location_state` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `location_zip` on the `Location` table. All the data in the column will be lost.
  - The primary key for the `Orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `order_description` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `order_id` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `order_list` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `order_price` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `order_status` on the `Orders` table. All the data in the column will be lost.
  - The primary key for the `Payment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `payment_CVV` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `payment_expiration` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `payment_id` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `payment_numbers` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `post_content` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `post_time` on the `Post` table. All the data in the column will be lost.
  - The primary key for the `Promotions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `promotion_description` on the `Promotions` table. All the data in the column will be lost.
  - You are about to drop the column `promotion_id` on the `Promotions` table. All the data in the column will be lost.
  - You are about to drop the column `promotion_percent` on the `Promotions` table. All the data in the column will be lost.
  - You are about to drop the column `service_availibility` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `service_description` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `service_images` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `service_license` on the `Service` table. All the data in the column will be lost.
  - The primary key for the `ServiceImages` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `service_image_id` on the `ServiceImages` table. All the data in the column will be lost.
  - You are about to drop the column `service_image_url` on the `ServiceImages` table. All the data in the column will be lost.
  - The primary key for the `ServiceProvider` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `provider_contact` on the `ServiceProvider` table. All the data in the column will be lost.
  - You are about to drop the column `provider_email` on the `ServiceProvider` table. All the data in the column will be lost.
  - You are about to drop the column `provider_id` on the `ServiceProvider` table. All the data in the column will be lost.
  - You are about to drop the column `provider_name` on the `ServiceProvider` table. All the data in the column will be lost.
  - You are about to drop the column `provider_rating` on the `ServiceProvider` table. All the data in the column will be lost.
  - The primary key for the `ServiceTypes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `service_type_id` on the `ServiceTypes` table. All the data in the column will be lost.
  - Added the required column `address` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Location` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Location` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `state` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zip` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Orders` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `list` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CVV` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expiration` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Payment` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `numbers` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creation_date` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Promotions` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Promotions` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `percent` to the `Promotions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `availibility` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `images` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `license` to the `Service` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `ServiceImages` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `image_url` to the `ServiceImages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact` to the `ServiceProvider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `ServiceProvider` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `ServiceProvider` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `name` to the `ServiceProvider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `ServiceProvider` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `ServiceTypes` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_payment_id_fkey";

-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_location_id_fkey";

-- DropForeignKey
ALTER TABLE "Promotions" DROP CONSTRAINT "Promotions_service_type_id_fkey";

-- DropForeignKey
ALTER TABLE "ServiceProvider" DROP CONSTRAINT "ServiceProvider_location_id_fkey";

-- AlterTable
ALTER TABLE "Location" DROP CONSTRAINT "Location_pkey",
DROP COLUMN "location_address",
DROP COLUMN "location_city",
DROP COLUMN "location_country",
DROP COLUMN "location_id",
DROP COLUMN "location_state",
DROP COLUMN "location_zip",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "zip" INTEGER NOT NULL,
ADD CONSTRAINT "Location_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_pkey",
DROP COLUMN "order_description",
DROP COLUMN "order_id",
DROP COLUMN "order_list",
DROP COLUMN "order_price",
DROP COLUMN "order_status",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "list" TEXT NOT NULL,
ADD COLUMN     "price" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD CONSTRAINT "Orders_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_pkey",
DROP COLUMN "payment_CVV",
DROP COLUMN "payment_expiration",
DROP COLUMN "payment_id",
DROP COLUMN "payment_numbers",
ADD COLUMN     "CVV" INTEGER NOT NULL,
ADD COLUMN     "expiration" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "numbers" INTEGER NOT NULL,
ADD CONSTRAINT "Payment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "post_content",
DROP COLUMN "post_time",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "creation_date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Promotions" DROP CONSTRAINT "Promotions_pkey",
DROP COLUMN "promotion_description",
DROP COLUMN "promotion_id",
DROP COLUMN "promotion_percent",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "percent" INTEGER NOT NULL,
ADD CONSTRAINT "Promotions_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "service_availibility",
DROP COLUMN "service_description",
DROP COLUMN "service_images",
DROP COLUMN "service_license",
ADD COLUMN     "availibility" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "images" TEXT NOT NULL,
ADD COLUMN     "license" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ServiceImages" DROP CONSTRAINT "ServiceImages_pkey",
DROP COLUMN "service_image_id",
DROP COLUMN "service_image_url",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "image_url" TEXT NOT NULL,
ADD CONSTRAINT "ServiceImages_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ServiceProvider" DROP CONSTRAINT "ServiceProvider_pkey",
DROP COLUMN "provider_contact",
DROP COLUMN "provider_email",
DROP COLUMN "provider_id",
DROP COLUMN "provider_name",
DROP COLUMN "provider_rating",
ADD COLUMN     "contact" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "rating" INTEGER NOT NULL,
ADD CONSTRAINT "ServiceProvider_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ServiceTypes" DROP CONSTRAINT "ServiceTypes_pkey",
DROP COLUMN "service_type_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "ServiceTypes_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "ServiceProvider" ADD CONSTRAINT "ServiceProvider_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "Payment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Promotions" ADD CONSTRAINT "Promotions_service_type_id_fkey" FOREIGN KEY ("service_type_id") REFERENCES "ServiceTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
