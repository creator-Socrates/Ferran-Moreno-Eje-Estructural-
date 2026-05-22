"use client";

import Link from "next/link";
import { useState } from "react";
import { contactWhatsApp } from "@/lib/content";

const INTERESES = [
  "Dolor que vuelve",
  "Sistema nervioso saturado",
  "Lesiones sin resolver",
  "Rendimiento y presión",
  "Trabajo energético",
  "Solo exploración",
];

export default function ContactoPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  function toggle(item: string) {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, intereses: selected, mensaje }),
      });
      if (res.ok) {
        setStatus("done");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <header className="sticky top-0 z-30" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-5">
          <Link href="/" className="leading-none">
            <div className="text-[17px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-main)" }}>Ferran Moreno</div>
            <div className="mt-[5px] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              TRABAJO CORPORAL · REGULACIÓN · ENERGÍA
            </div>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" style={{ color: "var(--text-secondary)" }}>
            <Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Inicio</Link>
            <Link href="/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Wall of trust</Link>
            <Link href="/historia" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Mi historia</Link>
            <Link href="/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link>
            <Link href="/contacto" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contacto</Link>
            <span style={{ color: "var(--border-subtle)" }}>|</span>
            <Link href="/en" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">EN</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[640px] px-6 py-24">
        {status === "done" ? (
          <div className="py-12">
            <p className="text-[13px] uppercase tracking-[0.14em] mb-8" style={{ color: "var(--text-secondary)" }}>Recibido</p>
            <h1 className="text-3xl font-semibold tracking-tight mb-6">
              Gracias.
            </h1>
            <p className="text-[15px] leading-relaxed mb-2" style={{ color: "var(--text-secondary)" }}>
              Te respondo en las próximas 48 horas.
            </p>
            <p className="text-[15px]" style={{ color: "var(--text-secondary)" }}>— Ferran</p>
          </div>
        ) : (
          <>
            <p className="text-[13px] uppercase tracking-[0.14em] mb-8" style={{ color: "var(--text-secondary)" }}>Contacto</p>
            <h1 className="text-3xl font-semibold tracking-tight mb-4">
              Cuéntame algo.
            </h1>
            <p className="text-[15px] leading-relaxed mb-14" style={{ color: "var(--text-secondary)" }}>
              Déjame tu email y qué estás buscando. Te respondo yo.
            </p>

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Interests */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.12em] mb-4" style={{ color: "var(--text-secondary)" }}>
                  ¿Qué te trae aquí?
                </p>
                <div className="flex flex-wrap gap-2">
                  {INTERESES.map((item) => {
                    const active = selected.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggle(item)}
                        className="text-[13px] px-4 py-2 transition-all"
                        style={{
                          border: "1px solid",
                          borderColor: active ? "var(--text-main)" : "var(--border-subtle)",
                          background: active ? "var(--text-main)" : "transparent",
                          color: active ? "var(--bg-main)" : "var(--text-secondary)",
                          borderRadius: "2px",
                          cursor: "pointer",
                        }}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="text-[11px] uppercase tracking-[0.12em] block mb-3" style={{ color: "var(--text-secondary)" }}>
                  Nombre <span style={{ opacity: 0.4 }}>(opcional)</span>
                </label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full bg-transparent text-[15px] py-3 outline-none"
                  style={{
                    borderBottom: "1px solid var(--border-subtle)",
                    color: "var(--text-main)",
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-[11px] uppercase tracking-[0.12em] block mb-3" style={{ color: "var(--text-secondary)" }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full bg-transparent text-[15px] py-3 outline-none"
                  style={{
                    borderBottom: "1px solid var(--border-subtle)",
                    color: "var(--text-main)",
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-[11px] uppercase tracking-[0.12em] block mb-3" style={{ color: "var(--text-secondary)" }}>
                  Algo más <span style={{ opacity: 0.4 }}>(opcional)</span>
                </label>
                <textarea
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Lo que quieras contarme."
                  rows={4}
                  className="w-full bg-transparent text-[15px] py-3 outline-none resize-none"
                  style={{
                    borderBottom: "1px solid var(--border-subtle)",
                    color: "var(--text-main)",
                  }}
                />
              </div>

              {status === "error" && (
                <p className="text-[13px]" style={{ color: "var(--text-secondary)" }}>
                  Algo falló. Prueba por WhatsApp.
                </p>
              )}

              <div className="flex items-center gap-8 pt-2">
                <button
                  type="submit"
                  disabled={status === "sending" || !email}
                  className="text-[13px] uppercase tracking-[0.1em] px-8 py-3 transition-opacity"
                  style={{
                    background: "var(--text-main)",
                    color: "var(--bg-main)",
                    opacity: !email || status === "sending" ? 0.4 : 1,
                    cursor: !email || status === "sending" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "sending" ? "Enviando…" : "Enviar"}
                </button>
                <a
                  href={contactWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] transition hover:opacity-50"
                  style={{ color: "var(--text-secondary)" }}
                >
                  o escríbeme por WhatsApp →
                </a>
              </div>
            </form>
          </>
        )}
      </main>
    </div>
  );
}
