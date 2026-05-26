/**
 * Article landing-page schema for the IP-gated inform layer.
 *
 * Body content is held back for PDF request. This module exposes only the
 * public-safe landing data: summary, buyer fit, pull line, and cross-links.
 */

export type CrossLinkCard = {
  slug: string;
  badge: string;
  title: string;
  description: string;
};

export type ArticleHeroKey =
  | "architectural-fork"
  | "delivery-mechanics"
  | "framework-foundation";

export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  pairBadge: string;
  readingTimeMin: number;
  category: string;
  lede: string;
  cardHook: string;
  abstract: string;
  whatYoullLearn: string[];
  whoItsFor: string[];
  keyQuote: string;
  heroKey: ArticleHeroKey;
  hasInlineBeehive?: boolean;
  crossLinks: {
    companion?: CrossLinkCard;
    standalone?: CrossLinkCard;
    foundationPair?: [CrossLinkCard, CrossLinkCard];
  };
};

export const ARTICLES: Article[] = [
  {
    slug: "transformation-and-the-people-of-it",
    title: "You Don't Buy a Transformation. You Build One.",
    subtitle:
      "Lens 1 of 2 - what transformation actually is, and who owns it",
    pairBadge: "Article 1 · Lens 1 of 2",
    readingTimeMin: 13,
    category: "The playbook",
    lede:
      "After thirty years in mid-market business-system change, one observation has held: no operator walks into the work with systems, data, process, and ownership already defined. That is the market. It is also why most of what gets sold as transformation is not transformation.",
    cardHook:
      "Most transformation buying starts in the wrong place: a platform, a partner, a deck, or a workstream. I start with the thing the business must own at the end: the operating asset, the people who run it, and the decisions that prove it has landed.",
    abstract:
      "This brief is the architectural fork. It covers why a business cannot outsource ownership of the operating model, why the people layer is part of the architecture, and why the beehive matters before the vendor map does. The claim is simple: the business has to build the transformation it wants to own.",
    whatYoullLearn: [
      "Why a transformation bought as a product usually becomes dependency",
      "How the people layer determines whether the asset holds",
      "Why the beehive maps work better than org-chart theory",
      "How entry modes still point back to one embedded operator model",
    ],
    whoItsFor: [
      "Boards, CEOs, and PE operating partners bringing in senior ownership",
      "Executives facing multi-system change after growth, drift, or M&A",
      "Operators who suspect the vendor-led shape is the problem",
    ],
    keyQuote:
      "Ownership over data, workflow, and operating knowledge is structural, not negotiated.",
    heroKey: "architectural-fork",
    hasInlineBeehive: true,
    crossLinks: {
      companion: {
        slug: "the-mechanics",
        badge: "Article 2 · Lens 2",
        title: "The Mechanics of the Build",
        description:
          "The companion lens. How delivery, validation, and capital logic make the asset hold.",
      },
      standalone: {
        slug: "applied-agentics",
        badge: "Article 3 · Standalone",
        title: "Applied Agentics - The Business Asset",
        description:
          "The rare credential. Production agents tied to real operations and business-owned work.",
      },
    },
  },
  {
    slug: "the-mechanics",
    title: "The Mechanics of the Build",
    subtitle:
      "Lens 2 of 2 - how the build runs, gets defended, and holds",
    pairBadge: "Article 2 · Lens 2 of 2",
    readingTimeMin: 14,
    category: "The playbook",
    lede:
      "A real transformation is delivery discipline, not a loose project plan. The mechanics that split the build from the buy are where most board-tier programs go sideways before the work even begins.",
    cardHook:
      "The board does not need more transformation language. It needs an asset story the CFO can defend, a delivery frame operators can see, and a validation cycle that proves the work is done/done instead of merely launched.",
    abstract:
      "This brief covers the delivery frame behind the work: governance, agile-fall cadence, validation, SOP memory, capital logic, and the vendor-partner trap. It explains why green/green means done/done, and why a transformation should leave behind business-owned capability rather than a permanent services tail.",
    whatYoullLearn: [
      "Why delivery, adoption, and governance must move as one practice",
      "How build work can be defended as an owned asset discussion",
      "Why done/done requires both delivery and validation",
      "How the vendor-partner trap pulls programs away from the business",
    ],
    whoItsFor: [
      "CFOs evaluating transformation funding and useful-life logic",
      "CIOs inheriting board-level programs that need delivery discipline",
      "COOs responsible for continuity through material operating change",
    ],
    keyQuote:
      "Most programs launch. The useful ones prove the work has landed.",
    heroKey: "delivery-mechanics",
    crossLinks: {
      companion: {
        slug: "transformation-and-the-people-of-it",
        badge: "Article 1 · Lens 1",
        title: "You Don't Buy a Transformation. You Build One.",
        description:
          "The companion lens. The architecture and people layer of the same engagement.",
      },
      standalone: {
        slug: "applied-agentics",
        badge: "Article 3 · Standalone",
        title: "Applied Agentics - The Business Asset",
        description:
          "The rare credential. Production agents that only matter when tied to real business work.",
      },
    },
  },
  {
    slug: "applied-agentics",
    title: "Production Agentics - The Business Asset",
    subtitle:
      "Standalone - what agentics becomes when the business can absorb it",
    pairBadge: "Article 3 · Standalone",
    readingTimeMin: 13,
    category: "The rare credential",
    lede:
      "The mid-market is being pitched agentic AI by people who have not shipped anything. Demos are easy. Production use inside finance, supply chain, operations, governance, and people work is the test.",
    cardHook:
      "Agentics is not a tool-selection problem. It is a delivery problem: sponsorship, workflow, data, controls, validation, and a business owner who can say what the agent is allowed to do and how the result gets checked.",
    abstract:
      "This brief covers the buyer-verifiable test for applied agentics: shipped framework, production apps, daily use, human validation, and a business foundation that can absorb the work. It is not about chatbots or pilots. It is about turning agentic capability into an owned operating asset.",
    whatYoullLearn: [
      "How to tell production agentic work from advisory theater",
      "Why agentic policy is different from ordinary AI use policy",
      "What production-agent patterns look like at a safe public level",
      "Why agentics changes the engagement shape when the mandate is real",
    ],
    whoItsFor: [
      "CIOs and CTOs being pitched agentics without shipped proof",
      "COOs ready to put agents against real operating pressure points",
      "CFOs evaluating agentics as part of a durable operating asset",
    ],
    keyQuote:
      "The valuable person is the one who has tested it against real work.",
    heroKey: "framework-foundation",
    crossLinks: {
      foundationPair: [
        {
          slug: "transformation-and-the-people-of-it",
          badge: "Article 1 · Lens 1",
          title: "You Don't Buy a Transformation. You Build One.",
          description:
            "The ownership frame that makes agentic work land in the business.",
        },
        {
          slug: "the-mechanics",
          badge: "Article 2 · Lens 2",
          title: "The Mechanics of the Build",
          description:
            "The delivery discipline that turns agentic work into an asset.",
        },
      ],
    },
  },
];

export const ARTICLE_SLUGS = ARTICLES.map((a) => a.slug);

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
