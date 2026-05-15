import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Tu respiración cambia antes que tus pensamientos",
  description: "Mucho antes de que aparezca una emoción consciente, el cuerpo ya modificó la respiración.",
  alternates: {
    canonical: "/blog/tu-respiracion-cambia-antes",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Tu respiración cambia antes que tus pensamientos"
        description="Mucho antes de que aparezca una emoción consciente, el cuerpo ya modificó la respiración."
        slug="tu-respiracion-cambia-antes"
        date="2026-07-10"
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
            Tu respiración cambia antes que tus pensamientos
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              Mucho antes de que aparezca una emoción consciente, el cuerpo ya modificó la respiración.
            </p>

            <p className="text-[15px] leading-relaxed">
              La respiración es uno de los indicadores más honestos del estado interno.
            </p>

            <p className="text-[15px] leading-relaxed">
              No miente.
No racionaliza.
No se adapta a lo que quieres creer.
            </p>

            <p className="text-[15px] leading-relaxed">
              Simplemente refleja lo que está ocurriendo en el sistema.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando hay amenaza, se acorta.
Cuando hay seguridad, se profundiza.
Cuando hay defensa, sube al pecho.
Cuando hay calma, baja al abdomen.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y todo eso ocurre antes de que tengas un pensamiento sobre lo que está pasando.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso observar la respiración de alguien me dice más que cualquier cuestionario.
            </p>

            <p className="text-[15px] leading-relaxed">
              En los primeros segundos ya veo dónde respira, cuánto rango tiene, qué zonas están bloqueadas, qué está sosteniendo el sistema.
            </p>

            <p className="text-[15px] leading-relaxed">
              La respiración es la primera puerta.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y muchas veces también la primera en cambiar cuando el cuerpo empieza a soltar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Antes de que la persona lo note.
Antes de que lo entienda.
Antes de que pueda explicarlo.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              El cuerpo ya está respondiendo.
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
