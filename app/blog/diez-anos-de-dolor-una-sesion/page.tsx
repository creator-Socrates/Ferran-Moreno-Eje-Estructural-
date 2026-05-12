import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Diez años de dolor que se resolvieron en una sesión",
  description: "A los 17 una lesión de taekwondo me dejó una década de dolor crónico. Un día, un ajuste sacro lo cambió todo.",
  alternates: {
    canonical: "/blog/diez-anos-de-dolor-una-sesion",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Diez años de dolor que se resolvieron en una sesión"
        description="A los 17 una lesión de taekwondo me dejó una década de dolor crónico. Un día, un ajuste sacro lo cambió todo."
        slug="diez-anos-de-dolor-una-sesion"
        date="2026-07-17"
        tag="Mi historia"
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
            Mi historia
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Diez años de dolor que se resolvieron en una sesión
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              A los 17 años me lesioné haciendo taekwondo. Lo que parecía una lesión más se convirtió en una década de dolor crónico. No podía levantar una garrafa de agua. No podía dormir bien. No podía funcionar como una persona normal.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El médico que me dijo que no volviera
            </h2>

            <p className="text-[15px] leading-relaxed">
              Pasé por todos los sitios que te puedas imaginar. Fisioterapeutas, traumatólogos, osteópatas. Nada funcionaba. Hasta que un médico me miró a los ojos y me dijo: &ldquo;No puedo ayudarte. No vuelvas.&rdquo; Así, sin más. Sin alternativa, sin derivación, sin esperanza. Simplemente: no vuelvas.
            </p>

            <p className="text-[15px] leading-relaxed">
              Le dije a mi madre: &ldquo;Vamos a encontrar una solución.&rdquo; Pero por dentro había algo que se estaba rompiendo. Hubo un momento &mdash; breve pero real &mdash; en que no quería seguir viviendo. No era un plan. Era un cansancio de estar sufriendo constantemente. De no ver salida. De que nadie pudiera hacer nada.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Josep en la feria de Construmat
            </h2>

            <p className="text-[15px] leading-relaxed">
              Y entonces apareció Josep. Lo conocí en la feria de Construmat, de todas las cosas. Me dijo que podía ayudarme. Le pregunté cuáles eran los pros y los contras. Me contestó: &ldquo;Pros: te va a dejar de doler. Contras: no hay ninguno.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              Me hizo un ajuste en el sacro. Algo que duró segundos. Sin violencia, sin crujidos, sin drama. Y cuando me levanté de la camilla, yo estaba llorando. No de dolor. De otra cosa. Había algo que había cambiado. Era como una calma que nunca había estado allí. Como si mi sistema nervioso hubiera estado gritando durante diez años y de repente alguien hubiera encontrado el interruptor.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El Hulk de las escaleras
            </h2>

            <p className="text-[15px] leading-relaxed">
              Ese mismo día subí siete pisos por las escaleras sin dolor. Siete pisos. Yo, que no podía levantar una garrafa. Fui al supermercado y cargué todas las bolsas de la compra más dos garrafas de agua. Me sentía como el Hulk. Con una fuerza descomunal. Como si me hubieran devuelto un cuerpo que no sabía que tenía.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Diez años de dolor. Una sesión. Ese día cambió mi vida. Y ese día decidí que quería entender qué había pasado en esa camilla. Esa búsqueda todavía no ha terminado.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si llevas años con dolor y nadie te ha dado una respuesta, escríbeme. A veces el cambio está más cerca de lo que piensas.
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

          <RelatedArticles slug="diez-anos-de-dolor-una-sesion" lang="es" />
        </article>
      </main>
    </div>
  );
}
