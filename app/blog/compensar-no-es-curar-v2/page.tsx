import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Compensar no es curar",
  description: "Tu cuerpo es brillante compensando.",
  alternates: {
    canonical: "/blog/compensar-no-es-curar-v2",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Compensar no es curar"
        description="Tu cuerpo es brillante compensando."
        slug="compensar-no-es-curar-v2"
        date="2026-05-22"
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
            Compensar no es curar
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Tu cuerpo es brillante compensando.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ese no es el problema.
            </p>

            <p className="text-[15px] leading-relaxed">
              El problema es que muchas personas confunden compensación con curación porque el cuerpo es capaz de seguir funcionando durante muchísimo tiempo antes de colapsar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Puedes seguir trabajando.<br />
              Puedes seguir entrenando.<br />
              Puedes seguir cuidando de otros.<br />
              Puedes seguir produciendo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y aun así, llevar años funcionando sobre una organización completamente agotada.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso es compensar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Compensar significa que una parte del cuerpo está haciendo el trabajo que otra ya no puede hacer bien.
            </p>

            <p className="text-[15px] leading-relaxed">
              La espalda compensa una pelvis desorganizada. El cuello compensa un tórax rígido. La mandíbula compensa un sistema nervioso en alerta. La respiración compensa una tensión profunda que nunca termina de soltarse.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo redistribuye carga constantemente para mantenerte operativo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Al principio es una obra maestra de adaptación.
            </p>

            <p className="text-[15px] leading-relaxed">
              Gracias a eso sobrevives lesiones, estrés, operaciones, etapas emocionales difíciles y años de exigencia física o mental.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero cada compensación tiene un coste.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y el problema es que ese coste se acumula.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso es lo que muchas personas empiezan a notar a partir de cierta edad:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>recuperan peor,</li>
              <li>necesitan más descanso,</li>
              <li>se levantan rígidas,</li>
              <li>pierden energía,</li>
              <li>sienten que el cuerpo ya no responde igual.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              No es solo la edad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Muchas veces es un sistema que lleva décadas gastando recursos sosteniendo patrones de emergencia como si fueran normales.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo sigue adelante. Pero cada vez con menos margen.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso hay personas que un día se bloquean "sin motivo". Se agachan a coger una bolsa y la espalda colapsa. Discuten con alguien y el cuerpo entra en ansiedad. Duermen mal una semana y aparece una fatiga enorme.
            </p>

            <p className="text-[15px] leading-relaxed">
              La causa no es ese momento.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ese momento es la última gota sobre un sistema que llevaba demasiado tiempo compensando.
            </p>

            <p className="text-[15px] leading-relaxed">
              Curar implica otra cosa.
            </p>

            <p className="text-[15px] leading-relaxed">
              Curar significa que el cuerpo ya no necesita sostener el patrón de supervivencia que había construido.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí aparece algo distinto:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>más espacio,</li>
              <li>más respiración,</li>
              <li>menos esfuerzo,</li>
              <li>más capacidad de recuperación,</li>
              <li>sensación de eje,</li>
              <li>energía disponible otra vez.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Eso no ocurre añadiendo más tensión encima del cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ocurre cuando el sistema recupera organización.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso muchas veces el cambio profundo no se siente como "más fuerza".
            </p>

            <p className="text-[15px] leading-relaxed">
              Se siente como:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              "Mi cuerpo ya no tiene que luchar tanto para funcionar."
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí empieza la verdadera reorganización.
            </p>

            <p className="text-[15px] leading-relaxed">
              Compensar permite sobrevivir.
            </p>

            <p className="text-[15px] leading-relaxed">
              Curar significa que el cuerpo deja de necesitar hacerlo.
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
