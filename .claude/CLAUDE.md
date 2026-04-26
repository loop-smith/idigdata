# idigdata — codebase brief

## What this repo is
Marketing / positioning website for **idigdata LLC** — Robert Paddock's independent consulting practice (Contract CIO, business transformation, agentic adoption). Next.js App Router, statically exported, targets Vercel static hosting at `idigdata.com`.

## Filesystem context — two separate roots
- **Codebase (this repo, git-tracked):** `C:\2026_agentic_projects\idigdata\`
- **Content / workfront / cowork-project folder:** `C:\Users\Paddo\OneDrive\Desktop\k2s\idigdata\`
  - `positioning/` — all marketing copy sources (one markdown file per page surface)
  - `pipeline/` — internal sales material
  - `dispatches/` — orchestration briefs from the Cowork session to this codebase
  - `.claude/CLAUDE.md` — workfront-side project charter (different file from this one; if you need fuller context on idigdata the practice, read it)
  - `README.md` — general project readme
- **Code never lands under `k2s\`.** **Content never lands under `2026_agentic_projects\`.** Keep the split clean.

## Stack
Next.js App Router + React + TypeScript (strict) + Tailwind 4 (CSS-first, `@theme` in `app/globals.css`) + `next/font` Google Fonts (Lora / Source Sans 3) + static export. No CMS, no DB, no forms, no server runtime.

**Pinned versions + verification checklist + migration history live in `STACK.md`** (lane root, alongside this file). Update `STACK.md` on any framework upgrade; it's the single source of truth for this project's pins. The estate-wide pin block lives at `paved/REGISTRY.md`.

## Design system (D2 — authoritative)
Source of truth: `app/globals.css` — Tailwind 4 uses CSS-first config, so D2 tokens live inside `@theme { --color-d2-* ... }` there.

Colors (Tailwind: `bg-d2-forest`, `text-d2-ink`, etc.):
- `forest` `#1F3D2E` · `aubergine` `#4A2E52` · `stone` `#7A756A`
- `warmgray` `#6B6860` · `ink` `#1A1A1A` · page bg `#FFFFFF`

Type (Google fallbacks for Cambria/Calibri — consistent render cross-platform):
- Display (Cambria → **Lora**): `font-display` · headings, pull-quotes, italic accents
- Body (Calibri → **Source Sans 3**): `font-body` · paragraph, nav, CTAs

No other colors. No gradients. No shadows. No images. No icons beyond favicon. No animations.

## Copy source (authoritative)
**All page copy lives in `C:\Users\Paddo\OneDrive\Desktop\k2s\idigdata\positioning\`.** Do NOT write new marketing copy in code. If copy feels wrong when rendered, flag it in the dispatch return summary — the orchestrator updates the markdown source and a later dispatch pulls it into code.

Filename convention: `website-<page>-v<N>.md` — e.g., `website-home-v1.md`, `website-about-v1.md`, `website-contact-v1.md`. Read whichever matches the page the dispatch is touching.

**When a copy source is updated after a page has already been rendered, future dispatches must re-read the markdown and sync the rendered page.** Copy can drift silently if a dispatch skips re-verification — always verify rendered output matches current source when the dispatch asks you to touch that page.

## Workflow
This codebase is driven by **dispatches** from the `idigdata` Cowork session.
- Dispatches live at `C:\Users\Paddo\OneDrive\Desktop\k2s\idigdata\dispatches\dispatch-NNN-*.md`.
- Each dispatch is self-contained: read top to bottom, execute, return a summary per the format at its bottom.
- No GitHub remote yet. No Vercel project yet. No DNS. Scoped additions only.

## Design non-goals (still enforced)
- No images / photos / logo walls — typography + palette IS the design.
- No decorative icons (lucide, heroicons, etc.). Favicon is fine.
- No animations, scroll effects, or interaction sugar beyond the intake modal chrome (backdrop fade is fine).
- No CMS or headless service — page copy lives in markdown sources under `k2s\idigdata\positioning\`, rendered at build.

## Analytics + data (what is wired or approved)
- **Intake form** → website Supabase `adkwtkhvbntreznhwzxu.supabase.co`. Table `prospects_inbound` (schema pending — dispatch will define it). Cross-codebase bridge into `idigdata-app`'s Supabase is a separate pipeline, gated on the app-side plumbing being ready; for now the website just writes and stores.
- **Conversion analytics — PostHog Cloud** (free tier). Funnel: pageview → CTA click → modal open → form submit. UTM capture on inbound links. All instrumentation routes through a thin `track(event, props)` helper so the vendor is swappable. Session replay enabled for conversion debugging.
- **Visit analytics baseline — Vercel Web Analytics** (zero-config on Vercel, privacy-first, no cookie banner).
- **No Google Analytics. No ad pixels. No retargeting scripts. No marketing tags** beyond the PostHog + Vercel Analytics stack above.

## Privacy posture
- Form collects: name, email, company (optional), engagement-shape radio, optional context text. No sensitive personal, health, or financial data.
- Analytics are cookie-free where possible — Vercel Web Analytics is; PostHog configured cookieless.
- `/privacy` page documenting collection + retention is a pending dispatch (not blocking launch).

## Ports
This project runs on **port 3100** (`npm run dev`). The canonical registry of local-dev ports across all projects on this machine is `C:\2026_agentic_projects\PORTS.md` — check it before starting any new port-consuming process, and register changes there.

**Collision behavior:** Next.js 16+ hard-fails on `EADDRINUSE` (not configurable — silent fallback was removed in v16). If 3100 is held by a zombie, the dev server will not start. Fix: `netstat -ano | findstr :3100` then `taskkill //F //PID <pid>`.

## Static assets
Place static assets (resume PDF, favicon, logo files, open-graph images) under `public/`. Everything in `public/` is served at the site root at build time (e.g., `public/Paddock-Resume.pdf` → `/Paddock-Resume.pdf`). Folder is created lazily — if it doesn't exist yet, create it when the first asset lands.

## Current state
- **Scaffolded by:** dispatch 001 (2026-04-21). Next/Tailwind versions bumped in-loop after scaffold (see Stack section for current versions).
- **Git:** remote `origin` pushed to `github.com/loop-smith/idigdata` (public, dispatch 003, 2026-04-21). Initial commit `0c87fea` (scaffold, dispatch 001). **No Vercel project, no DNS.** Vercel deploy deferred pending `idigdata-app` scaffold + website contact-form bridge.
- **Routes:** `/` (home, `website-home-v1.md`, BOSS paragraph v4 "agentic MDM") · `/about` (rendered from `website-about-v2.md` — buyer-first page order, Three Chapters framing dropped) · `/contact` (rendered from `website-contact-v1.md` — mailto CTA, no form)
- **Chrome:** shared `SiteHeader` + `SiteFooter` in `components/`. Footer has `LinkedIn` and `BOSS on GitHub` as disabled-looking placeholders pending later dispatches.
- **Favicon + icons:** `app/icon.svg` (Next 16 auto-registered), `public/favicon.ico` (multi-res 16/32/48, Lora server-rasterized), `public/apple-icon.png` (180×180). OG card at `public/og-image.png` (1200×630).
- Run: `npm install && npm run dev` → `http://localhost:3100`
