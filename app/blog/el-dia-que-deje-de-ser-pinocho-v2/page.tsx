import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "El día que dejé de ser Pinocho",
  description: "Para mí el cuerpo era una mesa de madera.",
  alternates: {
    canonical: "/blog/el-dia-que-deje-de-ser-pinocho-v2",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="El día que dejé de ser Pinocho"
        description="Para mí el cuerpo era una mesa de madera."
        slug="el-dia-que-deje-de-ser-pinocho-v2"
        date="2026-08-21"
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
            El día que dejé de ser Pinocho
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Para mí el cuerpo era una mesa de madera.
            </p>

            <p className="text-[15px] leading-relaxed">
              Así lo sentía.
            </p>

            <p className="text-[15px] leading-relaxed">
              La cadera era un bloque fijo. La espalda otro. El esternón otro. Como piezas de un mueble ensambladas sin movimiento.
            </p>

            <p className="text-[15px] leading-relaxed">
              Como Pinocho.
            </p>

            <p className="text-[15px] leading-relaxed">
              No entraba la idea de que pudiera haber movimiento dentro de la cadera. Era como una pieza de un coche. Un tornillo que está mal y lo colocas bien y entonces funciona.
            </p>

            <p className="text-[15px] leading-relaxed">
              Esa era la idea que tenía.
            </p>

            <p className="text-[15px] leading-relaxed">
              Tenía un dolor en el esternón. Constante. Como un cuchillo clavado que llevaba ahí tanto tiempo que mi cerebro ya lo había normalizado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ya no era dolor.
            </p>

            <p className="text-[15px] leading-relaxed">
              Era parte de mí.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y entonces, durante una sesión con Josep Castellà, pasó algo que no esperaba.
            </p>

            <p className="text-[15px] leading-relaxed">
              Estaba trabajando y de repente noté por primera vez que estaba tocando una vértebra. Podía sentir que la vértebra estaba rotada. Que la apófisis espinosa estaba más salida hacia la izquierda. Había un bulto palpable.
            </p>

            <p className="text-[15px] leading-relaxed">
              Años ahí.
            </p>

            <p className="text-[15px] leading-relaxed">
              Nadie lo había encontrado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y entonces Josep, como un maestro de aikido, con total precisión y un semigiro, la colocó en su sitio.
            </p>

            <p className="text-[15px] leading-relaxed">
              Sin hacer ningún daño.<br />
              Sin crujir.<br />
              Sin ningún tipo de agresión.<br />
              Muy sutilmente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y el dolor del esternón desapareció.
            </p>

            <p className="text-[15px] leading-relaxed">
              No gradualmente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Desapareció.
            </p>

            <p className="text-[15px] leading-relaxed">
              Nunca más volvió a molestarme.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso para mí fue una revelación.
            </p>

            <p className="text-[15px] leading-relaxed">
              No porque el dolor se fuera. Eso ya era bastante.
            </p>

            <p className="text-[15px] leading-relaxed">
              Sino porque entendí que el cuerpo no es lo que yo pensaba.
            </p>

            <p className="text-[15px] leading-relaxed">
              No es una máquina rígida.<br />
              No es un conjunto de piezas.<br />
              No es Pinocho.
            </p>

            <p className="text-[15px] leading-relaxed">
              Es algo vivo. Dinámico. Que se reorganiza constantemente. Y que puede cambiar con una precisión que no tiene nada que ver con la fuerza.
            </p>

            <p className="text-[15px] leading-relaxed">
              Es algo magnífico que mucha gente nunca ha tenido la oportunidad de sentir.
            </p>

            <p className="text-[15px] leading-relaxed">
              Me enamoré de ese arte.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y no podía entender que existiera. Que esa solución estuviera ahí. Y que yo hubiera pasado siete años dando vueltas con dolor sin que nadie la encontrara.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ese día dejé de ser Pinocho.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ese cambio de percepción cambió toda mi vida.
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
