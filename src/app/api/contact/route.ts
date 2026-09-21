import { NextResponse } from "next/server";

const allowedServices = new Set([
  "Landing Page",
  "Business Website",
  "Website Redesign",
  "Другое",
]);

const MAX_REQUEST_BYTES = 10_000;
const MAX_NAME_LENGTH = 100;
const MAX_CONTACT_LENGTH = 150;
const MAX_MESSAGE_LENGTH = 2_000;

type ContactPayload = {
  name?: unknown;
  contact?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
};

function safeError(status: number) {
  return NextResponse.json(
    { ok: false, error: "Unable to process request" },
    { status },
  );
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  const declaredLength = Number(request.headers.get("content-length") ?? 0);

  if (
    !contentType.includes("application/json") ||
    (Number.isFinite(declaredLength) && declaredLength > MAX_REQUEST_BYTES)
  ) {
    return safeError(400);
  }

  let rawBody: string;

  try {
    rawBody = await request.text();
  } catch {
    return safeError(400);
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) {
    return safeError(413);
  }

  let payload: ContactPayload;

  try {
    payload = JSON.parse(rawBody) as ContactPayload;
  } catch {
    return safeError(400);
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return safeError(400);
  }

  const website = typeof payload.website === "string" ? payload.website.trim() : "";

  if (website) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const contact =
    typeof payload.contact === "string" ? payload.contact.trim() : "";
  const service =
    typeof payload.service === "string" ? payload.service.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";

  const isValid =
    name.length > 0 &&
    name.length <= MAX_NAME_LENGTH &&
    contact.length > 0 &&
    contact.length <= MAX_CONTACT_LENGTH &&
    allowedServices.has(service) &&
    message.length > 0 &&
    message.length <= MAX_MESSAGE_LENGTH;

  if (!isValid) {
    return safeError(400);
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return safeError(500);
  }

  const telegramMessage = [
    "🔥 Новая заявка с сайта",
    "",
    "👤 Имя:",
    name,
    "",
    "📩 Контакт:",
    contact,
    "",
    "💼 Услуга:",
    service,
    "",
    "📝 О проекте:",
    message,
  ].join("\n");

  try {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
        }),
        signal: AbortSignal.timeout(10_000),
      },
    );

    const telegramResult = (await telegramResponse.json().catch(() => null)) as
      | { ok?: boolean }
      | null;

    if (!telegramResponse.ok || !telegramResult?.ok) {
      return safeError(502);
    }
  } catch {
    return safeError(502);
  }

  return NextResponse.json({ ok: true });
}
