import { db } from "../../prisma/PrismaClient";
import { Orders } from "@prisma/client";

export class Order {
  static async create(data: Omit<Orders, "order_id">): Promise<Orders> {
    return await db.orders.create({ data });
  }

  static async findById(orderId: string): Promise<Orders | null> {
    return await db.orders.findUnique({ where: { order_id: orderId } });
  }

  // Add more methods as needed
}