-- AlterTable
ALTER TABLE "User" ADD COLUMN     "provider" TEXT,
ALTER COLUMN "DOB" SET DEFAULT '2006-01-01T00:00:00.000Z';

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DivinoImageBucket" (
    "id" TEXT NOT NULL,
    "file_name" TEXT NOT NULL,
    "who_made_change" TEXT NOT NULL,
    "file_type" TEXT NOT NULL,
    "file_size" INTEGER NOT NULL,
    "file_url" TEXT NOT NULL,
    "file_location" TEXT NOT NULL,
    "file_description" TEXT NOT NULL,
    "bucket_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DivinoImageBucket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_user_id_key" ON "Admin"("user_id");

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DivinoImageBucket" ADD CONSTRAINT "DivinoImageBucket_who_made_change_fkey" FOREIGN KEY ("who_made_change") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
