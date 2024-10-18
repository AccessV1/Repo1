import { db } from "../../prisma/PrismaClient";
import { Customer } from "@prisma/client";

export class Customers {
  static async create(data: Omit<Customer, "customer_id">): Promise<Customer> {
    return await db.customer.create({ data });
  }

  static async findById(customerId: string): Promise<Customer | null> {
    return await db.customer.findUnique({ where: { customer_id: customerId } });
  }

  // Add more methods as needed
}