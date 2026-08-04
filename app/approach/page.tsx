import type { Metadata } from "next";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";
import AccentRule from "@/components/AccentRule";
import SectionKicker from "@/components/SectionKicker";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const metadata: Metadata = {
  title: "How Robert Paddock Approaches Enterprise Transformation | idigdata",
  description:
    "People, data, and systems as one ownership job - keep-running delivery, vendor control, and change that sticks.",
  alternates: { canonical: "/approach/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/approach/",
    title: "How Robert Paddock Approaches Enterprise Transformation | idigdata",
    description:
      "People, data, and systems as one ownership job - keep-running delivery, vendor control, and change that sticks.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata - Approach",
      },
    ],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://idigdata.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Approach",
      item: "https://idigdata.com/approach/",
    },
  ],
};

export default function ApproachPage() {
  return (
    <div className="mx-auto max-w-content bg-cream px-6 font-body text-navy">
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="relative pt-20 pb-10 md:pt-24 md:pb-14">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-4">Approach</SectionKicker>
        <h1 className="text-balance font-vollkorn text-[46px] font-bold leading-[1.02] tracking-normal text-navy md:text-[62px] lg:text-[74px]">
          People, data, and systems - one ownership job.
        </h1>
        <p className="mt-6 max-w-[820px] font-vollkorn text-[20px] font-medium italic leading-snug text-warm-gray md:text-[22px]">
          I embed inside the business, own the build above the vendors
          (including the ones that often end up managing themselves), and leave
          capability that runs after I leave.
        </p>
        <p className="mt-6 max-w-[820px] text-[16px] leading-relaxed text-ink">
          I start inside the operating company - bind people, data, systems,
          vendors, and decisions into one delivery frame, then cycle until the
          result holds without me. Not another System Integrator (SI) or
          forward-deployed overlay. The owned truth the business runs on.
        </p>
      </section>

      <section className="bg-cream px-0 pb-16 pt-6 md:px-8 md:pb-20">
        <figure className="mx-auto w-full max-w-[680px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/diagrams/substrate-triangle.svg"
            alt="People at the top, Data and Systems at the base, Workflows at the center - one ownership job"
            width={700}
            height={480}
            className="mx-auto block h-auto w-full max-w-[560px]"
          />
          <figcaption className="mx-auto mt-4 max-w-[46ch] text-center font-vollkorn text-[13px] italic leading-[1.5] text-warm-gray">
            The repeating ethos - people, data, and systems - meeting in the
            workflows the business actually runs.
          </figcaption>
        </figure>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-pale-navy px-0 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
        <SectionKicker className="mb-4">Operating authority</SectionKicker>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2 className="text-balance font-vollkorn text-[34px] font-extrabold leading-[1.06] tracking-normal text-navy md:text-[48px]">
              Vendors are trades. Someone still has to own the build.
            </h2>
          </div>
          <div className="space-y-5 text-[16px] leading-relaxed text-ink md:text-[17px]">
            <p>
              Before business systems, I spent roughly a decade as a
              general contractor on complex construction projects. That trained
              the habit I still run on: vendors are trades. Someone still has
              to own the build.
            </p>
            <p>
              Thirty years in business-system transformation, 50+
              implementations, and 15 full transformations at scale trained the
              same reflex from the systems side: read the room, find the real
              decision path, hold the line above the subcontractors, and leave
              the owner with something they can operate.
            </p>
          </div>
        </div>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-cream px-0 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
        <SectionKicker className="mb-4">How I work</SectionKicker>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.9fr)]">
          <div>
            <h2 className="text-balance font-vollkorn text-[34px] font-extrabold leading-[1.06] tracking-normal text-navy md:text-[48px]">
              I hold the layer above any one platform.
            </h2>
            <div className="mt-5 max-w-[820px] space-y-4 text-[16px] leading-relaxed text-ink md:text-[17px]">
              <p>
                Platforms matter; they cannot own the transformation. I make
                people, data, and systems explicit - workflows mapped to
                operating reality, data governed as a core asset, and decisions
                visible enough for executives and operators to act on the same
                truth.
              </p>
              <p>
                Most independents stay independent by staying outside. They
                advise and leave at go-live. I&apos;m the inversion: I embed, I
                own the build above the vendors, and I leave you an asset you
                own. Independent through commitment, not detachment.
              </p>
            </div>
          </div>
          <div className="border-l-[4px] border-l-gold bg-navy px-7 py-8 text-cream md:px-8">
            <SectionKicker className="mb-5 [&_span:first-child]:bg-gold [&_span:last-child]:text-gold">
              Where I start
            </SectionKicker>
            <h3 className="font-vollkorn text-[27px] font-bold leading-[1.15] text-cream md:text-[34px]">
              My first two calls are to the CFO and the Compliance Officer.
            </h3>
            <p className="mt-5 text-[15.5px] leading-[1.68] text-[#DCD9CC]">
              Not the innovation team, the people who carry the consequences. A
              vendor can demo capability; they can&apos;t tell you whether it
              survives an audit, a regulator, or discovery. That answer comes
              from having sat with those roles through a real transformation:
              the financial close, the revenue definitions, the controls
              underneath. Get those two in the room first and the work stops
              being a science project and becomes something the business can
              actually run. This is sharpest in finance, where a wrong number
              isn&apos;t a bug; it&apos;s a finding.
            </p>
          </div>
        </div>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-pale-navy px-0 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
        <SectionKicker className="mb-4">Built · Owned · Run</SectionKicker>
        <h2 className="max-w-[900px] text-balance font-vollkorn text-[34px] font-extrabold leading-[1.06] tracking-normal text-navy md:text-[48px]">
          I run this model before I bring it to you.
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] leading-relaxed text-ink md:text-[17px]">
          I build it in a governed environment, the business owns the asset at
          the end, and I run my own practice on it: built, owned, run.
        </p>
        <p className="mt-8 max-w-[820px] border-t border-navy/15 pt-6 font-vollkorn text-[21px] italic leading-[1.38] text-navy">
          The strongest shape keeps what works: keep your ERP, and we build the
          agentic workflow stack alongside it.
        </p>
        <Link
          href="/applied-agentics/"
          className="mt-6 inline-flex font-body text-[13px] font-semibold uppercase tracking-[0.16em] text-navy underline decoration-navy/35 underline-offset-4 hover:decoration-navy"
        >
          Applied Agentics <span aria-hidden="true" className="ml-2">→</span>
        </Link>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-cream px-0 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
        <SectionKicker className="mb-4">Capability map</SectionKicker>
        <h2 className="text-balance font-vollkorn text-[34px] font-extrabold leading-[1.06] tracking-normal text-navy md:text-[48px]">
          What I bring to the ownership job.
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] leading-relaxed text-ink md:text-[17px]">
          A briefed map of the capability bands - not a resume dump. Depth and
          Catalog depth stays internal; this is what buyers should feel on the site.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(
            [
              {
                band: "Altitude",
                lines: [
                  "Transformational CIO / CTO / embedded seats",
                  "ELT and board altitude",
                  "Permanent or fractional, same standard",
                ],
              },
              {
                band: "Enterprise systems",
                lines: [
                  "ERP catch-all + D365 / Business Central",
                  "WMS, MES, CRM/CPQ, MDM, integration",
                  "Cyber and data platforms in the fabric",
                ],
              },
              {
                band: "Leadership & change",
                lines: [
                  "People, data, systems as one job",
                  "Change and adoption ownership",
                  "Stakeholders and vendor / SI control",
                ],
              },
              {
                band: "Delivery mechanics",
                lines: [
                  "Deep PM through cutover",
                  "Program ownership end-to-end",
                  "Keep-running, multi-entity, Control · Map · Run",
                ],
              },
              {
                band: "Reach",
                lines: [
                  "$100M-$1B operators",
                  "Manufacturing (discrete + process)",
                  "AEC, beverage CPG, wellness/fitness, hospitality",
                ],
              },
              {
                band: "Builder",
                lines: [
                  "Owned stack and scale proof",
                  "Instrument craft on the same ownership layer",
                  "Build it, own it, run it",
                ],
              },
              {
                band: "Agentics",
                lines: [
                  "Agentic AI in production with governance",
                  "HOLD / ABSORB before the model",
                  "Craft: token/model optimization, discovery loops",
                ],
              },
            ] as const
          ).map((item) => (
            <article
              key={item.band}
              className="border border-navy/15 border-l-[3px] border-l-gold bg-white px-5 py-5"
            >
              <p className="font-body text-[10.5px] font-semibold uppercase tracking-[0.2em] text-warm-gray">
                {item.band}
              </p>
              <ul className="mt-3 space-y-2 text-[14.5px] leading-[1.5] text-navy">
                {item.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-pale-navy px-0 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
        <SectionKicker className="mb-4">The loop</SectionKicker>
        <p className="max-w-[840px] font-vollkorn text-[22px] leading-[1.32] tracking-normal text-navy md:text-[27px]">
          Transformations fail when delivery splits into disconnected
          languages: executives talk mandate, vendors talk scope, project teams
          talk tasks, and operators keep the real work moving in the gaps.{" "}
          <strong className="font-bold">
            I collapse those languages into one observable loop.
          </strong>{" "}
          Build against reality. Observe what the work reveals. Adjust until
          the business owns the system, not just the go-live.
        </p>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-cream px-0 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
        <SectionKicker className="mb-4">People</SectionKicker>
        <h2 className="text-balance font-vollkorn text-[34px] font-extrabold leading-[1.06] tracking-normal text-navy md:text-[48px]">
          The people who run the work are the system&apos;s center.
        </h2>
        <div className="mt-6 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,520px)] lg:gap-14">
          <div className="max-w-[760px] space-y-4 text-[16px] leading-relaxed text-ink md:text-[17px]">
            <p>
              I map the beehive first: where work actually moves, who carries
              exceptions, who knows the undocumented paths, and which operators
              can lead the change from inside the business.
            </p>
            <p>
              This is delivery mechanics. If the people who run the work cannot
              see, test, challenge, and eventually own the new system, the
              transformation is theater with a go-live date.
            </p>
          </div>
          <figure className="mx-auto w-full max-w-xl">
            <div className="rounded-md border border-navy/15 bg-white p-4 shadow-[0_2px_16px_rgba(20,40,64,0.07)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/diagrams/beehive.svg"
                alt="The Beehive - process flows across functional groups"
                width={540}
                height={700}
                className="block h-auto w-full"
              />
            </div>
            <figcaption className="mx-auto mt-3 max-w-[46ch] text-center font-vollkorn text-[12.5px] italic leading-[1.5] text-warm-gray">
              The beehive shows the work as operators experience it, not as the
              org chart describes it.
            </figcaption>
          </figure>
        </div>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-pale-navy px-0 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
        <SectionKicker className="mb-4">Six constellations</SectionKicker>
        <h2 className="text-balance font-vollkorn text-[34px] font-extrabold leading-[1.06] tracking-normal text-navy md:text-[48px]">
          Every operating business runs on the same six.
        </h2>
        <div className="mt-6 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,520px)] lg:gap-14">
          <div className="max-w-[760px] space-y-4 text-[16px] leading-relaxed text-ink md:text-[17px]">
            <p>
              Your culture is unique. Your operating mechanics are not. Procure
              to pay, order to cash, plan to make, systems to support, data to
              report, and master data management show up in every install.
            </p>
            <p>
              The makeup differs by company. That is the diagnostic work:
              where the constellations sit, how they weight, which systems and
              people carry them, and where delivery is breaking.
            </p>
          </div>
          <figure className="mx-auto w-full max-w-xl">
            <div className="rounded-md border border-navy/15 bg-white p-4 shadow-[0_2px_16px_rgba(20,40,64,0.07)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/diagrams/six-constellations.svg"
                alt="The Six Process Constellations around a sovereign data core"
                width={810}
                height={940}
                className="block h-auto w-full"
              />
            </div>
            <figcaption className="mx-auto mt-3 max-w-[46ch] text-center font-vollkorn text-[12.5px] italic leading-[1.5] text-warm-gray">
              The same six in every business; the fill is built from your
              actual work.
            </figcaption>
          </figure>
        </div>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-pale-navy px-0 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
        <SectionKicker className="mb-4">Delivery</SectionKicker>
        <h2 className="text-balance font-vollkorn text-[34px] font-extrabold leading-[1.06] tracking-normal text-navy md:text-[48px]">
          Delivery is where the asset gets proven.
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] leading-relaxed text-ink md:text-[17px]">
          The work runs in an agile-fall cadence: fast cycles where operators
          need iteration, clean phase discipline where the board, CFO, and
          audit trail need control. The owned asset gives the work a visible
          delivery frame: deliver the workflow, validate it through real use,
          then mark it done/done only when both axes are green.
        </p>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-cream px-0 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
        <SectionKicker className="mb-4">Success</SectionKicker>
        <h2 className="text-balance font-vollkorn text-[34px] font-extrabold leading-[1.06] tracking-normal text-navy md:text-[48px]">
          The test is what remains after I leave.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <p className="max-w-[820px] font-vollkorn text-[20px] font-medium italic leading-snug text-warm-gray md:text-[22px] lg:col-span-2">
            The drag eases where you feel it most. The close runs faster.
            Exceptions stop piling up. Vendor meetings stop being standoffs.
            The board updates stop sounding defensive. Quietly, the business
            starts running better than it did before I arrived.
          </p>
          <div>
            <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-gray">
              Measured by
            </p>
            <p className="text-[16px] leading-relaxed text-ink md:text-[17px]">
              Cleaner decisions, fewer exceptions, faster close cycles, less
              vendor drag, and operators who can explain how the system works
              because they helped validate it.
            </p>
          </div>
          <div>
            <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-gray">
              Leaves behind
            </p>
            <p className="text-[16px] leading-relaxed text-ink md:text-[17px]">
              A living operating asset the business owns: mapped workflows,
              governed data, visible delivery state, self-maintaining SOPs, and
              a team capable of carrying the next cycle.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[680px] rounded-[6px] border-l-[4px] border-l-gold bg-navy px-8 py-10 font-body text-cream shadow-[0_2px_24px_rgba(20,40,64,0.08)] md:px-10 md:py-12 lg:px-12 lg:py-14">
          <p className="mb-6 font-body text-[10.5px] font-semibold uppercase tracking-[0.24em] text-gold md:text-[11.5px]">
            Operator to operator
          </p>
          <h2 className="mb-5 font-vollkorn text-[28px] font-bold leading-[1.18] tracking-normal text-cream md:text-[36px] lg:text-[42px]">
            Bring the messy version.
          </h2>
          <p className="mb-8 font-vollkorn text-[14.5px] font-normal italic leading-[1.6] text-[#DCD9CC] md:text-[15.5px]">
            The current systems, the stalled decision, the vendor knot, the
            executive mandate, the agentic ambition. I do not need a polished
            problem. I need the real one.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 rounded-[3px] bg-gold px-8 py-4 font-body text-[13px] font-semibold uppercase tracking-[0.18em] text-navy transition-all duration-200 hover:bg-[#FFD740] hover:shadow-lg md:text-[14px]"
          >
            Start a conversation <span aria-hidden>&rarr;</span>
          </Link>
          <p className="mt-8 border-t border-cream/15 pt-6 font-body text-[13px] italic leading-[1.5] text-[#9EA0A6] md:text-[13.5px]">
            For how the model plugs in, see{" "}
            <Link
              href="/engagement/"
              className="whitespace-nowrap text-gold underline underline-offset-2 hover:text-[#FFD740] not-italic"
            >
              Engagement &rarr;
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
