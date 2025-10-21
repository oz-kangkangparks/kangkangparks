/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Docker 배포를 위한 standalone 모드
  
  // 빌드 최적화
  swcMinify: true, // SWC 기반 압축 (Terser보다 7배 빠름)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // 프로덕션에서 console 제거
  },
  
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'], // WebP 우선, AVIF 폴백
    // 이미지 캐싱 (1년)
    minimumCacheTTL: 31536000,
    // 기기별 최적화 사이즈
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // 병렬 빌드 최적화
  experimental: {
    workerThreads: true,
    cpus: 2,
  },
}

module.exports = nextConfig
