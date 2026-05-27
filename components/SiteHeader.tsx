"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/approach/", label: "Approach" },
  { href: "/engagement/", label: "Engagement" },
  { href: "/agentics/", label: "Agentics" },
  { href: "/systems/", label: "Systems" },
  { href: "/articles/", label: "Articles" },
  { href: "/contact/", label: "Reach out" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 border-b border-navy/10 bg-cream z-40">
      <div className="mx-auto max-w-content px-6 py-5 md:py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center group" aria-label="idigdata — home">
          <Image
            src="/idigdata-wordmark-only.svg"
            alt="idigdata"
            width={620}
            height={130}
            priority
            className="h-12 md:h-14 w-auto"
          />
        </Link>

        {/* Desktop nav (md and up) */}
        <nav
          className="hidden md:flex font-body text-[15px] text-navy items-center gap-2"
          aria-label="Primary"
        >
          {NAV.map((item, i) => {
            const active = isActive(item.href);
            return (
              <span key={item.href} className="flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden className="text-stone">
                    ·
                  </span>
                )}
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`hover:text-stone transition-colors ${
                    active
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

        {/* Mobile hamburger toggle (below md) */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg
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
          ) : (
            <svg
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
          )}
        </button>
      </div>

      {/* Mobile panel + backdrop */}
      {open ? (
        <>
          <div
            className="md:hidden fixed inset-0 top-[64px] bg-navy/40 z-20"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <nav
            id="mobile-nav"
            className="md:hidden absolute left-0 right-0 top-full bg-cream border-b border-navy/15 z-30 shadow-lg"
            aria-label="Primary"
            role="dialog"
            aria-modal="true"
          >
            <ul className="mx-auto max-w-content px-6 py-4 flex flex-col">
              {NAV.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`block font-body text-[18px] py-3.5 border-b border-navy/10 last:border-b-0 transition-colors ${
                        active
                          ? "text-aubergine font-semibold"
                          : "text-navy hover:text-aubergine"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      ) : null}
    </header>
  );
}
