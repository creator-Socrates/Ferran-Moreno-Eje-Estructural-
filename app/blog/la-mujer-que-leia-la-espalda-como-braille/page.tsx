import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "La mujer que leía la espalda como braille",
  description: "Robleda. Un pueblo pequeño.",
  alternates: {
    canonical: "/blog/la-mujer-que-leia-la-espalda-como-braille",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="La mujer que leía la espalda como braille"
        description="Robleda. Un pueblo pequeño."
        slug="la-mujer-que-leia-la-espalda-como-braille"
        date="2026-08-28"
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
            La mujer que leía la espalda como braille
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              Robleda. Un pueblo pequeño.
            </p>

            <p className="text-[15px] leading-relaxed">
              Me llevaron a ver a una curandera de huesos. Había aprendido su oficio arreglando los huesos de las cabras.
            </p>

            <p className="text-[15px] leading-relaxed">
              Mientras esperaba turno, sentí que me desvanecía. Me agarré a mi amigo Diego. De repente, black out.
            </p>

            <p className="text-[15px] leading-relaxed">
              Estaba flotando. Todo oscuro. Muy agradable. Había como una luz. Estaba subiendo.
            </p>

            <p className="text-[15px] leading-relaxed">
              &ldquo;No es tu hora.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              Y justo en el momento que sentí eso, volví. La señora de Robleda me estaba echando un cubo de agua por la cara para despertarme.
            </p>

            <p className="text-[15px] leading-relaxed">
              Me hizo pasar para adentro. Me dio leche de cabra con limón. Y me atendió.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando llegó mi turno, me sentó en una silla. Sus dedos empezaron a recorrer mi espalda. Eran capaces de leer a través de las diferentes capas del cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Dijo: &ldquo;Este niño ha tenido mucho dolor, pero ya está bien.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              Luego me hizo recostarme hacia adelante y me siguió vértebra a vértebra de manera experta. Fue espectacular.
            </p>

            <p className="text-[15px] leading-relaxed">
              Lo que más me impactó: las personas mayores del pueblo tenían mejor postura que nadie que hubiera visto en la ciudad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Generaciones enteras habían pasado por esas manos.
            </p>

            <p className="text-[15px] leading-relaxed">
              Aunque cuando salí de allí lo primero que hice fue vomitar la leche de cabra con limón.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Hay un conocimiento en las manos que ningún título puede dar.
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
