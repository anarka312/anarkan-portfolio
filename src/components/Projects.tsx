import Image from "next/image";

type Project = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  type: string;
  role: string;
  description: string;
  status: string;
  technologies?: string;
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
    title: "Shaboto",
    image: "/projects/shaboto.jpg",
    imageAlt: "Дизайн сайта Shaboto",
    type: "Independent Project · Tilda",
    role: "Web Design & Tilda Development",
    description:
      "Самостоятельно разработала структуру и визуальную концепцию сайта, полностью собрала проект в Tilda и настроила адаптивную версию.",
    status: "Completed · Not launched",
  },
  {
    id: "04",
    title: "Жусуп Абдрахманов",
    image: "/projects/jusup.jpg",
    imageAlt: "Главная страница сайта фильма Жусуп Абдрахманов",
    type: "Independent Project · Tilda",
    role: "Web Design & Tilda Development",
    description:
      "Самостоятельно разработала и собрала сайт фильма: структура, визуальная подача, верстка в Tilda и адаптация для разных экранов.",
    status: "Completed · Not launched",
  },
  {
    id: "05",
    title: "Anarkan Portfolio",
    image: "/projects/portfolio.jpg",
    imageAlt: "Главная страница портфолио Anarkan Sadyralieva",
    type: "Personal Project · Frontend Development",
    role: "Design & Development",
    description:
      "Личный сайт-портфолио, разработанный на современном frontend-стеке с компонентной архитектурой и адаптивным интерфейсом.",
    technologies: "Next.js · TypeScript · Tailwind CSS",
    status: "In development",
  },
];

export default function Projects() {
  return (
    <section
      data-reveal
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-7xl px-6 pt-8 sm:px-10 sm:pt-12 lg:px-16 lg:pt-16"
    >
      <div className="border-t border-border pt-6 sm:pt-8">
        <p className="text-xs font-medium tracking-wide text-secondary">
          03 — Проекты
        </p>
        <h2
          id="projects-heading"
          className="mt-6 text-3xl leading-tight font-semibold tracking-[-0.035em] text-balance sm:text-4xl lg:text-5xl"
        >
          Избранные работы
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
          Коммерческие и самостоятельные проекты, над которыми я работала.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 lg:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <li
              key={project.id}
              className={`min-w-0 ${project.id === "05" ? "lg:col-span-2" : ""}`}
            >
              <article
                aria-labelledby={`project-${project.id}-heading`}
                className="group flex h-full flex-col rounded-lg border border-border bg-background transition-[border-color,transform] duration-300 ease-out motion-safe:hover:-translate-y-0.5 hover:border-secondary/40"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden rounded-t-lg border-b border-border bg-surface ${project.id === "05" ? "lg:aspect-[16/7]" : ""}`}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes={
                      project.id === "05"
                        ? "(min-width: 1280px) 1152px, (min-width: 1024px) calc(100vw - 128px), (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)"
                        : "(min-width: 1280px) 560px, (min-width: 1024px) calc((100vw - 160px) / 2), (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)"
                    }
                    className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.02] motion-reduce:transition-none"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-10">
                  <p className="text-xs leading-relaxed font-medium tracking-wide text-secondary sm:text-sm">
                    {project.type}
                  </p>
                  <h3
                    id={`project-${project.id}-heading`}
                    className="mt-3 text-2xl leading-tight font-semibold tracking-tight text-primary sm:text-3xl"
                  >
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary">
                    {project.role}
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg">
                    {project.description}
                  </p>
                  {project.technologies && (
                    <p className="mt-4 text-sm leading-relaxed text-secondary">
                      {project.technologies}
                    </p>
                  )}
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pt-8">
                    <p className="text-xs font-medium tracking-wide text-secondary">
                      {project.status}
                    </p>
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Открыть сайт ${project.title} в новой вкладке`}
                        className="rounded-sm text-sm font-medium text-accent transition-colors duration-200 hover:text-accent/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                      >
                        Открыть сайт ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
