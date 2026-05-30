import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "El cuerpo no necesita más control. Necesita seguridad",
  description: "La respuesta habitual al malestar corporal es intentar controlarlo.",
  alternates: getBlogAlternates("es", "el-cuerpo-necesita-seguridad-no-control"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="El cuerpo no necesita más control. Necesita seguridad"
        description="La respuesta habitual al malestar corporal es intentar controlarlo."
        slug="el-cuerpo-necesita-seguridad-no-control"
        date="2026-07-07"
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
            El cuerpo no necesita más control. Necesita seguridad
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              La respuesta habitual al malestar corporal es intentar controlarlo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Más disciplina.<br />
              Más ejercicio.<br />
              Más estiramientos.<br />
              Más información.<br />
              Más fuerza de voluntad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero un cuerpo en defensa no necesita más exigencia.
            </p>

            <p className="text-[15px] leading-relaxed">
              Necesita seguridad.
            </p>

            <p className="text-[15px] leading-relaxed">
              No seguridad intelectual. No convencerte de que estás bien.
            </p>

            <p className="text-[15px] leading-relaxed">
              Seguridad fisiológica.
            </p>

            <p className="text-[15px] leading-relaxed">
              Que el sistema nervioso reciba la señal de que puede dejar de prepararse para algo que no está ocurriendo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso cambia completamente el cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed">
              La respiración baja.<br />
              La musculatura suelta.<br />
              La postura se reorganiza.<br />
              El dolor disminuye.
            </p>

            <p className="text-[15px] leading-relaxed">
              No porque hayas hecho algo heroico.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque el sistema dejó de gastar energía defendiéndose.
            </p>

            <p className="text-[15px] leading-relaxed">
              La mayoría de intervenciones que buscan "controlar" el cuerpo desde fuera generan más tensión en un sistema que ya está sobrecargado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Más presión sobre un cuerpo que ya está presionado.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cambio profundo ocurre cuando dejas de luchar contra el cuerpo y empiezas a crear condiciones donde pueda dejar de luchar él solo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso no es pasividad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Es precisión.
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
          <RelatedArticles slug="el-cuerpo-necesita-seguridad-no-control" lang="es" />
        </article>
      </main>
    </div>
  );
}
