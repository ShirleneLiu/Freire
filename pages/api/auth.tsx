// pages/api/auth.tsx
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: 'Code is required' });
  }

  try {
    const response = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: process.env.GITHUB_OAUTH_CLIENT_ID,
      client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
      code,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    const accessToken = response.data.access_token;

    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    const userInfo = {
      username: userResponse.data.login,
      avatarUrl: userResponse.data.avatar_url,
    };

    console.log('userInfo:', userInfo);

    res.status(200).json(userInfo);
  } catch (error) {
    console.error('Failed to fetch access token or user info:', error);
    res.status(500).json({ error: 'Failed to fetch access token or user info' });
  }
}

    