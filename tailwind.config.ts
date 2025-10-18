import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF4F8B",   // 포인트 핑크
        accent:  "#FFE9F2",   // 밝은 핑크 배경
        ink:     "#333333",   // 본문 텍스트
        yellow: {
          200: "#FEF3C7",     // 연한 노랑 (그라데이션용)
        }
      },
      fontFamily: {
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'sans-serif'
        ],
      }
    },
  },
  plugins: [],
}
export default config
