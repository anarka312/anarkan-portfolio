import Image from "next/image";

type Project = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  type: string;
  role: string;
  description: string;
  status?: string;
  href?: string;
};

const projects: Project[] = [
  {
    id: "01",
    title: "Чё За Квест",
    image: "/projects/chezakvest.jpg",
    imageAlt: "Сайт квест-проекта Чё За Квест",
    imagePosition: "left center",
    type: "Team Project · Tilda",
    role: "Сборка в Tilda и адаптивная разработка",
    description:
      "Перенесла готовый дизайн в Tilda, собрала страницы и адаптивные версии для desktop и mobile в рамках командного проекта.",
    status: "Live project",
    href: "https://чезаквест.рф/ugon",
  },
  {
    id: "02",
    title: "LuxElectric",
    image: "/projects/luxelectric.jpg",
    imageAlt: "Сайт LuxElectric",
    imagePosition: "10% center",
    type: "Team Project · Website Implementation",
    role: "Реализация сайта и адаптивная разработка",
    description:
      "В рамках командного проекта переносила готовый дизайн коммерческого сайта, собирала страницы и настраивала адаптивные версии для разных устройств.",
    status: "Live project",
    href: "https://luxelectric.ru",
  },
  {
    id: "03",
    title: "Evospace",
    image: "/projects/evospace.jpg",
    imageAlt: "Сайт Evospace",
    imagePosition: "left center",
    type: "Team Project · Tilda",
    role: "Сборка в Tilda и адаптивная разработка",
    description:
      "Под руководством ведущего разработчика переносила готовый дизайн в Tilda, собирала страницы и настраивала адаптивность.",
  },
  {
    id: "04",
    title: "Сухой лес",
    image: "/projects/suhoy-les.jpg",
    imageAlt: "Сайт Сухой лес",
    imagePosition: "10% center",
    type: "Commercial Project · Tilda",
    role: "Разработка на Tilda",
    description: "Коммерческий сайт на платформе Tilda.",
    status: "Live project",
    href: "https://сухой-лес.рф",
  },
];

const accentClasses = ["bg-yellow", "bg-pink", "bg-blue", "bg-yellow"];
const rotationClasses = [
  "rotate-[0.5deg] lg:rotate-[1deg] motion-safe:group-hover:rotate-[1.5deg]",
  "-rotate-[0.5deg] lg:-rotate-[1deg] motion-safe:group-hover:-rotate-[1.5deg]",
  "rotate-[0.5deg] lg:rotate-[1deg] motion-safe:group-hover:rotate-[1.5deg]",
  "-rotate-[0.5deg] lg:-rotate-[1deg] motion-safe:group-hover:-rotate-[1.5deg]",
];

export default function Projects() {
  return (
    <section
      data-reveal
      id="projects"
      aria-labelledby="projects-heading"
      className="overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-16">
        <p className="sticker rotate-[-1deg] bg-yellow text-[0.625rem] sm:text-xs">
          03 — Проекты
        </p>

        <div className="mt-9 sm:mt-12">
          <h2
            id="projects-heading"
            className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.88] font-extrabold tracking-[-0.065em] text-ink uppercase"
          >
            <span className="block">Избранные</span>
            <span className="relative mt-3 inline-block isolate px-2 py-1 sm:mt-4 sm:px-3">
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 rotate-[-1deg] border-2 border-black bg-pink"
              />
              Работы
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Коммерческие и самостоятельные проекты, над которыми я работала.
          </p>
        </div>

        <ol className="mt-14 grid gap-16 sm:mt-16 sm:gap-16 lg:mt-16 lg:gap-20">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;
            const tags = project.type.split(" · ");
            const imagePosition = isReversed
              ? "lg:col-start-2"
              : "lg:col-start-1";
            const contentPosition = isReversed
              ? "lg:col-start-1"
              : "lg:col-start-2";
            const gridColumns = isReversed
              ? "lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]"
              : "lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]";

            return (
              <li
                key={project.id}
                data-reveal
                className="group relative min-w-0 p-2 sm:p-3 lg:p-2"
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-2 border-2 border-black transition-transform duration-200 ${accentClasses[index]} ${rotationClasses[index]}`}
                />

                <article
                  className={`relative z-10 grid min-w-0 overflow-hidden border-2 border-black bg-surface shadow-[4px_4px_0_0_#000] transition-transform duration-200 motion-safe:group-hover:-translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 sm:shadow-[6px_6px_0_0_#000] lg:grid-rows-[auto_1fr] ${gridColumns}`}
                >
                  <header
                    className={`min-w-0 p-5 pb-4 sm:p-7 sm:pb-5 lg:row-start-1 lg:px-8 lg:pt-6 lg:pb-3 ${contentPosition}`}
                  >
                    <p className="font-display text-5xl leading-none font-extrabold tracking-[-0.08em] text-blue sm:text-6xl lg:text-[5.5rem]">
                      {project.id}
                    </p>
                    <h3 className="mt-3 font-display text-3xl leading-[0.95] font-extrabold tracking-[-0.05em] text-ink uppercase sm:text-4xl lg:text-5xl">
                      {project.title}
                    </h3>
                  </header>

                  <div
                    className={`min-w-0 px-5 sm:px-7 lg:row-span-2 lg:row-start-1 lg:p-5 ${imagePosition}`}
                  >
                    <div className="flex h-full min-h-[17rem] flex-col overflow-hidden border-2 border-black bg-surface sm:min-h-[24rem] lg:min-h-[26rem]">
                      <div className="flex min-h-11 shrink-0 items-center justify-between gap-3 border-b-2 border-black bg-surface px-3 py-2 sm:px-4">
                        <div aria-hidden="true" className="flex gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full border border-black bg-yellow" />
                          <span className="h-2.5 w-2.5 rounded-full border border-black bg-pink" />
                          <span className="h-2.5 w-2.5 rounded-full border border-black bg-blue" />
                        </div>
                        <p className="truncate text-[0.625rem] font-bold tracking-[0.1em] text-muted uppercase sm:text-xs">
                          {project.title}
                        </p>
                      </div>
                      <div className="relative min-h-0 flex-1 overflow-hidden bg-canvas">
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          fill
                          sizes="(min-width: 1280px) 700px, (min-width: 1024px) 55vw, (min-width: 640px) calc(100vw - 104px), calc(100vw - 52px)"
                          style={{ objectPosition: project.imagePosition }}
                          className="object-cover transition-transform duration-250 motion-safe:group-hover:scale-[1.02] motion-reduce:transition-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex min-w-0 flex-col p-5 pt-6 sm:p-7 sm:pt-7 lg:row-start-2 lg:px-8 lg:pt-2 lg:pb-6 ${contentPosition}`}
                  >
                    <p className="text-xs leading-relaxed font-bold tracking-[0.05em] text-ink uppercase sm:text-sm">
                      {project.role}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2 lg:mt-3">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="border-2 border-black bg-background px-2.5 py-1.5 text-[0.625rem] font-bold tracking-[0.08em] text-ink uppercase sm:text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.status && (
                        <span className="border-2 border-black bg-blue px-2.5 py-1.5 text-[0.625rem] font-bold tracking-[0.08em] text-white uppercase sm:text-xs">
                          {project.status}
                        </span>
                      )}
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base lg:mt-4">
                      {project.description}
                    </p>

                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Смотреть сайт ${project.title} в новой вкладке`}
                        className="neo-button mt-7 w-full self-start bg-yellow px-5 py-3 text-xs sm:w-auto sm:text-sm lg:mt-5"
                      >
                        Смотреть сайт ↗
                      </a>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
