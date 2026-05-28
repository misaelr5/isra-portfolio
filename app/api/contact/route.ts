import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
};

type RateEntry = {
  count: number;
  resetAt: number;
};

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX_REQUESTS = 5;
const rateStore = new Map<string, RateEntry>();

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

function checkRateLimit(key: string) {
  const now = Date.now();
  const current = rateStore.get(key);

  if (!current || now >= current.resetAt) {
    rateStore.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (current.count >= RATE_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000))
    };
  }

  current.count += 1;
  rateStore.set(key, current);
  return { allowed: true, retryAfterSeconds: 0 };
}

function cleanupRateStore() {
  const now = Date.now();
  for (const [key, value] of rateStore.entries()) {
    if (value.resetAt <= now) {
      rateStore.delete(key);
    }
  }
}

export async function POST(request: Request) {
  cleanupRateStore();

  const ip = getClientIp(request);
  const rateResult = checkRateLimit(ip);
  if (!rateResult.allowed) {
    return NextResponse.json(
      { error: "RATE_LIMITED", message: "Demasiados intentos. Probá nuevamente en unos minutos." },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateResult.retryAfterSeconds)
        }
      }
    );
  }

  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "INVALID_JSON" }, { status: 400 });
  }

  if (body.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "MISSING_FIELDS" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "INVALID_EMAIL" }, { status: 400 });
  }

  if (message.length > 8000 || subject.length > 200 || name.length > 120) {
    return NextResponse.json({ error: "PAYLOAD_TOO_LARGE" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from = process.env.RESEND_FROM_EMAIL ?? "ISRA Web <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json({ error: "EMAIL_NOT_CONFIGURED", fallback: "mailto" }, { status: 503 });
  }

  const html = `
    <h2>Nueva consulta desde ISRA</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Asunto:</strong> ${escapeHtml(subject)}</p>
    <hr />
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `[ISRA Web] ${subject}`,
      html,
      text: [`Nombre: ${name}`, `Email: ${email}`, "", message].join("\n")
    })
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Resend error:", response.status, detail);
    return NextResponse.json({ error: "SEND_FAILED" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
