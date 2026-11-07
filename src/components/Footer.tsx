const contactLinks = [
  {
    label: "Email",
    value: "sadyralieva.anarkan@gmail.com",
    href: "mailto:sadyralieva.anarkan@gmail.com",
    external: false,
  },
  {
    label: "Telegram",
    value: "@anarka312",
    href: "https://t.me/anarka312",
    external: true,
  },
  {
    label: "Phone",
    value: "+996 700 180 216",
    href: "tel:+996700180216",
    external: false,
  },
] as const;

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t-[3px] border-black bg-black font-sans text-canvas">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div data-reveal className="relative">
          <p className="inline-flex rotate-[-1deg] border-2 border-black bg-yellow px-3 py-2 text-[0.625rem] font-bold tracking-[0.1em] text-black uppercase sm:text-xs">
            ● Открыта к новым проектам
          </p>

          <h2 className="mt-9 max-w-6xl font-display text-[clamp(3rem,12vw,8.5rem)] leading-[0.82] font-extrabold tracking-[-0.075em] uppercase sm:mt-12">
            <span className="block">Давайте</span>
            <span className="block">Работать</span>
            <span className="relative mt-3 inline-block isolate px-2 py-1 text-black sm:mt-5 sm:px-4">
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 rotate-[-0.5deg] border-2 border-canvas bg-yellow sm:rotate-[-1deg]"
              />
              Вместе.
            </span>
          </h2>

          <a
            href="https://t.me/anarka312"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать Анаркан в Telegram — открыть в новой вкладке"
            className="mt-10 inline-flex min-h-14 items-center justify-center border-2 border-canvas bg-blue px-6 py-4 font-display text-sm font-extrabold tracking-[0.04em] text-white uppercase shadow-[4px_4px_0_0_#FDE047] transition-[box-shadow,transform] duration-150 motion-safe:hover:-translate-x-0.5 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[7px_7px_0_0_#FDE047] motion-safe:active:translate-x-0.5 motion-safe:active:translate-y-0.5 motion-safe:active:shadow-[2px_2px_0_0_#FDE047] focus-visible:outline-yellow sm:mt-12 sm:px-8 sm:text-base"
          >
            Написать мне →
          </a>
        </div>

        <div className="mt-16 border-y-2 border-canvas sm:mt-20 lg:mt-24">
          <div className="grid min-w-0 lg:grid-cols-[1.25fr_1fr_1fr_1fr]">
            <div className="min-w-0 border-b-2 border-canvas py-5 lg:border-r-2 lg:border-b-0 lg:pr-6">
              <p className="font-display text-lg font-extrabold tracking-[-0.03em] uppercase sm:text-xl">
                Anarkan Sadyralieva
              </p>
              <p className="mt-1 text-xs font-bold tracking-[0.08em] text-canvas/70 uppercase sm:text-sm">
                Web Developer &amp; Designer
              </p>
            </div>

            {contactLinks.map(({ label, value, href, external }, index) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={`group flex min-w-0 flex-col justify-center border-b-2 border-canvas py-5 transition-colors duration-150 hover:bg-canvas hover:text-black focus-visible:bg-canvas focus-visible:text-black focus-visible:outline-yellow lg:border-b-0 lg:px-5 ${index < contactLinks.length - 1 ? "lg:border-r-2" : ""}`}
              >
                <span className="text-[0.625rem] font-bold tracking-[0.12em] text-current uppercase opacity-70 sm:text-xs">
                  {label}
                </span>
                <span className="mt-1 min-w-0 text-sm leading-tight font-bold [overflow-wrap:anywhere] sm:text-base">
                  {value}
                  {label !== "Phone" && <span aria-hidden="true"> ↗</span>}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-[0.625rem] font-bold tracking-[0.08em] text-canvas/70 uppercase sm:flex-row sm:items-center sm:justify-between sm:text-xs">
          <p>© 2026 Anarkan Sadyralieva</p>
          <p>Designed &amp; developed by Anarkan</p>
        </div>
      </div>
    </footer>
  );
}
