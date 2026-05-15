import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "La regulación no es relajación",
  description: "Hay una confusión muy extendida.",
  alternates: {
    canonical: "/blog/la-regulacion-no-es-relajacion",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="La regulación no es relajación"
        description="Hay una confusión muy extendida."
        slug="la-regulacion-no-es-relajacion"
        date="2026-07-17"
        tag="Sistema nervioso"
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
            Sistema nervioso
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            La regulación no es relajación
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Hay una confusión muy extendida.
            </p>

            <p className="text-[15px] leading-relaxed">
              Mucha gente cree que regular el sistema nervioso significa relajarse.
            </p>

            <p className="text-[15px] leading-relaxed">
              Música suave.<br />
              Respirar hondo.<br />
              Estar tranquilo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero regulación y relajación son cosas distintas.
            </p>

            <p className="text-[15px] leading-relaxed">
              Relajación es un estado pasivo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Regulación es capacidad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Capacidad de activarte cuando hace falta y volver a bajar cuando la situación termina.
            </p>

            <p className="text-[15px] leading-relaxed">
              Capacidad de transición.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un sistema nervioso regulado no está siempre tranquilo. Está disponible.
            </p>

            <p className="text-[15px] leading-relaxed">
              Puede responder con fuerza cuando es necesario. Puede recuperar calma después. Puede oscilar entre activación y descanso sin quedarse atrapado en ninguno de los dos.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso es regulación.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y es exactamente lo que pierden las personas que llevan años en activación constante.
            </p>

            <p className="text-[15px] leading-relaxed">
              No les falta capacidad de relajarse.
            </p>

            <p className="text-[15px] leading-relaxed">
              Les falta la flexibilidad del sistema para moverse entre estados.
            </p>

            <p className="text-[15px] leading-relaxed">
              Se quedan arriba.<br />
              Siempre preparados.<br />
              Siempre en guardia.<br />
              Siempre sosteniendo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y cuando intentan "relajarse", no pueden. Porque el sistema ya olvidó cómo bajar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso regular un sistema nervioso no consiste en forzar calma.
            </p>

            <p className="text-[15px] leading-relaxed">
              Consiste en devolver al cuerpo la capacidad de oscilar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí cambia todo.
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
