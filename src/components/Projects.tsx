import Image from "next/image";

type Project = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
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
    imageAlt: "Главная страница проекта Чё За Квест",
    type: "Team Project · Tilda",
    role: "Tilda Implementation & Responsive Development",
    description:
      "Работала в команде под руководством ведущего разработчика. Переносила готовый дизайн в Tilda, собирала страницы и настраивала адаптивную версию для разных устройств.",
    status: "Live project",
    href: "https://чезаквест.рф/ugon",
  },
  {
    id: "02",
    title: "LuxElectric",
    image: "/projects/luxelectric.jpg",
    imageAlt: "Главная страница сайта LuxElectric",
    type: "Team Project · Website Implementation",
    role: "Website Implementation & Responsive Development",
    description:
      "Работала над реализацией коммерческого сайта под руководством ведущего разработчика. Переносила готовый дизайн, собирала страницы и настраивала адаптивную версию для разных устройств.",
    status: "Live project",
    href: "https://luxelectric.ru",
  },
  {
    id: "03",
    title: "Evospace",
    image: "/projects/evospace.jpg",
    imageAlt: "Главная страница сайта Evospace",
    type: "Team Project · Tilda",
    role: "Tilda Implementation & Responsive Development",
    description:
      "Я работала над проектом под руководством ведущего разработчика: переносила готовый дизайн в Tilda, собирала страницы и настраивала адаптивность.",
  },
  {
    id: "04",
    title: "Сухой лес",
    image: "/projects/suhoy-les.jpg",
    imageAlt: "Главная страница сайта Сухой лес",
    type: "Commercial Project · Tilda",
    role: "Tilda Development",
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
      className="overflow-hidden py-16 sm:py-20 lg:py-28"
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

        <ol className="mt-14 grid gap-16 sm:mt-18 sm:gap-20 lg:mt-24 lg:gap-28">
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
                className="group relative min-w-0 p-2 sm:p-3"
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-2 border-2 border-black transition-transform duration-200 ${accentClasses[index]} ${rotationClasses[index]}`}
                />

                <article
                  className={`relative z-10 grid min-w-0 overflow-hidden border-2 border-black bg-surface shadow-[4px_4px_0_0_#000] transition-transform duration-200 motion-safe:group-hover:-translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 sm:shadow-[6px_6px_0_0_#000] lg:grid-rows-[auto_1fr] ${gridColumns}`}
                >
                  <header
                    className={`min-w-0 p-5 pb-4 sm:p-7 sm:pb-5 lg:row-start-1 lg:p-9 lg:pb-5 ${contentPosition}`}
                  >
                    <p className="font-display text-5xl leading-none font-extrabold tracking-[-0.08em] text-blue sm:text-6xl lg:text-8xl">
                      {project.id}
                    </p>
                    <h3 className="mt-3 font-display text-3xl leading-[0.95] font-extrabold tracking-[-0.05em] text-ink uppercase sm:text-4xl lg:mt-4 lg:text-5xl">
                      {project.title}
                    </h3>
                  </header>

                  <div
                    className={`min-w-0 px-5 sm:px-7 lg:row-span-2 lg:row-start-1 lg:p-6 ${imagePosition}`}
                  >
                    <div className="flex h-full min-h-[17rem] flex-col overflow-hidden border-2 border-black bg-surface sm:min-h-[24rem] lg:min-h-[30rem]">
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
                          className="object-cover object-left transition-transform duration-250 motion-safe:group-hover:scale-[1.02] motion-reduce:transition-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex min-w-0 flex-col p-5 pt-6 sm:p-7 sm:pt-7 lg:row-start-2 lg:p-9 lg:pt-3 ${contentPosition}`}
                  >
                    <p className="text-xs leading-relaxed font-bold tracking-[0.05em] text-ink uppercase sm:text-sm">
                      {project.role}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
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

                    <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
                      {project.description}
                    </p>

                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Смотреть сайт ${project.title} в новой вкладке`}
                        className="neo-button mt-7 w-full self-start bg-yellow px-5 py-3 text-xs sm:w-auto sm:text-sm"
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
