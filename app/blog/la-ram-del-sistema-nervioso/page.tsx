import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "La RAM de tu sistema nervioso",
  description: "Tu sistema nervioso tiene capacidad limitada.",
  alternates: getBlogAlternates("es", "la-ram-del-sistema-nervioso"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="La RAM de tu sistema nervioso"
        description="Tu sistema nervioso tiene capacidad limitada."
        slug="la-ram-del-sistema-nervioso"
        date="2026-06-30"
        tag="Sistema nervioso"
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
            Sistema nervioso
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            La RAM de tu sistema nervioso
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Tu sistema nervioso tiene capacidad limitada.
            </p>

            <p className="text-[15px] leading-relaxed">
              Como la memoria de un ordenador.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando toda la RAM está ocupada sosteniendo estrés, conflictos, deudas, hijos, relaciones complicadas, incertidumbre laboral — no queda espacio para nada más.
            </p>

            <p className="text-[15px] leading-relaxed">
              No queda espacio para entrenar.<br />
              Para crear.<br />
              Para recuperarse.<br />
              Para pensar con claridad.<br />
              Para estar presente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y entonces aparece la culpa:
            </p>

            <p className="text-[15px] leading-relaxed">
              "No tengo disciplina."<br />
              "Soy vago."<br />
              "No me organizo bien."<br />
              "No sé por qué no puedo hacer lo que sé que debería hacer."
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero no es falta de voluntad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Es falta de recursos disponibles.
            </p>

            <p className="text-[15px] leading-relaxed">
              Tu sistema está al cien por cien de capacidad sosteniendo supervivencia.
            </p>

            <p className="text-[15px] leading-relaxed">
              Me pasó a mí. Hubo una etapa de seis o siete meses donde no podía entrenar. Mi rendimiento estaba al tres por ciento. Tenía problemas digestivos por estrés. Deudas. Tres hijos pequeños. El cuerpo simplemente no tenía margen.
            </p>

            <p className="text-[15px] leading-relaxed">
              No era pereza.
            </p>

            <p className="text-[15px] leading-relaxed">
              Era un sistema nervioso saturado asignando todos los recursos a mantenerse operativo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando la RAM está llena, pedirle al cuerpo que entrene, que cree o que se recupere es como pedirle a un ordenador con veinte programas abiertos que abra uno más.
            </p>

            <p className="text-[15px] leading-relaxed">
              No va a ir más rápido porque tú quieras.
            </p>

            <p className="text-[15px] leading-relaxed">
              Va a ir más rápido cuando cierres pestañas.
            </p>

            <p className="text-[15px] leading-relaxed">
              Primero hay que liberar espacio.
            </p>

            <p className="text-[15px] leading-relaxed">
              Resolver lo que está drenando.<br />
              Bajar la carga.<br />
              Regular el sistema.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y después, la energía para lo que realmente quieres hacer aparece sola.
            </p>

            <p className="text-[15px] leading-relaxed">
              No porque la fuerces.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque el sistema por fin tiene recursos disponibles.
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
