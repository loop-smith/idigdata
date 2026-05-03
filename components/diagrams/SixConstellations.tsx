type Props = { className?: string };

const NAVY = "#142840";
const GOLD = "#FACC15";
const STONE = "#7A756A";
const WARM = "#6B6860";
const CREAM = "#FBF9F4";
const SANS = "system-ui, -apple-system, sans-serif";
const SERIF = "Vollkorn, Cambria, Georgia, serif";

type CardProps = {
  x: number;
  y: number;
  title: string;
  items: string[];
  highlight?: boolean;
  caption?: string;
};

function Card({ x, y, title, items, highlight, caption }: CardProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect width="210" height="190" fill={CREAM} stroke={NAVY} strokeWidth="1.8" rx="2" />
      {highlight ? <rect x="0" y="0" width="210" height="4" fill={GOLD} /> : null}
      <text x="105" y="28" textAnchor="middle" fontWeight="bold" fontSize="11" fill={NAVY} letterSpacing="1.2" fontFamily={SANS}>
        {title}
      </text>
      <line x1="20" y1="42" x2="190" y2="42" stroke={STONE} strokeWidth="0.6" />
      {items.map((item, i) => (
        <text
          key={i}
          x="20"
          y={64 + i * 20}
          fontSize="11"
          fill={NAVY}
          fontFamily={SANS}
        >
          {`·  ${item}`}
        </text>
      ))}
      {caption ? (
        <text x="20" y="174" fontStyle="italic" fontSize="10" fill={WARM} fontFamily={SANS}>
          {caption}
        </text>
      ) : null}
    </g>
  );
}

export default function SixConstellations({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 720 540"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="six-title six-desc"
      className={`w-full h-auto ${className}`}
    >
      <title id="six-title">The six constellations — diagnostic frame</title>
      <desc id="six-desc">
        Six structural domains every mid-market operating company maps into: data architecture,
        operating model, post-M&amp;A consolidation, applied agentics readiness, IT-function
        maturity, change-receptivity. Each carries 5 clusters (sub-elements). Universal frame,
        bespoke fill.
      </desc>

      <text x="360" y="38" textAnchor="middle" fontWeight="bold" fontSize="24" fill={NAVY} fontFamily={SERIF}>
        The six constellations
      </text>
      <text x="360" y="62" textAnchor="middle" fontStyle="italic" fontSize="13" fill={WARM} fontFamily={SANS}>
        Universal frame · bespoke fill · diagnostic in one read
      </text>

      <rect x="35" y="74" width="14" height="4" fill={GOLD} />
      <text x="55" y="78" fontSize="10" fontStyle="italic" fill={WARM} fontFamily={SANS}>
        gold strip = under load this engagement
      </text>

      <Card
        x={35}
        y={90}
        title="DATA ARCHITECTURE"
        highlight
        items={[
          "MDM",
          "Integration topology",
          "Data lake / medallion",
          "Governance model",
          "Vendor-agnostic posture",
        ]}
        caption="Leads Phase 2 architecture"
      />
      <Card
        x={260}
        y={90}
        title="OPERATING MODEL"
        items={[
          "Decision rights",
          "RACI structure",
          "Escalation paths",
          "Sprint cadence",
          "Beehive organization",
        ]}
      />
      <Card
        x={485}
        y={90}
        title="POST-M&A CONSOLIDATION"
        highlight
        items={[
          "Legal entity rationalization",
          "Inherited integration debt",
          "Multi-currency consolidation",
          "Brand architecture",
          "Systems inheritance",
        ]}
        caption="Where the trigger pattern fires"
      />
      <Card
        x={35}
        y={295}
        title="APPLIED AGENTICS READINESS"
        items={[
          "Data-foundation maturity",
          "Governance",
          "Training",
          "Operator empowerment",
          "App-onboarding",
        ]}
      />
      <Card
        x={260}
        y={295}
        title="IT-FUNCTION MATURITY"
        items={[
          "Team capability",
          "Vendor portfolio",
          "Infrastructure posture",
          "Security & cyber",
          "Change cadence",
        ]}
      />
      <Card
        x={485}
        y={295}
        title="CHANGE-RECEPTIVITY"
        items={[
          "Stakeholder appetite",
          "Prior-transformation scar",
          "Sponsor air-cover",
          "Communications discipline",
          "Training-and-adoption",
        ]}
      />

      <line x1="120" y1="510" x2="600" y2="510" stroke={STONE} strokeWidth="0.8" />
      <text x="360" y="528" textAnchor="middle" fontStyle="italic" fontSize="12" fill={WARM} fontFamily={SANS}>
        Phase 1 reads the load on each · MDM near-locked by Sprint 4 · others first-cut
      </text>
    </svg>
  );
}
