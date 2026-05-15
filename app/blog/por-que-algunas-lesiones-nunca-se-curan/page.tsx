import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Por qué algunas lesiones nunca terminan de curarse",
  description: "Hay lesiones que 'sanaron' hace años.",
  alternates: {
    canonical: "/blog/por-que-algunas-lesiones-nunca-se-curan",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Por qué algunas lesiones nunca terminan de curarse"
        description="Hay lesiones que 'sanaron' hace años."
        slug="por-que-algunas-lesiones-nunca-se-curan"
        date="2026-08-04"
        tag="Trabajo corporal"
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
            Trabajo corporal
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Por qué algunas lesiones nunca terminan de curarse
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Hay lesiones que "sanaron" hace años.
            </p>

            <p className="text-[15px] leading-relaxed">
              La resonancia sale bien.<br />
              El tejido cicatrizó.<br />
              La inflamación desapareció.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y aun así el cuerpo nunca volvió realmente a funcionar igual.
            </p>

            <p className="text-[15px] leading-relaxed">
              La rodilla sigue rara.<br />
              El tobillo nunca recuperó confianza.<br />
              La espalda se bloquea periódicamente.<br />
              El hombro sigue sintiéndose vulnerable.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso ocurre porque una cosa es que el tejido sane.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y otra muy distinta es que el patrón desaparezca.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cada lesión crea una reorganización automática del sistema.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo cambia:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>cómo distribuye el peso,</li>
              <li>cómo activa músculos,</li>
              <li>cómo respira,</li>
              <li>cómo estabiliza,</li>
              <li>cómo protege.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Es inteligencia biológica.
            </p>

            <p className="text-[15px] leading-relaxed">
              Si te lesionas un tobillo, el cuerpo redistribuye carga inmediatamente para seguir caminando. El problema es que muchas veces esa adaptación se queda activa mucho después de que el tejido ya haya cicatrizado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí aparece el patrón residual.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y ese patrón puede durar años.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo sigue funcionando como si la amenaza todavía existiera.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso muchas personas dicen:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              "No está roto… pero tampoco está bien."
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque el tejido sanó. Pero el sistema nunca volvió realmente a confiar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Entonces aparece algo muy típico:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>recaídas constantes,</li>
              <li>lesiones recurrentes,</li>
              <li>molestias migratorias,</li>
              <li>fatiga estructural,</li>
              <li>sensación de fragilidad.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              La persona sigue fortaleciendo, estirando, rehabilitando.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero todo ocurre encima de un patrón de protección que sigue activo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y mientras el patrón siga ahí, el cuerpo nunca termina de sentirse libre.
            </p>

            <p className="text-[15px] leading-relaxed">
              Muchas veces la verdadera recuperación empieza cuando el sistema deja de proteger una lesión que ya pasó.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí cambia el movimiento.<br />
              La respiración.<br />
              La estabilidad.<br />
              La sensación interna de seguridad.
            </p>

            <p className="text-[15px] leading-relaxed">
              No se trata solo de reparar tejido.
            </p>

            <p className="text-[15px] leading-relaxed">
              Se trata de reorganizar el patrón que la lesión dejó atrás.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque muchas lesiones no persisten por daño.
            </p>

            <p className="text-[15px] leading-relaxed">
              Persisten por memoria fisiológica.
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
