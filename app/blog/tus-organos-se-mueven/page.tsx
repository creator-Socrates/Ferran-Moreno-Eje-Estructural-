import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Tus órganos necesitan moverse",
  description: "Esto sorprende a mucha gente:",
  alternates: {
    canonical: "/blog/tus-organos-se-mueven",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Tus órganos necesitan moverse"
        description="Esto sorprende a mucha gente:"
        slug="tus-organos-se-mueven"
        date="2026-07-28"
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
            Tus órganos necesitan moverse
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Esto sorprende a mucha gente:
            </p>

            <p className="text-[15px] leading-relaxed">
              Tus órganos no están fijos.
            </p>

            <p className="text-[15px] leading-relaxed">
              Se mueven.
            </p>

            <p className="text-[15px] leading-relaxed">
              El hígado tiene un movimiento propio. Los riñones. Los pulmones. El intestino. El estómago.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cada órgano tiene lo que en terapia manual se llama motilidad: un movimiento inherente, rítmico, necesario para que la función sea óptima.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando un órgano pierde movilidad, todo cambia alrededor.
            </p>

            <p className="text-[15px] leading-relaxed">
              La postura se adapta.<br />
              La respiración se limita.<br />
              La fascia se reorganiza.<br />
              El cuerpo empieza a compensar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Las causas pueden ser muchas:
            </p>

            <p className="text-[15px] leading-relaxed">
              Una inflamación antigua.<br />
              Una cirugía.<br />
              Un golpe.<br />
              Años de estrés.<br />
              Una emoción que el cuerpo nunca terminó de procesar.
            </p>

            <p className="text-[15px] leading-relaxed">
              El trabajo visceral consiste en devolver ese movimiento.
            </p>

            <p className="text-[15px] leading-relaxed">
              No con fuerza.
            </p>

            <p className="text-[15px] leading-relaxed">
              Con escucha.
            </p>

            <p className="text-[15px] leading-relaxed">
              La presión que uso con un órgano es mínima. Diez gramos. Como una libélula posándose. Acompañando el movimiento que el órgano quiere recuperar, no imponiendo uno desde fuera.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando el órgano recupera su motilidad, el efecto se expande.
            </p>

            <p className="text-[15px] leading-relaxed">
              La respiración cambia. La postura cambia. El sistema entero se reorganiza alrededor de una función recuperada.
            </p>

            <p className="text-[15px] leading-relaxed">
              No porque hayas manipulado la espalda.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque el órgano que estaba tirando de ella dejó de hacerlo.
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
