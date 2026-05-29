import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "Qué esperar en tu primera sesión de trabajo corporal",
  description: "Tu primera sesión no sigue un protocolo. Cada cuerpo pide algo distinto. Esto es lo que ocurre cuando vienes por primera vez.",
  alternates: getBlogAlternates("es", "que-esperar-en-tu-primera-sesion"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Qué esperar en tu primera sesión de trabajo corporal"
        description="Tu primera sesión no sigue un protocolo. Cada cuerpo pide algo distinto. Esto es lo que ocurre cuando vienes por primera vez."
        slug="que-esperar-en-tu-primera-sesion"
        date="2026-05-15"
        tag="Primera sesión"
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
            Primera sesión
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Qué esperar en tu primera sesión de trabajo corporal
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              No sabes qué va a pasar. Es normal. La mayoría de personas que vienen por primera vez no tienen referencia de lo que es esto. No es un masaje. No es fisioterapia. No es osteopatía. Es otra cosa. Y lo que más descoloca es que no hay un guion fijo.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Primero leo tu cuerpo
            </h2>

            <p className="text-[15px] leading-relaxed">
              Antes de poner las manos, observo. Miro cómo está organizada tu estructura: qué compensa qué, dónde hay restricción, dónde hay exceso de tono, dónde el cuerpo está sosteniendo algo que ya no necesita. Eso me da un mapa. No un diagnóstico &mdash; un punto de entrada.
            </p>

            <p className="text-[15px] leading-relaxed">
              La pregunta nunca es &ldquo;qué te duele&rdquo; como punto final. La pregunta es: ¿cómo está organizado este cuerpo? ¿Qué está pidiendo?
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              No hay protocolo
            </h2>

            <p className="text-[15px] leading-relaxed">
              No sigo una receta. Cada sesión es única porque cada cuerpo es único y cada momento es distinto. Puedo empezar por los pies, por el cráneo, por las vísceras o por el sistema nervioso. Depende de lo que encuentro. Depende de lo que tu sistema permite ese día.
            </p>

            <p className="text-[15px] leading-relaxed">
              Esto desorienta a quien está acostumbrado a protocolos. Pero es precisamente lo que hace que funcione. No aplico una técnica sobre ti. Trabajo con lo que tu cuerpo presenta.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Lo que se siente después
            </h2>

            <p className="text-[15px] leading-relaxed">
              La mayoría de personas se levantan de la camilla y sienten algo diferente. Más alto. Más ligero. Más presente. Algunos dicen que es como si les hubieran quitado peso de encima. Otros notan que respiran de una forma que no recordaban.
            </p>

            <p className="text-[15px] leading-relaxed">
              No siempre es espectacular. A veces el cambio es sutil y se despliega en los días siguientes. Pero casi siempre hay un momento en la sesión en que el cuerpo cambia de estado. Y eso se nota.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La pregunta real
            </h2>

            <p className="text-[15px] leading-relaxed">
              La pregunta que trae la mayoría de personas es &ldquo;¿qué me vas a hacer?&rdquo;. La pregunta real es otra: ¿qué está pidiendo mi cuerpo? Esa es la que guía la sesión. Y la respuesta no la tengo yo antes de empezar. La tiene tu cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              La mayoría de personas saben en los primeros minutos que esto es diferente. No porque sea raro. Porque es preciso.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si quieres saber si esto es para ti, escríbeme. Sin compromiso, sin presión.
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

          <RelatedArticles slug="que-esperar-en-tu-primera-sesion" lang="es" />
        </article>
      </main>
    </div>
  );
}
