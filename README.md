# Infinite Alliance — Landing Page

Marketing site for Infinite Alliance, a Web3 investment and incubation firm.

**Live:** https://infinitealliances.com

## Stack

- Next.js 15 (App Router, static export)
- React 19 + TypeScript
- Tailwind CSS + shadcn/ui
- Hosted on Cloudflare Pages

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Build & deploy

```bash
pnpm build                          # emits static site to ./out
npx wrangler pages deploy out --project-name=inf-landing
```

`next.config.mjs` sets `output: 'export'`, so `pnpm build` produces a fully
static site in `out/` with no server runtime required.
