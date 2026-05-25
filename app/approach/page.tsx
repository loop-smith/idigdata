import type { Metadata } from "next";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";
import AccentRule from "@/components/AccentRule";
import SectionKicker from "@/components/SectionKicker";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const metadata: Metadata = {
  title: "Approach - idigdata",
  description:
    "How I turn transformation into a business-owned operating asset: build, observe, cycle, and transfer the system to the people who run the work.",
  alternates: { canonical: "/approach/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/approach/",
    title: "Approach - idigdata",
    description:
      "A delivery frame for business-system transformation: people first, six operating constellations, architecture above vendors, and ownership at exit.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata - The Practice",
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
    <div className="mx-auto max-w-content px-6 font-body bg-cream text-navy">
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="relative bg-cream pt-20 pb-10 md:pt-24 md:pb-14">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-4">Approach</SectionKicker>
        <h1 className="font-vollkorn font-bold text-navy text-[46px] md:text-[62px] lg:text-[74px] leading-[1.02] tracking-normal text-balance">
          I build the transformation as a system the business can own.
        </h1>
        <p className="mt-6 max-w-[820px] font-vollkorn italic font-medium text-warm-gray text-[20px] md:text-[22px] leading-snug">
          Build. Observe. Cycle. The loop is simple because the work is not.
        </p>
        <p className="mt-6 max-w-[820px] text-[16px] text-ink leading-relaxed">
          I do not start with a vendor roadmap or a generic change model. I
          start inside the operating business, bind the people, workflows,
          systems, and decisions into one delivery frame, then keep cycling
          until the result holds without me.
        </p>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-pale-navy px-0 md:px-8 pt-16 md:pt-20 pb-20 md:pb-24">
        <SectionKicker className="mb-4">The loop</SectionKicker>
        <p className="max-w-[840px] font-vollkorn text-navy text-[22px] md:text-[27px] leading-[1.32] tracking-normal">
          Transformations fail when delivery splits into disconnected languages:
          executives talk mandate, vendors talk scope, project teams talk
          tasks, and operators keep the real work moving in the gaps.{" "}
          <strong className="font-bold">
            I collapse those languages into one observable loop.
          </strong>{" "}
          Build against reality. Observe what the work reveals. Adjust until
          the business owns the system, not just the go-live.
        </p>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-cream px-0 md:px-8 pt-16 md:pt-20 pb-20 md:pb-24">
        <SectionKicker className="mb-4">People</SectionKicker>
        <h2 className="font-vollkorn font-extrabold text-navy text-[34px] md:text-[48px] leading-[1.04] tracking-normal text-balance">
          The people who run the work are the system&apos;s center.
        </h2>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(320px,520px)] gap-10 lg:gap-14 items-start">
          <div className="max-w-[760px] text-[16px] md:text-[17px] text-ink leading-relaxed space-y-4">
            <p>
              I map the beehive first: where work actually moves, who carries
              exceptions, who knows the undocumented paths, and which operators
              can lead the change from inside the business.
            </p>
            <p>
              This is not sentiment. It is delivery mechanics. If the people
              who run the work cannot see, test, challenge, and eventually own
              the new system, the transformation is theater with a go-live
              date.
            </p>
          </div>
          <figure className="mx-auto w-full max-w-xl">
            <div className="bg-white border border-navy/15 rounded-md shadow-[0_2px_16px_rgba(20,40,64,0.07)] p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/diagrams/beehive.svg"
                alt="The Beehive - process flows across functional groups"
                width={540}
                height={700}
                className="w-full h-auto block"
              />
            </div>
            <figcaption className="mt-3 font-vollkorn italic text-warm-gray text-[12.5px] leading-[1.5] text-center max-w-[46ch] mx-auto">
              The beehive shows the work as operators experience it, not as the
              org chart describes it.
            </figcaption>
          </figure>
        </div>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-pale-navy px-0 md:px-8 pt-16 md:pt-20 pb-20 md:pb-24">
        <SectionKicker className="mb-4">Six constellations</SectionKicker>
        <h2 className="font-vollkorn font-extrabold text-navy text-[34px] md:text-[48px] leading-[1.04] tracking-normal text-balance">
          Every operating business runs on the same six.
        </h2>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(320px,520px)] gap-10 lg:gap-14 items-start">
          <div className="max-w-[760px] text-[16px] md:text-[17px] text-ink leading-relaxed space-y-4">
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
            <div className="bg-white border border-navy/15 rounded-md shadow-[0_2px_16px_rgba(20,40,64,0.07)] p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/diagrams/six-constellations.svg"
                alt="The Six Process Constellations around a sovereign data core"
                width={810}
                height={940}
                className="w-full h-auto block"
              />
            </div>
            <figcaption className="mt-3 font-vollkorn italic text-warm-gray text-[12.5px] leading-[1.5] text-center max-w-[46ch] mx-auto">
              The same six in every business; the fill is built from your
              actual work.
            </figcaption>
          </figure>
        </div>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-cream px-0 md:px-8 pt-16 md:pt-20 pb-20 md:pb-24">
        <SectionKicker className="mb-4">Architecture</SectionKicker>
        <h2 className="font-vollkorn font-extrabold text-navy text-[34px] md:text-[48px] leading-[1.04] tracking-normal text-balance">
          I design above the vendors.
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] md:text-[17px] text-ink leading-relaxed">
          The vendor stack matters, but it cannot be the transformation&apos;s
          owner. I make the business architecture explicit: systems in their
          places, data governed as a core asset, workflows mapped to the six
          constellations, and decisions visible enough for executives and
          operators to act on the same truth.
        </p>
        <p className="mt-8 max-w-[820px] font-vollkorn italic text-warm-gray text-[15px] md:text-[16px] leading-snug">
          The deeper mechanics belong in the article layer. On the main site,
          the principle is enough: architecture first,
          vendors second, ownership always.
        </p>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-pale-navy px-0 md:px-8 pt-16 md:pt-20 pb-20 md:pb-24">
        <SectionKicker className="mb-4">Delivery</SectionKicker>
        <h2 className="font-vollkorn font-extrabold text-navy text-[34px] md:text-[48px] leading-[1.04] tracking-normal text-balance">
          Delivery is where the asset gets proven.
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] md:text-[17px] text-ink leading-relaxed">
          The work runs in an agile-fall cadence: fast cycles where operators
          need iteration, clean phase discipline where the board, CFO, and
          audit trail need control. BOSS gives the work a visible delivery
          frame: deliver the workflow, validate it through real use, then mark
          it done/done only when both axes are green.
        </p>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-cream px-0 md:px-8 pt-16 md:pt-20 pb-20 md:pb-24">
        <SectionKicker className="mb-4">Success</SectionKicker>
        <h2 className="font-vollkorn font-extrabold text-navy text-[34px] md:text-[48px] leading-[1.04] tracking-normal text-balance">
          The test is what remains after I leave.
        </h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <p className="lg:col-span-2 max-w-[820px] font-vollkorn italic font-medium text-warm-gray text-[20px] md:text-[22px] leading-snug">
            The drag eases where you feel it most. The close runs faster.
            Exceptions stop piling up. Vendor meetings stop being standoffs.
            The board updates stop sounding defensive. Quietly, the business
            starts running better than it did before I arrived.
          </p>
          <div>
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-gray mb-3">
              Measured by
            </p>
            <p className="text-[16px] md:text-[17px] text-ink leading-relaxed">
              Cleaner decisions, fewer exceptions, faster close cycles, less
              vendor drag, and operators who can explain how the system works
              because they helped validate it.
            </p>
          </div>
          <div>
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-gray mb-3">
              Leaves behind
            </p>
            <p className="text-[16px] md:text-[17px] text-ink leading-relaxed">
              A living operating asset the business owns: mapped workflows,
              governed data, visible delivery state, self-maintaining SOPs, and
              a team capable of carrying the next cycle.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[680px] bg-navy text-cream font-body rounded-[6px] shadow-[0_2px_24px_rgba(20,40,64,0.08)] border-l-[4px] border-l-gold px-8 md:px-10 lg:px-12 py-10 md:py-12 lg:py-14">
          <p className="font-body font-semibold uppercase text-gold text-[10.5px] md:text-[11.5px] tracking-[0.24em] mb-6">
            Operator to operator
          </p>
          <h2 className="font-vollkorn font-bold text-cream text-[28px] md:text-[36px] lg:text-[42px] leading-[1.18] tracking-normal mb-5">
            Bring the messy version.
          </h2>
          <p className="font-vollkorn italic font-normal text-[#DCD9CC] text-[14.5px] md:text-[15.5px] leading-[1.6] mb-8">
            The current systems, the stalled decision, the vendor knot, the
            executive mandate, the agentic ambition. I do not need a polished
            problem. I need the real one.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 bg-gold text-navy font-body font-semibold uppercase text-[13px] md:text-[14px] tracking-[0.18em] px-8 py-4 rounded-full hover:bg-[#FFD740] hover:shadow-lg transition-all duration-200"
          >
            Start a conversation <span aria-hidden>&rarr;</span>
          </Link>
          <p className="mt-8 pt-6 border-t border-cream/15 font-body italic text-[#9EA0A6] text-[13px] md:text-[13.5px] leading-[1.5]">
            For how the model plugs in, see{" "}
            <Link
              href="/engagement/"
              className="text-gold hover:text-[#FFD740] underline underline-offset-2 not-italic whitespace-nowrap"
            >
              Engagement &rarr;
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
