import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "La barista que lloró: cuando tu eje cambia lo que te rodea",
  description: "Cuando estás en tu eje, no fuerzas cambios. Emites coherencia. Y la coherencia se siente.",
  alternates: getBlogAlternates("es", "la-barista-que-lloro"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="La barista que lloró: cuando tu eje cambia lo que te rodea"
        description="Cuando estás en tu eje, no fuerzas cambios. Emites coherencia. Y la coherencia se siente."
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
            La barista que lloró: cuando tu eje cambia lo que te rodea
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Estaba con Alicia, profundamente enamorado. Fuimos a por un café para llevar. Mientras ella se giró a mirar algo, yo simplemente sonreí a la chica que nos atendía. Desde mi eje. Sin intención. Sin forzar nada. Solo estando ahí.
            </p>

            <p className="text-[15px] leading-relaxed">
              La barista se derrumbó. Empezó a llorar delante de nosotros.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Lo que vino después
            </h2>

            <p className="text-[15px] leading-relaxed">
              Unos días más tarde me escribió. Me dijo que esa energía — esa presencia sin palabras, sin agenda — le dio la fuerza para denunciar su matrimonio abusivo. Hubo un juicio rápido en tres días. Dejó el país y se fue a Canadá con su familia.
            </p>

            <p className="text-[15px] leading-relaxed">
              Yo no hice nada. No dije nada. No intervine. No le di un consejo. Le sonreí desde un lugar limpio. Eso fue todo.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El efecto espejo
            </h2>

            <p className="text-[15px] leading-relaxed">
              Esto es lo que llamo el efecto espejo. Cuando estás en tu eje, no fuerzas el cambio en otros. Emites coherencia. Y la coherencia se siente. No se explica, no se argumenta, no se vende. Se siente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Hay algo que cambia la conductividad y entonces la suavidad hace que no reaccionemos. No hay defensa. No hay máscara. Simplemente una frecuencia que resuena con algo que la otra persona ya sabía pero no podía activar sola.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              No necesitas hacer nada
            </h2>

            <p className="text-[15px] leading-relaxed">
              Simplemente por estar ahí tú, sin cambiar nada, sin decir nada, sin forzar nada, también te estás nutriendo a ti. Porque el eje no es una postura. Es un estado. Un lugar desde el que todo lo que emites es limpio. Y todo lo que recibes lo recibes sin filtro de supervivencia.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Tu presencia no es neutra. Cuando tu eje está organizado, tu campo se expande. Y lo que toca, lo transforma. No porque tú lo decidas. Porque la coherencia es contagiosa.
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