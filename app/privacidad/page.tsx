import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl, contactWhatsApp } from "@/lib/content";

export const metadata: Metadata = {
  title: "Política de privacidad | Ferran Moreno",
  description: "Política de privacidad de ferran-moreno.com — analítica, newsletter y tus derechos.",
  alternates: {
    canonical: `${siteUrl}/privacidad`,
    languages: { es: `${siteUrl}/privacidad`, en: `${siteUrl}/en/privacy`, "x-default": `${siteUrl}/privacidad` },
  },
  robots: { index: false, follow: false },
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <header className="sticky top-0 z-30" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-5">
          <Link href="/" className="leading-none">
            <div className="text-[17px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-main)" }}>
              Ferran Moreno
            </div>
            <div className="mt-[5px] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              TRABAJO CORPORAL · REGULACIÓN · ENERGÍA
            </div>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" style={{ color: "var(--text-secondary)" }}>
            <Link href="/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link>
            <Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Inicio</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[700px] px-6 py-24">
        <Link href="/" className="mb-12 inline-block text-[11px] uppercase tracking-[0.15em] transition hover:opacity-50" style={{ color: "var(--text-secondary)" }}>
          &larr; Inicio
        </Link>

        <h1 className="mb-10 text-3xl font-semibold tracking-tight leading-[1.15]">
          Política de privacidad
        </h1>

        <div className="space-y-8 text-[15px] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-[13px] uppercase tracking-[0.1em] font-medium" style={{ color: "var(--text-secondary)" }}>Responsable</h2>
            <p>Ferran Moreno — <a href="mailto:fmoreno.bodywork@gmail.com" className="underline">fmoreno.bodywork@gmail.com</a></p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[13px] uppercase tracking-[0.1em] font-medium" style={{ color: "var(--text-secondary)" }}>Cookies de analítica</h2>
            <p>
              Este sitio utiliza Google Analytics 4 (ID: G-RZKCT72MHX) para medir el tráfico: páginas visitadas, origen geográfico y tipo de dispositivo.
              No se comparten datos personales con terceros con fines publicitarios.
            </p>
            <p>
              Las cookies solo se cargan tras consentimiento explícito. Puedes retirar el consentimiento en cualquier momento limpiando el almacenamiento local del navegador
              o utilizando las herramientas de gestión de cookies del navegador.
            </p>
            <p>
              Política de privacidad de Google:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
                policies.google.com/privacy
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[13px] uppercase tracking-[0.1em] font-medium" style={{ color: "var(--text-secondary)" }}>Newsletter</h2>
            <p>
              Si te suscribes a la newsletter, tu dirección de email se almacena en Resend (resend.com).
              Se utiliza exclusivamente para enviar artículos y novedades sobre trabajo corporal y sistema nervioso.
              Puedes darte de baja en cualquier momento mediante el enlace incluido en cada email.
            </p>
            <p>
              Política de privacidad de Resend:{" "}
              <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
                resend.com/privacy
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[13px] uppercase tracking-[0.1em] font-medium" style={{ color: "var(--text-secondary)" }}>Tus derechos</h2>
            <p>
              Conforme al RGPD tienes derecho de acceso, rectificación, supresión y portabilidad de tus datos, así como a oponerte o limitar su tratamiento.
              Para ejercer estos derechos, escribe a{" "}
              <a href="mailto:fmoreno.bodywork@gmail.com" className="underline">fmoreno.bodywork@gmail.com</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[13px] uppercase tracking-[0.1em] font-medium" style={{ color: "var(--text-secondary)" }}>Contacto</h2>
            <p>
              Para cualquier consulta sobre privacidad:{" "}
              <a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" className="underline">
                WhatsApp
              </a>{" "}
              o{" "}
              <a href="mailto:fmoreno.bodywork@gmail.com" className="underline">fmoreno.bodywork@gmail.com</a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
