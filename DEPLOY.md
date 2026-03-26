# Hari Portfolio — Deploy to Vercel

## Quick Start (Local)

```bash
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

### Option 1: GitHub + Vercel (Recommended)
1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new
3. Import your repo — Vercel auto-detects Next.js
4. Click **Deploy** — done!

### Option 2: Vercel CLI
```bash
npm i -g vercel
cd portfolio
vercel
```

## Customize
- Edit your info in `src/data/portfolio.ts`
- Update social links (GitHub, LinkedIn)
- Add a profile photo: replace the "HR" initials in `About.tsx` with an `<Image>` tag
- Add projects: create a `src/components/Projects.tsx` and import it in `page.tsx`

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Icons
