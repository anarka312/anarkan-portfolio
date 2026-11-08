"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const services = [
  { label: "Лендинг", value: "Landing Page" },
  { label: "Сайт для бизнеса", value: "Business Website" },
  { label: "Редизайн сайта", value: "Website Redesign" },
  { label: "Другое", value: "Другое" },
] as const;

const fieldClassName =
  "block min-h-14 w-full min-w-0 border-2 border-black bg-surface px-4 py-4 text-base text-ink transition-[box-shadow,transform] duration-150 placeholder:text-muted focus-visible:border-black focus-visible:outline-none focus-visible:shadow-[3px_3px_0_0_#FDE047]";

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
      className="relative z-10 min-w-0 space-y-6 border-2 border-black bg-surface p-5 shadow-[4px_4px_0_0_#000] sm:p-8 sm:shadow-[6px_6px_0_0_#000] lg:p-10 lg:shadow-[8px_8px_0_0_#000]"
      onSubmit={handleSubmit}
    >
      <div>
        <label
          htmlFor="brief-name"
          className="mb-2 block text-xs font-bold tracking-[0.08em] text-ink uppercase sm:text-sm"
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
          className="mb-2 block text-xs font-bold tracking-[0.08em] text-ink uppercase sm:text-sm"
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
        <legend className="mb-3 text-xs font-bold tracking-[0.08em] text-ink uppercase sm:text-sm">
          Что вам нужно?
        </legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {services.map(({ label, value }, index) => (
            <label key={value} className="relative min-w-0 cursor-pointer">
              <input
                type="radio"
                name="service"
                value={value}
                defaultChecked={index === 0}
                className="peer sr-only"
              />
              <span className="flex min-h-14 items-center border-2 border-black bg-surface px-4 py-3 text-sm font-bold text-ink uppercase transition-[box-shadow,transform,background-color] duration-150 hover:bg-canvas peer-checked:-translate-x-0.5 peer-checked:-translate-y-0.5 peer-checked:bg-yellow peer-checked:shadow-[4px_4px_0_0_#000] peer-focus-visible:outline-3 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-black">
                {label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div>
        <label
          htmlFor="brief-message"
          className="mb-2 block text-xs font-bold tracking-[0.08em] text-ink uppercase sm:text-sm"
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
        className="inline-flex min-h-14 w-full items-center justify-center border-2 border-black bg-yellow px-7 py-4 font-display text-sm font-extrabold tracking-[0.04em] text-black uppercase shadow-[5px_5px_0_0_#000] transition-[box-shadow,transform,opacity] duration-150 motion-safe:hover:-translate-x-0.5 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[7px_7px_0_0_#000] motion-safe:active:translate-x-0.5 motion-safe:active:translate-y-0.5 motion-safe:active:shadow-[2px_2px_0_0_#000] disabled:cursor-wait disabled:opacity-60 disabled:shadow-[2px_2px_0_0_#000]"
      >
        {isSubmitting ? "Отправка..." : "Отправить заявку →"}
      </button>

      <div
        ref={statusRef}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {status === "success" && (
          <p className="border-2 border-black bg-yellow px-4 py-3 text-sm leading-relaxed font-bold text-ink">
            Спасибо! Заявка отправлена. Я свяжусь с вами в ближайшее время.
          </p>
        )}
        {status === "error" && (
          <p className="border-2 border-black bg-pink px-4 py-3 text-sm leading-relaxed font-bold text-ink">
            Не удалось отправить заявку. Попробуйте ещё раз или напишите мне в
            Telegram.
          </p>
        )}
      </div>
    </form>
  );
}
