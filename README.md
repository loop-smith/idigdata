# idigdata

Marketing / positioning website for **Data Integration Group** — Robert Paddock's independent consulting practice (Contract CIO, business transformation, agentic adoption).

Next.js App Router + React + TypeScript + Tailwind 4. Deploys to Vercel. Domain: `idigdata.com`.

## Stack

See `STACK.md` for pinned versions and migration history. Highlights:

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4 (CSS-first config in `app/globals.css`)
- Supabase (cross-codebase bridge to `idigdata-app` CRM intake tables)
- Resend (transactional email)
- Vercel Web Analytics

## Develop

```
npm install
npm run dev
```

Boots on `http://localhost:3100`. Port assignment is registered at `C:\rig\code\PORTS.md`.

If port 3100 is held by a zombie, Next 16 hard-fails with `EADDRINUSE`. Find and kill:

```
netstat -ano | findstr :3100
taskkill //F //PID <pid>
```

## Build

```
npm run build
npm run start
```

Production output lives in `.next/`. Vercel runs the build natively (no static export).

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in the values. `.env.local` is gitignored.

| Var | Purpose | Where it comes from |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Website's own Supabase project (currently unused; reserved) | Supabase dashboard for project `adkwtkhvbntreznhwzxu` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Website's own anon key (public-by-design; RLS-protected) | Supabase dashboard for project `adkwtkhvbntreznhwzxu` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console meta verification token | GSC property setup |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Bing Webmaster Tools meta verification token | BWT property setup |
| `WEBSITE_ALLOWED_ORIGINS` | Optional comma-separated extension to the built-in same-origin allowlist for POST routes. | Only needed for extra deployed hostnames |
| `NEXT_PUBLIC_WEBSITE_EVENT_INGEST_URL` | Optional credential-free analytics event collector used by `websiteEvents.ts`. | Internal website events ingest endpoint |
| `NEXT_PUBLIC_TRACK_PREVIEW_TRAFFIC` | Optional `1` to include Vercel preview traffic in telemetry. Defaults to suppressing previews. | Only for intentional preview instrumentation |
| `IDIGDATA_APP_SUPABASE_URL` | **Cross-codebase bridge.** URL of the `idigdata-app` Supabase project where contact submissions and article requests land. | Supabase dashboard for project `dvjrmozeoakmcaccqqld` |
| `IDIGDATA_APP_SUPABASE_ANON_KEY` | Anon key for `idigdata-app` Supabase. RLS must allow insert-only writes from the website origin. | Supabase dashboard for project `dvjrmozeoakmcaccqqld` |
| `IDIGDATA_APP_SUPABASE_SERVICE_ROLE_KEY` | Optional server-only key. Enables `/api/contact` to return inserted CRM row IDs. Never expose with `NEXT_PUBLIC_`. | Supabase dashboard for project `dvjrmozeoakmcaccqqld` |
| `RESEND_API_KEY` | Resend API key for transactional email (contact-form notifications). | https://resend.com/api-keys |
| `EMAIL_NOTIFY_TO` | Address that receives the lead-notification email. | `robert@idigdata.com` |
| `EMAIL_NOTIFY_FROM` | Optional verified sender override. Defaults to `idigdata website <noreply@idigdata.com>`. | Resend verified domain |

For Vercel, mirror the same vars in **Project Settings → Environment Variables** (production + preview).

## Traffic telemetry

`PageviewBeacon` sends only buyer-signal pageviews to `/api/pageview`. It suppresses localhost, Vercel preview hosts unless explicitly enabled, known asset/static paths, bot/headless user agents, and internal traffic.

To mark internal traffic, open the site once with `?internal=1`. That stores a browser-local marker and suppresses future beacons from that browser. Clear it with `?internal=0` or `?clear_internal=1`.

The server repeats the classification before Supabase insert. If the `pageviews` table has richer signal columns, the route writes `traffic_class`, source fields, boolean suppression flags, and `buyer_signal`. If those columns are not deployed yet, it falls back to the existing lightweight row shape.

## Deploy

Vercel project: `idigdata`. Production deploys land at `idigdata.com`. Production deploys auto-fire on push to `main`.

## Layout

```
app/                 — App Router routes + /api/contact and /api/pageview serverless POST handlers
components/          — shared UI (SiteHeader, SiteFooter, ContactForm, JsonLdScript, ...)
lib/                 — utilities and server-side request guards
public/              — favicon, og-image, resume PDF, etc.
supabase/            — migrations for the website's own Supabase project (currently empty)
STACK.md             — pinned versions + migration history
CHANGELOG.md         — append-only history of stack moves + verification checkpoints
.claude/CLAUDE.md    — agent rules (project-specific; cascades with tree-level CLAUDE.md)
```

## Cross-codebase context

This website depends on the `idigdata-app` Supabase project for contact submissions, article requests, and pageview telemetry. See `STACK.md` "Cross-codebase dependencies" for the schema contract.
