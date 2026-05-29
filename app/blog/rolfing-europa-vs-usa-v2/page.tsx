import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "Rolfing en Europa vs USA",
  description: "Hay dos linajes del Rolfing que parten de la misma fuente pero evolucionaron de formas muy distintas.",
  alternates: getBlogAlternates("es", "rolfing-europa-vs-usa-v2"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Rolfing en Europa vs USA"
        description="Hay dos linajes del Rolfing que parten de la misma fuente pero evolucionaron de formas muy distintas."
        slug="rolfing-europa-vs-usa-v2"
        date="2026-08-11"
        tag="Rolfing"
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
            Rolfing
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Rolfing en Europa vs USA
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Hay dos linajes del Rolfing que parten de la misma fuente pero evolucionaron de formas muy distintas.
            </p>

            <p className="text-[15px] leading-relaxed">
              En Estados Unidos, los primeros practicantes después de Ida Rolf trabajaban con mucha presión. Codos. Fuerza. Intensidad como norma.
            </p>

            <p className="text-[15px] leading-relaxed">
              Jan Sultan, formado directamente por Ida Rolf, explicaba algo que poca gente sabe: durante años en Estados Unidos hubo confusión sobre si ciertos tipos de contacto manual podían interpretarse como harassment. Para evitar malentendidos, muchos profesionales empezaron a trabajar con más presión de la necesaria.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y así nació gran parte de la fama del "Rolfing doloroso."
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando empecé mi formación, uno de los requisitos era recibir las diez sesiones de un practicante. Dos amigas mías del sudeste asiático fueron a hacerlas a un Rolfer en Singapur. Usaba el codo como herramienta principal. A full force. En la cabeza. En el pubis.
            </p>

            <p className="text-[15px] leading-relaxed">
              La experiencia fue traumática.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso no debería pasar.
            </p>

            <p className="text-[15px] leading-relaxed">
              En Europa la historia fue distinta.
            </p>

            <p className="text-[15px] leading-relaxed">
              Aquí se integró antes la influencia de la osteopatía francesa: Jean-Pierre Barral, Alain Croibier. El trabajo visceral. La escucha tisular. También llegó el Somatic Experiencing de Peter Levine, que aportó la comprensión del sistema nervioso y del trauma.
            </p>

            <p className="text-[15px] leading-relaxed">
              El resultado fue un Rolfing más preciso. Más sutil. Más respetuoso con el sistema.
            </p>

            <p className="text-[15px] leading-relaxed">
              Yo me formé en la Escuela Europea de Rolfing en Múnich. Completé todos los cursos del Group of Munich con Barral, Croibier, Didier Prat y Peter Schwind.
            </p>

            <p className="text-[15px] leading-relaxed">
              En mi trabajo, la intención nunca es generar dolor.
            </p>

            <p className="text-[15px] leading-relaxed">
              Es organizar.<br />
              Liberar.<br />
              Devolver coherencia al cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Puede haber intensidad. Pero intensidad no es invasión.
            </p>

            <p className="text-[15px] leading-relaxed">
              A veces venían personas de Estados Unidos a mi consulta pidiendo un masaje durísimo. Algo que yo no practico.
            </p>

            <p className="text-[15px] leading-relaxed">
              La primera regla no escrita de este trabajo es muy simple:
            </p>

            <p className="text-[15px] leading-relaxed">
              No dañar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Si buscas un estilo agresivo, mi enfoque no es el adecuado para ti.
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
