"use client";

import { useEffect, useRef, useState } from "react";

type NavigationItem = {
  label: string;
  href: string;
};

const accentClasses = ["bg-yellow", "bg-pink", "bg-blue", "bg-yellow"];

export default function MobileNavigation({
  items,
}: {
  items: NavigationItem[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;

      setIsOpen(false);
      buttonRef.current?.focus();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex min-h-9 items-center justify-center whitespace-nowrap border-2 border-black bg-yellow px-3 py-2 font-display text-[0.6875rem] font-extrabold tracking-[0.08em] text-black uppercase shadow-[3px_3px_0_0_#000] transition-[transform,box-shadow] duration-150 motion-safe:hover:-translate-x-0.5 motion-safe:hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#000] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-black"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b-2 border-black bg-background px-4 pt-3 pb-5"
        >
          <nav
            aria-label="Мобильная навигация"
            className="neo-border neo-shadow bg-surface p-2"
          >
            <ul className="grid gap-1">
              {items.map(({ label, href }, index) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="group flex min-h-12 items-center justify-between gap-4 border-2 border-transparent px-3 py-2 font-display text-lg font-extrabold tracking-[-0.02em] text-ink uppercase transition-colors duration-150 hover:border-black hover:bg-background focus-visible:border-black focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-black"
                  >
                    <span>{label}</span>
                    <span
                      aria-hidden="true"
                      className={`h-3 w-3 shrink-0 rotate-12 border border-black transition-transform duration-150 motion-safe:group-hover:rotate-45 ${accentClasses[index]}`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
