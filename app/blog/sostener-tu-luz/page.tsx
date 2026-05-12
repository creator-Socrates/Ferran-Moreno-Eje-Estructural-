import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Sostener tu luz: por qué imponerte es la estrategia equivocada",
  description: "Un ejecutivo cambió las luces de su oficina y cambió la energía de todo su equipo. Cuando sostienes tu luz, las cosas se ordenan solas.",
  alternates: {
    canonical: "/blog/sostener-tu-luz",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Sostener tu luz: por qué imponerte es la estrategia equivocada"
        description="Un ejecutivo cambió las luces de su oficina y cambió la energía de todo su equipo. Cuando sostienes tu luz, las cosas se ordenan solas."
        slug="sostener-tu-luz"
        date="2026-08-21"
        tag="Alto rendimiento"
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
            Alto rendimiento
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Sostener tu luz: por qué imponerte es la estrategia equivocada
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Estaba trabajando con un ejecutivo que dirige un equipo grande. Un tipo capaz, resolutivo, acostumbrado a tirar del carro. Pero había algo que no funcionaba: cuanto más empujaba, más resistencia encontraba. Más tensión en las reuniones, más conflictos silenciosos, más agotamiento al final del día.
            </p>

            <p className="text-[15px] leading-relaxed">
              En mitad de la sesión le pregunté qué tipo de iluminación tenía en su oficina. LED, por supuesto. Frío, potente, funcional. Le pedí que se fijara en algo: el LED parpadea. No lo ves conscientemente, pero tu sistema nervioso sí lo registra. Ese parpadeo constante sobreestimula. Mantiene al sistema en alerta baja permanente. La luz incandescente, en cambio, es continua. Calma.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La metáfora que lo cambió todo
            </h2>

            <p className="text-[15px] leading-relaxed">
              Le dije: &ldquo;Notas ahora cómo te baja el ritmo?&rdquo; Lo notó. Y entonces le propuse algo concreto: cambiar las luces de su despacho. Parece insignificante. No lo es. Cambiar la iluminación de tu espacio cambia la energía de todo el equipo que entra en él. Y esto aplica a mucho más que bombillas.
            </p>

            <p className="text-[15px] leading-relaxed">
              Tú eres la luz de tu equipo. Si parpadeas &mdash;si estás reactivo, si empujas, si impones&mdash; todo el sistema a tu alrededor se sobreestimula. Si estás estable, continuo, presente, el sistema se regula contigo.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Sostener, no imponer
            </h2>

            <p className="text-[15px] leading-relaxed">
              &ldquo;Cuando tú estás desde esa energía es como que puedes... no tienes por qué imponerte, pero si tú sostienes tu luz, entonces las cosas se van a ordenar.&rdquo; No hablo de liderazgo blando. Hablo de un liderazgo que no necesita fuerza porque tiene presencia. Eso es algo que el cuerpo entiende antes que la mente. Un equipo centrado alrededor de alguien centrado genera una malla invisible. Una frecuencia que repele naturalmente lo que no encaja.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Cuando los límites se convierten en muros
            </h2>

            <p className="text-[15px] leading-relaxed">
              Hay una trampa frecuente en personas con posiciones de poder: confundir límites con muros. &ldquo;Los límites no se convierten en límites, sino que se convierten en muros y nadie se va a subir a ese muro.&rdquo; Un límite sano es claro y permeable. Un muro es rígido y aísla. Cuando lideras desde la imposición, construyes muros. Cuando lideras desde la presencia, estableces límites que la gente respeta naturalmente porque los siente, no porque los teme.
            </p>

            <p className="text-[15px] leading-relaxed">
              No necesitas gritar más fuerte. No necesitas controlar más. Necesitas regular tu propio sistema para que tu presencia sea la señal que ordena el espacio. Eso no se aprende en un MBA. Se aprende en el cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              La autoridad real no se impone. Se emite. Y cuando la emites desde un lugar regulado, las cosas a tu alrededor se ordenan sin que tengas que forzar nada.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si lideras un equipo y sientes que empujar ya no funciona, escríbeme. Te explico cómo trabajo con ejecutivos y perfiles de alto rendimiento.
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

          <RelatedArticles slug="sostener-tu-luz" lang="es" />
        </article>
      </main>
    </div>
  );
}
