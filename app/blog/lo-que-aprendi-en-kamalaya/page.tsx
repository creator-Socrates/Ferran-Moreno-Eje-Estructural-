import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Lo que aprendí en Kamalaya",
  description: "Kamalaya no era solo un resort de bienestar.",
  alternates: {
    canonical: "/blog/lo-que-aprendi-en-kamalaya",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Lo que aprendí en Kamalaya"
        description="Kamalaya no era solo un resort de bienestar."
        slug="lo-que-aprendi-en-kamalaya"
        date="2026-09-04"
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
            Lo que aprendí en Kamalaya
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              Kamalaya no era solo un resort de bienestar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Era un lugar donde el cuerpo podía bajar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y eso, hoy en día, es muchísimo más raro de lo que parece.
            </p>

            <p className="text-[15px] leading-relaxed">
              Llegué allí después de años de búsqueda, formación y trabajo intenso. Ya había estudiado estructura, fascia, osteopatía visceral y diferentes enfoques terapéuticos. Pero en Kamalaya entendí algo distinto:
la sanación no depende solo de la técnica.
            </p>

            <p className="text-[15px] leading-relaxed">
              Depende del estado completo del sistema.
            </p>

            <p className="text-[15px] leading-relaxed">
              El espacio.
El ritmo.
La comida.
El silencio.
La naturaleza.
La calidad humana.
La sensación de seguridad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Todo influía.
            </p>

            <p className="text-[15px] leading-relaxed">
              Allí veía personas llegar completamente agotadas:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>ejecutivos,</li>
              <li>artistas,</li>
              <li>empresarios,</li>
              <li>gente que llevaba años sosteniendo presión constante.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Y muchas veces lo primero que ocurría no era una &ldquo;mejoría espectacular&rdquo;.
            </p>

            <p className="text-[15px] leading-relaxed">
              Era algo mucho más profundo:
el cuerpo dejaba de luchar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Dormían.
Respiraban.
Lloraban.
Descansaban de verdad quizás por primera vez en años.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí entendí algo importante:
muchas personas no necesitan más información.
            </p>

            <p className="text-[15px] leading-relaxed">
              Necesitan menos amenaza.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque el sistema nervioso no se reorganiza en guerra constante.
            </p>

            <p className="text-[15px] leading-relaxed">
              Se reorganiza cuando encuentra condiciones donde ya no necesita defenderse todo el tiempo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Otra cosa que aprendí allí fue el valor del ritmo.
            </p>

            <p className="text-[15px] leading-relaxed">
              En Occidente mucha gente intenta sanar desde la urgencia:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>más técnicas,</li>
              <li>más intensidad,</li>
              <li>más biohacking,</li>
              <li>más productividad aplicada al bienestar.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Pero el cuerpo humano no funciona bien bajo presión permanente.
            </p>

            <p className="text-[15px] leading-relaxed">
              La naturaleza tiene ritmo.
Respiración.
Oscilación.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo también.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y cuando respetas eso, aparecen cambios mucho más profundos que los que puedes forzar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Kamalaya me recordó algo que después se convirtió en parte central de mi trabajo:
la presencia del terapeuta importa tanto como la técnica que aplica.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un sistema nervioso regulado regula.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un cuerpo organizado organiza.
            </p>

            <p className="text-[15px] leading-relaxed">
              La coherencia se transmite.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y muchas veces lo que más transforma a alguien no es una intervención espectacular.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Es sentirse por primera vez realmente seguro dentro de su propio cuerpo.
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
