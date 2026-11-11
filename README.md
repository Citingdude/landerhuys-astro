# Het Landerhuys

Website for Het Landerhuys, a grand café in Stal-Koersel, Belgium. The site presents the restaurant, menus, seasonal offers, opening hours, and contact information, with links to reservations, gift vouchers, and vacancies.

Built with Astro, TypeScript, and Tailwind CSS. Pages are generated as static files, with responsive image optimization and locally hosted fonts. No application server or database is required to serve the production site.

## Requirements

- Node.js 22.23.4 or newer
- pnpm 12.16.1, pinned in `package.json`

Use pnpm for dependency management and keep `pnpm-lock.yaml` updated when dependencies change.

## Getting started

From the project directory, install dependencies and start the development server:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed in the terminal, usually `http://localhost:4321`. Changes to source files are reflected automatically during development.

For local environment configuration, copy the example file:

```sh
cp .env.example .env
```

The default configuration is sufficient for local development.

## Commands

| Command         | Description                                                 |
| --------------- | ----------------------------------------------------------- |
| `pnpm dev`      | Start the development server.                               |
| `pnpm check`    | Check Astro templates and TypeScript diagnostics.           |
| `pnpm lint`     | Check source code and formatting across the project.        |
| `pnpm lint:fix` | Apply automatic lint fixes and formatting.                  |
| `pnpm format`   | Alias for `pnpm lint:fix`.                                  |
| `pnpm build`    | Generate the production site in `dist/`.                    |
| `pnpm preview`  | Serve the production build locally. Run `pnpm build` first. |

If Astro starts the development server in the background, use these commands to manage it:

```sh
pnpm exec astro dev status
pnpm exec astro dev logs
pnpm exec astro dev stop
```

## Linting and formatting

Linting and formatting use [Antfu's ESLint configuration](https://github.com/antfu/eslint-config), with Astro support and formatting for CSS, Markdown, HTML, and SVG. TypeScript, JavaScript, JSON, and YAML are also checked. Generated files, dependencies, and local environment files are excluded through `.gitignore`; binary assets and font licenses are not formatted.

## Project structure

```text
src/
  assets/       Photography and promotional artwork
  components/   Reusable interface components
  data/         Page content, business details, and destination links
  layouts/      Shared page layout and metadata
  pages/        Astro page routes
  styles/       Global styles, typography, and responsive layouts
public/         Files served directly, including fonts and poster originals
docs/           Asset source and dimension inventory
```

## Content maintenance

Update `src/data/home.ts` to change homepage copy, opening hours, contact details, navigation destinations, menu PDF links, or promotional text. Content for the other pages is in `src/data/pages.ts`. The menu and wine-list PDFs are served from `public/onewebmedia/` at their existing paths.

Store photography in `src/assets/` for build-time image optimization. Full-size promotional posters are served from `public/promotions/`; update the poster image and its text transcript together when an offer changes.

Theme colours, typography, and responsive layout rules are defined in `src/styles/global.css`. Local font files and their licenses are in `public/fonts/`.

## Pages

Internal page navigation uses browser-native View Transitions with a short fade. Transitions respect reduced-motion preferences and fall back to regular navigation in browsers without support. Pages retain their normal loading lifecycle, including the Easybooker widget.

| Route        | Content                                             |
| ------------ | --------------------------------------------------- |
| `/`          | Restaurant homepage                                 |
| `/contact`   | Reservations, contact details, and opening hours    |
| `/over`      | Specials, breakfast buffet, and gift vouchers       |
| `/menu`      | Gift vouchers and access to the online shop         |
| `/vacatures` | Recruitment information and email/telephone contact |

The vacancies page has no application form, file upload, or submission backend.

## Reservations and gift vouchers

The reservation page embeds the official Easybooker inline widget for business `783`. Its public configuration is in `src/data/pages.ts`; the widget is loaded only on `/contact`, with optional host-page tracking disabled. A telephone link and a direct reservation link remain available if the widget cannot load.

The gift-voucher page links to the restaurant's hosted Easybooker shop at `https://giftcards.easybooker.be/783`. Voucher purchases and payments take place on Easybooker. No credentials, server, or local checkout are needed.

## Configuration

| Variable           | Default | Description                                                                                              |
| ------------------ | ------- | -------------------------------------------------------------------------------------------------------- |
| `PUBLIC_INDEXABLE` | `false` | Set to `true` to allow search indexing in production builds. Development remains excluded from indexing. |

Environment variables are applied at build time. Run a new build after changing them. Keep indexing disabled for staging and preview environments.

Each page has its own title, description, and canonical URL. `/sitemap.xml` lists the site pages. `/robots.txt` follows `PUBLIC_INDEXABLE`, blocking crawlers by default and advertising the sitemap for indexable production builds.

The production site URL is configured in `astro.config.mjs`. Canonical URLs and social metadata are defined in `src/layouts/MainLayout.astro`; keep these aligned with the deployment domain.

## Production build

Run the checks and generate the static site:

```sh
pnpm check
pnpm build
pnpm preview
```

For the public production site, set `PUBLIC_INDEXABLE=true` in the build environment before running `pnpm build`.

Deploy the contents of `dist/` to a static hosting provider. The build includes HTML, CSS, JavaScript, optimized images, fonts, and other public assets.
