import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";

export const metadata: Metadata = {
  title: "Applied Agentics — idigdata",
  description:
    "It all starts with the data. Clean, structured, traceable lineage. A customer common data model the business owns. Production agentics, daily — from a thirty-year business software operator.",
  alternates: { canonical: "/agentics/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/agentics/",
    title: "Applied Agentics — idigdata · It all starts with the data",
    description:
      "It all starts with the data. Clean, structured, traceable lineage. A customer common data model the business owns. Production agentics, daily.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — Applied Agentics",
      },
    ],
  },
};

export default function AgenticsPage() {
  return (
    <div className="mx-auto max-w-content px-6 font-body bg-cream text-navy">
      {/* ============== BLOCK 1 · HERO · It all starts with the data ============== */}
      <section className="relative bg-cream pt-20 md:pt-24 pb-12 md:pb-16">
        <M4Watermark position="top-right" />
        <p className="font-body text-[12px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-6">
          Agentic AI
        </p>
        <h1 className="font-vollkorn font-extrabold text-navy text-[44px] md:text-[64px] lg:text-[80px] leading-[0.98] tracking-[-0.025em] text-balance mb-4 max-w-[1000px]">
          It all starts with the{" "}
          <em className="italic font-semibold">data.</em>
        </h1>
        <p className="font-body italic text-warm-gray text-[13px] md:text-[14px] mb-8 max-w-[720px]">
          &mdash; Marc Benioff, Salesforce CEO &middot; Dreamforce 2025
        </p>
        <div className="space-y-5 max-w-[760px] font-body text-[16px] md:text-[17px] leading-[1.65] text-navy border-t border-navy/15 pt-6">
          <p>
            Your AI pilots are stalling because the substrate underneath
            them isn&rsquo;t ready. Three ERPs, two versions of finance
            truth, a CRM the ops team doesn&rsquo;t trust, and a board
            asking when the agents land. Without clean, structured,
            traceable data &mdash; and a customer common data model the
            business owns &mdash; agentic AI is theater.
          </p>
          <p>
            You&rsquo;ll hear it called an implementation problem. It
            isn&rsquo;t. It&rsquo;s an{" "}
            <em className="italic">engineering</em> problem.
          </p>
          <p>
            Three decades inside business-software transformations
            &mdash; from the dashboard era through AutoML to applied
            agentics. The output layer keeps evolving. The data problem
            doesn&rsquo;t. The pattern doesn&rsquo;t change. The
            technology is new.
          </p>
        </div>
      </section>

      {/* ============== BLOCK 2 · WHAT MID-MARKET ACTUALLY NEEDS ============== */}
      <section className="bg-cream py-24 md:py-32">
        <header className="mb-10 max-w-[820px]">
          <p className="font-body text-[12px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-6">
            The honest read
          </p>
          <h2 className="font-vollkorn font-extrabold text-navy text-[36px] md:text-[52px] leading-[1.02] tracking-[-0.02em] text-balance">
            Less than the vendor pitches are telling you.{" "}
            <em className="italic font-semibold">More than your team thinks.</em>
          </h2>
        </header>

        <div className="space-y-6 max-w-[820px] font-body text-[16px] md:text-[17px] leading-[1.65] text-navy">
          <p>
            The vendor landscape just bifurcated. Frontier labs are embedding
            forward-deployed engineers inside PE portfolios at scale &mdash;
            AI experts who don&rsquo;t know your finance close, your ERP
            exceptions, or your supply chain edge cases. Big consultancies are
            running multi-year deployment frameworks that bill against
            engagement-time, not outcomes. Vertical AI tooling companies are
            productizing single workflows. All useful &mdash; for some
            businesses, in some shapes.
          </p>
          <p>
            Most of them will tell you it&rsquo;s an implementation problem
            and sell you a deployment. It isn&rsquo;t and you don&rsquo;t
            need one. What you need is the operator who{" "}
            <strong className="font-semibold">
              translates between the AI engineers building the agents and
              the finance, supply chain, and operations teams the work has
              to land against
            </strong>{" "}
            &mdash; so what gets built does what your business actually
            needs,{" "}
            <em className="italic">before</em>{" "}you&rsquo;re locked into a
            partner economics model, and so the substrate is yours at
            handoff.
          </p>
          <p className="pt-2">
            I look for whether the proposal understands the data substrate,
            whether production observability is real, and whether the
            commercial model rewards theater or operating value. The other
            tells only show up once you read the proposal against the
            business.
          </p>
          <p className="pt-3">
            Talent design, board-ready ROI, vendor portfolio sequencing
            &mdash; all flow from these. The substrate decides whether the
            agentic work compounds or stalls.
          </p>
        </div>
      </section>

      {/* ============== BLOCK 3 · WHERE ARE YOU · two diagnostics ============== */}
      <section className="bg-cream py-24 md:py-32">
        <header className="mb-12 max-w-[820px]">
          <p className="font-body text-[12px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-6">
            Where are you
          </p>
          <h2 className="font-vollkorn font-extrabold text-navy text-[36px] md:text-[52px] leading-[1.02] tracking-[-0.02em] text-balance">
            Two questions{" "}
            <em className="italic font-semibold">before we start.</em>
          </h2>
        </header>

        {/* Workflow shape · adoption vs transformation */}
        <div className="mb-12 md:mb-14">
          <p className="font-vollkorn italic font-medium text-warm-gray text-[16px] md:text-[18px] leading-snug mb-6 max-w-[680px]">
            Workflow shape &mdash; adoption or transformation?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[1080px]">
            <article className="border border-navy/15 bg-cream p-7 md:p-8 flex flex-col gap-4">
              <h3 className="font-vollkorn font-extrabold text-navy text-[24px] md:text-[28px] leading-[1.1] tracking-[-0.015em]">
                Adoption.
              </h3>
              <p className="font-body text-[15.5px] md:text-[16px] leading-[1.6] text-navy">
                Agentic AI inside the work you already do. Productivity in
                finance, supply chain, operations. Pilots that land in
                production &mdash; not slideware. Your team learns the
                tools without breaking the operating model.
              </p>
              <p className="font-body text-[14.5px] leading-[1.5] text-warm-gray pt-2 border-t border-navy/10">
                Best fit when tier-1 systems run well and agentic AI is the
                new layer on top &mdash; and the data substrate is ready
                enough to support it.
              </p>
            </article>

            <article className="border border-navy/15 bg-cream p-7 md:p-8 flex flex-col gap-4">
              <h3 className="font-vollkorn font-extrabold text-navy text-[24px] md:text-[28px] leading-[1.1] tracking-[-0.015em]">
                Transformation.
              </h3>
              <p className="font-body text-[15.5px] md:text-[16px] leading-[1.6] text-navy">
                Agentic AI as the reason to rethink the operating model.
                New workflows. Fewer manual handoffs. Data, processes, and
                people reorganized around what agents make possible.
              </p>
              <p className="font-body text-[14.5px] leading-[1.5] text-warm-gray pt-2 border-t border-navy/10">
                Best fit when the operating model is already creaky and
                agentic AI is the catalyst, not the band-aid &mdash; and
                the data work is part of the program, not an afterthought.
              </p>
            </article>
          </div>
        </div>

        {/* Capital structure · PE-backed vs Independent */}
        <div className="mb-8">
          <p className="font-vollkorn italic font-medium text-warm-gray text-[16px] md:text-[18px] leading-snug mb-6 max-w-[680px]">
            Capital structure &mdash; PE-backed or independent?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[1080px]">
            <article className="border border-navy/15 bg-cream p-7 md:p-8 flex flex-col gap-4">
              <h3 className="font-vollkorn font-extrabold text-navy text-[24px] md:text-[28px] leading-[1.1] tracking-[-0.015em]">
                PE-backed.
              </h3>
              <p className="font-body text-[15.5px] md:text-[16px] leading-[1.6] text-navy">
                Forward-deployed engineers are about to land in your
                operation. You need independent oversight to make sure what
                gets built survives your owner&rsquo;s exit &mdash; and
                that the people doing the building understand your
                industry, not just the tooling.
              </p>
            </article>

            <article className="border border-navy/15 bg-cream p-7 md:p-8 flex flex-col gap-4">
              <h3 className="font-vollkorn font-extrabold text-navy text-[24px] md:text-[28px] leading-[1.1] tracking-[-0.015em]">
                Independent.
              </h3>
              <p className="font-body text-[15.5px] md:text-[16px] leading-[1.6] text-navy">
                The priority lanes are increasingly closed to companies
                without PE distribution channels. You need someone who runs
                the same caliber of work without the captive-distribution
                model.
              </p>
            </article>
          </div>
        </div>

        <p className="font-vollkorn italic font-medium text-warm-gray text-[17px] md:text-[19px] leading-snug max-w-[760px]">
          Either path on either axis, same gap. Same operator.
        </p>
      </section>

      {/* ============== BLOCK 4 · WHY PILOTS STALL · dark navy panel ============== */}
      <section
        id="substrate"
        className="bg-navy text-cream py-24 md:py-32"
        aria-labelledby="substrate-h"
      >
        <header className="mb-10 max-w-[820px]">
          <p className="font-body text-[12px] font-semibold uppercase tracking-[0.22em] text-gold mb-6">
            The mechanism of failure
          </p>
          <h2
            id="substrate-h"
            className="font-vollkorn font-extrabold text-cream text-[36px] md:text-[52px] leading-[1.02] tracking-[-0.02em] text-balance"
          >
            Pilots stall in the{" "}
            <em className="italic font-semibold">substrate.</em>
          </h2>
        </header>

        <div className="space-y-5 max-w-[820px] font-body text-[16px] md:text-[17px] leading-[1.65] text-cream/90">
          <p>
            Most agentic pilots don&rsquo;t land in production because the
            data underneath them isn&rsquo;t ready. It lives in three places
            with three versions of the truth. There&rsquo;s no lineage you
            can trace. There&rsquo;s no customer common data model agents
            can reason against. The agents read broken state, write back to
            broken state, and produce motion without outcome.
          </p>
          <p>
            Where the data is clean, structured, and traceable &mdash; and
            the customer common data model is real &mdash; agentic AI
            compounds the value. Where it isn&rsquo;t, theater.
          </p>
          <p className="pt-2">
            <strong className="font-semibold text-cream">
              This is the thread under everything I do. The practice is
              named for it.
            </strong>
          </p>
        </div>
      </section>

      {/* ============== BLOCK 5 · PRODUCTION AGENTICS, DAILY · three proof panels ============== */}
      <section id="production" className="bg-cream py-24 md:py-32">
        <header className="mb-12 md:mb-14 max-w-[820px]">
          <p className="font-body text-[12px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-6">
            Where I&rsquo;ve arrived
          </p>
          <h2 className="font-vollkorn font-extrabold text-navy text-[36px] md:text-[52px] leading-[1.02] tracking-[-0.02em] text-balance">
            Two years inside.{" "}
            <em className="italic font-semibold">
              Production agentics, daily.
            </em>
          </h2>
          <p className="font-vollkorn italic font-medium text-warm-gray text-[17px] md:text-[19px] leading-snug border-t border-navy/15 pt-5 mt-6 max-w-[720px]">
            The page you&rsquo;re reading is part of it. This is not a
            credential from a past engagement. It is how the practice runs
            now.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Panel · The Rig */}
          <article className="border border-navy/15 bg-cream p-6 md:p-7 flex flex-col gap-5">
            <p className="font-vollkorn italic font-semibold text-gold text-[13px] tracking-[0.04em]">
              How the work runs
            </p>
            <div className="min-h-[80px] flex items-center">
              <Image
                src="/brand/rig/logo-horizontal.svg"
                alt="THE RIG"
                width={330}
                height={170}
                className="h-14 md:h-16 w-auto"
              />
            </div>
            <p className="font-body text-[14.5px] leading-[1.6] text-navy">
              <strong className="font-semibold">The Rig</strong> is my
              agentic operating environment &mdash; multi-lane
              orchestration across the active practice. Observability,
              layer contracts, severity-graded validation, build-loop
              discipline.
            </p>
            <p className="font-body text-[14.5px] leading-[1.6] text-navy pt-1 border-t border-navy/10">
              The receipts on{" "}
              <Link href="/approach/" className="border-b border-navy/40 hover:border-navy">
                Approach
              </Link>{" "}
              &mdash; trinity diagrams, engagement roadmap, six-axis
              readiness &mdash; are produced{" "}
              <em className="italic">on</em> the rig, not described{" "}
              <em className="italic">by</em> it.
            </p>
          </article>

          {/* Panel · BOSS */}
          <article className="border border-navy/15 bg-cream p-6 md:p-7 flex flex-col gap-5">
            <p className="font-vollkorn italic font-semibold text-gold text-[13px] tracking-[0.04em]">
              The substrate, productized
            </p>
            <div className="min-h-[80px] flex items-center">
              <Image
                src="/brand/boss/boss-lockup.svg"
                alt="BOSS — The business process harness"
                width={660}
                height={320}
                className="h-16 md:h-20 w-auto"
              />
            </div>
            <p className="font-body text-[14.5px] leading-[1.6] text-navy">
              <strong className="font-semibold">BOSS</strong> productizes
              the customer common data model and the six-constellation
              process map &mdash; institutionalized in code. Built,
              implemented, running in production. The operator owns it at
              handoff. No managed-services tail. No platform tie-in.
            </p>
            <p className="font-vollkorn italic font-medium text-navy text-[15px] leading-[1.5] pt-1 border-t border-navy/10">
              Built once. Owned forever.
            </p>
            <p>
              <Link
                href="/approach/"
                className="inline-flex items-center gap-1 text-navy text-[13px] font-semibold uppercase tracking-[0.14em] border-b border-navy/40 hover:border-navy pb-1"
              >
                See how BOSS lands in an engagement{" "}
                <span aria-hidden>&rarr;</span>
              </Link>
            </p>
          </article>

          {/* Panel · DigOps */}
          <article className="border border-navy/15 bg-cream p-6 md:p-7 flex flex-col gap-5">
            <p className="font-vollkorn italic font-semibold text-gold text-[13px] tracking-[0.04em]">
              The proof is what you&rsquo;re reading
            </p>
            <div className="min-h-[80px] flex items-center">
              <Image
                src="/brand/digops/digops-logo.svg"
                alt="DigOps — the operating substrate · Buy · Make · Sell"
                width={760}
                height={200}
                className="h-16 md:h-20 w-auto"
              />
            </div>
            <p className="font-body text-[14.5px] leading-[1.6] text-navy">
              <strong className="font-semibold">DigOps</strong> &mdash; the operating
              substrate that runs the practice. CRM for the prospect pipeline. CPQ for
              engagements + billing. ERP-core for accounting + payments + reporting.
              One customer common data model. Multiple workflows.{" "}
              <em className="italic">
                Hunt &middot; track &middot; close &middot; run &middot; close &middot;
                own the books.
              </em>
            </p>
            <p className="font-vollkorn italic font-medium text-navy text-[15px] leading-[1.5] pt-1 border-t border-navy/10">
              Shows the actual operating substrate &mdash; running on my own business.
            </p>
          </article>
        </div>
      </section>

      {/* ============== BLOCK 6 · STACK · compact strip · pale-navy ============== */}
      <section className="bg-pale-navy py-14 md:py-16">
        <div className="max-w-[1080px]">
          <p className="font-body text-[12px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-4">
            The stack I work on daily
          </p>
          <p className="font-vollkorn italic font-medium text-navy text-[18px] md:text-[20px] leading-[1.4] mb-4">
            Multi-lab, multi-vendor by design.
          </p>
          <p className="font-body text-[14.5px] md:text-[15.5px] leading-[1.7] text-navy/80">
            Anthropic and OpenAI in active rotation. MCP and Agent SDK as
            protocols. Multi-vendor council pattern for the harder calls. The
            tools are how I work the substrate &mdash; but the substrate is
            what governs.
          </p>
        </div>
      </section>

      {/* ============== BLOCK 7 · CTA · navy card ============== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[680px] bg-navy text-cream font-body rounded-[6px] shadow-[0_2px_24px_rgba(20,40,64,0.08)] border-l-[4px] border-l-gold px-8 md:px-10 lg:px-12 py-10 md:py-12 lg:py-14">
          <p className="font-body font-semibold uppercase text-gold text-[10.5px] md:text-[11.5px] tracking-[0.24em] mb-6">
            A conversation, not a proposal
          </p>

          <h2 className="font-vollkorn font-bold text-cream text-[28px] md:text-[36px] lg:text-[42px] leading-[1.18] tracking-[-0.01em] mb-5">
            Let&rsquo;s talk shape &mdash; of your{" "}
            <em className="italic font-semibold">agentics.</em>
          </h2>

          <p className="font-vollkorn italic font-normal text-[#DCD9CC] text-[14.5px] md:text-[15.5px] leading-[1.6] mb-8">
            Where you sit on workflow shape. Where you sit on capital
            structure. What your data substrate actually looks like. Which
            of the five questions are sharpest for your business. No deck.
            No proposal.{" "}
            <span className="text-gold not-italic font-medium">
              Just talking shape.
            </span>
          </p>

          <Link
            href="/contact?interest=agentics"
            className="inline-flex items-center gap-2 bg-gold text-navy font-body font-semibold uppercase text-[13px] md:text-[14px] tracking-[0.18em] px-8 py-4 rounded-full hover:bg-[#FFD740] hover:shadow-lg transition-all duration-200"
          >
            Start a conversation <span aria-hidden>&rarr;</span>
          </Link>

          <p className="mt-8 pt-6 border-t border-cream/15 font-body italic text-[#9EA0A6] text-[13px] md:text-[13.5px] leading-[1.5]">
            For how I plug in &mdash; embedded, fractional, agentics
            &mdash;{" "}
            <Link
              href="/engagement/"
              className="text-gold hover:text-[#FFD740] underline underline-offset-2 not-italic whitespace-nowrap"
            >
              /engagement &rarr;
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
