import { db } from "../../prisma/PrismaClient";
import { User } from "@prisma/client";
import bcrypt from "bcryptjs";

interface newUserRegistrationData extends Omit<User, "id" | "createdAt"> {}

export class Users {
  /**
   * Find a user by their email or username.
   * @param emailOrUsername - Email or Username
   * @returns User object or null
   */
  static async findByEmailOrUsername(
    emailOrUsername: string
  ): Promise<User | null> {
    const user: User | null = await db.user.findFirst({
      where: {
        OR: [{ email: emailOrUsername }, { username: emailOrUsername }],
      },
    });

    return user;
  }

  static async findByPhoneNumber(phoneNumber: string): Promise<User | null> {
    const user: User | null = await db.user.findFirst({
      where: {
        phoneNumber,
      },
    });

    return user;
  }

  /**
   * Find a user by their ID.
   * @param id - User ID
   * @returns User object or null
   */
  static async findById(id: string): Promise<User | null> {
    const user: User | null = await db.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  /**
   * Check if a user with a specific email or username already exists.
   * @param email - User email
   * @param username - Username
   * @returns True if a user exists, otherwise false
   */
  static async exists(email: string, username: string): Promise<boolean> {
    const user: User | null = await db.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    return !!user;
  }

  /**
   * Create a new user.
   * @param user - User data excluding the ID
   * @returns The created user or null
   */
  static async create(user: newUserRegistrationData): Promise<User | null> {
    const domainUser: User = await db.user.create({
      data: user,
    });
    return domainUser;
  }

  /**
   * Verify if the provided password matches the hashed password.
   * @param password - Plain text password
   * @param hashedPassword - Hashed password from the database
   * @returns True if passwords match, otherwise false
   */
  static async verifyPassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    const isCorrect = await bcrypt.compare(password, hashedPassword);
    return isCorrect;
  }

  /**
   * Hash a plain text password using bcrypt.
   * @param password - Plain text password
   * @returns Hashed password
   */
  static async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }
}
