import type { Metadata } from "next";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import EngagementShape from "@/components/EngagementShape";
import M4Watermark from "@/components/M4Watermark";
import RomanMarker from "@/components/RomanMarker";
import AccentRule from "@/components/AccentRule";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: {
    absolute:
      "idigdata — Client-owned data. Vendor-agnostic architecture. Transformation that institutionalizes.",
  },
  description:
    "Embedded for the full transformation. Fractional where a specific lever needs moving. Agentics standalone or stacked. Same architecture, sized to the work — for operators ready to own their data.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/",
    title: "idigdata — Transformation that institutionalizes",
    description:
      "Client-owned data. Vendor-agnostic architecture. For operators ready to own their data.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — Client-owned data. Vendor-agnostic architecture. Transformation that institutionalizes.",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-content px-6">
      {/* Hero */}
      <section className="relative bg-cream pt-16 pb-12 md:pt-24 md:pb-16 text-center">
        <M4Watermark position="top-right" />
        <p className="font-display italic text-navy text-[20px] md:text-[26px] leading-snug">
          Client-owned data &middot; Vendor-agnostic architecture &middot;
          Transformation that institutionalizes
        </p>
        <p className="mt-3 inline-flex items-center gap-2 font-display italic text-warm-gray text-[15px]">
          <img
            src="/idigdata-mark.svg"
            alt=""
            aria-hidden
            className="h-5 w-5 inline-block"
          />
          <span>idigdata — Data Integration Group, est. 2016</span>
        </p>

        <figure className="mt-12 mx-auto max-w-[820px]">
          <blockquote className="relative font-vollkorn italic text-navy text-[24px] md:text-[30px] leading-snug px-10">
            <span
              aria-hidden
              className="font-vollkorn text-stone text-[44px] md:text-[55px] leading-none align-top absolute -left-1 -top-3"
            >
              &ldquo;
            </span>
            After thirty years, I built the model that gives mid-market
            operators back their own businesses — and leaves them owning it
            after I&rsquo;m gone.
            <span
              aria-hidden
              className="font-vollkorn text-stone text-[44px] md:text-[55px] leading-none align-bottom absolute -right-1 -bottom-3"
            >
              &rdquo;
            </span>
          </blockquote>
        </figure>

        <p className="mt-12 mx-auto max-w-[820px] font-display italic text-warm-gray text-[18px] leading-relaxed">
          Embedded for the full transformation. Fractional where a specific
          lever needs moving. Agentics standalone or stacked on either. Same
          architecture, sized to the work — for operators ready to own their
          data.
        </p>
      </section>

      {/* Metrics strip */}
      <section className="py-6 border-y border-navy/30">
        <p className="text-center text-[14px]">
          <em className="font-display italic text-warm-gray">
            &ldquo;All businesses are uniquely standard&rdquo;
          </em>
          <span aria-hidden className="text-warm-gray px-3">
            ·
          </span>
          <strong className="font-semibold text-navy">50+</strong>{" "}
          <span className="text-warm-gray">mid-market transformations</span>
          <span aria-hidden className="text-warm-gray px-3">
            ·
          </span>
          <strong className="font-semibold text-navy">Agentic framework</strong>{" "}
          <span className="text-warm-gray">at brand scale</span>
        </p>
      </section>

      <AccentRule className="mt-16" />

      {/* THE NEW MODEL */}
      <section className="bg-pale-navy px-8 py-12 md:py-16">
        <h2 className="font-body font-bold uppercase tracking-section text-[14px] text-navy border-b border-stone pb-2 mb-8">
          The new model
        </h2>
        <div className="max-w-[820px] space-y-6 text-[16.5px] text-ink leading-relaxed">
          <p>
            For thirty years the mid-market has been told one model is the only
            model: license the platform, hire the partner, integrate on the
            vendor&rsquo;s calendar, migrate when they say so, pay
            implementation fees, pay support contracts, pay upgrade cycles, and
            accept that your data lives inside someone else&rsquo;s product.{" "}
            <strong className="font-semibold text-navy">
              That model is &ldquo;we own you and your data.&rdquo;
            </strong>{" "}
            It works for the vendors. It works for the implementation partners.
            It does not work for the operator running the business.
          </p>
          <p className="font-display italic text-navy">
            I built a different one.
          </p>
          <p>
            The client owns the data. The data lives in a Common Data Model the
            client controls. ERP becomes one app in the ecosystem. CRM becomes
            another app. WMS, HRIS, FP&amp;A — apps. Replaceable, swappable,
            contained. Vendor change is a commodity decision, not a
            transformation.{" "}
            <strong className="font-semibold text-navy">
              Sovereignty over data and integrations is structural, not
              negotiated.
            </strong>
          </p>
          <p>
            This is what BOSS — Business Operating System Suite — is for. Not
            another platform competing with SAP, D365, Acumatica, or
            Salesforce. The architectural layer above them. The one their
            business model can&rsquo;t offer because their business model{" "}
            <em>is</em> the lock-in.
          </p>
        </div>
      </section>

      {/* HOW I WORK preview */}
      <section className="bg-cream px-8 pt-20 md:pt-24 pb-16 mt-12">
        <h2 className="font-body font-bold uppercase tracking-section text-[14px] text-navy border-b border-stone pb-2 mb-8">
          How I work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <EngagementShape
            marker={<RomanMarker num={1} />}
            name="Embedded"
            lead="Best bang for the buck on a full transformation — short term and long term."
            body={
              <p>
                Full executive scope as contractor. Strategy, operations, vendor
                portfolio, risk, governance. BOSS deployment + agentic
                framework included.
              </p>
            }
          />
          <EngagementShape
            marker={<RomanMarker num={2} />}
            name="Fractional"
            lead="Plug me in at any stage of an existing project."
            body={
              <p>
                Specific lever moving — unblock a stalled ERP, deploy a
                production agent, re-architect the data core while your CIO
                stays in seat.
              </p>
            }
          />
          <EngagementShape
            marker={<RomanMarker num={3} />}
            name="Agentics"
            lead="Standalone, or stacked on either of the above."
            body={
              <p>
                Enterprise agentic framework. Five production apps in live
                operations is the proof; the framework is what makes it
                repeatable.
              </p>
            }
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/approach/"
            className="font-body font-semibold text-navy text-[15px] border-b border-navy/40 hover:border-navy"
          >
            Read the full approach →
          </Link>
        </div>
      </section>

      {/* BOSS preview */}
      <section className="bg-pale-navy px-8 pt-20 md:pt-24 pb-16 mt-12">
        <h2 className="font-body font-bold uppercase tracking-section text-[14px] text-navy border-b border-stone pb-2 mb-8">
          BOSS
        </h2>
        <div className="max-w-[860px] text-[16.5px] text-ink leading-relaxed">
          <p>
            <strong className="font-semibold text-navy">
              Business Operating System Suite.
            </strong>{" "}
            The platform that institutionalizes the new model in the
            client&rsquo;s hands. Three pillars:{" "}
            <strong className="font-semibold text-navy">Data</strong> (Common
            Data Model the client owns),{" "}
            <strong className="font-semibold text-navy">People</strong> (the
            beehive),{" "}
            <strong className="font-semibold text-navy">Delivery</strong> (PM +
            governance + change-mgmt unified). Open source. Productized from 30
            years of transformation.{" "}
            <strong className="font-semibold text-navy">
              What partner-led transformation produces in months, this model
              produces in weeks — the persistence layer is why.
            </strong>
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/boss/"
            className="font-body font-semibold text-navy text-[15px] border-b border-navy/40 hover:border-navy"
          >
            How BOSS works →
          </Link>
        </div>
      </section>

      {/* Articles preview */}
      <section className="bg-cream px-8 pt-20 md:pt-24 pb-16 mt-12">
        <h2 className="font-body font-bold uppercase tracking-section text-[14px] text-navy border-b border-stone pb-2 mb-8">
          Peer-reviewed articles
        </h2>
        <p className="max-w-[820px] font-display italic text-stone text-[17px] leading-snug mb-8">
          Six articles authored from 30 years of operator practice. In peer
          review.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((a) => (
            <ArticleCard
              key={a.slug}
              slug={a.slug}
              title={a.title}
              thesis={a.thesis}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/articles/"
            className="font-body font-semibold text-navy text-[15px] border-b border-navy/40 hover:border-navy"
          >
            All articles →
          </Link>
        </div>
      </section>

      {/* Selectivity beat */}
      <section className="bg-pale-navy px-8 pt-20 md:pt-24 pb-16 mt-12">
        <h2 className="font-body font-bold uppercase tracking-section text-[14px] text-navy border-b border-stone pb-2 mb-8">
          Who this isn&rsquo;t for
        </h2>
        <div className="max-w-[820px] border-l-2 border-stone pl-6 space-y-5 text-[16.5px] text-ink leading-relaxed">
          <p>
            Operators comfortable with their partner relationships. Operators
            paying license stacks, implementation fees, support contracts,
            upgrade cycles, and migration retrofits on the vendor&rsquo;s
            calendar. Operators whose users have learned to live with what the
            system gives them. Operators whose AI claim has outpaced their
            operating fabric and who think the next vendor pitch will fix it.
          </p>
          <p>
            <em>
              If the lock-in model is working for you, keep going. The new
              model has a higher bar of belief and a different shape of work.
            </em>{" "}
            <strong className="font-semibold text-navy">
              It&rsquo;s not a fit for everyone. By design.
            </strong>
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mt-24 mb-16 md:mb-24">
        <div className="bg-navy text-white px-6 py-14 md:py-16 text-center">
          <p className="font-display italic text-[24px] md:text-[28px]">
            Ready to talk?
          </p>
          <div className="mt-8">
            <Link
              href="/contact/"
              className="inline-block font-body font-semibold text-[16px] px-8 py-3.5 bg-gold text-navy hover:bg-white transition-colors focus:outline-2 focus:outline-white focus:outline-offset-2"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
