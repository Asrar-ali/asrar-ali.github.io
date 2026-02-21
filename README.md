# asrar-ali.github.io

My personal portfolio website. Built with Astro and Tailwind CSS.

**Live:** [asrar-ali.github.io](https://asrar-ali.github.io)

## Tech Stack

- **Framework:** [Astro](https://astro.build/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Fonts:** Space Grotesk, JetBrains Mono, Inter
- **Deployment:** GitHub Pages (auto-deploy on push)

## Local Development

```bash
npm install
npm run dev
```

Open [localhost:4321](http://localhost:4321)

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  layouts/Base.astro    # Shared layout (nav, footer, meta)
  pages/
    index.astro         # Homepage
    projects.astro      # Projects showcase
    experience.astro    # Work experience & education
    about.astro         # About me
    contact.astro       # Contact form & links
    404.astro           # Custom 404 page
  styles/global.css     # Global styles & animations
site.config.json        # Site-wide configuration
public/
  resume.pdf            # Resume download
  og.png                # Social preview image
```

## Editing Content

Update `site.config.json` to change name, role, socials, and current status.

Pages are in `src/pages/` as Astro components.

## License

MIT
