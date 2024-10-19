import { db } from "../../prisma/PrismaClient";
import { ServiceTypes } from "@prisma/client";

export class ServiceType {
  static async create(data: Omit<ServiceTypes, "service_type_id">): Promise<ServiceTypes> {
    return await db.serviceTypes.create({ data });
  }

  static async findById(serviceTypeId: string): Promise<ServiceTypes | null> {
    return await db.serviceTypes.findUnique({ where: { service_type_id: serviceTypeId } });
  }

  // Add more methods as needed
}