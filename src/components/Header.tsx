import MobileNavigation from "@/components/MobileNavigation";

const navigation = [
  { label: "Обо мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Проекты", href: "#projects" },
  { label: "Контакты", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-black bg-background/95 font-sans">
      <div className="mx-auto flex min-h-14 max-w-7xl items-center justify-between gap-2 px-3 sm:min-h-16 sm:gap-6 sm:px-10 lg:px-16">
        <div className="flex shrink-0 items-center gap-1.5">
          <p className="font-display text-base font-extrabold tracking-[-0.06em] text-ink sm:text-xl">
            ANARKAN.
          </p>
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 rotate-12 border border-black bg-yellow sm:h-3 sm:w-3"
          />
        </div>

        <nav aria-label="Основная навигация" className="hidden min-w-0 md:block">
          <ul className="flex items-center justify-end gap-0.5 sm:gap-2 lg:gap-4">
            {navigation.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="group relative inline-flex min-h-11 items-center px-1.5 text-[0.625rem] font-bold tracking-[0.04em] text-ink uppercase transition-transform duration-150 motion-safe:hover:-translate-y-0.5 sm:px-2 sm:text-xs sm:tracking-[0.08em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <span className="relative z-10">{label}</span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-1 bottom-2 h-1 origin-left scale-x-0 bg-yellow transition-transform duration-150 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNavigation items={navigation} />
      </div>
    </header>
  );
}
