# STACK — idigdata

Pinned versions for this project. Mirrors the `hello-world` living reference as of **2026-04-21**. See `C:\Users\Paddo\OneDrive\Desktop\k2s\paved\REGISTRY.md` for the estate-wide pin block and drift discipline.

## Pins

- **Next.js** — 16.2.7 (App Router)
- **React** — 19.2.7
- **TypeScript** — 5.9.3
- **Tailwind CSS** — 4.3.0 (CSS-first config; no `tailwind.config.ts`)
- **@tailwindcss/postcss** — 4.3.0
- **PostCSS override** — 8.5.10 via `package.json` `overrides`, to clear the transitive Next-bundled PostCSS advisory while staying on the pinned Next 16.2 line.

### Runtime dependencies (post-Dispatch 008)

- **zod** — request-body validation on `/api/contact` and `/api/pageview`
- **@supabase/supabase-js** — client for cross-codebase writes to `idigdata-app` CRM/analytics tables
- **resend** — transactional email for contact-form notifications, now best-effort after durable CRM intake
- **@vercel/analytics** — privacy-first visit analytics (added in Dispatch 005; PostHog removed in Dispatch 093)

## Stack now (2026-04-28)

Next 16.2.7 deploys to Vercel **as a serverful App Router app** (Fluid Compute) — the prior `output: "export"` config was dropped in Dispatch 008/010 to enable the `/api/contact` serverless POST handler. The site is no longer a static export.

`/api/contact` and `/api/pageview` run on Node runtime. POST routes now pass through a shared guard (`lib/server/requestSecurity.ts`) for same-origin enforcement, JSON content-type enforcement, byte caps, and best-effort per-instance rate limiting. `/api/contact` persists CRM intake first, then attempts Resend notification as a best-effort side effect.

## Current Supabase project (website's own)

- **Project ref:** `adkwtkhvbntreznhwzxu`
- **URL:** https://adkwtkhvbntreznhwzxu.supabase.co
- **Tier / region:** Pro (Micro) / West US (Oregon) — us-west-2
- **Env vars:** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local` (gitignored).
- **Migrations:** none yet — empty `public` schema. Reserved for future website-scoped state.

## Cross-codebase dependencies (post-Dispatch 008)

The website now writes to **another** Supabase project owned by `idigdata-app`:

- **Project ref:** `dvjrmozeoakmcaccqqld` (idigdata-app)
- **Schema contract:** `contact_submissions`, `article_requests`, and `pageviews` tables in the `idigdata-app` project.
- **Env vars on the website side:** `IDIGDATA_APP_SUPABASE_URL`, `IDIGDATA_APP_SUPABASE_ANON_KEY`, and optional server-only `IDIGDATA_APP_SUPABASE_SERVICE_ROLE_KEY`. Distinct prefix avoids conflation with the website's own `NEXT_PUBLIC_SUPABASE_*` vars.
- **RLS posture:** anon key must remain insert-only from the website origin; reads denied. If `IDIGDATA_APP_SUPABASE_SERVICE_ROLE_KEY` is present, it stays server-only and enables returned row IDs on contact intake.
- **Origin posture:** browser POSTs must be same-origin to the current deployment origin or match the built-in/domain allowlist. `WEBSITE_ALLOWED_ORIGINS` extends the allowlist only when an extra hostname is intentional.

If the idigdata-app schema changes shape, this website's `/api/contact` route needs to track. Memo cycle is the discipline: schema-affecting change in idigdata-app triggers a memo back to idigdata for the website-side update.

## Layer posture (post-Dispatch 008/010)

Per `k2s/idigdata/memos/memo-002-to-loopsmith-resend-wired.md` (loopsmith absorbed 2026-04-26 with "land in next-code-tree-touch" Open). These deltas close that Open.

- **L4 — Deployment & CI.** Vercel env-var sync is load-bearing. Production + preview environments must carry `IDIGDATA_APP_SUPABASE_URL`, `IDIGDATA_APP_SUPABASE_ANON_KEY` or service-role key, `RESEND_API_KEY`, `EMAIL_NOTIFY_TO`, and any intentional `WEBSITE_ALLOWED_ORIGINS` extension. Missing CRM env breaks intake; missing Resend env no longer loses the lead but logs `notification: not_configured`.
- **L5 — Observability.** Resend dashboard provides email-flow telemetry. `/api/pageview` inserts lightweight pageview rows and `NEXT_PUBLIC_WEBSITE_EVENT_INGEST_URL` can send credential-free event payloads to a separate collector. App-level Sentry remains a future Layer 5 lift.
- **L6 — Security & Compliance.** Third-party API keys live in `.env.local` (gitignored) + Vercel encrypted env vars. Never place service-role or Resend keys in `NEXT_PUBLIC_*`. Baseline CSP, HSTS, frame, permissions, MIME-sniffing, cross-domain policy, same-origin POST guard, byte caps, and in-memory rate buckets are active.

## Orchestration-tree note

`C:\Users\Paddo\OneDrive\Desktop\k2s\idigdata\.claude\CLAUDE.md` (in the orchestration tree, not this code tree) was last refreshed pre-Dispatch 008. Post-launch its "Current state" section will need a Cowork-side update — gated by guardrail, not edited from CC.

## Deliberate drift from hello-world

- **Cross-codebase Supabase write.** hello-world targets its own Supabase only; this project additionally writes to `idigdata-app`'s Supabase via a thin server-side bridge. Documented in "Cross-codebase dependencies" above.
- **No ESLint.** Kept minimal; hello-world doesn't carry lint either. Add per-project if signal starts to pay for itself.

## Last verified

- **2026-06-09** — Hardening/spit-shine pass. Upgraded to Next 16.2.7 / React 19.2.7 / Tailwind 4.3.0 / Supabase 2.108.0 / Resend 6.12.4 / zod 4.4.3 and added `postcss@8.5.10` override. `npm audit --omit=dev` clean. `npm run build` clean. Added CSP/security headers, same-origin JSON POST guard, byte caps, best-effort rate limiting, stricter article slug validation, durable CRM-before-email contact flow, env/docs alignment, and project-corpus runtime cleanup.
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
- **Port-collision behavior changed.** Next 15 silently hopped to next free port on collision; Next 16 **hard-fails with EADDRINUSE**. On collision, find the zombie and kill it: `netstat -ano | findstr :3100` then `taskkill //F //PID <pid>`. This is a framework-level change, not configurable.
