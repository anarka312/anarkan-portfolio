export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface font-sans">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 sm:px-10 md:flex-row md:items-start md:justify-between md:gap-6 lg:px-16">
        <div>
          <p className="text-sm font-medium tracking-tight text-primary">
            Anarkan Sadyralieva
          </p>
          <p className="mt-1 text-xs text-secondary">
            Web Developer &amp; Designer
          </p>
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <address aria-label="Контакты" className="not-italic">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-1">
              <li>
                <a
                  href="mailto:sadyralieva.anarkan@gmail.com"
                  className="inline-flex min-h-11 max-w-full items-center rounded-sm text-xs text-secondary transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <span className="min-w-0 [overflow-wrap:anywhere]">sadyralieva.anarkan@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/anarka312"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram — открыть в новой вкладке"
                  className="inline-flex min-h-11 max-w-full items-center rounded-sm text-xs text-secondary transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  @anarka312
                </a>
              </li>
              <li>
                <a href="tel:+996700180216" className="inline-flex min-h-11 items-center rounded-sm text-xs text-secondary transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                  +996 700 180 216
                </a>
              </li>
            </ul>
          </address>
          <p className="text-xs text-secondary">
            © 2026 Anarkan Sadyralieva
          </p>
        </div>
      </div>
    </footer>
  );
}
