# STACK — DigOps idigdata-site

**Disk:** `C:\rig001\assets\flowcraft\instances\digops\idigdata-site`  
**Capo alias:** `C:\rig\code\idigdata` · GitHub `loop-smith/idigdata`  
**Name map:** [../../../organization/NAME-MAP.md](../../../organization/NAME-MAP.md)

## Pins

- **Next.js** — 16.2.7 (App Router)
- **React** — 19.2.7
- **TypeScript** — 5.9.3
- **Tailwind CSS** — 4.3.0 (CSS-first; no `tailwind.config.ts`)
- **@tailwindcss/postcss** — 4.3.0
- **PostCSS override** — 8.5.10 via `package.json` `overrides`

### Runtime dependencies

- **zod** — `/api/contact` and `/api/pageview` validation
- **@supabase/supabase-js** — bridge writes to **DigOps operations** Supabase
- **resend** — contact notifications (best-effort after durable CRM intake)
- **@vercel/analytics** — privacy-first visit analytics

## Runtime shape

Serverful App Router on Vercel (Fluid Compute). `output: "export"` was dropped to enable `/api/contact`. `proxy.ts` captures entrance/door-knock telemetry. POST routes use `lib/server/requestSecurity.ts` (same-origin, content-type, caps, rate limit).

## Website Supabase (own)

- **Reserved:** optional `NEXT_PUBLIC_SUPABASE_*` for future site-only use. Not the DigOps beacon sink.
- Capo website project `adkwtkh…` was deleted (2026-07-22).

## Bridge → DigOps (operations) Supabase

Site writes into the **DigOps** project (FlowCraft instance app / CRM / beacon sink):

- **Project:** `digops` · ref `emwhsenwinqrgtyavpee` · region us-west-1
- **Tables (contract):** `contact_submissions`, `article_requests`, `pageviews`, `site_hits`
- **Env on site:** `DIGOPS_SUPABASE_URL`, `DIGOPS_SUPABASE_ANON_KEY`, optional `DIGOPS_SUPABASE_SERVICE_ROLE_KEY`
- **RLS:** anon insert for website bridge; authenticated select for DigOps operators; service role server-only if present

Schema: `../operations/supabase/migrations/20260724213000_digops_website_bridge.sql`. Open hygiene: [../INFRA-OPEN.md](../INFRA-OPEN.md).

## Layer posture

- **Deploy:** Vercel env must carry ops bridge + Resend vars for intake to work in prod/preview.
- **Observability:** `proxy.ts` door-knock fields; client page-to-page beacons off unless `NEXT_PUBLIC_TRACK_PAGE_NAVIGATION=1`.
- **Security:** never put service-role / Resend in `NEXT_PUBLIC_*`.

## Port

**3100** — Next 16 hard-fails on `EADDRINUSE`.

## Last verified (inherited)

- **2026-06-10** — Entrance telemetry + API guard passes (`npm run build` clean) on Capo tree before promote.
- Re-verify on RIG001 before treating pins as freshly proven: `npm install && npm run build`.

## Verification checklist

1. Clean install → `npm run dev` on `:3100`
2. Visual smoke vs `.screenshots/` if present
3. `npm run build`
4. Synthetic POST `/api/contact` (happy / honeypot / validation)
5. Update this file’s verification note when done
