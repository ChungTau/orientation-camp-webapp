import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pocketbase = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_API_URL);

type Data = {
  message: string;
  user?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, email, password, passwordConfirm } = req.body;

  if (!username || !email || !password || !passwordConfirm) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (password !== passwordConfirm) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    // Create a new user in PocketBase
    const newUser = await pocketbase.collection('users').create({
      username,
      email,
      password,
      passwordConfirm,
    });

    return res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ message: 'Error creating user' });
  }
}