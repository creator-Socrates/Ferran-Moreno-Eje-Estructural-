import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "Una sonrisa que cambió una vida",
  description: "A veces el impacto más profundo no requiere hacer algo. Solo estar en tu sitio.",
  alternates: getBlogAlternates("es", "la-barista-que-lloro"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Una sonrisa que cambió una vida"
        description="A veces el impacto más profundo no requiere hacer algo. Solo estar en tu sitio."
        slug="la-barista-que-lloro"
        date="2026-09-29"
        tag="Energía"
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
            Energía
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Una sonrisa que cambió una vida
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Acababa de conocer a Alicia y yo estaba brillando como nunca había brillado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Fuimos a tomar un café a un sitio al que yo iba mucho.
            </p>

            <p className="text-[15px] leading-relaxed">
              En un momento, Alicia se giró para mirar fuera. Yo pedí el café y sonreí a la barista, que ya me conocía de verme siempre por allí.
            </p>

            <p className="text-[15px] leading-relaxed">
              La miré y le sonreí.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y, de repente, empezó a llorar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Vi lo que estaba pasando, su cuerpo se estaba regulando y le pregunté si quería salir un momento fuera.
            </p>

            <p className="text-[15px] leading-relaxed">
              Le dije: “Mira, esto que te pasa es normal. Yo trabajo con el cuerpo y la energía, y algo se ha movido en ti.”
            </p>

            <p className="text-[15px] leading-relaxed">
              Alicia no entendía nada. Solo me preguntaba: “¿Pero qué le has dicho?” Una y otra vez.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque apenas había apartado la vista unos segundos y, cuando volvió, aquella mujer estaba completamente desbordada.
            </p>

            <p className="text-[15px] leading-relaxed">
              Le propuse venir a la consulta y ayudarla. Le dije que la invitaba a una sesión si le apetecía. Pero nunca vino.
            </p>

            <p className="text-[15px] leading-relaxed">
              Unas semanas después me escribió.
            </p>

            <p className="text-[15px] leading-relaxed">
              Llevaba años en un matrimonio abusivo. No se atrevía a denunciar. Y algo en aquella sonrisa le hizo darse cuenta de hasta qué punto necesitaba salir de ahí.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ese mismo día fue al juzgado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Hubo un juicio rápido. Y poco después me escribió otra vez para contarme que se mudaba a Canadá con su familia para empezar de nuevo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Yo no hice nada “terapéutico”. No usé ninguna técnica.
            </p>

            <p className="text-[15px] leading-relaxed">
              Solo estaba en un estado de apertura y presencia tan grande que, al sonreír, algo llegó donde tenía que llegar.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              A veces el impacto más profundo no requiere hacer algo. Solo estar en tu sitio.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si sientes que hay algo en ti que quiere reorganizarse pero no encuentras el espacio, escríbeme.
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

          <RelatedArticles slug="la-barista-que-lloro" lang="es" />
        </article>
      </main>
    </div>
  );
}