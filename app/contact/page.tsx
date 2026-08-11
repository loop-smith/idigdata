import type { Metadata } from "next";
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
          If your company needs a real transformation owned from inside the
          business, let&apos;s talk.
        </p>
        <p className="mt-4 max-w-[760px] font-body text-[15px] leading-relaxed text-ink">
          Come with the real problem - shape, stakes, constraints. We will know
          quickly if I am the fit.
        </p>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="max-w-[760px] space-y-8">
          <ContentSection title="What operating problem needs to be owned?">
            <p>
              I take on core transformation and recovery. Applied Agentics
              belongs inside that same ownership mandate when the production
              path is real.
            </p>
          </ContentSection>

          <ContentSection title="Accountability stays in one place.">
            <p>
              I remain accountable for the operating result across platforms,
              vendors, workstreams, and adoption.
            </p>
          </ContentSection>

          <ContentSection title="Where I fit best">
            <p>
              $100M-$1B operators, with CPG and AEC first and relevant
              experience across adjacent operating environments.
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
          If your company needs a real transformation owned from inside the
          business, let&apos;s talk.
        </p>
      </section>
    </div>
  );
}
