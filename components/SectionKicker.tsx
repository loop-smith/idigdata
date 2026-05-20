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
      className={`flex items-center gap-3 ${
        align === "center" ? "justify-center" : ""
      } ${className}`}
    >
      <span aria-hidden="true" className="block h-0.5 w-7 bg-navy" />
      <span className="font-body font-semibold uppercase tracking-[0.2em] text-[11px] text-navy">
        {children}
      </span>
    </div>
  );
}
