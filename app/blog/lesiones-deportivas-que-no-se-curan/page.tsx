import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Lesiones deportivas que no se curan: el patrón que nadie mira",
  description: "El tejido sanó pero la lesión sigue. El problema no es la estructura: es el patrón de compensación que la lesión dejó atrás.",
  alternates: {
    canonical: "/blog/lesiones-deportivas-que-no-se-curan",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Lesiones deportivas que no se curan: el patrón que nadie mira"
        description="El tejido sanó pero la lesión sigue. El problema no es la estructura: es el patrón de compensación que la lesión dejó atrás."
        slug="lesiones-deportivas-que-no-se-curan"
        date="2026-06-09"
        tag="Deporte"
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
            <Link href="/#como-trabajo" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Método</Link>
            <Link href="/#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Casos</Link>
            <Link href="/#para-quien" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Para quién</Link>
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
            Deporte
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Lesiones deportivas que no se curan: el patrón que nadie mira
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              El tobillo sanó en la resonancia pero sigue sin ir bien. El hombro pasó todas las pruebas pero no puedes lanzar como antes. El tejido se curó. El patrón no.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Lo que queda después de que el tejido sane
            </h2>

            <p className="text-[15px] leading-relaxed">
              Cada lesión crea un patrón de compensación. Es automático. El cuerpo aprende a funcionar alrededor del daño: redistribuye carga, cambia la activación muscular, altera la biomecánica. Es inteligente. Es necesario. Pero es temporal.
            </p>

            <p className="text-[15px] leading-relaxed">
              El problema es que cuando el tejido sana, el patrón de compensación se queda. El cuerpo no tiene un botón de reset. Nadie le dice: &laquo;ya puedes volver a funcionar como antes&raquo;. Así que sigue usando el patrón de emergencia como si fuera el normal.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Por qué más rehabilitación no es la solución
            </h2>

            <p className="text-[15px] leading-relaxed">
              Si el patrón de compensación sigue activo, fortaleces sobre una base torcida. Más ejercicios de estabilidad, más propiocepción, más trabajo de fuerza &mdash;todo se construye sobre una organización que no es la correcta. Por eso muchas lesiones &laquo;curadas&raquo; siguen molestando, o vuelven, o generan una lesión nueva en otra parte.
            </p>

            <p className="text-[15px] leading-relaxed">
              La solución no es más rehabilitación. Es reorganizar el patrón que la lesión dejó atrás. Primero liberar la compensación. Después, el cuerpo puede integrar el movimiento limpio.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Casos reales
            </h2>

            <p className="text-[15px] leading-relaxed">
              Rodrigo Peñafiel llevaba tiempo con una rodilla que no respondía a la rehabilitación convencional. En una sesión, reorganizamos el patrón. La rodilla dejó de ser el problema.
            </p>

            <p className="text-[15px] leading-relaxed">
              Tommy O&apos;Ceilea se cayó y la espalda no terminaba de recuperarse. El tejido estaba bien. El patrón de la caída seguía activo en su sistema. Trabajamos sobre eso.
            </p>

            <p className="text-[15px] leading-relaxed">
              Jose Luis Pagán, bombero, pensaba que no iba a poder seguir trabajando. Su cuerpo había acumulado compensaciones de años de exigencia física. No era una lesión. Era un sistema sobrecargado de patrones que nadie había reorganizado.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El patrón es la clave
            </h2>

            <p className="text-[15px] leading-relaxed font-medium">
              Si la lesión sanó pero algo sigue sin ir bien, el problema no es el tejido. Es el patrón que la lesión dejó. Y ese patrón no se resuelve con más repeticiones. Se resuelve con alguien que sepa leerlo y reorganizarlo.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si tienes una lesión que &laquo;ya debería estar curada&raquo; pero no termina de funcionar, escríbeme. Miramos qué patrón dejó.
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
