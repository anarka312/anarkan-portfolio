export default function Hero() {
  return (
      <section
        aria-labelledby="hero-heading"
        className="mx-auto flex max-w-7xl flex-col px-6 pt-12 sm:px-10 sm:pt-16 lg:px-16 lg:pt-20"
      >
        <p className="hero-enter hero-enter-1 mb-6 flex items-center gap-3 text-xs font-medium tracking-[0.16em] text-secondary uppercase sm:text-sm">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          Web Developer &amp; Designer
        </p>
        <h1
          id="hero-heading"
          className="hero-enter hero-enter-2 max-w-6xl text-[clamp(2.5rem,6vw,5rem)] leading-[1.08] font-semibold tracking-[-0.025em] text-balance"
        >
          Сайт, который помогает бизнесу{" "}
          <span className="text-accent">получать клиентов</span>
        </h1>
        <div className="mt-8 grid gap-8 sm:mt-10 lg:grid-cols-12 lg:items-start lg:gap-12">
        <p className="hero-enter hero-enter-3 max-w-md text-base leading-relaxed text-secondary sm:text-lg lg:col-span-5 lg:col-start-8 lg:row-start-1">
          Создаю современные сайты, которые помогают бизнесу привлекать клиентов
          и увеличивать продажи.
        </p>
        <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
          <div className="hero-enter hero-enter-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="#contact"
              className="inline-flex min-h-14 items-center justify-center rounded-lg bg-accent px-7 py-4 text-sm font-medium text-white transition-[background-color,color,transform] duration-200 ease-out motion-safe:hover:-translate-y-px hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Обсудить проект
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-14 items-center justify-center rounded-sm px-2 py-4 text-sm font-medium text-secondary underline-offset-4 transition-[color,transform] duration-200 ease-out motion-safe:hover:-translate-y-px hover:text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Мои работы
            </a>
          </div>
          <dl className="hero-enter hero-enter-4 mt-8 grid gap-4 border-t border-border pt-5 text-xs text-secondary lg:max-w-xl lg:grid-cols-2 lg:gap-8">
            <div>
              <dt className="font-medium tracking-[0.14em] uppercase">Focus</dt>
              <dd className="mt-2 leading-relaxed">Design · Frontend · AI</dd>
            </div>
            <div>
              <dt className="font-medium tracking-[0.14em] uppercase">Stack</dt>
              <dd className="mt-2 leading-relaxed">Next.js · TypeScript · Tailwind</dd>
            </div>
          </dl>
        </div>
        </div>
      </section>
  );
}
