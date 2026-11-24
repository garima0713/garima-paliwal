# Garima Paliwal: Portfolio

Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide icons.

## Design
Dark navy with soft purple and blue gradients. Fonts: Instrument Serif (headings) and Manrope (body). Colours live in `tailwind.config.ts`; animations, buttons, cards and the floating background are in `app/globals.css` (pure CSS, no animation library). Scroll reveals use `components/Reveal.tsx`. All motion is turned off for visitors who prefer reduced motion.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit content
Everything is in `data/content.ts`. Items marked `TODO` are placeholders (they only show in `npm run dev`, never on the live site).
Add a photo to `public/` and set `profile.photo`. Replace the resume by overwriting `public/Garima_Paliwal_Resume.docx` (a PDF is better for recruiters: add it and update `profile.resumeFile`).

## Project links
Each project in `data/content.ts` has optional `live` and `github` fields. The **Live Demo** and **GitHub** buttons appear only when the field is not empty, so no fake links are ever shown. CollegeFinder India screenshots live in `public/projects/collegefinder/` and are listed in its `screenshots` array.

## Deploy on Vercel
1. Push this folder to a GitHub repository.
2. Go to vercel.com, sign in with GitHub, click **Add New, Project**, and import the repository.
3. Leave the defaults (Framework: Next.js) and click **Deploy**.
4. Copy your new URL into `profile.siteUrl` in `data/content.ts`, commit, and it redeploys automatically.
