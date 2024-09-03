/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dougdev.vercel.app',
            
            },
        ],
    },
};

export default nextConfig;
