"use client";

import Link from "next/link";
import { useState } from "react";
import { contactWhatsApp } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import { SiteFooter } from "@/components/site-footer";

const INTERESTS = [
  "Pain that keeps coming back",
  "Overloaded nervous system",
  "Unresolved injuries",
  "Performance / high demand",
  "Energy work",
  "Courses / training",
  "I want you to come to my city",
  "Someone recommended your work",
  "I saw you online",
  "I want to start working with you",
];

const EXCLUSIVE_CHIP = "I want you to come to my city";

export default function ContactFormEn() {
  const [selected, setSelected] = useState<string[]>([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const pageBackground = "linear-gradient(180deg, #F8EEA0 0%, #F8D7B4 100%)";

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
      if (res.ok) {
        setStatus("done");
        trackEvent("submit_contact_form", {
          intereses_count: selected.length,
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen" style={{ background: pageBackground, color: "var(--text-main)" }}>
      <header
        className="sticky top-0 z-30"
        style={{
          borderBottom: "1px solid rgba(17, 24, 39, 0.08)",
          background: "rgba(255,255,255,0.74)",
          backdropFilter: "blur(14px)",
        }}
      >
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-5">
          <Link href="/en" className="leading-none">
            <div className="text-[17px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-main)" }}>Ferran Moreno</div>
            <div className="mt-[5px] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              BODYWORK · REGULATION · ENERGY
            </div>
          </Link>
          <nav
            className="hidden md:block"
            aria-label="Contact page navigation"
            style={{ color: "var(--text-secondary)" }}
          >
            <ul className="flex items-center gap-8">
              <li><Link href="/en#method" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Method</Link></li>
              <li><Link href="/en#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Cases</Link></li>
              <li><Link href="/en#who" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Who it&apos;s for</Link></li>
              <li><Link href="/en/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Testimonials</Link></li>
              <li><Link href="/en/my-story" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">My story</Link></li>
              <li><Link href="/en/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link></li>
              <li><Link href="/en/contact" className="text-[11px] uppercase tracking-[0.08em]" style={{ color: "var(--text-main)", textDecoration: "underline", textUnderlineOffset: "4px" }}>Contact</Link></li>
              <li aria-hidden="true" style={{ color: "var(--border-subtle)" }}>|</li>
              <li><Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">ES</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main data-track-section="contact_page" className="mx-auto max-w-[760px] px-6 py-24">
        {status === "done" ? (
          <div
            className="rounded-[2rem] px-8 py-12 lg:px-10"
            style={{
              border: "1px solid rgba(17, 24, 39, 0.08)",
              background: "rgba(255,255,255,0.88)",
              boxShadow: "0 18px 40px rgba(17, 24, 39, 0.08)",
            }}
          >
            <p className="mb-8 text-[13px] uppercase tracking-[0.14em]" style={{ color: "#9A3412" }}>Received</p>
            <h1 className="mb-6 text-3xl font-semibold tracking-tight">Thank you.</h1>
            <p className="mb-2 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              If your case fits, I&apos;ll suggest the next step once I&apos;ve reviewed it.
            </p>
            <p className="text-[15px]" style={{ color: "var(--text-secondary)" }}>— Ferran</p>
          </div>
        ) : (
          <div
            className="rounded-[2.5rem] px-8 py-10 lg:px-10 lg:py-12"
            style={{
              border: "1px solid rgba(17, 24, 39, 0.08)",
              background: "rgba(255,255,255,0.88)",
              boxShadow: "0 24px 60px rgba(17, 24, 39, 0.09)",
            }}
          >
            <p className="mb-8 text-[13px] uppercase tracking-[0.14em]" style={{ color: "#9A3412" }}>Contact</p>
            <h1 className="mb-4 text-3xl font-semibold tracking-tight" style={{ color: "#1a1a1a" }}>Tell me what&apos;s happening.</h1>
            <p className="mb-14 text-[15px] leading-relaxed" style={{ color: "#4a4a4a" }}>
              What&apos;s happening, how long it&apos;s been there, and what you&apos;ve already tried.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              <div>
                <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#2f2f2f", marginBottom: "16px" }}>
                  What brings you here?
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {INTERESTS.map((item) => {
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
                          borderColor: active ? "rgba(243, 122, 45, 0.35)" : "rgba(17, 24, 39, 0.12)",
                          background: active ? "#F4E55A" : "rgba(255,255,255,0.78)",
                          color: active ? "#1a1a1a" : "#4a4a4a",
                          borderRadius: "999px",
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

              <div>
                <label style={{ display: "block", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#2f2f2f", marginBottom: "12px" }}>
                  Name <span style={{ color: "#8a8a8a" }}>(optional)</span>
                </label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Your name"
                  style={{
                    display: "block",
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(17, 24, 39, 0.18)",
                    fontSize: "15px",
                    padding: "12px 0",
                    color: "#1a1a1a",
                    outline: "none",
                    fontFamily: "inherit",
                    WebkitAppearance: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#2f2f2f", marginBottom: "12px" }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  style={{
                    display: "block",
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(17, 24, 39, 0.18)",
                    fontSize: "15px",
                    padding: "12px 0",
                    color: "#1a1a1a",
                    outline: "none",
                    fontFamily: "inherit",
                    WebkitAppearance: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#2f2f2f", marginBottom: "12px" }}>
                  Message <span style={{ color: "#8a8a8a" }}>(optional)</span>
                </label>
                <textarea
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder={selected.includes(EXCLUSIVE_CHIP) ? "City, country, approximate number of interested people, and possible dates." : "What's happening, how long it has been there, what you've tried, and what you need now."}
                  rows={4}
                  style={{
                    display: "block",
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(17, 24, 39, 0.18)",
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
                  Something went wrong. Try via{" "}
                  <a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>WhatsApp</a>.
                </p>
              )}

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
                      background: !email || status === "sending" ? "rgba(17, 24, 39, 0.16)" : "#F37A2D",
                      color: "#ffffff",
                      border: "none",
                      cursor: !email || status === "sending" ? "not-allowed" : "pointer",
                      fontFamily: "inherit",
                      transition: "background 0.15s",
                    }}
                  >
                    {status === "sending" ? "Sending…" : "Send message"}
                  </button>
                  <a
                    href={contactWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
                  >
                    or write to me on WhatsApp →
                  </a>
                </div>
                <p style={{ fontSize: "13px", color: "#8a8a8a" }}>
                  If it fits, we define the next step.
                </p>
              </div>
            </form>
          </div>
        )}
      </main>
      <SiteFooter lang="en" />
    </div>
  );
}
