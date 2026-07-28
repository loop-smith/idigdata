# Harden sequence — idigdata-site (Operator ack 2026-07-28)

Goal: outside auditor reads this as a **pro-grade built site**, not vibe-coded brochureware.
Source: `idigdata-site-build-audit` canvas.

## Order (do not reshuffle without Operator)

| # | Move | Why this next | Done when |
|---|---|---|---|
| 1 | Next ≥16.2.12 + PostCSS override; `npm audit --omit=dev` clean | Active high CVEs on proxy path | ✅ audit clean (+ sharp 0.35 override) |
| 2 | Shrink `site_hits` PII + privacy copy | Privacy/compliance gap | ✅ hashed IP, no lat/long, privacy aligned |
| 3 | `error.tsx` / `not-found.tsx` / `global-error.tsx` | Agency acceptance baseline | ✅ branded failure UX |
| 4 | Contact rate-limit honesty + tighten | Soft Map on serverless | ✅ documented + tighter buckets; KV later if spam |
| 5 | Prefer anon DigOps key for beacon writes | Least privilege | ✅ anon preferred + insert-only RLS shipped |
| 6 | Fleet marker = secret header in production | Integrity of Internal/Fleet tabs | ✅ bare `?fleet=1` dead in prod |
| 7 | DigOps-only env template; untrack `.temp` + public `.bak` | Deploy/git hygiene | ✅ Capo residue / bak removed from track |
| 8 | `typecheck` + `test` scripts + unit tests | Safety net | ✅ 10 tests green |
| 9 | Shared contact Zod; retire `article_request` ghost | Contract drift | ✅ one schema, dead path gone |
| 10 | `docs/TELEMETRY.md` + hygiene (slash, email CRLF) | Second-engineer ramp | ✅ done |

Deferred: none — SpineFilm split landed with this harden ship.

## Out of band (Operator / platform)

- Upstash/KV or Vercel WAF for hard contact rate limits
- DigOps Supabase insert-only RLS policies if anon cannot write today
- Production deploy of this branch (Operator-gated)

## Acceptance bar

An outside eng auditor can say: CVEs addressed, PII minimized, failure UX present, least-privilege keys preferred, telemetry documented, tests exist, no obvious ghost features or Capo residue in public tree.
