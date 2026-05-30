import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "El cuerpo cambia cuando deja de defenderse",
  description: "Muchos síntomas no son fallos.",
  alternates: getBlogAlternates("es", "el-cuerpo-cambia-cuando-deja-de-defenderse"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="El cuerpo cambia cuando deja de defenderse"
        description="Muchos síntomas no son fallos."
        slug="el-cuerpo-cambia-cuando-deja-de-defenderse"
        date="2026-08-07"
        tag="Trabajo corporal"
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
            Trabajo corporal
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            El cuerpo cambia cuando deja de defenderse
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Muchos síntomas no son fallos.
            </p>

            <p className="text-[15px] leading-relaxed">
              Son defensas.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo no genera tensión, rigidez o hipervigilancia porque sí. Lo hace porque en algún momento el sistema sintió que necesitaba protegerse.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y cuando esa protección se mantiene demasiado tiempo, lo que empezó como adaptación termina convirtiéndose en sufrimiento.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuello rígido.<br />
              La mandíbula apretada.<br />
              La respiración superficial.<br />
              El abdomen contraído.<br />
              La fatiga constante.<br />
              La ansiedad de fondo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Muchas veces no son el problema.
            </p>

            <p className="text-[15px] leading-relaxed">
              Son la estrategia.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo organiza tensión para sobrevivir.
            </p>

            <p className="text-[15px] leading-relaxed">
              El problema aparece cuando el sistema ya no sabe salir de ahí.
            </p>

            <p className="text-[15px] leading-relaxed">
              Entonces la protección se vuelve permanente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y el cuerpo empieza a vivir como si la amenaza todavía estuviera presente incluso cuando ya no existe.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso consume una cantidad enorme de energía.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque defenderse constantemente es agotador.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso hay personas que descansan y no recuperan.<br />
              Vacacionan y no bajan.<br />
              Duermen y siguen cansadas.
            </p>

            <p className="text-[15px] leading-relaxed">
              El sistema nunca deja realmente de vigilar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Lo interesante es lo rápido que puede cambiar el cuerpo cuando deja de sentirse amenazado.
            </p>

            <p className="text-[15px] leading-relaxed">
              He visto respiraciones abrirse en minutos. Posturas reorganizarse sin forzar. Dolores disminuir cuando el sistema deja de sostener defensa constante.
            </p>

            <p className="text-[15px] leading-relaxed">
              No porque alguien "arreglara" el cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque el cuerpo ya no necesitaba protegerse igual.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí ocurre algo muy importante: el sistema deja de gastar recursos sobreviviendo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y esa energía vuelve a estar disponible para:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>recuperarse,</li>
              <li>regenerarse,</li>
              <li>moverse,</li>
              <li>pensar,</li>
              <li>crear,</li>
              <li>descansar.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Muchas veces el cambio profundo no llega por hacer más.
            </p>

            <p className="text-[15px] leading-relaxed">
              Llega cuando el cuerpo finalmente recibe una señal que llevaba años esperando:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              "Ya no necesitas defenderte."
            </p>

            <p className="text-[15px] leading-relaxed">
              Y cuando esa señal entra de verdad, el cuerpo cambia muchísimo más rápido de lo que la mente imagina.
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
          <RelatedArticles slug="el-cuerpo-cambia-cuando-deja-de-defenderse" lang="es" />
        </article>
      </main>
    </div>
  );
}
