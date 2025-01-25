// Routes the frontend to the backend API using express functions

// Importnat 
// Not route througfh supabase/prisma cuz frontend

import { Router } from 'express';
import { registerUser } from '../auth/authController';

const authRoutes = Router();

authRoutes.post('/register', registerUser);

export default authRoutes;