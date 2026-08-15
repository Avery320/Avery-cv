# Avery Tsai — CV and Portfolio

Personal CV and portfolio website featuring selected projects and robotics work.

- [Live website](https://avery320.github.io/Avery-cv/)
- [GitHub profile](https://github.com/Avery320)

## Sections

- CV
- Projects
- Robotics

## Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.svg
│   ├── post_img.webp
│   ├── profile.png
│   ├── robots.txt
│   └── social_img.webp
├── src/
│   ├── components/
│   │   ├── cv/
│   │   │   └── TimeLine.astro
│   │   ├── BaseHead.astro
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── HorizontalCard.astro
│   │   ├── SideBar.astro
│   │   ├── SideBarFooter.astro
│   │   ├── SideBarMenu.astro
│   │   └── ThemeToggle.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── lib/
│   │   └── sitePath.ts
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── cv.astro
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   └── robotics.astro
│   ├── styles/
│   │   └── global.css
│   ├── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.cjs
└── tsconfig.json
```

## Development

```bash
pnpm install
pnpm run dev
```

Local URL: `http://localhost:4321/Avery-cv/`

Build the production site with:

```bash
pnpm run build
```

## Deployment

Pushes to `main` are deployed to GitHub Pages through the workflow in `.github/workflows/deploy.yml`.

## Credits and License

This project is a customized version of [Astrofy](https://github.com/manuelernestog/astrofy), created by Manuel Ernesto Garcia.

Astrofy is used and modified under the MIT License. The original copyright notice and license terms are preserved in [LICENSE](LICENSE).
