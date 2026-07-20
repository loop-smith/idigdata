# LOCAL-ONLY git (DigOps)

FlowCraft DigOps on RIG001 is a **disk-isolated estate**.

- Commits are for **local history** so rehone edits are not silently destructive.
- Remotes may still be listed for later Vercel publish, but **push is disabled** until Operator word.
- Do not `git push`, rename remotes for publish, or open Vercel from this seat without that word.

Components:

| Folder | Local history purpose |
|---|---|
| `brand-content/` | Triad + Capo projects tip |
| `idigdata-site/` | Website code tip + provenance |
| `operations/` | App scaffold (dormant this phase) |
| `intake/` | Quarantine / receipts — not a git home |

Publish path later: local tip → Operator-authorized push to the Vercel-connected GitHub repo → deploy.
