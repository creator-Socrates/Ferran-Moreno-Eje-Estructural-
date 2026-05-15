import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Qué te diría tu yo de dentro de 20 años",
  description: "El ejercicio del yo futuro: visualiza quién serás dentro de 20 años y deja que esa versión te escriba una carta con 3 consejos concretos.",
  alternates: {
    canonical: "/blog/que-te-diria-tu-yo-del-futuro",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Qué te diría tu yo de dentro de 20 años"
        description="El ejercicio del yo futuro: visualiza quién serás dentro de 20 años y deja que esa versión te escriba una carta con 3 consejos concretos."
        slug="que-te-diria-tu-yo-del-futuro"
        date="2026-09-18"
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
            Qué te diría tu yo de dentro de 20 años
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Cierra los ojos. Imagínate con 20 años más. ¿Qué aspecto tiene esa persona? ¿Dónde vive? ¿A qué se dedica? ¿Cómo se mueve? ¿Qué le importa?
            </p>

            <p className="text-[15px] leading-relaxed">
              No pienses en lo que &ldquo;deberías&rdquo; ser. Observa lo que aparece. Lo que tu cuerpo te muestra cuando le preguntas, sin filtros.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La carta
            </h2>

            <p className="text-[15px] leading-relaxed">
              Ahora escribe una carta desde esa versión futura hacia ti. No desde tu cabeza actual. Desde esa persona que ya ha vivido los próximos 20 años. Que ya sabe lo que funcionó y lo que no. Que ya no tiene prisa.
            </p>

            <p className="text-[15px] leading-relaxed">
              Escríbela en primera persona. Y que incluya tres consejos concretos. No filosofía. No frases bonitas. Tres cosas que harías diferente si pudieras hablar con tu yo de ahora.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Sueño vs. ilusión
            </h2>

            <p className="text-[15px] leading-relaxed">
              La brecha entre lo que dices que quieres y lo que realmente haces genera ansiedad. Esa brecha es la fuente de casi toda la tensión existencial que conozco.
            </p>

            <p className="text-[15px] leading-relaxed">
              La mayoría confunde un sueño con una ilusión. Un sueño tiene compromiso y pasos. Hay una dirección, hay acción, hay algo que haces cada día que te acerca. Una ilusión es desear sin estructura. Es querer sin mover. Es esperar que algo cambie mientras todo sigue igual.
            </p>

            <p className="text-[15px] leading-relaxed">
              Si la carta de tu yo futuro te señala cosas que llevas meses o años sin hacer, no es una carta motivacional. Es un diagnóstico.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              No hacer también es una acción
            </h2>

            <p className="text-[15px] leading-relaxed">
              A veces la acción más poderosa es no hacer nada. Pero solo cuando viene desde la claridad. No hacer desde la evitación es parálisis disfrazada de paciencia. No hacer desde la claridad es espera consciente, es saber que ahora no toca.
            </p>

            <p className="text-[15px] leading-relaxed">
              La diferencia la sientes en el cuerpo. La evitación pesa. La claridad no.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El ejercicio
            </h2>

            <p className="text-[15px] leading-relaxed font-medium">
              Hazlo hoy. 15 minutos. Visualiza a tu yo futuro. Escribe la carta con los 3 consejos. Y luego mira tu semana y pregúntate: ¿algo de lo que hago esta semana me acerca a esa persona? Si la respuesta es no, ya sabes por dónde empezar.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si necesitas ayuda para cerrar la brecha entre lo que quieres y lo que haces, podemos trabajar juntos.
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

          <RelatedArticles slug="que-te-diria-tu-yo-del-futuro" lang="es" />
        </article>
      </main>
    </div>
  );
}
