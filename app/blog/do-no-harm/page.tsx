import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Primero, no dañar",
  description: "La primera regla del trabajo corporal no está escrita en ningún libro.",
  alternates: {
    canonical: "/blog/do-no-harm",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Primero, no dañar"
        description="La primera regla del trabajo corporal no está escrita en ningún libro."
        slug="do-no-harm"
        date="2026-06-05"
        tag="Fundamentos"
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
            Fundamentos
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Primero, no dañar
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              La primera regla del trabajo corporal no está escrita en ningún libro.
            </p>

            <p className="text-[15px] leading-relaxed">
              No la enseñan en ninguna escuela.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero es la que lo cambia todo:
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              No dañar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando empecé mi formación de Rolfing, uno de los requisitos era recibir las diez sesiones de un practicante antes de entrar en la escuela.
            </p>

            <p className="text-[15px] leading-relaxed">
              Dos amigas mías del sudeste asiático fueron a hacerlas a Singapur.
            </p>

            <p className="text-[15px] leading-relaxed">
              El practicante usaba el codo como herramienta principal.
            </p>

            <p className="text-[15px] leading-relaxed">
              A full force.
            </p>

            <p className="text-[15px] leading-relaxed">
              En la cabeza.
            </p>

            <p className="text-[15px] leading-relaxed">
              En el pubis.
            </p>

            <p className="text-[15px] leading-relaxed">
              La experiencia fue traumática. Invasiva. Les generó lesiones.
            </p>

            <p className="text-[15px] leading-relaxed">
              No es que el Rolfing sea así.
            </p>

            <p className="text-[15px] leading-relaxed">
              Es que ese practicante trabajaba así.
            </p>

            <p className="text-[15px] leading-relaxed">
              Una compañera Rolfer habló con Jan Sultan, formado directamente por Ida Rolf. Él explicaba que en Estados Unidos hubo durante años confusión sobre si ciertos tipos de contacto podían interpretarse como harassment.
            </p>

            <p className="text-[15px] leading-relaxed">
              Para evitar malentendidos, muchos profesionales empezaron a trabajar con mucha presión.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y así nació parte de la fama del &ldquo;Rolfing doloroso&rdquo;.
            </p>

            <p className="text-[15px] leading-relaxed">
              En Europa la historia fue distinta.
            </p>

            <p className="text-[15px] leading-relaxed">
              Aquí se integró antes la sutileza.
            </p>

            <p className="text-[15px] leading-relaxed">
              La osteopatía francesa de Jean-Pierre Barral y Alain Croibier.
            </p>

            <p className="text-[15px] leading-relaxed">
              El Somatic Experiencing de Peter Levine.
            </p>

            <p className="text-[15px] leading-relaxed">
              El trabajo con el sistema nervioso.
            </p>

            <p className="text-[15px] leading-relaxed">
              El resultado fue un Rolfing más preciso, más sutil y más respetuoso con el sistema.
            </p>

            <p className="text-[15px] leading-relaxed">
              Yo me formé en la Escuela Europea de Rolfing en Múnich. Completé todos los cursos del Group of Munich: listening techniques, manipulación visceral, nervios periféricos, tórax. Con Barral, Croibier, Didier Prat y Peter Schwind.
            </p>

            <p className="text-[15px] leading-relaxed">
              En mi trabajo, la intención nunca es generar dolor.
            </p>

            <p className="text-[15px] leading-relaxed">
              Es organizar.
Liberar.
Devolver coherencia al cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Puede haber intensidad. Puede haber sensaciones fuertes.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero intensidad no es invasión.
            </p>

            <p className="text-[15px] leading-relaxed">
              La diferencia es sencilla.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando fuerzas, el cuerpo se defiende.
Se contrae.
Se cierra.
Consigues lo contrario de lo que buscas.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando escuchas, el cuerpo abre.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un contacto preciso, con la intención correcta, en el lugar exacto, genera más cambio que diez minutos de presión bruta.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo no necesita que lo aplastes.
            </p>

            <p className="text-[15px] leading-relaxed">
              Necesita que lo escuches.
            </p>

            <p className="text-[15px] leading-relaxed">
              A veces venían personas de Estados Unidos a mi consulta pidiendo un masaje durísimo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Algo que yo no practico.
            </p>

            <p className="text-[15px] leading-relaxed">
              Si buscas ese estilo, mi enfoque no es el adecuado para ti.
            </p>

            <p className="text-[15px] leading-relaxed">
              La precisión siempre gana a la fuerza.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y la primera regla — la que no está escrita en ningún sitio pero sostiene todo lo demás — es muy simple:
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              No dañar.
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
