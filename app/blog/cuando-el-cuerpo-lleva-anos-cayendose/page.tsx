import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Cuando el cuerpo lleva 8 años cayéndose: lo que nadie miró",
  description: "Un hombre de 73 años en silla de ruedas con úlceras crónicas. 8 años de declive. Múltiples especialistas. Ninguno miró el colapso estructural.",
  alternates: {
    canonical: "/blog/cuando-el-cuerpo-lleva-anos-cayendose",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Cuando el cuerpo lleva 8 años cayéndose: lo que nadie miró"
        description="Un hombre de 73 años en silla de ruedas con úlceras crónicas. 8 años de declive. Múltiples especialistas. Ninguno miró el colapso estructural."
        slug="cuando-el-cuerpo-lleva-anos-cayendose"
        date="2026-09-25"
        tag="Dolor crónico"
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
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[700px] px-6 py-24">
        <Link href="/blog" className="text-[11px] uppercase tracking-[0.15em] mb-12 inline-block transition hover:opacity-50" style={{ color: "var(--text-secondary)" }}>
          &larr; Blog
        </Link>

        <article>
          <span className="text-[10px] uppercase tracking-[0.15em] mb-4 block" style={{ color: "var(--text-secondary)" }}>
            Dolor crónico
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Cuando el cuerpo lleva 8 años cayéndose: lo que nadie miró
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Me llega un hombre de 73 años en silla de ruedas. Úlceras crónicas en las piernas. Riesgo real de amputación. Lleva 8 años en declive desde un ingreso hospitalario que lo dejó postrado. Ha pasado por múltiples especialistas. Vascular, traumatología, dermatología, medicina interna. Cada uno miró su parcela. Ninguno miró al hombre entero.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Lo que vi cuando lo miré
            </h2>

            <p className="text-[15px] leading-relaxed">
              Antes de tocar nada, leí su estructura. El diafragma no sostenía. La pelvis estaba rotada y sin tono, completamente fláccida. Una pierna colapsada sobre sí misma. Las costillas de un lado rígidas, sin movilidad respiratoria. La circulación distal era tan pobre que no se palpaba pulso en el pie afectado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Todo esto no era consecuencia de la úlcera. Era su causa. El colapso postural había ido estrangulando la circulación, la respiración, la capacidad del cuerpo de llevar nutrientes y oxígeno a las extremidades. Sin estructura, no hay función. Sin función, el tejido muere.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Una sesión, micro-intervenciones
            </h2>

            <p className="text-[15px] leading-relaxed">
              No hice nada heroico. Trabajé con lo que el cuerpo permitía. Pequeños ajustes en la pelvis para devolverle algo de simetría. Liberación de las costillas rígidas para que el diafragma pudiera hacer su trabajo. Trabajo suave en la pierna colapsada para recuperar algo de eje.
            </p>

            <p className="text-[15px] leading-relaxed">
              Al final de la sesión, tres cosas habían cambiado. La pelvis tenía más equilibrio. La respiración era más armónica, bilateral. Y el pulso distal del pie — que antes no se encontraba — estaba presente. La persona que lo acompañaba lo confirmó: estaba más tranquilo de lo que lo había visto en meses.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La estructura sostiene la función
            </h2>

            <p className="text-[15px] leading-relaxed">
              Este caso ilustra algo que veo constantemente: el problema vascular no causó el colapso postural. El colapso postural causó el problema vascular. Cuando un cuerpo pierde su organización, todo lo que depende de esa organización empieza a fallar. Circulación, respiración, digestión, recuperación tisular.
            </p>

            <p className="text-[15px] leading-relaxed">
              8 años mirando la úlcera sin mirar por qué la pierna no recibía sangre. 8 años tratando el síntoma sin preguntar qué estructura lo estaba generando.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              El cuerpo siempre está intentando reorganizarse. Solo necesita que alguien le dé las condiciones. No más fuerza. No más intervenciones parciales. Espacio, escucha y precisión.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si llevas años con un problema que nadie resuelve, quizá nadie ha mirado dónde realmente está. Escríbeme.
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

          <RelatedArticles slug="cuando-el-cuerpo-lleva-anos-cayendose" lang="es" />
        </article>
      </main>
    </div>
  );
}