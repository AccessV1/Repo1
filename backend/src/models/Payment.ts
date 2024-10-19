import { db } from "../../prisma/PrismaClient";
import { Payment } from "@prisma/client";

export class Payments {
  static async create(data: Omit<Payment, "payment_id">): Promise<Payment> {
    return await db.payment.create({ data });
  }

  static async findById(paymentId: string): Promise<Payment | null> {
    return await db.payment.findUnique({ where: { payment_id: paymentId } });
  }

  // Add more methods as needed
}