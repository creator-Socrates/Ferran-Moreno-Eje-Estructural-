import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Cuando entendí que la técnica me limitaba",
  description: "Pasé más de veinte años formándome.",
  alternates: {
    canonical: "/blog/cuando-entendi-que-la-tecnica-me-limitaba",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Cuando entendí que la técnica me limitaba"
        description="Pasé más de veinte años formándome."
        slug="cuando-entendi-que-la-tecnica-me-limitaba"
        date="2026-09-11"
        tag="Mi historia"
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
            Mi historia
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Cuando entendí que la técnica me limitaba
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Pasé más de veinte años formándome.
            </p>

            <p className="text-[15px] leading-relaxed">
              Rolfing.<br />
              Osteopatía visceral.<br />
              Acupuntura.<br />
              Trabajo fascial.<br />
              Sistema nervioso.<br />
              Energía.<br />
              Movimiento.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y durante mucho tiempo pensé que la evolución consistía en acumular más herramientas.
            </p>

            <p className="text-[15px] leading-relaxed">
              Más técnicas.<br />
              Más precisión.<br />
              Más conocimiento.
            </p>

            <p className="text-[15px] leading-relaxed">
              Hasta que ocurrió algo inesperado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Empecé a sentir fricción.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cada vez que entraba en sesión aparecía una sensación interna:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              "Tengo que hacer algo."
            </p>

            <p className="text-[15px] leading-relaxed">
              Tengo que corregir.<br />
              Tengo que liberar.<br />
              Tengo que producir un resultado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y me di cuenta de algo importante: la técnica estaba empezando a interferir en mi capacidad de escuchar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque cada técnica crea un marco.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y todo marco, si no tienes cuidado, termina convirtiéndose en una jaula perceptiva.
            </p>

            <p className="text-[15px] leading-relaxed">
              Empiezas a ver el cuerpo a través de la técnica en lugar de escuchar lo que el sistema realmente necesita.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso fue un cambio enorme para mí.
            </p>

            <p className="text-[15px] leading-relaxed">
              Dejé de intentar imponer soluciones.
            </p>

            <p className="text-[15px] leading-relaxed">
              Empecé a observar más.
            </p>

            <p className="text-[15px] leading-relaxed">
              A escuchar más.<br />
              A intervenir menos.<br />
              A confiar más en la inteligencia organizativa del cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y cuanto menos intentaba controlar el proceso, mejores resultados aparecían.
            </p>

            <p className="text-[15px] leading-relaxed">
              No porque la técnica no sirva.
            </p>

            <p className="text-[15px] leading-relaxed">
              Sirve muchísimo.
            </p>

            <p className="text-[15px] leading-relaxed">
              La formación me dio estructura, percepción y herramientas extraordinarias.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero llegó un punto donde entendí algo: la técnica no puede estar por encima del cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo real siempre es más complejo que cualquier método.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso hoy muchas veces la sesión empieza simplemente observando:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>cómo respira alguien,</li>
              <li>cómo entra,</li>
              <li>cómo se mueve,</li>
              <li>dónde el cuerpo sostiene,</li>
              <li>qué intenta proteger.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Y desde ahí aparecen las soluciones.
            </p>

            <p className="text-[15px] leading-relaxed">
              No desde un protocolo. No desde una agenda previa.
            </p>

            <p className="text-[15px] leading-relaxed">
              Desde la relación real con lo que el sistema presenta.
            </p>

            <p className="text-[15px] leading-relaxed">
              Después de veinte años, quizás la lección más importante fue esta: el cuerpo no necesita que alguien le imponga orden.
            </p>

            <p className="text-[15px] leading-relaxed">
              Necesita condiciones para reorganizarse.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y muchas veces la mejor intervención es dejar de estorbar.
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
        </article>
      </main>
    </div>
  );
}
