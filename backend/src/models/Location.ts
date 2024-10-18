import { db } from "../../prisma/PrismaClient";
import { Location } from "@prisma/client";

export class Locations {
  static async create(data: Omit<Location, "location_id">): Promise<Location> {
    return await db.location.create({ data });
  }

  static async findById(locationId: string): Promise<Location | null> {
    return await db.location.findUnique({ where: { location_id: locationId } });
  }

  // Add more methods as needed
}