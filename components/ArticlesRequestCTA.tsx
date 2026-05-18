"use client";

import { useState } from "react";
import ArticlesRequestModal from "@/components/ArticlesRequestModal";

export default function ArticlesRequestCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 bg-navy text-cream px-8 py-3.5 rounded-full font-body text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-aubergine transition-colors focus:outline-2 focus:outline-stone focus:outline-offset-2"
      >
        Request access →
      </button>
      <ArticlesRequestModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
