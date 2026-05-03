type Props = { className?: string };

const HEX_POINTS = "0,-40 34.6,-20 34.6,20 0,40 -34.6,20 -34.6,-20";
const HEX_FILL = "#FBF9F4";
const HEX_STROKE = "#142840";
const NAVY = "#142840";
const GOLD = "#FACC15";
const STONE = "#7A756A";
const WARM = "#6B6860";
const SANS = "system-ui, -apple-system, sans-serif";
const SERIF = "Vollkorn, Cambria, Georgia, serif";

function HexCell({
  x,
  y,
  filled,
  children,
}: {
  x: number;
  y: number;
  filled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <polygon
        points={HEX_POINTS}
        fill={filled ? NAVY : HEX_FILL}
        stroke={HEX_STROKE}
        strokeWidth="1.5"
      />
      {children}
    </g>
  );
}

export default function Beehive({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 600 480"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="beehive-title beehive-desc"
      className={`w-full h-auto ${className}`}
    >
      <title id="beehive-title">The beehive — universal frame</title>
      <desc id="beehive-desc">
        Hexagonal grid of 13 functional system groups in a 4-5-4 honeycomb. ERP at center,
        surrounded by PLM, Sales, HRIS, Compliance, Production MES, Supply Chain, Data Services,
        IT/IS, EAM, WMS, Finance/Accounting, Sustainability. Five process flows ring the
        perimeter.
      </desc>

      <text x="300" y="40" textAnchor="middle" fontWeight="bold" fontSize="24" fill={NAVY} fontFamily={SERIF}>
        The beehive
      </text>
      <text x="300" y="62" textAnchor="middle" fontStyle="italic" fontSize="13" fill={WARM} fontFamily={SANS}>
        Functional system groups · process flows · universal frame
      </text>

      <text x="300" y="100" textAnchor="middle" fontStyle="italic" fontSize="11" fill={WARM} letterSpacing="3" fontFamily={SANS}>
        ORDER TO CASH
      </text>
      <text x="290" y="425" textAnchor="middle" fontStyle="italic" fontSize="11" fill={WARM} letterSpacing="3" fontFamily={SANS}>
        PROCURE TO PAY
      </text>
      <g transform="translate(580, 240) rotate(90)">
        <text x="0" y="0" textAnchor="middle" fontStyle="italic" fontSize="11" fill={WARM} letterSpacing="3" fontFamily={SANS}>
          PLAN TO MANUFACTURE
        </text>
      </g>
      <g transform="translate(20, 240) rotate(-90)">
        <text x="0" y="0" textAnchor="middle" fontStyle="italic" fontSize="11" fill={WARM} letterSpacing="3" fontFamily={SANS}>
          RECORD TO REPORT
        </text>
      </g>

      {/* Row 1 */}
      <HexCell x={186} y={160}>
        <text x="0" y="5" textAnchor="middle" fontSize="11" fontWeight="bold" fill={NAVY} fontFamily={SANS}>PLM</text>
      </HexCell>
      <HexCell x={255.4} y={160}>
        <text x="0" y="5" textAnchor="middle" fontSize="11" fontWeight="bold" fill={NAVY} fontFamily={SANS}>Sales</text>
      </HexCell>
      <HexCell x={324.7} y={160}>
        <text x="0" y="5" textAnchor="middle" fontSize="11" fontWeight="bold" fill={NAVY} fontFamily={SANS}>HRIS</text>
      </HexCell>
      <HexCell x={394} y={160}>
        <text x="0" y="5" textAnchor="middle" fontSize="11" fontWeight="bold" fill={NAVY} fontFamily={SANS}>Compliance</text>
      </HexCell>

      {/* Row 2 */}
      <HexCell x={151.4} y={220}>
        <text x="0" y="-2" textAnchor="middle" fontSize="10" fontWeight="bold" fill={NAVY} fontFamily={SANS}>Production</text>
        <text x="0" y="11" textAnchor="middle" fontSize="10" fontWeight="bold" fill={NAVY} fontFamily={SANS}>MES</text>
      </HexCell>
      <HexCell x={220.7} y={220}>
        <text x="0" y="-2" textAnchor="middle" fontSize="10" fontWeight="bold" fill={NAVY} fontFamily={SANS}>Supply</text>
        <text x="0" y="11" textAnchor="middle" fontSize="10" fontWeight="bold" fill={NAVY} fontFamily={SANS}>Chain</text>
      </HexCell>
      <HexCell x={290} y={220} filled>
        <text x="0" y="-3" textAnchor="middle" fontSize="13" fontWeight="bold" fill={GOLD} fontFamily={SANS}>ERP</text>
        <text x="0" y="13" textAnchor="middle" fontSize="9" fontStyle="italic" fill={GOLD} fontFamily={SANS}>+ CDM</text>
      </HexCell>
      <HexCell x={359.3} y={220}>
        <text x="0" y="-2" textAnchor="middle" fontSize="10" fontWeight="bold" fill={NAVY} fontFamily={SANS}>Data</text>
        <text x="0" y="11" textAnchor="middle" fontSize="10" fontWeight="bold" fill={NAVY} fontFamily={SANS}>Services</text>
      </HexCell>
      <HexCell x={428.6} y={220}>
        <text x="0" y="5" textAnchor="middle" fontSize="11" fontWeight="bold" fill={NAVY} fontFamily={SANS}>IT/IS</text>
      </HexCell>

      {/* Row 3 */}
      <HexCell x={186} y={280}>
        <text x="0" y="5" textAnchor="middle" fontSize="11" fontWeight="bold" fill={NAVY} fontFamily={SANS}>EAM</text>
      </HexCell>
      <HexCell x={255.4} y={280}>
        <text x="0" y="5" textAnchor="middle" fontSize="11" fontWeight="bold" fill={NAVY} fontFamily={SANS}>WMS</text>
      </HexCell>
      <HexCell x={324.7} y={280}>
        <text x="0" y="-2" textAnchor="middle" fontSize="9" fontWeight="bold" fill={NAVY} fontFamily={SANS}>Finance/</text>
        <text x="0" y="11" textAnchor="middle" fontSize="9" fontWeight="bold" fill={NAVY} fontFamily={SANS}>Accounting</text>
      </HexCell>
      <HexCell x={394} y={280}>
        <text x="0" y="5" textAnchor="middle" fontSize="10" fontWeight="bold" fill={NAVY} fontFamily={SANS}>Sustainability</text>
      </HexCell>

      <text x="300" y="370" textAnchor="middle" fontStyle="italic" fontSize="11" fill={WARM} letterSpacing="3" fontFamily={SANS}>
        SYSTEMS · DATA · SECURITY
      </text>

      <line x1="160" y1="455" x2="440" y2="455" stroke={STONE} strokeWidth="0.8" />
      <text x="300" y="473" textAnchor="middle" fontStyle="italic" fontSize="12" fill={WARM} fontFamily={SANS}>
        Standard frame · bespoke fill · every $250M–$1B operating company
      </text>
    </svg>
  );
}
