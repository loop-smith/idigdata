export default function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-body font-bold uppercase tracking-section text-[14px] text-d2-forest border-b border-d2-forest pb-2 mb-6">
      {children}
    </h2>
  );
}
