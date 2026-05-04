export type PluginShape = "Embedded" | "Fractional" | "Agentics" | "Diagnostic-only";

export type PhaseEntry = {
  code: string;
  name: string;
  sprints: string;
  durationMonths: number;
  type: "pre" | "normal" | "go-live" | "stable" | "post";
  whatHappens: string;
  /** Engagement shapes that have entry-points at this phase */
  pluginShapes: PluginShape[];
  /** One-liner trigger conditions reader uses to recognize themselves at this phase */
  trigger?: string;
  /** Stubs in k2s/idigdata/positioning/articles/ that map to this phase */
  relatedStubs: { code: string; title: string }[];
  /** Atlas-level callout for phases where Rob doesn't enter net-new (P4 SOPs, P6-P7 closing) */
  callout?: string;
  /** Which pro article this phase feeds */
  feedsArticle?: { slug: string; title: string };
};

export const PHASES: PhaseEntry[] = [
  {
    code: "P0",
    name: "Pre-contract recon",
    sprints: "Pre-Sprint 1",
    durationMonths: 2,
    type: "pre",
    whatHappens:
      "Recon and research before the contract is signed. Public-records pattern-match plus pre-engagement conversations. The six-constellation diagnostic builds first-cut load reads. Skeleton Systems Map and Beehive Visios drafted from public information. Buyer pattern identified — CFO is universal, the rest of the player set is discovered. By the time the proposal lands, the political layer beneath the org chart is mapped.",
    pluginShapes: ["Diagnostic-only", "Embedded"],
    trigger:
      "A C-level needs a structural read on a transformation candidate before the engagement decision lands. Or — a board director or PE operating partner wants pattern-match diligence on a portfolio company.",
    relatedStubs: [
      { code: "02", title: "The six constellations" },
      { code: "06", title: "Stakeholder engagement (Phase 0 player-set discovery)" },
      { code: "09", title: "Business System Transformation as integrated delivery (the spine)" },
    ],
    feedsArticle: {
      slug: "transformation-and-the-people-of-it",
      title: "What business transformation actually is — and who it's done with",
    },
  },
  {
    code: "P1",
    name: "Discovery + funding case",
    sprints: "Sprints 1–4",
    durationMonths: 2,
    type: "normal",
    whatHappens:
      "Full current-state map plus co-created future-state. First-cut constellation and cluster maps for all six (MDM near-locked at sprint-4 close). Working beehive — taskforces per departmental lane. MDM big three under build (customers, vendors, items + locations). Process-event work begun. Board-defensible multi-year capital program funding artifact. 30-60-90 to C-suite. The four-sprint output set is what Big-4 takes four to six months to produce with a 12-person team.",
    pluginShapes: ["Embedded", "Fractional"],
    trigger:
      "A board-approved transformation needs to start with a discovery and funding artifact that is real. Or — the people-fabric layer has been an afterthought and the beehive needs to stand up before execution wave one fires.",
    relatedStubs: [
      { code: "04", title: "The beehive" },
      { code: "03", title: "MDM is the C-suite decision nobody owns (P1–P2 build)" },
      { code: "07", title: "Data as commodity (P1–P2 architectural fork)" },
    ],
    feedsArticle: {
      slug: "transformation-and-the-people-of-it",
      title: "What business transformation actually is — and who it's done with",
    },
  },
  {
    code: "P2",
    name: "Architecture lock",
    sprints: "Sprints 5–8",
    durationMonths: 2,
    type: "normal",
    whatHappens:
      "Common Data Model architecture locked. Constellation maps mature to near-locked. Beehive design ratified at the architectural layer. Agile-fall mode plan locked. Vendor selections committed — vendor-as-lane containment baked in from the start. Cross-C-suite sign-off on architecture, MDM ownership, and Phase 3-6 sequencing. The architectural fork ratified as a board-defensible decision under ASC 350-40 funding.",
    pluginShapes: ["Fractional"],
    trigger:
      "Master data management has been on the IT roadmap for two years and hasn't moved. The C-suite is talking past each other on data because nobody owns the common ground. The CFO needs the funding mechanism resolved at the same table as the master-data ownership map.",
    relatedStubs: [
      { code: "03", title: "MDM is the C-suite decision nobody owns" },
      { code: "07", title: "Data as commodity (the architectural fork lock)" },
    ],
    feedsArticle: {
      slug: "transformation-and-the-people-of-it",
      title: "What business transformation actually is — and who it's done with",
    },
  },
  {
    code: "P3",
    name: "Data core + people fabric",
    sprints: "Sprints 9–21",
    durationMonths: 6,
    type: "normal",
    whatHappens:
      "MDM operational. CDM alive. Beehive taskforces operating by functional system group. Executive standoffs resolved one at a time. IT-function rebuild underway. Tier-1 systems audit and replacement plan locked. The data core comes alive before the systems landscape changes — the new tier-1 systems will feed the data core, not the other way around. The sequence IS the IP.",
    pluginShapes: ["Fractional", "Embedded"],
    trigger:
      "An ERP implementation is running partner-led at billable hours. Project length keeps stretching. Scope keeps expanding. The vendor partner is running the show at billable economics. Or — pure-agile or pure-waterfall methodology religion is producing visible drift against the work-type signal.",
    relatedStubs: [
      { code: "01", title: "Agile-fall: hybrid PM" },
      { code: "10", title: "The vendor-partner trap" },
    ],
    feedsArticle: {
      slug: "the-mechanics",
      title: "The mechanics — PM, budget, capital structure",
    },
  },
  {
    code: "P4",
    name: "Tier-1 systems + CDM at scale + SOP generation",
    sprints: "Sprints 22–34",
    durationMonths: 6,
    type: "normal",
    whatHappens:
      "ERP, WMS, and CRM consolidation or replacement runs through build, test, and UAT. Common Data Model fully operational at scale. Vendor portfolio rationalized. Vendor lock-in eliminated. New systems plug into the data core. Agentics integrated with the tier-1 landscape by design, not bolted on. SOP library auto-generates at the Business Process Step level from the validated proof set — branded, version-controlled, ready for go-live.",
    pluginShapes: [],
    callout:
      "*SOPs auto-generate during UAT as a byproduct of validation cycles. Documentation that doesn't drift — the operator-adoption holy grail nobody else has solved.* The library exists before go-live, not after. No two-month documentation backlog.",
    relatedStubs: [],
    feedsArticle: {
      slug: "the-mechanics",
      title: "The mechanics — PM, budget, capital structure",
    },
  },
  {
    code: "P5",
    name: "Go-live + agentics at scale",
    sprints: "Sprints 35–47",
    durationMonths: 4,
    type: "go-live",
    whatHappens:
      "Mock go-lives plus pressure testing. Production cutover. Tier-1 systems landscape live in production. Five domain-experienced agentic apps live in production at scale — operational decisioning, institutional-knowledge retrieval, document-to-structured-data intake, cross-system orchestration, operator decision-support. SOP library already in place from P4 validation. Operators using the new fabric daily. The CEO's AI claim becomes operationally real because the operating fabric is operationally real.",
    pluginShapes: ["Agentics"],
    trigger:
      "An operator has been pitched agentics by hand-wavers and wants production deployment, not pilots. The data foundation is mature enough to support production agents — or the engagement runs as agentics stacked on Embedded or Fractional with the data foundation deployed concurrently.",
    relatedStubs: [
      { code: "05", title: "Applied agentics in mid-market" },
    ],
    feedsArticle: {
      slug: "applied-agentics",
      title: "Applied agentics",
    },
  },
  {
    code: "P6",
    name: "Adoption + handoff",
    sprints: "Sprints 48–55",
    durationMonths: 2,
    type: "stable",
    whatHappens:
      "Frameworks documented; registers handed off. Training delivered to the operational CIO and in-house IT using the BOSS-generated SOP library. BOSS substrate handed off — open-source, client-owned. Staleness loop institutionalized so SOPs stay current as a side effect of operating the fabric. Cap-treatment discipline transferred to the receiving CFO. No managed-services tail.",
    pluginShapes: [],
    callout:
      "*Graceful handoff. The framework is a permanent capability. Mutual break-clauses become irrelevant because the engagement reaches its natural end with everything transferred.*",
    relatedStubs: [],
    feedsArticle: {
      slug: "the-mechanics",
      title: "The mechanics — PM, budget, capital structure",
    },
  },
  {
    code: "P7",
    name: "Post-engagement: what stays running",
    sprints: "Beyond the engagement window",
    durationMonths: 2,
    type: "post",
    whatHappens:
      "Reference relationship. Optional fractional advisory touch-ins. BOSS community handoff complete. The transformation institutionalizes. The operator moves on. Two years post-engagement, the operating fabric is still maintained because the substrate is in the client's hands and the staleness loop is automatic.",
    pluginShapes: [],
    callout:
      "*SOPs in place. BOSS open-source in the client's IT hands. No managed-services tail. Mutual exit by design. Structurally lean by architecture.*",
    relatedStubs: [],
    feedsArticle: undefined,
  },
];

/** Plug-in entry-point markers — engagement shapes that "enter" at specific phases */
export type PluginEntryPoint = {
  shape: PluginShape;
  phaseCodes: string[]; // phases this entry-point spans
  caption: string;
};

export const PLUGIN_ENTRY_POINTS: PluginEntryPoint[] = [
  {
    shape: "Embedded",
    phaseCodes: ["P0", "P1"],
    caption:
      "Boards, CEOs, and PE bringing in senior leadership for full transformation residency.",
  },
  {
    shape: "Fractional",
    phaseCodes: ["P1", "P2"],
    caption:
      "Re-architect the data core. Unstall MDM. Lever-specific while the in-house CIO stays in seat.",
  },
  {
    shape: "Fractional",
    phaseCodes: ["P3"],
    caption:
      "Vendor-partner-trap rescue. A partner-led implementation is floundering at billable hours; the engagement re-bounds the vendors into lanes.",
  },
  {
    shape: "Agentics",
    phaseCodes: ["P5"],
    caption:
      "Standalone if the data foundation is mature, stacked on Embedded or Fractional if deployed concurrently. Five-app pattern.",
  },
];
