// Inline beehive diagram for Article 1 — universal frame, bespoke fill.
// Ported from idigdata_cw/article-01-styled-mockup.html.
type CellProps = {
  x: number;
  y: number;
  label: string;
  sublabel?: string;
  highlight?: boolean;
};

function HexCell({ x, y, label, sublabel = "[lead TBD]", highlight = false }: CellProps) {
  if (highlight) {
    return (
      <g transform={`translate(${x}, ${y})`}>
        <polygon
          points="0,-32 28,-16 28,16 0,32 -28,16 -28,-16"
          fill="#142840"
          stroke="#142840"
          strokeWidth="1.5"
        />
        <rect x="-5" y="-25" width="10" height="10" fill="#FACC15" />
        <text
          x="0"
          y="-2"
          textAnchor="middle"
          fontSize="9.5"
          fontWeight="700"
          fill="#FAFAF7"
        >
          {label}
        </text>
        <text x="0" y="11" textAnchor="middle" fontSize="8" fill="#FACC15" fontStyle="italic">
          {sublabel}
        </text>
      </g>
    );
  }
  return (
    <g transform={`translate(${x}, ${y})`}>
      <polygon
        points="0,-32 28,-16 28,16 0,32 -28,16 -28,-16"
        fill="#FAFAF7"
        stroke="#142840"
        strokeWidth="1.5"
      />
      <text x="0" y="-3" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#142840">
        {label}
      </text>
      <text x="0" y="9" textAnchor="middle" fontSize="8" fill="#7A756A" fontStyle="italic">
        {sublabel}
      </text>
    </g>
  );
}

export default function BeehiveDiagram() {
  const flows: { y: number; label: string; abbr: string }[] = [
    { y: 140, label: "Order to Cash", abbr: "O2C" },
    { y: 184, label: "Plan to Manufacture", abbr: "P2M" },
    { y: 228, label: "Procure to Pay", abbr: "P2P" },
    { y: 272, label: "Data to Reporting", abbr: "D2R" },
    { y: 316, label: "Systems to Support", abbr: "S2S" },
  ];

  const cells: CellProps[] = [
    { x: 330, y: 110, label: "PLM" },
    { x: 390, y: 145, label: "Sales" },
    { x: 450, y: 110, label: "Prod MES" },
    { x: 510, y: 145, label: "Supply Chain" },
    { x: 330, y: 180, label: "EAM" },
    { x: 390, y: 215, label: "WMS" },
    { x: 450, y: 180, label: "ERP", sublabel: "core", highlight: true },
    { x: 510, y: 215, label: "HRIS" },
    { x: 330, y: 250, label: "Compliance" },
    { x: 390, y: 285, label: "Sustain" },
    { x: 450, y: 250, label: "IT / IS" },
    { x: 510, y: 285, label: "Data Svc" },
    { x: 450, y: 320, label: "Finance" },
  ];

  return (
    <svg
      viewBox="0 0 900 580"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: "'Source Sans 3',sans-serif" }}
      role="img"
      aria-label="The beehive — universal frame, bespoke fill"
    >
      <text
        x="450"
        y="32"
        textAnchor="middle"
        fontFamily="Vollkorn,serif"
        fontSize="20"
        fontWeight="600"
        fill="#142840"
      >
        The beehive — universal frame, bespoke fill
      </text>
      <text
        x="450"
        y="54"
        textAnchor="middle"
        fontSize="12"
        fill="#7A756A"
        fontStyle="italic"
      >
        Hexagonal frame is universal across $100M–$750M operating companies. Population is unique to each client.
      </text>
      <text
        x="120"
        y="120"
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fill="#142840"
        letterSpacing="1.5"
      >
        PROCESS FLOWS
      </text>
      <g fontSize="10" fontWeight="600" fill="#142840">
        {flows.map((f) => (
          <g key={f.abbr}>
            <rect
              x="40"
              y={f.y}
              width="160"
              height="34"
              fill="#FAFAF7"
              stroke="#142840"
              strokeWidth="1.2"
              rx="4"
            />
            <text x="120" y={f.y + 15} textAnchor="middle">
              {f.label}
            </text>
            <text
              x="120"
              y={f.y + 27}
              textAnchor="middle"
              fontSize="9"
              fontWeight="400"
              fill="#7A756A"
              fontStyle="italic"
            >
              {f.abbr}
            </text>
          </g>
        ))}
      </g>
      <g fontFamily="Source Sans 3,sans-serif">
        {cells.map((c, i) => (
          <HexCell key={i} {...c} />
        ))}
      </g>
      <text
        x="700"
        y="180"
        fontSize="10"
        fontWeight="700"
        fill="#142840"
        letterSpacing="1.5"
      >
        PROCESS-FLOW RING
      </text>
      <text x="700" y="198" fontSize="10" fill="#7A756A" fontStyle="italic">
        Cross-functional integration where
      </text>
      <text x="700" y="212" fontSize="10" fill="#7A756A" fontStyle="italic">
        flows touch multiple cells.
      </text>
      <text x="700" y="232" fontSize="10" fill="#7A756A" fontStyle="italic">
        Standoffs get brokered at the cells,
      </text>
      <text x="700" y="246" fontSize="10" fill="#7A756A" fontStyle="italic">
        not at the executive layer.
      </text>
      <g transform="translate(40, 410)">
        <rect x="0" y="0" width="820" height="100" fill="#142840" rx="4" />
        <text
          x="20"
          y="28"
          fontSize="11"
          fontWeight="700"
          fill="#FACC15"
          letterSpacing="1.5"
        >
          UNIVERSAL · BESPOKE
        </text>
        <text x="20" y="56" fontSize="13" fill="#FAFAF7" fontStyle="italic">
          The hexagonal structure is universal across $100M–$750M operating companies.
        </text>
        <text x="20" y="76" fontSize="13" fill="#FAFAF7" fontStyle="italic">
          The cell population — leads, SMEs, taskforce membership — is unique to each client.
        </text>
        <text
          x="20"
          y="93"
          fontSize="11"
          fill="#FACC15"
          fontWeight="600"
          letterSpacing="0.5"
        >
          Standard frame. Bespoke fill.
        </text>
      </g>
      <text
        x="450"
        y="555"
        textAnchor="middle"
        fontSize="11.5"
        fill="#142840"
        fontWeight="500"
        letterSpacing="0.5"
      >
        After thirty years, no operator has ever walked in with the beehive already drawn.
      </text>
    </svg>
  );
}
