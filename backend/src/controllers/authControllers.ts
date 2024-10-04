import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { Users } from "../models/User";
import { User } from "@prisma/client";
import { generateAccessToken, generateRefreshToken } from "../utils/jwtHelpers";
import { ProtectedRequest } from "../types";
import { RefreshToken } from "@prisma/client";
import { RefreshTokens } from "../models/RefreshToken";
import { UserWithOptionalPassword } from "../types";
dotenv.config({ path: "../.env" });

/**
 * @desc Registers a new user
 * @route POST /api/auth/register
 * @access Public
 */
export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, username, phoneNumber, email, password, profilePicture } =
      req.body;

    const userExists = await Users.exists(email, username);
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const hashedPassword: string = await Users.hashPassword(password);

    const newUser = (await Users.create({
      name,
      username,
      email,
      phoneNumber,
      password: hashedPassword,
      profilePicture,
    })) as UserWithOptionalPassword;

    if (newUser) {
      const refreshToken = await generateRefreshToken(res, newUser.id!);
      const accessToken = generateAccessToken(newUser.id!);
      delete newUser.password;

      res.status(201).json({
        user: { ...newUser },
        refreshToken,
        accessToken,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  }
);

export const checkUserExistance = asyncHandler(
  async (req: Request, res: Response) => {
    const { uniqueIdentifier } = req.body;

    const userExists: boolean = !!Users.findByEmailOrUsername(uniqueIdentifier);

    res.json({ userExists });
  }
);

/**
 * @desc Authenticates a user
 * @route POST /api/auth/login
 * @access Public
 */
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { emailOrUsername, password } = req.body;


  const user = (await Users.findByEmailOrUsername(
    emailOrUsername
  )) as UserWithOptionalPassword;

  if (user && (await Users.verifyPassword(password, user.password as string))) {
    const refreshToken = await generateRefreshToken(res, user.id!);
    const accessToken = generateAccessToken(user.id!);
    delete user.password;

    res.json({
      user,
      refreshToken,
      accessToken,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

/**
 * @desc Gets user data
 * @route GET /api/users/getUser
 * @access Private
 */
export const getUser = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {
    res.send({user: req.user})
  }
);

/***
 * @desc Logs out a user by clearing cookies and removing the user's refresh token from the database
 * @route GET /api/auth/logout
 * @access Private
 */
export const logoutUser = asyncHandler(async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    res.json({ message: "Successfully logged out (refreshToken not found)" });
    return;
  }

  const decoded = jwt.verify(
    refreshToken,
    process.env.JWT_REFRESH_SECRET!
  ) as JwtPayload;
  await RefreshTokens.delete(decoded.id, refreshToken);
  res.json({ message: "Successfully logged out" });
});
