-- CreateTable
CREATE TABLE "ServiceProvider" (
    "provider_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "provider_name" TEXT NOT NULL,
    "provider_email" TEXT NOT NULL,
    "provider_contact" TEXT NOT NULL,
    "provider_rating" INTEGER NOT NULL,
    "location_id" TEXT NOT NULL,

    CONSTRAINT "ServiceProvider_pkey" PRIMARY KEY ("provider_id")
);

-- CreateTable
CREATE TABLE "Location" (
    "location_id" TEXT NOT NULL,
    "location_address" TEXT NOT NULL,
    "location_city" TEXT NOT NULL,
    "location_zip" INTEGER NOT NULL,
    "location_country" TEXT NOT NULL,
    "location_state" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("location_id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "order_id" TEXT NOT NULL,
    "order_description" TEXT NOT NULL,
    "order_price" TEXT NOT NULL,
    "order_list" TEXT NOT NULL,
    "order_status" TEXT NOT NULL,
    "location_id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "customer_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "payment_id" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "payment_id" TEXT NOT NULL,
    "payment_numbers" INTEGER NOT NULL,
    "payment_expiration" TIMESTAMP(3) NOT NULL,
    "payment_CVV" INTEGER NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("payment_id")
);

-- CreateTable
CREATE TABLE "ServiceTypes" (
    "service_type_id" TEXT NOT NULL,
    "service_name" TEXT NOT NULL,

    CONSTRAINT "ServiceTypes_pkey" PRIMARY KEY ("service_type_id")
);

-- CreateTable
CREATE TABLE "ServiceImages" (
    "service_image_id" TEXT NOT NULL,
    "service_image_url" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,

    CONSTRAINT "ServiceImages_pkey" PRIMARY KEY ("service_image_id")
);

-- CreateTable
CREATE TABLE "Promotions" (
    "promotion_id" TEXT NOT NULL,
    "promotion_percent" INTEGER NOT NULL,
    "promotion_description" TEXT NOT NULL,
    "service_type_id" TEXT NOT NULL,

    CONSTRAINT "Promotions_pkey" PRIMARY KEY ("promotion_id")
);

-- CreateTable
CREATE TABLE "Menu" (
    "menu_id" TEXT NOT NULL,
    "menu_item" TEXT NOT NULL,
    "menu_price" TEXT NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("menu_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ServiceProvider_user_id_key" ON "ServiceProvider"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_user_id_key" ON "Customer"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Promotions_service_type_id_key" ON "Promotions"("service_type_id");

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "Menu"("menu_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceProvider" ADD CONSTRAINT "ServiceProvider_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceProvider" ADD CONSTRAINT "ServiceProvider_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "Location"("location_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "Location"("location_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "Payment"("payment_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceImages" ADD CONSTRAINT "ServiceImages_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("service_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Promotions" ADD CONSTRAINT "Promotions_service_type_id_fkey" FOREIGN KEY ("service_type_id") REFERENCES "ServiceTypes"("service_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;
