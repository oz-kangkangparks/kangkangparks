/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Docker 배포를 위한 standalone 모드
  experimental: {
    appDir: true,
  },
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
