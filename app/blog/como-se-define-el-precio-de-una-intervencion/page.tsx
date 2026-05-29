import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, siteUrl } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "Cómo se define el precio de una intervención | Ferran Moreno",
  description:
    "No todos los casos requieren el mismo nivel de lectura, preparación e intervención. Así se define el precio de una intervención.",
  alternates: getBlogAlternates("es", "como-se-define-el-precio-de-una-intervencion"),
  openGraph: {
    title: "Cómo se define el precio de una intervención",
    description:
      "No todos los casos requieren el mismo nivel de lectura, preparación e intervención. Así se define el precio de una intervención.",
    url: `${siteUrl}/blog/como-se-define-el-precio-de-una-intervencion`,
    siteName: "Ferran Moreno",
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo se define el precio de una intervención",
    description:
      "No todos los casos requieren el mismo nivel de lectura, preparación e intervención. Así se define el precio de una intervención.",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Cómo se define el precio de una intervención"
        description="No todos los casos requieren el mismo nivel de lectura, preparación e intervención. Así se define el precio de una intervención."
        slug="como-se-define-el-precio-de-una-intervencion"
        date="2026-05-27"
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
            Cómo se define el precio de una intervención
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Una sesión estándar tiene un precio base de 180 € por hora de trabajo. Pero no todos los casos requieren el mismo nivel de lectura, preparación e intervención.
            </p>

            <p className="text-[15px] leading-relaxed">
              Hay casos sencillos, donde el cuerpo responde rápido y el trabajo puede hacerse dentro de una sesión estándar. Y hay otros que requieren más lectura, más preparación, más investigación del origen y más energía para poder intervenir con precisión.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando una persona llega después de años de no encontrarse bien, de haber probado muchas cosas o de no conseguir remontar, no se trata simplemente de hacer una sesión.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Se trata de leer un sistema complejo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Hay que entender qué está sosteniendo el problema, qué compensaciones ha creado el cuerpo, dónde puede estar el origen y qué nivel de intervención puede generar un cambio real.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso, según el caso, una intervención puede ser de 180 €, 360 € o más.
            </p>

            <p className="text-[15px] leading-relaxed">
              El precio no lo fija una etiqueta. Lo fija el nivel de trabajo que requiere el caso.
            </p>

            <p className="text-[15px] leading-relaxed">
              Antes de empezar, te diré con claridad qué formato considero adecuado. Si encaja, trabajamos. Si no encaja, no pasa nada.
            </p>

            <p className="text-[15px] leading-relaxed">
              Lo que no hago es discutir el precio durante la sesión. Porque cuando el foco pasa a la negociación, el trabajo pierde precisión.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              No estoy negociando una hora.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Estoy definiendo el nivel de intervención que necesita tu caso.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Si el caso pide más, el precio también.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="mb-6 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Si quieres saber qué formato encaja con tu caso, escríbeme.
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

          <RelatedArticles slug="como-se-define-el-precio-de-una-intervencion" lang="es" />
        </article>
      </main>
    </div>
  );
}
