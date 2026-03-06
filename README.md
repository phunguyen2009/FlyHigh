# Personal Blog - Production Ready Setup

Đây là template Next.js 15 được setup sẵn cho một blog cá nhân với các công nghệ backend & frontend hiện đại.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4
- **Linting & Formatting:** ESLint (Flat Config) & Prettier
- **Git Hooks:** Husky & lint-staged

## Folder Structure

\`\`\`text
/
├── app/ # App Router pages & layouts
├── components/ # React components (ui, layouts, etc.)
├── config/ # App configuration, site data
├── content/ # Markdown/MDX files for blog posts
├── hooks/ # Custom React hooks
├── lib/ # Utility functions
├── public/ # Static assets (images, fonts, etc.)
├── types/ # TypeScript type definitions
└── ...config files # ESLint, Prettier, Tailwind, Next.js configs
\`\`\`

## Getting Started

1. Set up môi trường:
   \`\`\`bash
   npm run setup
   \`\`\`
   _(Lệnh này sẽ cài đặt node_modules, setup Husky hooks)_

2. Khởi tạo Git (nếu chưa có):
   \`\`\`bash
   git init
   npm run prepare
   \`\`\`

3. Copy môi trường:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

4. Chạy development server:
   \`\`\`bash
   npm run dev
   \`\`\`

## Lưu ý về Tailwind CSS v4

Tailwind CSS v4 đã chuyển sang cấu hình trực tiếp bằng CSS (CSS-first variable config) và import thông qua `@import "tailwindcss";` trong `app/globals.css`. Do đó, file `tailwind.config.ts` sẽ không có mặt theo default vì hệ thống sử dụng vite/postcss plugin mới.
Đã thêm config cho Prettier để hỗ trợ sort Tailwind classes.
