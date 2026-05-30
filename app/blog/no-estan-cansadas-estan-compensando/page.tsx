import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "La mayoría de personas no están cansadas. Están compensando.",
  description: "Hay una diferencia enorme entre estar cansado y estar compensando.",
  alternates: getBlogAlternates("es", "no-estan-cansadas-estan-compensando"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="La mayoría de personas no están cansadas. Están compensando."
        description="Hay una diferencia enorme entre estar cansado y estar compensando."
        slug="no-estan-cansadas-estan-compensando"
        date="2026-06-19"
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
            La mayoría de personas no están cansadas. Están compensando.
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Hay una diferencia enorme entre estar cansado y estar compensando.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cansancio normal se recupera. Descansas, duermes bien, comes, bajas el ritmo unos días… y el cuerpo vuelve.
            </p>

            <p className="text-[15px] leading-relaxed">
              La compensación no funciona así.
            </p>

            <p className="text-[15px] leading-relaxed">
              La compensación consume energía constantemente, incluso cuando no haces nada.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un cuerpo desorganizado gasta recursos todo el tiempo intentando mantener equilibrio:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>músculos trabajando de más,</li>
              <li>respiración limitada,</li>
              <li>sistema nervioso en vigilancia,</li>
              <li>digestión funcionando con menos margen,</li>
              <li>tensión sosteniendo estructuras que ya no deberían depender de ella.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Es como conducir con el freno de mano ligeramente puesto durante años. El coche sigue avanzando. Pero el desgaste es enorme.
            </p>

            <p className="text-[15px] leading-relaxed">
              Muchas personas viven así tanto tiempo que dejan de notarlo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Se acostumbran a:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>levantarse cansadas,</li>
              <li>necesitar café para arrancar,</li>
              <li>sentir tensión constante,</li>
              <li>recuperarse peor,</li>
              <li>vivir con una fatiga de fondo que nunca desaparece del todo.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Y como la analítica muchas veces sale "normal", empiezan a pensar que el problema es psicológico o que simplemente se están haciendo mayores.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero cuando observas el cuerpo, ves otra cosa.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ves respiraciones que no llegan al abdomen. Ves pelvis que no transmiten bien la carga. Ves tórax rígidos. Ves sistemas nerviosos atrapados en alerta baja constante. Ves cuerpos enteros sosteniéndose a través de tensión innecesaria.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo sigue funcionando. Pero a un coste demasiado alto.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso es compensar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y llega un momento donde el sistema ya no tiene margen suficiente. Entonces aparece la sensación de colapso:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>"ya no puedo más,"</li>
              <li>"no tengo energía,"</li>
              <li>"algo me pasa."</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Muchas veces no falta energía. Falta organización.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso algunas personas sienten más cambio después de una buena reorganización corporal que después de semanas de descanso. No porque el trabajo "dé energía", sino porque el cuerpo deja de desperdiciarla sosteniendo patrones que ya no necesita.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí cambia algo importante.
            </p>

            <p className="text-[15px] leading-relaxed">
              Respirar cuesta menos.<br />
              Moverse cuesta menos.<br />
              Pensar cuesta menos.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo deja de luchar contra sí mismo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y cuando eso ocurre, aparece una sensación que mucha gente no recordaba: tener energía sin tener que forzarla.
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
          <RelatedArticles slug="no-estan-cansadas-estan-compensando" lang="es" />
        </article>
      </main>
    </div>
  );
}
