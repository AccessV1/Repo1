import { db } from "../../prisma/PrismaClient";
import { RefreshToken } from "@prisma/client";

export class RefreshTokens {
  /**
   * Create a new refresh token for a user.
   * @param userId - User ID
   * @param token - Refresh token
   */
  static async create(
    userId: string,
    token: string
  ): Promise<RefreshToken | null> {
    // refresh token expires in 14 days
    const expiresAt = new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000);

    const refreshToken: RefreshToken | null = await db.refreshToken.create({
      data: {
        userId,
        token,
        expiresAt,
      },
    });

    return refreshToken;
  }

  /**
   * Delete a specific refresh token for a user.
   * @param userId - User ID
   * @param token - Refresh token
   */
  static async delete(userId: string, token: string): Promise<void> {
    await db.refreshToken.delete({
      where: {
        userId,
        token,
      },
    });
  }

  /**
   * Find a specific refresh token for a user.
   * @param userId - User ID
   * @param token - Refresh token
   * @returns Refresh token record
   */
  static async find(
    userId: string,
    token: string
  ): Promise<RefreshToken | null> {
    const refreshToken = await db.refreshToken.findFirst({
      where: {
        userId,
        token,
      },
    });

    return refreshToken;
  }

  /**
   * Delete all refresh tokens for a user.
   * @param userId - User ID
   */
  static async deleteAllForUser(userId: string): Promise<void> {
    await db.refreshToken.deleteMany({
      where: {
        userId,
      },
    });
  }
}
