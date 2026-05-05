import type { Metadata } from "next";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";
import RomanMarker from "@/components/RomanMarker";
import AccentRule from "@/components/AccentRule";
import Beehive from "@/components/diagrams/Beehive";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const metadata: Metadata = {
  title: "BOSS — Business Operating System Suite",
  description:
    "The platform that institutionalizes the new model in the client's hands. Three pillars: Data, People, Delivery. The SOP Machine. Persistence-and-sequenced-build.",
  alternates: { canonical: "/boss/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/boss/",
    title: "BOSS — Business Operating System Suite",
    description:
      "The system above your systems. Open source. Productized from 30 years of transformation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — BOSS — Business Operating System Suite",
      },
    ],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://idigdata.com/" },
    { "@type": "ListItem", position: 2, name: "BOSS", item: "https://idigdata.com/boss/" },
  ],
};

export default function BossPage() {
  return (
    <div className="mx-auto max-w-content px-6">
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="relative bg-cream pt-20 pb-10 md:pt-24 md:pb-14">
        <M4Watermark position="top-right" />
        <h1 className="font-vollkorn font-bold text-navy text-[40px] md:text-[52px] leading-[1.05] tracking-tight flex items-center gap-3 flex-wrap">
          <img
            src="/idigdata-mark.svg"
            alt=""
            aria-hidden="true"
            className="w-8 h-8 inline-block"
          />
          <span>BOSS — Business Operating System Suite</span>
        </h1>
        <p className="mt-5 max-w-[820px] font-display italic text-stone text-[20px] leading-snug">
          The platform that institutionalizes the new model in the
          client&rsquo;s hands. Thirty years of transformation practice, made
          runnable.
        </p>
      </section>

      <section className="bg-cream px-0 md:px-8 pt-4 pb-16">
        <h2 className="font-body font-bold uppercase tracking-section text-[14px] text-navy border-b border-navy pb-2 mb-8">
          Three pillars
        </h2>

        <div className="space-y-10 max-w-[860px]">
          <div>
            <h3 className="font-vollkorn font-bold text-navy text-[22px] md:text-[26px] tracking-tight">
              <RomanMarker num={1} />
              Data
            </h3>
            <p className="mt-3 text-[16px] text-ink leading-relaxed">
              Curation, transformation, annotation, quality, and governance —
              pulling a company&rsquo;s disparate data into one Common Data
              Model the client owns. Systems and data inventory.
              Six-constellation current-state process map. Data-to-Reports
              framework collapsing thousands of ad-hoc reports into one
              coherent model.
            </p>
          </div>
          <div>
            <h3 className="font-vollkorn font-bold text-navy text-[22px] md:text-[26px] tracking-tight">
              <RomanMarker num={2} />
              People
            </h3>
            <p className="mt-3 text-[16px] text-ink leading-relaxed">
              The beehive — organizing taskforces of leads and SMEs by
              departmental functional system groups. Change and stakeholder
              management. Operator empowerment.
            </p>
            <div className="my-10 max-w-2xl mx-auto -mx-8 md:mx-auto">
              <div className="overflow-x-auto px-8 md:px-0 [-webkit-overflow-scrolling:touch]">
                <div className="min-w-[560px] md:min-w-0 max-w-2xl mx-auto">
                  <Beehive />
                </div>
              </div>
              <p className="text-center font-display italic text-[13px] text-warm-gray mt-2 px-8 md:px-0">
                The beehive — universal frame for the people layer.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-vollkorn font-bold text-navy text-[22px] md:text-[26px] tracking-tight">
              <RomanMarker num={3} />
              Delivery
            </h3>
            <p className="mt-3 text-[16px] text-ink leading-relaxed">
              Project Management, Governance, and Stakeholder/Change
              Management as one unified suite. Sprint cadence, decision-traces,
              capitalization tracking (CFO-defensible per ASC 350-40),
              vendor-lane orchestration. Native or interop with the
              client&rsquo;s existing PM tool — adoption barrier collapses.
            </p>
          </div>
        </div>
      </section>

      <AccentRule className="mt-16" />

      <section className="bg-pale-navy px-0 md:px-8 pt-16 md:pt-20 pb-16 mt-8">
        <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[36px] tracking-tight">
          The SOP Machine
        </h2>
        <p className="mt-5 max-w-[820px] font-display italic text-stone text-[18px] leading-snug">
          Living, branded, self-maintaining SOPs — the holy grail of operator
          adoption, training, and onboarding.
        </p>
        <div className="mt-6 max-w-[820px] text-[16px] text-ink leading-relaxed space-y-5">
          <p>
            Every transformation in 30 years has produced SOPs that go stale
            within a quarter. BOSS solves it by construction. As E2E and UAT
            testers execute and sign off on validation cycles, the test
            execution evidence becomes the SOP content. SOPs auto-generate at
            the Business Process Step level. Standardized branding (per-client
            adapter), embedded visuals, version-controlled, on-screen viewing
            or download. They look like the company invested in their training
            because the company <em>is</em> investing in their training, every
            cycle.
          </p>
          <p>
            When an underlying step changes, the SOP auto-flags stale.
            Maintenance closes itself. The training material doesn&rsquo;t go
            on a shelf;{" "}
            <strong className="font-semibold text-navy">
              the operating procedure of the business stays current as a side
              effect of the operating system running.
            </strong>
          </p>
          <p className="font-display italic text-stone">
            Thirty years of transformation work and nobody else has solved
            this.
          </p>
        </div>
      </section>

      <section className="bg-cream px-0 md:px-8 pt-16 md:pt-20 pb-16 mt-12">
        <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[36px] tracking-tight">
          Persistence-and-sequenced-build
        </h2>
        <div className="mt-6 max-w-[820px] text-[16px] text-ink leading-relaxed space-y-5">
          <p>
            Persistence-and-sequenced-build is the substrate:{" "}
            <em>
              no data points lost, each phase compounds on the prior, registers
              replace static deliverables.
            </em>{" "}
            <strong className="font-semibold text-navy">
              What partner-led transformation produces in months, this model
              produces in weeks — the persistence layer is why.
            </strong>{" "}
            <em>The system above your systems.</em> Open source. Productized
            from 30 years of transformation. Clients own and maintain.
          </p>
        </div>
      </section>

      <section className="mt-24 mb-16 md:mb-24">
        <div className="text-center px-6 py-12 md:py-16 border-t border-navy">
          <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[34px] tracking-tight">
            How I deploy BOSS in an engagement
          </h2>
          <div className="mt-8">
            <Link
              href="/approach/"
              className="inline-block font-body font-semibold text-[16px] px-7 py-3.5 bg-navy text-white hover:bg-navy/90 transition-colors focus:outline-2 focus:outline-stone focus:outline-offset-2"
            >
              See the approach
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
