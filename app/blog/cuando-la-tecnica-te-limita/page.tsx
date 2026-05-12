import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Cuando la técnica te limita: por qué dejé de forzar después de 20 años",
  description: "Después de 20 años aprendiendo técnicas, descubrí que la técnica puede ser el mayor obstáculo. Observar y permitir produce más cambio que forzar.",
  alternates: {
    canonical: "/blog/cuando-la-tecnica-te-limita",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Cuando la técnica te limita: por qué dejé de forzar después de 20 años"
        description="Después de 20 años aprendiendo técnicas, descubrí que la técnica puede ser el mayor obstáculo. Observar y permitir produce más cambio que forzar."
        slug="cuando-la-tecnica-te-limita"
        date="2026-08-14"
        tag="Proceso"
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
            Proceso
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Cuando la técnica te limita: por qué dejé de forzar después de 20 años
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Creo que no quiero seguir haciendo sesiones de la misma manera. Eso me dije. Después de dos décadas aprendiendo técnicas, formándome en 20 países, acumulando herramientas, sentí algo que no esperaba: fricción.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La fricción de tener que hacer
            </h2>

            <p className="text-[15px] leading-relaxed">
              Me anticipo a ese tener que hacer algo, y mi cuerpo está creando fricción. Tengo que hacer que esté mejor. Tengo que hacer que funcione. Tengo que hacer que cambie. Esa urgencia de producir un resultado, de justificar la sesión con un efecto visible, estaba generando exactamente lo contrario de lo que busco: tensión.
            </p>

            <p className="text-[15px] leading-relaxed">
              No era falta de herramientas. Era exceso. Cuando conocía una técnica me metía súper profundo hasta que me daba cuenta que la técnica me limitaba. Pasó con el Rolfing. Pasó con la osteopatía visceral. Pasó con el trabajo craneal. Cada sistema te da un marco, y ese marco eventualmente se convierte en una jaula.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              No soy nada de eso
            </h2>

            <p className="text-[15px] leading-relaxed">
              No he sido acupuntor, no he sido osteópata, no soy chamán. He estudiado todo eso. He practicado todo eso. Pero cada vez que alguien intentaba ponerme una etiqueta, sentía que la etiqueta me achicaba. Porque lo que hago no cabe en ninguna de esas cajas. Es la suma de todo, filtrada por 20 años de experiencia directa con cuerpos reales.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Permitir en vez de forzar
            </h2>

            <p className="text-[15px] leading-relaxed">
              La evolución fue aprender a permitir en vez de forzar. No necesito hacer nada. Estar allí, sentirla, observar, ver comportamientos, ver tensión, ver ejes, ver relaciones. Y entonces de ahí van surgiendo las soluciones inherentes del sistema.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo ya sabe qué necesita. Mi trabajo no es imponer una corrección. Es crear el espacio para que el sistema se reorganice. Parece menos. Es infinitamente más.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Después de 20 años acumulando técnicas, lo más potente que aprendí fue soltar la necesidad de usarlas. No es pasividad. Es presencia sin agenda.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si buscas a alguien que trabaje desde la escucha y no desde la imposición, escríbeme.
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

          <RelatedArticles slug="cuando-la-tecnica-te-limita" lang="es" />
        </article>
      </main>
    </div>
  );
}
