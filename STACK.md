# STACK — idigdata

Pinned versions for this project. Mirrors the `hello-world` living reference as of **2026-04-21**. See `C:\Users\Paddo\OneDrive\Desktop\k2s\paved\REGISTRY.md` for the estate-wide pin block and drift discipline.

## Pins

- **Next.js** — 16.2.4 (App Router)
- **React** — 19.2.4
- **TypeScript** — ^5
- **Tailwind CSS** — ^4 (CSS-first config; no `tailwind.config.ts`)
- **@tailwindcss/postcss** — ^4

## Deliberate drift from hello-world

- **No `@supabase/supabase-js`.** idigdata is a static marketing site (`output: 'export'`); no persistent state. Stripped from clone-set.
- **No ESLint.** Kept minimal; hello-world doesn't carry lint either. Add per-project if signal starts to pay for itself.

## Last verified

- **2026-04-21** — Tailwind 3 → 4 + Next 15 → 16 realign landed. Host `npm install && npm run dev` passed: server ready in 324ms, HTTP 200 on http://localhost:3100 (Turbopack).

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
