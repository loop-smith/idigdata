export default function EngagementRoadmapEmbed() {
  return (
    <div className="my-8 rounded border border-stone overflow-hidden bg-white">
      <iframe
        src="/diagrams/engagement-roadmap.html"
        title="Engagement roadmap — phase model"
        className="w-full block"
        style={{ minHeight: "720px", border: "none" }}
      />
    </div>
  );
}
