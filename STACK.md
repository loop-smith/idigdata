# STACK — idigdata

Pinned versions for this project. Mirrors the `hello-world` living reference as of **2026-04-21**. See `C:\Users\Paddo\OneDrive\Desktop\k2s\paved\REGISTRY.md` for the estate-wide pin block and drift discipline.

## Pins

- **Next.js** — 16.2.4 (App Router)
- **React** — 19.2.4
- **TypeScript** — ^5
- **Tailwind CSS** — ^4 (CSS-first config; no `tailwind.config.ts`)
- **@tailwindcss/postcss** — ^4

## Stack now (2026-04-21)

Next 16.2.4 static export + **Supabase** (added 2026-04-21 for future Contact form bridge). The site still builds and deploys as a static export (`output: 'export'`, `out/` is the shippable artifact); Supabase is reserved-but-unused at the app level today — no client library installed, no DB reads/writes. The project is wired at the env-var + CLI level so the Contact form bridge can land without a re-plumbing round.

## Current Supabase project

- **Project ref:** `adkwtkhvbntreznhwzxu`
- **URL:** https://adkwtkhvbntreznhwzxu.supabase.co
- **Tier / region:** Pro (Micro) / West US (Oregon) — us-west-2
- **Env vars:** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local` (gitignored).
- **Migrations:** none yet — empty DB. Contact form bridge will land the first migration.

## Orchestration-tree note

`C:\Users\Paddo\OneDrive\Desktop\k2s\idigdata\.claude\CLAUDE.md` (in the orchestration tree, not this code tree) still says "No Supabase — static export site" as of 2026-04-21. That file is stale relative to the wiring above and is flagged for a Cowork-side update (Task #6 in the region-migration closeout). Not edited from CC by cross-tree guardrail.

## Deliberate drift from hello-world

- **No `@supabase/supabase-js`.** Not yet installed in `package.json`. Reserved at the env/CLI level (see above) until the Contact form bridge lands; strips cleanly until then.
- **No ESLint.** Kept minimal; hello-world doesn't carry lint either. Add per-project if signal starts to pay for itself.

## Last verified

- **2026-04-21** — Region-migration wiring verified. `.env.local` created, CLI linked to new project; `pnpm dev` boots on :3100 (`GET /` → 200) and `pnpm build` static-exports cleanly (8 routes). No migrations applied — fresh empty DB. (Prior Tailwind 3→4 + Next 15→16 realign was also verified 2026-04-21 earlier; that round-trip stands.)

## Verification checklist (run after any future upgrade)

1. `rm -rf node_modules package-lock.json && npm install` — clean install.
2. `npm run dev` — server starts on `localhost:3100`.
3. Open in browser; visual regression check vs last known good (`.screenshots/home-desktop.png`, `home-mobile.png`).
4. Check Chrome DevTools console — zero errors beyond favicon 404.
5. `npm run build` — static export completes; `out/` regenerates cleanly.
6. If all pass, update the `Last verified` date above + `paved/REGISTRY.md` row for idigdata.

## Migration notes

**2026-04-21 — Tailwind 4 migration** (from 3.4.17):
- Config moved from `tailwind.config.ts` (JS) to `app/globals.css` (CSS-first via `@theme`).
- `@tailwind base/components/utilities;` replaced by `@import "tailwindcss";`.
- `tailwind.config.ts` stubbed; Tailwind 4 doesn't read it without an explicit `@config` directive.
- PostCSS plugin swapped: `tailwindcss` + `autoprefixer` → `@tailwindcss/postcss`.
- D2 palette, font families, tracking-section live in `@theme`. `max-w-content` lives in `@utility`.
- next/font CSS variables renamed from `--font-display`/`--font-body` to `--next-font-display`/`--next-font-body` to avoid collision with Tailwind 4's `@theme` token names.

**2026-04-21 — Next 16 migration** (from 15.5.15):
- Static export config (`output: 'export'`, `images: { unoptimized: true }`, `trailingSlash: true`) unchanged.
- No App Router API changes required for this project.
- Node 20+ required (was 18+). Confirm with `node -v` before `npm install`.
- **Port-collision behavior changed.** Next 15 silently hopped to next free port on collision; Next 16 **hard-fails with EADDRINUSE**. On collision, find the zombie and kill it: `netstat -ano | findstr :3100` then `taskkill //F //PID <pid>`. This is a framework-level change, not configurable. See `C:\2026_agentic_projects\PORTS.md` and `loopsmith-hello/CLAUDE.md` for the project-wide port policy (both may need updating to reflect the Next 16 exception).
