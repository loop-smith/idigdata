type Props = { className?: string };

const NAVY = "#142840";
const GOLD = "#FACC15";
const STONE = "#7A756A";
const WARM = "#6B6860";
const CREAM = "#FBF9F4";
const SANS = "system-ui, -apple-system, sans-serif";
const SERIF = "Vollkorn, Cambria, Georgia, serif";

type SprintBoxProps = {
  x: number;
  label: string;
  caption: string;
  highlight?: boolean;
};

function SprintBox({ x, label, caption, highlight }: SprintBoxProps) {
  return (
    <>
      <rect x={x} y="0" width="145" height="36" fill={CREAM} stroke={NAVY} strokeWidth="1.5" rx="2" />
      {highlight ? <rect x={x} y="0" width="145" height="3" fill={GOLD} /> : null}
      <text x={x + 72.5} y="22" textAnchor="middle" fontWeight="bold" fontSize="11" fill={NAVY} fontFamily={SANS}>
        {label}
      </text>
      <text x={x + 72.5} y="32" textAnchor="middle" fontStyle="italic" fontSize="9" fill={WARM} fontFamily={SANS}>
        {caption}
      </text>
    </>
  );
}

type StoryCardProps = {
  x: number;
  title: string;
  items: string[];
  output: string;
};

function StoryCard({ x, title, items, output }: StoryCardProps) {
  return (
    <g transform={`translate(${x}, 70)`}>
      <rect x="0" y="0" width="180" height="135" fill={CREAM} stroke={STONE} strokeWidth="1" rx="2" />
      <rect x="0" y="0" width="6" height="135" fill={NAVY} />
      <text x="14" y="18" fontWeight="bold" fontSize="10" fill={NAVY} letterSpacing="1" fontFamily={SANS}>
        {title}
      </text>
      {items.map((item, i) => (
        <text key={i} x="14" y={42 + i * 20} fontSize="11" fill={NAVY} fontFamily={SANS}>
          {`·  ${item}`}
        </text>
      ))}
      <text x="14" y="122" fontStyle="italic" fontSize="10" fill={WARM} fontFamily={SANS}>
        {output}
      </text>
    </g>
  );
}

export default function SprintRoadmap({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 720 540"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="sprint-title sprint-desc"
      className={`w-full h-auto ${className}`}
    >
      <title id="sprint-title">Sprint roadmap — task / story / sprint</title>
      <desc id="sprint-desc">
        Two-level zoom showing Phase 1 broken into 4 sprints, with Sprint 1 expanded to show 3
        stories and their tasks. Persistence layer at bottom carries state from one sprint to
        the next.
      </desc>

      <text x="360" y="38" textAnchor="middle" fontWeight="bold" fontSize="24" fill={NAVY} fontFamily={SERIF}>
        Sprint roadmap
      </text>
      <text x="360" y="62" textAnchor="middle" fontStyle="italic" fontSize="13" fill={WARM} fontFamily={SANS}>
        Task · story · sprint · phase — every level structured · nothing lost between
      </text>

      <text x="60" y="100" fontSize="10" fontWeight="bold" fill={WARM} letterSpacing="1.5" fontFamily={SANS}>
        PHASE 1 — DISCOVERY · 4 SPRINTS · ~52 DAYS
      </text>

      <g transform="translate(60, 112)">
        <SprintBox x={0} label="Sprint 1" caption="Onboarding" highlight />
        <SprintBox x={150} label="Sprint 2" caption="Walk-the-floor" />
        <SprintBox x={300} label="Sprint 3" caption="Constellation builds" />
        <SprintBox x={450} label="Sprint 4" caption="30-60-90 to C-suite" />
      </g>

      <line x1="60" y1="148" x2="60" y2="180" stroke={NAVY} strokeWidth="1" strokeDasharray="3,3" />
      <line x1="205" y1="148" x2="660" y2="180" stroke={NAVY} strokeWidth="1" strokeDasharray="3,3" />

      <g transform="translate(60, 185)">
        <rect x="0" y="0" width="600" height="270" fill={CREAM} stroke={NAVY} strokeWidth="1.8" rx="2" />

        <text x="20" y="24" fontWeight="bold" fontSize="12" fill={NAVY} letterSpacing="1.2" fontFamily={SANS}>
          SPRINT 1 — DAYS 1–13
        </text>
        <text x="580" y="24" textAnchor="end" fontStyle="italic" fontSize="10" fill={WARM} fontFamily={SANS}>
          3 stories · 12 tasks · 1 register
        </text>

        <line x1="20" y1="40" x2="580" y2="40" stroke={STONE} strokeWidth="0.5" />
        <text x="20" y="54" fontSize="9" fill={WARM} fontFamily={SANS}>Day 1</text>
        <text x="300" y="54" textAnchor="middle" fontSize="9" fill={WARM} fontFamily={SANS}>Day 7</text>
        <text x="580" y="54" textAnchor="end" fontSize="9" fill={WARM} fontFamily={SANS}>Day 13</text>

        <StoryCard
          x={20}
          title="STORY · ONBOARDING"
          items={[
            "Badge / accounts / orient",
            "First 1:1 with each C-level",
            "Operator tour (3 sites)",
            "Skeleton Visios on Day 3",
          ]}
          output="Output: trust posture v1"
        />
        <StoryCard
          x={210}
          title="STORY · GROUND-TRUTH"
          items={[
            "Systems Register update",
            "Beehive cell population",
            "Integration topology read",
            "MDM hypothesis v1",
          ]}
          output="Output: registers ~70%"
        />
        <StoryCard
          x={400}
          title="STORY · STAKEHOLDERS"
          items={[
            "Political map kickoff",
            "CFO weekly cadence set",
            "CIO augment-frame talk",
            "Operator truth-source ID",
          ]}
          output="Output: map v1 (private)"
        />

        <rect x="20" y="220" width="560" height="32" fill={NAVY} rx="2" />
        <text x="32" y="240" fontWeight="bold" fontSize="10" fill={GOLD} letterSpacing="1.5" fontFamily={SANS}>
          PERSISTENCE LAYER
        </text>
        <text x="160" y="240" fontStyle="italic" fontSize="11" fill={CREAM} fontFamily={SANS}>
          no data lost · every output flows into Sprint 2 as input · registers compound
        </text>
      </g>

      <line x1="120" y1="490" x2="600" y2="490" stroke={STONE} strokeWidth="0.8" />
      <text x="360" y="510" textAnchor="middle" fontStyle="italic" fontSize="12" fill={WARM} fontFamily={SANS}>
        55 sprints across 24 months · each one structured like this · the substrate carries it
      </text>
    </svg>
  );
}
