/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDocumentPreloading:false
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
