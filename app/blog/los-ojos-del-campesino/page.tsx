import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Los ojos del campesino: cuando el éxito dejó de significar lo que pensaba",
  description: "Un día en la oficina vi la foto de un campesino y supe que quería ser así de mayor. Dejé el mundo corporativo.",
  alternates: {
    canonical: "/blog/los-ojos-del-campesino",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Los ojos del campesino: cuando el éxito dejó de significar lo que pensaba"
        description="Un día en la oficina vi la foto de un campesino y supe que quería ser así de mayor. Dejé el mundo corporativo."
        slug="los-ojos-del-campesino"
        date="2026-07-21"
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
            Los ojos del campesino: cuando el éxito dejó de significar lo que pensaba
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Estaba en la oficina. Tenía un trabajo estable, un sueldo, un camino trazado. Y un día, hojeando un periódico, vi la foto de un hombre que debía ser de Vietnam o de Cambodia. Era campesino. Y cuando vi los ojos de esa persona dije: yo quiero ser así de mayor.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Lo que vi en el mundo corporativo
            </h2>

            <p className="text-[15px] leading-relaxed">
              No era solo que el trabajo no me llenara. Era lo que veía a mi alrededor. No respetaban el cuerpo. Siempre estaban las mujeres, el vicio, las infidelidades, las adicciones. Gente que ganaba mucho dinero y vivía desconectada de todo lo que importa. Cuerpos destruidos, relaciones rotas, noches que no llevaban a ningún sitio.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un día, un campeón de póker me dijo algo que se me quedó: que el objetivo en la vida era descubrir tu pasión. Lo dijo como si fuera lo más obvio del mundo. Y yo supe que mi pasión no estaba en esa oficina.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La escuela de masaje
            </h2>

            <p className="text-[15px] leading-relaxed">
              Me apunté a una escuela de masaje en Sans Enma. Lunes y miércoles, de 19:30 a 21:30. Después de la jornada laboral, cruzaba la ciudad para aprender a tocar. Mientras mis compañeros de clase hacían entre una y tres prácticas fuera del horario lectivo, yo hice noventa y siete. Para mí era algo muy serio. No era un hobby ni un plan B. Era lo que tenía que hacer.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El precio real del cambio
            </h2>

            <p className="text-[15px] leading-relaxed">
              La matrícula costó 18.000 euros. Pero el coste real fue otro: unos 50.000 euros de coste de oportunidad por dejar mi carrera. Mis padres pensaban que me había metido en una secta. No lo entendían. No podían entenderlo. Veían a su hijo abandonar un camino seguro para estudiar masaje por las noches.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Pero yo había visto los ojos del campesino. Y sabía que lo que buscaba no estaba en un despacho. Estaba en las manos, en el cuerpo, en algo que todavía no sabía nombrar pero que ya me estaba moviendo.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si sientes que tu vida te pide un cambio y no sabes por dónde empezar, escríbeme. A veces el cuerpo sabe antes que la cabeza.
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

          <RelatedArticles slug="los-ojos-del-campesino" lang="es" />
        </article>
      </main>
    </div>
  );
}
