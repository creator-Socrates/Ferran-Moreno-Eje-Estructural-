import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Compensar no es curar: por qué tu cuerpo sigue doliendo",
  description: "Tu cuerpo es brillante compensando. Eso no es un cumplido — es una advertencia. Cada compensación tiene un coste.",
  alternates: {
    canonical: "/blog/compensar-no-es-curar",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Compensar no es curar: por qué tu cuerpo sigue doliendo"
        description="Tu cuerpo es brillante compensando. Eso no es un cumplido — es una advertencia. Cada compensación tiene un coste."
        slug="compensar-no-es-curar"
        date="2026-07-03"
        tag="Compensación"
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
            Compensación
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Compensar no es curar
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Tu cuerpo es brillante compensando. Eso no es un cumplido — es una advertencia. Cada compensación tiene un coste. Y ese coste se acumula.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La cadena de compensaciones
            </h2>

            <p className="text-[15px] leading-relaxed">
              El tobillo compensa por el pie. La rodilla compensa por el tobillo. La cadera compensa por la rodilla. La espalda compensa por la cadera. El cuello compensa por la espalda.
            </p>

            <p className="text-[15px] leading-relaxed">
              Lo sientes en el cuello. Tratas el cuello. El patrón de compensación sigue intacto. Y el cuello vuelve a doler. Siempre vuelve. Porque nunca fue el problema — fue el último eslabón de una cadena que nadie miró entera.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El coste silencioso
            </h2>

            <p className="text-[15px] leading-relaxed">
              El cuerpo puede compensar durante décadas. Seguirá funcionando. Pero cada año, el rango se estrecha. La energía que necesita para mantener las compensaciones aumenta. La resiliencia disminuye. Te levantas más rígido. Te cansas antes. Necesitas más calentamiento. Recuperas peor.
            </p>

            <p className="text-[15px] leading-relaxed">
              No es la edad. Es la acumulación de compensaciones no resueltas que van consumiendo los márgenes del sistema. El cuerpo sigue funcionando, pero cada vez con menos margen de error.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La última gota
            </h2>

            <p className="text-[15px] leading-relaxed">
              Hasta que un día, algo pequeño — una mala noche, una semana de estrés, agacharte a recoger un zapato — rompe la baraja. La espalda se bloquea. La ciática aparece. El cuello se queda clavado. Y la persona dice: &quot;No hice nada diferente. No entiendo qué pasó.&quot;
            </p>

            <p className="text-[15px] leading-relaxed">
              Lo que pasó no fue ese gesto. Ese gesto fue la última gota en un sistema que llevaba años compensando más allá de su capacidad. La causa no es lo último que hiciste. La causa es todo lo que el cuerpo llevaba sosteniendo sin que nadie lo mirara.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La diferencia entre tratar y resolver
            </h2>

            <p className="text-[15px] leading-relaxed">
              Tratar el síntoma es necesario a veces. Si estás en crisis, hay que estabilizar. Pero si solo tratas el síntoma y nunca miras el patrón que lo produce, estás alimentando el ciclo. Más compensación, más coste, menos margen, más vulnerabilidad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Resolver es otra cosa. Resolver es mirar el sistema entero. Encontrar dónde empezó la cadena. Liberar la restricción primaria que sostiene todo el patrón. Cuando lo haces, el cuerpo deja de compensar. No porque le digas que pare, sino porque ya no necesita hacerlo.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Compensar es sobrevivir. Resolver es recuperar el orden que el cuerpo nunca dejó de buscar.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si sientes que tu cuerpo lleva años compensando y cada vez tiene menos margen, escríbeme. Miremos el patrón completo.
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

          <RelatedArticles slug="compensar-no-es-curar" lang="es" />
        </article>
      </main>
    </div>
  );
}
