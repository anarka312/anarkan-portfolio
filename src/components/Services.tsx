const services = [
  {
    title: "Landing Pages",
    description:
      "Лендинги для услуг и продуктов с понятной структурой, современным дизайном и фокусом на целевое действие.",
  },
  {
    title: "Business Websites",
    description:
      "Современные сайты для компаний и экспертов, которые помогают презентовать бизнес, формировать доверие и получать обращения.",
  },
  {
    title: "Website Redesign",
    description:
      "Обновление устаревших сайтов: структура, визуальная подача, адаптивность и пользовательский опыт.",
  },
  {
    title: "Design & AI Workflow",
    description:
      "Использую дизайн, frontend-разработку и AI-инструменты, чтобы быстрее превращать идеи в готовые digital-решения.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
    >
      <div className="border-t border-gray-100 pt-8 sm:pt-10">
        <p className="text-xs font-medium tracking-wide text-gray-500">
          02 — Услуги
        </p>
        <div className="mt-6 sm:mt-8">
          <h2
            id="services-heading"
            className="max-w-3xl text-3xl leading-tight font-semibold tracking-[-0.035em] text-balance sm:text-4xl lg:text-5xl"
          >
            Чем я могу помочь вашему бизнесу
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2">
            {services.map(({ title, description }, index) => (
              <li
                key={title}
                className="min-w-0 rounded-lg border border-gray-200 bg-white p-6 hover:border-gray-300 sm:p-8 lg:p-10"
              >
                <p className="mb-6 text-xs font-medium tracking-wide text-gray-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl leading-snug font-medium tracking-tight text-[#4F46E5] sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
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
