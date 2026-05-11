type Props = { num: 1 | 2 | 3 };

const numerals = { 1: "I", 2: "II", 3: "III" } as const;

export default function RomanMarker({ num }: Props) {
  return (
    <span
      aria-hidden="true"
      className="inline-block italic text-warm-gray text-sm tracking-widest mr-3 font-vollkorn"
    >
      {numerals[num]}
    </span>
  );
}
