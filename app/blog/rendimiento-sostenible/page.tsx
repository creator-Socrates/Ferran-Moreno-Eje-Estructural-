import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Rendimiento sostenible",
  description: "Puedes forzar durante años.",
  alternates: {
    canonical: "/blog/rendimiento-sostenible",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Rendimiento sostenible"
        description="Puedes forzar durante años."
        slug="rendimiento-sostenible"
        date="2026-09-21"
        tag="Alto rendimiento"
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
            Alto rendimiento
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Rendimiento sostenible
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              Puedes forzar durante años.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo te lo permite.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ese es precisamente el problema.
            </p>

            <p className="text-[15px] leading-relaxed">
              Muchas personas construyen su vida entera sobre compensación:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>más café,</li>
              <li>más esfuerzo,</li>
              <li>más horas,</li>
              <li>más control,</li>
              <li>más exigencia.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Y durante un tiempo funciona.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero el cuerpo siempre pasa factura.
            </p>

            <p className="text-[15px] leading-relaxed">
              El rendimiento sostenible no consiste en hacer menos.
            </p>

            <p className="text-[15px] leading-relaxed">
              Consiste en que el sistema pueda recuperarse de lo que le pides.
            </p>

            <p className="text-[15px] leading-relaxed">
              Esa diferencia lo cambia todo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque hay personas que aparentemente trabajan menos pero producen muchísimo más. No porque tengan más disciplina. Porque tienen un cuerpo que desperdicia menos energía sosteniendo tensión constante.
            </p>

            <p className="text-[15px] leading-relaxed">
              El rendimiento real depende de tres cosas:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>estructura,</li>
              <li>regulación,</li>
              <li>energía disponible.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Si la estructura está desorganizada, el cuerpo consume recursos simplemente para mantenerse operativo.
Si el sistema nervioso vive en alerta, gran parte de la energía se gasta sobreviviendo.
Si la respiración está alterada, todo el sistema funciona con menos margen.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y desde ahí, incluso tareas simples cuestan más.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso hay personas que sienten que viven &ldquo;tirando&rdquo; de sí mismas todo el tiempo.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo nunca termina de colaborar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Solo compensa.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando el sistema recupera organización, algo cambia:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>la recuperación mejora,</li>
              <li>el sueño profundiza,</li>
              <li>la claridad mental aumenta,</li>
              <li>la energía deja de irse en sostener tensión innecesaria.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Ahí aparece el verdadero rendimiento.
            </p>

            <p className="text-[15px] leading-relaxed">
              No el que nace de forzarte.
            </p>

            <p className="text-[15px] leading-relaxed">
              El que nace de tener un sistema eficiente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso cambia completamente la relación con el trabajo, el deporte y la vida.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo deja de sentirse como un obstáculo que hay que arrastrar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Empieza a sentirse como una infraestructura que sostiene.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y esa diferencia es enorme.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque la mayoría de personas no está cansada por hacer demasiado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Está cansada por cuánto esfuerzo interno requiere sostener lo que hace.
            </p>

            <p className="text-[15px] leading-relaxed">
              El rendimiento sostenible no consiste en apretar más.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Consiste en gastar menos energía sobreviviendo.
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
