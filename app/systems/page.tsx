import type { Metadata } from "next";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";
import SectionKicker from "@/components/SectionKicker";

export const metadata: Metadata = {
  title: {
    absolute: "How Robert Paddock Delivers Enterprise Transformation | idigdata",
  },
  description:
    "I engage with businesses to turn operating knowledge into living software assets they can own, govern, operate, and evolve — not seats.",
  alternates: { canonical: "/systems/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/systems/",
    title: "How Robert Paddock Delivers Enterprise Transformation | idigdata",
    description:
      "I engage with businesses to turn operating knowledge into living software assets they can own — Rig builds; BOSS and FlowCraft stay with the company.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — How I deliver",
      },
    ],
  },
};

const shop = {
  outcome: "Control the change",
  name: "Rig",
  accent: "#0ea5b7",
  logo: "/brand/systems/rig-banner-logo.png",
  logoWidth: 120,
  logoHeight: 93,
  alt: "The Rig mark",
  line: "The Rig is my builder shop — the collective and control fabric that designs and builds BOSS and FlowCraft engagements. Plans, gates, evidence, handoffs, and receipts stay inspectable so the work does not disappear into chat or vendor state. You do not buy the Rig. You hire the engagement it makes possible.",
};

const deliverables = [
  {
    outcome: "Map the business",
    name: "BOSS",
    accent: "#e8762d",
    logo: "/brand/systems/boss-banner-logo.png",
    logoWidth: 168,
    logoHeight: 52,
    alt: "BOSS mark",
    line: "A client-owned current-state digital twin of the business I walk into — agentic, perfected at Sierra Nevada Brewing. It collapses months of consultant and employee mapping into an owned map of data, systems, processes, and owners, then either readies the company for third-party systems and integrations or maps the ground for truly agentic workflows. No peer stack carries the same PM suite, executive stakeholder management, and change-management suite in one twin.",
    keeps:
      "Your twin — discovery shortened, delivery steered, adoption held — the foundation for modernization or agentics.",
  },
  {
    outcome: "Run the work",
    name: "FlowCraft",
    accent: "#3ce624",
    logo: "/brand/systems/flowcraft-banner-logo.png",
    logoWidth: 140,
    logoHeight: 100,
    alt: "FlowCraft mark",
    line: "A fully agentic workflow-block builder on the BOSS map — common standards and each firm's uniqueness and IP. All companies are uniquely standard; FlowCraft agentizes that. DigOps is where I run this model in my own practice as proof, not as a product you rent.",
    keeps:
      "Your firm runtime of human-and-agent workflow blocks — owned by the business, not metered as seats.",
  },
];

export default function SystemsPage() {
  return (
    <div className="mx-auto max-w-content bg-cream px-6 font-body text-navy">
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-20">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-7">How I deliver</SectionKicker>
        <div className="max-w-[880px]">
          <h1 className="max-w-full text-wrap break-words font-vollkorn text-[42px] font-bold leading-[1.08] text-navy sm:text-[54px] md:text-[70px]">
            The business should be stronger after I leave.
          </h1>
          <p className="mt-7 max-w-[760px] text-wrap break-words font-vollkorn text-[20px] italic leading-[1.42] text-warm-gray md:text-[26px]">
            I engage with businesses to turn their operating knowledge into
            living software assets they can own, govern, operate, and evolve.
          </p>
          <p className="mt-5 max-w-[760px] text-[16px] leading-[1.65] text-navy">
            The paid work is the engagement — design, build, training, and
            transfer — not metering seats. In an agentic age, software is the
            instrument of the engagement. What stays is owned capability:
            people, data, and systems the company can run without me.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">The shop</SectionKicker>
        <h2 className="mb-8 max-w-[22ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          I bring a builder shop. You keep the assets.
        </h2>
        <article className="grid grid-cols-1 gap-6 border border-navy/15 bg-white px-6 py-8 md:grid-cols-[100px_1fr] md:items-start md:gap-10 md:px-8 md:py-10">
          <div className="flex h-[72px] w-[100px] items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={shop.logo}
              alt={shop.alt}
              className="block object-contain opacity-90"
              style={{
                width: `${shop.logoWidth * 0.72}px`,
                height: `${shop.logoHeight * 0.72}px`,
              }}
            />
          </div>
          <div>
            <p
              className="font-body text-[10.5px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: shop.accent }}
            >
              {shop.outcome}
            </p>
            <h3 className="mt-2 font-vollkorn text-[26px] font-bold leading-[1.18] text-navy md:text-[30px]">
              {shop.name}
            </h3>
            <p className="mt-3 max-w-[58ch] font-body text-[16px] leading-[1.65] text-navy">
              {shop.line}
            </p>
            <p className="mt-4 max-w-[58ch] border-l-[3px] border-gold pl-4 font-body text-[14.5px] leading-[1.55] text-navy/70">
              <span className="font-semibold text-navy">Not a client SKU — </span>
              the Rig stays with the shop. What you see during the engagement
              is inspectable progress; what you keep are the assets below.
            </p>
          </div>
        </article>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Map · Run</SectionKicker>
        <h2 className="mb-10 max-w-[28ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          Engagement deliverables the business owns.
        </h2>
        <div className="flex flex-col gap-0 border border-navy/15 bg-white">
          {deliverables.map((item, i) => (
            <article
              key={item.name}
              className={`grid grid-cols-1 gap-6 px-6 py-8 md:grid-cols-[100px_1fr] md:items-start md:gap-10 md:px-8 md:py-10 ${
                i > 0 ? "border-t border-navy/10" : ""
              }`}
            >
              <div className="flex h-[72px] w-[100px] items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.logo}
                  alt={item.alt}
                  className="block object-contain opacity-90"
                  style={{
                    width: `${item.logoWidth * 0.72}px`,
                    height: `${item.logoHeight * 0.72}px`,
                  }}
                />
              </div>
              <div>
                <p
                  className="font-body text-[10.5px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: item.accent }}
                >
                  {item.outcome}
                </p>
                <h3 className="mt-2 font-vollkorn text-[26px] font-bold leading-[1.18] text-navy md:text-[30px]">
                  {item.name}
                </h3>
                <p className="mt-3 max-w-[58ch] font-body text-[16px] leading-[1.65] text-navy">
                  {item.line}
                </p>
                <p className="mt-4 max-w-[58ch] border-l-[3px] border-gold pl-4 font-body text-[14.5px] leading-[1.55] text-navy/70">
                  <span className="font-semibold text-navy">What you keep — </span>
                  {item.keeps}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Commercial model</SectionKicker>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            Not metering software. Delivering owned capability.
          </h2>
          <div className="space-y-5 font-body text-[15.5px] leading-[1.65] text-navy">
            <p>
              You pay for the engagement that installs the asset — operator-led
              design, build, training, and transfer — so your people can build,
              iterate, control, and observe the stack after I leave. BOSS and
              FlowCraft instances are engagement deliverables, not SaaS seats.
            </p>
            <p>
              Agentic AI belongs on the same ownership layer. Production depth
              and the apps behind it live on{" "}
              <Link
                href="/agentics/"
                className="font-semibold text-navy underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
              >
                Agentic AI
              </Link>
              — instrument, not a second brand.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-navy/15 py-16 md:py-24">
        <div className="mx-auto max-w-[700px] border-l-[4px] border-l-gold bg-navy px-8 py-10 text-cream md:px-10 md:py-12">
          <p className="font-body text-[10.5px] font-semibold uppercase tracking-[0.24em] text-gold">
            If the mandate is real
          </p>
          <h2 className="mt-5 font-vollkorn text-[31px] font-bold leading-[1.18] text-cream md:text-[42px]">
            If the work needs an owner, start there.
          </h2>
          <p className="mt-5 font-vollkorn text-[17px] italic leading-[1.55] text-[#DCD9CC]">
            Bring the real situation — stalled transformation, ERP mess, or an
            ownership gap above the vendors — and I&apos;ll walk you through
            how I&apos;d own it.
          </p>
          <Link
            href="/contact/"
            className="mt-8 inline-flex items-center gap-2 rounded-[3px] bg-gold px-8 py-4 font-body text-[13px] font-semibold uppercase tracking-[0.18em] text-navy transition hover:bg-[#FFD740]"
          >
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
