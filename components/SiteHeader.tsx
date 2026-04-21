import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-d2-forest/10">
      <div className="mx-auto max-w-content px-6 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-d2-forest text-[22px] leading-none tracking-tight"
        >
          idigdata
        </Link>
        <nav className="font-body text-[15px] text-d2-ink flex items-center gap-2">
          <Link href="/about" className="hover:text-d2-forest">
            About
          </Link>
          <span className="text-d2-stone">·</span>
          <Link href="/contact" className="hover:text-d2-forest">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
