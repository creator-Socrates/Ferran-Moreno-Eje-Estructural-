import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "El cuerpo no está roto. Está compensando",
  description: "Cuando el cuerpo compensa durante años, más técnica no lo soluciona.",
  alternates: getBlogAlternates("es", "el-cuerpo-no-esta-roto-esta-compensando"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="El cuerpo no está roto. Está compensando"
        description="Cuando el cuerpo compensa durante años, más técnica no lo soluciona."
        slug="el-cuerpo-no-esta-roto-esta-compensando"
        date="2026-05-15"
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
            El cuerpo no está roto. Está compensando
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Cuando el cuerpo compensa durante años, más técnica no lo soluciona.
            </p>

            <p className="text-[15px] leading-relaxed">
              Tu cuerpo es extraordinariamente bueno sobreviviendo. Ese no es el problema. El problema es el precio que paga para seguir funcionando.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cada vez que algo pierde movilidad o capacidad de adaptación, otra parte absorbe la carga. Un tobillo rígido cambia la mecánica de la rodilla. Un diafragma bloqueado altera la respiración y tensiona las cervicales. Una cicatriz antigua reorganiza la fascia alrededor durante años sin que nadie lo relacione.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo siempre encuentra una forma de continuar. Aunque sea a costa de sí mismo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y al principio funciona.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso muchas personas pasan años aparentemente "bien" antes de que aparezca el dolor. El sistema todavía tiene margen. Todavía puede redistribuir tensiones, cambiar patrones y absorber carga sin colapsar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Hasta que deja de poder hacerlo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Entonces aparece el síntoma:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>la espalda que se bloquea,</li>
              <li>el cuello que nunca termina de soltarse,</li>
              <li>el cansancio constante,</li>
              <li>la ansiedad sin motivo claro,</li>
              <li>el insomnio,</li>
              <li>la sensación de que el cuerpo ya no responde igual.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              La mayoría de veces, el problema no empezó ahí.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso es lo que veo constantemente en consulta. Personas que llevan años tratando el lugar equivocado porque es el lugar que duele. Y donde duele casi nunca es donde empezó el problema.
            </p>

            <p className="text-[15px] leading-relaxed">
              El hombro puede estar compensando un tórax rígido. La lumbar puede estar sosteniendo una pelvis desorganizada. La cervical puede ser la respuesta a una respiración alterada desde hace años.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo funciona como un sistema. Y un sistema nunca se entiende mirando piezas aisladas.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso muchas intervenciones generan alivio temporal pero no cambian el patrón. El masaje libera tensión. La infiltración baja inflamación. El ajuste devuelve movilidad. Pero si la organización que produce la compensación sigue intacta, el cuerpo volverá exactamente al mismo lugar.
            </p>

            <p className="text-[15px] leading-relaxed">
              No porque esté roto. Porque sigue intentando sobrevivir de la única manera que conoce.
            </p>

            <p className="text-[15px] leading-relaxed">
              Mi trabajo no consiste en perseguir síntomas. Consiste en leer cómo se ha organizado el cuerpo alrededor de sus restricciones. Ver qué estructura está sosteniendo el patrón. Qué compensaciones siguen activas. Qué parte del sistema perdió capacidad de adaptación primero.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando encuentras eso, el cuerpo cambia de una forma distinta.
            </p>

            <p className="text-[15px] leading-relaxed">
              No porque lo fuerces.<br />
              No porque "lo arregles".<br />
              Sino porque deja de necesitar compensar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí empieza la reorganización real.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo no está roto.
            </p>

            <p className="text-[15px] leading-relaxed">
              Está intentando encontrar orden.
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
