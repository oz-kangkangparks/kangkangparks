/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Docker 배포를 위한 standalone 모드
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
