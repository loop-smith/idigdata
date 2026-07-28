/**
 * Stamp DigOps fleet beacon cookie / header for Playwright (and similar).
 *
 * Usage:
 *   node --env-file=.env.local scripts/stamp-fleet-beacon.mjs
 *   # or set DIGOPS_FLEET_BEACON_SECRET in the environment
 *
 * Playwright example:
 *   const { headers, stampUrl } = await import('./scripts/stamp-fleet-beacon.mjs')
 *   await page.goto(stampUrl)
 *   // or: await page.setExtraHTTPHeaders(headers)
 */

const SITE = process.env.DIGOPS_SITE_URL || 'https://idigdata.com'
const secret = process.env.DIGOPS_FLEET_BEACON_SECRET?.trim()

export const stampUrl = `${SITE.replace(/\/$/, '')}/?fleet=1`
export const headers = secret
  ? { 'x-digops-traffic': `fleet:${secret}` }
  : {}

async function main() {
  const res = await fetch(stampUrl, {
    method: 'GET',
    headers: {
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      ...headers,
    },
    redirect: 'follow',
  })
  const setCookie = res.headers.getSetCookie?.() ?? []
  const fleet = setCookie.some((c) => c.startsWith('idig_fleet_traffic=1'))
  console.log(
    JSON.stringify(
      {
        ok: res.ok,
        status: res.status,
        stampUrl,
        headerAuth: Boolean(secret),
        fleetCookieSet: fleet,
      },
      null,
      2,
    ),
  )
  if (!res.ok || !fleet) process.exitCode = 1
}

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, '/')}` || process.argv[1]?.endsWith('stamp-fleet-beacon.mjs')) {
  main().catch((err) => {
    console.error(err)
    process.exit(1)
  })
}
