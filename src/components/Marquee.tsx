const marqueeItems = [
  { label: "NEXT.JS", color: "text-yellow" },
  { label: "TILDA", color: "text-pink" },
  { label: "FRONTEND", color: "text-blue" },
  { label: "WEB DESIGN", color: "text-yellow" },
  { label: "RESPONSIVE", color: "text-pink" },
  { label: "AI WORKFLOW", color: "text-blue" },
];

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="marquee-group flex shrink-0 items-center"
    >
      {marqueeItems.map(({ label, color }) => (
        <span key={label} className={`flex shrink-0 items-center ${color}`}>
          <span className="px-3 font-display text-lg font-extrabold tracking-[0.05em] uppercase sm:px-5 sm:text-2xl">
            {label}
          </span>
          <span aria-hidden="true" className="text-base text-white sm:text-xl">
            •
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      aria-label="Направления работы"
      className="relative z-10 overflow-clip py-5 sm:py-7"
    >
      <div className="marquee-strip rotate-[1deg] scale-x-[1.04] overflow-hidden border-y-2 border-black bg-black py-3 sm:py-4">
        <div className="marquee-track flex w-max">
          <MarqueeGroup />
          <MarqueeGroup hidden />
        </div>
      </div>
    </section>
  );
}
