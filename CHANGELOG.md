# CHANGELOG — idigdata

Append-only history of stack moves + verification checkpoints. Newest first.

## 2026-06-10 — Beacon signal hardening

- **Traffic classification:** added shared website signal classification for campaign, external referral, direct, internal, dev, preview, asset, and agent/headless traffic.
- **Noise suppression:** `PageviewBeacon` now suppresses localhost, preview hosts by default, internal-marked browsers, asset/static paths, and bot/headless user agents before sending. `/api/pageview` repeats suppression server-side.
- **Internal marker:** `?internal=1` stores a local internal-traffic marker; `?internal=0` or `?clear_internal=1` clears it.
- **Pageview schema compatibility:** `/api/pageview` attempts richer signal fields first and falls back to the existing lightweight row shape if those columns are not in the Supabase schema yet.
- **API guard closure:** `/api/contact` and `/api/pageview` now parse bounded raw text before JSON parsing, so the byte cap applies even when `Content-Length` is absent or misleading.

## 2026-06-09 — Website hardening + corpus tidy

- **Supply chain:** upgraded exact pins to Next 16.2.7, React/React DOM 19.2.7, Supabase JS 2.108.0, Resend 6.12.4, zod 4.4.3, Tailwind/@tailwindcss-postcss 4.3.0, and TypeScript 5.9.3. Added `postcss@8.5.10` npm override for Next's transitive PostCSS advisory. `npm audit --omit=dev` clean.
- **Headers:** added enforced Content Security Policy compatible with Next/Vercel/JSON-LD, plus cross-domain policy and Origin-Agent-Cluster headers. Existing HSTS, nosniff, frame, referrer, permissions, and DNS-prefetch headers retained.
- **API hardening:** added shared JSON POST guard for same-origin checks, body-size caps, content-type enforcement, and best-effort per-instance rate limiting. Applied to `/api/contact` and `/api/pageview`.
- **Contact flow:** stricter article slug validation, duplicate article slug normalization, CRM intake persists before Resend notification, and Resend failure no longer loses the captured submission.
- **Docs/env:** removed stale PostHog env example, documented `WEBSITE_ALLOWED_ORIGINS`, `NEXT_PUBLIC_WEBSITE_EVENT_INGEST_URL`, optional `IDIGDATA_APP_SUPABASE_SERVICE_ROLE_KEY`, and `EMAIL_NOTIFY_FROM`.

## 2026-05-02 evening — Vercel project deploy PAUSED via git-disconnect (loopsmith_cw via Chrome MCP, no CC dispatch)

- **Trigger:** Rob hit `idigdata.vercel.app`, saw the marketing site live, asked to "turn off the idigdata-app form deploying via vercel." Naming clarification surfaced: `idigdata.vercel.app` IS this codebase (marketing site), not the separate `idigdata-app` CRM project (which has no Vercel deployment yet and is paused mid-build at `C:\2026_agentic_projects\idigdata-app\`).
- **Action: Git integration DISCONNECTED via Vercel Dashboard** → `loop-smith/idigdata` → Settings → Git → Disconnect → Continue. No further auto-deploys will fire from GitHub pushes (including any `v2-overhaul` preview branch deploys — `7XKy5cJeN` was the last preview before disconnect).
- **State preserved (intentionally — flip-on path):** Vercel project, env vars (RESEND_API_KEY + IDIGDATA_APP_SUPABASE_URL/ANON_KEY + EMAIL_NOTIFY_TO + others per `SYSTEMS.md` §6), Standard Deployment Protection settings, Skew Protection, Project Members, all settings.
- **Existing production deployment** (latest commit `9e2eb21` "Privacy: strip WHOIS contact PII from CHANGELOG audit note") still serves at `idigdata.vercel.app` to `loop-smith` team only — non-team-members hit Vercel auth wall via Standard Protection. (Pro Trial Vercel Authentication "All Deployments" scope requires paid Advanced Deployment Protection at $150/mo; declined.)
- **Custom domains** `idigdata.com` + `www.idigdata.com` remain DETACHED (since 2026-05-01 cycle 4.5); site returns `404 DEPLOYMENT_NOT_FOUND` at those URLs.
- **Reactivation flow when content ready for public:** Vercel Dashboard → `loop-smith/idigdata` → Settings → Git → Connect Repository → `loop-smith/idigdata`. Then re-attach custom domains per the flip-on procedure in `loopsmith/handoff.md` Deferred.
- **CRM `idigdata-app` (separate codebase) unaffected** — distinct project at `C:\2026_agentic_projects\idigdata-app\`, GitHub `loop-smith/idigdata-app` (private), no Vercel project yet. When CRM build resumes, it gets its own new Vercel project at deploy-time.

## 2026-05-02 — DNS hosting Bluehost→Vercel + registrar transfer initiated (loopsmith_cw cycles A/B/C, no CC dispatch)

- **Cycle A — DNS hosting transfer Bluehost → Vercel (zone authoritative now on `ns1/ns2.vercel-dns.com`).**
  - 7 records migrated, character-perfect: Outlook stack (CNAME `autodiscover` + MX `@` `idigdata-com.mail.protection.outlook.com` priority 0 + TXT `@` SPF) + Resend stack (MX `send` `feedback-smtp.us-east-1.amazonses.com` priority 10 + TXT `resend._domainkey` DKIM full value + TXT `send` SPF + TXT `_dmarc` DMARC).
  - Bluehost Nameservers tab → `NS1.BLUEHOST.COM`/`NS2.BLUEHOST.COM` flipped to `ns1/ns2.vercel-dns.com`.
  - REJECTED Vercel "Add DNS Preset → Outlook" — generic preset uses default Outlook MX, NOT tenant-specific `idigdata-com.mail.protection.outlook.com`. Manual record adds via Vercel UI form_input. Memory baked: `feedback_vendor_mx_records_are_tenant_specific`.
- **Cycle B — propagation verification (mxtoolbox-driven).**
  - NS lookup: `ns1/ns2.vercel-dns.com` authoritative globally within ~5 min. 13/13 standard NS-health checks GREEN. (One cosmetic warning: SOA serial format non-standard — irrelevant to function.)
  - MX apex `idigdata-com.mail.protection.outlook.com` priority 0 — Outlook email continuous, zero downtime.
  - DKIM at `resend._domainkey.idigdata.com` — full base64 value resolves character-perfect via Vercel.
- **Cycle C — Registrar transfer Bluehost → Vercel (initiated; auto-completes 2026-05-06 10:01:43 EDT).**
  - Bluehost Move & Access tab → Auth Code requested (reason "I want all my products with the same company"). Bluehost auto-unlocked Domain Lock simultaneously. Auth code email arrived to `robert@idigdata.com` within minutes.
  - **FOA email understood as opt-out (correction landed 2026-05-02 evening):** Bluehost FOA `"DOMAIN NAME TRANSFER"` arrived 2026-05-02 10:01:43 EDT — no APPROVE link, only a cancel option. Text: `"If you want to proceed with this transfer, you do not need to respond to this message."` Auto-completion at **2026-05-06 10:01:43 EDT** (4-day silence-consent window). Memory baked: `feedback_registrar_transfer_foa_models_vary` — losing-registrar FOA models vary; Bluehost is opt-out.
- **Post-completion expectations:** Vercel becomes registrar of record + WHOIS Privacy auto-applied via Vercel privacy proxy + 60-day ICANN lock. Bluehost account becomes closeable.

## 2026-05-01 — Custom domain attach + same-day takedown (loopsmith_cw cycles 1, 4.5; dispatch-011 + dispatch-012)

- **Cycle 1 — Custom domain attach (dispatch-011).** Vercel project `loop-smith/idigdata` → Settings → Domains → Add `idigdata.com` (Production) + `www.idigdata.com`. Vercel auto-issued Let's Encrypt cert; site briefly live at custom domain.
- **Cycle 4.5 — Immediate takedown (Rob ask: "now we need the site offline asap, cant have other people seeing this").** Removed `idigdata.com` + `www.idigdata.com` from project Domains. Both custom domains now return `404 DEPLOYMENT_NOT_FOUND`. `idigdata.vercel.app` remains accessible to `loop-smith` team only via Standard Deployment Protection (not paying for Advanced Deployment Protection at this time).
- **Site stays OFFLINE at `idigdata.com` until flip-on procedure runs** (procedure tracked in `loopsmith/handoff.md` Deferred — three-step Vercel UI flow, <5min).

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
