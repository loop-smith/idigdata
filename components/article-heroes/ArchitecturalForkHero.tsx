// Hero diagram for Article 1 — sovereign data vs. lock-in.
// Ported from idigdata_cw/article-01-styled-mockup.html.
export default function ArchitecturalForkHero() {
  return (
    <svg
      viewBox="0 0 900 460"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: "'Source Sans 3',sans-serif" }}
      role="img"
      aria-label="The architectural fork — sovereign data versus vendor lock-in"
    >
      <defs>
        <marker
          id="arr-1a"
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
        y="34"
        textAnchor="middle"
        fontFamily="Vollkorn,serif"
        fontSize="20"
        fontWeight="600"
        fill="#142840"
      >
        The architectural fork
      </text>
      <text
        x="450"
        y="56"
        textAnchor="middle"
        fontSize="12"
        fill="#7A756A"
        fontStyle="italic"
      >
        Same operating company. Two structurally different choices about who owns the data.
      </text>
      <line
        x1="450"
        y1="86"
        x2="450"
        y2="406"
        stroke="#D6D0C4"
        strokeWidth="1"
        strokeDasharray="3,4"
      />
      <text
        x="220"
        y="100"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#7A756A"
        letterSpacing="2"
      >
        LOCK-IN MODEL
      </text>
      <rect
        x="80"
        y="120"
        width="280"
        height="240"
        fill="none"
        stroke="#142840"
        strokeWidth="2"
        rx="4"
      />
      <text
        x="220"
        y="143"
        textAnchor="middle"
        fontSize="12"
        fontWeight="600"
        fill="#142840"
        letterSpacing="0.5"
      >
        VENDOR PLATFORM
      </text>
      <text
        x="220"
        y="158"
        textAnchor="middle"
        fontSize="10"
        fill="#7A756A"
        fontStyle="italic"
      >
        SAP / D365 / Acumatica / NetSuite
      </text>
      <rect
        x="120"
        y="185"
        width="200"
        height="100"
        fill="#F4F1E9"
        stroke="#7A756A"
        strokeWidth="1"
        rx="3"
      />
      <text x="220" y="205" textAnchor="middle" fontSize="11" fontWeight="600" fill="#142840">
        CLIENT DATA
      </text>
      <text x="220" y="221" textAnchor="middle" fontSize="9.5" fill="#1F1E1B">
        Customer master · Item master
      </text>
      <text x="220" y="235" textAnchor="middle" fontSize="9.5" fill="#1F1E1B">
        Price list · BOMs · Vendors
      </text>
      <text x="220" y="255" textAnchor="middle" fontSize="10" fill="#7A756A" fontStyle="italic">
        in the vendor&apos;s tables,
      </text>
      <text x="220" y="269" textAnchor="middle" fontSize="10" fill="#7A756A" fontStyle="italic">
        on the vendor&apos;s schema
      </text>
      <rect x="100" y="305" width="60" height="22" fill="#142840" rx="2" />
      <text x="130" y="320" textAnchor="middle" fontSize="10" fontWeight="600" fill="#FAFAF7">
        ERP
      </text>
      <rect x="170" y="305" width="60" height="22" fill="#142840" rx="2" />
      <text x="200" y="320" textAnchor="middle" fontSize="10" fontWeight="600" fill="#FAFAF7">
        CRM
      </text>
      <rect x="240" y="305" width="60" height="22" fill="#142840" rx="2" />
      <text x="270" y="320" textAnchor="middle" fontSize="10" fontWeight="600" fill="#FAFAF7">
        WMS
      </text>
      <text x="220" y="355" textAnchor="middle" fontSize="10" fill="#7A756A">
        Add-on partners bill perpetually
      </text>
      <text
        x="220"
        y="395"
        textAnchor="middle"
        fontSize="11"
        fontWeight="600"
        fill="#142840"
        fontStyle="italic"
      >
        Data lives inside someone else&apos;s product.
      </text>
      <text x="220" y="410" textAnchor="middle" fontSize="11" fill="#7A756A">
        Vendor change = transformation event.
      </text>
      <text
        x="680"
        y="100"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#142840"
        letterSpacing="2"
      >
        THE NEW MODEL
      </text>
      <rect
        x="500"
        y="120"
        width="360"
        height="240"
        fill="none"
        stroke="#142840"
        strokeWidth="1.5"
        rx="6"
        strokeDasharray="6,3"
      />
      <text x="514" y="114" fontSize="9.5" fill="#142840" fontWeight="600" letterSpacing="1">
        CLIENT-OWNED
      </text>
      <g transform="translate(680, 240)">
        <polygon
          points="0,-58 50,-29 50,29 0,58 -50,29 -50,-29"
          fill="#FAFAF7"
          stroke="#142840"
          strokeWidth="2.5"
        />
        <g transform="translate(-22, -22)">
          <rect x="0" y="0" width="10" height="10" fill="#142840" />
          <rect x="34" y="0" width="10" height="10" fill="#142840" />
          <rect x="0" y="34" width="10" height="10" fill="#142840" />
          <rect x="34" y="34" width="10" height="10" fill="#142840" />
          <rect x="17" y="0" width="10" height="10" fill="none" stroke="#142840" strokeWidth="2" />
          <rect x="0" y="17" width="10" height="10" fill="none" stroke="#142840" strokeWidth="2" />
          <rect x="34" y="17" width="10" height="10" fill="none" stroke="#142840" strokeWidth="2" />
          <rect x="17" y="34" width="10" height="10" fill="none" stroke="#142840" strokeWidth="2" />
          <rect x="17" y="17" width="10" height="10" fill="#FACC15" />
        </g>
      </g>
      <text
        x="680"
        y="217"
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fill="#142840"
        letterSpacing="0.5"
      >
        COMMON DATA MODEL
      </text>
      <text x="680" y="319" textAnchor="middle" fontSize="9.5" fill="#7A756A" fontStyle="italic">
        MDM at enterprise level
      </text>
      <rect
        x="525"
        y="150"
        width="56"
        height="22"
        fill="none"
        stroke="#142840"
        strokeWidth="1"
        rx="2"
      />
      <text x="553" y="165" textAnchor="middle" fontSize="10" fontWeight="600" fill="#142840">
        ERP
      </text>
      <line
        x1="582"
        y1="173"
        x2="635"
        y2="215"
        stroke="#142840"
        strokeWidth="1"
        markerEnd="url(#arr-1a)"
      />
      <rect
        x="652"
        y="137"
        width="56"
        height="22"
        fill="none"
        stroke="#142840"
        strokeWidth="1"
        rx="2"
      />
      <text x="680" y="152" textAnchor="middle" fontSize="10" fontWeight="600" fill="#142840">
        CRM
      </text>
      <line
        x1="680"
        y1="159"
        x2="680"
        y2="190"
        stroke="#142840"
        strokeWidth="1"
        markerEnd="url(#arr-1a)"
      />
      <rect
        x="780"
        y="150"
        width="56"
        height="22"
        fill="none"
        stroke="#142840"
        strokeWidth="1"
        rx="2"
      />
      <text x="808" y="165" textAnchor="middle" fontSize="10" fontWeight="600" fill="#142840">
        WMS
      </text>
      <line
        x1="780"
        y1="173"
        x2="725"
        y2="215"
        stroke="#142840"
        strokeWidth="1"
        markerEnd="url(#arr-1a)"
      />
      <rect
        x="525"
        y="307"
        width="56"
        height="22"
        fill="none"
        stroke="#142840"
        strokeWidth="1"
        rx="2"
      />
      <text x="553" y="322" textAnchor="middle" fontSize="10" fontWeight="600" fill="#142840">
        HRIS
      </text>
      <line
        x1="582"
        y1="313"
        x2="635"
        y2="270"
        stroke="#142840"
        strokeWidth="1"
        markerEnd="url(#arr-1a)"
      />
      <rect
        x="652"
        y="323"
        width="56"
        height="22"
        fill="none"
        stroke="#142840"
        strokeWidth="1"
        rx="2"
      />
      <text x="680" y="338" textAnchor="middle" fontSize="10" fontWeight="600" fill="#142840">
        FP&amp;A
      </text>
      <line
        x1="680"
        y1="323"
        x2="680"
        y2="293"
        stroke="#142840"
        strokeWidth="1"
        markerEnd="url(#arr-1a)"
      />
      <rect
        x="780"
        y="307"
        width="56"
        height="22"
        fill="none"
        stroke="#142840"
        strokeWidth="1"
        rx="2"
      />
      <text x="808" y="322" textAnchor="middle" fontSize="10" fontWeight="600" fill="#142840">
        MES
      </text>
      <line
        x1="780"
        y1="313"
        x2="725"
        y2="270"
        stroke="#142840"
        strokeWidth="1"
        markerEnd="url(#arr-1a)"
      />
      <text
        x="680"
        y="395"
        textAnchor="middle"
        fontSize="11"
        fontWeight="600"
        fill="#142840"
        fontStyle="italic"
      >
        Apps are commodity. Data is sovereign.
      </text>
      <text x="680" y="410" textAnchor="middle" fontSize="11" fill="#7A756A">
        Vendor change = commodity decision.
      </text>
      <text
        x="450"
        y="445"
        textAnchor="middle"
        fontSize="11.5"
        fill="#142840"
        fontWeight="500"
        letterSpacing="0.5"
      >
        Sovereignty over data and integrations is structural, not negotiated.
      </text>
    </svg>
  );
}
