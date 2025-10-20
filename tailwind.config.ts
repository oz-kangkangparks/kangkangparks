import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF4F8B",  // 메인 핑크
          50: "#FFF5F9",
          100: "#FFE9F2",
          200: "#FFD4E5",
          300: "#FFBED9",
          400: "#FF87B3",
          500: "#FF4F8B",      // 기본 핑크
          600: "#E6396F",
          700: "#CC2353",
          800: "#B30D37",
          900: "#99001B",
        },
        accent: "#FFE9F2",     // 밝은 핑크 배경
        ink: "#333333",        // 본문 텍스트
        gray: {
          50: "#F9FAFB",       // 가장 밝은 배경
          100: "#F3F4F6",      // 밝은 배경
          200: "#E5E7EB",      // 구분선, 테두리
          300: "#D1D5DB",      // 비활성 요소
          400: "#9CA3AF",      // 플레이스홀더
          500: "#6B7280",      // 본문 보조 텍스트
          600: "#4B5563",      // 본문 텍스트
          700: "#374151",      // 강조 텍스트
          800: "#1F2937",      // 제목
          900: "#111827",      // 진한 제목
        },
        yellow: {
          200: "#FEF3C7",      // 연한 노랑 (그라데이션용)
        }
      },
      fontFamily: {
        sans: [
          'var(--font-pretendard)',
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
