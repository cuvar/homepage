/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // needed for docker deployment
  reactStrictMode: true,
}

module.exports = nextConfig
