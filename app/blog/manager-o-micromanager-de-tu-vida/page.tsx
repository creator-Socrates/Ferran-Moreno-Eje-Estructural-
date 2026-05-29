import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "Manager o micromanager de tu propia vida",
  description: "Cuando haces micromanagement de los problemas de otros, pierdes la gestión de tu propia vida. Deja de trabajar en crisis y empieza a gestionar desde arriba.",
  alternates: getBlogAlternates("es", "manager-o-micromanager-de-tu-vida"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Manager o micromanager de tu propia vida"
        description="Cuando haces micromanagement de los problemas de otros, pierdes la gestión de tu propia vida. Deja de trabajar en crisis y empieza a gestionar desde arriba."
        slug="manager-o-micromanager-de-tu-vida"
        date="2026-09-04"
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
            Manager o micromanager de tu propia vida
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              No tienes que conectar con todo. Lo que te hace daño es bajar al micromanagement, convertirte en micromanager y entonces perder la gestión. Perder el management de tu propia vida, de tu felicidad, de tu bienestar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Lo veo todo el tiempo. Personas que se meten en los problemas de los demás con una dedicación absoluta. El drama del compañero de trabajo. La crisis de la amiga. El conflicto familiar que no les toca resolver. Bajan al detalle de cada situación ajena y cuando levantan la cabeza, su propia vida está desatendida.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Yo ya no trabajo en crisis
            </h2>

            <p className="text-[15px] leading-relaxed">
              Tenía un cliente que venía tres veces al mes en modo crisis. Tres sesiones de emergencia. Y cada vez la historia era la misma: se había sentido fatal, le dolía todo, sentía que se moría. Cada vez. Y cada vez, al revisar qué había pasado esa semana, aparecían los mismos protagonistas: cruasanes, café, vino y queso curado.
            </p>

            <p className="text-[15px] leading-relaxed">
              No es que estos alimentos sean veneno. Es que cuando tu sistema ya está comprometido, son el detonante. El alcohol, el queso curado y el café aumentan la histamina. La histamina activa el cortisol. El cortisol dispara la inflamación. Y de repente te sientes como si te fueras a morir. Pero no te estás muriendo. Estás activando un sistema que ya estaba al límite.
            </p>

            <p className="text-[15px] leading-relaxed">
              Le dije: &ldquo;Yo ya no trabajo en crisis. Si tú quieres seguir viniendo en modo emergencia, busca a otro. Yo trabajo en gestión. En prevención. En que entiendas por qué tu cuerpo responde así y dejes de provocarlo.&rdquo;
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La gestión empieza arriba
            </h2>

            <p className="text-[15px] leading-relaxed">
              Un buen manager no está apagando fuegos todo el día. Está arriba, viendo el sistema completo, tomando decisiones que previenen los incendios. Lo mismo aplica a tu vida. Si estás constantemente en modo crisis &mdash;reaccionando a lo que pasa, resolviendo urgencias que tú mismo provocas&mdash; no estás gestionando. Estás sobreviviendo.
            </p>

            <p className="text-[15px] leading-relaxed">
              La muerte es muy cabrona, porque te pone las cosas delante. Te pone delante lo que importa. Y cuando alguien cercano muere o tú mismo rozas un susto serio, de repente ves con una claridad brutal lo que estabas haciendo con tu tiempo y tu energía. Micromanaging de lo que no importa. Mientras lo que importa se te escapaba.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Subir de nivel
            </h2>

            <p className="text-[15px] leading-relaxed">
              Deja de bajar al barro de cada drama. Deja de hacer micromanagement de los problemas de los demás. Deja de provocar tus propias crisis con hábitos que sabes que te destruyen. Sube. Gestiona desde arriba. Observa el sistema completo. Toma decisiones que protejan tu energía, tu salud, tu paz.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              La pregunta no es si eres capaz de gestionar. La pregunta es a qué nivel estás gestionando. Si estás en el microdetalle de la vida de otros, ya has perdido la gestión de la tuya.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si sientes que vives apagando fuegos y quieres empezar a gestionar tu vida desde otro nivel, escríbeme.
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

          <RelatedArticles slug="manager-o-micromanager-de-tu-vida" lang="es" />
        </article>
      </main>
    </div>
  );
}
