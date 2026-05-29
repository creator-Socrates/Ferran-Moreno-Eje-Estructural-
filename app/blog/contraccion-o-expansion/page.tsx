import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "Contracción o expansión: la única pregunta que necesitas",
  description: "Tu cuerpo sabe antes que tu mente. La contracción y la expansión son la brújula más fiable que tienes para tomar decisiones.",
  alternates: getBlogAlternates("es", "contraccion-o-expansion"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Contracción o expansión: la única pregunta que necesitas"
        description="Tu cuerpo sabe antes que tu mente. La contracción y la expansión son la brújula más fiable que tienes para tomar decisiones."
        slug="contraccion-o-expansion"
        date="2026-09-08"
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
            Proceso
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Contracción o expansión: la única pregunta que necesitas
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Vamos a usar tu cuerpo para saber si las cosas son verdad o no para ti. En función de si sientes que te contraes o que te expandes.
            </p>

            <p className="text-[15px] leading-relaxed">
              Así de simple. Así de binario. Y así de fiable.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La señal más limpia que tienes
            </h2>

            <p className="text-[15px] leading-relaxed">
              El cuerpo se contrae cuando algo no está alineado contigo. Se cierra, se tensa, se encoge. No necesita explicarte por qué. No necesita argumentos. Simplemente reacciona.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y se expande cuando algo sí está alineado. Hay apertura, hay espacio, hay una sensación de que el aire entra más fácil. Tampoco necesita justificación. Es una señal binaria: sí o no. Contracción o expansión.
            </p>

            <p className="text-[15px] leading-relaxed">
              No hace falta interpretar nada. No hace falta analizar. Solo sentir.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Cuando aparece el miedo
            </h2>

            <p className="text-[15px] leading-relaxed">
              Si aparece el miedo, no puedes tomar la decisión. El miedo contamina la señal. Cuando estás en miedo, todo se contrae, incluso lo que te conviene. El sistema nervioso entra en protección y ya no puedes distinguir entre una contracción real y una contracción defensiva.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando aparece la duda, te está diciendo que estás usando el patrón antiguo. La duda no es señal de que necesites más información. Es señal de que tu mente está intentando retomar el control.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La mente es la interferencia
            </h2>

            <p className="text-[15px] leading-relaxed">
              La mente es la que está empujando. Siempre. Quiere entender, justificar, comparar, proyectar. Y mientras hace todo eso, tapa la única señal que importa: la del cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed">
              No digo que la mente no sirva. Sirve para ejecutar, para planificar, para organizar. Pero no sirve para decidir. Las decisiones importantes no se piensan. Se sienten.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La práctica
            </h2>

            <p className="text-[15px] leading-relaxed">
              Antes de cualquier decisión, para. Respira. Lleva la atención al cuerpo. Y pregúntate: ¿me contraigo o me expando?
            </p>

            <p className="text-[15px] leading-relaxed">
              No le preguntes a tu cabeza. No busques pros y contras. No pidas opinión. Solo observa qué hace tu cuerpo cuando piensas en esa opción.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Esa es la única brújula que necesitas. Y lleva funcionando mucho antes de que aprendieras a pensar.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si quieres aprender a escuchar esa señal con claridad, puedo ayudarte a limpiar lo que la tapa.
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

          <RelatedArticles slug="contraccion-o-expansion" lang="es" />
        </article>
      </main>
    </div>
  );
}
