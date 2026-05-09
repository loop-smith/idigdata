import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Applied Agentics — idigdata",
  description:
    "Applied agentics at lab and PE altitude. BOSS, the operator-owned platform. The personal substrate the work runs on. The Forward-Deployed Operator alternative to the FDE pattern.",
  alternates: { canonical: "/agentics/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/agentics/",
    title: "Applied Agentics — idigdata",
    description:
      "Forward-Deployed Operator at lab and PE altitude. Operator-owned substrate. Exit by design.",
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
    <div className="font-body bg-cream text-navy">
      {/* ============== HERO ============== */}
      <section className="bg-cream">
        <div className="mx-auto max-w-content px-6 pt-20 md:pt-24 pb-12 md:pb-16">
          <p className="font-body text-[12px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-6">
            Applied Agentics · V2
          </p>
          <h1 className="font-vollkorn font-extrabold text-navy text-[44px] md:text-[64px] lg:text-[80px] leading-[0.98] tracking-[-0.025em] text-balance mb-8 max-w-[1000px]">
            The Forward-Deployed{" "}
            <em className="italic font-semibold">Operator.</em>
          </h1>
          <p className="font-vollkorn italic font-medium text-warm-gray text-[18px] md:text-[20px] leading-snug max-w-[720px] border-t border-navy/15 pt-5">
            The same FDO posture at lab and PE altitude. Operator-altitude help
            with operator-owned substrate and a defined exit. Thirty years in
            the customer&rsquo;s seat is what makes the agents work in customer
            reality, not in demo.
          </p>
        </div>
      </section>

      {/* ============== THREE-CORNER TRIANGLE — dark navy panel ============== */}
      <section
        id="positioning"
        className="bg-navy text-cream"
        aria-labelledby="positioning-h"
      >
        <div className="mx-auto max-w-content px-6 py-24 md:py-32">
          <header className="mb-12 md:mb-16 max-w-[820px]">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.22em] text-gold mb-6">
              FDE vs FDO — three-corner positioning
            </p>
            <h2
              id="positioning-h"
              className="font-vollkorn font-extrabold text-cream text-[36px] md:text-[52px] leading-[1.02] tracking-[-0.02em] text-balance"
            >
              The market has{" "}
              <em className="italic font-semibold">three corners.</em>
            </h2>
            <p className="font-vollkorn italic font-medium text-cream/80 text-[18px] md:text-[20px] leading-snug border-t border-gold/30 pt-5 mt-6 max-w-[700px]">
              Anthropic and OpenAI are scaling FDE programs &mdash; engineers
              embedded inside customer environments, with platform tie-in by
              design. Consulting firms ship recommendations. The FDO is a
              different corner of the same market.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <article className="border border-cream/15 bg-navy/40 p-7 md:p-8 flex flex-col gap-4">
              <p className="font-vollkorn italic font-semibold text-cream/70 text-[14px] tracking-[0.04em]">
                Corner I
              </p>
              <h3 className="font-vollkorn font-extrabold text-cream text-[28px] md:text-[32px] leading-[1.05] tracking-[-0.015em]">
                Lab FDE.
              </h3>
              <p className="font-body text-cream/80 text-[14.5px] leading-[1.6]">
                Engineer altitude. Platform-tied by design. Long-term embed
                inside customer engineering. Lab-subsidized cost; the lab books
                the relationship.
              </p>
              <ul className="mt-2 pt-4 border-t border-cream/15 flex flex-col gap-2 font-body text-[13px] text-cream/70">
                <li>· Anthropic + OpenAI partner programs</li>
                <li>· Mid-market and PE portfolio coverage</li>
                <li>· Forever-embedded by default</li>
              </ul>
            </article>

            <article className="border border-cream/15 bg-navy/40 p-7 md:p-8 flex flex-col gap-4">
              <p className="font-vollkorn italic font-semibold text-cream/70 text-[14px] tracking-[0.04em]">
                Corner II
              </p>
              <h3 className="font-vollkorn font-extrabold text-cream text-[28px] md:text-[32px] leading-[1.05] tracking-[-0.015em]">
                Consulting{" "}
                <em className="italic font-semibold">industry.</em>
              </h3>
              <p className="font-body text-cream/80 text-[14.5px] leading-[1.6]">
                Consultant altitude. Recommendation-only. Project-shaped, deck-shaped, premium fees. The deliverable is the analysis; the operator builds and runs anyway.
              </p>
              <ul className="mt-2 pt-4 border-t border-cream/15 flex flex-col gap-2 font-body text-[13px] text-cream/70">
                <li>· Big-firm and mid-tier shops</li>
                <li>· Slide-decks, not running systems</li>
                <li>· Hands off at the recommendation</li>
              </ul>
            </article>

            <article className="border-2 border-gold bg-navy/60 p-7 md:p-8 flex flex-col gap-4 relative">
              <span
                aria-hidden="true"
                className="absolute -top-3 left-7 bg-navy text-gold font-body text-[10px] font-bold uppercase tracking-[0.18em] px-2 py-1 border border-gold"
              >
                idigdata
              </span>
              <p className="font-vollkorn italic font-semibold text-gold text-[14px] tracking-[0.04em]">
                Corner III
              </p>
              <h3 className="font-vollkorn font-extrabold text-cream text-[28px] md:text-[32px] leading-[1.05] tracking-[-0.015em]">
                The <em className="italic font-semibold">FDO.</em>
              </h3>
              <p className="font-body text-cream text-[14.5px] leading-[1.6]">
                Operator altitude. Operator-owned substrate. Exit by design. No
                managed-services tail; no platform tie-in. The asset stays with
                the operator at handoff.
              </p>
              <ul className="mt-2 pt-4 border-t border-gold/30 flex flex-col gap-2 font-body text-[13px] text-cream">
                <li>· 30 yrs customer-side fluency</li>
                <li>· Lab-agnostic by architecture</li>
                <li>· Structurally lean — no carried bench</li>
              </ul>
            </article>
          </div>

          <p className="mt-12 md:mt-14 font-vollkorn italic font-semibold text-cream/85 text-[18px] md:text-[20px] leading-[1.45] max-w-[760px] border-t border-gold/30 pt-6">
            Two practice areas, two altitudes, one thesis. Operator-owned.
            Vendor-agnostic. Commitment, not capture.
          </p>
        </div>
      </section>

      {/* ============== BOSS ============== */}
      <section id="boss" className="bg-cream">
        <div className="mx-auto max-w-content px-6 py-24 md:py-32">
          <header className="mb-12 max-w-[820px]">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-6">
              Productized platform
            </p>
            <h2 className="font-vollkorn font-extrabold text-navy text-[40px] md:text-[56px] leading-[1.02] tracking-[-0.02em] text-balance">
              B<span className="text-gold">·</span>O<span className="text-gold">·</span>S<span className="text-gold">·</span>S
            </h2>
            <p className="font-vollkorn italic font-medium text-warm-gray text-[17px] md:text-[19px] leading-snug border-t border-navy/15 pt-5 mt-6 max-w-[680px]">
              Business Operating System Suite. The platform that institutionalizes
              the new model in the operator&rsquo;s hands.
            </p>
          </header>

          <div className="space-y-6 max-w-[760px] font-body text-[16px] md:text-[17px] leading-[1.65] text-navy">
            <p>
              <strong className="font-semibold">What it is.</strong> A
              productized operating-system platform. Operator-owned. Open
              architecture. Per-engagement deployment, lands inside the
              customer environment, owned by the operator at handoff.
            </p>
            <p>
              <strong className="font-semibold">What it solves.</strong>{" "}
              Transformation that institutionalizes rather than drifts. A
              common data model. A six-constellation process map the operator
              can hold. The agentic deployment substrate that lets agents
              work inside customer reality, not demo conditions.
            </p>
            <p>
              <strong className="font-semibold">How it ships.</strong> No
              idigdata managed-services tail. No license capture. No platform
              tie-in. The operator runs it after handoff &mdash; that&rsquo;s
              the design.
            </p>
          </div>

          <p className="mt-10">
            <Link
              href="/approach/"
              className="font-body font-semibold text-navy text-[15px] border-b border-navy/40 hover:border-navy"
            >
              See how BOSS lands inside an engagement →
            </Link>
          </p>
        </div>
      </section>

      {/* ============== PERSONAL SUBSTRATE ============== */}
      <section id="substrate" className="bg-pale-navy">
        <div className="mx-auto max-w-content px-6 py-24 md:py-32">
          <header className="mb-12 max-w-[820px]">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-6">
              Personal substrate
            </p>
            <h2 className="font-vollkorn font-extrabold text-navy text-[40px] md:text-[56px] leading-[1.02] tracking-[-0.02em] text-balance">
              Self-application is the{" "}
              <em className="italic font-semibold">credibility.</em>
            </h2>
            <p className="font-vollkorn italic font-medium text-warm-gray text-[17px] md:text-[19px] leading-snug border-t border-navy/15 pt-5 mt-6 max-w-[680px]">
              The operator building agentic systems for customers is using
              agentic systems in his own operations.
            </p>
          </header>

          <div className="space-y-6 max-w-[760px] font-body text-[16px] md:text-[17px] leading-[1.65] text-navy">
            <p>
              <strong className="font-semibold">What it is.</strong> A personal
              agentic operating substrate I architect for my own work. The
              practice runs on it daily &mdash; not as observation, as
              operating environment.
            </p>
            <p>
              <strong className="font-semibold">What it does.</strong>{" "}
              Observability across multiple agent lanes. Layer contracts that
              hold composition discipline. Severity-graded validation. Build-loop
              discipline that gets agentic work to finish, not loop forever.
            </p>
            <p>
              <strong className="font-semibold">Why it matters.</strong> Receipts
              produced on the substrate, not described by it. The artifacts on{" "}
              <Link
                href="/approach/"
                className="border-b border-navy/40 hover:border-navy"
              >
                Approach
              </Link>{" "}
              &mdash; trinity diagrams, engagement roadmap, six-axis readiness
              &mdash; are produced inside this environment, then handed off to
              the operator.
            </p>
          </div>
        </div>
      </section>

      {/* ============== AGENTIC STACK ============== */}
      <section id="stack" className="bg-cream">
        <div className="mx-auto max-w-content px-6 py-24 md:py-32">
          <header className="mb-12 max-w-[820px]">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-6">
              Agentic stack
            </p>
            <h2 className="font-vollkorn font-extrabold text-navy text-[40px] md:text-[56px] leading-[1.02] tracking-[-0.02em] text-balance">
              How I <em className="italic font-semibold">work.</em>
            </h2>
            <p className="font-vollkorn italic font-medium text-warm-gray text-[17px] md:text-[19px] leading-snug border-t border-navy/15 pt-5 mt-6 max-w-[680px]">
              I run my work on the modern agentic stack daily — not as
              observation, as operating environment. Multi-lab and
              multi-vendor by design.
            </p>
          </header>

          <ul className="max-w-[820px] space-y-5 font-body text-[16px] md:text-[17px] leading-[1.65] text-navy">
            <li className="grid grid-cols-[16px_1fr] gap-4">
              <span className="font-vollkorn italic font-bold text-gold text-[20px] leading-[1.2]">·</span>
              <span>
                <strong className="font-semibold">Operating environments:</strong>{" "}
                Cowork, Claude Code, Claude in VS Code, Claude in Chrome.
              </span>
            </li>
            <li className="grid grid-cols-[16px_1fr] gap-4">
              <span className="font-vollkorn italic font-bold text-gold text-[20px] leading-[1.2]">·</span>
              <span>
                <strong className="font-semibold">Protocols and frameworks:</strong>{" "}
                MCP (Model Context Protocol), Agent SDK, Skills, Plugins,
                subagent dispatch.
              </span>
            </li>
            <li className="grid grid-cols-[16px_1fr] gap-4">
              <span className="font-vollkorn italic font-bold text-gold text-[20px] leading-[1.2]">·</span>
              <span>
                <strong className="font-semibold">Lab and model relationships:</strong>{" "}
                Anthropic (primary), OpenAI in active rotation, multi-vendor
                council pattern for cross-vendor triangulation.
              </span>
            </li>
            <li className="grid grid-cols-[16px_1fr] gap-4">
              <span className="font-vollkorn italic font-bold text-gold text-[20px] leading-[1.2]">·</span>
              <span>
                <strong className="font-semibold">Infrastructure:</strong>{" "}
                Vercel, Supabase, GitHub.
              </span>
            </li>
            <li className="grid grid-cols-[16px_1fr] gap-4">
              <span className="font-vollkorn italic font-bold text-gold text-[20px] leading-[1.2]">·</span>
              <span>
                <strong className="font-semibold">Personal substrate:</strong>{" "}
                agentic operating infrastructure I architect for my own work
                &mdash; observability, layer contracts, severity-graded
                validation, build-loop discipline.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-content px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-center">
            <div>
              <p className="font-body text-[12px] font-semibold uppercase tracking-[0.22em] text-gold mb-6">
                A conversation, not a proposal
              </p>
              <h2 className="font-vollkorn font-extrabold text-cream text-[36px] md:text-[52px] leading-[1.02] tracking-[-0.02em] text-balance">
                Operator-to-operator.{" "}
                <em className="italic font-semibold">No deck.</em>
              </h2>
              <p className="font-vollkorn italic font-medium text-cream/80 text-[17px] md:text-[19px] leading-snug border-t border-gold/30 pt-5 mt-6 max-w-[560px]">
                First conversation is ninety minutes, off the record.
                We end either with a clear next step, or a clear answer that
                this isn&rsquo;t the right fit. Both are useful.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/contact/"
                className="bg-gold text-navy px-7 py-5 font-body text-[13px] font-semibold uppercase tracking-[0.18em] flex justify-between items-center hover:bg-cream transition-colors"
              >
                Reach out <span aria-hidden className="text-[18px]">→</span>
              </Link>
              <Link
                href="/articles/03-applied-agentics-v2/"
                className="bg-transparent text-cream px-7 py-5 font-body text-[13px] font-semibold uppercase tracking-[0.18em] flex justify-between items-center border border-cream/40 hover:border-cream hover:bg-cream/5 transition-colors"
              >
                Read Article 03 v2 <span aria-hidden className="text-[18px]">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
