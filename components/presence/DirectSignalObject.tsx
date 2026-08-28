"use client";

export default function DirectSignalObject({ size = 220 }: { size?: number }) {
  return (
    <div
      className="direct-signal-console"
      style={{ width: size, height: size }}
      role="img"
      aria-label="Direct Sovereign Mandate Seal"
    >
      <svg
        className="direct-signal-svg"
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Architectural Paper Plate */}
        <rect width="220" height="220" rx="110" fill="#F3ECE0" stroke="rgba(20, 40, 64, 0.18)" strokeWidth="1.5" />
        
        {/* Outer Calibrated Ring */}
        <circle cx="110" cy="110" r="96" stroke="rgba(20, 40, 64, 0.2)" strokeWidth="1" strokeDasharray="4,4" />
        <circle cx="110" cy="110" r="82" stroke="#142840" strokeWidth="1.5" />
        
        {/* Cardinal Precision Notches */}
        <line x1="110" y1="18" x2="110" y2="30" stroke="#142840" strokeWidth="2" />
        <line x1="110" y1="190" x2="110" y2="202" stroke="#142840" strokeWidth="2" />
        <line x1="18" y1="110" x2="30" y2="110" stroke="#142840" strokeWidth="2" />
        <line x1="190" y1="110" x2="202" y2="110" stroke="#142840" strokeWidth="2" />

        {/* Orbiting Gold Satellites (Continuous 1:1 Synchronous Flow) */}
        <g className="seal-orbit">
          <circle cx="110" cy="28" r="4.5" fill="#FACC15" stroke="#142840" strokeWidth="1.5" />
          <circle cx="110" cy="192" r="4.5" fill="#FACC15" stroke="#142840" strokeWidth="1.5" />
        </g>

        {/* Inner Counter-Rotating Precision Ring */}
        <g className="seal-counter-ring">
          <circle cx="110" cy="110" r="58" stroke="#B48A05" strokeWidth="1.5" strokeDasharray="12,6" />
          <circle cx="110" cy="110" r="42" stroke="rgba(20, 40, 64, 0.25)" strokeWidth="1" />
        </g>

        {/* Expanding Gold Center Ping */}
        <rect className="seal-ping" x="91" y="91" width="38" height="38" rx="4" fill="none" stroke="#FACC15" strokeWidth="2" />

        {/* Sovereign Gold Core Cube */}
        <rect x="94" y="94" width="32" height="32" rx="3" fill="#FACC15" stroke="#142840" strokeWidth="2.5" />
        <rect x="104" y="104" width="12" height="12" fill="#142840" />
      </svg>
    </div>
  );
}
