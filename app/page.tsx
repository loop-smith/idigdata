import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/home/Reveal";
import SpineFilm from "@/components/home/SpineFilm";

export const metadata: Metadata = {
  title: {
    absolute: "Robert Paddock · Transformational CIO | idigdata",
  },
  description:
    "Robert Paddock leads enterprise transformation from inside the business: ownership across people, data, systems, and vendors - 30 years, 50+ implementations, a $15M CIO program, and agentic AI in production.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/",
    title: "Robert Paddock · Transformational CIO | idigdata",
    description:
      "Change the company without losing control. Builder · embedded operator · CIO - agentic AI in production.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata - Transformational CIO",
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
            Built to be owned, not rented - a capability the business can run,
            govern, and keep improving.
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
            <h2 className="max-w-[22ch] font-brand text-[clamp(30px,4.2vw,46px)] font-extrabold leading-[1.04] tracking-[-0.02em] text-navy">
              The ownership gap is the same problem it has always been.
            </h2>
            <p className="mt-6 max-w-[62ch] text-[17.5px] leading-[1.7] text-[#3C4453]">
              Vendors sell their slice. Platforms provide powerful tools.
              Forward-deployed engineers from frontier-model and platform
              companies often look new - same motion as System Integrators (SI)
              and the old vendor network. They bill on top while the duct tape
              stays underneath. Neither owns the transformation across people,
              data, systems, delivery, and adoption through cutover.{" "}
              <span className="font-semibold text-navy">
                Not another overlay. The owned truth the business runs on -
                that missing ownership layer is the scarce work. That is what I
                execute.
              </span>
            </p>
            <p className="mt-5 max-w-[62ch] text-[17.5px] leading-[1.7] text-[#3C4453]">
              The era of agentic AI amplifies it. Governed, adopted, and owned,
              those workflows become an advantage. Left unmanaged, the gap
              widens faster.
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
                <span className="font-semibold text-navy">Builder - </span>
                CEO/CTO, Timberline: scaled $250K to $130M on operating systems
                we owned, not rented.
              </p>
              <p className="mt-5 max-w-[62ch] text-[17.5px] leading-[1.7] text-[#3C4453]">
                <span className="font-semibold text-navy">Embedded - </span>
                Through idigdata: 50+ full-cycle implementations for $100M-$1B
                operating companies - keep-running modernization, plus
                instrument craft when agentics earns its place: token and model
                optimization, discovery loops, human-validated production paths.
              </p>
              <p className="mt-5 max-w-[62ch] text-[17.5px] leading-[1.7] text-[#3C4453]">
                <span className="font-semibold text-navy">CIO - </span>
                Sierra Nevada Brewing (~$420M): $15M enterprise transformation;
                rebuilt legacy IS into a purpose-built IT organization;
                company-owned data core; what the market now calls agentic AI
                in production under governance, training, and business ownership
                - before the term was common.
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
                  { key: "operators", node: "$100M-$1B operators" },
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

      <section className="border-t border-navy/10 bg-cream">
        <Reveal className="mx-auto max-w-content px-6 py-14 md:grid md:grid-cols-[230px_1fr] md:gap-12 md:py-16">
          <p className="mb-5 font-brand text-[11.5px] font-semibold uppercase tracking-[0.24em] text-warm-gray md:mb-0 md:pt-3">
            <GoldSquare className="mr-3 h-[9px] w-[9px]" />
            Applied Agentics
          </p>
          <div>
            <p className="max-w-[62ch] text-[17.5px] leading-[1.7] text-[#3C4453]">
              I don&apos;t just claim ownership of people, data, and systems.
              Here&apos;s how that ownership is built and left with the
              business - proof, not a product shelf. Ethos lives on Approach;
              the instrument and leave-behinds live here.
            </p>
            <Link
              href="/applied-agentics/"
              className="group mt-6 inline-flex items-center gap-2 font-brand text-[12.5px] font-bold uppercase tracking-[0.15em] text-navy transition-colors hover:text-gold"
            >
              Applied Agentics
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <Link
              href="/approach/"
              className="mt-3 block font-brand text-[12px] font-semibold uppercase tracking-[0.14em] text-warm-gray transition-colors hover:text-navy"
            >
              Approach →
            </Link>
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
            Businesses always need to transform. Too often they wait until pain
            funds a cost carve-out while capability erodes - and agentic AI
            compresses the time between delay and consequence. No deck. No
            proposal theater. Bring the real situation - ERP mess, keep-running
            constraint, vendor sprawl, or pressure to put agentic AI into
            production without losing control - and I&apos;ll walk you through
            how I&apos;d own it. Permanent or fractional - the ownership
            standard does not change.
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
