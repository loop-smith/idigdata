import type { Metadata } from "next";
import Link from "next/link";
import HeroStrata from "@/components/home/HeroStrata";
import Reveal from "@/components/home/Reveal";

export const metadata: Metadata = {
  title: {
    absolute: "Robert Paddock · Transformational CIO | idigdata",
  },
  description:
    "I deliver a living asset the business owns — people, process, and ownership above the vendors, accounted for correctly. Transformational CIO for $100M–$1B operators.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/",
    title: "Robert Paddock · Transformational CIO | idigdata",
    description:
      "I deliver a living asset the business owns — the layer technology spend can't buy.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — Transformational CIO",
      },
    ],
  },
};

const rise = (n: number) => ({ "--rise": n }) as React.CSSProperties;

function GoldSquare({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block bg-gold align-baseline ${className}`}
    />
  );
}

export default function HomePage() {
  return (
    <div className="font-body text-ink">
      {/* Beat 1 — Hero: full-bleed navy plane, strata atmosphere */}
      <section className="grain relative isolate overflow-hidden bg-[linear-gradient(168deg,#132C48_0%,#142840_38%,#0E2138_100%)] text-porcelain">
        <HeroStrata className="absolute inset-x-0 bottom-0 -z-10 h-[38%] w-full md:h-[46%]" />
        <div className="mx-auto flex min-h-[max(600px,calc(100svh-96px))] max-w-content flex-col justify-center px-6 pt-12 pb-[16vh] md:pt-14 md:pb-[19vh]">
          <p
            className="hero-rise font-vollkorn text-[32px] font-bold tracking-[-0.02em] md:text-[40px]"
            style={rise(0)}
          >
            idig
            <GoldSquare className="mx-[3px] h-[0.19em] w-[0.19em]" />
            data
          </p>
          <p
            className="hero-rise mt-6 font-brand text-[11px] font-semibold uppercase tracking-[0.26em] text-gold md:text-[12px]"
            style={rise(1)}
          >
            Transformational CIO · $100M–$1B operators · applied AI in
            production
          </p>
          <h1
            className="hero-rise mt-5 max-w-[15ch] font-brand text-[clamp(42px,7.4vw,92px)] font-extrabold leading-[0.99] tracking-[-0.025em] text-porcelain"
            style={rise(2)}
          >
            I deliver <span className="seam-underline">the layer</span>{" "}
            technology spend can&apos;t buy.
          </h1>
          <p
            className="hero-rise mt-7 max-w-[52ch] text-[18px] leading-[1.6] text-porcelain/85 md:text-[20px]"
            style={rise(3)}
          >
            Enterprises keep buying technology. Value fails on people, process,
            and the business system above the vendors. I own that layer — and I
            deliver it through production.
          </p>
          <div
            className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row"
            style={rise(4)}
          >
            <Link
              href="/contact/"
              className="group inline-flex items-center justify-center gap-2 rounded-[3px] bg-gold px-7 py-4 font-brand text-[12.5px] font-bold uppercase tracking-[0.15em] text-navy transition-colors hover:bg-[#FFD84D]"
            >
              Start a conversation
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <Link
              href="/approach/"
              className="inline-flex items-center justify-center rounded-[3px] border border-porcelain/30 px-7 py-4 font-brand text-[12.5px] font-bold uppercase tracking-[0.15em] text-porcelain transition-colors hover:border-gold hover:text-gold"
            >
              See how I work
            </Link>
          </div>
        </div>
      </section>

      {/* Beat 2 — Diagnosis */}
      <section className="bg-paper">
        <Reveal className="mx-auto max-w-content px-6 py-16 md:grid md:grid-cols-[230px_1fr] md:gap-12 md:py-20">
          <p className="mb-6 font-brand text-[11.5px] font-semibold uppercase tracking-[0.24em] text-warm-gray md:mb-0 md:pt-3">
            <GoldSquare className="mr-3 h-[9px] w-[9px]" />
            The real bottleneck
          </p>
          <div>
            <h2 className="max-w-[19ch] font-brand text-[clamp(30px,4.2vw,46px)] font-extrabold leading-[1.04] tracking-[-0.02em] text-navy">
              The technology works. People and process decide whether it pays.
            </h2>
            <p className="mt-6 max-w-[62ch] text-[17.5px] leading-[1.7] text-[#3C4453]">
              Diagnosers explain the failure. Vendors implement their slice. AI
              builders rent you tools. None of them owns the transformation as
              a business system — the people, the workflows, the ownership
              above the vendors.{" "}
              <span className="font-semibold text-navy">
                That is the scarce work. That is what I execute.
              </span>
            </p>
          </div>
        </Reveal>
      </section>

      {/* Beat 3 — Proof */}
      <section className="border-t border-navy/10 bg-tint">
        <Reveal className="mx-auto max-w-content px-6 py-16 md:py-20">
          <div className="md:grid md:grid-cols-[230px_1fr] md:gap-12">
            <p className="mb-6 font-brand text-[11.5px] font-semibold uppercase tracking-[0.24em] text-warm-gray md:mb-0 md:pt-3">
              <GoldSquare className="mr-3 h-[9px] w-[9px]" />
              Receipts
            </p>
            <div>
              <h2 className="max-w-[21ch] font-brand text-[clamp(30px,4.2vw,46px)] font-extrabold leading-[1.04] tracking-[-0.02em] text-navy">
                Built inside the business. Owned by the business. Running in
                production.
              </h2>
              <p className="mt-6 max-w-[62ch] text-[17.5px] leading-[1.7] text-[#3C4453]">
                Most recent — CIO residency, Sierra Nevada Brewing (~$420M).
                Full member of the executive leadership team; presented in all
                board meetings; worked across the senior leadership team. Led a
                $15M enterprise transformation on a client-owned data core,
                rebuilt the IS function into a purpose-built IT organization,
                and put enterprise agentic AI into production across real
                operational workflows — with governance, training, and business
                ownership.
              </p>
              <p className="mt-5 max-w-[62ch] text-[17.5px] leading-[1.7] text-[#3C4453]">
                Across idigdata — custom fintech solutions spanning banking
                integration and POS integration; expert in xFP&amp;A platforms
                including Solver and OneStream. Stakeholder set: C-suite, board,
                SLT, directors, and managers.
              </p>
            </div>
          </div>
          {/* spine — one line, ticker treatment */}
          <div className="mt-12 border-y border-navy/15 py-5">
            <p className="flex flex-wrap items-baseline gap-x-4 gap-y-2 font-brand text-[13px] font-semibold uppercase tracking-[0.16em] text-navy md:justify-between">
              {[
                "30 years",
                "50+ implementations",
                "15 full transformations at scale",
                "$100M–$1B operators",
                "fintech · xFP&A",
                "applied AI in production",
              ].map((item, i) => (
                <span key={item} className="flex items-baseline gap-x-4">
                  {i > 0 && (
                    <GoldSquare className="h-[7px] w-[7px] self-center" />
                  )}
                  {item}
                </span>
              ))}
            </p>
          </div>
          <p className="mt-8 max-w-[52ch] font-brand text-[18px] font-medium leading-[1.4] tracking-[-0.01em] text-navy md:ml-[278px] md:text-[20px]">
            I deliver a living asset the business owns — built to be owned, not
            rented; a capital asset the CFO can defend, not another expense
            line.
          </p>
          <p className="mt-5 max-w-[46ch] text-[16px] leading-[1.55] text-[#3C4453] md:ml-[278px]">
            Applied AI is the edge on an operating system I already know how to
            deliver — not another pilot.
          </p>
        </Reveal>
      </section>

      {/* Beat 4 — CTA: navy bookend */}
      <section
        id="contact"
        className="grain relative isolate overflow-hidden bg-[linear-gradient(180deg,#142840_0%,#0E2138_100%)] text-porcelain"
      >
        <Reveal className="mx-auto max-w-content px-6 py-20 text-center md:py-24">
          <div aria-hidden="true" className="mx-auto mb-8 h-[3px] w-16 bg-gold" />
          <p className="font-brand text-[11.5px] font-semibold uppercase tracking-[0.26em] text-gold">
            Operator to operator
          </p>
          <h2 className="mx-auto mt-6 max-w-[18ch] font-brand text-[clamp(32px,4.8vw,56px)] font-extrabold leading-[1.04] tracking-[-0.02em] text-porcelain">
            If the work needs an owner, start there.
          </h2>
          <p className="mx-auto mt-6 max-w-[52ch] text-[17px] leading-[1.65] text-porcelain/75 md:text-[18px]">
            No deck. No proposal theater. Bring the real situation — the
            systems, the stalled decision, the agentic ambition — and
            I&apos;ll walk you through exactly how I&apos;d own it.
          </p>
          <Link
            href="/contact/"
            className="group mt-10 inline-flex items-center justify-center gap-2 rounded-[3px] bg-gold px-8 py-4 font-brand text-[12.5px] font-bold uppercase tracking-[0.15em] text-navy transition-colors hover:bg-[#FFD84D]"
          >
            Start a conversation
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
