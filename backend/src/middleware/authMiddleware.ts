import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler";
import { NextFunction, Response } from "express";
import { Users } from "../models/User";
import { RefreshTokens } from "../models/RefreshToken";
import { generateRefreshToken, refreshAccessToken } from "../utils/jwtHelpers";
import { ProtectedRequest } from "../types";

interface DecodedToken {
  id: string;
}

export const protect = asyncHandler(
  async (req: ProtectedRequest, res: Response, next: NextFunction) => {
    let accessToken: string | null = null;
    let refreshToken: string | null = null;
    try {
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
      ) {
        accessToken = req.headers.authorization.split(" ")[1];
        refreshToken = req.headers.authorization.split(" ")[2];
      }

      if (accessToken) {
        const decoded = jwt.verify(
          accessToken,
          process.env.JWT_ACCESS_SECRET!
        ) as DecodedToken;

        const user = await Users.findById(decoded.id);
        if (!user) {
          res.status(401);
          throw new Error("Not authorized, user not found");
        }

        req.user = user;
        next();
        return;
      }
    } catch (err) {
      if (err instanceof jwt.TokenExpiredError) {
        if (refreshToken) {
          const newAccessToken = await refreshAccessToken(refreshToken, res);
          const decoded = jwt.verify(
            newAccessToken,
            process.env.JWT_ACCESS_SECRET!
          ) as DecodedToken;
          const user = await Users.findById(decoded.id);
          if (!user) {
            res.status(401);
            throw new Error("Not authorized, user not found");
          }
          req.user = user;
          req.accessToken = accessToken as string;
          next();
          return;
        }
      }

      res.status(401);
      throw new Error("Not authorized, no tokens provided");
    }
  }
);
