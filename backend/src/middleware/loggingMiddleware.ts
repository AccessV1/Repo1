import { Request, Response, NextFunction } from 'express';

// Logging Middleware
const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  console.log('Query Params:', req.query);
  console.log('Body:', req.body);


  next();
};

export default loggerMiddleware;