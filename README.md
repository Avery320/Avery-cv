# Avery Tsai — CV and Portfolio

Bilingual personal CV and portfolio website featuring architecture, robotics, fabrication, and parametric design work.

- [Live website](https://avery320.github.io/Avery-cv/)
- [GitHub profile](https://github.com/Avery320)

## Sections

- CV
- Projects
- Robotics
- Architecture
- Fabrication
- Parametric Design

## Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── images/
│   │   ├── architecture/
│   │   │   └── meinong-sports-park/
│   │   ├── fabrication/
│   │   ├── paramtric-design/
│   │   └── robotics/
│   ├── favicon.svg
│   ├── post_img.webp
│   ├── profile.png
│   ├── profile_02.JPG
│   ├── robots.txt
│   └── social_img.webp
├── src/
│   ├── assets/
│   │   └── projects/                 # Astro-optimized project covers
│   ├── components/
│   │   ├── cv/
│   │   │   ├── CvPage.astro
│   │   │   ├── CvTimelineSection.astro
│   │   │   └── TimeLine.astro
│   │   ├── portfolio/
│   │   │   ├── FeaturedProjectCard.astro
│   │   │   ├── PortfolioDetailPage.astro
│   │   │   └── PortfolioListPage.astro
│   │   ├── BaseHead.astro
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── HomePage.astro
│   │   ├── HorizontalCard.astro
│   │   ├── SideBar.astro
│   │   ├── SideBarFooter.astro
│   │   ├── SideBarMenu.astro
│   │   └── ThemeToggle.astro
│   ├── content/
│   │   ├── architecture/
│   │   │   ├── en/
│   │   │   └── zh-TW/
│   │   ├── fabrication/
│   │   │   ├── en/
│   │   │   └── zh-TW/
│   │   ├── paramtricDesign/          # Parametric Design content collection
│   │   │   ├── en/
│   │   │   └── zh-TW/
│   │   ├── projects/
│   │   │   ├── en/
│   │   │   └── zh-TW/
│   │   ├── robotics/
│   │   │   ├── en/
│   │   │   └── zh-TW/
│   │   └── config.ts
│   ├── data/
│   │   ├── cv.ts
│   │   └── projects.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── lib/
│   │   ├── i18n.ts
│   │   ├── portfolio.ts
│   │   └── sitePath.ts
│   ├── pages/
│   │   ├── en/                       # English routes
│   │   │   ├── architecture/
│   │   │   │   └── [slug].astro
│   │   │   ├── fabrication/
│   │   │   │   └── [slug].astro
│   │   │   ├── paramtric-design/
│   │   │   │   └── [slug].astro
│   │   │   ├── projects/
│   │   │   │   └── [slug].astro
│   │   │   ├── robotics/
│   │   │   │   └── [slug].astro
│   │   │   ├── architecture.astro
│   │   │   ├── cv.astro
│   │   │   ├── fabrication.astro
│   │   │   ├── index.astro
│   │   │   ├── paramtric-design.astro
│   │   │   ├── projects.astro
│   │   │   └── robotics.astro
│   │   ├── architecture/             # Traditional Chinese detail routes
│   │   │   └── [slug].astro
│   │   ├── fabrication/
│   │   │   └── [slug].astro
│   │   ├── paramtric-design/
│   │   │   └── [slug].astro
│   │   ├── projects/
│   │   │   └── [slug].astro
│   │   ├── robotics/
│   │   │   └── [slug].astro
│   │   ├── 404.astro
│   │   ├── architecture.astro
│   │   ├── cv.astro
│   │   ├── fabrication.astro
│   │   ├── index.astro
│   │   ├── paramtric-design.astro
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

Portfolio entries are stored as Astro content collections. Each section keeps matching Markdown files under `zh-TW/` and `en/`; the filename is also used as the project slug. The default locale is Traditional Chinese, while English pages use the `/en/` prefix.

## Featured Projects

Home page featured projects are defined in `src/data/projects.ts` and rendered by `FeaturedProjectCard.astro`. Each project keeps its localized internal detail page separate from any externally deployed resources:

```ts
{
  id: "robosim",
  detailPath: "robotics/robosim",
  resources: [
    {
      id: "developer-guide",
      title: "Developer Guide",
      url: "https://example.com/document/",
      updatedAt: "2026-08-11T09:32:58+08:00",
    },
  ],
}
```

`updatedAt` is currently a manually maintained snapshot of the source path's latest commit date. The site does not yet fetch private repository metadata or synchronize these dates through GitHub Actions.

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
