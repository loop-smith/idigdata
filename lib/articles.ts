/**
 * Article landing-page schema (Phase 1: IP-gated distribution).
 *
 * Body content is server-only and lives at content/articles/*.md, loaded
 * via lib/articles-body.ts. This module exposes only the public-safe
 * landing data — abstract, what-you-learn, who-it-for, key quote,
 * cross-links — that the public landing page renders.
 */

export type CrossLinkCard = {
  slug: string;
  badge: string;
  title: string;
  description: string;
};

export type AtlasCard = {
  title: string;
  description: string;
};

export type ArticleHeroKey =
  | "architectural-fork"
  | "integrated-delivery"
  | "framework-foundation";

export type Article = {
  slug: string;
  title: string;
  /** Italic deck under the H1 — engagement-pair framing. */
  subtitle: string;
  /** Hex-mark badge label (e.g., "Article 1 · Lens 1 of 2"). */
  pairBadge: string;
  readingTimeMin: number;
  /** "The playbook" or "The rare credential". */
  category: string;
  /** First-paragraph hook from the source markdown — visible publicly. */
  lede: string;
  /** 4–5 sentence summary — visible publicly, used by /articles cards too. */
  abstract: string;
  /** 3–4 bullets — visible publicly. */
  whatYoullLearn: string[];
  /** 3 bullets — visible publicly. */
  whoItsFor: string[];
  /** Anchor sentence — pull-quote treatment on landing. */
  keyQuote: string;
  /** Which hero SVG component to render. */
  heroKey: ArticleHeroKey;
  /** Article 1 has the beehive inline; flag here for the landing template. */
  hasInlineBeehive?: boolean;
  crossLinks: {
    /** The Lens-companion partner article (Article 1 ↔ Article 2). */
    companion?: CrossLinkCard;
    /** Standalone counterpart (Article 3 from Articles 1/2; or Articles 1+2 from Article 3). */
    standalone?: CrossLinkCard;
    /** When the article has TWO substrate articles (Article 3 case), use this in place of companion. */
    substratePair?: [CrossLinkCard, CrossLinkCard];
    atlas: AtlasCard;
  };
};

export const ARTICLES: Article[] = [
  {
    slug: "transformation-and-the-people-of-it",
    title:
      "What business transformation actually is — and who it's done with",
    subtitle:
      "Lens 1 of 2 on the 24-month engagement — the architecture and the people",
    pairBadge: "Article 1 · Lens 1 of 2",
    readingTimeMin: 13,
    category: "The playbook",
    lede:
      "After thirty years and fifty-plus mid-market business-system transformations across construction, manufacturing, distribution, and operations-heavy services, one observation has held without exception: no operator has ever walked into the engagement with systems, common data structures, and processes already defined. That is the market. It is also why most of what gets sold as transformation isn't.",
    abstract:
      "Most board-approval-tier business-system transformations get sold inside a vendor-platform model that locks the client's data inside someone else's product. There is an alternative — structural, field-tested, and operator-owned. This article walks through the architectural fork (data sovereignty vs. vendor lock-in) and the human layer that determines whether the architecture institutionalizes or decays back to baseline. The thesis: stakeholders, the beehive, end users, and change ownership are not separate from the architecture — they are part of what “client-owned” means.",
    whatYoullLearn: [
      "Why most consultants can't reach data sovereignty — and the structural choice that makes it possible",
      "The CFO universal in mid-market buying patterns — and why ASC 350-40 awareness is one of the cleanest qualifying signals",
      "The beehive as the universal frame for the people layer — standard structure, bespoke fill",
      "The three engagement shapes (Embedded · Fractional · Agentics) and which fits which moment",
    ],
    whoItsFor: [
      "Boards, CEOs, and PE operating partners bringing in senior leadership for operating-model change",
      "C-Suite executives modernizing the business-systems landscape after M&A or platform sprawl",
      "Operators in flight who suspect the lock-in model is the structural problem",
    ],
    keyQuote:
      "Sovereignty over data and integrations is structural, not negotiated.",
    heroKey: "architectural-fork",
    hasInlineBeehive: true,
    crossLinks: {
      companion: {
        slug: "the-mechanics",
        badge: "Article 2 · Lens 2",
        title: "The mechanics — PM, budget, capital structure",
        description:
          "The companion lens. How the work gets delivered, governed, and paid for under ASC 350-40.",
      },
      standalone: {
        slug: "applied-agentics",
        badge: "Article 3 · Standalone",
        title: "Applied agentics — agents deployed as a business asset",
        description:
          "The rare credential. Production agents shipping into operations, structurally dependent on this data foundation.",
      },
      atlas: {
        title: "Where on the path are you?",
        description:
          "The phase-by-phase transformation map, with the engagement shape that fits each entry point.",
      },
    },
  },
  {
    slug: "the-mechanics",
    title: "The mechanics — PM, budget, capital structure",
    subtitle:
      "Lens 2 of 2 on the 24-month engagement — the delivery discipline and the financial structure",
    pairBadge: "Article 2 · Lens 2 of 2",
    readingTimeMin: 14,
    category: "The playbook",
    lede:
      "Most board-approval-tier business-system transformations are sold as strategy. Big-4 transformation practices ship thinking in bound decks, present at the steering committee, and run the actual delivery through layered teams of senior partners who don't touch the floor and junior consultants who do. This model ships outcomes through a different organism. The discipline is not the deliverable; the discipline is the operating shape.",
    abstract:
      "A transformation of meaningful scope is a delivery discipline, not a project — and a capital investment, not a P&L hit. This article walks through the three sub-disciplines that have to run as ONE integrated practice (PM, Stakeholder + Change, Agile-Fall mode-switching), the persistence substrate that makes the integration durable, the capitalization treatment under ASC 350-40 that lets the CFO defend the program as an asset, the ten-year depreciation period field-validated with sitting CFOs, and the vendor-partner trap as the dominant failure mode of $10–15M ERP implementations.",
    whatYoullLearn: [
      "Why three sub-disciplines (PM + Change + Agile-Fall) collide when run parallel and compound when run as one",
      "How transformation capitalizes to the balance sheet under ASC 350-40 — including internal labor",
      "The ten-year depreciation period and what it means for board defense of multi-year programs",
      "How the vendor-partner trap kills most $10–15M implementations — and the structural escape",
    ],
    whoItsFor: [
      "CFOs evaluating transformation funding mechanics and audit-defensibility",
      "CIOs inheriting board-approval-tier programs that need delivery discipline",
      "COOs and EVP-Operations leaders responsible for operational continuity through 24-month change",
    ],
    keyQuote:
      "Most consultants pitch transformation as a P&L hit; this model pitches it as an asset.",
    heroKey: "integrated-delivery",
    crossLinks: {
      companion: {
        slug: "transformation-and-the-people-of-it",
        badge: "Article 1 · Lens 1",
        title:
          "What business transformation actually is — and who it's done with",
        description:
          "The companion lens. The architecture and the people layer of the same 24-month engagement.",
      },
      standalone: {
        slug: "applied-agentics",
        badge: "Article 3 · Standalone",
        title: "Applied agentics — agents deployed as a business asset",
        description:
          "The rare credential. Production agents that capitalize as operating-fabric assets under the same ASC 350-40 treatment.",
      },
      atlas: {
        title: "Where on the path are you?",
        description:
          "The phase-by-phase transformation map, with the engagement shape that fits each entry point.",
      },
    },
  },
  {
    slug: "applied-agentics",
    title: "Applied agentics — agents deployed as a business asset",
    subtitle:
      "The rare credential — knowing what agentics is and how to ship it into operations",
    pairBadge: "Article 3 · Standalone",
    readingTimeMin: 13,
    category: "The rare credential",
    lede:
      "The mid-market is being pitched agentic AI by people who haven't shipped anything. Most “AI advisory” in the market is opinions and slides. Demos polished for the Zoom call. Pilots that never made it to production. The buyer-verifiable test cuts cleanly: can you point to production apps in live operations today, and tell me what value they delivered last quarter?",
    abstract:
      "Real applied agentics requires shipped framework + production apps + the data foundation that makes them possible. This article walks through what agentics actually means at production scale (not chatbots, not pilots), the five-component framework that makes deployments repeatable, the data foundation precondition that distinguishes real applied agentics from theater, the corporate-IT confusion between AI use policy and agentic policy, and the five production-app patterns deployed across a multi-year engagement.",
    whatYoullLearn: [
      "The buyer-verifiable test for whether a consultant has done real applied agentics work",
      "Why agentic policy is structurally different from AI use policy — and why most mid-market orgs have only the second",
      "The five production-app patterns that the framework deploys at pattern level",
      "Why agentics is engagement-shape-determining (binary at proposal level) and how it capitalizes under ASC 350-40",
    ],
    whoItsFor: [
      "CIOs and CTOs being pitched agentics by hand-wavers without shipped work",
      "COOs ready to deploy production agents against real operational pressure points",
      "CFOs evaluating agentics as a capitalizable operating-fabric asset",
    ],
    keyQuote:
      "Agentics lives off data. Without sovereign data, agentic deployments produce theater.",
    heroKey: "framework-foundation",
    crossLinks: {
      // Article 3 is standalone — its substrate is BOTH lens articles, not a single companion.
      substratePair: [
        {
          slug: "transformation-and-the-people-of-it",
          badge: "Article 1 · Lens 1",
          title:
            "What business transformation actually is — and who it's done with",
          description:
            "The architectural fork that makes sovereign data possible at all — the precondition this agentics layer rides on.",
        },
        {
          slug: "the-mechanics",
          badge: "Article 2 · Lens 2",
          title: "The mechanics — PM, budget, capital structure",
          description:
            "The integrated delivery discipline that institutionalizes the framework — the mechanism by which agents capitalize as assets.",
        },
      ],
      atlas: {
        title: "Where on the path are you?",
        description:
          "The phase-by-phase transformation map, with the engagement shape that fits each entry point.",
      },
    },
  },
];

export const ARTICLE_SLUGS = ARTICLES.map((a) => a.slug);

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
