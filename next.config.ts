import type { NextConfig } from "next";

const hostnames = ['lh3.googleusercontent.com', 'avatars.githubusercontent.com']

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: hostnames.map((hostname: string) => ({
            protocol: 'https',
            hostname
        }))
    }
};

export default nextConfig;
