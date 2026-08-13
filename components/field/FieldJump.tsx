const JUMP = [
  { href: "#estate", label: "Estate" },
  { href: "#items", label: "Items" },
  { href: "#retail", label: "Guest" },
  { href: "#feeds", label: "Market" },
  { href: "#logistics", label: "Logistics" },
  { href: "#plant", label: "Plant" },
  { href: "#ownership", label: "Ownership" },
  { href: "#receipts", label: "Receipts" },
] as const;

export default function FieldJump() {
  return (
    <nav aria-label="Field chambers" className="mt-10 border-t border-navy/15 pt-6">
      <p className="mb-3 font-brand text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray">
        The Field
      </p>
      <ul className="flex flex-wrap gap-x-4 gap-y-2">
        {JUMP.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="font-brand text-[12px] font-semibold uppercase tracking-[0.14em] text-navy/70 hover:text-navy"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
