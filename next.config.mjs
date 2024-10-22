/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        WEATHERAPI_KEY: process.env.WEATHERAPI_KEY,
        WEATHER_URL: process.env.WEATHER_URL
    },
};

export default nextConfig;
