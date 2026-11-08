const services = [
  {
    number: "01",
    marker: "Conversion",
    symbol: "</>",
    title: "Лендинги",
    description:
      "Одностраничные сайты для запуска услуги, продукта или рекламной кампании. Продуманная структура, адаптивный дизайн и понятный путь к заявке.",
    cardClass: "bg-yellow text-ink",
    markerClass: "bg-surface text-ink",
    symbolClass: "text-ink",
  },
  {
    number: "02",
    marker: "Business",
    symbol: "{ }",
    title: "Сайты для бизнеса",
    description:
      "Многостраничные сайты для компаний и экспертов: услуги, проекты, преимущества, контакты и другие необходимые разделы.",
    cardClass: "bg-surface text-ink",
    markerClass: "bg-blue text-white",
    symbolClass: "text-blue",
  },
  {
    number: "03",
    marker: "Redesign",
    symbol: "↻",
    title: "Редизайн сайтов",
    description:
      "Обновляю устаревший дизайн, структуру и визуальную подачу существующего сайта, сохраняя понятный пользовательский путь.",
    cardClass: "bg-pink text-ink",
    markerClass: "bg-surface text-ink",
    symbolClass: "text-ink",
  },
  {
    number: "04",
    marker: "Design & Development",
    symbol: "✦",
    title: "Дизайн & разработка",
    description:
      "От структуры и визуальной концепции до адаптивной разработки и запуска готового сайта.",
    cardClass: "bg-blue text-white",
    markerClass: "bg-yellow text-ink",
    symbolClass: "text-white",
  },
];

export default function Services() {
  return (
    <section
      data-reveal
      id="services"
      aria-labelledby="services-heading"
      className="pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-16">
        <p className="sticker rotate-[-1deg] bg-surface text-[0.625rem] sm:text-xs">
          02 — Услуги
        </p>

        <h2
          id="services-heading"
          className="mt-9 max-w-5xl font-display text-[clamp(2.7rem,6.5vw,6rem)] leading-[0.9] font-extrabold tracking-[-0.06em] text-ink uppercase sm:mt-12"
        >
          <span className="block">Чем я могу помочь</span>
          <span className="relative mt-3 inline-block isolate px-2 py-1 text-[0.78em] leading-[0.95] text-white sm:mt-4 sm:px-3">
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 rotate-[-0.5deg] border-2 border-black bg-blue"
            />
            Вашему бизнесу
          </span>
        </h2>

        <ul className="mt-11 grid grid-cols-1 gap-6 sm:mt-12 md:auto-rows-fr md:grid-cols-2 md:gap-7 lg:mt-12">
          {services.map(
            ({
              number,
              marker,
              symbol,
              title,
              description,
              cardClass,
              markerClass,
              symbolClass,
            }) => (
              <li key={title} className="min-w-0">
                <article
                  aria-labelledby={`service-${number}-heading`}
                  className={`group neo-border neo-shadow neo-shadow-hover flex h-full min-h-[20rem] flex-col overflow-hidden p-5 sm:min-h-[22rem] sm:p-7 lg:min-h-[22rem] lg:px-8 lg:py-7 ${cardClass}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-display text-3xl leading-none font-extrabold tracking-[-0.06em] sm:text-4xl lg:text-[2.125rem]">
                      {number}
                    </p>
                    <p
                      className={`border-2 border-black px-3 py-2 text-[0.625rem] font-bold tracking-[0.12em] uppercase sm:text-xs ${markerClass}`}
                    >
                      {marker}
                    </p>
                  </div>

                  <div className="my-5 flex flex-1 items-center justify-end sm:my-6 lg:my-4">
                    {number === "02" && (
                      <span
                        aria-hidden="true"
                        className="mr-4 h-8 w-8 rotate-12 border-2 border-black bg-blue sm:h-10 sm:w-10"
                      />
                    )}
                    <span
                      aria-hidden="true"
                      className={`font-mono text-[clamp(3.75rem,8vw,6rem)] leading-none font-black tracking-[-0.1em] transition-transform duration-200 motion-safe:group-hover:rotate-[4deg] ${symbolClass}`}
                    >
                      {symbol}
                    </span>
                  </div>

                  <div className="border-t-2 border-black pt-4 sm:pt-5 lg:pt-4">
                    <h3
                      id={`service-${number}-heading`}
                      className="font-display text-2xl leading-tight font-extrabold tracking-[-0.04em] sm:text-3xl lg:text-4xl"
                    >
                      {title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed sm:text-base lg:text-lg">
                      {description}
                    </p>
                  </div>
                </article>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
