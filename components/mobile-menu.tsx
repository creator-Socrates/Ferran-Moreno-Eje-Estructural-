"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navEs = [
  { href: "/#como-trabajo", label: "Método" },
  { href: "/#casos", label: "Casos" },
  { href: "/#para-quien", label: "Para quién" },
  { href: "/wall-of-trust", label: "Wall of trust" },
  { href: "/historia", label: "Mi historia" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

const navEn = [
  { href: "/en#method", label: "Method" },
  { href: "/en#cases", label: "Cases" },
  { href: "/en#who", label: "Who it's for" },
  { href: "/en/wall-of-trust", label: "Testimonials" },
  { href: "/en/my-story", label: "My story" },
  { href: "/en/blog", label: "Blog" },
  { href: "/en/contact", label: "Contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [isEn, setIsEn] = useState(false);

  useEffect(() => {
    setIsEn(window.location.pathname.startsWith("/en"));
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = isEn ? navEn : navEs;
  const langLink = isEn ? { href: "/", label: "ES" } : { href: "/en", label: "EN" };

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        style={{
          position: "fixed",
          top: "17px",
          right: "20px",
          zIndex: 60,
          width: "36px",
          height: "36px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
        }}
        className="md:hidden"
      >
        <span
          style={{
            display: "block",
            width: "22px",
            height: "1.5px",
            background: "var(--text-secondary, #555)",
            transition: "transform 0.2s, opacity 0.2s",
            transformOrigin: "center",
            transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
          }}
        />
        <span
          style={{
            display: "block",
            width: "22px",
            height: "1.5px",
            background: "var(--text-secondary, #555)",
            transition: "opacity 0.2s",
            opacity: open ? 0 : 1,
          }}
        />
        <span
          style={{
            display: "block",
            width: "22px",
            height: "1.5px",
            background: "var(--text-secondary, #555)",
            transition: "transform 0.2s, opacity 0.2s",
            transformOrigin: "center",
            transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
          }}
        />
      </button>

      {/* Overlay */}
      {open && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="md:hidden"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            background: "var(--bg-main, #fff)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "2rem 2.5rem",
          }}
        >
          <nav>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "block",
                      fontSize: "28px",
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                      color: "var(--text-main, #111)",
                      textDecoration: "none",
                      padding: "0.4rem 0",
                      transition: "opacity 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.4")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border-subtle, #e5e7eb)" }}>
            <Link
              href={langLink.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-secondary, #888)",
                textDecoration: "none",
              }}
            >
              {langLink.label}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
