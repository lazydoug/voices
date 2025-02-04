/** @type {import('next').NextConfig} */
const nextConfig = {
  //Modify the default size limit for the body parser from 1mb to 50mb in API routes
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb',
    },
  },
}

export default nextConfig
