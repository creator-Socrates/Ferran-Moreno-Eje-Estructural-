import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "El problema no es el estrés. Es no salir de él.",
  description: "El estrés no es el enemigo.",
  alternates: {
    canonical: "/blog/el-problema-no-es-el-estres",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="El problema no es el estrés. Es no salir de él."
        description="El estrés no es el enemigo."
        slug="el-problema-no-es-el-estres"
        date="2026-06-12"
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
            El problema no es el estrés. Es no salir de él.
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              El estrés no es el enemigo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Tu cuerpo está diseñado para activarse. Para correr, responder, adaptarse, resolver. El problema aparece cuando el sistema pierde la capacidad de volver atrás.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí es donde empieza el desgaste real.
            </p>

            <p className="text-[15px] leading-relaxed">
              La mayoría de personas que veo no están en una crisis aguda. Están en una activación sostenida. Un estado de fondo donde el cuerpo nunca termina de bajar del todo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Duermen, pero el sistema sigue vigilando. Descansan, pero no recuperan. Se van de vacaciones y tardan cinco días en empezar a sentir algo parecido a calma.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo sigue preparado para una amenaza que ya no está ocurriendo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso tiene consecuencias muy concretas:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>digestiones más lentas,</li>
              <li>inflamación,</li>
              <li>tensión muscular constante,</li>
              <li>peor recuperación,</li>
              <li>niebla mental,</li>
              <li>irritabilidad,</li>
              <li>dolor que aparece "sin motivo".</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              No porque el cuerpo falle. Porque lleva demasiado tiempo sosteniendo una activación para la que no fue diseñado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un animal escapa de un depredador y después descarga la energía. Tiembla. Respira. Completa el ciclo. El sistema vuelve a cero.
            </p>

            <p className="text-[15px] leading-relaxed">
              Los humanos rara vez hacemos eso.
            </p>

            <p className="text-[15px] leading-relaxed">
              Nos tragamos el susto.<br />
              Seguimos trabajando.<br />
              Contestamos emails.<br />
              Seguimos funcionando como si nada hubiera pasado.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo sí lo registra.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y cuando esa acumulación dura meses o años, el sistema empieza a organizarse alrededor del estrés como si fuera el estado normal.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí aparece algo importante: muchas personas ya no recuerdan cómo se siente estar realmente reguladas.
            </p>

            <p className="text-[15px] leading-relaxed">
              Confunden tensión con productividad.<br />
              Hipervigilancia con responsabilidad.<br />
              Agotamiento con madurez.
            </p>

            <p className="text-[15px] leading-relaxed">
              El problema no es trabajar mucho. El problema es que el cuerpo nunca recibe la señal de que puede salir del estado de alerta.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso la regulación no consiste simplemente en relajarse.
            </p>

            <p className="text-[15px] leading-relaxed">
              Regular un sistema nervioso significa devolverle flexibilidad. Que pueda activarse cuando hace falta y bajar cuando termina la amenaza. Recuperar capacidad de transición.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso cambia todo.
            </p>

            <p className="text-[15px] leading-relaxed">
              La respiración cambia.<br />
              La percepción del dolor cambia.<br />
              La claridad mental cambia.<br />
              La energía disponible cambia.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y muchas veces, síntomas que parecían separados empiezan a desaparecer juntos.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque el problema nunca fue solamente el cuello, el estómago o el insomnio.
            </p>

            <p className="text-[15px] leading-relaxed">
              El problema era un sistema que llevaba demasiado tiempo sin sentirse seguro.
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
