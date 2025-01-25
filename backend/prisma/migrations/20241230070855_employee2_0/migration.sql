/*
  Warnings:

  - The values [Truck] on the enum `vehicleType` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `registartion_number` to the `Vehicles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "vehicleType_new" AS ENUM ('Car', 'Motorcycle', 'Bike');
ALTER TABLE "Vehicles" ALTER COLUMN "vehicle_type" TYPE "vehicleType_new" USING ("vehicle_type"::text::"vehicleType_new");
ALTER TYPE "vehicleType" RENAME TO "vehicleType_old";
ALTER TYPE "vehicleType_new" RENAME TO "vehicleType";
DROP TYPE "vehicleType_old";
COMMIT;

-- DropIndex
DROP INDEX "Contract_Worker_phoneNumber_key";

-- AlterTable
ALTER TABLE "Vehicles" ADD COLUMN     "registartion_number" TEXT NOT NULL;
