import { Request, Response } from 'express';
import supabase from './supabaseClient'; 
import prisma from '../auth/supabaseClient'; 

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password, username, firstName, lastName, phoneNumber, role } = req.body;

  try {
    if (!email || !password || !username || !firstName || !lastName || !phoneNumber || !role) {
      res.status(400).json({ error: 'All fields are required.' });
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error || !data || !data.user) {
      res.status(400).json({
        error: error?.message || 'Failed to create user in Supabase Auth',
      });
      return;
    }

    const newUser = await prisma.user.create({
      data: {
        id: data.user.id, 
        email,
        username,
        firstName,
        lastName,
        phoneNumber,
        role,
      },
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: newUser,
    });
  } catch (error) {
    console.error('Error during signup:', error);

    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred.' });
    }
  }
};
