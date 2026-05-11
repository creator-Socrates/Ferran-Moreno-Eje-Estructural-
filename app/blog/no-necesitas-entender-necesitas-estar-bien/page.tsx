import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail } from "@/lib/content";

export const metadata: Metadata = {
  title: "No necesitas entender. Necesitas estar bien",
  description: "La mente quiere explicaciónes. El cuerpo quiere experiencia. Vols estar be o vols entendre-ho?",
  alternates: {
    canonical: "/blog/no-necesitas-entender-necesitas-estar-bien",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <header className="sticky top-0 z-30" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-5">
          <Link href="/" className="leading-none">
            <div className="text-[17px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-main)" }}>Ferran Moreno</div>
            <div className="mt-[5px] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              TRABAJO CORPORAL · REGULACION · ENERGIA
            </div>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" style={{ color: "var(--text-secondary)" }}>
            <Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Inicio</Link>
            <Link href="/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Wall of trust</Link>
            <Link href="/historia" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Mi historia</Link>
            <Link href="/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link>
            <a href={`mailto:${contactEmail}`} className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contacto</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[700px] px-6 py-24">
        <Link href="/blog" className="text-[11px] uppercase tracking-[0.15em] mb-12 inline-block transition hover:opacity-50" style={{ color: "var(--text-secondary)" }}>
          &larr; Blog
        </Link>

        <article>
          <span className="text-[10px] uppercase tracking-[0.15em] mb-4 block" style={{ color: "var(--text-secondary)" }}>
            Proceso
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            No necesitas entender. Necesitas estar bien
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Hay una pregunta que hago a menudo en sesion. La hago en catalan porqué es mi lengua y porque en catalan suena exacta: <em>Vols estar be o vols entendre-ho?</em>
            </p>

            <p className="text-[15px] leading-relaxed">
              Quieres estar bien o quieres entenderlo? La mayoría de personas se quedan calladas. Porque nunca se han planteado que son dos cosas distintas.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La mente cómo algoritmo de supervivencia
            </h2>

            <p className="text-[15px] leading-relaxed">
              Tu mente es un algoritmo optimizado para sobrevivir. Analiza, categoriza, predice, controla. Busca patrónes. Necesita explicaciónes. Si algo duele, quiere saber por que. Si algo cambia, quiere saber como. Si algo no encaja, no descansa hasta que tiene una narrativa que lo explique.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso es util en muchos contextos. Pero en el cuerpo, entender no cura. Puedes entender perfectamente por qué te duele la espalda y seguir con dolor. Puedes saber exactamente que te genera ansiedad y seguir ansioso. El conocimiento intelectual no cambia el estado del cuerpo.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El topo: la mente que interrumpe
            </h2>

            <p className="text-[15px] leading-relaxed">
              Will Chung lo llamaba el topo. Ese mecanismo de la mente que interrumpe antes de que la información este completa. Que analiza antes de recibir. Que juzga antes de sentir. El topo salta en el momento exacto en que el cuerpo esta a punto de tener una experiencia nueva y dice: espera, dejame entender esto primero.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y en ese momento, la experiencia se pierde. Porque no puedes sentir y analizar al mismo tiempo. Son circuitos distintos. Cuando uno se activa, el otro se apaga.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La experiencia borra la narrativa
            </h2>

            <p className="text-[15px] leading-relaxed">
              Lo que he visto en más de veinte años de trabajo es esto: cuando el cuerpo tiene una experiencia nueva, la narrativa vieja pierde poder. No hace falta desmontar la historia. No hace falta analizar el trauma. No hace falta entender cada capa. Hace falta que el cuerpo sienta algo diferente a lo que ha estado sintiendo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando el nuevo estado se instala, la vieja narrativa se vuelve irrelevante. No desaparece. Simplemente deja de gobernar.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              No necesitas más información
            </h2>

            <p className="text-[15px] leading-relaxed">
              No necesitas otro libro. Otro podcast. Otra explicación de por qué eres cómo eres. Lo que necesitas es que tu cuerpo tenga una experiencia que reorganice lo que la mente no puede reorganizar con palabras.
            </p>

            <p className="text-[15px] leading-relaxed">
              Las personas que cambian más rapido no son las más inteligentes ni las que más saben. Son las que dejan de intentar entender y empiezan a permitir. Permitir que el cuerpo haga lo que sabe hacer cuando le quitas la interferencia de una mente que necesita controlarlo todo.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Vols estar be o vols entendre-ho? Es la pregunta más honesta que puedo hacerte. Y la respuesta cambia todo.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si quieres dejar de dar vueltas y empezar a sentir algo diferente, escribeme.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-block text-[11px] uppercase tracking-[0.15em] font-medium transition hover:opacity-50"
              style={{ color: "var(--text-main)" }}
            >
              Escribeme &rarr;
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}
