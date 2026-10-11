# AGENTS.md

Personal portfolio site (Astro 7 + Tailwind 3 + TypeScript strict), deployed to GitHub Pages.

Requires Node `>=22.12.0` (Astro 6+ dropped Node 18/20; the devcontainer and deploy action use Node 22/24).

## Commands

- `npm install` then `npm run dev` — dev server at `localhost:4321` (host bound to all interfaces).
- `npm run build` — static output to `./dist/`.
- `npm run preview` — preview a build.
- Typecheck: no npm script. Use `npm run astro -- check` (`@astrojs/check` + `typescript` are devDeps; if missing it prompts interactively).
- There is **no** lint, format, or test setup. Don't invent commands for them.

## Architecture

- Single-page site: `src/pages/index.astro` composes section components; `src/layouts/Layout.astro` wraps pages (header/footer/global styles).
- `@/*` imports alias `src/*` (see `tsconfig.json`). Prefer `@/components/...` over relative paths.
- `src/components/`, `src/icons/`, `src/pages/` — Astro components only, no client framework.
- All site content is **hardcoded in Spanish** inside component script arrays, e.g. `EXPERIENCE` in `src/components/Experience.astro` and `PROJECTS`/`TAGS` in `src/components/Projects.astro`. Edit content there, not via data fetching.
- `src/pages/components.astro` is a design-system showcase; `src/pages/about.astro` is leftover template text.

## Gotchas

- `package.json` `name` is `madriles-bikers` and `db.json` + the `npm run server` script (json-server on port 3005) are unused leftovers from a template. No page fetches them; ignore unless explicitly asked.
- Deploy is triggered by pushing to `master` (staging branch), not `main`. Workflow: `.github/workflows/deploy.yml` (`withastro/action@v6`, Node 24). Site is a user page at `https://iyustlop.github.io`, so no `base` path is configured.
- Tailwind 3 is wired through PostCSS (`postcss.config.mjs`), **not** the `@astrojs/tailwind` integration (that integration only supports Astro ≤5). `src/styles/global.css` holds the `@tailwind` directives and is imported in `Layout.astro`. `tailwind.config.mjs` uses `darkMode: 'class'` and scans `./src/**/*`.
- `astro.config.mjs` pins `compressHTML: true`. Astro 7's new `'jsx'` default strips whitespace between inline elements, which visually joins adjacent `<span>`s; keep `true` unless you add explicit `{" "}`.
