# LOCAL-ONLY — idigdata-site

This repo is the DigOps **website** on RIG001.

## Environments

| Place | Job |
|---|---|
| Disk + `npm run dev` | Craft. Capo-eyes `http://localhost:3100` |
| GitHub `rigorg/idigdata` | Same Git repo (old name `loop-smith/idigdata`) |
| Vercel project `idigdata` | **Host**, not a second repo. Builds from that GitHub repo |
| idigdata.com | Live. Today this moves when branch `working` is pushed |

`working` is the live branch. `main` is behind. **A push is a publish.** Local commits are not.

## Fence (mechanical — not honor system)

Until Capo says **Ship**:

1. Origin **push URL is disabled** on this checkout (`no-push://idigdata-fenced-until-capo-ship`).
2. `.git/hooks/pre-push` refuses `git push` unless `IDIGDATA_SHIP=1`.
3. Agents: local commit OK. **Never restore the push URL. Never set `IDIGDATA_SHIP`. Never `git push`.**

Install / re-apply on this checkout:

```
powershell -File scripts/install-local-fence.ps1
```

Capo Ship (only): `scripts/capo-ship-unlock.ps1` then `IDIGDATA_SHIP=1 git push -u origin HEAD`.

Do not change Vercel project / domain / auto-deploy settings without Capo word.

Sibling posture: `operations/` is `no_push`; `brand-content/` push is Operator-enabled for keeper backup (still do not invent publish).
