import dotenv from 'dotenv';


dotenv.config();
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      GITHUB_OAUTH_CLIENT_ID: process.env.GITHUB_OAUTH_CLIENT_ID,
      GITHUB_API_TOKEN: process.env.GITHUB_API_TOKEN,
    },
    images: {
      domains: ['avatars.githubusercontent.com'],
    },
  };
export default nextConfig;
