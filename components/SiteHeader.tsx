"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/approach/", label: "Approach" },
  { href: "/systems/", label: "Systems" },
  { href: "/engagement/", label: "Engagement" },
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
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:py-5">
        <Link href="/" className="flex items-center" aria-label="idigdata — home">
          <Image
            src="/idigdata-wordmark-only.svg"
            alt="idigdata"
            width={620}
            height={130}
            priority
            className="h-10 w-auto md:h-11"
          />
        </Link>

        {/* Desktop nav (md and up) */}
        <nav
          className="hidden items-center gap-8 font-body text-[14.5px] text-navy md:flex"
          aria-label="Primary"
        >
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`nav-underline transition-colors hover:text-navy ${
                  active ? "font-semibold" : "text-navy/75"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger toggle (below md) */}
        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 md:hidden"
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
            className="absolute inset-x-0 top-full z-20 h-screen bg-navy/50 md:hidden"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <nav
            id="mobile-nav"
            className="absolute left-0 right-0 top-full z-30 border-b border-navy/15 bg-cream shadow-lg md:hidden"
            aria-label="Primary"
            role="dialog"
            aria-modal="true"
          >
            <ul className="mx-auto flex max-w-content flex-col px-6 py-4">
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
        </>
      ) : null}
    </header>
  );
}
