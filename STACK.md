# STACK — idigdata

Pinned versions for this project. Mirrors the `hello-world` living reference as of **2026-04-21**. See `C:\Users\Paddo\OneDrive\Desktop\k2s\paved\REGISTRY.md` for the estate-wide pin block and drift discipline.

## Pins

- **Next.js** — 16.2.4 (App Router)
- **React** — 19.2.4
- **TypeScript** — ^5
- **Tailwind CSS** — ^4 (CSS-first config; no `tailwind.config.ts`)
- **@tailwindcss/postcss** — ^4

### Runtime dependencies (post-Dispatch 008)

- **zod** — request-body validation on `/api/contact`
- **@supabase/supabase-js** — client for the cross-codebase write to `idigdata-app`'s `leads` table
- **resend** — transactional email for contact-form notifications
- **posthog-js** — conversion analytics (added in Dispatch 005)
- **@vercel/analytics** — privacy-first visit analytics (added in Dispatch 005)

## Stack now (2026-04-28)

Next 16.2.4 deployed to Vercel **as a serverful App Router app** (Fluid Compute) — the prior `output: "export"` config was dropped in Dispatch 008/010 to enable the `/api/contact` serverless POST handler. The site is no longer a static export.

`/api/contact` runs on Node runtime (Resend SDK requirement). Form posts cross-codebase into `idigdata-app`'s Supabase `leads` table; a trigger enqueues a `decision_traces` row that idigdata-app's classify-extract-route pipeline consumes.

## Current Supabase project (website's own)

- **Project ref:** `adkwtkhvbntreznhwzxu`
- **URL:** https://adkwtkhvbntreznhwzxu.supabase.co
- **Tier / region:** Pro (Micro) / West US (Oregon) — us-west-2
- **Env vars:** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local` (gitignored).
- **Migrations:** none yet — empty `public` schema. Reserved for future website-scoped state.

## Cross-codebase dependencies (post-Dispatch 008)

The website now writes to **another** Supabase project owned by `idigdata-app`:

- **Project ref:** `dvjrmozeoakmcaccqqld` (idigdata-app)
- **Schema contract:** `leads` table (per Memo 001 — composed in `k2s/idigdata/memos/memo-001-to-idigdata-app-leads-schema.md`, executed in idigdata-app lane 2026-04-26).
- **Trigger:** `leads.AFTER INSERT` enqueues a `decision_traces` row with `kind='classify_lead'` for the idigdata-app pipeline to consume.
- **Env vars on the website side:** `IDIGDATA_APP_SUPABASE_URL`, `IDIGDATA_APP_SUPABASE_ANON_KEY`. Distinct prefix to avoid conflation with the website's own `NEXT_PUBLIC_SUPABASE_*` vars.
- **RLS posture:** anon key has insert-only on `leads` from the website origin; reads denied. Lead retrieval happens app-side via authenticated reads.

If the idigdata-app schema changes shape, this website's `/api/contact` route needs to track. Memo cycle is the discipline: schema-affecting change in idigdata-app triggers a memo back to idigdata for the website-side update.

## Layer posture (post-Dispatch 008/010)

Per `k2s/idigdata/memos/memo-002-to-loopsmith-resend-wired.md` (loopsmith absorbed 2026-04-26 with "land in next-code-tree-touch" Open). These deltas close that Open.

- **L4 — Deployment & CI.** Vercel env-var sync is now load-bearing. Production + preview environments must carry `IDIGDATA_APP_SUPABASE_URL`, `IDIGDATA_APP_SUPABASE_ANON_KEY`, `RESEND_API_KEY`, `EMAIL_NOTIFY_TO`. Missing any of the four breaks the contact form silently (DB insert fails OR email send fails OR both → 500). Sync gate on every Vercel project change.
- **L5 — Observability.** Resend dashboard provides email-flow telemetry (sent / delivered / bounced / spam-reported / hard-fail) on the contact-form notification path. Email-side observability covered without Sentry; doesn't substitute for app-level Sentry — that remains a future Layer 5 lift.
- **L6 — Security & Compliance.** Third-party API key (`RESEND_API_KEY`) lives in `.env.local` (gitignored) + Vercel encrypted env vars. Never appears in `NEXT_PUBLIC_*` namespace. 12-month rotation cadence suggested per memo-002; event-driven rotation on suspected compromise. Public-by-design markings in SYSTEMS.md §6 cover the website's own anon key (intentional publication; rotate only on RLS breach); the idigdata-app anon key is similarly insert-only-by-RLS.

## Orchestration-tree note

`C:\Users\Paddo\OneDrive\Desktop\k2s\idigdata\.claude\CLAUDE.md` (in the orchestration tree, not this code tree) was last refreshed pre-Dispatch 008. Post-launch its "Current state" section will need a Cowork-side update — gated by guardrail, not edited from CC.

## Deliberate drift from hello-world

- **Cross-codebase Supabase write.** hello-world targets its own Supabase only; this project additionally writes to `idigdata-app`'s Supabase via a thin server-side bridge. Documented in "Cross-codebase dependencies" above.
- **No ESLint.** Kept minimal; hello-world doesn't carry lint either. Add per-project if signal starts to pay for itself.

## Last verified

- **2026-04-28** — Public launch (Dispatch 010). `output: "export"` removed; `npm install zod @supabase/supabase-js resend` clean (18 packages added). Local `/api/contact` smoke (happy path + honeypot + validation) PASS. First production Vercel deploy successful. Live-URL smoke + Lighthouse captured per dispatch.
- **2026-04-21** — Region-migration wiring verified. `.env.local` created, CLI linked to new Supabase project; `pnpm dev` boots on :3100 (`GET /` → 200) and `pnpm build` exported cleanly (8 routes). No migrations applied — fresh empty DB. (Prior Tailwind 3→4 + Next 15→16 realign was also verified 2026-04-21 earlier; that round-trip stands.)

## Verification checklist (run after any future upgrade)

1. `rm -rf node_modules package-lock.json && npm install` — clean install.
2. `npm run dev` — server starts on `localhost:3100`.
3. Open in browser; visual regression check vs last known good (`.screenshots/home-desktop.png`, `home-mobile.png`).
4. Check Chrome DevTools console — zero errors beyond favicon 404.
5. `npm run build` — Next build completes cleanly.
6. POST a synthetic payload to `/api/contact` and verify happy-path 200 + honeypot 200 silenced + validation 400.
7. If all pass, update the `Last verified` date above + `paved/REGISTRY.md` row for idigdata.

## Migration notes

**2026-04-28 — Drop static export (Dispatch 010 / 008)**:
- Removed `output: "export"` and `images: { unoptimized: true }` from `next.config.ts`. `trailingSlash: true` retained.
- Site now runs serverful on Vercel Fluid Compute (default Node runtime, 300s default timeout). The shippable artifact is `.next/`, no longer `out/`.
- This unblocks `/api/contact` and any future serverless route.

**2026-04-21 — Tailwind 4 migration** (from 3.4.17):
- Config moved from `tailwind.config.ts` (JS) to `app/globals.css` (CSS-first via `@theme`).
- `@tailwind base/components/utilities;` replaced by `@import "tailwindcss";`.
- `tailwind.config.ts` stubbed; Tailwind 4 doesn't read it without an explicit `@config` directive.
- PostCSS plugin swapped: `tailwindcss` + `autoprefixer` → `@tailwindcss/postcss`.
- D2 palette, font families, tracking-section live in `@theme`. `max-w-content` lives in `@utility`.
- next/font CSS variables renamed from `--font-display`/`--font-body` to `--next-font-display`/`--next-font-body` to avoid collision with Tailwind 4's `@theme` token names.

**2026-04-21 — Next 16 migration** (from 15.5.15):
- Static export config (`output: 'export'`, `images: { unoptimized: true }`, `trailingSlash: true`) was unchanged at the time. Static export was later dropped in Dispatch 008/010 (above).
- No App Router API changes required for this project.
- Node 20+ required (was 18+). Confirm with `node -v` before `npm install`.
- **Port-collision behavior changed.** Next 15 silently hopped to next free port on collision; Next 16 **hard-fails with EADDRINUSE**. On collision, find the zombie and kill it: `netstat -ano | findstr :3100` then `taskkill //F //PID <pid>`. This is a framework-level change, not configurable. See `C:\2026_agentic_projects\PORTS.md` and `loopsmith-hello/.claude/CLAUDE.md` for the project-wide port policy (both may need updating to reflect the Next 16 exception).
