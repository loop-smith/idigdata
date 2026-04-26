"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-d2-forest/10">
      <div className="mx-auto max-w-content px-6 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-bold text-d2-forest text-[22px] leading-none tracking-tight"
        >
          idigdata
        </Link>
        <nav className="font-body text-[15px] text-d2-forest flex items-center gap-2">
          {NAV.map((item, i) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <span key={item.href} className="flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden className="text-d2-stone">
                    ·
                  </span>
                )}
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`hover:text-d2-stone transition-colors ${
                    isActive
                      ? "border-b-2 border-d2-aubergine pb-0.5 text-d2-aubergine"
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
