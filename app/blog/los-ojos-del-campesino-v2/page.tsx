import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Los ojos del campesino",
  description: "Estaba en mi trabajo. Oficina. Multinacional alemana.",
  alternates: {
    canonical: "/blog/los-ojos-del-campesino-v2",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Los ojos del campesino"
        description="Estaba en mi trabajo. Oficina. Multinacional alemana."
        slug="los-ojos-del-campesino-v2"
        date="2026-08-25"
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
            Mi historia
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Los ojos del campesino
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Estaba en mi trabajo. Oficina. Multinacional alemana.
            </p>

            <p className="text-[15px] leading-relaxed">
              Abrí el periódico y vi la foto de un hombre. Debía ser de Vietnam o de Camboya. Campesino.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y cuando vi los ojos de esa persona dije:
            </p>

            <p className="text-[15px] leading-relaxed">
              Yo quiero ser así de mayor.
            </p>

            <p className="text-[15px] leading-relaxed">
              Quiero tener esa tranquilidad. Quiero irradiar esa energía.
            </p>

            <p className="text-[15px] leading-relaxed">
              Alrededor de mí el mundo corporativo funcionaba de otra manera. No respetaban el cuerpo. No respetaban el sentirse bien. Siempre estaba el vicio, las infidelidades, las adicciones. Siempre esa necesidad de que nunca nada es suficiente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y los ojos de ese campesino tenían algo que nadie en esa oficina tenía.
            </p>

            <p className="text-[15px] leading-relaxed">
              Paz.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un jugador de póker dijo una vez que el objetivo en la vida era descubrir cuál era tu pasión. Y hasta que no lo sabías, tu objetivo era descubrir tu pasión.
            </p>

            <p className="text-[15px] leading-relaxed">
              Mi madre me apuntó a un curso de quiromasaje. Lunes y miércoles, de siete y media a nueve y media de la noche, en Sants. El horario encajaba con el trabajo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Empecé ahí.
            </p>

            <p className="text-[15px] leading-relaxed">
              Mientras mis compañeros de curso hicieron una, dos, tres prácticas, yo hice noventa y siete.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque para mí era algo muy serio.
            </p>

            <p className="text-[15px] leading-relaxed">
              Dejé un trabajo donde ganaba bien. Mis padres pensaban que estaba en una secta. La inversión fue de dieciocho mil euros en formación más cincuenta mil de oportunidad por lo que dejé de ganar.
            </p>

            <p className="text-[15px] leading-relaxed">
              No sabía que esa decisión iba a llevarme a Alemania, a Japón, a México, a Malasia, a veinte años de formación, a miles de cuerpos, a dejar una carrera entera.
            </p>

            <p className="text-[15px] leading-relaxed">
              Solo sabía que los ojos de ese campesino tenían algo que yo necesitaba encontrar.
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
