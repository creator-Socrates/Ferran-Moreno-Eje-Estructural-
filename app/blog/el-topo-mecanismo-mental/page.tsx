import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "El topo: el mecanismo mental que bloquea tu cuerpo — Ferran Moreno",
  description: "Tu mente analiza antes de recibir. Juzga antes de sentir. Ese mecanismo se llama el topo, y es el mayor obstáculo para el cambio corporal.",
  alternates: getBlogAlternates("es", "el-topo-mecanismo-mental"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="El topo: el mecanismo mental que bloquea tu cuerpo — Ferran Moreno"
        description="Tu mente analiza antes de recibir. Juzga antes de sentir. Ese mecanismo se llama el topo, y es el mayor obstáculo para el cambio corporal."
        slug="el-topo-mecanismo-mental"
        date="2026-06-05"
        tag="Proceso"
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
            Proceso
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            El topo: el mecanismo mental que bloquea tu cuerpo
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Will Chung lo llamaba &ldquo;el topo.&rdquo; Ese mecanismo de la mente que aparece justo cuando el cuerpo está a punto de tener una experiencia genuina. Analiza antes de recibir. Juzga antes de sentir. Dice: &ldquo;espera, déjame entender esto primero.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              Y en ese momento, la experiencia se pierde.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              No puedes sentir y analizar al mismo tiempo
            </h2>

            <p className="text-[15px] leading-relaxed">
              Son circuitos diferentes. Cuando uno se activa, el otro se apaga. La percepción sensorial directa y el análisis cognitivo compiten por los mismos recursos. Si tu mente está ocupada intentando entender lo que pasa, tu cuerpo no puede procesar lo que está recibiendo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Rubén Torres, galerista en Barcelona, lo expresó así:
            </p>

            <blockquote className="border-l-2 pl-6 my-6 text-[15px] leading-relaxed" style={{ borderColor: "var(--text-secondary)", color: "var(--text-secondary)" }}>
              &ldquo;Para definir las sesiones y los resultados que se consiguen con Ferran se deberían crear nuevos términos. No sé muy bien lo que hace, pero funciona. Incluso siendo una persona muy racional, los resultados aparecen tanto a nivel físico como emocional. Muy recomendable en caso de bloqueos físicos, emocionales o laborales.&rdquo;
              <span className="block mt-2 text-[13px]">— Rubén Torres, Galerista, Barcelona</span>
            </blockquote>

            <p className="text-[15px] leading-relaxed">
              &ldquo;Incluso siendo una persona muy racional.&rdquo; Ahí está. El topo estaba ahí, pero Rubén dejó que se sentara. No lo suprimió. Simplemente no le dio el micrófono.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El topo no es el enemigo
            </h2>

            <p className="text-[15px] leading-relaxed">
              Es una estrategia de supervivencia. El sistema nervioso desarrolló esa capacidad de análisis rápido para protegerte. En un entorno de peligro, analizar antes de actuar te salva la vida. Pero en trabajo corporal, ese mismo mecanismo se convierte en el mayor obstáculo para el cambio.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ester Subirà, profesora en Lluçà, lo vivió desde el otro lado:
            </p>

            <blockquote className="border-l-2 pl-6 my-6 text-[15px] leading-relaxed" style={{ borderColor: "var(--text-secondary)", color: "var(--text-secondary)" }}>
              &ldquo;No puedo explicar exactamente qué hace Ferran, pero después de sus sesiones mi cuerpo y mi mente se sienten completamente diferentes.&rdquo;
              <span className="block mt-2 text-[13px]">— Ester Subirà, Profesora, Lluçà (Barcelona)</span>
            </blockquote>

            <p className="text-[15px] leading-relaxed">
              No necesitó explicarlo para recibirlo. Esa es la clave.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Quién cambia más rápido
            </h2>

            <p className="text-[15px] leading-relaxed">
              Las personas que cambian más rápido no son las más inteligentes. Son las que aprenden a dejar que el topo se siente. No suprimirlo, que eso es otra forma de control. Simplemente no darle el micrófono cada vez que aparece.
            </p>

            <p className="text-[15px] leading-relaxed">
              No es fácil. Toda nuestra cultura premia la comprensión intelectual. &ldquo;Si lo entiendo, lo controlo. Si lo controlo, estoy seguro.&rdquo; Pero el cuerpo no funciona así. El cuerpo cambia a través de la experiencia, no del análisis.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              La próxima vez que tu mente quiera entender antes de sentir, observa ese impulso. Ese es el topo. Y lo único que necesita es que no le des el escenario entero.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si reconoces este patrón en ti, escríbeme. Es más común de lo que piensas, y es completamente abordable.
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

          <RelatedArticles slug="el-topo-mecanismo-mental" lang="es" />
        </article>
      </main>
    </div>
  );
}
