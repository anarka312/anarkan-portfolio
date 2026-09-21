export default function About() {
  return (
    <section
      data-reveal
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-7xl px-6 pt-8 sm:px-10 sm:pt-12 lg:px-16 lg:pt-16"
    >
      <div className="border-t border-border pt-6 sm:pt-8">
        <p className="text-xs font-medium tracking-wide text-secondary">
          01 — Обо мне
        </p>
        <div className="mt-6 grid gap-7 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h2
              id="about-heading"
              className="text-3xl leading-tight font-semibold tracking-[-0.035em] text-balance sm:text-4xl lg:text-5xl"
            >
              Привет! Я Анаркан.
            </h2>
            <p className="mt-3 text-lg leading-snug font-medium tracking-tight text-accent sm:text-xl lg:text-2xl">
              Web Developer &amp; Designer
            </p>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-secondary sm:text-lg lg:col-span-5 lg:pt-12">
            Создаю современные сайты для бизнеса, объединяя дизайн,
            frontend-разработку и AI-инструменты. Для меня важно, чтобы сайт был не
            только визуально сильным, но и удобным, понятным и работал на задачи
            бизнеса.
          </p>
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-border pt-5 text-xs font-medium tracking-wide text-secondary sm:mt-10 sm:grid-cols-2 sm:text-sm lg:grid-cols-4">
          <li>HTML / CSS / JavaScript</li>
          <li>Next.js</li>
          <li>Tilda</li>
          <li>AI Tools</li>
        </ul>
      </div>
    </section>
  );
}
