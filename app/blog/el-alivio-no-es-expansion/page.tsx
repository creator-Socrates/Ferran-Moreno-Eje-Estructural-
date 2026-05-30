import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "El alivio no es expansión",
  description: "Muchas personas viven oscilando entre crisis y alivio.",
  alternates: getBlogAlternates("es", "el-alivio-no-es-expansion"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="El alivio no es expansión"
        description="Muchas personas viven oscilando entre crisis y alivio."
        slug="el-alivio-no-es-expansion"
        date="2026-07-14"
        tag="Sistema nervioso"
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
            Sistema nervioso
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            El alivio no es expansión
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Muchas personas viven oscilando entre crisis y alivio.
            </p>

            <p className="text-[15px] leading-relaxed">
              Tensión.<br />
              Sesión.<br />
              Alivio.<br />
              Tensión otra vez.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y lo confunden con progreso.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero sentirse menos mal no es lo mismo que estar bien.
            </p>

            <p className="text-[15px] leading-relaxed">
              El alivio es la ausencia temporal del síntoma. La expansión es otra cosa.
            </p>

            <p className="text-[15px] leading-relaxed">
              Expansión significa que el cuerpo ganó espacio.<br />
              Más respiración.<br />
              Más margen.<br />
              Más capacidad de respuesta.<br />
              Más energía disponible.
            </p>

            <p className="text-[15px] leading-relaxed">
              No que volvió al punto de partida.
            </p>

            <p className="text-[15px] leading-relaxed">
              Que se movió a un lugar nuevo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Esa diferencia lo cambia todo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque el alivio es dependiente. Necesita repetirse constantemente porque el patrón sigue intacto.
            </p>

            <p className="text-[15px] leading-relaxed">
              La expansión es acumulativa. El cuerpo integra el cambio y deja de necesitar volver al mismo punto.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso hay personas que llevan años en tratamiento y siguen igual.
            </p>

            <p className="text-[15px] leading-relaxed">
              No porque el tratamiento sea malo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque trabajan en el ciclo crisis-alivio en lugar de trabajar en reorganización real.
            </p>

            <p className="text-[15px] leading-relaxed">
              El objetivo no es sentirse menos mal.
            </p>

            <p className="text-[15px] leading-relaxed">
              Es que el cuerpo deje de generar el patrón que produce el malestar.
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
          <RelatedArticles slug="el-alivio-no-es-expansion" lang="es" />
        </article>
      </main>
    </div>
  );
}
