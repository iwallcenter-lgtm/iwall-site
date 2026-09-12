# i-WALL Corporate Website

Premium multilingual corporate website for i-WALL, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Static-safe multilingual routing
- Vercel-ready structure

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Checks

```bash
npm run typecheck
npm run build
```

## Main Structure

```text
src/
  app/
    [locale]/
  components/
    site/
    ui/
  lib/
  messages/
```

## Main Editable Files Later

- Brand/contact settings: `src/lib/site-config.ts`
- Product data and images: `src/lib/products.ts`
- All translations and copy: `src/messages/locales/*.ts`
- Shared homepage and landing sections: `src/components/site/sections.tsx`
- Header/footer: `src/components/site/header.tsx`, `src/components/site/footer.tsx`

## GitHub

```bash
git init
git add .
git commit -m "Create i-WALL multilingual corporate website"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Keep the default framework setting as `Next.js`.
4. Deploy.

No special environment variables are required for the current version.

## Lambiri gallery

The homepage and `/[locale]/lambiriler` show all 29 approved models in numerical order. The same gallery supports Turkish, English, German, French and Arabic, with a keyboard-accessible image viewer. Model numbers and dimensions remain in the original artwork.

- Gallery: `src/components/site/lambiri-gallery.tsx`
- Labels and catalog URL: `src/lib/lambiri.ts`
- Model manifest: `src/lib/lambiri-models.json`
- Web images: `public/images/lambiri/`
- Current catalog: `public/catalogs/iwall-lambiri-1-29.pdf`

To regenerate the WebP copies, install Pillow and run `python scripts/prepare-lambiri-assets.py "path/to/approved/models"`. The source folder must contain `Model 1.png` through `Model 29.png`. The script preserves the complete artwork and leaves the originals unchanged. Small previews load in the grid; full-resolution copies load when a model is opened.
