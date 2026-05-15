import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Lo que nadie te cuenta sobre la fascia",
  description: "La mayoría de personas habla de la fascia sin haber visto nunca fascia viva.",
  alternates: {
    canonical: "/blog/lo-que-nadie-te-cuenta-sobre-la-fascia",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Lo que nadie te cuenta sobre la fascia"
        description="La mayoría de personas habla de la fascia sin haber visto nunca fascia viva."
        slug="lo-que-nadie-te-cuenta-sobre-la-fascia"
        date="2026-07-24"
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
            Lo que nadie te cuenta sobre la fascia
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              La mayoría de personas habla de la fascia sin haber visto nunca fascia viva.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y eso importa más de lo que parece.
            </p>

            <p className="text-[15px] leading-relaxed">
              Durante décadas, la anatomía se estudió principalmente sobre cadáveres. Cuerpos conservados, secos, inmóviles. La fascia aparecía como una especie de tejido blanquecino que había que apartar para llegar a lo importante: músculos, huesos, órganos.
            </p>

            <p className="text-[15px] leading-relaxed">
              Así nació gran parte de la visión mecánica que todavía domina hoy.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero la fascia real no se parece a eso.
            </p>

            <p className="text-[15px] leading-relaxed">
              Jean-Claude Guimberteau, cirujano francés, mostró algo revolucionario cuando introdujo cámaras endoscópicas bajo tejido vivo durante cirugía. Lo que apareció no era una estructura seca y rígida. Era una red brillante, dinámica, líquida, reorganizándose constantemente.
            </p>

            <p className="text-[15px] leading-relaxed">
              La fascia está viva.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y cuando entiendes eso, cambia completamente la forma de trabajar con el cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ya no intentas &ldquo;romper adherencias&rdquo; como si estuvieras arreglando cuero viejo.
Ya no fuerzas tejido.
Ya no luchas contra el cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Empiezas a trabajar con algo que responde.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso explica por qué dos personas pueden recibir exactamente la misma técnica y reaccionar de forma completamente distinta. La fascia no es una estructura pasiva. Responde al estado del sistema nervioso, a la respiración, a la percepción de seguridad, a la hidratación, al estrés y al tono emocional.
            </p>

            <p className="text-[15px] leading-relaxed">
              Todo está conectado ahí.
            </p>

            <p className="text-[15px] leading-relaxed">
              Una pelvis rígida cambia la tensión fascial de toda la espalda.
Un diafragma bloqueado altera el cuello.
Una cicatriz abdominal reorganiza cadenas completas de movimiento.
            </p>

            <p className="text-[15px] leading-relaxed">
              La fascia transmite información constantemente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso muchas veces el cuerpo cambia más con precisión y escucha que con fuerza. Cuando el sistema siente seguridad, la fascia reorganiza tensión de una forma que no puedes conseguir imponiéndote.
            </p>

            <p className="text-[15px] leading-relaxed">
              La mayoría de modelos corporales siguen siendo demasiado mecánicos.
El cuerpo humano no funciona como una máquina hecha de piezas aisladas.
            </p>

            <p className="text-[15px] leading-relaxed">
              Funciona como una red viva de relaciones.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Y la fascia es una de las grandes razones de eso.
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
