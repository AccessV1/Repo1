import { Request } from "undici-types";

// defined a user type later
type User = unknown;
type Token = string;

/**
 * Define User type before using
 */
export interface ProtectedRequest extends Request {
  user?: User;
  token?: Token;
}
