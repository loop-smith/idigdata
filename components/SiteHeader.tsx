"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PRIMARY_NAV } from "@/lib/nav";

const NAV = PRIMARY_NAV;

function HeaderWordmark() {
  return (
    <svg
      viewBox="0 0 620 130"
      width={620}
      height={130}
      className="h-10 w-auto md:h-11"
      role="img"
      aria-label="idigdata"
    >
      <text
        x="322"
        y="100"
        fill="#142840"
        textAnchor="end"
        letterSpacing="-1"
        style={{
          fontFamily: "var(--font-vollkorn), Vollkorn, Georgia, serif",
          fontWeight: 700,
          fontSize: 100,
        }}
      >
        idig
      </text>
      <rect x="324" y="63" width="20" height="20" fill="#FACC15" />
      <text
        x="346"
        y="100"
        fill="#142840"
        textAnchor="start"
        letterSpacing="-1"
        style={{
          fontFamily: "var(--font-vollkorn), Vollkorn, Georgia, serif",
          fontWeight: 700,
          fontSize: 100,
        }}
      >
        data
      </text>
    </svg>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const path = (pathname ?? "/").replace(/\/+$/, "") || "/";

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    const target = href.replace(/\/+$/, "") || "/";
    return target === "/" ? path === "/" : path === target || path.startsWith(`${target}/`);
  };

  return (
    <header className="relative sticky top-0 z-40 border-b border-navy/10 bg-cream/85 backdrop-blur-md">
      <div className="page-well flex items-center justify-between py-4 md:py-5">
        <Link
          href="/"
          className="flex items-center"
          aria-label="idigdata - home"
        >
          <HeaderWordmark />
        </Link>

        <nav
          className="hidden items-center gap-8 font-vollkorn text-[15px] font-semibold text-navy md:flex"
          aria-label="Primary"
        >
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`nav-underline transition-colors ${
                  active
                    ? "font-semibold text-navy"
                    : "text-navy/75 hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile nav: native details so one tap works without client state. */}
        <details
          className="group md:hidden"
          open={open}
          onToggle={(e) => {
            setOpen((e.currentTarget as HTMLDetailsElement).open);
          }}
        >
          <summary
            className="-mr-2 inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center text-navy marker:content-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg
              className="group-open:hidden"
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 3 H20 M2 9 H20 M2 15 H20"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="hidden group-open:block"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 4 L18 18 M18 4 L4 18"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </summary>
          <div
            className="fixed inset-x-0 top-[var(--site-header-h)] z-20 h-screen bg-navy/50 md:hidden"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <nav
            id="mobile-nav"
            className="absolute left-0 right-0 top-full z-30 border-b border-navy/15 bg-cream shadow-lg"
            aria-label="Primary"
          >
            <ul className="page-well flex flex-col py-4">
              {NAV.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-3 border-b border-navy/10 py-3.5 font-body text-[18px] text-navy transition-colors last:border-b-0 ${
                        active ? "font-semibold" : "hover:text-navy/70"
                      }`}
                    >
                      {active && (
                        <span
                          aria-hidden="true"
                          className="inline-block h-[9px] w-[9px] bg-gold"
                        />
                      )}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
