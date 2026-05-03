import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-navy">
      <div className="mx-auto max-w-content px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact */}
          <div>
            <p className="font-body uppercase tracking-section text-[12px] text-stone mb-3">
              Contact
            </p>
            <p className="font-body text-[15px] text-ink leading-relaxed">
              <a
                href="mailto:robert@idigdata.com"
                className="font-semibold text-navy border-b border-navy/40 hover:border-navy"
              >
                robert@idigdata.com
              </a>
              <br />
              702-686-1544
              <br />
              Reno, NV
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body uppercase tracking-section text-[12px] text-stone mb-3">
              Navigation
            </p>
            <ul className="font-body text-[15px] text-ink space-y-1.5">
              <li>
                <Link href="/" className="hover:text-aubergine transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/approach" className="hover:text-aubergine transition-colors">
                  Approach
                </Link>
              </li>
              <li>
                <Link href="/boss" className="hover:text-aubergine transition-colors">
                  BOSS
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-aubergine transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-aubergine transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-aubergine transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Brand mark + tagline */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/idigdata-mark.svg"
                alt=""
                aria-hidden
                className="h-9 w-9"
              />
              <span className="font-vollkorn font-bold text-navy text-[20px] leading-none tracking-tight">
                idigdata
              </span>
            </div>
            <p className="font-display italic text-stone text-[14px] leading-relaxed">
              Client-owned data &middot; Vendor-agnostic architecture &middot;
              Transformation that institutionalizes
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-stone/30 text-center">
          <p className="text-stone text-[12px] leading-relaxed">
            idigdata, LLC
            <span className="px-2">·</span>
            est. 2016
            <span className="px-2">·</span>
            Reno, NV
          </p>
        </div>
      </div>
    </footer>
  );
}
