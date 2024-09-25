/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co.com',
                port: '',
                pathname: '/**',
            }  ,{
                protocol: 'https',
                hostname: 'i.ibb.co', // You can keep this entry if needed
                port: '',
                pathname: '/**',
            }
        ]
    }
};

export default nextConfig;
