import { asyncHandler } from "../utils/asyncHandler";
import { ProtectedRequest } from "../types";
/**
 * @desc Registers a new user
 * @route POST /api/auth/register
 * @access Public
 */
export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {}
);

/**
 * @desc Authenticates a user
 * @route POST /api/auth/login
 * @access Public
 */
export const loginUser = asyncHandler(
  async (req: Request, res: Response) => {}
);

/**
 * @desc Gets user data
 * @route GET /api/users/getUser
 * @access Private
 */
export const getUser = asyncHandler(
  async (req: ProtectedRequest, res: Response) => {}
);

/***
 * @desc Logs out a user by clearing cookies and removing the user's refresh token from the database
 * @route GET /api/auth/logout
 * @access Private
 */
export const logoutUser = asyncHandler(
  async (req: Request, res: Response) => {}
);
