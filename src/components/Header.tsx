const navigation = [
  { label: "Обо мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Проекты", href: "#projects" },
  { label: "Контакты", href: "#contact" },
];

export default function Header() {
  return (
    <header className="border-b border-border bg-background font-sans">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 sm:px-10 md:flex-row md:items-center md:justify-between md:gap-8 lg:px-16">
        <div className="shrink-0">
          <p className="text-lg font-semibold tracking-tight text-primary">
            Anarkan Sadyralieva
          </p>
          <p className="mt-1 text-xs text-secondary">
            Web Developer &amp; Designer
          </p>
        </div>
        <nav aria-label="Основная навигация">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 lg:gap-x-6">
            {navigation.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="inline-flex min-h-11 items-center rounded-sm px-1 text-sm font-normal text-secondary transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
