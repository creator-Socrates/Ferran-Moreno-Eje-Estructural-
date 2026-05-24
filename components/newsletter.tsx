"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

type Variant = "footer" | "blog";
type Lang = "es" | "en";

const COPY: Record<Lang, Record<Variant, { title: string; body: string; placeholder: string; button: string; legal: string; sent: string; error: string }>> = {
  es: {
    footer: {
      title: "Newsletter",
      body: "Procesos, cursos, viajes, artículos. Te aviso si hay algo.",
      placeholder: "tu@email.com",
      button: "Suscribirme",
      legal: "Sin spam. Cancela cuando quieras.",
      sent: "Listo. Te aviso cuando haya algo.",
      error: "No se ha podido suscribir. Revisa el email.",
    },
    blog: {
      title: "Si esto te ha resonado",
      body: "Te aviso cuando publique algo nuevo, abra un proceso, haga un curso, o esté de paso por tu ciudad.",
      placeholder: "tu@email.com",
      button: "Avísame",
      legal: "Sin spam. Cancela cuando quieras.",
      sent: "Listo. Te aviso cuando haya algo.",
      error: "No se ha podido suscribir. Revisa el email.",
    },
  },
  en: {
    footer: {
      title: "Newsletter",
      body: "New processes, courses, travel, writing. I'll let you know if there's something.",
      placeholder: "you@email.com",
      button: "Subscribe",
      legal: "No spam. Unsubscribe anytime.",
      sent: "Done. I'll let you know.",
      error: "Could not subscribe. Check the email address.",
    },
    blog: {
      title: "If this resonated",
      body: "I'll let you know when I publish something new, open a new process, run a course, or pass through your city.",
      placeholder: "you@email.com",
      button: "Notify me",
      legal: "No spam. Unsubscribe anytime.",
      sent: "Done. I'll let you know.",
      error: "Could not subscribe. Check the email address.",
    },
  },
};

export function Newsletter({
  variant = "footer",
  lang = "es",
  source,
}: {
  variant?: Variant;
  lang?: Lang;
  source?: string;
}) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const t = COPY[lang][variant];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setState("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: source || variant }),
      });
      if (!res.ok) throw new Error("fail");
      setState("ok");
      setEmail("");
      trackEvent("newsletter_signup", {
        source: source || variant,
        lang,
      });
    } catch {
      setState("error");
    }
  }

  if (variant === "blog") {
    return (
      <section className="mt-16" style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <div className="mx-auto max-w-[700px] px-6 py-16">
          <div className="text-xs uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
            {t.title}
          </div>
          <p className="mt-4 text-lg leading-[1.8]">{t.body}</p>
          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.placeholder}
              className="flex-1 rounded-full px-5 py-3 text-sm outline-none transition"
              style={{
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-main)",
                color: "var(--text-main)",
              }}
              disabled={state === "loading" || state === "ok"}
            />
            <button
              type="submit"
              disabled={state === "loading" || state === "ok"}
              className="rounded-full px-7 py-3 text-sm font-medium text-white transition hover:opacity-85 disabled:opacity-50"
              style={{ background: "var(--text-main)" }}
            >
              {state === "loading" ? "..." : t.button}
            </button>
          </form>
          <p className="mt-3 text-xs" style={{ color: "var(--text-secondary)" }}>
            {state === "ok" ? t.sent : state === "error" ? t.error : t.legal}
          </p>
        </div>
      </section>
    );
  }

  return (
    <div className="border-t" style={{ borderColor: "var(--border-subtle)" }}>
      <div className="mx-auto max-w-[900px] px-6 py-10">
        <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
              {t.title}
            </div>
            <p className="mt-3 text-base leading-[1.7]">{t.body}</p>
          </div>
          <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.placeholder}
              className="rounded-full px-4 py-2.5 text-sm outline-none sm:min-w-[260px]"
              style={{
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-main)",
                color: "var(--text-main)",
              }}
              disabled={state === "loading" || state === "ok"}
            />
            <button
              type="submit"
              disabled={state === "loading" || state === "ok"}
              className="rounded-full px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-85 disabled:opacity-50"
              style={{ background: "var(--text-main)" }}
            >
              {state === "loading" ? "..." : t.button}
            </button>
          </form>
        </div>
        <p className="mt-4 text-xs" style={{ color: "var(--text-secondary)" }}>
          {state === "ok" ? t.sent : state === "error" ? t.error : t.legal}
        </p>
      </div>
    </div>
  );
}
