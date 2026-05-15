import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Siempre hay que buscar el punto de origen",
  description: "La mayoría de tratamientos fallan porque tratan la compensación, no el origen. Encontrar dónde empezó todo lo cambia todo.",
  alternates: {
    canonical: "/blog/buscar-el-punto-de-origen",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Siempre hay que buscar el punto de origen"
        description="La mayoría de tratamientos fallan porque tratan la compensación, no el origen. Encontrar dónde empezó todo lo cambia todo."
        slug="buscar-el-punto-de-origen"
        date="2026-09-22"
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
            Siempre hay que buscar el punto de origen
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Siempre tienes que buscar el punto de origen. No hay forma de no buscar el punto de origen. Es el principio más básico de todo lo que hago, y el que más se ignora en la mayoría de tratamientos.
            </p>

            <p className="text-[15px] leading-relaxed">
              No donde duele. Donde empezó.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Compensación vs. origen
            </h2>

            <p className="text-[15px] leading-relaxed">
              El dolor de espalda que empezó en un esguince de tobillo hace 15 años. La ansiedad que empezó en una creencia de la infancia. La fatiga crónica que empezó en una restricción visceral que nadie miró. El cuerpo compensa. Siempre. Redistribuye la carga, adapta la postura, reorganiza la tensión. Y lo hace tan bien que el síntoma aparece lejos del origen.
            </p>

            <p className="text-[15px] leading-relaxed">
              La mayoría de tratamientos fallan porque tratan la compensación. Trabajan donde duele. Alivian el síntoma. Y el síntoma vuelve. Porque la causa sigue ahí, intacta, generando el mismo patrón una y otra vez.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Los cuatro niveles del punto de origen
            </h2>

            <p className="text-[15px] leading-relaxed">
              El punto de origen puede ser estructural: una articulación que perdió movilidad, una fascia que se adhirió, un hueso que cambió de posición después de un impacto.
            </p>

            <p className="text-[15px] leading-relaxed">
              Puede ser visceral: un órgano con restricción de movilidad que tira de las estructuras que lo rodean. Un hígado que no se desliza bien arrastra el diafragma, que altera la respiración, que tensa las cervicales.
            </p>

            <p className="text-[15px] leading-relaxed">
              Puede ser energético: un patrón que no tiene anclaje físico visible pero que organiza el cuerpo desde otro plano. Lo sientes, lo percibes, pero no lo puedes palpar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y puede ser emocional: una creencia que creó un patrón de contención. Un evento que el cuerpo nunca terminó de procesar y que sigue generando tensión como si estuviera ocurriendo ahora.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Encontrarlo cambia todo
            </h2>

            <p className="text-[15px] leading-relaxed">
              Cuando encuentras el punto de origen, el cuerpo responde de forma diferente. No es un alivio temporal. Es una reorganización. Las compensaciones empiezan a soltar porque ya no necesitan sostener nada. El sistema se reordena desde la causa, no desde el efecto.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Antes de cualquier intervención, busca el origen. No donde duele. No donde molesta. Donde empezó. Esa es la diferencia entre gestionar síntomas y resolver el problema.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si llevas tiempo tratando síntomas sin resultado, quizá nadie ha buscado el origen. Puedo ayudarte a encontrarlo.
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

          <RelatedArticles slug="buscar-el-punto-de-origen" lang="es" />
        </article>
      </main>
    </div>
  );
}
