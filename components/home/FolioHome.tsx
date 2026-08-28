import Link from "next/link";
import PresenceShell from "@/components/presence/PresenceShell";
import HaloFilm from "@/components/presence/HaloFilm";

export default function FolioHome() {
  return (
    <PresenceShell>
      <section className="p-section p-section--hire">
        <div className="page-well">
          <div className="hero-split">
            <div>
              <h1 className="p-h1">Your transformation gets an owner.</h1>
              <p className="p-dek">
                Application systems and agentic AI. I have done both layers, and
                I come inside to own delivery. You keep what we build. The
                operation stays up.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link href="/contact/" className="p-btn">
                  <span className="p-gold-sq" aria-hidden="true" />
                  Start a conversation
                </Link>
                <Link href="/application-layer/" className="p-link">
                  See the application layer
                </Link>
              </div>
            </div>
            <div className="home-watermark" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/idigdata-mark.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well beats">
          <article className="beat">
            <h3 className="beat-kicker">The application layer</h3>
            <div>
              <h2 className="beat-h2">
                Enterprises keep buying technology and stacking it on what
                already runs. The failures show up between people, vendors, SI
                teams, and siloed data.
              </h2>
              <p className="p-prose">
                Everyone owns their piece. Vendors own the product map. SIs own
                the delivery map for their mandate. The company rarely owns the
                operating map above them. Systems, six process constellations,
                and people on a company-owned data core. I have spent 30 years
                doing exactly that: keeping the operation up while the stack
                moves.
              </p>
            </div>
          </article>

          <article className="beat">
            <h3 className="beat-kicker">The arrival of agentics</h3>
            <div>
              <h2 className="beat-h2">
                Enterprise-Agentics has already landed on that same old mess.
                People are putting agents to work inside the business, often
                without guardrails or a company-owned operating model.
              </h2>
              <p className="p-prose">
                The company must know what is running, control what it can
                reach and do, keep an accountable person in command, and prove
                what happened. Governance and risk are operating questions now.
                Few companies have a path they can own.
              </p>
            </div>
          </article>

          <article className="beat-gold">
            <div className="beat" style={{ borderBottom: "none", paddingBottom: 0 }}>
              <h3 className="beat-kicker">Both layers</h3>
              <div>
                <h2 className="beat-h2">
                  What you get is both layers under one owner. The application
                  layer keeps the business running while the stack moves.
                  Enterprise-Agentics is the new layer: owned, not rented. The
                  result is a living asset the company keeps. The work remains
                  one job across people, data, and workflows.
                </h2>
                <p className="p-prose">
                  A capital asset that protects and expands{" "}
                  <strong>Operating Income</strong>, not another expense line.
                  Operating Income is the heart and soul of enterprise
                  health: real operating cash flow and gross margin defense, not
                  EBITDA abstractions. Keep-running lives on the application
                  layer. The agentic layer is how the new arrival actually runs.
                </p>
              </div>
            </div>
          </article>

          <div className="manifesto-plaque">
            <div className="plaque-header">
              <span className="plaque-tag">The Value of Information</span>
              <span className="plaque-cite">Grace Hopper · 1982</span>
            </div>
            <h2 className="plaque-h2">The IP of every company is its data.</h2>
            <p className="plaque-dek">
              Tools, platforms, and AI models change with every wave. I put the
              power, ownership, and judgment back into the company.
            </p>
            <div className="axioms-stack">
              <div className="axiom-item">
                <span className="axiom-label">People</span>
                <span className="axiom-text">
                  Human command on the last move. Floor to board accountability.
                </span>
              </div>
              <div className="axiom-item">
                <span className="axiom-label">Systems</span>
                <span className="axiom-text">
                  ERPs, SaaS, and agentic workflows are rented tools to execute
                  the work.
                </span>
              </div>
              <div className="axiom-item">
                <span className="axiom-label">Data</span>
                <span className="axiom-text">
                  <strong>The compounding sovereign asset.</strong> What the
                  company owns and keeps.
                </span>
              </div>
              <div className="axiom-item axiom-item--income">
                <span className="axiom-label">Income</span>
                <span className="axiom-text">
                  A capital asset the company keeps. Not another expense line.
                </span>
              </div>
            </div>
            <div className="plaque-footer">
              <span className="plaque-footer-left">
                POWER STAYS WITH THE COMPANY
              </span>
              <span className="plaque-footer-right">
                30 Years Inside · idigdata
              </span>
            </div>
          </div>

          <article className="beat" style={{ borderBottom: "none" }}>
            <h3 className="beat-kicker">An owner</h3>
            <div>
              <h2 className="beat-h2">Your transformation gets an owner.</h2>
              <p className="p-prose">
                I have done both layers, and I come inside to own delivery under
                the right mandate. The application layer is earned ground: more
                than 50 implementations and 15 full transformations taken
                through production. The agentic layer is live work right now:
                Enterprise-Agentics in production, with guardrails and an
                operating path the company owns. This is not shadow work on a
                laptop. The insurance is earned judgment on the first layer and
                live practice on the second.
              </p>
              <div className="lattice-object">
                <HaloFilm
                  src="/media/agentics-loop.mp4?c=5"
                  poster="/media/agentics-poster.png?c=5"
                  label="The running estate. Gold on the seams."
                  size={220}
                  round={false}
                />
                <div>
                  <h3 className="font-vollkorn text-[24px] font-extrabold text-navy">
                    The joints never had an owner.
                  </h3>
                  <p className="mt-2.5 text-[16.5px] leading-[1.6] text-[#243345]">
                    Every square already has a vendor. The seams are where it
                    fails. I sit there while the operation stays up.
                  </p>
                </div>
              </div>
              <div className="dossier">
                <p className="dossier-entry">
                  <strong>Most recent: CIO, Sierra Nevada Brewing (~$420M).</strong>{" "}
                  Full member of the executive leadership team. Led a $15M
                  enterprise transformation built on a company-owned data core,
                  rebuilt the IS function, and put agentic AI into production.
                </p>
                <p className="dossier-entry">
                  <strong>Earlier: CEO/CTO, Timberline.</strong> Scaled $250K to
                  $130M across US and China. Operating systems that had to hold
                  in the field.
                </p>
                <p className="dossier-entry">
                  Dock to the boardroom. Full-time or embedded, the shape
                  follows the mandate.
                </p>
                <p className="dossier-spine">
                  30 years · 50+ implementations · 15 full transformations at
                  scale · $100M–$1B operators · agentic AI in production.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="p-section p-section--close">
        <div className="page-well">
          <h2 className="p-h2 mx-auto max-w-[18ch]">
            If the work needs an owner, start there.
          </h2>
          <p className="mx-auto mt-5 max-w-[42rem] text-[18px] leading-[1.65]">
            No deck. No proposal theater. Bring the real situation: the legacy
            stack, the stalled modernization, the keep-running constraint.
            I&apos;ll walk you through exactly how I&apos;d own it. Permanent or
            fractional. The ownership standard does not change.
          </p>
          <div className="mt-8">
            <Link href="/contact/" className="p-btn">
              <span className="p-gold-sq" aria-hidden="true" />
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </PresenceShell>
  );
}
