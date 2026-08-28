"use client";

export default function DirectSignalObject({ size = 220 }: { size?: number }) {
  return (
    <div
      className="direct-signal-console"
      style={{ width: size, height: size }}
      role="img"
      aria-label="Direct Mandate Connection: Client Problem to Accountable Owner with zero intermediaries"
    >
      <svg
        className="direct-signal-svg"
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Light Porcelain / Paper Architectural Base */}
        <rect width="220" height="220" rx="110" fill="#F3ECE0" stroke="rgba(20, 40, 64, 0.25)" strokeWidth="2" />
        <circle cx="110" cy="110" r="102" stroke="rgba(20, 40, 64, 0.08)" strokeWidth="1" />
        <circle cx="110" cy="110" r="82" stroke="rgba(20, 40, 64, 0.12)" strokeWidth="1" strokeDasharray="3,3" />

        {/* Faded Bypassed Intermediary Channels (Gray / Red-slashed) */}
        <g className="bypassed-layer" opacity="0.6">
          {/* Top Arc: Account Exec / Sales Pitch */}
          <path
            d="M 45 110 Q 110 38 175 110"
            stroke="#5A6978"
            strokeWidth="1.5"
            strokeDasharray="3,4"
            fill="none"
          />
          <rect x="94" y="52" width="32" height="18" rx="2" fill="#FBF9F4" stroke="#5A6978" strokeWidth="1" />
          <line x1="90" y1="61" x2="130" y2="61" stroke="#DC2626" strokeWidth="1.5" />
          <text x="110" y="64" fill="#5A6978" fontSize="8" fontWeight="700" fontFamily="var(--font-source-sans)" textAnchor="middle" letterSpacing="0.05em">SALES</text>

          {/* Bottom Arc: Junior Bench / Decks */}
          <path
            d="M 45 110 Q 110 182 175 110"
            stroke="#5A6978"
            strokeWidth="1.5"
            strokeDasharray="3,4"
            fill="none"
          />
          <rect x="94" y="150" width="32" height="18" rx="2" fill="#FBF9F4" stroke="#5A6978" strokeWidth="1" />
          <line x1="90" y1="159" x2="130" y2="159" stroke="#DC2626" strokeWidth="1.5" />
          <text x="110" y="162" fill="#5A6978" fontSize="8" fontWeight="700" fontFamily="var(--font-source-sans)" textAnchor="middle" letterSpacing="0.05em">BENCH</text>
        </g>

        {/* The Direct Sovereign Bus (Bold Navy + Gold Channel) */}
        <line
          x1="45"
          y1="110"
          x2="175"
          y2="110"
          stroke="#142840"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <line
          x1="45"
          y1="110"
          x2="175"
          y2="110"
          stroke="#FACC15"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Animated Traveling Signal Packets */}
        <g className="signal-packet-stream">
          <circle className="signal-packet-1" cx="45" cy="110" r="5" fill="#FACC15" stroke="#142840" strokeWidth="1.5" />
          <circle className="signal-packet-2" cx="45" cy="110" r="4" fill="#B48A05" />
        </g>

        {/* Left Terminal: Client Mandate Node */}
        <g className="terminal-mandate">
          <circle cx="45" cy="110" r="18" fill="#FBF9F4" stroke="#142840" strokeWidth="2.5" />
          <circle cx="45" cy="110" r="10" fill="#142840" />
          <circle cx="45" cy="110" r="4" fill="#FACC15" />
          <text x="45" y="142" fill="#142840" fontSize="10" fontWeight="800" fontFamily="var(--font-vollkorn)" textAnchor="middle" letterSpacing="0.08em">PROBLEM</text>
        </g>

        {/* Right Terminal: Accountable Owner Core (Sun Gold Square) */}
        <g className="terminal-owner">
          {/* Pulsing Gold Arrival Wave */}
          <rect className="owner-pulse-wave" x="158" y="93" width="34" height="34" rx="4" fill="none" stroke="#B48A05" strokeWidth="2" />
          
          <rect x="160" y="95" width="30" height="30" rx="3" fill="#FACC15" stroke="#142840" strokeWidth="2.5" />
          <rect x="170" y="105" width="10" height="10" fill="#142840" />
          <text x="175" y="142" fill="#142840" fontSize="10" fontWeight="800" fontFamily="var(--font-vollkorn)" textAnchor="middle" letterSpacing="0.08em">OWNER</text>
        </g>

        {/* Central Direct Sovereign Badge */}
        <g className="direct-badge">
          <rect x="84" y="101" width="52" height="18" rx="3" fill="#142840" stroke="#FACC15" strokeWidth="1.5" />
          <text x="110" y="113.5" fill="#FBF9F4" fontSize="9" fontWeight="800" fontFamily="var(--font-source-sans)" textAnchor="middle" letterSpacing="0.1em">DIRECT 1:1</text>
        </g>
      </svg>
    </div>
  );
}
