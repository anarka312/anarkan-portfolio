const navigation = [
  { label: "Обо мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Проекты", href: "#projects" },
  { label: "Контакты", href: "#contact" },
];

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white font-sans">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 py-7 sm:px-10 md:flex-row md:items-center md:justify-between md:gap-8 lg:px-16">
        <div className="shrink-0">
          <p className="text-lg font-semibold tracking-tight text-gray-950">
            Anarkan Sadyralieva
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Web Developer &amp; Designer
          </p>
        </div>
        <nav aria-label="Основная навигация">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:gap-x-8">
            {navigation.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="rounded-sm text-sm font-medium text-gray-600 hover:text-[#4F46E5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4F46E5]"
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
