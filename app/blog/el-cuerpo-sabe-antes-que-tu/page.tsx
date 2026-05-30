import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "El cuerpo sabe antes que tú",
  description: "Muchas decisiones aparecen primero como sensación corporal antes de convertirse en pensamiento consciente.",
  alternates: getBlogAlternates("es", "el-cuerpo-sabe-antes-que-tu"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="El cuerpo sabe antes que tú"
        description="Muchas decisiones aparecen primero como sensación corporal antes de convertirse en pensamiento consciente."
        slug="el-cuerpo-sabe-antes-que-tu"
        date="2026-10-20"
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
            El cuerpo sabe antes que tú
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Muchas decisiones aparecen primero como sensación corporal antes de convertirse en pensamiento consciente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un nudo en el estómago antes de decir que sí a algo que no quieres. Una apertura en el pecho cuando algo encaja. Una contracción cuando alguien miente. Una ligereza cuando estás en el lugar correcto.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo lee antes que la mente.
            </p>

            <p className="text-[15px] leading-relaxed">
              El problema es que la mayoría de personas dejaron de escucharlo hace mucho tiempo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y cuando el cuerpo habla y nadie atiende, tiene que hablar más fuerte.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí aparecen el dolor, la ansiedad y la fatiga.
            </p>

            <p className="text-[15px] leading-relaxed">
              No como fallos.
            </p>

            <p className="text-[15px] leading-relaxed">
              Como volumen.
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
          <RelatedArticles slug="el-cuerpo-sabe-antes-que-tu" lang="es" />
        </article>
      </main>
    </div>
  );
}
