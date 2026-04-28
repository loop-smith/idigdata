# idigdata

Marketing / positioning website for **idigdata LLC** — Robert Paddock's independent consulting practice (Contract CIO, business transformation, agentic adoption).

Next.js App Router + React + TypeScript + Tailwind 4. Deploys to Vercel. Domain: `idigdata.com`.

## Stack

See `STACK.md` for pinned versions and migration history. Highlights:

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4 (CSS-first config in `app/globals.css`)
- Supabase (cross-codebase bridge to `idigdata-app` for contact form leads)
- Resend (transactional email)
- PostHog (conversion analytics)
- Vercel Web Analytics

## Develop

```
npm install
npm run dev
```

Boots on `http://localhost:3100`. Port assignment is registered at `C:\2026_agentic_projects\PORTS.md`.

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
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog project key | PostHog dashboard |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog API host (US cloud default) | `https://us.i.posthog.com` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console meta verification token | GSC property setup |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Bing Webmaster Tools meta verification token | BWT property setup |
| `IDIGDATA_APP_SUPABASE_URL` | **Cross-codebase bridge.** URL of the `idigdata-app` Supabase project where contact-form leads land. | Supabase dashboard for project `dvjrmozeoakmcaccqqld` |
| `IDIGDATA_APP_SUPABASE_ANON_KEY` | Anon key for `idigdata-app` Supabase. RLS allows insert-only on the `leads` table from the website origin. | Supabase dashboard for project `dvjrmozeoakmcaccqqld` |
| `RESEND_API_KEY` | Resend API key for transactional email (contact-form notifications). | https://resend.com/api-keys |
| `EMAIL_NOTIFY_TO` | Address that receives the lead-notification email. | `robert@idigdata.com` |

For Vercel, mirror the same vars in **Project Settings → Environment Variables** (production + preview).

## Deploy

Vercel project: `idigdata`. Production deploys land at `idigdata.com`. Production deploys auto-fire on push to `main`.

## Layout

```
app/                 — App Router routes (/, /about/, /capabilities/, /contact/) + /api/contact serverless POST
components/          — shared UI (SiteHeader, SiteFooter, ContactForm, JsonLdScript, ...)
lib/                 — utilities (track helper, …)
public/              — favicon, og-image, resume PDF, etc.
supabase/            — migrations for the website's own Supabase project (currently empty)
STACK.md             — pinned versions + migration history
CHANGELOG.md         — append-only history of stack moves + verification checkpoints
.claude/CLAUDE.md    — agent rules (project-specific; cascades with tree-level CLAUDE.md)
```

## Cross-codebase context

This website depends on the `idigdata-app` Supabase project for the contact-form bridge. See `STACK.md` "Cross-codebase dependencies" for the schema contract.
