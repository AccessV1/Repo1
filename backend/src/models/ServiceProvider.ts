import { db } from "../../prisma/PrismaClient";
import { ServiceProvider } from "@prisma/client";

export class ServiceProviders {
  static async create(data: Omit<ServiceProvider, "provider_id">): Promise<ServiceProvider> {
    return await db.serviceProvider.create({ data });
  }

  static async findById(providerId: string): Promise<ServiceProvider | null> {
    return await db.serviceProvider.findUnique({ where: { provider_id: providerId } });
  }

  // Add more methods as needed
}