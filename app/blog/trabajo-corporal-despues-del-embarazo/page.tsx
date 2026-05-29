import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "Trabajo corporal después del embarazo: recuperación postparto real",
  description: "El embarazo reorganiza todo el cuerpo. La recuperación postparto real no es abdominales y suelo pélvico aislados: es reorganizar el sistema completo.",
  alternates: getBlogAlternates("es", "trabajo-corporal-despues-del-embarazo"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Trabajo corporal después del embarazo: recuperación postparto real"
        description="El embarazo reorganiza todo el cuerpo. La recuperación postparto real no es abdominales y suelo pélvico aislados: es reorganizar el sistema completo."
        slug="trabajo-corporal-despues-del-embarazo"
        date="2026-06-02"
        tag="Postparto"
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
            <Link href="/#como-trabajo" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Método</Link>
            <Link href="/#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Casos</Link>
            <Link href="/#para-quien" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Para quién</Link>
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
            Postparto
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Trabajo corporal después del embarazo: por qué abdominales y suelo pélvico no son suficientes
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              El embarazo reorganiza el cuerpo entero. Pelvis, diafragma, suelo pélvico, abdominales, caja torácica, hormonas. Todo cambia para crear espacio y sostener una vida. El problema es lo que pasa después.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El enfoque habitual y sus límites
            </h2>

            <p className="text-[15px] leading-relaxed">
              La mayoría de programas de recuperación postparto se centran en abdominales y suelo pélvico. Hipopresivos, Kegels, ejercicios de activación. No está mal, pero es incompleto. Porque el cuerpo es un sistema, no una colección de piezas aisladas.
            </p>

            <p className="text-[15px] leading-relaxed">
              Si la caja torácica no ha vuelto a su posición previa al embarazo, los abdominales no van a recuperarse bien. La caja torácica es el anclaje superior del recto abdominal. Si ese anclaje está desplazado, el músculo trabaja en desventaja mecánica. Puedes hacer hipopresivos durante meses y no avanzar.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La pelvis manda
            </h2>

            <p className="text-[15px] leading-relaxed">
              Si la pelvis se desplazó durante el embarazo o el parto &mdash;y casi siempre lo hace&mdash; el suelo pélvico no puede estabilizar correctamente. El suelo pélvico depende de la posición de los huesos a los que se ancla. Si los huesos están desplazados, el suelo pélvico trabaja con una geometría alterada. Ningún ejercicio compensa eso.
            </p>

            <p className="text-[15px] leading-relaxed">
              Lo mismo ocurre con el sacro, el cóccix y las articulaciones sacroilíacas. El parto las moviliza, a veces de forma significativa. Si no se reorganizan después, todo lo que se construye encima queda inestable.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Reorganizar, no &laquo;recuperar&raquo;
            </h2>

            <p className="text-[15px] leading-relaxed">
              No se trata de &laquo;recuperar el cuerpo de antes&raquo;. El cuerpo ha cambiado. Ha hecho algo extraordinario. Se trata de reorganizar el sistema para su nueva realidad. Que la pelvis esté centrada. Que el diafragma se mueva bien. Que la caja torácica tenga su movilidad. Que el suelo pélvico tenga la base estructural que necesita para funcionar.
            </p>

            <p className="text-[15px] leading-relaxed">
              En mi trabajo, abordo todo esto como un sistema. Caja torácica, diafragma, pelvis, sacro, suelo pélvico, vísceras abdominales y pélvicas. No por separado. En relación.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Lo que dice quien lo ha vivido
            </h2>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              &laquo;Ferran Moreno es un gran profesional. Acabo de dar a luz y gracias a su método... he notado un cambio radical en mi cuerpo.&raquo;
            </p>
            <p className="text-[13px] mb-6" style={{ color: "var(--text-secondary)" }}>
              &mdash; Bianca Porcar
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              La recuperación postparto real no empieza por los ejercicios. Empieza por reorganizar la estructura que los sostiene.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si estás en postparto y sientes que algo no termina de encajar, escríbeme. Miramos el sistema completo.
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

          <RelatedArticles slug="trabajo-corporal-despues-del-embarazo" lang="es" />
        </article>
      </main>
    </div>
  );
}
