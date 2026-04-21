export default function SiteFooter() {
  return (
    <footer className="mt-24">
      <div className="mx-auto max-w-content px-6">
        <hr className="border-0 border-t border-d2-forest" />
        <div className="py-8 space-y-2 text-[15px]">
          <p>
            <a
              href="mailto:robert@idigdata.com"
              className="text-d2-ink hover:text-d2-forest"
            >
              robert@idigdata.com
            </a>
          </p>
          <p className="text-d2-ink" aria-hidden="true">
            <span className="opacity-60 cursor-not-allowed" title="Link coming soon">
              LinkedIn
            </span>
            <span className="text-d2-stone px-2">·</span>
            <span className="opacity-60 cursor-not-allowed" title="Link coming soon">
              BOSS on GitHub
            </span>
          </p>
          <p className="text-d2-ink text-[13px]">© 2026 idigdata LLC</p>
        </div>
      </div>
    </footer>
  );
}
