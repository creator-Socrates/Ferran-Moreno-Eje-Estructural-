import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Ansiedad sin causa aparente",
  description: "Lo has revisado todo.",
  alternates: {
    canonical: "/blog/ansiedad-sin-causa-aparente",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Ansiedad sin causa aparente"
        description="Lo has revisado todo."
        slug="ansiedad-sin-causa-aparente"
        date="2026-07-03"
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
            Ansiedad sin causa aparente
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              Lo has revisado todo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Analíticas. Tiroides. Psicólogo. Medicación.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y no hay causa clara.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero tu cuerpo sigue en alerta.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pecho cerrado.
Respiración corta.
Tensión de fondo.
Sensación de que algo va mal sin saber qué.
            </p>

            <p className="text-[15px] leading-relaxed">
              Muchas veces eso no es psicológico.
            </p>

            <p className="text-[15px] leading-relaxed">
              Es un sistema nervioso atrapado en activación.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo sigue preparado para una amenaza que ya no existe. Pero como la activación lleva tanto tiempo ahí, el sistema ya no sabe volver a bajar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y como no hay &ldquo;motivo&rdquo;, aparece la confusión:
            </p>

            <p className="text-[15px] leading-relaxed">
              &ldquo;Si no me pasa nada, ¿por qué me siento así?&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque el cuerpo no necesita un motivo actual para mantenerse en alerta.
            </p>

            <p className="text-[15px] leading-relaxed">
              Le basta con una activación antigua que nunca terminó de descargarse.
            </p>

            <p className="text-[15px] leading-relaxed">
              Una etapa de estrés intenso.
Un duelo.
Una relación difícil.
Años de presión laboral.
Un accidente que &ldquo;ya pasó.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              El evento terminó.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero el cuerpo nunca recibió la señal de que podía bajar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso la ansiedad sin causa aparente muchas veces no se resuelve pensando.
            </p>

            <p className="text-[15px] leading-relaxed">
              Se resuelve cuando el sistema nervioso finalmente completa el ciclo que dejó abierto.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y eso ocurre en el cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              No en la mente.
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
