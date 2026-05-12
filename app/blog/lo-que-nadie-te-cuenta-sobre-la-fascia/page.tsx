import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Lo que nadie te cuenta sobre la fascia",
  description: "La fascia que te enseñan en los libros es tejido muerto. La fascia real es un líquido vivo, transparente, que se reorganiza constantemente.",
  alternates: {
    canonical: "/blog/lo-que-nadie-te-cuenta-sobre-la-fascia",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Lo que nadie te cuenta sobre la fascia"
        description="La fascia que te enseñan en los libros es tejido muerto. La fascia real es un líquido vivo, transparente, que se reorganiza constantemente."
        slug="lo-que-nadie-te-cuenta-sobre-la-fascia"
        date="2026-08-04"
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
            Lo que nadie te cuenta sobre la fascia
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              La gente cuando habla de la fascia no sabe lo que es. Y no lo digo como provocación. Lo digo porque la mayoría de lo que se enseña sobre fascia viene de un error histórico que nadie se ha molestado en corregir.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La anatomía se estudió en cadáveres
            </h2>

            <p className="text-[15px] leading-relaxed">
              Cuando se empezaron a hacer las primeras disecciones anatómicas, los cuerpos estaban secos. Muertos. Conservados en formol. La fascia que veían los anatomistas era un tejido seco, fibroso, blanquecino. Lo que sobraba cuando quitabas músculos, huesos y órganos. La fascia era literalmente lo que estorbaba.
            </p>

            <p className="text-[15px] leading-relaxed">
              Esa imagen se quedó. Y de ahí viene casi todo lo que se enseña hoy en escuelas de fisioterapia, yoga, Pilates: la fascia como una especie de envoltorio rígido que hay que estirar, romper o liberar con rodillos de espuma.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Lo que la medicina china ya sabía hace 4.000 años
            </h2>

            <p className="text-[15px] leading-relaxed">
              Los textos clásicos de medicina china describían un líquido transparente que conectaba todos los tejidos del cuerpo y que transportaba el chi. No hablaban de tendones secos ni de láminas fibrosas. Hablaban de algo vivo, fluido, que servía de medio de transporte para la energía vital. Hace cuatro mil años ya tenían una descripción más precisa de la fascia que la mayoría de manuales de anatomía del siglo XX.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Guimberteau lo filmó en 2003
            </h2>

            <p className="text-[15px] leading-relaxed">
              Jean-Claude Guimberteau, cirujano de mano francés, hizo algo que nadie había hecho: metió una cámara endoscópica debajo de la piel de un paciente vivo durante una cirugía. Lo que filmó cambió todo.
            </p>

            <p className="text-[15px] leading-relaxed">
              La fascia no era un envoltorio seco. Era un líquido transparente, brillante, que se movía, se reorganizaba y se adaptaba en tiempo real. Una red viva, tridimensional, que conectaba absolutamente todo. La fascia es algo que está vivo, que tiene la capacidad de reorganizarse constantemente.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Por qué esto importa
            </h2>

            <p className="text-[15px] leading-relaxed">
              Si trabajas con un modelo de fascia muerta, tus soluciones serán mecánicas: estirar, presionar, romper adherencias. Si entiendes que la fascia es un sistema vivo, tu enfoque cambia radicalmente. Ya no fuerzas. Dialogas. Ya no rompes. Reorganizas.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              La mayoría de fisios, osteópatas y yoguis siguen hablando de fascia basándose en cadáveres. La fascia real es visible, material, y está viva. Y cuando la tocas con la intención correcta, responde.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si quieres entender cómo trabajo con la fascia viva, escríbeme. Te cuento cómo es una sesión.
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

          <RelatedArticles slug="lo-que-nadie-te-cuenta-sobre-la-fascia" lang="es" />
        </article>
      </main>
    </div>
  );
}
