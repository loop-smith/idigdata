"use client";

import Script from "next/script";
import { useId, useMemo } from "react";
import { estateLabelPool, estateNodesDoc } from "@/lib/home/estateNodes";

/**
 * Home motion v1 (Capo brief 2026-08-10):
 * Gold DATA core · obsidian nodes · true 3D yaw.
 * Label pool + caption from /data/estate-nodes.json (shared SoT).
 */

const LABEL_POOL = estateLabelPool();
const NODE_COUNT = 16;
const SIZE = 420;
const CX = SIZE / 2;
const CY = SIZE / 2;
const RADIUS = 148;
const LABEL_Z = -0.12;

function fibSphere(count: number) {
  const out: { id: number; theta: number; phi: number }[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / Math.max(1, count - 1)) * 2;
    out.push({
      id: i,
      theta: golden * i,
      phi: Math.acos(Math.max(-1, Math.min(1, y))),
    });
  }
  return out;
}

function project(theta: number, phi: number, spin: number) {
  const x0 = Math.sin(phi) * Math.cos(theta);
  const y0 = Math.cos(phi);
  const z0 = Math.sin(phi) * Math.sin(theta);
  const cos = Math.cos(spin);
  const sin = Math.sin(spin);
  return {
    x: x0 * cos + z0 * sin,
    y: y0,
    z: -x0 * sin + z0 * cos,
  };
}

function shuffleLabels(seed: number, count: number): number[] {
  const idx = Array.from({ length: count }, (_, i) => i);
  let s = seed;
  for (let i = idx.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const j = s % (i + 1);
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx;
}

export default function HomeDataGlobe() {
  const uid = useId().replace(/:/g, "");
  const rootAttr = `hg-${uid}`;
  const captionKicker = estateNodesDoc.captionKicker;
  const caption = estateNodesDoc.caption;

  const initial = useMemo(() => {
    const sphere = fibSphere(NODE_COUNT);
    const labels = shuffleLabels(42, LABEL_POOL.length);
    return sphere
      .map((n, i) => {
        const p = project(n.theta, n.phi, 0);
        const depth = (p.z + 1) / 2;
        const labelIndex = labels[i % labels.length];
        return {
          ...n,
          ...p,
          depth,
          sx: CX + p.x * RADIUS,
          sy: CY + p.y * RADIUS * 0.92,
          labelIndex,
          label: LABEL_POOL[labelIndex % LABEL_POOL.length],
          front: p.z > LABEL_Z,
        };
      })
      .sort((a, b) => a.z - b.z);
  }, []);

  return (
    <div
      data-hg-root={rootAttr}
      className="relative mx-auto w-full max-w-[420px] md:max-w-none"
      aria-label={`${captionKicker}. ${caption}`}
      role="img"
    >
      <Script src="/js/home-data-globe.js" strategy="afterInteractive" />
      <div className="relative aspect-square w-full">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`${uid}-core`} cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFE566" />
            <stop offset="45%" stopColor="#FACC15" />
            <stop offset="100%" stopColor="#B45309" />
          </radialGradient>
          <radialGradient id={`${uid}-glow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FACC15" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#FACC15" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
          </radialGradient>
          <filter id={`${uid}-soft`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        <circle cx={CX} cy={CY} r={RADIUS + 36} fill={`url(#${uid}-glow)`} />
        <circle
          cx={CX}
          cy={CY}
          r={RADIUS + 8}
          fill="none"
          stroke="rgba(247,245,238,0.12)"
          strokeWidth="1"
        />
        <ellipse
          data-hg-equator=""
          cx={CX}
          cy={CY}
          rx={RADIUS}
          ry={RADIUS * 0.38}
          fill="none"
          stroke="rgba(247,245,238,0.1)"
          strokeWidth="1"
        />

        {initial.map((n) => (
          <line
            key={`e-${n.id}`}
            data-hg-edge={n.id}
            x1={CX}
            y1={CY}
            x2={n.sx}
            y2={n.sy}
            stroke={
              n.z > 0 ? "rgba(20, 24, 32, 0.85)" : "rgba(20, 24, 32, 0.35)"
            }
            strokeWidth={n.z > 0.2 ? 1.4 : 0.8}
          />
        ))}

        <circle
          cx={CX}
          cy={CY}
          r={34}
          fill={`url(#${uid}-core)`}
          filter={`url(#${uid}-soft)`}
          opacity="0.55"
        />
        <circle cx={CX} cy={CY} r={26} fill={`url(#${uid}-core)`} />
        <circle cx={CX - 6} cy={CY - 7} r={8} fill="rgba(255,255,255,0.35)" />
        <text
          x={CX}
          y={CY + 4}
          textAnchor="middle"
          fill="#142840"
          fontSize="10"
          fontWeight="700"
          letterSpacing="0.14em"
          style={{ fontFamily: "var(--font-brand), system-ui, sans-serif" }}
        >
          DATA
        </text>

        {initial.map((n) => {
          const r = 3.2 + n.depth * 3.2;
          return (
            <g
              key={`n-${n.id}`}
              data-hg-node={n.id}
              data-hg-theta={n.theta}
              data-hg-phi={n.phi}
              data-hg-base={n.labelIndex}
              data-hg-front={n.front ? "1" : "0"}
              opacity={0.35 + n.depth * 0.65}
            >
              <circle
                data-hg-halo=""
                cx={n.sx}
                cy={n.sy}
                r={r + 2.5}
                fill="rgba(250,204,21,0.12)"
              />
              <circle
                data-hg-dot=""
                cx={n.sx}
                cy={n.sy}
                r={r}
                fill="#0B0F14"
                stroke={n.z > 0.1 ? "#FACC15" : "rgba(250,204,21,0.35)"}
                strokeWidth="1.1"
              />
              <text
                data-hg-label=""
                x={n.sx}
                y={n.sy - r - 6}
                textAnchor="middle"
                fill="rgba(247,245,238,0.88)"
                fontSize="9.5"
                fontWeight="600"
                letterSpacing="0.06em"
                opacity={n.front ? 1 : 0}
                style={{
                  display: n.front ? undefined : "none",
                  fontFamily: "var(--font-brand), system-ui, sans-serif",
                }}
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>
      </div>

      {/* Legend plaque — reads as part of the motion, not ghost text on navy. */}
      <div className="relative z-10 mx-auto mt-4 w-full max-w-[22rem] md:mt-5 md:max-w-none">
        <div className="relative overflow-hidden rounded-[3px] border border-porcelain/20 bg-[linear-gradient(165deg,rgba(20,40,64,0.92)_0%,rgba(10,18,32,0.88)_100%)] px-4 py-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md md:px-5 md:py-4">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full bg-gold/10 blur-2xl"
          />
          <p className="relative flex items-center justify-center gap-2.5 font-brand text-[10.5px] font-bold uppercase tracking-[0.22em] text-gold md:text-[11px]">
            <span className="inline-block h-[8px] w-[8px] bg-gold" />
            {captionKicker}
          </p>
          <p className="relative mt-2 text-center font-brand text-[12.5px] font-semibold leading-[1.45] tracking-[-0.01em] text-porcelain/90 md:text-[13.5px]">
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
}
