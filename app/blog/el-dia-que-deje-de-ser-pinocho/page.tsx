import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "El día que dejé de ser Pinocho",
  description: "Mi cuerpo era como un trozo de madera. Hasta que una mano me mostró que las vértebras se mueven y el dolor puede desaparecer.",
  alternates: {
    canonical: "/blog/el-dia-que-deje-de-ser-pinocho",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="El día que dejé de ser Pinocho"
        description="Mi cuerpo era como un trozo de madera. Hasta que una mano me mostró que las vértebras se mueven y el dolor puede desaparecer."
        slug="el-dia-que-deje-de-ser-pinocho"
        date="2026-07-28"
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
            El día que dejé de ser Pinocho
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Antes de conocer a Josep Castellà, mi relación con mi cuerpo era mecánica. Para mí la cadera era como un trozo de madera, como si yo fuese Pinocho. No entraba la idea de que pudiese haber movimiento dentro. Era como una pieza de un coche. Un tornillo que está mal y lo colocas bien. Así entendía yo mi propio cuerpo.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El cuchillo en el esternón
            </h2>

            <p className="text-[15px] leading-relaxed">
              Tenía un dolor crónico en el esternón. Como un cuchillo clavado. Constante. Llevaba años con él. Lo había normalizado como quien normaliza el ruido de fondo de una ciudad. Estaba siempre ahí, pero había dejado de esperar que desapareciera.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La revelación
            </h2>

            <p className="text-[15px] leading-relaxed">
              Y entonces, en una sesión con Josep, pasó algo. Cuando de repente noto por primera vez que está tocando la vértebra y puedo sentir que la vértebra está rotada... eso para mí fue como una revelación. No era teoría. No era un diagrama en un libro. Era mi cuerpo diciéndome algo que nunca le había escuchado decir.
            </p>

            <p className="text-[15px] leading-relaxed">
              Sin hacer ningún daño, sin crujirte, sin ningún tipo de agresión, haciéndolo muy sutilmente, el dolor desaparece y no vuelve a aparecer. Un cambio de paradigma. Todo lo que yo había entendido sobre el cuerpo &mdash; que era mecánico, que había que forzar, que el dolor era inevitable &mdash; se cayó en ese instante.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              De madera a cuerpo vivo
            </h2>

            <p className="text-[15px] leading-relaxed">
              Dejé de ser Pinocho ese día. Mi cuerpo dejó de ser un objeto y empezó a ser un sistema vivo, con capas, con inteligencia, con una capacidad de reorganizarse que yo no sabía que existía.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Es algo magnífico que mucha gente nunca ha tenido la oportunidad de sentir. Descubrir que tu cuerpo no es una máquina que se rompe, sino un sistema que puede encontrar su orden cuando alguien sabe dónde y cómo tocar.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si sientes que tu cuerpo es algo rígido que no responde, quizá solo necesita que alguien lo escuche de otra manera.
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

          <RelatedArticles slug="el-dia-que-deje-de-ser-pinocho" lang="es" />
        </article>
      </main>
    </div>
  );
}
