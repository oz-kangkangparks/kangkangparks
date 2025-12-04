/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Docker 배포를 위한 standalone 모드
  
  // 빌드 최적화
  swcMinify: true, // SWC 기반 압축 (Terser보다 7배 빠름)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // 프로덕션에서 console 제거
  },
  
  images: {
    // 이미 WebP로 최적화했으므로 런타임 최적화 비활성화
    unoptimized: true,
    // 또는 loader를 custom으로 설정하여 최적화 우회
    // loader: 'custom',
    // loaderFile: './image-loader.js',
  },
  
  // 병렬 빌드 최적화
  experimental: {
    workerThreads: true,
    cpus: 2,
  },
  
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
