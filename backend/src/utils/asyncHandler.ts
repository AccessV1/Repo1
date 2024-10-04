import { Request, Response, NextFunction, RequestHandler } from "express";
import { ProtectedRequest } from "../types";

/**
 *@description A utility function to wrap asynchronous route handlers.
 * It automatically catches errors in async functions and passes them to the Express error handler.
 * This avoids the need for manual try-catch blocks in every async route handler.
 *
 */
export const asyncHandler = (fn: Function) => {
  return (
    req: Request | ProtectedRequest,
    res: Response,
    next: NextFunction
  ) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
