import { db } from "../../prisma/PrismaClient";
import { Promotions } from "@prisma/client";

export class Promotion {
  static async create(data: Omit<Promotions, "promotion_id">): Promise<Promotions> {
    return await db.promotions.create({ data });
  }

  static async findById(promotionId: string): Promise<Promotions | null> {
    return await db.promotions.findUnique({ where: { promotion_id: promotionId } });
  }

  // Add more methods as needed
}