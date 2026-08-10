import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import M4Watermark from "@/components/M4Watermark";
import SectionKicker from "@/components/SectionKicker";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const metadata: Metadata = {
  title: "Contact | idigdata",
  description:
    "Start a direct conversation with Robert Paddock about a real transformation to own.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/contact/",
    title: "Contact | idigdata",
    description:
      "Start a direct conversation with Robert Paddock about a real transformation to own.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata - Contact",
      },
    ],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://idigdata.com/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://idigdata.com/contact/" },
  ],
};

const situations = [
  "Core transformation",
  "Transformation recovery",
  "Applied Agentics nested on the same ownership seat",
] as const;

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-stone/40 pt-8 first:border-t-0 first:pt-0">
      <h2 className="font-vollkorn font-bold text-navy text-[26px] md:text-[30px] leading-tight tracking-tight">
        {title}
      </h2>
      <div className="mt-4 space-y-4 font-body text-[15px] md:text-[16px] text-ink leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-content px-6">
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="relative pt-20 pb-10 md:pt-24 md:pb-12">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-5">Contact</SectionKicker>
        <h1 className="font-vollkorn font-bold text-navy text-[40px] md:text-[52px] leading-[1.05] tracking-tight">
          Bring the real operating problem.
        </h1>
        <p className="mt-5 max-w-[760px] font-display italic text-warm-gray text-[18px] leading-snug">
          If your company needs someone to own a real transformation from the
          inside, let&apos;s talk.
        </p>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="max-w-[760px] space-y-8">
          <ContentSection title="What needs to be owned?">
            <p>
              Core transformation, recovery, or Applied Agentics on the same
              seat. The customer-side ownership standard does not change.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              {situations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ContentSection>

          <ContentSection title="The mandate determines the seat.">
            <p>
              Employment mechanics follow the work; accountability does not.
              Wrapper menus stay out of the public offer. Full-time or contract
              are conversation settings after the mission is real - not the
              homepage product.
            </p>
          </ContentSection>

          <ContentSection title="How the bench works">
            <p>
              No standing delivery pyramid. I bring the specialists the mandate
              requires and remain accountable for the whole result.
            </p>
          </ContentSection>

          <ContentSection title="Where I do my best work">
            <p>
              $100M-$1B operators - CPG and AEC first, plus manufacturing,
              distribution, logistics, DTC, construction and engineered products,
              multi-entity services. PE-backed, founder-led, family-owned.
              Material ERP, integration, data, vendor, or agentic complexity.
            </p>
            <p className="text-warm-gray">
              Non-fit: Hospitals and medical clinics -{" "}
              <Link
                href="/faq/"
                className="font-semibold text-navy border-b border-navy/40 hover:border-navy"
              >
                see FAQ
              </Link>
              .
            </p>
          </ContentSection>

          <ContentSection title="What to bring">
            <p>
              The real operating problem - shape, stakes, constraints. We shape
              the mandate from there.
            </p>
          </ContentSection>
        </div>
      </section>

      <section className="pt-2 pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div className="md:col-span-2">
            <ContactForm showInterestSelect />
          </div>

          <aside className="md:col-span-1">
            <div className="border-t border-navy pt-6 space-y-3">
              <p className="font-body uppercase tracking-section text-[12px] text-warm-gray">
                Direct
              </p>
              <p className="font-body text-[16px] text-ink leading-relaxed">
                Pacific Time
                <br />
                <a
                  href="mailto:robert@idigdata.com"
                  className="font-semibold text-navy border-b border-navy/40 hover:border-navy"
                >
                  robert@idigdata.com
                </a>
              </p>
              <p className="font-body text-[14px] text-warm-gray leading-relaxed">
                If the fit is wrong, I will say so plainly. If the mandate is
                real, we will know the next useful step.
              </p>
              <p className="font-body text-[14px] text-warm-gray leading-relaxed pt-2">
                <a
                  href="https://www.linkedin.com/in/robertpaddock"
                  className="font-semibold text-navy border-b border-navy/40 hover:border-navy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                {" · "}
                Robert Paddock
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-stone/40 pb-20 pt-10">
        <p className="max-w-[760px] font-display italic text-warm-gray text-[18px] leading-snug">
          If your company needs someone to own a real transformation from the
          inside, let&apos;s talk.
        </p>
        <p className="mt-6 font-body text-[13px] text-warm-gray/80">
          No permanent / interim / fractional laundry on this page.
        </p>
      </section>
    </div>
  );
}
