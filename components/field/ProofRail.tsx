import type { FieldMark } from "@/lib/field/marks";
import LogoStrip from "@/components/field/LogoStrip";
import SceneSlot, { type SceneKind } from "@/components/field/SceneSlot";

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

type Props = {
  marks?: FieldMark[];
  markLabel?: string;
  scene: SceneKind;
  sceneSrc?: string;
  quote?: string;
};

export default function ProofRail({
  marks,
  markLabel,
  scene,
  sceneSrc,
  quote,
}: Props) {
  return (
    <div className="mt-10 space-y-6">
      {marks && marks.length > 0 ? (
        <LogoStrip marks={marks} label={markLabel} />
      ) : null}
      <SceneSlot
        kind={scene}
        src={sceneSrc}
        plateId={`${scene}-${slug(markLabel ?? marks?.[0]?.name ?? "scene")}`}
      />
      {quote ? (
        <blockquote className="border-l-[3px] border-gold pl-4 font-vollkorn text-[18px] font-medium italic leading-snug text-navy md:text-[20px]">
          {quote}
        </blockquote>
      ) : null}
    </div>
  );
}
