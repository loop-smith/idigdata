import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export default function SectionKicker({
  children,
  className = "",
  align = "left",
}: Props) {
  return (
    <div
      className={`flex items-start gap-3 ${
        align === "center" ? "justify-center" : ""
      } ${className}`}
    >
      <span aria-hidden="true" className="mt-[0.45em] block h-0.5 w-7 shrink-0 bg-navy" />
      <span className="min-w-0 break-words font-body text-[11px] font-semibold uppercase leading-snug tracking-[0.2em] text-navy">
        {children}
      </span>
    </div>
  );
}
