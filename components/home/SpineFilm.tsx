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
    line: "Disparate systems, vendor gatekeepers, half-finished implementations, undocumented customizations, duct tape — and people doing heroic work to make it all hold. No owned common data model. That is the mess.",
  },
  {
    n: "02",
    chip: "Data",
    label: "Data core",
    line: "Noise comes down as the sovereign data core seats. One owned model every vendor writes to — and a control layer the close and the audit can trust.",
  },
  {
    n: "03",
    chip: "People",
    label: "People — functional groups",
    line: "Workflows are for the people who run them. Groups dock onto the spine by how work actually moves — not the org chart, not the vendor module. Happy systems, happy people.",
  },
  {
    n: "04",
    chip: "Control",
    label: "Project management — control center",
    line: "Most transformations rent project management from the partner. The business has to own it. Roadmap and timeline above; agile tasks and stories at the execution level — visibility for the people doing the work and the executives steering it. Stakeholders, milestones, deliverables — one control rail.",
  },
  {
    n: "05",
    chip: "Adopt",
    label: "Adoption locks",
    line: "Go-live is not adoption. The business owns an ordered path: order, test, train, SOP, UAT, go-live — then continuous improvement. Without those locks, the system is installed and people stay the duct tape.",
  },
  {
    n: "06",
    chip: "Asset",
    label: "Living asset",
    line: "A living asset is what the business keeps when the program ends — a sovereign data core with the six process constellations running around it. Owned, not rented: you can run it, extend it, and the CFO can defend it as capital — not another expense line.",
  },
];

const MOBILE_BEATS: Array<{ beat: number; label: string; line: string }> = [
  {
    beat: 1,
    label: "The mess",
    line: "Disparate systems, vendor gatekeepers, half-finished implementations, undocumented customizations, duct tape — and people doing heroic work to make it all hold. No owned common data model. That is the mess.",
  },
  {
    beat: 3,
    label: "Data core · People — functional groups",
    line: "The sovereign data core seats — one owned model with a control layer the close and audit can trust. Workflows are for the people who run them. Happy systems, happy people.",
  },
  {
    beat: 5,
    label: "Control center · Adoption locks",
    line: "Business-owned project control — then adoption: order, test, train, SOP, UAT, go-live, continuous improvement. Go-live is not adoption.",
  },
  {
    beat: 6,
    label: "Living asset",
    line: "What the business keeps when the program ends — sovereign data core, six constellations, owned not rented. Runnable, extendable, CFO-defensible as capital.",
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

/** Beat 3 hive / beat 4 PM board sit in a narrow strip of the full viewBox — crop so they fill the stage. */
const VIEWBOX_FULL = "36 18 660 612";
const VIEWBOX_PEOPLE = "168 88 384 450";
/** Spine-centered crops — same film language as 03, not dashboard panels */
const VIEWBOX_CONTROL = "100 50 520 500";
const VIEWBOX_ADOPT = "150 70 420 480";

function AssemblySvg({ frame = 0 }: { frame?: number }) {
  const viewBox =
    frame === 3
      ? VIEWBOX_PEOPLE
      : frame === 4
        ? VIEWBOX_CONTROL
        : frame === 5
          ? VIEWBOX_ADOPT
          : VIEWBOX_FULL;
  return (
    <svg
      aria-hidden="true"
      className="h-auto w-full"
      viewBox={viewBox}
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
            <rect
              x="349"
              y={y}
              width="22"
              height="28"
              rx="2.5"
              fill="#FACC15"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="1"
            />
            <path
              d={`M353.5 ${y + 10} h13 M353.5 ${y + 18} h13`}
              stroke="#142840"
              strokeWidth="1.6"
              opacity="0.55"
            />
          </g>
        ))}
      </g>

      {/* Beat 02 only — CDM destination pop (not an inbound chip) */}
      <g className="sf-core2">
        <circle cx="360" cy="364" r="78" fill="url(#sf-core-g)" opacity="0.9" />
        <text
          x="360"
          y="278"
          textAnchor="middle"
          fill="#FACC15"
          fontSize="9"
          fontWeight="800"
          letterSpacing="0.16em"
          style={{ fontFamily: "var(--font-brand)" }}
        >
          CDM
        </text>
      </g>

      {/* inbound data chips — beat 02 frame only · operator keys → owned core */}
      <g className="sf-chips2">
        <g stroke="rgba(247,245,238,0.45)" strokeWidth="1.35">
          <path d="M108 280 H346" />
          <path d="M612 320 H374" />
          <path d="M108 360 H346" />
          <path d="M612 400 H374" />
          <path d="M108 440 H346" />
        </g>
        {/* Ingest stream arrowheads */}
        <g stroke="#FACC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M336 276 l7 4 -7 4" />
          <path d="M384 316 l-7 4 7 4" />
          <path d="M336 356 l7 4 -7 4" />
          <path d="M384 396 l-7 4 7 4" />
          <path d="M336 436 l7 4 -7 4" />
        </g>
        {(
          [
            { x: 198, y: 272, label: "CUST#" },
            { x: 468, y: 312, label: "VEND#" },
            { x: 198, y: 352, label: "ITEM#" },
            { x: 468, y: 392, label: "ERP" },
            { x: 198, y: 432, label: "REF" },
          ] as const
        ).map((chip) => (
          <g key={chip.label}>
            <rect
              x={chip.x}
              y={chip.y}
              width="48"
              height="16"
              rx="3"
              fill="#FACC15"
              stroke="rgba(20,40,64,0.25)"
              strokeWidth="1"
            />
            <text
              x={chip.x + 24}
              y={chip.y + 11.5}
              textAnchor="middle"
              fill="#142840"
              fontSize="8"
              fontWeight="800"
              letterSpacing="0.06em"
              style={{ fontFamily: "var(--font-brand)" }}
            >
              {chip.label}
            </text>
          </g>
        ))}
      </g>

      {/* snap streaks, seating jig, light security — beat 02 frame only */}
      <g className="sf-seat2">
        <g stroke="rgba(247,245,238,0.28)" strokeWidth="2" strokeLinecap="round">
          <path d="M346 96 v26" />
          <path d="M374 82 v32" />
          <path d="M360 108 v20" />
        </g>
        <path d="M334 484 l12 -10 M386 484 l-12 -10" stroke="#FACC15" strokeWidth="2" />
        {/* Governed at seat — security motif (full security beat lives on 04) */}
        <g transform="translate(348 488)">
          <rect
            x="0"
            y="8"
            width="24"
            height="18"
            rx="3"
            fill="#142840"
            stroke="#FACC15"
            strokeWidth="1.6"
          />
          <path
            d="M5 8 V5 a7 7 0 0 1 14 0 V8"
            fill="none"
            stroke="#FACC15"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="12" cy="16" r="2.2" fill="#FACC15" />
        </g>
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

        {/* System / group marks — align to beehive frame (ERP · WMS · CRM · PLM · MES · MDM) */}
        <g fill="rgba(247,245,238,0.9)" fontSize="8" fontWeight="800" letterSpacing="0.08em" style={{ fontFamily: "var(--font-brand)" }}>
          <text x="311.4" y="253" textAnchor="middle">ERP</text>
          <text x="311.4" y="313" textAnchor="middle">WMS</text>
          <text x="311.4" y="373" textAnchor="middle">CRM</text>
          <text x="408.6" y="253" textAnchor="middle">PLM</text>
          <text x="408.6" y="313" textAnchor="middle">MES</text>
          <text x="408.6" y="373" textAnchor="middle">MDM</text>
        </g>
      </g>

      {/* ===== Beat 04 — control rail over the spine (roadmap above, agile lanes beside) ===== */}
      <g className="sf-pm4">
        {/* Roadmap canopy — timeline, not a dashboard panel */}
        <rect
          x="120"
          y="72"
          width="480"
          height="52"
          rx="8"
          fill="none"
          stroke="rgba(247,245,238,0.85)"
          strokeWidth="2"
        />
        <path d="M120 90 H600" stroke="rgba(250,204,21,0.55)" strokeWidth="1.4" />
        <text
          x="360"
          y="88"
          textAnchor="middle"
          fill="rgba(247,245,238,0.55)"
          fontSize="8"
          fontWeight="700"
          letterSpacing="0.18em"
          style={{ fontFamily: "var(--font-brand)" }}
        >
          ROADMAP
        </text>
        {(
          [
            { x: 180, label: "KICKOFF" },
            { x: 300, label: "BUILD" },
            { x: 420, label: "UAT" },
            { x: 540, label: "GO-LIVE" },
          ] as const
        ).map((m) => (
          <g key={m.label}>
            <circle cx={m.x} cy="108" r="5" fill="#FACC15" />
            <text
              x={m.x}
              y="126"
              textAnchor="middle"
              fill="rgba(247,245,238,0.88)"
              fontSize="7.5"
              fontWeight="700"
              letterSpacing="0.1em"
              style={{ fontFamily: "var(--font-brand)" }}
            >
              {m.label}
            </text>
          </g>
        ))}
        <path d="M346 124 v26 M374 124 v26" stroke="#FACC15" strokeWidth="2" />

        {/* Open lanes — original glass-film language */}
        <rect
          x="118"
          y="168"
          width="168"
          height="300"
          rx="12"
          fill="none"
          stroke="rgba(247,245,238,0.75)"
          strokeWidth="2"
        />
        <rect
          x="434"
          y="168"
          width="168"
          height="300"
          rx="12"
          fill="none"
          stroke="rgba(247,245,238,0.75)"
          strokeWidth="2"
        />
        <path
          d="M286 318 H346 M374 318 H434"
          stroke="rgba(247,245,238,0.55)"
          strokeWidth="1.8"
        />

        <text
          x="202"
          y="192"
          textAnchor="middle"
          fill="rgba(247,245,238,0.55)"
          fontSize="8"
          fontWeight="700"
          letterSpacing="0.14em"
          style={{ fontFamily: "var(--font-brand)" }}
        >
          AGILE · STORIES
        </text>
        <text
          x="518"
          y="192"
          textAnchor="middle"
          fill="rgba(247,245,238,0.55)"
          fontSize="8"
          fontWeight="700"
          letterSpacing="0.14em"
          style={{ fontFamily: "var(--font-brand)" }}
        >
          STAKEHOLDERS
        </text>

        {/* Story / task chips — gold pills, not cards */}
        {(
          [
            { y: 220, label: "Item master" },
            { y: 258, label: "Integrations" },
            { y: 296, label: "Close path" },
            { y: 334, label: "Cutover run" },
            { y: 372, label: "Training pack" },
          ] as const
        ).map((chip) => (
          <g key={chip.label}>
            <rect
              x="138"
              y={chip.y}
              width="128"
              height="22"
              rx="11"
              fill="#142840"
              stroke="rgba(247,245,238,0.55)"
              strokeWidth="1.3"
            />
            <circle cx="152" cy={chip.y + 11} r="3" fill="#FACC15" />
            <text
              x="164"
              y={chip.y + 15}
              fill="rgba(247,245,238,0.92)"
              fontSize="10"
              fontWeight="600"
              style={{ fontFamily: "var(--font-brand)" }}
            >
              {chip.label}
            </text>
          </g>
        ))}

        {(
          [
            { y: 230, label: "SLT / Board" },
            { y: 278, label: "Finance · Ops" },
            { y: 326, label: "IT · PMO" },
            { y: 374, label: "Deliverables" },
          ] as const
        ).map((node) => (
          <g key={node.label}>
            <circle
              cx="468"
              cy={node.y + 8}
              r="5"
              fill="#142840"
              stroke="#FACC15"
              strokeWidth="1.6"
            />
            <text
              x="484"
              y={node.y + 12}
              fill="rgba(247,245,238,0.9)"
              fontSize="11"
              fontWeight="600"
              style={{ fontFamily: "var(--font-brand)" }}
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Exec / tasker visibility marks on the flanks */}
        <g stroke="rgba(250,204,21,0.4)" strokeWidth="1.5" strokeDasharray="4 5">
          <path d="M108 200 V 430" />
          <path d="M612 200 V 430" />
        </g>
        <circle cx="108" cy="240" r="4" fill="#FACC15" />
        <circle cx="108" cy="390" r="4" fill="#FACC15" />
        <circle cx="612" cy="240" r="4" fill="#FACC15" />
        <circle cx="612" cy="390" r="4" fill="#FACC15" />
        <text
          x="108"
          y="188"
          textAnchor="middle"
          fill="rgba(247,245,238,0.45)"
          fontSize="7"
          fontWeight="700"
          letterSpacing="0.12em"
          style={{ fontFamily: "var(--font-brand)" }}
        >
          TASKERS
        </text>
        <text
          x="612"
          y="188"
          textAnchor="middle"
          fill="rgba(247,245,238,0.45)"
          fontSize="7"
          fontWeight="700"
          letterSpacing="0.12em"
          style={{ fontFamily: "var(--font-brand)" }}
        >
          EXECS
        </text>
      </g>

      {/* ===== Beat 05 — adoption locks down the spine (mechanical, not a checklist) ===== */}
      <g className="sf-adopt5">
        {/* Soft orbital — film language, not a panel */}
        <circle
          cx="360"
          cy="310"
          r="210"
          fill="none"
          stroke="rgba(247,245,238,0.12)"
          strokeDasharray="3 10"
        />

        {(
          [
            { y: 168, tag: "ORDER" },
            { y: 218, tag: "TEST" },
            { y: 268, tag: "TRAIN" },
            { y: 318, tag: "SOP" },
            { y: 368, tag: "UAT" },
            { y: 418, tag: "GO-LIVE" },
            { y: 468, tag: "IMPROVE" },
          ] as const
        ).map((lock, i) => (
          <g key={lock.tag}>
            {/* collar through the spine */}
            <rect
              x="328"
              y={lock.y - 11}
              width="64"
              height="22"
              rx="11"
              fill="#0C1A2C"
              stroke="#FACC15"
              strokeWidth="1.8"
            />
            <path
              d={`M336 ${lock.y} H384`}
              stroke="#FACC15"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            {/* check pulse */}
            <circle
              cx="420"
              cy={lock.y}
              r="13"
              fill="#142840"
              stroke="#FACC15"
              strokeWidth="2"
            />
            <path
              d={`M414.5 ${lock.y} l4 4 8 -9`}
              fill="none"
              stroke="#F7F5EE"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              x="448"
              y={lock.y + 4}
              fill="#FACC15"
              fontSize="11"
              fontWeight="800"
              letterSpacing="0.14em"
              style={{ fontFamily: "var(--font-brand)" }}
            >
              {lock.tag}
            </text>
            {i < 6 && (
              <path
                d={`M360 ${lock.y + 14} V ${lock.y + 36}`}
                stroke="rgba(250,204,21,0.35)"
                strokeWidth="1.5"
              />
            )}
          </g>
        ))}

        {/* Continuous improvement loop at the seat */}
        <path
          d="M300 488 C 280 488, 280 448, 300 448"
          fill="none"
          stroke="#FACC15"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M296 443 l6 5 -6 5"
          fill="none"
          stroke="#FACC15"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="248"
          y="472"
          textAnchor="end"
          fill="rgba(247,245,238,0.5)"
          fontSize="8"
          fontWeight="700"
          letterSpacing="0.12em"
          style={{ fontFamily: "var(--font-brand)" }}
        >
          CI LOOP
        </text>
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
          Transformational CIO · $100M–$1B operators
        </span>
        <span className="hidden md:inline">
          Transformational CIO · $100M–$1B operators · systems you own
        </span>
      </p>
      <h1
        className={`${r1.className}mt-3 max-w-[22ch] font-brand text-[clamp(30px,3.4vw,48px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-porcelain`}
        style={r1.style}
      >
        Modernize the legacy stack while the business keeps running.
      </h1>
      <p
        className={`${r2.className}hero-dek mt-3 max-w-[48ch] text-[15px] leading-[1.5] text-porcelain/80 md:mt-3.5 md:text-[15.5px] md:leading-[1.55]`}
        style={r2.style}
      >
        The company common data model is the cornerstone: an owned data core
        that turns modernization into a living asset the business can run,
        govern, and extend.
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
            <AssemblySvg frame={6} />
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
              <AssemblySvg frame={beat} />
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
                  <AssemblySvg frame={b.beat} />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
