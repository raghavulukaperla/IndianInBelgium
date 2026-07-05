# Indians in Belgium

A static, JSON-driven guide site for Indians travelling to and living in Belgium — visas, arrival, transport, community, food, city guides, healthcare, education, work and more.

Everything on the site is rendered from JSON files in [`src/data`](src/data). There is no backend and no database: publishing an update means editing a JSON file and pushing to GitHub. A GitHub Actions workflow rebuilds and redeploys the site automatically.

## Tech stack

- [Next.js 15](https://nextjs.org) (App Router, static export)
- [React 19](https://react.dev) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- [Lucide](https://lucide.dev) icons
- [Fuse.js](https://www.fusejs.io) for client-side fuzzy search
- [next-themes](https://github.com/pacocoursey/next-themes) for dark/light mode
- Hand-rolled service worker for offline/PWA support (no external SW library)
- [Zod](https://zod.dev) for build-time data validation

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Admin workflow — publishing updates without touching code

1. Edit the relevant JSON file in [`src/data`](src/data) (e.g. `news.json` for a news item, `alerts.json` for a travel advisory, `faq.json` for a new FAQ, `visa.json` for updated visa rules).
2. Keep the existing shape — every file follows a `{ title, description, lastUpdated, category, isSampleData, items: [...] }` envelope (city files use a slightly different per-section shape — see `src/types/city.ts`).
3. Commit and push to `main`.
4. GitHub Actions automatically validates the data, rebuilds the site, and redeploys to GitHub Pages. No code changes, no manual deploy step.

If a JSON edit breaks the expected shape, the build fails loudly (`npm run validate:data`, powered by Zod schemas in `scripts/validate-data.ts`) instead of silently shipping broken data.

The **Latest Updates** feed on the home page automatically merges `news.json` and `alerts.json`, sorted newest first — no separate step needed.

### Data files

All data lives in `src/data/*.json` (35 files). A few examples:

| File | Purpose |
|---|---|
| `categories.json` | Site-wide navigation tree — every hub/leaf page, its icon and description. This is the structural backbone; add a category here and it appears in the header nav, mobile nav, breadcrumbs and sitemap automatically. |
| `emergency.json`, `embassy.json`, `visa.json`, `airport.json`, `transport.json` | Core reference data, researched and verified. |
| `cities.json` + `city-<slug>.json` | City index plus one detail file per city (Overview / Attractions / Transportation / Hotels / Food / Emergency / Tips). |
| `news.json`, `alerts.json` | The live-updates feed shown on the home page. |
| `faq.json` | Searchable FAQ entries. |
| `events.json` | Upcoming Indian community events. Each item can reference a poster `image` (path under `public/images/events/`) — see "Adding an event" below. |
| `healthcare.json`, `education.json`, `work.json`, `safety.json`, `documents.json`, `insurance.json`, `currency.json`, `packing.json`, `immigration.json` | Generic "topic" pages — a shared shape (`title`, `description`, optional `steps`, `tips`, `relatedLinks`, `meta`) rendered by one reusable template. |

Entries with `"isSampleData": true` are structurally complete but sparse — they render correctly today and are meant to be filled in by an admin with real, verified details. A small badge appears on any page pulling from a sample-flagged file.

### Adding a new city

1. Add an entry to `src/data/cities.json`.
2. Create `src/data/city-<slug>.json` following the shape in `src/types/city.ts`.
3. Push. `cities/[city]/page.tsx` uses `generateStaticParams`, so the new city page is generated automatically — no new route file needed.

### Adding an event

1. Drop a poster image into `public/images/events/` (e.g. `diwali-2026.jpg`).
2. Add an entry to `src/data/events.json` with `image` set to `/images/events/diwali-2026.jpg`. `image` is optional — omit it and a placeholder calendar icon is shown instead.
3. Push. The event appears on `/events` immediately; there's no submission form or upload endpoint since the site has no backend — publishing an event is the same JSON-edit workflow as everything else.

### Extending to a real CMS/API later

Nothing in `src/app` or `src/components` imports JSON files directly. Every page goes through the typed accessor functions in [`src/lib/data/index.ts`](src/lib/data/index.ts) (`getVisaInfo()`, `getCityBySlug()`, `getFaqs()`, etc.). Swapping static JSON for Contentful/Sanity/Strapi/Supabase/Firebase/a REST or GraphQL API later means rewriting the bodies of those functions — page and component code doesn't change. (Moving to a live API would also mean dropping `output: "export"` in favor of ISR/dynamic rendering, which is a deliberate future step, not required for the current static site.)

## Project structure

```
src/app/            Routes (Next.js App Router)
src/components/      layout/ home/ search/ content/ interaction/ theme/ pwa/ ui/ (shadcn primitives)
src/data/            35 JSON data files — the admin-editable content
src/lib/             Typed data-access layer, storage helpers, metadata/sitemap helpers
src/types/           TypeScript interfaces mirroring the JSON shapes
scripts/             build-search-index.ts, validate-data.ts (run before every build)
public/              manifest.webmanifest, sw.js, icons, generated search index
.github/workflows/   CI + GitHub Pages deploy
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Validates data, builds the search index, then `next build` (static export, no basePath — suitable for Vercel or a custom domain) |
| `npm run build:gh` | Same as above, with `DEPLOY_TARGET=github-pages` so the output is prefixed with `/indians-in-belgium` for GitHub Pages project sites |
| `npm run validate:data` | Zod-validates every file in `src/data` |
| `npm run build:search-index` | Regenerates `public/search-index.json` from all data files |
| `npm run lint` | ESLint |
| `npm run serve:out` | Serve the exported `out/` folder locally to sanity-check the static build |

## Deployment

### GitHub Pages (primary)

The site is served from a custom domain (`belgiumdesi.com`), which GitHub Pages serves from the domain root — so the deploy workflow runs a plain `npm run build` (no `basePath`), not `npm run build:gh`. `public/CNAME` pins the custom domain so it survives every redeploy (GitHub Pages requires this file to be present in the published output when deploying via `actions/deploy-pages`, since there's no `gh-pages` branch for it to persist on).

1. In your repo, go to **Settings → Pages → Source** and select **GitHub Actions**.
2. Under **Settings → Pages → Custom domain**, set your domain and add the matching DNS records (an `A`/`ALIAS` record at your DNS provider pointing to GitHub Pages, or a `CNAME` record if using a subdomain) — see [GitHub's custom domain docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).
3. `.github/workflows/deploy.yml` sets `NEXT_PUBLIC_SITE_URL` to the production domain for the build step, so sitemap/OG/canonical URLs are correct.
4. Push to `main`. The workflow validates the data, builds with no `basePath` (root-relative, matching how the custom domain is served), and deploys via `actions/deploy-pages`.

If you ever move off the custom domain back to the default `https://<user>.github.io/<repo>` project-page URL, switch the build step back to `npm run build:gh` (which sets `basePath`/`assetPrefix` from `repoName` in [`next.config.ts`](next.config.ts) — update `repoName` there if your repo name changes) and delete `public/CNAME`.

### Vercel

No configuration changes needed. Import the repo in Vercel — `next.config.ts` only applies a `basePath` when `DEPLOY_TARGET=github-pages` is set, so a default Vercel build serves from the root as normal. Optionally set `NEXT_PUBLIC_SITE_URL` to your Vercel domain.

## PWA / offline support

- `public/manifest.webmanifest` + `public/sw.js` (hand-written, no build-plugin dependency) make the site installable.
- The service worker precaches the app shell, `search-index.json` and the manifest on install, uses stale-while-revalidate for hashed `_next/static` assets, and network-first-with-cache-fallback for page navigations (falling back to `/offline` when nothing is cached).
- Because the search index is precached, **search works offline** once a visitor has loaded the site at least once.

## SEO

- `src/app/sitemap.ts` and `robots.ts` are generated at build time from `categories.json` and `cities.json`.
- Every route has per-page metadata (title, description, canonical URL, Open Graph, Twitter Card) via `buildMetadata()` in `src/lib/metadata.ts`.
- JSON-LD structured data is emitted on the home page (`WebSite`/`Organization`), the FAQ page (`FAQPage`), the embassy page (`GovernmentOffice`) and city pages (`City`).

## Notes on content accuracy

Emergency numbers, the Indian Embassy Brussels contact details, Brussels Airport transport options and the Schengen visa overview were verified against official/authoritative sources at the time of writing. Fees, processing times and hours can change — always confirm time-sensitive details (visa fees, opening hours, ticket prices) against the linked official sources before relying on them, and keep `lastUpdated` current when you edit a file.
