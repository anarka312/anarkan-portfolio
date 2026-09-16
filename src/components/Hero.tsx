export default function Hero() {
  return (
      <section
        aria-labelledby="hero-heading"
        className="mx-auto flex min-h-[calc(100svh-180px)] max-w-7xl flex-col justify-center px-6 py-20 sm:px-10 sm:py-28 md:min-h-[calc(100svh-110px)] lg:px-16 lg:py-36"
      >
        <p className="mb-7 flex items-center gap-3 text-xs font-medium tracking-[0.16em] text-gray-500 uppercase sm:text-sm">
          <span aria-hidden="true" className="h-px w-8 bg-[#4F46E5]" />
          Web Developer &amp; Designer
        </p>
        <h1
          id="hero-heading"
          className="max-w-5xl text-[clamp(2.5rem,6vw,5rem)] leading-[1.08] font-semibold tracking-[-0.045em] text-balance"
        >
          Сайт, который помогает бизнесу{" "}
          <span className="text-[#4F46E5]">получать клиентов</span>
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
          Создаю современные сайты, которые помогают бизнесу привлекать клиентов
          и увеличивать продажи.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="#contact"
            className="inline-flex min-h-14 items-center justify-center rounded-lg bg-[#4F46E5] px-7 py-4 text-sm font-medium text-white hover:bg-[#4338CA] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4F46E5]"
          >
            Обсудить проект
          </a>
          <a
            href="#projects"
            className="inline-flex min-h-14 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-7 py-4 text-sm font-medium text-gray-700 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4F46E5]"
          >
            Мои работы
          </a>
        </div>
      </section>
  );
}
