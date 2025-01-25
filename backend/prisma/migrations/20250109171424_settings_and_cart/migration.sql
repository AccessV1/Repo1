/*
  Warnings:

  - You are about to drop the column `user_id` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `CommentLikes` table. All the data in the column will be lost.
  - The primary key for the `Contract_Worker` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `employee_id` on the `Contract_Worker` table. All the data in the column will be lost.
  - You are about to drop the column `files` on the `Contract_Worker` table. All the data in the column will be lost.
  - You are about to drop the column `CVV` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `numbers` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `PostLike` table. All the data in the column will be lost.
  - You are about to drop the column `ImagesUpload_Created_at` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `ImagesUpload_Updated_at` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrls` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `profile_pic` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `DateModified` on the `RestaurantContract` table. All the data in the column will be lost.
  - You are about to drop the column `DateUploaded` on the `RestaurantContract` table. All the data in the column will be lost.
  - You are about to drop the column `profilePicture` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `UserFiles` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `messege` table. All the data in the column will be lost.
  - You are about to drop the `Orders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceImages` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[worker_id]` on the table `Service` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profile_id` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_date` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_id` to the `CommentLikes` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Contract_Worker` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `Orders` to the `HomeService_Sell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type_payment` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `posts_id` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_date` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_id` to the `PostLike` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_id` to the `Promotions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Uploaded_picture` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupID` to the `messege` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message_content` to the `messege` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `messege` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "serviceType2" AS ENUM ('Home_Kitchen', 'Driver');

-- CreateEnum
CREATE TYPE "PictureType" AS ENUM ('ProfilePicture', 'PostPicture');

-- CreateEnum
CREATE TYPE "PaymentProvider" AS ENUM ('APPLE_PAY', 'GOOGLE_PAY', 'PAYPAL', 'CASH_APP', 'CREDIT_CARD', 'DEBIT_CARD');

-- CreateEnum
CREATE TYPE "MessageType" AS ENUM ('TEXT', 'IMAGE', 'AUDIO');

-- CreateEnum
CREATE TYPE "AttachmentType" AS ENUM ('IMAGE', 'AUDIO', 'VIDEO', 'SHARED_USER_PROFILE');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('MESSAGE', 'COMMENT', 'LIKE', 'FOLLOW', 'OTHER');

-- AlterEnum
ALTER TYPE "Order_status" ADD VALUE 'Track';

-- AlterEnum
ALTER TYPE "serviceType" ADD VALUE 'Driver';

-- DropForeignKey
ALTER TABLE "Bank_type" DROP CONSTRAINT "Bank_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_user_id_fkey";

-- DropForeignKey
ALTER TABLE "CommentLikes" DROP CONSTRAINT "CommentLikes_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Contract_Worker" DROP CONSTRAINT "Contract_Worker_Contract_Worker_Paymentid_fkey";

-- DropForeignKey
ALTER TABLE "Followers" DROP CONSTRAINT "Followers_follower_id_fkey";

-- DropForeignKey
ALTER TABLE "Followers" DROP CONSTRAINT "Followers_following_id_fkey";

-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_service_id_fkey";

-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_user_id_fkey";

-- DropForeignKey
ALTER TABLE "PostLike" DROP CONSTRAINT "PostLike_user_id_fkey";

-- DropForeignKey
ALTER TABLE "ServiceImages" DROP CONSTRAINT "ServiceImages_service_id_fkey";

-- DropForeignKey
ALTER TABLE "Uploaded_picture" DROP CONSTRAINT "Uploaded_picture_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Vehicles" DROP CONSTRAINT "Vehicles_employee_id_fkey";

-- DropIndex
DROP INDEX "HomeServiceSell_Schedule_service_id_key";

-- DropIndex
DROP INDEX "HomeService_Sell_service_id_key";

-- DropIndex
DROP INDEX "Location_user_id_key";

-- DropIndex
DROP INDEX "Payment_bank_id_key";

-- DropIndex
DROP INDEX "UserFiles_Service_id_key";

-- DropIndex
DROP INDEX "UserFiles_user_id_key";

-- DropIndex
DROP INDEX "User_Location_user_id_key";

-- DropIndex
DROP INDEX "service_review_service_id_key";

-- DropIndex
DROP INDEX "service_review_user_id_key";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "user_id",
ADD COLUMN     "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_date" TIMESTAMP(3),
ADD COLUMN     "profile_id" TEXT NOT NULL,
ADD COLUMN     "updated_date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "CommentLikes" DROP COLUMN "user_id",
ADD COLUMN     "like_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "profile_id" TEXT NOT NULL,
ADD COLUMN     "unlike_date" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Contract_Worker" DROP CONSTRAINT "Contract_Worker_pkey",
DROP COLUMN "employee_id",
DROP COLUMN "files",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Contract_Worker_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "HomeService_Sell" ADD COLUMN     "Orders" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "CVV",
DROP COLUMN "numbers",
ADD COLUMN     "Card_numbers" TEXT,
ADD COLUMN     "type_payment" "PaymentProvider" NOT NULL,
ALTER COLUMN "expiration" DROP NOT NULL,
ALTER COLUMN "payment_type" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "user_id",
ADD COLUMN     "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_date" TIMESTAMP(3),
ADD COLUMN     "posts_id" TEXT NOT NULL,
ADD COLUMN     "updated_date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "PostLike" DROP COLUMN "user_id",
ADD COLUMN     "like_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "profile_id" TEXT NOT NULL,
ADD COLUMN     "unlike_date" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "ImagesUpload_Created_at",
DROP COLUMN "ImagesUpload_Updated_at",
DROP COLUMN "imageUrls",
DROP COLUMN "profile_pic";

-- AlterTable
ALTER TABLE "Promotions" ADD COLUMN     "service_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RestaurantContract" DROP COLUMN "DateModified",
DROP COLUMN "DateUploaded",
ADD COLUMN     "DateSigned" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "signed" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "worker_id" TEXT;

-- AlterTable
ALTER TABLE "Uploaded_picture" ADD COLUMN     "type" "PictureType" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "profilePicture",
ADD COLUMN     "DOB" TEXT NOT NULL DEFAULT '2005-01-01T00:00:00.000Z',
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "UserFiles" DROP COLUMN "user_id";

-- AlterTable
ALTER TABLE "User_Device" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "messege" DROP COLUMN "message",
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "groupID" TEXT NOT NULL,
ADD COLUMN     "message_content" TEXT NOT NULL,
ADD COLUMN     "type" "MessageType" NOT NULL;

-- DropTable
DROP TABLE "Orders";

-- DropTable
DROP TABLE "ServiceImages";

-- CreateTable
CREATE TABLE "UserServiceOptIn" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "service_id" TEXT,
    "opted_in" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserServiceOptIn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" TEXT NOT NULL,
    "role1" "User_roles",
    "role2" "User_roles",
    "user_id" TEXT NOT NULL,
    "permission_tyoe1" "serviceType",
    "permission_tyoe2" "serviceType",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserOrdersHistory" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "status" "Order_status",
    "location_id" TEXT NOT NULL,
    "buyer_id" TEXT NOT NULL,
    "seller_id" TEXT NOT NULL,
    "menu_item" TEXT,
    "HomeKitchenOrder" TEXT,
    "date_created" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "date_recived" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "date_cancelled" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "date_shipped" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserOrdersHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCart" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "payment_method" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserCart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CartItem" (
    "id" TEXT NOT NULL,
    "cart_id" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "Service_tip" TEXT,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_bank_info" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "payment_id" TEXT NOT NULL,
    "holders_name" TEXT NOT NULL,
    "bank_name" TEXT NOT NULL,
    "account_number" TEXT NOT NULL,
    "routing_number" TEXT NOT NULL,
    "primary_account" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "removed_at" TIMESTAMP(3),

    CONSTRAINT "user_bank_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messageAttachment" (
    "id" TEXT NOT NULL,
    "message_id" TEXT NOT NULL,
    "type" "AttachmentType" NOT NULL,
    "attachment_url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "messageAttachment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Views" (
    "id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "profile_id" TEXT NOT NULL,
    "view_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Views_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" "NotificationType" NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT,
    "link" TEXT,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settings" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "profile_id" TEXT NOT NULL,
    "Terms_id" TEXT NOT NULL,
    "DeactivateAccount" BOOLEAN NOT NULL,
    "BankAccount" TEXT NOT NULL,
    "DivinoWallet" TEXT NOT NULL,

    CONSTRAINT "settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deactivateAccount" (
    "id" TEXT NOT NULL,
    "setting_id" TEXT NOT NULL,
    "content_displayed" TEXT NOT NULL,
    "deactivated" BOOLEAN NOT NULL DEFAULT false,
    "deactivatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "deactivateAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deleteAccount" (
    "id" TEXT NOT NULL,
    "setting_id" TEXT NOT NULL,
    "content_displayed" TEXT NOT NULL,
    "delete" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "deleteAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "setting_permissions" (
    "id" TEXT NOT NULL,
    "setting_id" TEXT NOT NULL,
    "use_camera" BOOLEAN NOT NULL DEFAULT true,
    "use_contacts" BOOLEAN NOT NULL DEFAULT true,
    "use_location" BOOLEAN NOT NULL DEFAULT true,
    "use_micorphone" BOOLEAN NOT NULL DEFAULT true,
    "use_notification" BOOLEAN NOT NULL DEFAULT true,
    "use_media" BOOLEAN NOT NULL DEFAULT true,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "setting_permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DivinoWallets" (
    "id" TEXT NOT NULL,
    "user_payment_id" TEXT NOT NULL,
    "wallet_id" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL DEFAULT 0.00,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DivinoWallets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Support" (
    "id" TEXT NOT NULL,
    "support_id" TEXT NOT NULL,
    "blurb" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Support_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserToroles" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_UserToroles_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_FollowersToProfile" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_FollowersToProfile_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserServiceOptIn_user_id_key" ON "UserServiceOptIn"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "UserServiceOptIn_service_id_key" ON "UserServiceOptIn"("service_id");

-- CreateIndex
CREATE UNIQUE INDEX "roles_role1_key" ON "roles"("role1");

-- CreateIndex
CREATE UNIQUE INDEX "roles_role2_key" ON "roles"("role2");

-- CreateIndex
CREATE UNIQUE INDEX "roles_user_id_key" ON "roles"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "roles_permission_tyoe1_key" ON "roles"("permission_tyoe1");

-- CreateIndex
CREATE UNIQUE INDEX "roles_permission_tyoe2_key" ON "roles"("permission_tyoe2");

-- CreateIndex
CREATE UNIQUE INDEX "settings_user_id_key" ON "settings"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "settings_profile_id_key" ON "settings"("profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "settings_Terms_id_key" ON "settings"("Terms_id");

-- CreateIndex
CREATE UNIQUE INDEX "settings_DivinoWallet_key" ON "settings"("DivinoWallet");

-- CreateIndex
CREATE UNIQUE INDEX "DivinoWallets_user_payment_id_key" ON "DivinoWallets"("user_payment_id");

-- CreateIndex
CREATE INDEX "_UserToroles_B_index" ON "_UserToroles"("B");

-- CreateIndex
CREATE INDEX "_FollowersToProfile_B_index" ON "_FollowersToProfile"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Service_worker_id_key" ON "Service"("worker_id");

-- AddForeignKey
ALTER TABLE "UserServiceOptIn" ADD CONSTRAINT "UserServiceOptIn_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Uploaded_picture" ADD CONSTRAINT "Uploaded_picture_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Uploaded_picture" ADD CONSTRAINT "Uploaded_picture_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Promotions" ADD CONSTRAINT "Promotions_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOrdersHistory" ADD CONSTRAINT "UserOrdersHistory_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOrdersHistory" ADD CONSTRAINT "UserOrdersHistory_buyer_id_fkey" FOREIGN KEY ("buyer_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOrdersHistory" ADD CONSTRAINT "UserOrdersHistory_menu_item_fkey" FOREIGN KEY ("menu_item") REFERENCES "MenuItems"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOrdersHistory" ADD CONSTRAINT "UserOrdersHistory_HomeKitchenOrder_fkey" FOREIGN KEY ("HomeKitchenOrder") REFERENCES "HomeService_Sell"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCart" ADD CONSTRAINT "UserCart_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "UserCart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_bank_info" ADD CONSTRAINT "user_bank_info_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "settings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract_Worker" ADD CONSTRAINT "Contract_Worker_id_fkey" FOREIGN KEY ("id") REFERENCES "Service"("worker_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicles" ADD CONSTRAINT "Vehicles_id_fkey" FOREIGN KEY ("id") REFERENCES "Contract_Worker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract_Worker_Payment" ADD CONSTRAINT "Contract_Worker_Payment_id_fkey" FOREIGN KEY ("id") REFERENCES "Contract_Worker"("Contract_Worker_Paymentid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messageAttachment" ADD CONSTRAINT "messageAttachment_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "messege"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_posts_id_fkey" FOREIGN KEY ("posts_id") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentLikes" ADD CONSTRAINT "CommentLikes_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostLike" ADD CONSTRAINT "PostLike_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Views" ADD CONSTRAINT "Views_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Views" ADD CONSTRAINT "Views_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "settings" ADD CONSTRAINT "settings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "settings" ADD CONSTRAINT "settings_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "settings" ADD CONSTRAINT "settings_Terms_id_fkey" FOREIGN KEY ("Terms_id") REFERENCES "Terms_of_Services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deactivateAccount" ADD CONSTRAINT "deactivateAccount_setting_id_fkey" FOREIGN KEY ("setting_id") REFERENCES "settings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deleteAccount" ADD CONSTRAINT "deleteAccount_setting_id_fkey" FOREIGN KEY ("setting_id") REFERENCES "settings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setting_permissions" ADD CONSTRAINT "setting_permissions_setting_id_fkey" FOREIGN KEY ("setting_id") REFERENCES "settings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DivinoWallets" ADD CONSTRAINT "DivinoWallets_wallet_id_fkey" FOREIGN KEY ("wallet_id") REFERENCES "settings"("DivinoWallet") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DivinoWallets" ADD CONSTRAINT "DivinoWallets_user_payment_id_fkey" FOREIGN KEY ("user_payment_id") REFERENCES "Service_Payment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Support" ADD CONSTRAINT "Support_support_id_fkey" FOREIGN KEY ("support_id") REFERENCES "settings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToroles" ADD CONSTRAINT "_UserToroles_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToroles" ADD CONSTRAINT "_UserToroles_B_fkey" FOREIGN KEY ("B") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FollowersToProfile" ADD CONSTRAINT "_FollowersToProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "Followers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FollowersToProfile" ADD CONSTRAINT "_FollowersToProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
