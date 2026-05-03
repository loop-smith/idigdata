"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/approach", label: "Approach" },
  { href: "/boss", label: "BOSS" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-navy/10">
      <div className="mx-auto max-w-content px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" aria-label="idigdata — home">
          <img
            src="/idigdata-mark.svg"
            alt=""
            aria-hidden
            className="h-8 w-8"
          />
          <span className="font-vollkorn font-bold text-navy text-[22px] leading-none tracking-tight">
            idigdata
          </span>
        </Link>
        <nav className="font-body text-[15px] text-navy flex items-center gap-2">
          {NAV.map((item, i) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <span key={item.href} className="flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden className="text-stone">
                    ·
                  </span>
                )}
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`hover:text-stone transition-colors ${
                    isActive
                      ? "border-b-2 border-aubergine pb-0.5 text-aubergine"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              </span>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
