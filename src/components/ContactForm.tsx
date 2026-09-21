"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const services = [
  "Landing Page",
  "Business Website",
  "Website Redesign",
  "Другое",
] as const;

const fieldClassName =
  "block min-h-14 w-full min-w-0 rounded-lg border border-secondary/70 bg-background px-4 py-4 text-base text-primary transition-colors duration-200 placeholder:text-secondary hover:border-secondary focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const statusRef = useRef<HTMLDivElement>(null);
  const isSubmitting = status === "submitting";

  useEffect(() => {
    if (status === "success" || status === "error") {
      statusRef.current?.scrollIntoView({ block: "nearest" });
    }
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          contact: formData.get("contact"),
          service: formData.get("service"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean }
        | null;

      if (!response.ok || !result?.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      aria-label="Заявка на проект"
      aria-busy={isSubmitting}
      className="relative min-w-0 space-y-5 lg:col-span-6"
      onSubmit={handleSubmit}
    >
      <div>
        <label
          htmlFor="brief-name"
          className="mb-2 block text-sm font-medium text-primary"
        >
          Ваше имя
        </label>
        <input
          id="brief-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Как к вам обращаться?"
          required
          maxLength={100}
          className={fieldClassName}
        />
      </div>
      <div>
        <label
          htmlFor="brief-contact"
          className="mb-2 block text-sm font-medium text-primary"
        >
          Email или Telegram
        </label>
        <input
          id="brief-contact"
          name="contact"
          type="text"
          placeholder="Как с вами связаться?"
          required
          maxLength={150}
          className={fieldClassName}
        />
      </div>
      <fieldset className="min-w-0">
        <legend className="mb-2 text-sm font-medium text-primary">
          Что вам нужно?
        </legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {services.map((service, index) => (
            <label key={service} className="relative min-w-0 cursor-pointer">
              <input
                type="radio"
                name="service"
                value={service}
                defaultChecked={index === 0}
                className="peer sr-only"
              />
              <span className="flex min-h-14 items-center rounded-lg border border-secondary/70 bg-background px-4 py-4 text-sm text-secondary transition-colors duration-200 hover:border-secondary peer-checked:border-accent peer-checked:bg-accent/5 peer-checked:font-medium peer-checked:text-primary peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                {service}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div>
        <label
          htmlFor="brief-message"
          className="mb-2 block text-sm font-medium text-primary"
        >
          Расскажите о проекте
        </label>
        <textarea
          id="brief-message"
          name="message"
          rows={5}
          placeholder="Коротко опишите задачу, сроки или пожелания"
          required
          maxLength={2000}
          className={`${fieldClassName} resize-y`}
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden"
      >
        <label htmlFor="brief-website">Website</label>
        <input
          id="brief-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-accent px-7 py-4 text-sm font-medium text-white opacity-100 transition-colors duration-200 hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:cursor-wait disabled:bg-accent/80"
      >
        {isSubmitting ? "Отправка..." : "Отправить заявку"}
      </button>

      <div
        ref={statusRef}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {status === "success" && (
          <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-relaxed text-emerald-900">
            Спасибо! Заявка отправлена. Я свяжусь с вами в ближайшее время.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-lg border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-primary">
            Не удалось отправить заявку. Попробуйте ещё раз или напишите мне в
            Telegram.
          </p>
        )}
      </div>
    </form>
  );
}
