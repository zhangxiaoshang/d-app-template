This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## 技术栈

Next.js App Router + TypeScript + Mui

## CI

- husky: git commit, git push check

## 功能

- [x] .prettierrc
- [x] scss
- [x] theme dark/light
- [x] Mui
- [x] Mui theme system
- [x] nprogress
- [x] wagmi
- [x] wagmi cli generate hooks
- [x] web3modal
- [x] web3modal theme
- [x] wallet connect
- [x] ethers: ^6.7.1
- [x] notistack
- [x] .env

## 开始开发

1. 通过 Github template 功能创建新的仓库
2. 在项目根目录执行 `./clearup.sh` 该脚本会删除项目中的 demo 相关代码、文件，具体如下：

```bash
rm -rf src/demo
rm -rf src/components/demo
echo NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID= >> .env.local
```

## 设置

通用设置在 `src/config.ts` 中

## 主题

亮/暗主题未具体实现
切换系统亮/暗模式，会影响背景色、文字颜色，这个在 `global.css` 有相关设置
然后，可以通过 `setSettings` 设置 `mode` 这个控制的是 `mui` 的 `light/dark`
