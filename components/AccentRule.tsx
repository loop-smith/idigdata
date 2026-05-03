type Props = { className?: string };

export default function AccentRule({ className = "" }: Props) {
  return (
    <div className={`flex items-center gap-2 my-6 ${className}`} aria-hidden="true">
      <div className="flex-1 h-px bg-stone" />
      <div className="w-1 h-1 bg-gold" />
      <div className="flex-1 h-px bg-stone" />
    </div>
  );
}
