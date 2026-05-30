import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "La precisión siempre gana a la fuerza",
  description: "Existe una idea muy extendida en el trabajo corporal: si aprietas más fuerte, llegas más profundo.",
  alternates: getBlogAlternates("es", "la-precision-siempre-gana-a-la-fuerza"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="La precisión siempre gana a la fuerza"
        description="Existe una idea muy extendida en el trabajo corporal: si aprietas más fuerte, llegas más profundo."
        slug="la-precision-siempre-gana-a-la-fuerza"
        date="2026-06-02"
        tag="Fundamentos"
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
            Fundamentos
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            La precisión siempre gana a la fuerza
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Existe una idea muy extendida en el trabajo corporal: si aprietas más fuerte, llegas más profundo.
            </p>

            <p className="text-[15px] leading-relaxed">
              No es verdad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Muchas veces ocurre exactamente lo contrario.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando fuerzas demasiado un tejido, el cuerpo se defiende. Contrae. Protege. Se cierra. Y en ese momento dejas de trabajar con el sistema para empezar a luchar contra él.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso no es profundidad. Es invasión.
            </p>

            <p className="text-[15px] leading-relaxed">
              La verdadera profundidad aparece cuando el cuerpo siente suficiente seguridad para abrirse sin necesidad de defensa.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y ahí la precisión lo cambia todo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un contacto preciso, en el lugar correcto, con la intención correcta, genera más reorganización que veinte minutos de presión bruta. Lo aprendí después de años formándome en Rolfing, osteopatía visceral y trabajo fascial.
            </p>

            <p className="text-[15px] leading-relaxed">
              Al principio, como muchos terapeutas, asociaba intensidad con eficacia. Pero cuanto más aprendía a escuchar, más evidente se hacía algo: el cuerpo responde muchísimo más a la calidad de la atención que a la cantidad de fuerza.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso es especialmente visible en el trabajo visceral y nervioso.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un órgano no necesita presión. Necesita escucha.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un sistema nervioso desregulado no necesita que lo domines. Necesita sentir que puede dejar de defenderse.
            </p>

            <p className="text-[15px] leading-relaxed">
              He visto cambios enormes ocurriendo con contactos mínimos. Respiraciones que se abren. Tensiones que desaparecen. Posturas que cambian sin manipulación agresiva.
            </p>

            <p className="text-[15px] leading-relaxed">
              No porque estuviera "haciendo más".
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque estaba interfiriendo menos.
            </p>

            <p className="text-[15px] leading-relaxed">
              La fuerza impresiona. La precisión transforma.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y eso no aplica solo al trabajo corporal.
            </p>

            <p className="text-[15px] leading-relaxed">
              Aplica también a cómo hablas, cómo lideras, cómo educas y cómo te relacionas con otros.
            </p>

            <p className="text-[15px] leading-relaxed">
              Muchas personas intentan cambiar su vida usando más fuerza:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>más disciplina,</li>
              <li>más control,</li>
              <li>más exigencia,</li>
              <li>más presión.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Pero el cuerpo humano no florece bajo amenaza constante.
            </p>

            <p className="text-[15px] leading-relaxed">
              Florece cuando encuentra coherencia, espacio y dirección.
            </p>

            <p className="text-[15px] leading-relaxed">
              La precisión siempre gana a la fuerza.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque el cuerpo no necesita que lo conquistes.
            </p>

            <p className="text-[15px] leading-relaxed">
              Necesita que aprendas a escucharlo.
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
          <RelatedArticles slug="la-precision-siempre-gana-a-la-fuerza" lang="es" />
        </article>
      </main>
    </div>
  );
}
