type Props = { position?: "top-right" | "top-left" | "bottom-right" };

const positionClasses = {
  "top-right": "top-0 right-0 -translate-y-12 translate-x-12",
  "top-left": "top-0 left-0 -translate-y-12 -translate-x-12",
  "bottom-right": "bottom-0 right-0 translate-y-12 translate-x-12",
};

export default function M4Watermark({ position = "top-right" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`absolute ${positionClasses[position]} pointer-events-none overflow-hidden w-72 h-72 opacity-[0.06] rotate-12`}
    >
      <img src="/idigdata-mark.svg" alt="" className="w-full h-full" />
    </div>
  );
}
