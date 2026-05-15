import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Rolfing en Europa vs USA: dos escuelas, dos resultados | Ferran Moreno",
  description: "Dos linajes del mismo origen. El Rolfing europeo integró osteopatía francesa y Somatic Experiencing. El americano se mantuvo más fiel al original. Qué implica para ti.",
  alternates: {
    canonical: "/blog/rolfing-europa-vs-usa",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Rolfing en Europa vs USA: dos escuelas, dos resultados | Ferran Moreno"
        description="Dos linajes del mismo origen. El Rolfing europeo integró osteopatía francesa y Somatic Experiencing. El americano se mantuvo más fiel al original. Qué implica para ti."
        slug="rolfing-europa-vs-usa"
        date="2026-06-23"
        tag="Rolfing"
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
            <Link href="/#como-trabajo" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Método</Link>
            <Link href="/#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Casos</Link>
            <Link href="/#para-quien" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Para quién</Link>
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
            Rolfing
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Rolfing en Europa vs USA: dos escuelas, dos resultados
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              El Rolfing nació en Estados Unidos con Ida Rolf. Pero desde ahí se bifurcó en dos linajes muy diferentes. Si estás buscando un Rolfer, entender esta diferencia te puede ahorrar una mala experiencia.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La escuela americana: fiel al origen
            </h2>

            <p className="text-[15px] leading-relaxed">
              El Rolfing americano se mantuvo más cercano al trabajo original de Ida Rolf. Estructural, directo, a veces intenso hasta el punto de ser agresivo. Los primeros Rolfers trabajaban con codos, con presión sostenida, con la idea de que la fascia necesitaba ser &quot;reorganizada&quot; a la fuerza. Funcionaba, pero a un coste que no siempre era necesario.
            </p>

            <p className="text-[15px] leading-relaxed">
              Esa escuela produjo practicantes muy competentes. Pero también generó la fama de que el Rolfing duele. Porque en muchos casos, dolía.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La escuela europea: evolución e integración
            </h2>

            <p className="text-[15px] leading-relaxed">
              En Europa, el Rolfing tomó otro camino. La escuela de Munich integró muy pronto la osteopatía francesa de Jean Pierre Barral y Alain Croibier: manipulación visceral, trabajo neural, escucha tisular. Técnicas que permiten trabajar con una precisión quirúrgica sin necesidad de fuerza.
            </p>

            <p className="text-[15px] leading-relaxed">
              También incorporó Somatic Experiencing de Peter Levine, que aportó algo fundamental: la comprensión de que no puedes reorganizar un cuerpo sin tener en cuenta su sistema nervioso. Que si el sistema está en modo defensa, cualquier intervención estructural va a encontrar resistencia.
            </p>

            <p className="text-[15px] leading-relaxed">
              El resultado es un Rolfing más preciso, más sutil y más respetuoso con el ritmo del cuerpo. No más suave por ser débil. Más sutil porque es más inteligente.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              No se trata de mejor o peor
            </h2>

            <p className="text-[15px] leading-relaxed">
              No es que una escuela sea buena y la otra mala. Es que el campo evolucionó. Algunos practicantes evolucionaron con él. Otros se quedaron donde estaban. Eso pasa en todas las disciplinas.
            </p>

            <p className="text-[15px] leading-relaxed">
              Me formé en la escuela europea, en Munich. Después hice todos los cursos del Group of Munich con Barral, Croibier, Didier Prat y Peter Schwind. No fue una elección ideológica. Fue una elección práctica: quería las herramientas que dieran mejores resultados con el menor coste para el paciente.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Lo que importa no es la etiqueta. Lo que importa son los resultados. Y los resultados dependen de quién trabaja, cómo escucha y qué herramientas tiene.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si quieres saber cómo trabajo y qué puedes esperar de una sesión, escríbeme.
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

          <RelatedArticles slug="rolfing-europa-vs-usa" lang="es" />
        </article>
      </main>
    </div>
  );
}
