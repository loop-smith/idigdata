"use client";

export default function DirectSignalObject({ size = 220 }: { size?: number }) {
  return (
    <div
      className="direct-signal-console"
      style={{ width: size, height: size }}
      role="img"
      aria-label="Direct Signal Connection: Client Mandate to Accountable Owner with zero intermediaries"
    >
      <svg
        className="direct-signal-svg"
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Grid & Vignette */}
        <rect width="220" height="220" rx="110" fill="#0B1624" />
        <circle cx="110" cy="110" r="105" stroke="rgba(250, 204, 21, 0.25)" strokeWidth="1.5" />
        <circle cx="110" cy="110" r="85" stroke="rgba(20, 40, 64, 0.8)" strokeWidth="1" strokeDasharray="3,3" />

        {/* Faded Bypassed Routes (Middlemen / Junior Bench / Pitch Decks) */}
        <g className="bypassed-layer" opacity="0.4">
          {/* Top Arc: Account Exec / Sales Pitch */}
          <path
            d="M 45 110 Q 110 40 175 110"
            stroke="#5A6978"
            strokeWidth="1.5"
            strokeDasharray="3,4"
            fill="none"
          />
          <circle cx="110" cy="75" r="7" fill="#0B1624" stroke="#5A6978" strokeWidth="1.2" />
          <line x1="106" y1="71" x2="114" y2="79" stroke="#E11D48" strokeWidth="1.4" />
          <text x="110" y="60" fill="#8896A6" fontSize="8" fontFamily="var(--font-source-sans)" textAnchor="middle" letterSpacing="0.08em">INTERMEDIARY</text>

          {/* Bottom Arc: Junior Bench / Deck */}
          <path
            d="M 45 110 Q 110 180 175 110"
            stroke="#5A6978"
            strokeWidth="1.5"
            strokeDasharray="3,4"
            fill="none"
          />
          <circle cx="110" cy="145" r="7" fill="#0B1624" stroke="#5A6978" strokeWidth="1.2" />
          <line x1="106" y1="141" x2="114" y2="149" stroke="#E11D48" strokeWidth="1.4" />
          <text x="110" y="165" fill="#8896A6" fontSize="8" fontFamily="var(--font-source-sans)" textAnchor="middle" letterSpacing="0.08em">JUNIOR BENCH</text>
        </g>

        {/* The Direct Sovereign Bus (Central High-Speed Channel) */}
        <line
          x1="45"
          y1="110"
          x2="175"
          y2="110"
          stroke="#1B3A5C"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <line
          x1="45"
          y1="110"
          x2="175"
          y2="110"
          stroke="#FACC15"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Animated Traveling Signal Packets */}
        <g className="signal-packet-stream">
          <circle className="signal-packet-1" cx="45" cy="110" r="4.5" fill="#FFFBEB" />
          <circle className="signal-packet-2" cx="45" cy="110" r="3.5" fill="#FACC15" />
        </g>

        {/* Left Terminal: Client Mandate Node */}
        <g className="terminal-mandate">
          <circle cx="45" cy="110" r="16" fill="#142840" stroke="#5A6978" strokeWidth="1.5" />
          <circle cx="45" cy="110" r="8" fill="#FBF9F4" />
          <circle cx="45" cy="110" r="3" fill="#142840" />
          <text x="45" y="138" fill="#FBF9F4" fontSize="9" fontWeight="700" fontFamily="var(--font-vollkorn)" textAnchor="middle" letterSpacing="0.1em">PROBLEM</text>
        </g>

        {/* Right Terminal: Accountable Owner Core (Sun Gold Square) */}
        <g className="terminal-owner">
          {/* Pulsing Gold Arrival Wave */}
          <rect className="owner-pulse-wave" x="160" y="95" width="30" height="30" rx="3" fill="none" stroke="#FACC15" strokeWidth="1.5" />
          
          <rect x="162" y="97" width="26" height="26" rx="2" fill="#FACC15" stroke="#FFFBEB" strokeWidth="1.5" />
          <rect x="171" y="106" width="8" height="8" fill="#0B1624" />
          <text x="175" y="138" fill="#FACC15" fontSize="9" fontWeight="700" fontFamily="var(--font-vollkorn)" textAnchor="middle" letterSpacing="0.1em">OWNER</text>
        </g>

        {/* Central Direct Sovereign Tag */}
        <g className="direct-badge">
          <rect x="86" y="103" width="48" height="14" rx="2" fill="#0B1624" stroke="#FACC15" strokeWidth="1" />
          <text x="110" y="113.5" fill="#FACC15" fontSize="8" fontWeight="800" fontFamily="var(--font-source-sans)" textAnchor="middle" letterSpacing="0.12em">1:1 DIRECT</text>
        </g>
      </svg>
    </div>
  );
}
