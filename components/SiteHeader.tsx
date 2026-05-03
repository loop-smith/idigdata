"use client";

import Image from "next/image";
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
        <Link href="/" className="flex items-center group" aria-label="idigdata — home">
          <Image
            src="/idigdata-wordmark-only.svg"
            alt="idigdata"
            width={155}
            height={32}
            priority
            className="h-8 w-auto"
          />
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
