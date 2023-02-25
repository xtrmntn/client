/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SERVER_HOST: process.env.SERVER_HOST,
    API_URL: process.env.API_URL,
    UPLOADS_URL: process.env.UPLOADS_URL,
    COMPANY_NAME: process.env.COMPANY_NAME,
  },
  images: {
    domains: [process.env.SERVER_HOST],
  },
};
