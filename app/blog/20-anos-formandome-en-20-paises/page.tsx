import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "20 años formándome en 20 países: qué aprendí | Ferran Moreno",
  description: "No es un currículum. Es lo que cada lugar me enseñó sobre el cuerpo, el movimiento y el trabajo manual en dos décadas de formación internacional.",
  alternates: {
    canonical: "/blog/20-anos-formandome-en-20-paises",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="20 años formándome en 20 países: qué aprendí | Ferran Moreno"
        description="No es un currículum. Es lo que cada lugar me enseñó sobre el cuerpo, el movimiento y el trabajo manual en dos décadas de formación internacional."
        slug="20-anos-formandome-en-20-paises"
        date="2026-06-16"
        tag="Formación"
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
            Formación
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            20 años formándome en 20 países: qué aprendí
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Esto no es un currículum. No me interesa listar diplomas. Lo que me interesa es contarte qué me enseñó cada lugar, cada maestro, cada error. Porque cada formación corrigió algo de la anterior. Y eso es lo que realmente construye un criterio.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Estructura, sutileza, silencio
            </h2>

            <p className="text-[15px] leading-relaxed">
              En Munich, en la European Rolfing School, aprendí estructura y precisión. A leer el cuerpo como un sistema de relaciones, no como una lista de músculos. Eso fue la base.
            </p>

            <p className="text-[15px] leading-relaxed">
              En París y Lyon, con Barral y Croibier, descubrí que los órganos se mueven y tiran de todo lo demás. Que una restricción visceral puede explicar un dolor de espalda que ningún traumatólogo encuentra. Eso cambió mi forma de escuchar al cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed">
              En Japón, con la acupuntura japonesa, aprendí que menos es más. Que antes de actuar hay que escuchar. Que la intervención mínima, en el punto exacto, genera más cambio que una hora de trabajo mecánico.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El cuerpo tiene su propia inteligencia
            </h2>

            <p className="text-[15px] leading-relaxed">
              En India, con el ayurveda, entendí que el cuerpo tiene su propia inteligencia. Que no siempre necesita que lo corrijas. A veces necesita que le quites lo que le sobra y dejes que se reorganice solo.
            </p>

            <p className="text-[15px] leading-relaxed">
              En México aprendí que la sanación no tiene por qué ser suave para ser respetuosa. Que hay tradiciones donde la intensidad es parte del proceso, no una falta de cuidado.
            </p>

            <p className="text-[15px] leading-relaxed">
              En Tailandia vi el movimiento como medicina. No el ejercicio. El movimiento. La diferencia es enorme.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El trauma vive en el cuerpo
            </h2>

            <p className="text-[15px] leading-relaxed">
              En Estados Unidos, con Somatic Experiencing de Peter Levine, aprendí algo que lo cambió todo: que el trauma vive en el cuerpo, no en la historia. Que puedes hablar de algo durante años en terapia y seguir atrapado, porque la carga no está en el relato. Está en el sistema nervioso, en la fascia, en los patrones de tensión que el cuerpo guarda mucho después de que la mente haya &quot;entendido&quot;.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              No busco la técnica. Busco lo que este cuerpo necesita.
            </h2>

            <p className="text-[15px] leading-relaxed">
              Cada maestro corrigió algo del anterior. No porque estuvieran equivocados, sino porque cada uno veía una parte. El resultado de veinte años buscando no es un método. Es una caja de herramientas construida paso a paso, país a país, cuerpo a cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Dejé de buscar LA técnica y empecé a buscar lo que ESTE cuerpo necesita. Esa es la diferencia entre acumular diplomas y saber trabajar.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si buscas a alguien que trabaje desde la experiencia y no desde el protocolo, escríbeme.
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

          <RelatedArticles slug="20-anos-formandome-en-20-paises" lang="es" />
        </article>
      </main>
    </div>
  );
}
