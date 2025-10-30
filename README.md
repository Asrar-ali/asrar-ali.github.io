# Md Ali — Portfolio (Astro + Tailwind)

Dark-by-default, accessible, high-performance portfolio with a scroll-linked timeline spine and auto-curated GitHub projects.

## Local development
```bash
pnpm i   # or npm i / yarn
pnpm dev
```

## Build & deploy (GitHub Pages)
1. Push to a repository named `asrar-ali.github.io` **or** any repo and enable Pages (Build from GitHub Actions).
2. Use the provided workflow in `.github/workflows/pages.yml`.
3. On build, `scripts/cache-github.js` populates `public/cache/github-cache.json` from GitHub’s API.

### Netlify
- Add a new site from Git. Build command: `npm run build`. Publish directory: `dist/`.

### Vercel
- Import the repo. Framework preset: **Astro**. That’s it.

## Performance targets
- Lighthouse: Perf ≥ 95, A11y ≥ 95, BP ≥ 95, SEO ≥ 95.
- Tips: Keep images SVG/PNG with `loading="lazy"`, limit JS islands, ship only what’s needed.

## Content editing
- Update `site.config.json` for name, role, socials, and “Now” widget.
- Add/edit posts in `content/posts/*.mdx`.
- Add deep-dive writeups in `src/pages/projects.astro` or migrate to content collection.

## Accessibility
- Semantic landmarks, skip link, focus styles, keyboard nav, reduced motion respected.

## License
MIT
