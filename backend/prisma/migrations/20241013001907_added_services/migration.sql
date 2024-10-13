-- CreateTable
CREATE TABLE "Service" (
    "service_id" TEXT NOT NULL,
    "service_name" TEXT NOT NULL,
    "location_id" TEXT NOT NULL,
    "service_description" TEXT NOT NULL,
    "service_type_id" TEXT NOT NULL,
    "service_price" TEXT NOT NULL,
    "service_availibility" TIMESTAMP(3) NOT NULL,
    "service_license" TEXT NOT NULL,
    "service_images" TEXT NOT NULL,
    "provider_id" TEXT NOT NULL,
    "menu_id" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("service_id")
);
