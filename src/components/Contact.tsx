import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section
      data-reveal
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-7xl px-6 pt-8 pb-12 sm:px-10 sm:pt-12 sm:pb-16 lg:px-16 lg:pt-16 lg:pb-20"
    >
      <div className="border-t border-border pt-6 sm:pt-8">
        <p className="text-xs font-medium tracking-wide text-secondary">
          04 — Контакты
        </p>
        <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="min-w-0 lg:col-span-6">
            <h2
              id="contact-heading"
              className="max-w-2xl text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.08] font-semibold tracking-[-0.045em] text-balance"
            >
              Есть проект?<br />
              <span className="text-accent">Давайте обсудим.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
              Расскажите немного о вашей задаче — я изучу проект и свяжусь с вами.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
