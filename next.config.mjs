/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — deployed as pre-rendered assets on Cloudflare
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
