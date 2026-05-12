import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Bara bala: no puedes sentir sin creer",
  description: "No puedes tener una emoción sin un pensamiento. Cambia la creencia y la emoción cambia. Tu mente miente cerca del cambio.",
  alternates: {
    canonical: "/blog/bara-bala-no-puedes-sentir-sin-creer",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Bara bala: no puedes sentir sin creer"
        description="No puedes tener una emoción sin un pensamiento. Cambia la creencia y la emoción cambia. Tu mente miente cerca del cambio."
        slug="bara-bala-no-puedes-sentir-sin-creer"
        date="2026-10-06"
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
            Bara bala: no puedes sentir sin creer
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Bara bala. Tu cerebro está recibiendo esa información ahora mismo. Bara bala. Y no produce absolutamente nada. Ninguna emoción. Ninguna reacción. Ningún movimiento interno. Porque no tienes un pensamiento ni una definición asociada a esas palabras.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahora piensa en algo que te preocupa. Tu cuerpo reacciona al instante. Se contrae algo. Cambia la respiración. Sube la frecuencia cardíaca. La diferencia entre bara bala y tu preocupación es una sola cosa: una creencia.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Sin pensamiento no hay emoción
            </h2>

            <p className="text-[15px] leading-relaxed">
              No puedes tener una emoción sin un pensamiento previo. Es imposible. Si te digo una palabra que no tiene significado para ti, tu cerebro produce cero respuesta emocional. Esto significa algo enorme: la emoción que sientes ahora mismo no la genera la realidad. La genera una creencia sobre la realidad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Esto no es filosofía. Es mecánica. Tu sistema nervioso responde a lo que tu mente interpreta, no a lo que ocurre. Cambia la interpretación y la respuesta emocional cambia. No inmediatamente. No sin trabajo. Pero cambia.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La mente miente cerca del cambio
            </h2>

            <p className="text-[15px] leading-relaxed">
              Aquí viene lo interesante. Cuando estás cerca de un cambio estructural real — cuando algo en tu sistema está a punto de reorganizarse — la mente de supervivencia entra en pánico. Y fabrica mentiras que suenan perfectamente lógicas.
            </p>

            <p className="text-[15px] leading-relaxed">
              &ldquo;Esto no funciona.&rdquo; &ldquo;Estoy peor que antes.&rdquo; &ldquo;Debería dejarlo.&rdquo; Las mentiras están diseñadas para ser lógicas. Esa es su trampa. Si fueran absurdas no te las creerías. Pero suenan razonables, y por eso las compras.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La confianza irradia de dentro hacia fuera
            </h2>

            <p className="text-[15px] leading-relaxed">
              La confianza no se construye acumulando evidencias externas. No viene de que alguien te demuestre que funciona. Irradia de dentro hacia fuera. Primero confías. Después ves. No al revés.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Si bara bala no te produce nada, ya tienes la prueba. Tus emociones no son la realidad. Son la historia que te cuentas sobre ella. Cambia la historia y todo cambia.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si sientes que tus emociones te secuestran y quieres entender qué creencias las sostienen, escríbeme.
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

          <RelatedArticles slug="bara-bala-no-puedes-sentir-sin-creer" lang="es" />
        </article>
      </main>
    </div>
  );
}