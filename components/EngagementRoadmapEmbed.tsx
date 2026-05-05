import Link from "next/link";

export default function EngagementRoadmapEmbed() {
  return (
    <>
      {/* Desktop / tablet: iframe embed */}
      <div className="hidden md:block my-8 rounded border border-stone overflow-hidden bg-white">
        <iframe
          src="/diagrams/engagement-roadmap.html"
          title="Engagement roadmap — phase model"
          className="w-full block"
          style={{ minHeight: "720px", border: "none" }}
        />
      </div>

      {/* Mobile: card link → opens roadmap in a new tab with native pinch-zoom */}
      <Link
        href="/diagrams/engagement-roadmap.html"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden my-8 block rounded border border-stone bg-white px-5 py-6 hover:border-navy transition-colors"
      >
        <span className="block font-body uppercase tracking-section text-[11px] text-stone mb-2">
          Engagement roadmap
        </span>
        <span className="block font-vollkorn font-semibold text-navy text-[18px] leading-tight mb-2">
          Phase model — open the interactive diagram →
        </span>
        <span className="block font-body text-warm-gray text-[14px] leading-relaxed">
          The full roadmap is best viewed on a larger screen. Tap to open it
          full-page; pinch-zoom and pan as needed.
        </span>
      </Link>
    </>
  );
}
