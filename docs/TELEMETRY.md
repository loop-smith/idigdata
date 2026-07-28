# Telemetry — idigdata-site

Entrance truth lives in DigOps Supabase. Client beacons are opt-in.

## Source of truth

| Path | When it fires | Tables | Auth |
|---|---|---|---|
| `proxy.ts` → `recordDoorKnock` | First meaningful HTML document request (and remount internal/fleet) | `site_hits` (rich) + `pageviews` (mirror) | DigOps **anon** insert (RLS) |
| `/api/pageview/` | Only if `NEXT_PUBLIC_TRACK_PAGE_NAVIGATION=1` | `pageviews` | DigOps anon |
| `websiteEvents` → ingest URL | Only if `NEXT_PUBLIC_WEBSITE_EVENT_INGEST_URL` set | External | Credential-free POST |
| Vercel Analytics | Always unless visitor opts out | Vercel | First-party aggregate |

Default production posture: **door-knock only** + Vercel Analytics. Do not turn on page navigation tracking without Operator word.

## Markers

| Marker | How | Notes |
|---|---|---|
| Internal | `?internal=1` or `DIGOPS_INTERNAL_IPS` | Year cookie; records as `rob_internal` |
| Fleet | Header `x-digops-traffic: fleet:<DIGOPS_FLEET_BEACON_SECRET>` | Production ignores bare `?fleet=1` |
| Attribution | UTM/gclid landing → `idig_attr` cookie (30d) | Fills UTMs after navigation |

Clear: `?clear_internal=1`, `?clear_fleet=1`, `?clear_attr=1`.

## PII posture (door-knock)

- IP stored as salted SHA-256 prefix (`h:…`), not raw
- Coarse geo only (country / region / city) — no lat/long
- `headers_json` allowlist excludes IP / forwarded / ray ids
- Optional salt: `DIGOPS_IP_HASH_SALT`

## Rate limits

`/api/contact` and `/api/pageview` use in-process buckets (`requestSecurity.ts`).
On Vercel this is a **soft** per-isolate guard. Primary defenses: same-origin check,
body caps, honeypot, zod. Platform WAF / Upstash is the hard follow-up if spam rises.

## DigOps keys

- Prefer `DIGOPS_SUPABASE_ANON_KEY` for all website inserts (RLS insert-only policies).
- `DIGOPS_SUPABASE_SERVICE_ROLE_KEY` optional — only for contact `.select("id")` return.
