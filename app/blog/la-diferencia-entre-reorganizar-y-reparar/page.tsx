import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "La diferencia entre reorganizar y reparar",
  description: "La mayoría de personas cree que su cuerpo está roto.",
  alternates: {
    canonical: "/blog/la-diferencia-entre-reorganizar-y-reparar",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="La diferencia entre reorganizar y reparar"
        description="La mayoría de personas cree que su cuerpo está roto."
        slug="la-diferencia-entre-reorganizar-y-reparar"
        date="2026-06-08"
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
            La diferencia entre reorganizar y reparar
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              La mayoría de personas cree que su cuerpo está roto.
            </p>

            <p className="text-[15px] leading-relaxed">
              Llegan después de años de dolor, tratamientos y frustración pensando que algo dentro dejó de funcionar y necesita ser arreglado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero muchas veces el cuerpo no está roto.
            </p>

            <p className="text-[15px] leading-relaxed">
              Está desorganizado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y la diferencia entre esas dos cosas cambia completamente la forma de trabajar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Reparar implica que hay una pieza dañada que necesita intervención directa:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>una fractura,</li>
              <li>un tejido roto,</li>
              <li>una lesión aguda,</li>
              <li>una estructura que realmente perdió integridad.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Ahí la medicina moderna es extraordinaria.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero gran parte del sufrimiento físico crónico no funciona así.
            </p>

            <p className="text-[15px] leading-relaxed">
              El problema no suele ser que el cuerpo haya olvidado cómo funcionar.
El problema es que lleva demasiado tiempo organizándose alrededor de compensaciones.
            </p>

            <p className="text-[15px] leading-relaxed">
              Entonces aparecen:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>tensiones,</li>
              <li>dolor recurrente,</li>
              <li>fatiga,</li>
              <li>rigidez,</li>
              <li>ansiedad fisiológica,</li>
              <li>patrones que vuelven una y otra vez.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Y cuanto más tiempo pasa, más difícil resulta distinguir causa y compensación.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí es donde reorganizar cambia completamente el enfoque.
            </p>

            <p className="text-[15px] leading-relaxed">
              Reorganizar significa devolver al sistema condiciones para funcionar mejor como conjunto.
            </p>

            <p className="text-[15px] leading-relaxed">
              No perseguir síntomas.
No pelearte con el cuerpo.
No imponer una corrección externa.
            </p>

            <p className="text-[15px] leading-relaxed">
              Significa:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>devolver movilidad donde se perdió,</li>
              <li>liberar compensaciones innecesarias,</li>
              <li>reorganizar respiración,</li>
              <li>recuperar capacidad adaptativa,</li>
              <li>permitir que el sistema encuentre un orden más eficiente.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Cuando eso ocurre, muchas cosas cambian solas.
            </p>

            <p className="text-[15px] leading-relaxed">
              La postura cambia sin &ldquo;corregir postura&rdquo;.
La respiración cambia sin ejercicios respiratorios.
El dolor disminuye sin perseguir el dolor directamente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque el sistema ya no necesita sostener la misma organización defensiva.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso es algo importante:
muchas veces el cuerpo no necesita ayuda para funcionar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Necesita que dejes de interferir.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo tiene una inteligencia organizativa muchísimo más sofisticada de lo que imaginamos. Cuando eliminas restricciones importantes, el sistema empieza a reorganizarse por sí mismo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí es donde ocurre el cambio real.
            </p>

            <p className="text-[15px] leading-relaxed">
              Reparar arregla piezas.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Reorganizar cambia el sistema completo.
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
