/** Beat 01 tile glyphs (abstract: grid = spreadsheet, bars = BI,
 *  cylinder = DB, heavy block = vendor — no logo salad). */

export function GridTile({ t }: { t: string }) {
  return (
    <g transform={t}>
      <rect width="64" height="44" rx="3" fill="#16304D" stroke="rgba(247,245,238,0.4)" />
      <path d="M0 15 h64 M0 30 h64 M21 0 v44 M42 0 v44" stroke="rgba(247,245,238,0.28)" />
    </g>
  );
}

export function BarsTile({ t }: { t: string }) {
  return (
    <g transform={t}>
      <rect width="64" height="44" rx="3" fill="#16304D" stroke="rgba(247,245,238,0.4)" />
      <path
        d="M10 34 v-12 M24 34 v-20 M38 34 v-8 M52 34 v-16"
        stroke="rgba(247,245,238,0.4)"
        strokeWidth="4"
      />
    </g>
  );
}

export function DbTile({ t }: { t: string }) {
  return (
    <g transform={t}>
      <path d="M0 8 v34 a26 8 0 0 0 52 0 v-34" fill="#16304D" stroke="rgba(247,245,238,0.4)" />
      <ellipse cx="26" cy="8" rx="26" ry="8" fill="#1B3A5C" stroke="rgba(247,245,238,0.4)" />
    </g>
  );
}

export function VendorTile({ t }: { t: string }) {
  return (
    <g transform={t}>
      <rect width="90" height="56" rx="4" fill="#1B3A5C" stroke="rgba(247,245,238,0.5)" strokeWidth="1.5" />
      <path d="M12 18 h50 M12 32 h34" stroke="rgba(247,245,238,0.4)" strokeWidth="3" />
      <rect x="70" y="38" width="12" height="10" fill="rgba(247,245,238,0.2)" />
    </g>
  );
}

export function ScrapTile({ t }: { t: string }) {
  return (
    <g transform={t}>
      <rect width="54" height="36" rx="3" fill="#16304D" stroke="rgba(247,245,238,0.35)" />
      <path d="M10 14 h34" stroke="rgba(247,245,238,0.3)" strokeWidth="2" />
    </g>
  );
}
