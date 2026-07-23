# DigOps idigdata-site (Claude)

## What this repo is

Next.js marketing / positioning website for the **DigOps** FlowCraft instance (DIG LLC) at idigdata.com. Not a personal portfolio with DigOps footnotes.

## RIG001 homes

| Role | Path |
|---|---|
| **This codebase** | `C:\rig001\assets\flowcraft\instances\digops\idigdata-site` |
| **Brand / triad content** | `..\brand-content\` |
| **Operations / CRM** | `..\operations\` |
| **Org doctrine** | `C:\rig001\assets\flowcraft\organization\` |

Retired Capo homes: `C:\rig\code\idigdata`, `k2s\idigdata\…`.

## Stack

Pinned versions + Supabase bridge: [STACK.md](../STACK.md). Design tokens live in `app/globals.css` `@theme`.

## Copy

Authoritative hunt edit surface: `..\brand-content\triad\`. Firm ledger: `..\brand-content\firm\`. Sync into code when shipping; do not let React become the only copy source.

## Data plane

- Intake + telemetry bridge → **operations** Supabase (`dvjrmozeoakmcaccqqld`) via `IDIGDATA_APP_SUPABASE_*` (name is historical).
- Website-own Supabase `adkwtkhvbntreznhwzxu` — reserved / light use.
- Open Vercel/Supabase hygiene: `..\INFRA-OPEN.md`.

## Ports

`npm run dev` → **3100**. On `EADDRINUSE`: `netstat -ano | findstr :3100` then `taskkill //F //PID <pid>`.

## Push

Remote push enabled (Vercel-connected). **Never push `working` without Operator word.** See [LOCAL-ONLY.md](../LOCAL-ONLY.md).
