export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
    >
      <div className="border-t border-gray-100 pt-8 sm:pt-10">
        <p className="text-xs font-medium tracking-wide text-gray-500">
          01 — Обо мне
        </p>
        <div className="mt-6 grid gap-7 sm:mt-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h2
              id="about-heading"
              className="text-3xl leading-tight font-semibold tracking-[-0.035em] text-balance sm:text-4xl lg:text-5xl"
            >
              Привет! Я Анаркан.
            </h2>
            <p className="mt-3 text-lg leading-snug font-medium tracking-tight text-[#4F46E5] sm:text-xl lg:text-2xl">
              Web Developer &amp; Designer
            </p>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg lg:col-span-5 lg:pt-12">
            Создаю современные сайты для бизнеса, объединяя дизайн,
            frontend-разработку и AI-инструменты. Для меня важно, чтобы сайт был не
            только визуально сильным, но и удобным, понятным и работал на задачи
            бизнеса.
          </p>
        </div>
        <p className="mt-8 text-xs font-medium tracking-wide text-gray-500 sm:mt-10 sm:text-sm">
          Design / Frontend / AI Tools
        </p>
      </div>
    </section>
  );
}
