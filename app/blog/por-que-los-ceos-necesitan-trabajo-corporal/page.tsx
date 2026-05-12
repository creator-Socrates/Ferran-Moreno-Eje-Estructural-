import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Por qué los CEOs necesitan trabajo corporal",
  description: "Los ejecutivos optimizan todo menos el cuerpo. Y el cuerpo es la infraestructura que sostiene todo lo demás.",
  alternates: {
    canonical: "/blog/por-que-los-ceos-necesitan-trabajo-corporal",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Por qué los CEOs necesitan trabajo corporal"
        description="Los ejecutivos optimizan todo menos el cuerpo. Y el cuerpo es la infraestructura que sostiene todo lo demás."
        slug="por-que-los-ceos-necesitan-trabajo-corporal"
        date="2026-07-07"
        tag="Alto rendimiento"
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
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[700px] px-6 py-24">
        <Link href="/blog" className="text-[11px] uppercase tracking-[0.15em] mb-12 inline-block transition hover:opacity-50" style={{ color: "var(--text-secondary)" }}>
          &larr; Blog
        </Link>

        <article>
          <span className="text-[10px] uppercase tracking-[0.15em] mb-4 block" style={{ color: "var(--text-secondary)" }}>
            Alto rendimiento
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Por qué los CEOs necesitan trabajo corporal
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Los ejecutivos de alto rendimiento optimizan todo: agenda, equipo, estrategia, sueño, nutrición. Pero casi nadie optimiza el cuerpo como infraestructura. Y el cuerpo es el hardware que ejecuta todo lo demás.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El cuerpo es la infraestructura
            </h2>

            <p className="text-[15px] leading-relaxed">
              Cuando el cuerpo está desorganizado, la toma de decisiones se degrada. La gestión de energía falla. El estrés se acumula sin descarga. El semáforo pasa a naranja y se queda ahí.
            </p>

            <p className="text-[15px] leading-relaxed">
              Desde naranja se puede seguir rindiendo. Pero el coste es enorme: decisiones reactivas, paciencia acortada, sueño de mala calidad, tensión crónica disfrazada de &quot;yo soy así&quot;. El cuerpo no se queja porque no sabe hacerlo de otra forma. Simplemente limita tu capacidad sin avisarte.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              No es un lujo. Es mantenimiento
            </h2>

            <p className="text-[15px] leading-relaxed">
              Trabajo con ejecutivos, emprendedores y profesionales bajo alta presión. No como un lujo ni como autocuidado cosmético. Como mantenimiento de la máquina que sostiene todo lo demás.
            </p>

            <p className="text-[15px] leading-relaxed">
              No se trata de relajarse. Se trata de que el sistema nervioso pueda transitar entre activación y recuperación de forma eficiente. De que la estructura corporal no esté generando fricción innecesaria. De que la energía disponible se use para producir, no para compensar.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Quién viene a trabajar conmigo
            </h2>

            <p className="text-[15px] leading-relaxed">
              Quim Clark, CEO de MQ Events. Madeleine Cooke, coaching para líderes. Neus Ribes, Banco Sabadell. Estas personas no vinieron buscando relajación. Vinieron porque su cuerpo estaba limitando su capacidad.
            </p>

            <p className="text-[15px] leading-relaxed">
              El patrón es siempre el mismo: gente que rinde a un nivel muy alto, que gestiona presión constante, y que en algún momento nota que el cuerpo ya no responde igual. Que la recuperación tarda más. Que la claridad mental no está donde solía estar. Que el cuerpo se ha convertido en un obstáculo en lugar de un aliado.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Optimizar lo que nadie optimiza
            </h2>

            <p className="text-[15px] leading-relaxed">
              Puedes tener el mejor equipo, la mejor estrategia, la mejor agenda. Si el hardware falla, el software no puede ejecutar. El cuerpo no es un accesorio del rendimiento. Es su condición de posibilidad.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Optimizar el cuerpo no es lo que haces cuando ya te has ocupado de todo. Es lo que hace que todo lo demás funcione mejor.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si lideras un equipo, una empresa o un proyecto de alta presión y notas que el cuerpo ya no acompaña, escríbeme.
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
