import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "Tu sistema nervioso escucha todo",
  description: "Luz. Tono de voz. Velocidad. Tensión ambiental. Ritmo. Presión. Espacio. Temperatura.",
  alternates: getBlogAlternates("es", "tu-sistema-nervioso-escucha-todo"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Tu sistema nervioso escucha todo"
        description="Luz. Tono de voz. Velocidad. Tensión ambiental. Ritmo. Presión. Espacio. Temperatura."
        slug="tu-sistema-nervioso-escucha-todo"
        date="2026-10-16"
        tag="Manifiesto"
        lang="es"
      />
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
            <a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contacto</a>
            <span style={{ color: "var(--border-subtle)" }}>|</span>
            <Link href="/en" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">EN</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[700px] px-6 py-24">
        <Link href="/blog" className="text-[11px] uppercase tracking-[0.15em] mb-12 inline-block transition hover:opacity-50" style={{ color: "var(--text-secondary)" }}>
          &larr; Blog
        </Link>

        <article>
          <span className="text-[10px] uppercase tracking-[0.15em] mb-4 block" style={{ color: "var(--text-secondary)" }}>
            Manifiesto
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Tu sistema nervioso escucha todo
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Luz.<br />
              Tono de voz.<br />
              Velocidad.<br />
              Tensión ambiental.<br />
              Ritmo.<br />
              Presión.<br />
              Espacio.<br />
              Temperatura.
            </p>

            <p className="text-[15px] leading-relaxed">
              Tu cuerpo registra constantemente señales de seguridad o amenaza.
            </p>

            <p className="text-[15px] leading-relaxed">
              Mucho antes de que seas consciente de lo que está pasando.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso un espacio puede relajarte sin saber por qué. Y una persona puede tensarte antes de que abra la boca.
            </p>

            <p className="text-[15px] leading-relaxed">
              El sistema nervioso no espera a que pienses.
            </p>

            <p className="text-[15px] leading-relaxed">
              Lee el entorno y responde.
            </p>

            <p className="text-[15px] leading-relaxed">
              Todo el tiempo.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si algo de lo que has leído te resuena, escríbeme.
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
        </article>
      </main>
    </div>
  );
}
