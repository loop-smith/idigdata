"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/**
 * Sovereign Data Spine — pinned scroll film, six hard beats (shot list v3,
 * storyboard REV E, sealed frames at .agents/riffs/glass-film-frames-20260723-cc).
 * Doctrine (Operator ruling 2026-07-24): MDM is the sixth constellation; the
 * constellation center is the data-centric core (Common Data Model), per
 * public/diagrams/six-constellations.svg canon.
 * Beat frames are fixed compositions; layers toggle per [data-beat] — no crossfade mush.
 * Click the beat rail (or "See the operating map") to jump; scroll also drives state.
 * prefers-reduced-motion → static beat 06 end-state. Mobile → stacked frames 01/03/05/06.
 */

type Beat = {
  n: string;
  chip: string;
  label: string;
  line: string;
};

const BEATS: Beat[] = [
  {
    n: "01",
    chip: "Mess",
    label: "The mess",
    line: "Excel and Power BI bandaids, vendor blocks, line spaghetti. No owned center — peak entropy. This is what kills the program.",
  },
  {
    n: "02",
    chip: "Data",
    label: "Data core",
    line: "Noise comes down. The sovereign data core seats from building blocks — Common Data Model the business owns.",
  },
  {
    n: "03",
    chip: "People",
    label: "People — functional groups",
    line: "Human work docks onto the spine: functional groups organized by workflow requirement, not org chart or vendor module.",
  },
  {
    n: "04",
    chip: "Control",
    label: "Project management — control center",
    line: "The rail over the build: ownership, execution, and observability for every well-run program — not a vendor software install.",
  },
  {
    n: "05",
    chip: "Adopt",
    label: "Adoption locks",
    line: "Training, SOPs, UAT. Three locks down the spine so people are set up to succeed after go-live.",
  },
  {
    n: "06",
    chip: "Asset",
    label: "Living asset",
    line: "Six process constellations — D2R, O2C, P2M, MDM, P2P, S2S — around the data-centric core. Owned, not rented.",
  },
];

const MOBILE_BEATS: Array<{ beat: number; label: string; line: string }> = [
  {
    beat: 1,
    label: "The mess",
    line: "Excel and Power BI bandaids, vendor blocks, line spaghetti. No owned center — peak entropy. This is what kills the program.",
  },
  {
    beat: 3,
    label: "Data core · People — functional groups",
    line: "Noise comes down; the data core seats from building blocks. Human work docks onto the spine by workflow requirement.",
  },
  {
    beat: 5,
    label: "Control center · Adoption locks",
    line: "Project management rail: ownership, execution, observability. Then training, SOPs, and UAT so people succeed after go-live.",
  },
  {
    beat: 6,
    label: "Living asset",
    line: "Six process constellations around the data-centric core. Owned, not rented.",
  },
];

/** Even sixths — hard cuts, no muddy mid-fade zone. */
function beatFor(p: number): number {
  if (p < 1 / 6) return 1;
  if (p < 2 / 6) return 2;
  if (p < 3 / 6) return 3;
  if (p < 4 / 6) return 4;
  if (p < 5 / 6) return 5;
  return 6;
}

/** Progress midpoint for a beat (1–6). */
function progressForBeat(beat: number): number {
  return Math.min(0.99, (beat - 0.5) / 6);
}

/* ---------- Beat 01 tile glyphs (abstract: grid = spreadsheet, bars = BI,
   cylinder = DB, heavy block = vendor — no logo salad) ---------- */

function GridTile({ t }: { t: string }) {
  return (
    <g transform={t}>
      <rect width="64" height="44" rx="3" fill="#16304D" stroke="rgba(247,245,238,0.4)" />
      <path d="M0 15 h64 M0 30 h64 M21 0 v44 M42 0 v44" stroke="rgba(247,245,238,0.28)" />
    </g>
  );
}

function BarsTile({ t }: { t: string }) {
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

function DbTile({ t }: { t: string }) {
  return (
    <g transform={t}>
      <path d="M0 8 v34 a26 8 0 0 0 52 0 v-34" fill="#16304D" stroke="rgba(247,245,238,0.4)" />
      <ellipse cx="26" cy="8" rx="26" ry="8" fill="#1B3A5C" stroke="rgba(247,245,238,0.4)" />
    </g>
  );
}

function VendorTile({ t }: { t: string }) {
  return (
    <g transform={t}>
      <rect width="90" height="56" rx="4" fill="#1B3A5C" stroke="rgba(247,245,238,0.5)" strokeWidth="1.5" />
      <path d="M12 18 h50 M12 32 h34" stroke="rgba(247,245,238,0.4)" strokeWidth="3" />
      <rect x="70" y="38" width="12" height="10" fill="rgba(247,245,238,0.2)" />
    </g>
  );
}

function ScrapTile({ t }: { t: string }) {
  return (
    <g transform={t}>
      <rect width="54" height="36" rx="3" fill="#16304D" stroke="rgba(247,245,238,0.35)" />
      <path d="M10 14 h34" stroke="rgba(247,245,238,0.3)" strokeWidth="2" />
    </g>
  );
}

/* ---------- The film stage: one SVG, six fixed frames toggled by [data-beat] ---------- */

function AssemblySvg() {
  return (
    <svg
      aria-hidden="true"
      className="h-auto w-full"
      viewBox="36 18 660 612"
      fill="none"
    >
      <defs>
        <radialGradient id="sf-seat-g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FACC15" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sf-core-g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FACC15" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sf-seat6-g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FACC15" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sf-core6-g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FACC15" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ===== Beat 01 — Fragile Chaos ===== */}
      <g className="sf-chaos">
        <g stroke="rgba(247,245,238,0.22)" strokeWidth="1.2">
          <path d="M112 92 C 300 180, 480 260, 622 402" />
          <path d="M612 82 C 460 220, 300 300, 158 372" />
          <path d="M282 72 C 360 260, 420 380, 448 548" />
          <path d="M122 512 C 300 420, 520 320, 662 222" />
          <path d="M92 242 C 260 300, 420 260, 548 282" />
          <path d="M462 102 C 380 240, 340 320, 328 382" />
          <path d="M232 202 C 340 300, 430 360, 496 412" />
          <path d="M268 542 C 360 440, 420 300, 462 152" />
          <path d="M392 222 C 300 380, 200 460, 124 522" />
          <path d="M392 222 C 480 160, 560 110, 618 88" />
          <path d="M622 542 C 480 480, 320 300, 232 222" />
          <path d="M162 372 C 300 360, 460 300, 546 288" />
        </g>
        <g stroke="rgba(247,245,238,0.30)" strokeWidth="1.2" strokeDasharray="4 6">
          <path d="M112 112 C 200 170, 260 220, 306 278" />
          <path d="M652 222 C 560 260, 500 300, 462 338" />
          <path d="M262 552 C 300 500, 330 470, 352 442" />
        </g>
        {/* fracture hairlines: porcelain jag + gold shard (not alert-red) */}
        <g strokeLinecap="round">
          <g stroke="rgba(247,245,238,0.55)" strokeWidth="1.5">
            <path d="M296 262 l14 8 -6 12 16 9 -7 13" />
            <path d="M448 328 l-13 9 7 11 -15 10 6 12" />
            <path d="M236 452 l15 6 -5 12 14 8" />
          </g>
          <g stroke="#FACC15" strokeWidth="2" opacity="0.85">
            <path d="M304 274 l10 6" />
            <path d="M441 349 l-9 6" />
            <path d="M245 464 l9 5" />
          </g>
        </g>
        <GridTile t="translate(80 70) rotate(-8)" />
        <GridTile t="translate(196 176) rotate(-12)" />
        <GridTile t="translate(560 44) rotate(9)" />
        <GridTile t="translate(438 378) rotate(-10)" />
        <GridTile t="translate(392 522) rotate(8)" />
        <BarsTile t="translate(408 62) rotate(-6)" />
        <BarsTile t="translate(496 240) rotate(-9)" />
        <BarsTile t="translate(64 486) rotate(10)" />
        <DbTile t="translate(612 186) rotate(-5)" />
        <DbTile t="translate(596 366) rotate(7)" />
        <VendorTile t="translate(226 34) rotate(5)" />
        <VendorTile t="translate(318 178) rotate(8)" />
        <VendorTile t="translate(262 342) rotate(12)" />
        <VendorTile t="translate(206 500) rotate(-6)" />
        <VendorTile t="translate(586 500) rotate(-11)" />
        <ScrapTile t="translate(52 210) rotate(6)" />
        <ScrapTile t="translate(96 336) rotate(-7)" />
        <ScrapTile t="translate(352 428) rotate(-4)" />
      </g>

      {/* ===== Beat 02 — surviving remnants, pushed to the edges ===== */}
      <g className="sf-remnants" opacity="0.32">
        <GridTile t="translate(58 72) rotate(-8)" />
        <VendorTile t="translate(598 64) rotate(9)" />
        <DbTile t="translate(618 316) rotate(-5)" />
        <BarsTile t="translate(56 540) rotate(10)" />
        <GridTile t="translate(600 548) rotate(-6)" />
        <g stroke="rgba(247,245,238,0.22)" strokeWidth="1.2" strokeDasharray="4 6">
          <path d="M120 100 C 160 140, 180 170, 196 200" />
          <path d="M628 350 C 600 400, 580 440, 566 480" />
        </g>
      </g>

      {/* ===== Beat 02: ingest buses — geometry only; BeatPanel owns the words ===== */}
      <g className="sf-schema2">
        <g stroke="rgba(247,245,238,0.22)" strokeWidth="1" strokeDasharray="3 5">
          <path d="M100 280 H346" />
          <path d="M100 340 H346" />
          <path d="M100 400 H346" />
          <path d="M620 280 H374" />
          <path d="M620 340 H374" />
          <path d="M620 400 H374" />
        </g>
        {/* Source endpoints — unmarked nodes, not acronym badges */}
        <g fill="#16304D" stroke="rgba(247,245,238,0.45)" strokeWidth="1.2">
          <circle cx="92" cy="280" r="5" />
          <circle cx="92" cy="340" r="5" />
          <circle cx="92" cy="400" r="5" />
          <circle cx="628" cy="280" r="5" />
          <circle cx="628" cy="340" r="5" />
          <circle cx="628" cy="400" r="5" />
        </g>
      </g>

      {/* ===== Dual-rail spine (beats 02–05) ===== */}
      <g className="sf-spine">
        <path d="M346 150 v320 M374 150 v320" stroke="rgba(247,245,238,0.9)" strokeWidth="3" />
        <path d="M346 150 h28" stroke="rgba(247,245,238,0.9)" strokeWidth="3" />
        <g stroke="rgba(247,245,238,0.35)" strokeWidth="1.5">
          <path d="M346 178 h28 M346 218 h28 M346 258 h28" />
        </g>
      </g>

      {/* ===== Data building blocks — the core assembling between the rails (beats 02–05) ===== */}
      <g className="sf-blocks">
        {[296, 330, 364, 398, 432].map((y) => (
          <g key={y}>
            <rect x="350.5" y={y} width="19" height="26" rx="2" fill="#FACC15" opacity="0.9" />
            <path d={`M354 ${y + 9} h12 M354 ${y + 17} h12`} stroke="#142840" strokeWidth="1.5" opacity="0.55" />
          </g>
        ))}
      </g>

      {/* inbound data chips — beat 02 frame only */}
      <g className="sf-chips2">
        <g stroke="rgba(247,245,238,0.4)" strokeWidth="1.2">
          <path d="M108 280 H346" />
          <path d="M612 320 H374" />
          <path d="M108 360 H346" />
          <path d="M612 400 H374" />
          <path d="M108 440 H346" />
        </g>
        {/* Ingest stream arrowheads */}
        <g stroke="#FACC15" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M336 276 l6 4 -6 4" />
          <path d="M384 316 l-6 4 6 4" />
          <path d="M336 356 l6 4 -6 4" />
          <path d="M384 396 l-6 4 6 4" />
          <path d="M336 436 l6 4 -6 4" />
        </g>
        <g fill="#FACC15" opacity="0.95">
          <rect x="210" y="274" width="26" height="12" rx="2" />
          <rect x="480" y="314" width="26" height="12" rx="2" />
          <rect x="230" y="354" width="26" height="12" rx="2" />
          <rect x="460" y="394" width="26" height="12" rx="2" />
          <rect x="200" y="434" width="26" height="12" rx="2" />
        </g>
        <g fill="#142840" fontSize="7.5" fontWeight="800" letterSpacing="0.08em" style={{ fontFamily: "var(--font-brand)" }}>
          <text x="223" y="283" textAnchor="middle">CDM</text>
          <text x="493" y="323" textAnchor="middle">TXN</text>
          <text x="243" y="363" textAnchor="middle">MST</text>
          <text x="473" y="403" textAnchor="middle">REF</text>
          <text x="213" y="443" textAnchor="middle">LOG</text>
        </g>
      </g>

      {/* snap streaks & seating guide jig — beat 02 frame only */}
      <g className="sf-seat2">
        <g stroke="rgba(247,245,238,0.28)" strokeWidth="2" strokeLinecap="round">
          <path d="M346 96 v26" />
          <path d="M374 82 v32" />
          <path d="M360 108 v20" />
        </g>
        <path d="M334 484 l12 -10 M386 484 l-12 -10" stroke="#FACC15" strokeWidth="2" />
      </g>

      {/* gold seat foundation: the spine's structural dock */}
      <g className="sf-seat">
        <circle className="sf-seat-glow" cx="360" cy="474" r="52" fill="url(#sf-seat-g)" />
        <path d="M310 474 h100" stroke="#FACC15" strokeWidth="3.5" strokeLinecap="round" />
        <g stroke="rgba(250,204,21,0.6)" strokeWidth="1.5">
          <path d="M320 480 h80 M330 486 h60" />
        </g>
      </g>

      {/* ===== Beehive — people docked to the core (beats 03–05) ===== */}
      <g className="sf-hive3">
        <g stroke="#FACC15" strokeWidth="1.5" strokeOpacity="0.8">
          <path d="M311.4 280 H 346" />
          <path d="M311.4 340 H 346" />
          <path d="M408.6 280 H 374" />
          <path d="M408.6 340 H 374" />
        </g>

        <g stroke="rgba(247,245,238,0.3)" strokeWidth="1.2" strokeDasharray="3 4">
          <path d="M260 250 C 240 300, 240 340, 260 380" fill="none" />
          <path d="M460 250 C 480 300, 480 340, 460 380" fill="none" />
        </g>

        <g fill="rgba(27,58,92,0.85)" stroke="rgba(247,245,238,0.7)" strokeWidth="1.5">
          <polygon points="328.7,260 346,270 346,290 328.7,300 311.4,290 311.4,270" />
          <polygon points="328.7,320 346,330 346,350 328.7,360 311.4,350 311.4,330" />
          <polygon points="311.4,230 328.7,240 328.7,260 311.4,270 294.1,260 294.1,240" />
          <polygon points="311.4,290 328.7,300 328.7,320 311.4,330 294.1,320 294.1,300" />
          <polygon points="311.4,350 328.7,360 328.7,380 311.4,390 294.1,380 294.1,360" />
          <polygon points="391.3,260 374,270 374,290 391.3,300 408.6,290 408.6,270" />
          <polygon points="391.3,320 374,330 374,350 391.3,360 408.6,350 408.6,330" />
          <polygon points="408.6,230 391.3,240 391.3,260 408.6,270 425.9,260 425.9,240" />
          <polygon points="408.6,290 391.3,300 391.3,320 408.6,330 425.9,320 425.9,300" />
          <polygon points="408.6,350 391.3,360 391.3,380 408.6,390 425.9,380 425.9,360" />
        </g>

        {/* Short role marks inside hexes — not workflow essay labels */}
        <g fill="rgba(247,245,238,0.9)" fontSize="8" fontWeight="800" letterSpacing="0.08em" style={{ fontFamily: "var(--font-brand)" }}>
          <text x="311.4" y="253" textAnchor="middle">OPS</text>
          <text x="311.4" y="313" textAnchor="middle">FIN</text>
          <text x="311.4" y="373" textAnchor="middle">SCM</text>
          <text x="408.6" y="253" textAnchor="middle">REV</text>
          <text x="408.6" y="313" textAnchor="middle">SVC</text>
          <text x="408.6" y="373" textAnchor="middle">EXEC</text>
        </g>
      </g>

      {/* ===== PM control canopy (beats 04–05) — three pods only ===== */}
      <g className="sf-rail4">
        <rect x="130" y="68" width="460" height="44" rx="6" fill="#142840" stroke="rgba(247,245,238,0.85)" strokeWidth="2" />
        <path d="M130 82 H590" stroke="rgba(250,204,21,0.6)" strokeWidth="1.5" />
        <g stroke="rgba(247,245,238,0.4)" strokeWidth="1.2">
          <path d="M180 68 v6 M230 68 v6 M280 68 v6 M360 68 v6 M440 68 v6 M490 68 v6 M540 68 v6" />
        </g>
        <g stroke="rgba(247,245,238,0.3)" strokeWidth="1">
          <line x1="270" y1="82" x2="270" y2="112" />
          <line x1="450" y1="82" x2="450" y2="112" />
        </g>
        <circle cx="152" cy="97" r="3.5" fill="#FACC15" />
        <circle cx="288" cy="97" r="3.5" fill="#FACC15" />
        <circle cx="468" cy="97" r="3.5" fill="#FACC15" />
        <g fill="rgba(247,245,238,0.95)" fontSize="9" fontWeight="700" letterSpacing="0.14em" style={{ fontFamily: "var(--font-brand)" }}>
          <text x="164" y="100">OWNERSHIP</text>
          <text x="300" y="100">EXECUTION</text>
          <text x="480" y="100">OBSERVABILITY</text>
        </g>
        <path d="M346 112 v28 M374 112 v28" stroke="#FACC15" strokeWidth="2" />
        {/* Flank rails — structure only, no probe essay */}
        <g stroke="rgba(250,204,21,0.35)" strokeWidth="1.5" strokeDasharray="4 4">
          <path d="M144 112 V 460" />
          <path d="M576 112 V 460" />
        </g>
        <g fill="#142840" stroke="#FACC15" strokeWidth="1.5">
          <circle cx="144" cy="310" r="4" />
          <circle cx="576" cy="310" r="4" />
        </g>
      </g>

      {/* ===== Adoption locks (beat 05) — mechanical plates, short tags ===== */}
      <g className="sf-checks5">
        {(
          [
            { y: 248, tag: "TRAIN" },
            { y: 330, tag: "SOP" },
            { y: 412, tag: "UAT" },
          ] as const
        ).map(({ y, tag }) => (
          <g key={y}>
            <path d={`M294.1 ${y} H 326`} stroke="#FACC15" strokeWidth="1.8" strokeDasharray="2 3" />
            <circle cx="294.1" cy={y} r="3" fill="#FACC15" />
            <rect x="326" y={y - 15} width="118" height="30" rx="4" fill="#0C1A2C" stroke="#FACC15" strokeWidth="1.8" />
            <path d={`M330 ${y} H 438`} stroke="#FACC15" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="448" cy={y} r="14" fill="#142840" stroke="#FACC15" strokeWidth="2.2" />
            <path
              d={`M441.5 ${y} l4.5 5 9.5 -10`}
              fill="none"
              stroke="#F7F5EE"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="470" y={y - 10} width="72" height="20" rx="3" fill="#142840" stroke="rgba(247,245,238,0.35)" strokeWidth="1" />
            <text
              x="506"
              y={y + 4}
              textAnchor="middle"
              fill="#FACC15"
              fontSize="9"
              fontWeight="800"
              letterSpacing="0.14em"
              style={{ fontFamily: "var(--font-brand)" }}
            >
              {tag}
            </text>
          </g>
        ))}
      </g>

      {/* ===== Beat 06 — The Living Asset (default end-state) ===== */}
      <g className="sf-asset">
        <circle cx="360" cy="310" r="240" stroke="rgba(247,245,238,0.1)" strokeDasharray="2 9" />
        <g stroke="rgba(247,245,238,0.3)" strokeWidth="1.5">
          <path d="M360 66 v8" />
          <path d="M596 310 h8" />
          <path d="M116 310 h8" />
        </g>
        <g stroke="rgba(247,245,238,0.35)" strokeWidth="1.5">
          <path d="M120 110 h22 M120 110 v22" />
          <path d="M600 110 h-22 M600 110 v22" />
          <path d="M120 528 h22 M120 528 v-22" />
          <path d="M600 528 h-22 M600 528 v-22" />
        </g>
        <text
          x="152"
          y="121"
          fill="rgba(247,245,238,0.45)"
          fontSize="10"
          letterSpacing="0.22em"
          style={{ fontFamily: "var(--font-brand)" }}
        >
          OPERATING MAP
        </text>
        <text
          x="588"
          y="547"
          textAnchor="end"
          fill="rgba(247,245,238,0.35)"
          fontSize="10"
          fontStyle="italic"
          style={{ fontFamily: "var(--font-body)" }}
        >
          a living asset, owned
        </text>
        {/* spokes first; nodes and core overlay (six-constellations.svg canon) */}
        <g stroke="rgba(247,245,238,0.3)" strokeWidth="1.4">
          <path d="M360 310 L 360 110" />
          <path d="M360 310 L 533.2 210" />
          <path d="M360 310 L 533.2 410" />
          <path d="M360 310 L 360 510" />
          <path d="M360 310 L 186.8 410" />
          <path d="M360 310 L 186.8 210" />
        </g>
        {/* weight-band arcs, gap facing the core */}
        <g stroke="#FACC15" strokeWidth="3.5" strokeOpacity="0.55" fill="none">
          <path d="M 331.5 159.4 A 57 57 0 1 1 388.5 159.4" />
          <path d="M 476.2 210 A 57 57 0 1 1 504.7 259.4" />
          <path d="M 504.7 360.6 A 57 57 0 1 1 476.2 410" />
          <path d="M 388.5 460.6 A 57 57 0 1 1 331.5 460.6" />
          <path d="M 243.8 410 A 57 57 0 1 1 215.3 360.6" />
          <path d="M 215.3 259.4 A 57 57 0 1 1 243.8 210" />
        </g>
        {/* six constellations + canon decoders (six-constellations.svg) */}
        <g textAnchor="middle" style={{ fontFamily: "var(--font-brand)" }}>
          {(
            [
              { cx: 360, cy: 110, code: "D2R", sub: "Data to Reporting" },
              { cx: 533.2, cy: 210, code: "O2C", sub: "Order to Cash" },
              { cx: 533.2, cy: 410, code: "P2M", sub: "Plan to Manufacture" },
              { cx: 360, cy: 510, code: "MDM", sub: "Master Data" },
              { cx: 186.8, cy: 410, code: "P2P", sub: "Procure to Pay" },
              { cx: 186.8, cy: 210, code: "S2S", sub: "Systems to Support" },
            ] as const
          ).map((n) => (
            <g key={n.code}>
              <circle
                cx={n.cx}
                cy={n.cy}
                r="52"
                fill="#142840"
                stroke="rgba(247,245,238,0.8)"
                strokeWidth="2"
              />
              <text
                className="sf-constellation-label"
                x={n.cx}
                y={n.cy + 6}
                fill="rgba(247,245,238,0.95)"
                fontWeight="700"
                letterSpacing="0.14em"
              >
                {n.code}
              </text>
              <text
                className="sf-constellation-sub"
                x={n.cx}
                y={n.cy + 70}
                fill="rgba(247,245,238,0.62)"
                fontWeight="600"
              >
                {n.sub}
              </text>
            </g>
          ))}
        </g>
        {/* gold Data Core — the Common Data Model built out from beat 02 */}
        <circle cx="360" cy="310" r="76" fill="url(#sf-core6-g)" />
        <circle cx="360" cy="310" r="58" fill="#FACC15" />
        <g textAnchor="middle" style={{ fontFamily: "var(--font-brand)" }}>
          <text
            className="sf-core-label"
            x="360"
            y="306"
            fill="#142840"
            fontWeight="800"
            letterSpacing="0.12em"
          >
            DATA CORE
          </text>
          <text className="sf-core-sub" x="360" y="324" fill="rgba(20,40,64,0.85)">
            Common Data Model
          </text>
        </g>
        <path d="M330 312 h60" stroke="rgba(20,40,64,0.4)" strokeWidth="1" />
      </g>
    </svg>
  );
}

function BeatPanel({ beat }: { beat: number }) {
  const b = BEATS[Math.max(0, Math.min(BEATS.length, beat) - 1)] ?? BEATS[0];
  return (
    <div
      className="beat-panel mt-7 border-t border-porcelain/20 pt-5"
      aria-live="polite"
    >
      <p className="font-brand text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
        {b.n} / 06 · {b.chip}
      </p>
      <h2 className="mt-2 font-brand text-[clamp(22px,2.2vw,28px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-porcelain">
        {b.label}
      </h2>
      <p className="mt-2.5 max-w-[42ch] text-[15px] leading-[1.5] text-porcelain/80 md:text-[15.5px] md:leading-[1.55]">
        {b.line}
      </p>
    </div>
  );
}

function HeroCopy({
  onSeeMap,
  withRise = true,
}: {
  onSeeMap: () => void;
  withRise?: boolean;
}) {
  const rise = (n: number) =>
    withRise
      ? {
          className: "hero-rise ",
          style: { "--rise": n } as React.CSSProperties,
        }
      : { className: "", style: undefined };

  /* Header owns the wordmark — no inline brand stutter under SiteHeader. */
  const r0 = rise(0);
  const r1 = rise(1);
  const r2 = rise(2);
  const r3 = rise(3);

  return (
    <>
      <p
        className={`${r0.className}font-brand text-[10.5px] font-semibold uppercase tracking-[0.22em] text-gold md:text-[11px] md:tracking-[0.24em]`}
        style={r0.style}
      >
        <span className="md:hidden">
          Transformational CIO · agentic AI in production
        </span>
        <span className="hidden md:inline">
          Transformational CIO · $100M–$1B operators · agentic AI in production
        </span>
      </p>
      <h1
        className={`${r1.className}mt-3 max-w-[16ch] font-brand text-[clamp(30px,3.4vw,48px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-porcelain`}
        style={r1.style}
      >
        Unowned data kills ERP. It kills agentic AI faster.
      </h1>
      <p
        className={`${r2.className}hero-dek mt-3 max-w-[44ch] text-[15px] leading-[1.5] text-porcelain/80 md:mt-3.5 md:text-[15.5px] md:leading-[1.55]`}
        style={r2.style}
      >
        Programs fail below the software line, in disparate systems nobody
        owns. The fix assembles on this page: a sovereign data core, seated
        inside the business, left as a living asset you own.
      </p>
      <div
        className={`${r3.className}mt-4 flex flex-col gap-2.5 sm:flex-row md:mt-5`}
        style={r3.style}
      >
        <Link
          href="/contact/"
          className="group inline-flex items-center justify-center gap-2 rounded-[3px] bg-gold px-6 py-3.5 font-brand text-[12px] font-bold uppercase tracking-[0.15em] text-navy transition-colors hover:bg-[#FFD84D]"
        >
          Start a conversation
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
        <button
          type="button"
          onClick={onSeeMap}
          className="inline-flex items-center justify-center rounded-[3px] border border-porcelain/30 px-6 py-3.5 font-brand text-[12px] font-bold uppercase tracking-[0.15em] text-porcelain transition-colors hover:border-gold hover:text-gold"
        >
          See the operating map
        </button>
      </div>
    </>
  );
}

export default function SpineFilm() {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);
  const [beat, setBeat] = useState(1);
  const [running, setRunning] = useState(false);
  const runTimer = useRef<number | null>(null);
  /* Start gated — must be true before first paint's scroll/restore can drive beats. */
  const suspend = useRef(true);
  const cancelRef = useRef<() => void>(() => {});

  const applyBeat = (n: number) => {
    if (rootRef.current) rootRef.current.dataset.beat = String(n);
    setBeat(n);
  };

  const headerH = () => {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue("--site-header-h")
      .trim();
    const n = Number.parseFloat(raw);
    return Number.isFinite(n) ? n : 85;
  };

  /** Scroll distance while the film stays pinned (track minus sticky stage). */
  const pinSpan = () => {
    const track = trackRef.current;
    const root = rootRef.current;
    if (!track || !root) return 0;
    return Math.max(0, track.offsetHeight - root.offsetHeight);
  };

  const beatTop = (targetBeat: number): number | null => {
    const track = trackRef.current;
    if (!track) return null;
    const span = pinSpan();
    if (span <= 0) return null;
    return (
      track.getBoundingClientRect().top +
      window.scrollY +
      progressForBeat(targetBeat) * span
    );
  };

  /* Instant scroll sync, verified — retries until the page position actually
     agrees with the beat (invisible while the film is pinned), then settles. */
  const forceScroll = (targetBeat: number, onSettled?: () => void) => {
    let tries = 0;
    const attempt = () => {
      const target = beatTop(targetBeat);
      if (target === null || Math.abs(window.scrollY - target) < 6 || tries >= 100) {
        onSettled?.();
        return;
      }
      tries += 1;
      window.scrollTo(0, target);
      window.setTimeout(attempt, 80);
    };
    attempt();
  };

  /* resync=true (natural finish): pin scroll to the final beat before handing
     control back, so the next user scroll continues from the end frame.
     resync=false (user interrupt): release immediately — never fight the hand. */
  const stopRun = (resync: boolean = true) => {
    if (runTimer.current !== null) {
      window.clearInterval(runTimer.current);
      runTimer.current = null;
    }
    window.removeEventListener("wheel", cancelRef.current);
    window.removeEventListener("touchstart", cancelRef.current);
    setRunning(false);
    if (!resync) {
      suspend.current = false;
      return;
    }
    const b = Number(rootRef.current?.dataset.beat ?? "1");
    forceScroll(b, () => {
      suspend.current = false;
    });
  };

  /* Timed run: always starts from beat 1, ~3s per beat, holds on 6.
     Scroll driving is suspended for the duration; any user wheel/touch cancels. */
  const startFilmRun = () => {
    if (runTimer.current !== null) return;
    suspend.current = true;
    setRunning(true);
    forceScroll(1);
    applyBeat(1);
    const cancel = () => stopRun(false);
    cancelRef.current = cancel;
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    let b = 1;
    runTimer.current = window.setInterval(() => {
      b += 1;
      if (b > 6) {
        stopRun(true);
        return;
      }
      applyBeat(b);
    }, 3000);
  };

  /* Footer RUN — toggle: start timed sequence, or stop if already playing. */
  const runFilm = () => {
    if (runTimer.current !== null) {
      stopRun(false);
      return;
    }
    startFilmRun();
  };

  const scrollToBeat = (targetBeat: number) => {
    if (runTimer.current !== null) stopRun(false);
    /* Beat rail click is explicit intent — unlock scroll-driving and hard-set. */
    suspend.current = false;
    applyBeat(targetBeat);
    const top = beatTop(targetBeat);
    if (top === null) return;
    window.scrollTo({ top, behavior: "smooth" });
  };

  /* Same timed beat sequence as footer RUN — never smooth-scroll race to 06. */
  const scrollToMap = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      document
        .getElementById("operating-map-m")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    startFilmRun();
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      setBeat(6);
      return;
    }
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;

    /* Pin load at beat 01. Browser scroll restoration + scroll-smooth was
       racing 1→6 on refresh; do not follow scroll until a real wheel/touch. */
    const prevRestoration = history.scrollRestoration;
    try {
      history.scrollRestoration = "manual";
    } catch {
      /* ignore */
    }
    window.scrollTo(0, 0);
    applyBeat(1);
    suspend.current = true;

    let raf = 0;
    const update = () => {
      raf = 0;
      if (suspend.current) return;
      const r = track.getBoundingClientRect();
      const span = pinSpan();
      if (span <= 0) return;
      /* Track sits under the sticky header; progress starts when r.top hits headerH. */
      const p = Math.min(1, Math.max(0, (headerH() - r.top) / span));
      const next = beatFor(p);
      root.dataset.beat = String(next);
      setBeat((prev) => (prev === next ? prev : next));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    let released = false;
    const teardownGate = () => {
      window.removeEventListener("wheel", releaseToUser);
      window.removeEventListener("touchstart", releaseToUser);
    };
    /* Wheel / touch only — pointerdown/keydown were releasing the gate on
       focus, extensions, and refresh chrome, which re-enabled the race. */
    const releaseToUser = () => {
      if (released) return;
      released = true;
      teardownGate();
      if (runTimer.current === null) {
        suspend.current = false;
        update();
      }
    };
    window.addEventListener("wheel", releaseToUser, { passive: true });
    window.addEventListener("touchstart", releaseToUser, { passive: true });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      teardownGate();
      if (raf) cancelAnimationFrame(raf);
      if (runTimer.current !== null) {
        window.clearInterval(runTimer.current);
        runTimer.current = null;
      }
      window.removeEventListener("wheel", cancelRef.current);
      window.removeEventListener("touchstart", cancelRef.current);
      try {
        history.scrollRestoration = prevRestoration;
      } catch {
        /* ignore */
      }
    };
  }, [reduced]);

  if (reduced) {
    return (
      <section
        id="operating-map"
        className="grain relative isolate overflow-hidden bg-[linear-gradient(168deg,#132C48_0%,#142840_34%,#0C1A2C_100%)] text-porcelain"
      >
        <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-14">
          <HeroCopy onSeeMap={() => {}} withRise={false} />
          <div data-beat="6" className="film-fixed mx-auto mt-10 max-w-[760px]">
            <AssemblySvg />
          </div>
          <ol className="mx-auto mt-8 grid max-w-[760px] gap-4 sm:grid-cols-2">
            {BEATS.map((b) => (
              <li
                key={b.n}
                className="text-[14.5px] leading-[1.5] text-porcelain/75"
              >
                <span className="font-brand text-[11px] font-bold tracking-[0.18em] text-gold">
                  {b.n} · {b.chip}
                </span>
                <span className="mt-1 block font-semibold text-porcelain">
                  {b.label}
                </span>
                <span className="mt-1 block">{b.line}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Desktop pinned film — stage + bottom chrome (beats never clip) */}
      <div
        ref={trackRef}
        className="relative hidden bg-[#0C1A2C] md:block"
        style={{ height: "480svh" }}
      >
        <div
          ref={rootRef}
          data-beat="1"
          data-film-active="true"
          className="film-root grain sticky top-[var(--site-header-h)] isolate flex h-[calc(100svh-var(--site-header-h))] flex-col overflow-hidden bg-[linear-gradient(168deg,#132C48_0%,#142840_34%,#0C1A2C_100%)] text-porcelain"
        >
          <div className="mx-auto grid min-h-0 w-full max-w-[1320px] flex-1 grid-cols-[minmax(320px,40%)_1fr] items-start gap-6 overflow-hidden px-6 pb-2 pt-5 lg:gap-10 lg:pt-6">
            <div className="film-story min-h-0 overflow-y-auto overscroll-contain pr-1">
              <HeroCopy onSeeMap={scrollToMap} />
              <BeatPanel beat={beat} />
            </div>
            <div className="film-stage h-full min-h-0 self-stretch">
              <AssemblySvg />
            </div>
          </div>

          {/* Cinema chrome — controls only; story lives in BeatPanel */}
          <div
            className="film-chrome shrink-0 border-t border-porcelain/15 bg-[#0C1A2C]/75"
            role="group"
            aria-label="Film beats"
          >
            <div className="mx-auto flex max-w-[1320px] flex-wrap items-center gap-2 px-6 py-2.5">
              <button
                type="button"
                onClick={runFilm}
                aria-pressed={running}
                className={`film-run-btn rounded-[3px] px-3 py-1.5 font-brand text-[11px] font-bold tracking-[0.14em] transition-colors ${
                  running
                    ? "bg-gold text-navy"
                    : "border border-gold/60 text-gold hover:border-gold hover:bg-gold/10"
                }`}
              >
                {running ? "■ STOP" : "▶ RUN"}
              </button>
              {BEATS.map((b, i) => {
                const n = i + 1;
                const active = beat === n;
                return (
                  <button
                    key={b.n}
                    type="button"
                    onClick={() => scrollToBeat(n)}
                    aria-pressed={active}
                    aria-label={`${b.n} ${b.label}`}
                    title={b.label}
                    className={`rounded-[3px] px-2.5 py-1.5 font-brand text-[11px] font-bold tracking-[0.12em] transition-colors ${
                      active
                        ? "bg-gold text-navy"
                        : "border border-porcelain/25 text-porcelain/70 hover:border-gold hover:text-gold"
                    }`}
                  >
                    <span className="text-[10px] opacity-80">{b.n}</span>{" "}
                    {b.chip}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile stacked — frames 01 / 03 / 05 / 06; caption leads each frame */}
      <section
        data-film-active="true"
        className="grain relative isolate overflow-hidden bg-[linear-gradient(168deg,#132C48_0%,#142840_34%,#0C1A2C_100%)] text-porcelain md:hidden"
      >
        <div className="mx-auto max-w-content px-6 pb-20 pt-8">
          <HeroCopy onSeeMap={scrollToMap} />
          <div className="mt-12 flex flex-col gap-14 border-t border-porcelain/15 pt-10">
            {MOBILE_BEATS.map((b) => (
              <figure
                key={b.beat}
                id={b.beat === 6 ? "operating-map-m" : undefined}
                className="m-0 scroll-mt-24 last:pb-2"
              >
                <figcaption>
                  <p className="font-brand text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                    {String(b.beat).padStart(2, "0")} / 06 · {b.label}
                  </p>
                  <p className="mt-1.5 text-[15px] leading-[1.55] text-porcelain/75">
                    {b.line}
                  </p>
                </figcaption>
                <div data-beat={b.beat} className="film-fixed mt-4">
                  <AssemblySvg />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
