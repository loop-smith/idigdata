# CHANGELOG — idigdata

Append-only history of stack moves + verification checkpoints. Newest first.

## 2026-04-28 — Public launch + contact form bridge (Dispatch 010, includes 008)

- **Dropped `output: "export"`** from `next.config.ts`. Site now runs on Vercel natively (Fluid Compute), not as static export. `images: { unoptimized: true }` also removed (no longer required).
- **Added `/api/contact` serverless POST handler** — zod validation, honeypot anti-spam, runtime=nodejs.
- Form posts to `idigdata-app` Supabase `leads` table (per Memo 001 schema). Decision-traces enqueue trigger fires on insert.
- Resend email notification fallback to `robert@idigdata.com`.
- Form UX: `idle → submitting → success | error` state machine; inline confirmation with lead-id reference.
- **Deps added:** `zod`, `@supabase/supabase-js`, `resend`.
- **Env vars added:** `IDIGDATA_APP_SUPABASE_URL`, `IDIGDATA_APP_SUPABASE_ANON_KEY`, `RESEND_API_KEY`, `EMAIL_NOTIFY_TO`. Documented in README; `.env.local.example` committed.
- **STACK.md** updated with deps, cross-codebase dependency note, and L4/L5/L6 posture deltas per memo-002 (closes loopsmith's "land in next-code-tree-touch" Open).
- **First production Vercel deploy** of `idigdata` (project name: `idigdata`, account: loop-smith).

## 2026-04-27 — Polish (post-007)

- Relocated Copper Maker-moments + dual-CTA on `/about` and `/capabilities`.
- Scrapped orphaned `IntakeForm` + `IntakeLaunchButton` (dead post-007).

## 2026-04-26 — Dispatch 009: SEO Pro pass

- Per-page meta + JSON-LD + sitemap.

## 2026-04-25 — Dispatch 007: Brief to website

- About v2 + Capabilities pages from positioning markdown sources.

## 2026-04-21 — Region migration to us-west-2

- Supabase project `adkwtkhvbntreznhwzxu` migrated to West US (Oregon).

## 2026-04-21 — Stack upgrade: Next 16 + Tailwind 4

- Next 15.5.15 → 16.2.4 (App Router; static export config preserved at the time).
- Tailwind 3.4.17 → 4 (CSS-first config in `app/globals.css`; `tailwind.config.ts` retired).
- Migration notes captured in `STACK.md`.

## 2026-04-21 — Dispatch 002: Render About + Contact + SEO

- About v2, Contact, OG image, favicon (multi-res), apple-icon.

## 2026-04-21 — Dispatch 001: Scaffold

- Next.js App Router scaffold; D2 design system tokens; Lora + Source Sans 3 via `next/font`.
