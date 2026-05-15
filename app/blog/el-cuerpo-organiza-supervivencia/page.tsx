import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "El cuerpo organiza la supervivencia antes que la comodidad",
  description: "Tu cuerpo no busca comodidad.",
  alternates: {
    canonical: "/blog/el-cuerpo-organiza-supervivencia",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="El cuerpo organiza la supervivencia antes que la comodidad"
        description="Tu cuerpo no busca comodidad."
        slug="el-cuerpo-organiza-supervivencia"
        date="2026-05-29"
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
            El cuerpo organiza la supervivencia antes que la comodidad
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Tu cuerpo no busca comodidad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Busca supervivencia.
            </p>

            <p className="text-[15px] leading-relaxed">
              Esa diferencia explica muchísimo de lo que las personas viven sin entender.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo no está diseñado para hacerte sentir bien todo el tiempo. Está diseñado para mantenerte vivo. Y cuando percibe amenaza —física, emocional o fisiológica— reorganiza todo el sistema alrededor de esa prioridad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso aparecen patrones que parecen irracionales:
            </p>

            <p className="text-[15px] leading-relaxed">
              tensión constante,<br />
              mandíbula apretada,<br />
              respiración superficial,<br />
              hipervigilancia,<br />
              dificultad para descansar,<br />
              necesidad de control,<br />
              agotamiento que nunca desaparece del todo.
            </p>

            <p className="text-[15px] leading-relaxed">
              No son errores. Son estrategias.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo adapta postura, respiración, tono muscular y estado nervioso para maximizar supervivencia, no bienestar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y lo hace tan bien que muchas veces terminas creyendo que esa forma de funcionar eres tú.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero una estrategia de supervivencia sostenida demasiado tiempo acaba convirtiéndose en una prisión fisiológica.
            </p>

            <p className="text-[15px] leading-relaxed">
              Una pelvis se rigidiza para proteger una lesión antigua. El tórax se cierra después de años de estrés. La respiración se vuelve superficial porque el cuerpo aprendió que relajarse no era seguro. La mandíbula aprieta porque el sistema necesita mantenerse preparado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Todo eso tiene lógica para el cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed">
              El problema es que muchas de esas respuestas siguen activas mucho después de que el peligro haya desaparecido.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí es donde el sistema empieza a pagar un precio enorme:
            </p>

            <p className="text-[15px] leading-relaxed">
              menos energía disponible,<br />
              peor recuperación,<br />
              más inflamación,<br />
              menos capacidad de adaptación,<br />
              sensación constante de esfuerzo interno.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y como el cuerpo es extremadamente adaptable, sigues funcionando. Trabajas. Cuidas de otros. Produces. Resuelves.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero cada vez con menos margen.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso el trabajo profundo no consiste en "forzar al cuerpo a cambiar". Consiste en crear las condiciones para que deje de organizarse alrededor de la supervivencia constante.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando el sistema empieza a sentir seguridad real, algo cambia:
            </p>

            <p className="text-[15px] leading-relaxed">
              la respiración baja,<br />
              la postura se reorganiza,<br />
              la tensión disminuye,<br />
              el cuerpo deja de prepararse para una amenaza invisible.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y muchas personas descubren algo sorprendente: la cantidad de energía que estaban gastando simplemente intentando sostenerse.
            </p>

            <p className="text-[15px] leading-relaxed">
              Tu cuerpo no está intentando sabotearte.
            </p>

            <p className="text-[15px] leading-relaxed">
              Está intentando protegerte.
            </p>

            <p className="text-[15px] leading-relaxed">
              El problema es que lleva demasiado tiempo haciéndolo.
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
