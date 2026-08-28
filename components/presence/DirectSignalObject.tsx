"use client";

export default function DirectSignalObject({ size = 220 }: { size?: number }) {
  return (
    <div
      className="direct-signal-console"
      style={{ width: size, height: size }}
      role="img"
      aria-label="Harmonic Resonance Dual-Layer Waveform"
    >
      <svg
        className="direct-signal-svg"
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="navyWaveGrad" x1="0" y1="110" x2="220" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#142840" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#142840" stopOpacity="1" />
            <stop offset="100%" stopColor="#142840" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="goldWaveGrad" x1="0" y1="110" x2="220" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FACC15" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#FACC15" stopOpacity="1" />
            <stop offset="100%" stopColor="#FACC15" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Architectural Paper Plate */}
        <rect width="220" height="220" rx="110" fill="#F3ECE0" stroke="rgba(20, 40, 64, 0.18)" strokeWidth="1.5" />
        
        {/* Subtle Horizontal & Vertical Equilibrium Axis */}
        <line x1="20" y1="110" x2="200" y2="110" stroke="rgba(20, 40, 64, 0.15)" strokeWidth="1" strokeDasharray="3,3" />
        <line x1="110" y1="20" x2="110" y2="200" stroke="rgba(20, 40, 64, 0.12)" strokeWidth="1" strokeDasharray="3,3" />
        <circle cx="110" cy="110" r="92" stroke="rgba(20, 40, 64, 0.1)" strokeWidth="1" />

        {/* Deep Navy Application Foundation Wave */}
        <path
          className="wave-navy"
          d="M 15 110 Q 62.5 70 110 110 T 205 110"
          stroke="url(#navyWaveGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Sun Gold Agentics Wave (Phase-Shifted Harmonic) */}
        <path
          className="wave-gold"
          d="M 15 110 Q 62.5 150 110 110 T 205 110"
          stroke="url(#goldWaveGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Center Convergence Calibration Crosshairs */}
        <circle cx="110" cy="110" r="32" stroke="rgba(20, 40, 64, 0.2)" strokeWidth="1" strokeDasharray="2,2" />
        <circle cx="110" cy="110" r="22" stroke="rgba(250, 204, 21, 0.4)" strokeWidth="1.2" />

        {/* Expanding Gold Center Resonance Wave */}
        <circle className="wave-ping" cx="110" cy="110" r="16" fill="none" stroke="#FACC15" strokeWidth="1.5" />

        {/* Center Sovereign Gold Owner Mark */}
        <rect x="98" y="98" width="24" height="24" rx="3" fill="#FACC15" stroke="#142840" strokeWidth="2.5" />
        <rect x="106" y="106" width="8" height="8" fill="#142840" />
      </svg>
    </div>
  );
}
