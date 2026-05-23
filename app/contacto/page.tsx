"use client";

import Link from "next/link";
import { useState } from "react";
import { contactWhatsApp } from "@/lib/content";

const INTERESES = [
  "Dolor que vuelve",
  "Sistema nervioso saturado",
  "Lesiones sin resolver",
  "Rendimiento / alta exigencia",
  "Trabajo energético",
  "Cursos / formación",
  "Quiero que vengas a mi ciudad",
  "Me han recomendado tu trabajo",
  "Te he visto en redes",
  "Quiero empezar a trabajar contigo",
];

const EXCLUSIVE_CHIP = "Quiero que vengas a mi ciudad";

export default function ContactoPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  function toggle(item: string) {
    setSelected((prev) => {
      if (prev.includes(item)) return prev.filter((x) => x !== item);
      if (item === EXCLUSIVE_CHIP) return [item];
      return [...prev.filter((x) => x !== EXCLUSIVE_CHIP), item];
    });
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
      setStatus(res.ok ? "done" : "error");
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
            <h1 className="text-3xl font-semibold tracking-tight mb-6">Gracias.</h1>
            <p className="text-[15px] leading-relaxed mb-2" style={{ color: "var(--text-secondary)" }}>
              Te respondo en las próximas 48 horas.
            </p>
            <p className="text-[15px]" style={{ color: "var(--text-secondary)" }}>— Ferran</p>
          </div>
        ) : (
          <>
            <p className="text-[13px] uppercase tracking-[0.14em] mb-8" style={{ color: "#8a8a8a" }}>Contacto</p>
            <h1 className="text-3xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>Cuéntame qué está pasando.</h1>
            <p className="text-[15px] leading-relaxed mb-14" style={{ color: "#4a4a4a" }}>
              Déjame tu email y una breve explicación. Te respondo personalmente.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

              {/* Chips */}
              <div>
                <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#2f2f2f", marginBottom: "16px" }}>
                  ¿Qué te trae aquí?
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {INTERESES.map((item) => {
                    const active = selected.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggle(item)}
                        style={{
                          fontSize: "13px",
                          padding: "8px 16px",
                          border: "1px solid",
                          borderColor: active ? "#c8a800" : "#cfcfcf",
                          background: active ? "#f5e033" : "#f8f8f8",
                          color: active ? "#1a1a1a" : "#4a4a4a",
                          borderRadius: "2px",
                          cursor: "pointer",
                          transition: "all 0.15s",
                          fontFamily: "inherit",
                          fontWeight: active ? 600 : 400,
                        }}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Nombre */}
              <div>
                <label style={{ display: "block", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#2f2f2f", marginBottom: "12px" }}>
                  Nombre <span style={{ color: "#8a8a8a" }}>(opcional)</span>
                </label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  style={{
                    display: "block",
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid #cfcfcf",
                    fontSize: "15px",
                    padding: "12px 0",
                    color: "#1a1a1a",
                    outline: "none",
                    fontFamily: "inherit",
                    WebkitAppearance: "none",
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label style={{ display: "block", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#2f2f2f", marginBottom: "12px" }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  style={{
                    display: "block",
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid #cfcfcf",
                    fontSize: "15px",
                    padding: "12px 0",
                    color: "#1a1a1a",
                    outline: "none",
                    fontFamily: "inherit",
                    WebkitAppearance: "none",
                  }}
                />
              </div>

              {/* Mensaje */}
              <div>
                <label style={{ display: "block", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#2f2f2f", marginBottom: "12px" }}>
                  Algo más <span style={{ color: "#8a8a8a" }}>(opcional)</span>
                </label>
                <textarea
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder={selected.includes("Quiero que vengas a mi ciudad") ? "Ciudad, país, número aproximado de personas interesadas y fechas posibles." : "Qué está pasando, desde cuándo, qué has probado y qué necesitas ahora."}
                  rows={4}
                  style={{
                    display: "block",
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid #cfcfcf",
                    fontSize: "15px",
                    padding: "12px 0",
                    color: "#1a1a1a",
                    outline: "none",
                    resize: "none",
                    fontFamily: "inherit",
                    WebkitAppearance: "none",
                  }}
                />
              </div>

              {status === "error" && (
                <p style={{ fontSize: "13px", color: "#4a4a4a" }}>
                  Algo falló. Prueba por{" "}
                  <a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>WhatsApp</a>.
                </p>
              )}

              {/* Submit */}
              <div style={{ paddingTop: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "32px", marginBottom: "16px" }}>
                  <button
                    type="submit"
                    disabled={status === "sending" || !email}
                    style={{
                      fontSize: "13px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      padding: "12px 32px",
                      background: !email || status === "sending" ? "#cfcfcf" : "#1f1f1f",
                      color: "#ffffff",
                      border: "none",
                      cursor: !email || status === "sending" ? "not-allowed" : "pointer",
                      fontFamily: "inherit",
                      transition: "background 0.15s",
                    }}
                  >
                    {status === "sending" ? "Enviando…" : "Enviar mensaje"}
                  </button>
                  <a
                    href={contactWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
                  >
                    o escríbeme por WhatsApp →
                  </a>
                </div>
                <p style={{ fontSize: "13px", color: "#8a8a8a" }}>
                  Te respondo personalmente. Si encaja, vemos el siguiente paso.
                </p>
              </div>
            </form>
          </>
        )}
      </main>
    </div>
  );
}
