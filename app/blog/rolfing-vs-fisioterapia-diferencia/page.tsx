import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Rolfing vs fisioterapia: cuál es la diferencia",
  description: "No se trata de cuál es mejor. Se trata de qué hace cada una. La fisioterapia trata síntomas. El Rolfing reorganiza la estructura.",
  alternates: {
    canonical: "/blog/rolfing-vs-fisioterapia-diferencia",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Rolfing vs fisioterapia: cuál es la diferencia"
        description="No se trata de cuál es mejor. Se trata de qué hace cada una. La fisioterapia trata síntomas. El Rolfing reorganiza la estructura."
        slug="rolfing-vs-fisioterapia-diferencia"
        date="2026-05-22"
        tag="Rolfing"
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
            Rolfing
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Rolfing vs fisioterapia: cuál es la diferencia
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Esta es una de las preguntas que más me hacen. Y la respuesta no es cuál es mejor. Es qué hace cada una. Porque no compiten. Operan en niveles distintos.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Dos preguntas diferentes
            </h2>

            <p className="text-[15px] leading-relaxed">
              La fisioterapia pregunta: ¿qué está roto? ¿Qué hay que rehabilitar? Trabaja con el síntoma, con la lesión, con la función perdida. Tiene protocolos claros, herramientas específicas y un objetivo concreto: devolverte al punto donde estabas antes de que algo fallara.
            </p>

            <p className="text-[15px] leading-relaxed">
              El Rolfing pregunta otra cosa: ¿cómo está organizado este cuerpo? No mira la pieza que falla. Mira el sistema entero. Busca los patrones que sostienen el problema. Y trabaja para reorganizar la estructura de forma que el cuerpo funcione mejor como conjunto.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Cuando la fisioterapia funciona y cuando no
            </h2>

            <p className="text-[15px] leading-relaxed">
              Si te rompes un ligamento, la fisioterapia es lo que necesitas. Si tienes una lesión aguda, un postoperatorio, una pérdida de rango articular, el fisio es el profesional indicado. Eso no está en discusión.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero hay personas que llevan meses o años de fisioterapia y el problema vuelve. El hombro que se contractura siempre. La lumbar que nunca termina de resolverse. La cervical que mejora tres días y recae. Cuando eso pasa, casi siempre es porque el problema no es local. Es organizacional. La pieza falla porque el sistema la está cargando de forma desproporcionada. Y ahí es donde entra el Rolfing.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Dos mundos, una formación
            </h2>

            <p className="text-[15px] leading-relaxed">
              Conozco los dos mundos. Me formé en la Escuela Europea de Rolfing en Munich. Hice todos los cursos del Group of Munich: Barral, Croibier, manipulación visceral, nervios periféricos. Y también he trabajado codo a codo con fisioterapeutas durante años.
            </p>

            <p className="text-[15px] leading-relaxed">
              No tengo ningún problema con la fisioterapia. Lo que sí veo es que muchas personas llegan a mi consulta después de haber agotado la vía del tratamiento local. Han hecho todo lo que se puede hacer con la pieza. Y necesitan a alguien que mire el sistema.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              No es cuál es mejor
            </h2>

            <p className="text-[15px] leading-relaxed">
              La pregunta no es fisioterapia o Rolfing. Es: ¿qué necesita tu cuerpo ahora? Si la respuesta es rehabilitar una lesión específica, ve al fisio. Si la respuesta es que algo más profundo no está funcionando, que los síntomas se repiten, que el cuerpo no termina de encontrar su sitio &mdash; entonces necesitas un trabajo diferente.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              La fisioterapia arregla piezas. El Rolfing reorganiza el sistema. Ambos son válidos. La clave es saber cuándo necesitas cada uno.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si llevas tiempo con un problema que no se resuelve, quizá el enfoque necesita cambiar. Escríbeme y lo valoramos.
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
