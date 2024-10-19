import { db } from "../../prisma/PrismaClient";
import { Service } from "@prisma/client";

export class Services {
  /**
   * Create a new service.
   * @param serviceData - Service data
   * @returns The created service
   */
  static async create(serviceData: Omit<Service, "service_id">): Promise<Service> {
    const service = await db.service.create({
      data: serviceData,
    });
    return service;
  }

  /**
   * Find a service by its ID.
   * @param serviceId - Service ID
   * @returns Service object or null
   */
  static async findById(serviceId: string): Promise<Service | null> {
    const service = await db.service.findUnique({
      where: {
        service_id: serviceId,
      },
    });
    return service;
  }

  static async search(query: string) {
    const service = await db.service.findMany({
      where:{
        OR:[
          {
            service_name: {
              contains: query,
              mode: 'insensitive'
            }
          },
          {
            service_description: {
              contains: query,
              mode: 'insensitive'
            }
          }
        ]
      }
    })

    return service
  }

  // future methods:update, delete, list all services @Brandon Ramos
}
