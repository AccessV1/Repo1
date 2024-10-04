import { Request } from "express";
import { User } from "@prisma/client";
// define a user type later

/**
 * Define User type before using
 */
export interface ProtectedRequest extends Request {
  user?: User;
  token?: string;
}

export interface UserWithOptionalPassword extends Omit<User, "password"> {
  password?: string;
}
