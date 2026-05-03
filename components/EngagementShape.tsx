type Props = {
  name: string;
  lead: string;
  body: React.ReactNode;
  marker?: React.ReactNode;
};

export default function EngagementShape({ name, lead, body, marker }: Props) {
  return (
    <div className="flex flex-col border border-navy bg-cream p-6 rounded-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_4px_12px_rgba(20,40,64,0.08)]">
      <h3 className="font-display font-bold text-navy text-[20px] leading-tight tracking-tight">
        {marker}
        {name}
      </h3>
      <p className="mt-3 font-display italic text-navy text-[16px] leading-snug">
        {lead}
      </p>
      <div className="mt-4 font-body text-ink text-[16px] leading-relaxed">
        {body}
      </div>
    </div>
  );
}
