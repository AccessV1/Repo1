import { db } from "../../prisma/PrismaClient";
import { ServiceImages } from "@prisma/client";

export class ServiceImage {
  static async create(data: Omit<ServiceImages, "service_image_id">): Promise<ServiceImages> {
    return await db.serviceImages.create({ data });
  }

  static async findById(serviceImageId: string): Promise<ServiceImages | null> {
    return await db.serviceImages.findUnique({ where: { service_image_id: serviceImageId } });
  }

  // Add more methods as needed
}