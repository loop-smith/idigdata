# DigOps website — idigdata-site

**Home:** `C:\rig001\assets\flowcraft\instances\digops\idigdata-site`  
**Role:** DigOps instance public hookup for **idigdata.com** (Data Integration Group LLC)  
**Not:** a personal portfolio repo with DigOps footnotes  
**Git:** independent · remote `loop-smith/idigdata` · **never push `working` without Operator word**  
**Content twin:** `../brand-content/` (triad + firm ledgers) · **Ops twin:** `../operations/`

**Keepers:** [../../../organization/KEEPERS.md](../../../organization/KEEPERS.md) · Name map: [../../../organization/NAME-MAP.md](../../../organization/NAME-MAP.md) · Infra (old Supabase = junk): [../INFRA-OPEN.md](../INFRA-OPEN.md)

Copy source of truth for rehones: `../brand-content/triad/`.

## Stack

See [STACK.md](STACK.md). Highlights: Next.js 16 App Router · React 19 · TypeScript · Tailwind 4 · Supabase bridge to **operations** · Resend · Vercel Analytics.

## Develop

```
npm install
npm run dev
```

Boots on `http://localhost:3100`. Next 16 hard-fails on `EADDRINUSE` — free the port if needed:

```
netstat -ano | findstr :3100
taskkill //F //PID <pid>
```

## Build

```
npm run build
npm run start
```

## Environment

Copy `.env.local.example` → `.env.local` (gitignored).

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_SUPABASE_*` | Website’s own Supabase `adkwtkhvbntreznhwzxu` (reserved / light use) |
| `IDIGDATA_APP_SUPABASE_*` | **Bridge to operations** Supabase `dvjrmozeoakmcaccqqld` (env prefix is Capo-era; means DigOps ops) |
| `RESEND_API_KEY` / `EMAIL_NOTIFY_*` | Contact notification mail |
| `WEBSITE_ALLOWED_ORIGINS` | Optional extra POST origins |

Mirror load-bearing vars in Vercel (production + preview) when publishing — Operator-gated.

## Copy ownership

Do **not** invent marketing copy only in React. Edit hunt messaging in `../brand-content/triad/`, firm ledger in `../brand-content/firm/`, then sync into site code when shipping.

## Deploy posture

Vercel project historically `idigdata` → `idigdata.com`. Auto-deploy on `main` is Capo-era behavior — **confirm before any push**. See [LOCAL-ONLY.md](LOCAL-ONLY.md) and [INFRA-OPEN.md](../INFRA-OPEN.md).

## Layout

```
app/           — routes + /api/contact, /api/pageview
components/    — shared UI
lib/           — utilities + request guards
public/        — static assets
proxy.ts       — entrance / door-knock capture
scripts/sql/   — SQL contracts for ops Supabase tables
supabase/      — website-owned migrations (mostly empty)
STACK.md       — pins + migration history
```

## Provenance

Promoted from CapoXP `C:\rig\code\idigdata` — [PROVENANCE.md](PROVENANCE.md).
