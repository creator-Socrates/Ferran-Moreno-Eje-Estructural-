import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "La tensión sostenida cambia quién crees que eres",
  description: "Cuando un cuerpo lleva demasiado tiempo en defensa, la tensión deja de sentirse como un estado.",
  alternates: {
    canonical: "/blog/la-tension-cambia-quien-crees-que-eres",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="La tensión sostenida cambia quién crees que eres"
        description="Cuando un cuerpo lleva demasiado tiempo en defensa, la tensión deja de sentirse como un estado."
        slug="la-tension-cambia-quien-crees-que-eres"
        date="2026-10-26"
        tag="Manifiesto"
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
            Manifiesto
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            La tensión sostenida cambia quién crees que eres
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              Cuando un cuerpo lleva demasiado tiempo en defensa, la tensión deja de sentirse como un estado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y empieza a sentirse como identidad.
            </p>

            <p className="text-[15px] leading-relaxed">
              &ldquo;Soy nervioso.&rdquo;
&ldquo;Soy tenso.&rdquo;
&ldquo;Soy impaciente.&rdquo;
&ldquo;No sé relajarme.&rdquo;
&ldquo;Soy así.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero muchas veces no eres así.
            </p>

            <p className="text-[15px] leading-relaxed">
              Es tu sistema nervioso funcionando desde un patrón que lleva tanto tiempo activo que ya no lo percibes como patrón.
            </p>

            <p className="text-[15px] leading-relaxed">
              Lo percibes como tú.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí está una de las trampas más profundas de la tensión crónica:
            </p>

            <p className="text-[15px] leading-relaxed">
              No solo cambia cómo te sientes.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cambia cómo te defines.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y desde esa definición tomas decisiones, construyes relaciones y organizas tu vida entera.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando el sistema finalmente regula, muchas personas descubren algo desconcertante:
            </p>

            <p className="text-[15px] leading-relaxed">
              La persona que creían ser no era ellos.
            </p>

            <p className="text-[15px] leading-relaxed">
              Era la tensión.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Y debajo de esa tensión había alguien que llevaba mucho tiempo esperando.
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
