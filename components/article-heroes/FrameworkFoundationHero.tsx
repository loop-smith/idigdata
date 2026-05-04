// Hero diagram for Article 3 — five production apps · framework · data foundation.
// Ported from idigdata_cw/article-03-styled-mockup.html.
type AppHexProps = {
  x: number;
  line1: string;
  line2: string;
  sub1: string;
  sub2: string;
};

function AppHex({ x, line1, line2, sub1, sub2 }: AppHexProps) {
  return (
    <g transform={`translate(${x}, 175)`}>
      <polygon
        points="0,-58 50,-29 50,29 0,58 -50,29 -50,-29"
        fill="#FAFAF7"
        stroke="#142840"
        strokeWidth="1.8"
      />
      <rect x="-6" y="-50" width="12" height="12" fill="#FACC15" />
      <text x="0" y="-12" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#142840">
        {line1}
      </text>
      <text x="0" y="2" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#142840">
        {line2}
      </text>
      <text x="0" y="20" textAnchor="middle" fontSize="8.5" fill="#7A756A" fontStyle="italic">
        {sub1}
      </text>
      <text x="0" y="32" textAnchor="middle" fontSize="8.5" fill="#7A756A" fontStyle="italic">
        {sub2}
      </text>
    </g>
  );
}

export default function FrameworkFoundationHero() {
  return (
    <svg
      viewBox="0 0 900 540"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: "'Source Sans 3',sans-serif" }}
      role="img"
      aria-label="Five production apps · the framework · the data foundation"
    >
      <defs>
        <marker
          id="arr-3"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="#142840" />
        </marker>
      </defs>
      <text
        x="450"
        y="32"
        textAnchor="middle"
        fontFamily="Vollkorn,serif"
        fontSize="20"
        fontWeight="600"
        fill="#142840"
      >
        Five production apps · one framework · one data foundation
      </text>
      <text
        x="450"
        y="54"
        textAnchor="middle"
        fontSize="12"
        fill="#7A756A"
        fontStyle="italic"
      >
        The rare credential — agentics that ship into operations, not slides that pitch the strategy.
      </text>
      <text
        x="450"
        y="90"
        textAnchor="middle"
        fontSize="10.5"
        fontWeight="700"
        fill="#142840"
        letterSpacing="1.8"
      >
        PRODUCTION APPS — IN LIVE OPERATIONS
      </text>
      <AppHex
        x={120}
        line1="OPERATIONAL"
        line2="DECISIONING"
        sub1="Sub-process"
        sub2="decisions in envelope"
      />
      <AppHex
        x={285}
        line1="INSTITUTIONAL"
        line2="KNOWLEDGE"
        sub1="Cross-touchpoint"
        sub2="retrieval, grounded"
      />
      <AppHex
        x={450}
        line1="DOCUMENT"
        line2="INTAKE"
        sub1="Unstructured →"
        sub2="structured data"
      />
      <AppHex
        x={615}
        line1="CROSS-SYSTEM"
        line2="ORCHESTRATION"
        sub1="Multi-step workflows"
        sub2="across tier-1 systems"
      />
      <AppHex
        x={780}
        line1="DECISION-"
        line2="SUPPORT"
        sub1="Synthesized context"
        sub2="at decision time"
      />
      {[120, 285, 450, 615, 780].map((x) => (
        <line
          key={x}
          x1={x}
          y1="237"
          x2={x}
          y2="278"
          stroke="#142840"
          strokeWidth="1.2"
          markerEnd="url(#arr-3)"
        />
      ))}
      <rect
        x="40"
        y="280"
        width="820"
        height="62"
        fill="#FAFAF7"
        stroke="#142840"
        strokeWidth="1.5"
        rx="4"
      />
      <text
        x="60"
        y="304"
        fontSize="11"
        fontWeight="700"
        fill="#142840"
        letterSpacing="1.5"
      >
        THE FRAMEWORK · WHAT MAKES IT REPEATABLE
      </text>
      <text x="60" y="325" fontSize="11" fill="#142840">
        Governance · Security · Onboarding · Training · Operator empowerment
      </text>
      <line
        x1="450"
        y1="345"
        x2="450"
        y2="376"
        stroke="#142840"
        strokeWidth="2"
        markerEnd="url(#arr-3)"
      />
      <rect x="40" y="378" width="820" height="100" fill="#142840" rx="4" />
      <text
        x="80"
        y="408"
        fontSize="11"
        fontWeight="700"
        fill="#FACC15"
        letterSpacing="1.8"
      >
        DATA FOUNDATION
      </text>
      <text x="80" y="430" fontSize="13" fill="#FAFAF7" fontStyle="italic">
        Sovereign Common Data Model · MDM at enterprise level · client-owned
      </text>
      <text x="80" y="452" fontSize="11" fill="#FAFAF7">
        BOSS Data pillar · the precondition · the substrate the agentics layer rides on
      </text>
      <g transform="translate(770, 408)">
        <rect x="0" y="0" width="10" height="10" fill="#FAFAF7" />
        <rect x="34" y="0" width="10" height="10" fill="#FAFAF7" />
        <rect x="0" y="34" width="10" height="10" fill="#FAFAF7" />
        <rect x="34" y="34" width="10" height="10" fill="#FAFAF7" />
        <rect x="17" y="0" width="10" height="10" fill="none" stroke="#FAFAF7" strokeWidth="2" />
        <rect x="0" y="17" width="10" height="10" fill="none" stroke="#FAFAF7" strokeWidth="2" />
        <rect x="34" y="17" width="10" height="10" fill="none" stroke="#FAFAF7" strokeWidth="2" />
        <rect x="17" y="34" width="10" height="10" fill="none" stroke="#FAFAF7" strokeWidth="2" />
        <rect x="17" y="17" width="10" height="10" fill="#FACC15" />
      </g>
      <text
        x="450"
        y="510"
        textAnchor="middle"
        fontSize="11.5"
        fill="#142840"
        fontWeight="500"
        letterSpacing="0.5"
      >
        Agentics lives off data. Without sovereign data, agentic deployments produce theater.
      </text>
    </svg>
  );
}
