import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "La diferencia entre intensidad e invasión en el trabajo corporal",
  description: "Intenso significa que el cuerpo recibe algo profundo. Invasivo significa que estás forzando. El cuerpo sabe la diferencia.",
  alternates: {
    canonical: "/blog/diferencia-entre-intensidad-e-invasion",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="La diferencia entre intensidad e invasión en el trabajo corporal"
        description="Intenso significa que el cuerpo recibe algo profundo. Invasivo significa que estás forzando. El cuerpo sabe la diferencia."
        slug="diferencia-entre-intensidad-e-invasion"
        date="2026-06-26"
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
            Trabajo corporal
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            La diferencia entre intensidad e invasión
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Hay una línea que separa un trabajo corporal intenso de uno invasivo. No es una línea de presión. No se mide en kilos. Se siente. Y el cuerpo la conoce perfectamente.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Qué significa intenso
            </h2>

            <p className="text-[15px] leading-relaxed">
              Intenso significa que el cuerpo está recibiendo algo profundo y significativo. Algo que llega a una capa que llevaba tiempo sin ser tocada. La sensación puede ser fuerte. Puede haber momentos de incomodidad. Pero hay una cualidad de apertura: el tejido dice que sí. El sistema nervioso no se activa en defensa. Hay entrega, no resistencia.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un trabajo intenso bien hecho genera cambio real. El cuerpo se reorganiza. La respiración se profundiza. Algo se suelta que llevaba años sostenido. La persona sale diferente de como entró — no herida, sino liberada.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Qué significa invasivo
            </h2>

            <p className="text-[15px] leading-relaxed">
              Invasivo significa que estás forzando más allá de las defensas del cuerpo. Estás entrando sin permiso. Y el cuerpo responde como responde a cualquier invasión: se contrae. Se defiende. Se cierra. Consigues exactamente lo contrario de lo que buscabas.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un terapeuta que fuerza cree que está haciendo un trabajo profundo. No lo está. Está generando una respuesta de protección. El tejido se endurece. El sistema nervioso entra en alerta. Y al día siguiente el dolor es peor que antes. Eso no es trabajo profundo. Es violencia técnica.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Escuchar antes de actuar
            </h2>

            <p className="text-[15px] leading-relaxed">
              Aprender a sentir esa diferencia llevó años. No es algo que se enseñe en un curso de fin de semana. Es una habilidad que se desarrolla con miles de horas de contacto, de escucha, de observar qué pasa cuando te pasas y qué pasa cuando estás justo en el punto.
            </p>

            <p className="text-[15px] leading-relaxed">
              No se trata de presión. Se trata de escucha. Un susurro en el lugar correcto hace más que un grito en el lugar equivocado. Una mano que escucha genera más cambio que un codo que aplasta. La precisión siempre gana a la fuerza.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso mi trabajo puede sentirse intenso sin sentirse nunca violento. Porque la intención no es dominar al tejido. Es dialogar con él. Y cuando hay diálogo, el cuerpo abre puertas que con la fuerza jamás se abrirían.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Jan Sultan, Rolfer veterano y maestro: &quot;La precisión siempre gana a la fuerza.&quot;
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si has tenido malas experiencias con trabajo corporal agresivo, escríbeme. Hay otra manera de trabajar.
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

          <RelatedArticles slug="diferencia-entre-intensidad-e-invasion" lang="es" />
        </article>
      </main>
    </div>
  );
}
