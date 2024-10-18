import { db } from "../../prisma/PrismaClient";
import { Menu } from "@prisma/client";

export class Menus {
  static async create(data: Omit<Menu, "menu_id">): Promise<Menu> {
    return await db.menu.create({ data });
  }

  static async findById(menuId: string): Promise<Menu | null> {
    return await db.menu.findUnique({ where: { menu_id: menuId } });
  }

  // Add more methods as needed
}