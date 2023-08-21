import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      req.user = decoded; // Attach decoded user info to the request
    } catch (err) {
      // Handle token verification error (e.g., return an error response)
      return res.status(401).json({ error: 'Invalid token' });
    }
  }

  next();
};
