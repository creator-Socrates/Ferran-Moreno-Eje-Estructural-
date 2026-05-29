import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, siteUrl } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "No hace falta estar en crisis para venir | Ferran Moreno",
  description:
    "Una crisis puede abrir la puerta. Pero el trabajo más fino suele empezar cuando el sistema ya no está apagando un incendio.",
  alternates: {
    canonical: "/blog/no-hace-falta-estar-en-crisis-para-venir",
    languages: {
      es: "/blog/no-hace-falta-estar-en-crisis-para-venir",
      en: "/en/blog/you-dont-have-to-be-in-crisis-to-come",
    },
  },
  openGraph: {
    title: "No hace falta estar en crisis para venir",
    description:
      "Una crisis puede abrir la puerta. Pero el trabajo más fino suele empezar cuando el sistema ya no está apagando un incendio.",
    url: `${siteUrl}/blog/no-hace-falta-estar-en-crisis-para-venir`,
    siteName: "Ferran Moreno",
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "No hace falta estar en crisis para venir",
    description:
      "Una crisis puede abrir la puerta. Pero el trabajo más fino suele empezar cuando el sistema ya no está apagando un incendio.",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="No hace falta estar en crisis para venir"
        description="Una crisis puede abrir la puerta. Pero el trabajo más fino suele empezar cuando el sistema ya no está apagando un incendio."
        slug="no-hace-falta-estar-en-crisis-para-venir"
        date="2026-05-28"
        tag="Proceso"
        lang="es"
      />
      <header className="sticky top-0 z-30" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-5">
          <Link href="/" className="leading-none">
            <div className="text-[17px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-main)" }}>
              Ferran Moreno
            </div>
            <div
              className="mt-[5px] text-[10px] uppercase tracking-[0.14em]"
              style={{ color: "var(--text-secondary)", opacity: 0.7 }}
            >
              TRABAJO CORPORAL · REGULACIÓN · ENERGÍA
            </div>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" style={{ color: "var(--text-secondary)" }}>
            <Link href="/#como-trabajo" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">
              Método
            </Link>
            <Link href="/#casos" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">
              Casos
            </Link>
            <Link href="/#para-quien" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">
              Para quién
            </Link>
            <Link href="/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">
              Wall of trust
            </Link>
            <Link href="/historia" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">
              Mi historia
            </Link>
            <Link href="/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">
              Blog
            </Link>
            <a
              href={contactWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50"
            >
              Contacto
            </a>
            <span style={{ color: "var(--border-subtle)" }}>|</span>
            <Link href="/en" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">
              EN
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[700px] px-6 py-24">
        <Link
          href="/blog"
          className="mb-12 inline-block text-[11px] uppercase tracking-[0.15em] transition hover:opacity-50"
          style={{ color: "var(--text-secondary)" }}
        >
          &larr; Blog
        </Link>

        <article>
          <span className="mb-4 block text-[10px] uppercase tracking-[0.15em]" style={{ color: "var(--text-secondary)" }}>
            Proceso
          </span>

          <h1 className="mb-10 text-3xl font-semibold tracking-tight leading-[1.15] lg:text-4xl">
            No hace falta estar en crisis para venir
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              La mayoría de personas llega cuando algo ya duele, se bloquea o no da más de sí. Tiene sentido. Cuando el cuerpo grita, por fin se le escucha.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y sí: también trabajo ahí. Una crisis importa. A veces hay que aliviar, devolver rango, bajar ruido y contener lo urgente.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Pero una crisis no es el único momento en el que este trabajo tiene sentido.
            </p>

            <p className="text-[15px] leading-relaxed">
              De hecho, muchas veces el trabajo más fino empieza cuando el sistema ya no está ocupado apagando un incendio. Cuando hay un poco más de margen. Cuando el cuerpo deja de sobrevivir lo justo y empieza a mostrar cómo está organizado de verdad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Si trabajamos solo cuando algo falla, casi siempre entramos en lógica de urgencia: dolor, sesión, alivio, vuelta a la vida, nuevo dolor.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ese modelo puede ayudar. Pero rara vez reorganiza el patrón que lleva años sosteniendo el problema.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Una sesión puede abrir algo. Un proceso permite reorganizar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando el sistema no está en alarma constante, se puede leer mejor qué compensa, qué protege, qué repite y qué necesita cambiar para no volver al mismo sitio.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso no hace falta esperar a una gran crisis para venir. A veces el mejor momento es justo antes de que el cuerpo tenga que volver a pedir ayuda a gritos.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              El objetivo no es vivir apagando incendios.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              El objetivo es que el sistema deje de vivir tan cerca de ellos.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="mb-6 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Si quieres ver si tu caso pide contención, proceso o simplemente una primera lectura clara, escríbeme.
            </p>
            <a
              href={contactWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] uppercase tracking-[0.15em] font-medium transition hover:opacity-50"
              style={{ color: "var(--text-main)" }}
            >
              Escríbeme &rarr;
            </a>
          </div>

          <RelatedArticles slug="no-hace-falta-estar-en-crisis-para-venir" lang="es" />
        </article>
      </main>
    </div>
  );
}
