import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Lo que aprendí tocando miles de cuerpos",
  description: "Después de miles de sesiones, empiezas a ver patrones.",
  alternates: {
    canonical: "/blog/lo-que-aprendi-tocando-miles-de-cuerpos",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Lo que aprendí tocando miles de cuerpos"
        description="Después de miles de sesiones, empiezas a ver patrones."
        slug="lo-que-aprendi-tocando-miles-de-cuerpos"
        date="2026-09-08"
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
            Lo que aprendí tocando miles de cuerpos
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Después de miles de sesiones, empiezas a ver patrones.
            </p>

            <p className="text-[15px] leading-relaxed">
              No porque todos los cuerpos sean iguales.
            </p>

            <p className="text-[15px] leading-relaxed">
              Precisamente porque ninguno lo es.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cada persona llega con una historia distinta:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>lesiones,</li>
              <li>estrés,</li>
              <li>cirugías,</li>
              <li>pérdidas,</li>
              <li>compensaciones,</li>
              <li>formas diferentes de sostener la vida dentro del cuerpo.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Y aun así, después de tocar miles de cuerpos, hay cosas que se repiten constantemente.
            </p>

            <p className="text-[15px] leading-relaxed">
              La primera: el cuerpo siempre está intentando ayudarte.
            </p>

            <p className="text-[15px] leading-relaxed">
              Incluso cuando duele.<br />
              Incluso cuando se bloquea.<br />
              Incluso cuando colapsa.
            </p>

            <p className="text-[15px] leading-relaxed">
              Muchas veces el síntoma no es el problema. Es el intento del sistema de seguir funcionando bajo demasiada carga.
            </p>

            <p className="text-[15px] leading-relaxed">
              La segunda: el cuerpo nunca miente.
            </p>

            <p className="text-[15px] leading-relaxed">
              La mente puede justificar, racionalizar o negar. El cuerpo no.
            </p>

            <p className="text-[15px] leading-relaxed">
              La respiración, la postura, el tono muscular y la tensión cuentan una historia mucho antes de que la persona la explique.
            </p>

            <p className="text-[15px] leading-relaxed">
              Muchas veces el cuerpo ya mostró todo en los primeros treinta segundos.
            </p>

            <p className="text-[15px] leading-relaxed">
              La tercera: la mayoría de personas vive muchísimo más desconectada de su cuerpo de lo que imagina.
            </p>

            <p className="text-[15px] leading-relaxed">
              No sienten hambre hasta que están vacíos.<br />
              No sienten cansancio hasta que colapsan.<br />
              No sienten tensión hasta que aparece dolor.
            </p>

            <p className="text-[15px] leading-relaxed">
              Han aprendido a ignorar señales durante tanto tiempo que el cuerpo termina teniendo que hablar más fuerte.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí aparecen:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>ansiedad,</li>
              <li>fatiga,</li>
              <li>dolor,</li>
              <li>insomnio,</li>
              <li>inflamación,</li>
              <li>sensación de no poder más.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              No porque el cuerpo esté en contra. Porque llevaba años intentando avisar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Otra cosa que aprendí: la seguridad cambia el cuerpo muchísimo más rápido que la fuerza.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando el sistema deja de defenderse:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>la respiración cambia,</li>
              <li>el tejido cambia,</li>
              <li>la postura cambia,</li>
              <li>el dolor cambia.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Mucho más rápido de lo que la mayoría cree posible.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y quizás la más importante: la gente no necesita perfección fisiológica para sentirse bien.
            </p>

            <p className="text-[15px] leading-relaxed">
              Necesita margen.
            </p>

            <p className="text-[15px] leading-relaxed">
              Necesita espacio interno. Necesita sentir que el cuerpo ya no está luchando constantemente para sostenerse.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí aparece algo muy distinto: presencia.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo deja de ser ruido de fondo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y vuelve a convertirse en un lugar habitable.
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
