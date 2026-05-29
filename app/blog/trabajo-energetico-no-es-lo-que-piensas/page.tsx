import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "El trabajo energético no es lo que piensas — Ferran Moreno",
  description: "El trabajo energético serio no tiene nada que ver con incienso ni cristales. Es leer información que el cuerpo transmite y responder a ella con precisión.",
  alternates: getBlogAlternates("es", "trabajo-energetico-no-es-lo-que-piensas"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="El trabajo energético no es lo que piensas — Ferran Moreno"
        description="El trabajo energético serio no tiene nada que ver con incienso ni cristales. Es leer información que el cuerpo transmite y responder a ella con precisión."
        slug="trabajo-energetico-no-es-lo-que-piensas"
        date="2026-06-19"
        tag="Energía"
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
            Energía
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            El trabajo energético no es lo que piensas
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Cuando la gente oye &ldquo;trabajo energético&rdquo; piensa en incienso, cristales, misticismo. Eso no es lo que hago. El trabajo energético, hecho con rigor, consiste en leer información que el cuerpo transmite y responder a ella. No es cuestión de creencia. Es cuestión de percepción.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Señales, no magia
            </h2>

            <p className="text-[15px] leading-relaxed">
              Una mano entrenada detecta calor, densidad, ritmo, resistencia. Esas son señales. Seguir esas señales conduce a restricciones que el cuerpo está sosteniendo. A veces la restricción es estructural: fascia, articulación. A veces es visceral. Y a veces es energética: un patrón sin anclaje físico que, aun así, gobierna cómo el cuerpo se organiza.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ignorar la energía porque suena &ldquo;esotérico&rdquo; es como ignorar tu teléfono porque no entiendes la tecnología. Funciona creas en ello o no.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Lo que dicen quienes lo han experimentado
            </h2>

            <p className="text-[15px] leading-relaxed">
              Beatriz González, enfermera en Barcelona, lo describió así:
            </p>

            <blockquote className="border-l-2 pl-6 my-6 text-[15px] leading-relaxed" style={{ borderColor: "var(--text-secondary)", color: "var(--text-secondary)" }}>
              &ldquo;Muy recomendable. Ideas y sentimientos ordenados, cuerpo y mente alineados. Energía positiva totalmente expuesta y preparada para lo que venga. La palabra sería... sorprendente. Un placer interactuar con la energía de Ferran.&rdquo;
              <span className="block mt-2 text-[13px]">— Beatriz González, Enfermera, Barcelona</span>
            </blockquote>

            <p className="text-[15px] leading-relaxed">
              Jose Jimenez, funcionario en Barcelona, fue más directo:
            </p>

            <blockquote className="border-l-2 pl-6 my-6 text-[15px] leading-relaxed" style={{ borderColor: "var(--text-secondary)", color: "var(--text-secondary)" }}>
              &ldquo;Alinea cuerpo-mente-espíritu sin que tú te des cuenta, ni sepas cómo. Agradable en el trato y estupendo profesional. Gracias por todo.&rdquo;
              <span className="block mt-2 text-[13px]">— Jose Jimenez, Funcionario, Barcelona</span>
            </blockquote>

            <p className="text-[15px] leading-relaxed">
              No hablan de misticismo. Hablan de resultados que no saben explicar. Esa es la diferencia entre trabajo energético serio y espectáculo.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Estructural, visceral, energético: no son alternativas
            </h2>

            <p className="text-[15px] leading-relaxed">
              En mi trabajo, lo energético no reemplaza lo estructural ni lo visceral. Es una extensión natural. Tres capas del mismo sistema. El cuerpo no distingue entre una restricción fascial y un patrón energético. Simplemente se organiza alrededor de lo que encuentra. Si solo abordas una capa, dejas las otras intactas. Y el patrón vuelve.
            </p>

            <p className="text-[15px] leading-relaxed">
              La pregunta no es si la energía existe. La pregunta es si estás dispuesto a que tu cuerpo se reorganice sin necesitar entenderlo todo antes.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              El trabajo energético serio no necesita que creas en él. Solo necesita que no lo bloquees.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si te interesa pero te genera dudas, escríbeme. Te cuento cómo integro el trabajo energético en mis sesiones.
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

          <RelatedArticles slug="trabajo-energetico-no-es-lo-que-piensas" lang="es" />
        </article>
      </main>
    </div>
  );
}
