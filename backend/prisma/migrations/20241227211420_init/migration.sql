-- CreateTable
CREATE TABLE "User_Device" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "device_id" TEXT NOT NULL,
    "device_type" TEXT NOT NULL,
    "device_name" TEXT NOT NULL,

    CONSTRAINT "User_Device_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Device_user_id_key" ON "User_Device"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_Device_device_id_key" ON "User_Device"("device_id");

-- AddForeignKey
ALTER TABLE "User_Device" ADD CONSTRAINT "User_Device_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
