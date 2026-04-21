# idigdata — codebase brief

## What this repo is
Marketing / positioning website for **idigdata LLC** — Robert Paddock's independent consulting practice (Contract CIO, business transformation, agentic adoption). Next.js App Router, statically exported, targets Vercel static hosting at `idigdata.com`.

## Filesystem context — two separate roots
- **Codebase (this repo, git-tracked):** `C:\2026_agentic_projects\idigdata\`
- **Content / workfront / cowork-project folder:** `C:\Users\Paddo\OneDrive\Desktop\k2s\idigdata\`
  - Holds: positioning drafts, pipeline, dispatches, README (project charter).
- **Code never lands under `k2s\`.** **Content never lands under `2026_agentic_projects\`.** Keep the split clean.

## Stack
- Next.js 15 (App Router) · React 19 · TypeScript (strict)
- Tailwind CSS 3 · `next/font` Google Fonts (Lora + Source Sans 3)
- `output: 'export'` — static HTML. No CMS, no DB, no forms, no server runtime.

## Design system (D2 — authoritative)
Source of truth: `tailwind.config.ts` (`colors.d2.*`) + `app/globals.css`.

Colors (Tailwind: `bg-d2-forest`, `text-d2-ink`, etc.):
- `forest` `#1F3D2E` · `aubergine` `#4A2E52` · `stone` `#7A756A`
- `warmgray` `#6B6860` · `ink` `#1A1A1A` · page bg `#FFFFFF`

Type (Google fallbacks for Cambria/Calibri — consistent render cross-platform):
- Display (Cambria → **Lora**): `font-display` · headings, pull-quotes, italic accents
- Body (Calibri → **Source Sans 3**): `font-body` · paragraph, nav, CTAs

No other colors. No gradients. No shadows. No images. No icons beyond favicon. No animations.

## Copy source (authoritative)
**All page copy lives in `C:\Users\Paddo\OneDrive\Desktop\k2s\idigdata\positioning\`.** Do NOT write new marketing copy in code. If copy feels wrong when rendered, flag it in the dispatch return summary — the orchestrator updates the markdown source and a later dispatch pulls it into code.

Current home-page copy source: `positioning\website-home-v1.md`.

## Workflow
This codebase is driven by **dispatches** from the `idigdata` Cowork session.
- Dispatches live at `C:\Users\Paddo\OneDrive\Desktop\k2s\idigdata\dispatches\dispatch-NNN-*.md`.
- Each dispatch is self-contained: read top to bottom, execute, return a summary per the format at its bottom.
- No GitHub remote yet. No Vercel project yet. No DNS. Scoped additions only.

## Explicit project-wide non-goals
- No analytics tracking, no third-party scripts.
- No user data collection. No forms. No CRM integration.
- No images / photos / logo walls — typography + palette IS the design.
- No decorative icons (lucide, heroicons, etc.). Favicon is fine.
- No animations, scroll effects, or interaction sugar.
- No CMS, headless service, or database.

## Current state
- **Scaffolded by:** dispatch 001 (2026-04-21)
- **Routes:** `/` (home, full content from `website-home-v1.md`) · `/about` (placeholder — "Coming soon.") · `/contact` (placeholder — email only)
- **Chrome:** shared `SiteHeader` + `SiteFooter` in `components/`. Footer has `LinkedIn` and `BOSS on GitHub` as disabled-looking placeholders pending later dispatches.
- Run: `npm install && npm run dev` → `http://localhost:3000`
