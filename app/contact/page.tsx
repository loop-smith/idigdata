import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import JsonLdScript from "@/components/analytics/JsonLdScript";
import HaloFilm from "@/components/presence/HaloFilm";
import PresenceShell from "@/components/presence/PresenceShell";

export const metadata: Metadata = {
  title: { absolute: "Contact | idigdata" },
  description:
    "Bring the real operating problem. Permanent or fractional. The ownership standard does not change.",
  alternates: { canonical: "/contact/" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://idigdata.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: "https://idigdata.com/contact/",
    },
  ],
};

export default function ContactPage() {
  return (
    <PresenceShell>
      <JsonLdScript data={breadcrumbJsonLd} />
      <header className="p-section p-section--hire">
        <div className="page-well">
          <p className="p-kicker">Contact</p>
          <h1 className="p-h1">Bring the real operating problem.</h1>
          <p className="p-dek">
            Come with the shape, the stakes, and the constraints. We will know
            quickly if I am the fit.
          </p>
          <div className="p-lead">
            <p>
              I take on the application layer, the agentic layer, or both. One
              owner. Permanent or fractional embed. The ownership standard does
              not change.
            </p>
            <p>
              Built for enterprise and mid-market operators ($100M–$1B+) focused
              on protecting and expanding Operating Income.
            </p>
          </div>
        </div>
      </header>

      <section className="p-section p-section--job">
        <div className="page-well">
          <p className="p-kicker">The note</p>
          <h2 className="p-h2">Write it in your own words.</h2>
          <p className="p-prose">
            If the fit is wrong, I will say so plainly. If the mandate is real,
            we will know the next useful step.
          </p>
          <div className="form-grid">
            <ContactForm />
            <aside>
              <p className="font-vollkorn text-[16px] font-bold text-navy">
                Direct
              </p>
              <p className="mt-3 text-[16px] leading-[1.65]">
                Pacific Time
                <br />
                <a
                  href="mailto:robert@idigdata.com"
                  className="font-semibold text-navy underline decoration-navy/40 underline-offset-4"
                >
                  robert@idigdata.com
                </a>
              </p>
              <p className="mt-4 text-[15px] leading-[1.65]">
                <a
                  href="https://www.linkedin.com/in/robertpaddock"
                  className="font-semibold text-navy underline decoration-navy/40 underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                {" · "}
                Robert Paddock
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="p-section" style={{ borderBottom: 0 }}>
        <div className="page-well">
          <div className="lastmove-plate">
            <HaloFilm
              src="/media/threshold-loop.mp4?c=1"
              poster="/media/threshold-poster.png?c=1"
              label="One real problem crosses the threshold and lands with an owner."
              size={220}
            />
            <div>
              <p className="font-vollkorn text-[13px] font-bold uppercase tracking-[0.16em] text-[#B48A05]">
                Direct
              </p>
              <h3 className="mt-1 font-vollkorn text-[clamp(24px,3vw,32px)] font-extrabold text-navy">
                You speak with the person who does the work.
              </h3>
              <p className="mt-3 text-[17px] leading-[1.65]">
                No account executives, no junior bench, no pitch decks. One
                real problem lands with an accountable owner.
              </p>
              <p className="mt-4 text-[15px] leading-[1.55] text-[#5A6978]">
                Pacific Time
              </p>
            </div>
          </div>
        </div>
      </section>
    </PresenceShell>
  );
}
