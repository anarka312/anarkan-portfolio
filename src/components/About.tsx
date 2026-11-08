const skills = [
  { label: "Web Development", color: "bg-yellow text-ink" },
  { label: "Web Design", color: "bg-surface text-ink" },
  { label: "Tilda", color: "bg-pink text-ink" },
  { label: "Next.js", color: "bg-blue text-white" },
];

export default function About() {
  return (
    <section
      data-reveal
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-16">
        <p className="sticker rotate-[-1deg] bg-yellow text-[0.625rem] sm:text-xs">
          01 — Обо мне
        </p>

        <div className="mt-9 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:items-stretch lg:gap-10">
          <div className="relative min-w-0 lg:col-span-7 lg:min-h-72">
            <h2
              id="about-heading"
              className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.88] font-extrabold tracking-[-0.065em] text-ink uppercase"
            >
              <span className="block">Привет!</span>
              <span className="relative mt-3 inline-block isolate sm:mt-4">
                <span
                  aria-hidden="true"
                  className="absolute -inset-x-2 inset-y-[4%] -z-10 rotate-[1deg] border-2 border-black bg-pink sm:-inset-x-3"
                />
                Я Анаркан.
              </span>
            </h2>

            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-2 bottom-0 hidden font-mono text-[clamp(5rem,10vw,8rem)] leading-none font-black tracking-[-0.12em] text-blue [-webkit-text-stroke:2px_#000] [text-shadow:5px_5px_0_#000] lg:block"
            >
              &lt;/&gt;
            </span>
          </div>

          <div className="lg:col-span-5 lg:flex lg:items-end">
            <article className="neo-border neo-shadow w-full bg-surface p-6 sm:p-8 lg:p-9">
              <p className="inline-flex border-2 border-black bg-blue px-3 py-2 text-[0.625rem] font-bold tracking-[0.12em] text-white uppercase sm:text-xs">
                Web Developer + Designer
              </p>
              <p className="mt-6 text-base leading-relaxed text-ink sm:text-lg lg:text-xl lg:leading-relaxed">
                Я Анаркан — web developer &amp; designer. Работаю на стыке
                дизайна и frontend-разработки: продумываю структуру, собираю
                интерфейс, адаптирую его под разные устройства и довожу сайт до
                запуска. Использую Tilda, Next.js и AI-инструменты там, где они
                действительно ускоряют работу.
              </p>
            </article>
          </div>
        </div>

        <ul
          aria-label="Технологии и инструменты"
          className="mt-12 grid grid-cols-2 gap-3 border-t-2 border-black pt-6 sm:mt-14 sm:grid-cols-4 sm:gap-4 sm:pt-7"
        >
          {skills.map(({ label, color }) => (
            <li
              key={label}
              className={`neo-border flex min-h-14 items-center justify-center px-3 py-3 text-center text-[0.6875rem] font-bold tracking-[0.07em] uppercase transition-transform duration-200 motion-safe:hover:-translate-y-0.5 sm:min-h-16 sm:px-4 sm:text-xs ${color}`}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
