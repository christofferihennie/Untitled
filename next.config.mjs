/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: ['./styles'],
        implementation: 'sass-embedded',
    },
};

export default nextConfig;
