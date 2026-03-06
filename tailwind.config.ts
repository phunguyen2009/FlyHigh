import type { Config } from 'tailwindcss';

// Lưu ý: Tailwind v4 đã chuyển sang cấu hình tại `app/globals.css`.
// Tuy nhiên, nếu bạn vẫn muốn giữ file `tailwind.config.ts` để sử dụng chung với một số công cụ hoặc plugin v3 fallback, file này được giữ lại như form tham khảo.
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
