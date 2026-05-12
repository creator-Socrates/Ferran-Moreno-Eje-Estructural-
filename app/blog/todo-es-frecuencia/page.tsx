import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Todo es frecuencia: los maestros que me enseñaron a sentir",
  description: "Mapa de 20 años de formación. Cada maestro corrigió algo del anterior. El resultado no es un método — es una caja de herramientas.",
  alternates: {
    canonical: "/blog/todo-es-frecuencia",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Todo es frecuencia: los maestros que me enseñaron a sentir"
        description="Mapa de 20 años de formación. Cada maestro corrigió algo del anterior. El resultado no es un método — es una caja de herramientas."
        slug="todo-es-frecuencia"
        date="2026-10-09"
        tag="Formación"
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
            Formación
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Todo es frecuencia: los maestros que me enseñaron a sentir
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Después de 7 años donde no podía encontrar una solución a mi propia lesión, ir encontrando la cantidad de herramientas que tenemos en este mundo fue espectacular. No fue un camino lineal. Fue una búsqueda en la que cada maestro me dio algo que el anterior no podía darme. Y cada uno corrigió algo que el anterior había dejado incompleto.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El inicio: silencio y respiración
            </h2>

            <p className="text-[15px] leading-relaxed">
              Todo empezó en una biblioteca pública siendo niño. Encontré un libro de zazen y budismo. Nadie me lo recomendó. Simplemente lo cogí y empecé a sentarme. Ahí aprendí algo que todavía uso: que el silencio no es ausencia. Es el espacio donde todo se organiza.
            </p>

            <p className="text-[15px] leading-relaxed">
              Después vino el Chi Kung con un irlandés ex-militar en Camboya. Un hombre que había pasado por la guerra y encontró en la energía lo que la fuerza bruta no podía darle. En Kuala Lumpur, yoga. Cada lugar añadía una capa.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Los que cambiaron la estructura
            </h2>

            <p className="text-[15px] leading-relaxed">
              Will Chung me enseñó artes marciales, movimiento y mente. Con él entendí que el cuerpo no se mueve desde los músculos sino desde la intención. Peter Schwind y Christoph Sommer me formaron en Rolfing en Munich. Con ellos aprendí a sentir las capas del cuerpo — piel, fascia, músculo, víscera, hueso — y a distinguir qué capa necesita atención y cuál no.
            </p>

            <p className="text-[15px] leading-relaxed">
              Jean Pierre Barral fue otro nivel. Osteopatía visceral. Órganos, emociones, percepción. Con Barral entendí que un hígado puede generar un dolor de hombro, que un intestino puede bloquear una lumbar, que el cuerpo es un sistema donde todo está conectado con todo.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El ancla
            </h2>

            <p className="text-[15px] leading-relaxed">
              Y luego Reyes — Rai Sromani. Llegó cuando yo estaba volando. Demasiada percepción, demasiada apertura, poco enraizamiento. Me enseñó a bajar. A estar aquí. A que la sensibilidad sin tierra es inestabilidad, no virtud.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cada maestro corrigió algo del anterior. El que me enseñó a sentir no me enseñó a aterrizar. El que me enseñó estructura no me enseñó energía. El que me enseñó energía no me enseñó límites. La formación real no es una línea recta. Es una espiral donde cada vuelta integra lo que faltaba.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Todo es frecuencia. Y cuando lo entiendes así, tiene más sentido. Lo que ofrezco no es un método. Es una caja de herramientas construida durante dos décadas de búsqueda por más de 20 países. Cada herramienta llegó porque la necesité. Y cada una se quedó porque funciona.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si quieres saber qué herramienta necesita tu cuerpo ahora mismo, escríbeme.
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

          <RelatedArticles slug="todo-es-frecuencia" lang="es" />
        </article>
      </main>
    </div>
  );
}