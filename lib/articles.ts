export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  /** 1-line thesis used on /articles index card and home preview */
  thesis: string;
  /** Opening paragraphs after the byline divider; final paragraph should end with the thesis in italics */
  opening: string[];
  sections: ArticleSection[];
  /** "Why this matters" closing paragraphs */
  closer: string[];
  /** 2-3 related slugs for cross-references */
  related: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "architectural-fork",
    title: "The architectural fork: vendor-agnostic, data-centric architecture",
    thesis:
      "Vendor-agnostic, data-centric. ERPs become apps.",
    opening: [
      "Most mid-market businesses run on what their ERP vendor sells them: an ERP-centric architecture. The platform is the system, the data lives inside it, the business is locked to the vendor's data model. *That is the architectural status quo. It is not the only option.* The alternative — vendor-agnostic, data-centric architecture — is real, field-tested, and produces sovereign clients instead of locked-in ones.",
    ],
    sections: [
      {
        heading: "The pattern",
        paragraphs: [
          "Most operating companies in the mid-market run ERP-centric. The data is held captive inside the platform. Master data lives where the vendor decides it lives, in the schema the vendor designed, governed by the vendor's release cadence. M&A integration debt compounds visibly: each acquired business arrives with its own ERP-locked data model, and the integration cost is paid every time another acquisition closes. Reports and dashboards get built around the gaps rather than against a coherent foundation. The pattern is so common that most operators stop noticing it. It feels like the natural shape of business systems. **It is not — it is a vendor business model dressed up as architecture.**",
        ],
      },
      {
        heading: "Why ERP-centric persists",
        paragraphs: [
          "The vendor business model depends on it. Lock-in is recurring revenue. License stacks, implementation fees, support contracts, upgrade cycles, and migration retrofits compound across the customer base on calendars the vendor controls. The implementation partners are paid per hour, on the vendor's framework, against the vendor's roadmap — every incentive in the supply chain points the same direction. Most consultants don't have the muscle to architect a data-centric model; the discipline takes years of operator practice and an explicit point of view. So they paint over ERP-centric architecture with reports, dashboards, and a service tail that protects their billable position. *The structure persists because everyone paid to maintain it benefits from it persisting.*",
        ],
      },
      {
        heading: "The data-centric alternative",
        paragraphs: [
          "A Common Data Model becomes the substrate. Master data — customers, vendors, items, employees, accounts, products, BOMs, locations — lives in a curated, governed layer the client owns. The ERP becomes a consumer and contributor among other apps: CRM, WMS, HRIS, FP&A, MES, EAM, PLM, agentics. Each app reads from and writes to the CDM through bounded interfaces. The client's data is sovereign by structure, not by negotiation. Vendor swap stops being a transformation event and becomes a commodity decision: the BOM lives in the CDM, not in the ERP's tables, so swapping one ERP for another is a connector and migration job — not a re-architecture. **This is the precondition for everything downstream:** master data management at the enterprise level, applied agentics at scale, BOSS as the operating fabric above the application layer.",
        ],
      },
      {
        heading: "What this unlocks",
        paragraphs: [
          "Decades of disparate, expensive data turn from liability into asset. Storage cost amortizes. Integration debt collapses. Risk profile improves because the source of truth is governed, not federated by accident. The data becomes immediately available to every functional system — finance, operations, sales, supply chain, agentics — through one consistent contract. Analytics get faster and cheaper because the upstream is real. Agentic deployments become possible at all because they need a coherent ground truth to read against. **Data sovereignty is the unlock for everything an operator wants AI to actually do for their business.**",
        ],
      },
    ],
    closer: [
      "The architectural fork is the reason a Rob-led engagement produces sovereign clients while partner-led engagements produce locked-in clients. *Same dollars in, fundamentally different exit posture.* The fork isn't a feature decision or a tooling preference — it is the structural choice that determines whether a business owns its data ten years from now. The mechanism — CDM construction discipline, MDM enterprise lock, integration topology, governance model, vendor-lane containment — is detailed in the full document.",
    ],
    related: ["integrated-delivery", "vendor-partner-trap"],
  },
  {
    slug: "integrated-delivery",
    title:
      "Business System Transformation: how PM, stakeholder/change management, and agile-fall run as one delivery discipline",
    thesis:
      "PM, change management, and agile-fall as one practice.",
    opening: [
      "Most $10–15M business system transformations are run as three parallel workstreams: a Project Management track, a Stakeholder and Change Management track, and a methodology track that lurches between agile and waterfall. The PowerPoint shows neat lanes. The execution shows collisions in week eight. Three workstreams that look organized at the kickoff don't compound under load — they compete for the same calendar, the same stakeholders, and the same decision rights. *Run as one integrated discipline, they multiply. Run as three, they collide.*",
    ],
    sections: [
      {
        heading: "The failure mode",
        paragraphs: [
          "Three parallel workstreams that look organized in PowerPoint and collide in week eight of execution. The PM tool doesn't know what change-management is dealing with on the ground. Change-management cadence doesn't know which mode this sprint is running in. The agile-fall mode-switch doesn't know what the stakeholder map is signaling. Decisions stall because each workstream waits on context the others have but never share. The vendor partners run their own methodology in a fourth track. By month three, the program has four parallel calendars, four sets of risks, four sets of decisions, and one operator team trying to run a real business while attending all of them. **Drift sets in. Adoption decays. Outcomes recede.**",
        ],
      },
      {
        heading: "The three disciplines",
        paragraphs: [
          "**Project Management** — sprint cadence, dependencies, milestones, register state. The discipline that makes the work visible. **Stakeholder and Change Management** — communications, training, adoption, resistance maps, executive alignment. The discipline that makes the work land. **Agile-Fall** — knowing which methodological mode to run, when, by work type. Sprint when discovery and configuration tuning demand it. Waterfall when manufacturing flow, regulated data, and engineered-product CPQ demand it. Each of the three fails alone. PM without change management ships the wrong thing perfectly. Change management without PM ships nothing. Agile-fall without integration becomes religion or chaos. *The disciplines are necessary, individually insufficient, and only valuable together.*",
        ],
      },
      {
        heading: "The integration claim",
        paragraphs: [
          "PM cadence reads from change-management readiness — the sprint plan reflects what stakeholders can absorb this week, not just what the backlog says is next. Agile-fall mode-switch reads from the stakeholder map — high-resistance work doesn't go agile because iteration accelerates resistance; high-discovery work doesn't go waterfall because prescription kills learning. Register state is visible across all three disciplines and across the vendor lanes — one shared persistence layer, not three parallel spreadsheets. The compound integration is what makes 24-month transformations land instead of decay. The work compounds across phases instead of starting over each time a workstream rotates leadership. **The transformation institutionalizes by construction, not by heroics.** This is the operating shape of the practice — not a methodology, a discipline.",
        ],
      },
      {
        heading: "The substrate point",
        paragraphs: [
          "Integration only works on a persistence substrate. Without BOSS — or some functional equivalent of register-driven persistence — the three disciplines fall back into parallel workstreams because there is no shared state for them to read from. Spreadsheets, PowerPoints, and Confluence pages don't carry forward. They go stale and get re-derived. The substrate is what makes the disciplines stay integrated through 18-24 month cycles, leadership changes, vendor-lane rotations, and scope expansions. *No persistence layer, no integrated delivery — at best, project management theater.*",
        ],
      },
    ],
    closer: [
      "The buyer-verifiable test is simple: can this consultant point to transformations they've actually landed end-to-end? Hand-wavers can't. The integrated-delivery discipline is the reason mature operators land what others can't — and it is also why discount-priced consulting routinely fails to compound, regardless of the brand on the deck or the dollars on the engagement. The full document details the mechanism — how PM cadence reads from change management, how agile-fall mode reads from the stakeholder map, how the substrate makes inheritance work across phases, leadership changes, and vendor rotations.",
    ],
    related: ["vendor-partner-trap", "agile-fall"],
  },
  {
    slug: "vendor-partner-trap",
    title:
      "The vendor-partner trap: why most ERP implementations fail to deliver outcomes",
    thesis:
      "Why most ERP implementations fail to deliver outcomes.",
    opening: [
      "Most $10–15M ERP and business-system implementations fail to deliver the outcome the operator paid for. Not because the platform was wrong, the data was bad, or the team was weak — those are downstream symptoms. They fail because they were run by the wrong organism: a licensed VAR or systems-integrator partner running the entire program at billable hours. *Vendor-partner-led implementations optimize for partner economics, not client outcomes.* The escape — and the only escape — is structural.",
    ],
    sections: [
      {
        heading: "The structural failure mode",
        paragraphs: [
          "**Wrong organism.** Vendor-implementation specialists are not transformation specialists. They install the platform, they don't change the operating model. **Wrong economic incentive.** Billable-hours partners get paid more for slower, longer, more iterative engagements. Speed and decisiveness cost the partner revenue. **Wrong staffing.** Senior consultants are shared across multiple clients; junior consultants do most of the actual work. The brand on the deck is not the brand on the ground. **Wrong framework.** Vendor-economics dressed up as transformation framework — methodology that conveniently produces line-item add-ons. **Wrong governance.** Partner consultants cannot govern C-suite standoffs, executive resistance, or vendor-against-vendor lane disputes. They have no political capital with the buying organization and no incentive to spend it if they did. *The failures stack. The transformation drifts. The check still gets cashed.*",
        ],
      },
      {
        heading: "The transformation-above-vendors model",
        paragraphs: [
          "A different organism runs the project. Robert plugs in as embedded transformation lead — flat weekly rate, idigdata's framework, BOSS as the persistence substrate. The vendor partners run their lanes inside the engagement: the Acumatica VAR runs the Acumatica configuration lane, the Workday partner runs the HRIS lane, the WMS vendor runs the WMS lane. Each is contained to domain expertise. None of them runs the program. **BOSS holds the substrate.** Governance lives at the transformation layer — decisions traced, register-driven, audit-clean — and rolls down to vendor lanes through bounded interfaces. The vendors stay in their lanes because the structural shape of the engagement makes lane creep visible. *The result is a transformation that compounds, not a vendor program that drifts.*",
        ],
      },
      {
        heading: "The buyer-verifiable claim",
        paragraphs: [
          "Ask any failed ERP project who was running the show. Almost always it was the vendor partner. Ask any successful complex transformation. Almost always it was a transformation leader operating above the vendors. The pattern is so consistent it is no longer arguable — it is structural. *The organism matters more than the platform.* The platform decision deserves attention; the organism decision deserves more. Most operators evaluating a $10M program spend ninety percent of their pre-engagement diligence on the platform and ten percent on the organism running it. The ratio should invert.",
        ],
      },
      {
        heading: "The economics implication",
        paragraphs: [
          "The transformation-above-vendors model is often **cheaper** on the external program: fewer billable hours from senior partners, contained vendor-lane scopes, no managed-services tail. It is dramatically more favorable on P&L treatment when capitalization tracking is built in correctly — build-phase costs capitalize to the balance sheet under ASC 350-40, and post-go-live the asset moves to a ten-year depreciation schedule. The CFO doesn't take the full hit during the build years; the impact smooths over a decade. The Big-4 transformation practices have the same structural problems with bigger brand and bigger fees — the organism failure mode does not get smaller as the firm gets bigger. **A handful of operators can deliver this end-to-end.**",
        ],
      },
    ],
    closer: [
      "CFO wins on three axes: lower total cost, higher outcome certainty, smoothed P&L impact. *Three CFO wins, one structural choice.* The full document details the contract structure for vendor-as-lane containment, the BOSS configuration for vendor-lane orchestration, and the governance trace pattern that keeps decisions auditable across an 18-month build. None of it is in a vendor's deck. None of it is in a Big-4 framework. It exists in BOSS because thirty years of doing the work made it necessary.",
    ],
    related: ["integrated-delivery", "architectural-fork"],
  },
  {
    slug: "agile-fall",
    title: "Agile-fall: hybrid PM for complex business system transformation",
    thesis: "Hybrid PM for complex business system transformation.",
    opening: [
      "Pure agile fails in complex business-system transformation because plan-to-manufacture flows, complex CPQ logic, regulated data, and manufacturing sequence have hard physics-of-flow dependencies that don't iterate around. Pure waterfall fails because mid-market clients can't afford 18-month big-bang projects with no working surface area until month seventeen. The hybrid — waterfall where physics demands it, agile where discovery demands it — is the answer. *Not as a compromise. As a discipline. Built into BOSS.*",
    ],
    sections: [
      {
        heading: "Where agile breaks",
        paragraphs: [
          "Sprint into a P2M (plan-to-manufacture) wall and the bill of materials, the routing, the manufacturing constraints, and the cost-roll structure don't iterate. The BOM either reconciles or it doesn't. The routing either matches the floor or production stops. CPQ logic for an engineered product cannot be MVP'd — the rules either price the product correctly or they ship a wrong quote. Regulatory data for a regulated industry — pharmaceutical, food, beverage, cannabis — cannot be sprinted: compliance is binary. Sales orders that flow into production through complex configuration cannot be discovered iteratively without producing a backlog of broken orders that has to be unwound at the end of the project. *Agile-religion implementations sprint into these walls and pretend the wall isn't there.*",
        ],
      },
      {
        heading: "Where waterfall breaks",
        paragraphs: [
          "Process discovery requires conversation, not prescription. The operator team knows what the business actually does; they don't know it in the structured form a prescriptive design needs. Stakeholder consensus requires iteration — the executive team aligns on a direction by living with a working version, not by signing off on a 200-page document up front. Configuration tuning requires test-and-learn cycles — the right way to model a discount structure or a credit hold workflow emerges from running it against real transactions. Agentic deployment is iterative by nature — the agent's behavior in production is the spec, and the spec gets refined by running. **Waterfall makes these dynamics impossible.**",
        ],
      },
      {
        heading: "The mode-switching discipline",
        paragraphs: [
          "Knowing which mode to run, when, by work type. Manufacturing flow: waterfall. Process discovery: agile. Data architecture lock and master data structure: waterfall. Configuration tuning and workflow design: agile. Regulatory compliance: waterfall. Adoption and training: agile. Agentic build: agile. Cutover sequencing: waterfall. Each work type carries an inherent mode signal — read it correctly and the discipline writes itself. The hybrid is not a compromise between two methodologies; it is a discipline of recognizing which mode each work type needs and switching cleanly between them as the program crosses work-type boundaries. *Most consultants don't switch — they pick a religion and ride it through every work type, and the work types they got wrong drift.*",
        ],
      },
      {
        heading: "Why integration matters",
        paragraphs: [
          "Agile-fall is not a standalone methodology. It is one of three disciplines — Project Management, Stakeholder/Change Management, and Agile-Fall mode-switching — that have to run as one integrated practice. The mode-switching decisions read from the stakeholder map (high-resistance work doesn't go agile, high-discovery work doesn't go waterfall). The sprint cadence reads from agile-fall mode for this sprint. The change-management plan reads from PM cadence. **Run together, the disciplines compound. Run apart, they collide.** Integration is not a nice-to-have; it is the operating shape — and the operating shape is what determines whether the program lands or drifts in the second twelve months, after the kickoff energy is gone and the work is grinding.",
        ],
      },
    ],
    closer: [
      "Anyone who has been burned by an agile-religion implementation that sprinted into a P2M wall recognizes the failure mode immediately. *Anyone who has watched a waterfall program die in month thirteen does too.* The full document details the mode-switching decision tree by work type, the BOSS integration with sprint cadence, and the operator-side training material that makes agile-fall executable by the client team after the engagement closes.",
    ],
    related: ["integrated-delivery", "six-constellations"],
  },
  {
    slug: "six-constellations",
    title: "The six constellations: why every business's systems map into one frame",
    thesis: "Same structure, different surface, every time.",
    opening: [
      "After thirty years and fifty-plus mid-market business-system transformations across construction, manufacturing, distribution, services, beverage, cannabis-and-wellness, and beyond, one observation has held without exception: every business's systems flow through six constellation categories. *Same structure, different surface, every time.* All businesses are uniquely standard — the operating frame is universal, the population of each constellation is unique. This is the productized-yet-bespoke claim that lets a senior operator collapse months of diagnostic work into weeks.",
    ],
    sections: [
      {
        heading: "The frame",
        paragraphs: [
          "Six constellations: **Data architecture** — master data, common data model, MDM maturity, governance. **Operating model** — functional systems, process flows (Order to Cash, Plan to Manufacture, Procure to Pay, Record to Report, Systems/Data/Security), departmental cadence. **Post-M&A consolidation** — integration debt, target operating model gap, system rationalization backlog. **Applied agentics readiness** — data foundation maturity, deployment substrate, governance for agent action. **IT-function maturity** — capability, capacity, governance, posture vs. business-systems demand. **Change-receptivity** — leadership alignment, executive air cover, organizational appetite. Each carries its own clusters — sub-elements that fire under load. The frame is small enough to hold in one mental model, large enough to cover any mid-market operating company in the strike zone.",
        ],
      },
      {
        heading: "The \"uniquely standard\" claim",
        paragraphs: [
          "The structural frame is universal across mid-market operating companies in the strike zone — roughly $250M to $1B revenue, multi-functional, often post-M&A, often with a complex product or service mix. The six constellations are present in every one. The **population** of each constellation is unique to each client — which specific master-data domains are most fragmented, which functional groups are most under-resourced, which acquisitions never integrated, which process flows have the most workarounds. *That is the productized-yet-bespoke claim.* The frame is the product. The diagnostic per-engagement is the bespoke fill. The combination is what allows a senior operator to walk in with a structural read and walk out two weeks later with a population-grade map.",
        ],
      },
      {
        heading: "Why the frame collapses diagnostic time",
        paragraphs: [
          "Knowing the frame collapses diagnostic time from months to weeks. A senior operator can read the load on each constellation in pre-engagement research — public filings, executive interviews, vendor portfolio inspection, M&A history. By Phase 1 close (~8 weeks into an engagement), first-cut maps for all six constellations are built, with the data-architecture cluster (MDM) at near-locked depth. A consultant without the frame has to discover the structure of the problem and the population of the problem simultaneously — a months-long process that delays the actual transformation. *The frame separates structure-discovery from population-discovery, and structure is already known.* This is the operating leverage of thirty years of practice.",
        ],
      },
      {
        heading: "Worked example pattern",
        paragraphs: [
          "For any prospect, hypothesize which constellations are under load. Post-M&A consolidation plus data-architecture plus operating-model commonly fire together — three acquisitions never integrated, master data fragmented across four ERPs, functional groups duplicated. Agentic-readiness commonly fires when the AI claim has outpaced the data foundation — leadership has committed to AI in earnings calls but the upstream data is too fractured to feed an agent. Change-receptivity fires under PE-backed timelines — the appetite is there, the alignment isn't. **Hypothesize, validate, prioritize.** The first conversation reads which constellations are loaded; the engagement maps the population. The frame is the leverage. The population is the work. The order matters: structure first, fill second — never both at once.",
        ],
      },
    ],
    closer: [
      "The frame is what makes the diagnostic conversation feel different. *Most consultants walk in with a generic checklist; a senior operator walks in with a structural read.* The buyer feels the difference in the first thirty minutes. The full document details the per-constellation diagnostic question banks, scoring rubrics, and cross-constellation interaction patterns — including which combinations of constellation-loads predict which transformation shapes (full residency vs. fractional vs. agentics-only) and which dollar ranges.",
    ],
    related: ["beehive", "integrated-delivery"],
  },
  {
    slug: "beehive",
    title: "The beehive: organizing the people side of transformation",
    thesis: "Organizing the people side of transformation.",
    opening: [
      "Most transformations fail at the people layer, not the technology layer. The platform configures, the data migrates, the integrations connect — and the operating model never lands because the people side was an afterthought. The beehive is the organizing model for the people side: taskforces of leads and SMEs grouped by departmental functional system, structured as a hexagonal grid, ringed by process flows. *Real, operator-tested across many businesses. Productized into BOSS.* The frame works because it respects how mid-market operating companies actually run.",
    ],
    sections: [
      {
        heading: "The structure",
        paragraphs: [
          "A hexagonal grid of functional system groups — PLM, Sales, Production MES, Supply Chain, EAM, WMS, HRIS, ERP, Compliance, Sustainability, IT/IS, Data Services, Finance/Accounting — ringed by five process flows: Order to Cash, Plan to Manufacture, Procure to Pay, Record to Report, and Systems/Data/Security. Each cell holds a taskforce of leads and SMEs accountable for the functional system in scope. Adjacent cells share workstreams across the cell boundary. The process-flow ring runs around the grid and surfaces cross-cell integration points where the flows touch multiple functional systems. *The structure is geometric, deliberate, and load-bearing.* It is not an org chart. It is the operating cadence of a transformation: who shows up to which working session, who owns which decision, who escalates to whom.",
        ],
      },
      {
        heading: "Uniquely standard",
        paragraphs: [
          "The hexagonal **structure** is universal across $250M–$1B operating companies. The **population** is unique. Which specific people fill which cells, which workarounds each cell has accumulated, which cross-cell tensions are dormant and which are active, which leads have political capital and which don't — all population-level. The structure is real in the operations whether the operator has drawn it or not; the cells exist by function whether or not anyone has named them. The transformation makes the structure explicit and runs against it deliberately. **Standard frame, bespoke fill.** This is the same productized-yet-bespoke pattern that runs through every load-bearing element of the practice.",
        ],
      },
      {
        heading: "Why agile-pods fail",
        paragraphs: [
          "Generic taskforce templates fail because the structure has to be respected and the population has to be earned. Pods spun up without the structural frame devolve into disconnected work — the marketing pod, the operations pod, the IT pod, each running its own cadence, each missing the cross-cell flows that the process ring carries. *The pod model collapses the structure into a soft hierarchy and loses the geometric integrity that makes the beehive work.* The hexagonal grid, by contrast, holds tension across cells deliberately — and the tensions are where the real transformation work lives.",
        ],
      },
      {
        heading: "The 30-year evidence",
        paragraphs: [
          "*\"After 30 years I've never once walked into a company where systems, common data structures, and processes were defined.\"* The hexagonal frame is real in the operation whether anyone has drawn it or not — the cells exist by function, the flows exist by transaction. Almost none of the companies have it explicitly defined as a living artifact. The beehive makes it explicit, and BOSS keeps it living after the engagement ends — the cells map to BOSS structures, the process ring maps to register orchestration, the leads and SMEs are persistent identities in the system. **The implicit becomes explicit, and the explicit stays maintained.** Most operators recognize the cells the moment they see the grid drawn — the frame names something they already feel.",
        ],
      },
    ],
    closer: [
      "Making the implicit explicit, then maintaining it through BOSS as the operating fabric, is what idigdata's transformation arc actually delivers. *Platform deployments install software; the beehive deploys an operating shape.* The full document details the cell-by-cell mapping protocol, the taskforce-formation discipline (lead selection, SME nomination, cross-cell assignment rules), and the stakeholder-mapping methodology that the beehive carries — including the resistance-pattern signals that fire from specific cell positions on the grid.",
    ],
    related: ["six-constellations", "integrated-delivery"],
  },
];

export const ARTICLE_SLUGS = ARTICLES.map((a) => a.slug);

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getRelatedArticles(slugs: string[]): { slug: string; title: string }[] {
  return slugs
    .map((s) => ARTICLES.find((a) => a.slug === s))
    .filter((a): a is Article => Boolean(a))
    .map((a) => ({ slug: a.slug, title: a.title }));
}
