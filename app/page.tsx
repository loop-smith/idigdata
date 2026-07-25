import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/home/Reveal";
import SpineFilm from "@/components/home/SpineFilm";

export const metadata: Metadata = {
  title: {
    absolute: "Robert Paddock · Transformational CIO | idigdata",
  },
  description:
    "Unowned data kills ERP and agentic AI. Robert Paddock seats a sovereign data core inside the business — living assets for $100M–$1B operators.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/",
    title: "Robert Paddock · Transformational CIO | idigdata",
    description:
      "Unowned data kills ERP and agentic AI. Sovereign data core. Living asset the business owns.",
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
      <SpineFilm />

      <section className="border-t border-gold/40 bg-cream">
        <Reveal className="mx-auto max-w-content px-6 py-8 md:py-10">
          <p className="mx-auto max-w-[52ch] border-l-[3px] border-gold pl-5 font-brand text-[18px] font-medium leading-[1.4] tracking-[-0.01em] text-navy md:mx-0 md:text-[20px]">
            Built to be owned, not rented — a capital asset the CFO can defend,
            not another expense line.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-navy/10 bg-cream">
        <Reveal className="mx-auto max-w-content px-6 py-14 md:grid md:grid-cols-[230px_1fr] md:gap-12 md:py-20">
          <p className="mb-5 font-brand text-[11.5px] font-semibold uppercase tracking-[0.24em] text-warm-gray md:mb-0 md:pt-3">
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
              a business system — systems and agentic AI on the same ownership
              layer: people, data, workflows, above the vendors.{" "}
              <span className="font-semibold text-navy">
                That is the scarce work. That is what I execute.
              </span>
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-navy/10 bg-tint">
        <Reveal className="mx-auto max-w-content px-6 py-14 md:py-20">
          <div className="md:grid md:grid-cols-[230px_1fr] md:gap-12">
            <p className="mb-5 font-brand text-[11.5px] font-semibold uppercase tracking-[0.24em] text-warm-gray md:mb-0 md:pt-3">
              <GoldSquare className="mr-3 h-[9px] w-[9px]" />
              Receipts
            </p>
            <div>
              <h2 className="max-w-[21ch] font-brand text-[clamp(30px,4.2vw,46px)] font-extrabold leading-[1.04] tracking-[-0.02em] text-navy">
                Built inside the business. Owned by the business. Running in
                production.
              </h2>
              <p className="mt-6 max-w-[62ch] text-[17.5px] leading-[1.7] text-[#3C4453]">
                Most recent — CIO, Sierra Nevada Brewing (~$420M). Full member
                of the executive leadership team; presented in all board
                meetings; worked across the senior leadership team. Led a $15M
                enterprise transformation on a client-owned data core, rebuilt
                the IS function into a purpose-built IT organization, and put
                enterprise agentic AI into production across real operational
                workflows — with governance, training, and business ownership.
              </p>
              <p className="mt-5 max-w-[62ch] text-[17.5px] leading-[1.7] text-[#3C4453]">
                Earlier: CEO/CTO, Timberline — scaled $250K → $130M across US
                and China; operating systems that had to hold in the field.
              </p>
              <p className="mt-5 max-w-[62ch] text-[17.5px] leading-[1.7] text-[#3C4453]">
                Across idigdata engagements — custom fintech spanning banking
                and POS integration; xFP&amp;A including Solver and OneStream.
              </p>
            </div>
          </div>

          <div className="mt-12 border-y border-navy/15 py-5">
            <p className="flex flex-wrap items-baseline gap-x-5 gap-y-2.5 font-brand text-[13px] font-semibold uppercase tracking-[0.16em] text-navy">
              {(
                [
                  { key: "years", node: "30 years" },
                  { key: "impl", node: "50+ implementations" },
                  { key: "transform", node: "15 full transformations at scale" },
                  { key: "operators", node: "$100M–$1B operators" },
                  {
                    key: "fintech",
                    node: (
                      <>
                        fintech · <span className="normal-case">xFP&amp;A</span>
                      </>
                    ),
                  },
                  { key: "agentic", node: "agentic AI in production" },
                ] as const
              ).map((item, i) => (
                <span
                  key={item.key}
                  className="flex items-baseline gap-x-5 whitespace-nowrap"
                >
                  {i > 0 && (
                    <GoldSquare className="h-[6px] w-[6px] self-center" />
                  )}
                  <span>{item.node}</span>
                </span>
              ))}
            </p>
          </div>
        </Reveal>
      </section>

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
            I&apos;ll walk you through exactly how I&apos;d own it. Permanent
            or fractional — the ownership standard does not change.
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
