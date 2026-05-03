type Props = {
  name: string;
  lead: string;
  body: React.ReactNode;
};

export default function EngagementShape({ name, lead, body }: Props) {
  return (
    <div className="flex flex-col border-t border-navy pt-6">
      <h3 className="font-display font-bold text-navy text-[20px] leading-tight tracking-tight">
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
