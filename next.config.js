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
    formats: ['image/webp', 'image/avif'],
    // 빌드 시 이미지 최적화 제한
    minimumCacheTTL: 60,
  },
  
  // 병렬 빌드 최적화
  experimental: {
    workerThreads: true,
    cpus: 2,
  },
}

module.exports = nextConfig
