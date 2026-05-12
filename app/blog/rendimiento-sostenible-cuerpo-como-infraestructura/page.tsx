import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Rendimiento sostenible: el cuerpo como infraestructura",
  description: "El rendimiento sostenible no es trabajar menos. Es que el cuerpo tenga capacidad de recuperarse de lo que le pides.",
  alternates: {
    canonical: "/blog/rendimiento-sostenible-cuerpo-como-infraestructura",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Rendimiento sostenible: el cuerpo como infraestructura"
        description="El rendimiento sostenible no es trabajar menos. Es que el cuerpo tenga capacidad de recuperarse de lo que le pides."
        slug="rendimiento-sostenible-cuerpo-como-infraestructura"
        date="2026-07-10"
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
            Rendimiento sostenible: el cuerpo como infraestructura
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Puedes forzar durante años. El cuerpo te lo permite. Hasta que deja de hacerlo. El rendimiento sostenible no es trabajar menos. Es que el cuerpo tenga la capacidad de recuperarse de lo que le pides.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Tres pilares del rendimiento real
            </h2>

            <p className="text-[15px] leading-relaxed">
              Esa capacidad depende de tres cosas. La primera es la organización estructural: postura, eficiencia de movimiento, cómo distribuye el cuerpo las fuerzas que recibe. Un cuerpo mal organizado gasta energía solo en mantenerse de pie.
            </p>

            <p className="text-[15px] leading-relaxed">
              La segunda es la regulación del sistema nervioso: la capacidad de transitar entre activación y recuperación. No estar siempre encendido. No estar siempre apagado. Poder ir de un estado a otro sin quedarse atrapado.
            </p>

            <p className="text-[15px] leading-relaxed">
              La tercera es la coherencia energética: que no haya conflictos internos drenando recursos. Tensiones emocionales no resueltas, patrones de contención que consumen energía sin que lo sepas, zonas del cuerpo que funcionan en contra del resto.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Cuando los tres se alinean
            </h2>

            <p className="text-[15px] leading-relaxed">
              Cuando los tres están alineados, puedes manejar más con menos esfuerzo. La recuperación es más rápida. La claridad mental se mantiene incluso bajo presión. El cuerpo no compite contigo, colabora.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando no lo están, cada día es una pelea contra tu propio sistema. Te levantas cansado. Necesitas café para arrancar y algo para frenar por la noche. Rindes, pero a un coste que se va acumulando. Y la factura siempre llega.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Esto no es bienestar. Es ingeniería
            </h2>

            <p className="text-[15px] leading-relaxed">
              No estamos hablando de wellness. No estamos hablando de autocuidado. Estamos hablando de ingeniería aplicada a la única máquina que no puedes reemplazar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un coche de competición necesita mantenimiento entre carreras. No porque sea frágil, sino porque rinde al máximo. El cuerpo humano bajo alta demanda funciona igual. No se trata de mimarlo. Se trata de mantenerlo operativo al nivel que necesitas.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Rendimiento sostenible no es un eslogan. Es lo que pasa cuando el cuerpo deja de ser un obstáculo y se convierte en tu mejor herramienta.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si rindes a un nivel alto y notas que el cuerpo ya no te acompaña como antes, escríbeme.
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
