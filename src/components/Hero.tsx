import Image from "next/image";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden border-b-2 border-black px-4 pt-10 pb-14 sm:px-10 sm:pt-14 sm:pb-18 lg:flex lg:min-h-[88svh] lg:items-center lg:px-16 lg:py-16"
    >
      <div className="hero-blob hero-blob-blue absolute top-2 right-3 z-20 h-20 w-20 rounded-full border-2 border-black bg-blue p-1 sm:top-4 sm:right-10 sm:h-28 sm:w-28 sm:p-1.5 lg:right-12 lg:h-32 lg:w-32 xl:top-[14%] xl:right-[2%] xl:h-64 xl:w-64 xl:p-2">
        <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-black bg-blue">
          <Image
            src="/images/anarkan-hero.jpg"
            alt="Anarkan Sadyralieva — Web Developer & Designer"
            fill
            priority
            sizes="(min-width: 1024px) 16rem, (min-width: 640px) 7rem, 5rem"
            className="object-cover object-[50%_38%]"
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="hero-blob hero-blob-pink absolute bottom-[18%] left-[-4rem] -z-10 h-28 w-44 -rotate-6 rounded-[50%] border-2 border-black bg-pink opacity-60 sm:left-[-2rem] sm:h-36 sm:w-64"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="hero-enter hero-enter-1 flex flex-wrap items-center gap-3">
          <p className="sticker bg-surface text-[0.625rem] sm:text-xs">
            Web Developer &amp; Designer
          </p>
          <span
            aria-hidden="true"
            className="hidden h-2.5 w-2.5 rounded-full border border-black bg-blue sm:block"
          />
          <p className="hidden text-[0.625rem] font-bold tracking-[0.16em] text-muted uppercase sm:block sm:text-xs">
            Design for real business
          </p>
        </div>

        <h1
          id="hero-heading"
          className="hero-enter hero-enter-2 mt-7 font-display font-extrabold tracking-[-0.075em] text-ink uppercase sm:mt-9"
        >
          <span className="block text-[clamp(3rem,10vw,9rem)] leading-[0.82]">
            Сайт,
          </span>
          <span className="mt-2 block whitespace-nowrap text-[clamp(1.82rem,7.8vw,7.5rem)] leading-[0.86] tracking-[-0.08em] sm:mt-3">
            Который приводит
          </span>
          <span className="relative mt-3 inline-block text-[clamp(2.75rem,10vw,8.75rem)] leading-[0.86] sm:mt-4">
            <span
              aria-hidden="true"
              className="absolute -inset-x-2 inset-y-[8%] -z-10 rotate-[-1deg] border-2 border-black bg-yellow sm:-inset-x-4"
            />
            Клиентов
          </span>
        </h1>

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="hero-enter hero-enter-3 lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <div className="neo-border neo-shadow max-w-lg rotate-[1deg] bg-surface p-5 sm:p-6">
              <p className="text-base leading-relaxed text-ink sm:text-lg">
                Создаю современные сайты, которые помогают бизнесу привлекать
                клиентов и увеличивать продажи.
              </p>
              <span className="sticker mt-5 bg-pink text-[0.625rem]">
                Tilda + Next.js
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <div className="hero-enter hero-enter-4 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="neo-button min-h-14 bg-yellow px-7 py-4 text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                Обсудить проект
              </a>
              <a
                href="#projects"
                className="neo-button min-h-14 bg-surface px-7 py-4 text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                Смотреть работы
              </a>
            </div>

            <dl className="hero-enter hero-enter-5 mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:gap-4">
              <div className="neo-border bg-surface p-3 transition-transform duration-150 motion-safe:hover:-translate-y-0.5 sm:p-4">
                <dt className="text-[0.625rem] font-bold tracking-[0.16em] text-muted uppercase sm:text-xs">
                  Focus
                </dt>
                <dd className="mt-2 text-xs font-semibold text-ink sm:text-sm">
                  Design · Frontend · AI
                </dd>
              </div>
              <div className="neo-border bg-blue p-3 text-white transition-transform duration-150 motion-safe:hover:-translate-y-0.5 sm:p-4">
                <dt className="text-[0.625rem] font-bold tracking-[0.16em] uppercase sm:text-xs">
                  Stack
                </dt>
                <dd className="mt-2 text-xs font-semibold sm:text-sm">
                  Next.js · Tilda · TypeScript
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
