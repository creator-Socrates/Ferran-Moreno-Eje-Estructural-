import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Ansiedad sin causa aparente: cuando el cuerpo pide atención",
  description: "Has revisado todo y no hay causa clara. Pero tu cuerpo sigue en alerta. Esto no es psicológico. Es fisiológico.",
  alternates: {
    canonical: "/blog/ansiedad-sin-causa-aparente",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Ansiedad sin causa aparente: cuando el cuerpo pide atención"
        description="Has revisado todo y no hay causa clara. Pero tu cuerpo sigue en alerta. Esto no es psicológico. Es fisiológico."
        slug="ansiedad-sin-causa-aparente"
        date="2026-05-29"
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
            Sistema nervioso
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Ansiedad sin causa aparente: cuando el cuerpo pide atención
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Has revisado todo. Analítica de sangre: normal. Tiroides: bien. Terapeuta: llevas meses. Medicación: la probaste. Y la ansiedad sigue ahí. Sin motivo claro. Sin detonante. Como un ruido de fondo que no se apaga.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              No es tu cabeza. Es tu sistema nervioso.
            </h2>

            <p className="text-[15px] leading-relaxed">
              Cuando no hay causa externa clara, la ansiedad casi siempre tiene un origen fisiológico. Tu sistema nervioso está atascado en modo alerta. No porque algo malo esté pasando ahora, sino porque en algún momento se activó y no consiguió volver a bajar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Uso el modelo del semáforo para explicarlo. Verde: el sistema está regulado, hay calma, hay capacidad de respuesta. Naranja: hay activación, hay vigilancia, el cuerpo está preparado para algo que no llega. Rojo: colapso, desconexión, congelación. La mayoría de personas con ansiedad crónica sin causa aparente llevan años viviendo en naranja. Se han adaptado tanto que ya no lo reconocen como un estado alterado. Es simplemente cómo se sienten.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El cuerpo señala, la mente interpreta
            </h2>

            <p className="text-[15px] leading-relaxed">
              Lo que la mayoría de personas llama &ldquo;ansiedad&rdquo; es la interpretación que la mente hace de las señales del cuerpo. Taquicardia. Tensión en el pecho. Respiración corta. Nudo en el estómago. El cuerpo está mandando señales de alerta. La mente busca una explicación y no la encuentra. Y eso genera más ansiedad.
            </p>

            <p className="text-[15px] leading-relaxed">
              No es un problema psicológico. Es un sistema nervioso que no sabe bajar. Y no va a bajar hablando de ello, ni analizándolo, ni entendiéndolo. Va a bajar cuando el cuerpo reciba la señal de que puede soltar.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Cuando el sistema baja, la ansiedad se disuelve
            </h2>

            <p className="text-[15px] leading-relaxed">
              Esto es lo que más sorprende a las personas que vienen con este perfil. No tienen que &ldquo;trabajar&rdquo; nada. No tienen que entender el origen. No tienen que revivir nada. Cuando el sistema nervioso se desregula y vuelve a encontrar su punto de regulación, la ansiedad simplemente deja de estar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Muchos clientes lo describen igual: &ldquo;el ruido paró&rdquo;. No pasó nada dramático. No hubo revelación. Simplemente, el cuerpo dejó de estar en alerta. Y con eso, la ansiedad se fue.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              No es magia. Es fisiología.
            </h2>

            <p className="text-[15px] leading-relaxed font-medium">
              Si llevas tiempo con una ansiedad que no tiene explicación, quizá no es que falte una explicación. Quizá es que estás buscando en el lugar equivocado. El origen no está en tu mente. Está en tu cuerpo. Y el cuerpo tiene su propia forma de soltar.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si te reconoces en esto, escríbeme. No necesitas tenerlo claro para dar el primer paso.
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
