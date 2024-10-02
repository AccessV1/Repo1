import { Request } from "undici-types";

// define a user type later
type User = unknown;
type Token = string;

/**
 * Define User type before using
 */
export interface ProtectedRequest extends Request {
  user?: User;
  token?: Token;
}
