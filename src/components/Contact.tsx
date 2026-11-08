import ContactForm from "@/components/ContactForm";

const contacts = [
  {
    label: "Email",
    value: "sadyralieva.anarkan@gmail.com",
    href: "mailto:sadyralieva.anarkan@gmail.com",
    accent: "bg-yellow",
    external: false,
  },
  {
    label: "Telegram",
    value: "@anarka312",
    href: "https://t.me/anarka312",
    accent: "bg-pink",
    external: true,
  },
  {
    label: "Phone",
    value: "+996 700 180 216",
    href: "tel:+996700180216",
    accent: "bg-surface",
    external: false,
  },
] as const;

export default function Contact() {
  return (
    <section
      data-reveal
      id="contact"
      aria-labelledby="contact-heading"
      className="overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-16">
        <div className="grid min-w-0 gap-14 lg:grid-cols-12 lg:items-start lg:gap-12 xl:gap-16">
          <div className="min-w-0 lg:col-span-5">
            <p className="sticker rotate-[-1deg] bg-yellow text-[0.625rem] sm:text-xs">
              04 — Контакты
            </p>

            <h2
              id="contact-heading"
              className="mt-9 font-display text-[clamp(3rem,6.5vw,5.75rem)] leading-[0.88] font-extrabold tracking-[-0.065em] text-ink uppercase sm:mt-12"
            >
              <span className="block">Есть проект?</span>
              <span className="mt-3 block sm:mt-4">Давайте</span>
              <span className="relative mt-3 inline-block isolate px-2 py-1 text-white sm:mt-4 sm:px-3">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 rotate-[-1deg] border-2 border-black bg-blue"
                />
                Обсудим.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Расскажите немного о проекте — я изучу задачу и свяжусь с вами.
            </p>

            <address className="mt-9 not-italic sm:mt-10">
              <ul className="grid gap-3">
                {contacts.map(({ label, value, href, accent, external }) => (
                  <li key={label} className="min-w-0">
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className={`group neo-border flex min-w-0 items-center justify-between gap-4 px-4 py-3 transition-transform duration-200 motion-safe:hover:translate-x-1 sm:px-5 sm:py-4 ${accent}`}
                    >
                      <span className="shrink-0 text-[0.625rem] font-bold tracking-[0.12em] text-ink uppercase sm:text-xs">
                        {label}
                      </span>
                      <span className="min-w-0 text-right text-sm leading-tight font-bold text-ink [overflow-wrap:anywhere] sm:text-base">
                        {value}
                        {label !== "Phone" && (
                          <span aria-hidden="true"> ↗</span>
                        )}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </address>
          </div>

          <div className="relative min-w-0 p-1.5 sm:p-2 lg:col-span-7">
            <div
              aria-hidden="true"
              className="absolute inset-1.5 rotate-[0.5deg] border-2 border-black bg-pink sm:inset-2 lg:rotate-[1deg]"
            />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
