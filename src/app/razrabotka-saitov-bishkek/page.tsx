import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";

const title = "Разработка сайтов в Бишкеке | Анаркан Садыралиева";
const description =
  "Создаю современные сайты для бизнеса в Бишкеке: лендинги, многостраничные сайты и редизайн. Tilda, Next.js и адаптивная frontend-разработка.";
const canonical = "https://anarkan.dev/razrabotka-saitov-bishkek";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Anarkan Sadyralieva",
    title,
    description,
    url: canonical,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const services = [
  {
    number: "01",
    title: "Лендинг",
    description:
      "Одностраничный сайт для услуги, продукта, мероприятия или рекламной кампании.",
    detail: "Структура · дизайн · адаптивная разработка",
    color: "bg-yellow",
  },
  {
    number: "02",
    title: "Сайт для бизнеса",
    description:
      "Многостраничный сайт с услугами, преимуществами, проектами, информацией о компании и контактами.",
    detail: "Tilda или индивидуальная frontend-разработка",
    color: "bg-surface",
  },
  {
    number: "03",
    title: "Редизайн сайта",
    description:
      "Обновление существующего сайта: визуальная подача, структура, адаптивность и интерфейс.",
    detail: "Аудит текущей страницы · новая подача",
    color: "bg-pink",
  },
  {
    number: "04",
    title: "Разработка по готовому дизайну",
    description:
      "Перенос готового макета в работающий адаптивный сайт на Tilda или Next.js.",
    detail: "Desktop · tablet · mobile",
    color: "bg-blue text-white",
  },
];

const technologies = [
  {
    title: "Tilda",
    text: "Для лендингов, корпоративных сайтов и проектов, где важны удобное управление и быстрый запуск.",
    color: "bg-yellow",
  },
  {
    title: "Next.js",
    text: "Для индивидуальных интерфейсов и проектов, где требуется гибкая frontend-разработка.",
    color: "bg-blue text-white",
  },
  {
    title: "Responsive",
    text: "Интерфейс адаптируется под desktop, tablet и mobile без потери содержания и удобства.",
    color: "bg-surface",
  },
  {
    title: "AI workflow",
    text: "AI-инструменты использую внутри процесса там, где они ускоряют анализ, подготовку и разработку.",
    color: "bg-pink",
  },
];

const process = [
  {
    number: "01",
    title: "Задача",
    text: "Обсуждаем бизнес, цель сайта, аудиторию и необходимый функционал.",
  },
  {
    number: "02",
    title: "Структура",
    text: "Определяю страницы, блоки и понятный пользовательский путь.",
  },
  {
    number: "03",
    title: "Дизайн",
    text: "Формируется визуальная подача сайта и логика ключевых экранов.",
  },
  {
    number: "04",
    title: "Разработка",
    text: "Собираю адаптивную desktop/mobile версию и необходимый функционал.",
  },
  {
    number: "05",
    title: "Запуск",
    text: "Проверяем сайт и публикуем его на рабочем домене.",
  },
];

const projects = [
  {
    number: "01",
    title: "Чё За Квест",
    image: "/projects/chezakvest.jpg",
    alt: "Сайт квест-проекта Чё За Квест",
    position: "left center",
    role: "Командный проект · Tilda",
    description:
      "Под руководством lead developer перенесла готовый дизайн в Tilda, собрала страницы и responsive-версии.",
    href: "https://чезаквест.рф/ugon",
  },
  {
    number: "02",
    title: "LuxElectric",
    image: "/projects/luxelectric.jpg",
    alt: "Сайт LuxElectric",
    position: "10% center",
    role: "Командный проект · Website implementation",
    description:
      "Переносила готовый дизайн коммерческого сайта, собирала страницы и настраивала адаптивные версии.",
    href: "https://luxelectric.ru",
  },
  {
    number: "03",
    title: "Evospace",
    image: "/projects/evospace.jpg",
    alt: "Сайт Evospace",
    position: "left center",
    role: "Командный проект · Tilda",
    description:
      "Под руководством ведущего разработчика переносила готовый дизайн в Tilda, собирала страницы и настраивала адаптивность.",
  },
  {
    number: "04",
    title: "Сухой лес",
    image: "/projects/suhoy-les.jpg",
    alt: "Сайт Сухой лес",
    position: "10% center",
    role: "Коммерческий сайт · Tilda",
    description: "Разработка коммерческого сайта на платформе Tilda.",
    href: "https://сухой-лес.рф",
  },
];

const benefits = [
  {
    title: "Продуманная структура",
    text: "Сайт строится вокруг задачи бизнеса и понятного пользовательского пути.",
  },
  {
    title: "Адаптивная версия",
    text: "Интерфейс корректно работает на телефонах, планшетах и desktop.",
  },
  {
    title: "Дизайн + разработка",
    text: "Для базового проекта не нужно отдельно собирать несколько исполнителей.",
  },
  {
    title: "Готовность к запуску",
    text: "Финальная проверка, подключение домена и базовая техническая подготовка сайта.",
  },
];

const faq = [
  {
    question: "Сколько стоит разработка сайта в Бишкеке?",
    answer:
      "Стоимость зависит от типа сайта, количества страниц, дизайна и функционала. После короткого обсуждения задачи я подготовлю оценку объёма работы.",
  },
  {
    question: "Сколько времени занимает создание сайта?",
    answer:
      "Срок зависит от объёма, готовности материалов и сложности проекта. Точный план можно определить после обсуждения структуры и функционала.",
  },
  {
    question: "Что лучше — Tilda или Next.js?",
    answer:
      "Tilda подходит для многих лендингов и бизнес-сайтов с удобным управлением. Next.js выбираю, когда нужен более индивидуальный интерфейс и гибкая frontend-разработка.",
  },
  {
    question: "Можно ли сделать сайт по готовому дизайну?",
    answer:
      "Да. Я могу перенести готовый макет в адаптивный сайт, собрать страницы и настроить интерфейс под разные устройства.",
  },
  {
    question: "Сайт будет адаптирован под телефон?",
    answer:
      "Да. Адаптивная версия для мобильных устройств и планшетов входит в процесс разработки.",
  },
  {
    question: "Можно ли переделать уже существующий сайт?",
    answer:
      "Да. Можно обновить структуру, визуальную подачу, адаптивность или полностью пересобрать интерфейс.",
  },
  {
    question: "Вы работаете только с клиентами из Бишкека?",
    answer:
      "Нет. Проект можно вести дистанционно: обсуждать задачи онлайн, согласовывать этапы и передавать материалы в удобном формате.",
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "sadyralieva.anarkan@gmail.com",
    href: "mailto:sadyralieva.anarkan@gmail.com",
  },
  {
    label: "Telegram",
    value: "@anarka312",
    href: "https://t.me/anarka312",
  },
  {
    label: "Phone",
    value: "+996 700 180 216",
    href: "tel:+996700180216",
  },
];

export default function BishkekWebDevelopmentPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-6 focus:z-[60] focus:bg-yellow focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-black focus:outline-2 focus:outline-offset-2 focus:outline-black"
      >
        Перейти к основному содержимому
      </a>
      <ScrollRevealObserver />
      <Header logoHref="/" navigationBase="/" />

      <main id="main-content" tabIndex={-1} className="bg-background font-sans text-primary">
        <section
          aria-labelledby="bishkek-hero-heading"
          className="relative isolate overflow-hidden border-b-2 border-black px-4 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
        >
          <div
            aria-hidden="true"
            className="absolute -top-14 -right-20 -z-10 h-56 w-56 rotate-12 border-2 border-black bg-pink sm:h-72 sm:w-72 lg:right-[8%]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-10 -left-16 -z-10 h-32 w-48 -rotate-6 rounded-[50%] border-2 border-black bg-blue opacity-90 sm:h-40 sm:w-64"
          />

          <div className="mx-auto max-w-7xl">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center gap-2 text-xs font-bold tracking-[0.08em] text-ink uppercase underline decoration-2 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              ← На главную
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
              <div className="lg:col-span-8">
                <p className="sticker rotate-[-1deg] bg-surface text-[0.625rem] sm:text-xs">
                  Web development • Bishkek
                </p>
                <h1
                  id="bishkek-hero-heading"
                  className="mt-7 font-display text-[clamp(3rem,8.5vw,8rem)] leading-[0.84] font-extrabold tracking-[-0.07em] text-ink uppercase sm:mt-9"
                >
                  <span className="block">Разработка сайтов</span>
                  <span className="relative mt-3 inline-block isolate px-2 py-1 sm:mt-5 sm:px-4">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 rotate-[-1deg] border-2 border-black bg-yellow"
                    />
                    В Бишкеке
                  </span>
                </h1>
              </div>

              <div className="lg:col-span-4">
                <div className="neo-border neo-shadow rotate-[1deg] bg-surface p-5 sm:p-7 lg:px-8">
                  <p className="text-[1.0625rem] leading-[1.65] text-ink sm:text-xl sm:leading-[1.55]">
                    Создаю современные сайты для бизнеса и экспертов — от структуры и дизайна до адаптивной разработки и запуска.
                  </p>
                  <p className="mt-4 text-base leading-[1.65] text-muted sm:text-lg">
                    Лендинги, многостраничные сайты и редизайн на Tilda и Next.js.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5 lg:mt-14">
              <a href="#contact" className="neo-button min-h-14 bg-yellow px-8 py-4 text-base sm:min-h-16 sm:px-9">
                Обсудить проект
              </a>
              <a href="#projects" className="neo-button min-h-14 bg-surface px-8 py-4 text-base">
                Смотреть работы
              </a>
            </div>
          </div>
        </section>

        <section data-reveal aria-labelledby="intro-heading" className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-10 lg:grid-cols-12 lg:items-start lg:px-16">
            <div className="lg:col-span-7">
              <p className="sticker bg-blue text-[0.625rem] text-white sm:text-xs">Подход</p>
              <h2
                id="intro-heading"
                className="mt-8 font-display text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.9] font-extrabold tracking-[-0.06em] text-ink uppercase"
              >
                Сайт — это не просто красивая страница
              </h2>
            </div>
            <div className="neo-border bg-surface p-6 sm:p-8 lg:col-span-5 lg:mt-16">
              <p className="text-lg leading-[1.65] text-ink sm:text-xl">
                Я продумываю сайт как цельный продукт: структуру, визуальную подачу, адаптивную версию и техническую реализацию.
              </p>
              <p className="mt-5 text-base leading-[1.65] text-muted sm:text-[1.0625rem]">
                В результате бизнес получает готовую площадку для рекламы, социальных сетей и поиска: понятную, аккуратную и технически подготовленную к индексации.
              </p>
              <Link
                href="/#projects"
                className="mt-6 inline-flex min-h-11 items-center text-sm font-bold text-ink underline decoration-2 underline-offset-4"
              >
                Посмотреть полное портфолио ↗
              </Link>
            </div>
          </div>
        </section>

        <section id="site-types" data-reveal aria-labelledby="services-heading" className="border-y-2 border-black bg-surface py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-16">
            <p className="sticker bg-pink text-[0.625rem] sm:text-xs">Услуги</p>
            <h2 id="services-heading" className="mt-8 max-w-5xl font-display text-[clamp(2.7rem,6.5vw,6rem)] leading-[0.9] font-extrabold tracking-[-0.06em] text-ink uppercase">
              Какой сайт можно заказать
            </h2>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-14">
              {services.map((service) => (
                <li key={service.number} className="min-w-0">
                  <article className={`neo-border neo-shadow-hover flex h-full min-h-72 flex-col p-5 sm:p-7 ${service.color}`}>
                    <div className="flex items-start justify-between gap-4 border-b-2 border-black pb-5">
                      <p className="font-display text-4xl leading-none font-extrabold tracking-[-0.06em]">{service.number}</p>
                      <span className="border-2 border-black bg-surface px-2.5 py-1.5 text-[0.625rem] font-bold tracking-[0.08em] text-black uppercase">Web</span>
                    </div>
                    <h3 className="mt-7 font-display text-2xl leading-tight font-extrabold tracking-[-0.04em] uppercase sm:text-3xl">{service.title}</h3>
                    <p className="mt-4 text-[0.9375rem] leading-[1.65] sm:text-base">{service.description}</p>
                    <p className="mt-auto border-t-2 border-current pt-5 text-xs leading-relaxed font-bold tracking-[0.06em] uppercase opacity-80">{service.detail}</p>
                  </article>
                </li>
              ))}
            </ol>

            <a href="#contact" className="neo-button mt-10 min-h-14 bg-yellow px-7 py-4 text-sm sm:mt-12">
              Получить оценку проекта
            </a>
          </div>
        </section>

        <section id="approach" data-reveal aria-labelledby="technology-heading" className="py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-16">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <h2 id="technology-heading" className="font-display text-[clamp(2.7rem,6vw,5.5rem)] leading-[0.9] font-extrabold tracking-[-0.06em] text-ink uppercase lg:col-span-8">
                На чём я работаю
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-muted lg:col-span-4">
                Технологию выбираю под задачу, необходимый функционал и дальнейшую работу с сайтом.
              </p>
            </div>
            <ul className="mt-9 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
              {technologies.map((item) => (
                <li key={item.title} className={`neo-border flex flex-col p-5 sm:min-h-64 sm:p-6 ${item.color}`}>
                  <h3 className="font-display text-2xl font-extrabold tracking-[-0.04em] uppercase">{item.title}</h3>
                  <p className="mt-5 text-[0.9375rem] leading-[1.65] sm:mt-auto sm:pt-8 sm:text-base">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="process" data-reveal aria-labelledby="process-heading" className="border-y-2 border-black bg-blue py-12 text-white sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-16">
            <p className="sticker border-white bg-yellow text-[0.625rem] text-black sm:text-xs">Процесс</p>
            <h2 id="process-heading" className="mt-8 font-display text-[clamp(2.7rem,6vw,5.5rem)] leading-[0.9] font-extrabold tracking-[-0.06em] uppercase">
              Как проходит работа
            </h2>
            <ol className="mt-9 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5">
              {process.map((step) => (
                <li key={step.number} className="flex flex-col border-2 border-white bg-blue p-5 transition-transform duration-150 motion-safe:hover:-translate-y-1 sm:min-h-64">
                  <p className="font-display text-4xl leading-none font-extrabold text-yellow">{step.number}</p>
                  <h3 className="mt-5 font-display text-xl font-extrabold uppercase sm:mt-8">{step.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-[1.6] text-white/90">{step.text}</p>
                </li>
              ))}
            </ol>
            <a href="#contact" className="neo-button mt-10 min-h-14 bg-yellow px-7 py-4 text-sm text-black sm:mt-12">
              Обсудить задачу
            </a>
          </div>
        </section>

        <section id="projects" data-reveal aria-labelledby="projects-heading" className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-16">
            <p className="sticker bg-yellow text-[0.625rem] sm:text-xs">Реальные проекты</p>
            <h2 id="projects-heading" className="mt-8 font-display text-[clamp(2.7rem,6vw,5.5rem)] leading-[0.9] font-extrabold tracking-[-0.06em] text-ink uppercase">
              Примеры работ
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Проекты, в которых я участвовала самостоятельно или в составе команды.
            </p>

            <ol className="mt-12 grid gap-8 lg:grid-cols-2">
              {projects.map((project) => (
                <li key={project.number} className="min-w-0">
                  <article className="neo-border neo-shadow flex h-full min-w-0 flex-col overflow-hidden bg-surface">
                    <div className="flex items-center justify-between gap-4 border-b-2 border-black p-4 sm:px-5">
                      <p className="font-display text-3xl font-extrabold tracking-[-0.05em] text-blue">{project.number}</p>
                      <h3 className="truncate font-display text-lg font-extrabold tracking-[-0.03em] text-ink uppercase sm:text-xl">{project.title}</h3>
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-black bg-canvas">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(min-width: 1024px) 44vw, (min-width: 640px) calc(100vw - 80px), calc(100vw - 32px)"
                        style={{ objectPosition: project.position }}
                        className="object-cover transition-transform duration-200 motion-safe:hover:scale-[1.02] motion-reduce:transition-none"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <p className="text-xs font-bold tracking-[0.07em] text-ink uppercase sm:text-sm">{project.role}</p>
                      <p className="mt-4 text-[0.9375rem] leading-[1.65] text-muted sm:text-base">{project.description}</p>
                      {project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex min-h-11 self-start items-center font-bold text-ink underline decoration-2 underline-offset-4"
                        >
                          Смотреть сайт ↗
                        </a>
                      )}
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section data-reveal aria-labelledby="benefits-heading" className="border-y-2 border-black bg-pink py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-16">
            <h2 id="benefits-heading" className="font-display text-[clamp(2.7rem,6vw,5.5rem)] leading-[0.9] font-extrabold tracking-[-0.06em] text-ink uppercase">
              Что вы получаете
            </h2>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <li key={benefit.title} className="neo-border bg-surface p-5 sm:p-7">
                  <div className="flex items-start gap-4">
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center border-2 border-black font-display font-extrabold ${index % 2 === 0 ? "bg-yellow" : "bg-blue text-white"}`}>
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-extrabold tracking-[-0.03em] text-ink uppercase sm:text-2xl">{benefit.title}</h3>
                      <p className="mt-3 text-[0.9375rem] leading-[1.65] text-muted sm:text-base">{benefit.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section data-reveal aria-labelledby="price-heading" className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-16">
            <div className="neo-border neo-shadow grid overflow-hidden bg-surface lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="bg-yellow p-6 sm:p-9 lg:p-10">
                <p className="text-xs font-bold tracking-[0.12em] uppercase">Стоимость</p>
                <h2 id="price-heading" className="mt-5 font-display text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[0.9] font-extrabold tracking-[-0.06em] text-ink uppercase">
                  Сколько стоит разработка сайта?
                </h2>
              </div>
              <div className="border-t-2 border-black p-6 sm:p-9 lg:border-t-0 lg:border-l-2 lg:p-10">
                <p className="text-lg leading-[1.65] text-ink sm:text-xl">
                  Стоимость зависит от типа сайта, количества страниц, сложности дизайна и необходимого функционала.
                </p>
                <p className="mt-4 text-base leading-[1.65] text-muted sm:text-[1.0625rem]">
                  После короткого обсуждения задачи я смогу оценить объём работы и предложить подходящий формат.
                </p>
                <a href="#contact" className="neo-button mt-7 min-h-14 bg-blue px-8 py-4 text-base text-white sm:min-h-16">
                  Рассказать о проекте
                </a>
              </div>
            </div>
          </div>
        </section>

        <section data-reveal aria-labelledby="faq-heading" className="border-y-2 border-black bg-surface py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-10 lg:px-16">
            <p className="sticker bg-blue text-[0.625rem] text-white sm:text-xs">FAQ</p>
            <h2 id="faq-heading" className="mt-8 font-display text-[clamp(2.7rem,6vw,5.5rem)] leading-[0.9] font-extrabold tracking-[-0.06em] text-ink uppercase">
              Частые вопросы
            </h2>
            <div className="mt-12 space-y-4">
              {faq.map((item) => (
                <details key={item.question} className="group neo-border bg-background open:bg-yellow">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 font-display text-base font-extrabold tracking-[-0.02em] text-ink uppercase marker:content-none focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-black sm:px-6 sm:text-lg">
                    <span>{item.question}</span>
                    <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-black bg-surface text-xl leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="border-t-2 border-black px-5 py-5 sm:px-6">
                    <p className="max-w-3xl text-sm leading-relaxed text-ink sm:text-base">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" data-reveal aria-labelledby="contact-heading" className="overflow-hidden py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-16">
            <div className="grid min-w-0 gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
              <div className="min-w-0 lg:col-span-5">
                <p className="sticker bg-yellow text-[0.625rem] sm:text-xs">Контакты</p>
                <h2 id="contact-heading" className="mt-8 font-display text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.88] font-extrabold tracking-[-0.06em] text-ink uppercase">
                  Обсудим ваш проект?
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                  Расскажите немного о задаче — я изучу проект и предложу подходящий формат разработки.
                </p>
                <address className="mt-9 not-italic">
                  <ul className="grid gap-3">
                    {contactLinks.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="neo-border flex min-h-14 min-w-0 items-center justify-between gap-4 bg-surface px-4 py-3 transition-transform motion-safe:hover:-translate-y-0.5">
                          <span className="text-[0.625rem] font-bold tracking-[0.12em] text-muted uppercase sm:text-xs">{link.label}</span>
                          <span className="min-w-0 text-right text-sm font-bold text-ink [overflow-wrap:anywhere] sm:text-base">{link.value}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </address>
              </div>
              <div className="min-w-0 lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
