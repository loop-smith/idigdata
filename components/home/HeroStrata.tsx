/**
 * Strata backdrop for the navy hero plane: layered geological horizons
 * (idigdata — the layer above the vendors) with a single gold seam that
 * draws in on load. Pure SVG + CSS, no client JS.
 */
export default function HeroStrata({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 1440 520"
      preserveAspectRatio="none"
      fill="none"
    >
      {/* faint contour hairlines above the strata */}
      <path
        d="M0 96 C 260 66, 520 122, 780 98 S 1240 58, 1440 92"
        stroke="#4A6B8F"
        strokeWidth="1"
        opacity="0.14"
      />
      <path
        d="M0 168 C 300 138, 560 196, 840 168 S 1260 128, 1440 160"
        stroke="#4A6B8F"
        strokeWidth="1"
        opacity="0.10"
      />
      {/* layered horizons */}
      <path
        d="M0 268 C 240 232, 480 306, 720 278 S 1200 226, 1440 268 L1440 520 L0 520 Z"
        fill="#1B3A5C"
        opacity="0.28"
      />
      <path
        d="M0 340 C 260 306, 520 376, 780 348 S 1240 300, 1440 338 L1440 520 L0 520 Z"
        fill="#16304D"
        opacity="0.5"
      />
      <path
        d="M0 416 C 280 388, 540 448, 820 424 S 1260 384, 1440 412 L1440 520 L0 520 Z"
        fill="#0E2138"
        opacity="0.75"
      />
      {/* the gold seam — the layer itself */}
      <path
        className="seam-path"
        pathLength={1}
        d="M0 306 C 250 272, 500 342, 760 314 S 1230 264, 1440 304"
        stroke="#FACC15"
        strokeWidth="2.5"
        opacity="0.9"
      />
    </svg>
  );
}
