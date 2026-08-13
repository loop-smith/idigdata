import type { FieldMark } from "@/lib/field/marks";

type Props = {
  marks: FieldMark[];
  label?: string;
};

export default function LogoStrip({ marks, label = "Hands-on command" }: Props) {
  if (marks.length === 0) return null;

  return (
    <div>
      <p className="mb-3 font-brand text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray">
        {label}
      </p>
      <ul className="flex flex-wrap gap-2">
        {marks.map((mark) => (
          <li key={mark.name}>
            {mark.src ? (
              <span className="inline-flex h-14 items-center gap-2 border border-navy/15 bg-paper px-3 py-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element -- static brand lockups */}
                <img
                  src={mark.src}
                  alt={mark.includesWord ? mark.name : ""}
                  className="h-10 w-auto max-w-[9rem] object-contain object-left"
                />
                {mark.includesWord ? null : (
                  <span className="font-brand text-[11px] font-semibold uppercase tracking-[0.12em] text-navy">
                    {mark.name}
                  </span>
                )}
              </span>
            ) : (
              <span className="inline-flex min-h-10 items-center border border-navy/15 bg-paper px-3 py-2 font-brand text-[11.5px] font-semibold uppercase tracking-[0.14em] text-navy">
                {mark.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
