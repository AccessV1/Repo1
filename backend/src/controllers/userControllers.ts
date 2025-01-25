import { Request, Response } from 'express';
import supabase from '../auth/supabaseClient';

export const syncUser = async (req: Request, res: Response) => {
  const { user } = req.body;

  try {
    if (!user || !user.email || !user.username || !user.password || !user.phoneNumber || !user.policy_id) {
      return res.status(400).json({ error: 'Missing required user data' });
    }

    // Stiores data from google auth in database
    const { data, error } = await supabase
      .from('users')
      .upsert({
        id: user.id,
        email: user.email,
        username: user.username,
        password: user.password,
        phoneNumber: user.phoneNumber,
        firstName: user.firstName,
        lastName: user.lastName,
        policy_id: user.policy_id,
        provider: user.provider || null,
        service_id: user.service_id || null,
        worker_id: user.worker_id || null,
        payment_id: user.payment_id || null,
        deletedAt: user.deletedAt || null,
        DOB: user.DOB || '2006-01-01T00:00:00.000Z',
      });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Unknown error occurred' });
  }
};
