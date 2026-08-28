"use client";

export default function ConstellationsFilm({ size = 80 }: { size?: number }) {
  return (
    <div
      className="constellations-film-badge"
      style={{ width: size, height: size, minWidth: size }}
      role="img"
      aria-label="Six Process Constellations live telemetry animation"
    >
      <svg
        className="constellations-film-svg"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FACC15" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#FACC15" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Deep Navy / Dark Base Disc */}
        <circle cx="50" cy="50" r="48" fill="#0B1624" stroke="rgba(250, 204, 21, 0.3)" strokeWidth="1.2" />
        <circle cx="50" cy="50" r="42" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" strokeDasharray="2,2" />

        {/* 6 Radial Connectivity Spokes */}
        <g stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" strokeDasharray="2,2">
          <line x1="50" y1="50" x2="50" y2="16" />
          <line x1="50" y1="50" x2="79.4" y2="33" />
          <line x1="50" y1="50" x2="79.4" y2="67" />
          <line x1="50" y1="50" x2="50" y2="84" />
          <line x1="50" y1="50" x2="20.6" y2="67" />
          <line x1="50" y1="50" x2="20.6" y2="33" />
        </g>

        {/* Traveling Golden Pulse Packets (Continuous Radial Traffic) */}
        <g className="spoke-packets">
          {/* Spoke 0 (D2R) */}
          <circle className="c-pkt c-pkt-0" cx="50" cy="50" r="2.2" fill="#FFFBEB" />
          {/* Spoke 1 (O2C) */}
          <circle className="c-pkt c-pkt-1" cx="50" cy="50" r="2.2" fill="#FACC15" />
          {/* Spoke 2 (P2M) */}
          <circle className="c-pkt c-pkt-2" cx="50" cy="50" r="2.2" fill="#FACC15" />
          {/* Spoke 3 (MDM) */}
          <circle className="c-pkt c-pkt-3" cx="50" cy="50" r="2.2" fill="#FFFBEB" />
          {/* Spoke 4 (P2P) */}
          <circle className="c-pkt c-pkt-4" cx="50" cy="50" r="2.2" fill="#FACC15" />
          {/* Spoke 5 (S2S) */}
          <circle className="c-pkt c-pkt-5" cx="50" cy="50" r="2.2" fill="#FACC15" />
        </g>

        {/* 6 Outer Process Constellation Nodes */}
        {/* D2R · 12 o'clock */}
        <g className="c-node c-node-0">
          <circle cx="50" cy="16" r="6" fill="#142840" stroke="#FACC15" strokeWidth="1.2" />
          <circle cx="50" cy="16" r="2.5" fill="#FBF9F4" />
        </g>

        {/* O2C · 2 o'clock */}
        <g className="c-node c-node-1">
          <circle cx="79.4" cy="33" r="6" fill="#142840" stroke="#FACC15" strokeWidth="1.2" />
          <circle cx="79.4" cy="33" r="2.5" fill="#FBF9F4" />
        </g>

        {/* P2M · 4 o'clock */}
        <g className="c-node c-node-2">
          <circle cx="79.4" cy="67" r="6" fill="#142840" stroke="#FACC15" strokeWidth="1.2" />
          <circle cx="79.4" cy="67" r="2.5" fill="#FBF9F4" />
        </g>

        {/* MDM · 6 o'clock */}
        <g className="c-node c-node-3">
          <circle cx="50" cy="84" r="6" fill="#142840" stroke="#FACC15" strokeWidth="1.2" />
          <circle cx="50" cy="84" r="2.5" fill="#FBF9F4" />
        </g>

        {/* P2P · 8 o'clock */}
        <g className="c-node c-node-4">
          <circle cx="20.6" cy="67" r="6" fill="#142840" stroke="#FACC15" strokeWidth="1.2" />
          <circle cx="20.6" cy="67" r="2.5" fill="#FBF9F4" />
        </g>

        {/* S2S · 10 o'clock */}
        <g className="c-node c-node-5">
          <circle cx="20.6" cy="33" r="6" fill="#142840" stroke="#FACC15" strokeWidth="1.2" />
          <circle cx="20.6" cy="33" r="2.5" fill="#FBF9F4" />
        </g>

        {/* Central Sovereign Data Core */}
        <circle cx="50" cy="50" r="14" fill="url(#coreGlow)" className="c-core-glow" />
        <circle cx="50" cy="50" r="9.5" fill="#FACC15" stroke="#142840" strokeWidth="1.8" />
        <rect x="47.5" y="47.5" width="5" height="5" fill="#142840" />
      </svg>
    </div>
  );
}
