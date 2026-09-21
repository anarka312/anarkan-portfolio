const services = [
  {
    symbol: "</>",
    title: "Landing Pages",
    description:
      "Лендинги для услуг и продуктов с понятной структурой, современным дизайном и фокусом на целевое действие.",
  },
  {
    symbol: "{ }",
    title: "Business Websites",
    description:
      "Современные сайты для компаний и экспертов, которые помогают презентовать бизнес, формировать доверие и получать обращения.",
  },
  {
    symbol: "↻",
    title: "Website Redesign",
    description:
      "Обновление устаревших сайтов: структура, визуальная подача, адаптивность и пользовательский опыт.",
  },
  {
    symbol: "✦",
    title: "Design & AI Workflow",
    description:
      "Использую дизайн, frontend-разработку и AI-инструменты, чтобы быстрее превращать идеи в готовые digital-решения.",
  },
];

export default function Services() {
  return (
    <section
      data-reveal
      id="services"
      aria-labelledby="services-heading"
      className="mx-auto max-w-7xl px-6 pt-8 sm:px-10 sm:pt-12 lg:px-16 lg:pt-16"
    >
      <div className="border-t border-border pt-6 sm:pt-8">
        <p className="text-xs font-medium tracking-wide text-secondary">
          02 — Услуги
        </p>
        <div className="mt-6">
          <h2
            id="services-heading"
            className="max-w-3xl text-3xl leading-tight font-semibold tracking-[-0.035em] text-balance sm:text-4xl lg:text-5xl"
          >
            Чем я могу помочь вашему бизнесу
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2">
            {services.map(({ symbol, title, description }, index) => (
              <li
                key={title}
                className="group min-w-0 rounded-lg border border-border bg-background p-6 transition-[border-color,transform] duration-200 ease-out motion-safe:hover:-translate-y-0.5 hover:border-secondary/40 sm:p-8 lg:p-10"
              >
                <div className="mb-6 flex items-center justify-between gap-4 text-xs text-secondary">
                  <p className="font-medium tracking-wide">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <span
                    aria-hidden="true"
                    className={`${index < 2 ? "font-mono" : ""} text-sm transition-colors duration-200 group-hover:text-accent`}
                  >
                    {symbol}
                  </span>
                </div>
                <h3 className="text-xl leading-snug font-medium tracking-tight text-accent sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
