-- CreateTable
CREATE TABLE "Service_Sell" (
    "id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "meal_image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "additional_items" TEXT NOT NULL,
    "allow_customization" BOOLEAN NOT NULL,

    CONSTRAINT "Service_Sell_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Service_Sell_service_id_key" ON "Service_Sell"("service_id");

-- AddForeignKey
ALTER TABLE "Service_Sell" ADD CONSTRAINT "Service_Sell_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
