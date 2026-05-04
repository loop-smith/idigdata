// Hero diagram for Article 2 — three sub-disciplines on the BOSS Delivery substrate.
// Ported from idigdata_cw/article-02-styled-mockup.html.
type DisciplineProps = {
  x: number;
  line1: string;
  line2: string;
  sub1: string;
  sub2: string;
};

function DisciplineHex({ x, line1, line2, sub1, sub2 }: DisciplineProps) {
  return (
    <g transform={`translate(${x}, 165)`}>
      <polygon
        points="0,-66 57,-33 57,33 0,66 -57,33 -57,-33"
        fill="#FAFAF7"
        stroke="#142840"
        strokeWidth="2"
      />
      <rect x="-7" y="-58" width="14" height="14" fill="#FACC15" />
      <text x="0" y="-12" textAnchor="middle" fontSize="11" fontWeight="700" fill="#142840">
        {line1}
      </text>
      <text x="0" y="2" textAnchor="middle" fontSize="11" fontWeight="700" fill="#142840">
        {line2}
      </text>
      <text x="0" y="22" textAnchor="middle" fontSize="9" fill="#7A756A" fontStyle="italic">
        {sub1}
      </text>
      <text x="0" y="36" textAnchor="middle" fontSize="9" fill="#7A756A" fontStyle="italic">
        {sub2}
      </text>
    </g>
  );
}

export default function IntegratedDeliveryHero() {
  return (
    <svg
      viewBox="0 0 900 540"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: "'Source Sans 3',sans-serif" }}
      role="img"
      aria-label="Integrated delivery — PM, change management, and agile-fall on the BOSS Delivery substrate"
    >
      <defs>
        <marker
          id="arr-2"
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
        Integrated delivery on persistence substrate
      </text>
      <text
        x="450"
        y="54"
        textAnchor="middle"
        fontSize="12"
        fill="#7A756A"
        fontStyle="italic"
      >
        Three sub-disciplines that compound when run as one. Collide when run parallel.
      </text>
      <DisciplineHex
        x={180}
        line1="PROJECT"
        line2="MANAGEMENT"
        sub1="Sprint cadence · milestones"
        sub2="Register state · dependencies"
      />
      <DisciplineHex
        x={450}
        line1="STAKEHOLDER"
        line2="+ CHANGE"
        sub1="Comms · training · adoption"
        sub2="Resistance + readiness map"
      />
      <DisciplineHex
        x={720}
        line1="AGILE-FALL"
        line2="MODE-SWITCH"
        sub1="Per work type, not religion"
        sub2="Waterfall + agile, by signal"
      />
      <line
        x1="237"
        y1="160"
        x2="393"
        y2="160"
        stroke="#142840"
        strokeWidth="1"
        strokeDasharray="3,3"
      />
      <line
        x1="507"
        y1="160"
        x2="663"
        y2="160"
        stroke="#142840"
        strokeWidth="1"
        strokeDasharray="3,3"
      />
      <text x="315" y="155" textAnchor="middle" fontSize="9" fill="#7A756A" fontStyle="italic">
        shared state
      </text>
      <text x="585" y="155" textAnchor="middle" fontSize="9" fill="#7A756A" fontStyle="italic">
        shared state
      </text>
      <line
        x1="180"
        y1="232"
        x2="180"
        y2="278"
        stroke="#142840"
        strokeWidth="1.5"
        markerEnd="url(#arr-2)"
      />
      <line
        x1="450"
        y1="232"
        x2="450"
        y2="278"
        stroke="#142840"
        strokeWidth="1.5"
        markerEnd="url(#arr-2)"
      />
      <line
        x1="720"
        y1="232"
        x2="720"
        y2="278"
        stroke="#142840"
        strokeWidth="1.5"
        markerEnd="url(#arr-2)"
      />
      <rect x="40" y="280" width="820" height="80" fill="#142840" rx="4" />
      <text
        x="60"
        y="306"
        fontSize="11"
        fontWeight="700"
        fill="#FACC15"
        letterSpacing="1.5"
      >
        BOSS · DELIVERY PILLAR
      </text>
      <text x="60" y="328" fontSize="13" fill="#FAFAF7" fontStyle="italic">
        Register-driven persistence · PM + Governance + Change as one suite
      </text>
      <text x="60" y="348" fontSize="11" fill="#FAFAF7">
        Decision-trace logging · sponsor sign-off · risk register · register-state visible across all three
      </text>
      <rect x="173" y="294" width="14" height="14" fill="#FACC15" />
      <rect x="443" y="294" width="14" height="14" fill="#FACC15" />
      <rect x="713" y="294" width="14" height="14" fill="#FACC15" />
      <rect
        x="40"
        y="380"
        width="820"
        height="64"
        fill="#FAFAF7"
        stroke="#142840"
        strokeWidth="1"
        rx="4"
      />
      <line x1="40" y1="380" x2="860" y2="380" stroke="#FACC15" strokeWidth="3" />
      <text
        x="60"
        y="404"
        fontSize="11"
        fontWeight="700"
        fill="#142840"
        letterSpacing="1.5"
      >
        CAPITALIZATION TRACKING · ASC 350-40
      </text>
      <text x="60" y="424" fontSize="11.5" fill="#142840" fontStyle="italic">
        Internal labor capitalizes during build phase · ten-year depreciation post-go-live · audit-defensible
      </text>
      <g transform="translate(40, 460)">
        <rect
          x="0"
          y="0"
          width="820"
          height="40"
          fill="#F4F1E9"
          stroke="#7A756A"
          strokeWidth="0.5"
          rx="4"
        />
        <text
          x="20"
          y="17"
          fontSize="10.5"
          fontWeight="700"
          fill="#142840"
          letterSpacing="1.2"
        >
          CFO WINS ON THREE AXES
        </text>
        <text x="20" y="32" fontSize="10.5" fill="#142840">
          Lower total cost · higher outcome certainty · smoothed P&amp;L impact across the build years
        </text>
      </g>
      <text
        x="450"
        y="525"
        textAnchor="middle"
        fontSize="11.5"
        fill="#142840"
        fontWeight="500"
        letterSpacing="0.5"
      >
        The discipline IS the differentiation.
      </text>
    </svg>
  );
}
