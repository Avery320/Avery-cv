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
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── HomePage.astro
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

Home page featured projects and portfolio page resources are defined in `src/data/projects.ts` and rendered by `FeaturedProjectCard.astro`. Shared resources use their `detailPath` as a single lookup key, while each project keeps its localized internal detail page separate from externally deployed resources:

```ts
{
  id: "robosim",
  detailPath: "projects/robosim",
  resources: [
    {
      id: "developer-guide",
      title: "Developer Guide",
      url: "https://example.com/document/",
      updatedAt: projectUpdates.robosim,
    },
  ],
}
```

Public repositories used for `updatedAt` are registered in `src/data/public-project-sources.json`. The `sync-public-project-updates.yml` workflow reads their latest commits once per day, after pushes to `main`, or when run manually. It writes changed timestamps to `src/data/project-updates.json`, commits that file, and redeploys the site. The browser formats each timestamp in the visitor's local time zone.

The sync currently reads public repositories only. If one source is temporarily unavailable, its last successful timestamp is kept while the remaining sources continue updating.

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
