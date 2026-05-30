import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "El cuerpo no fue diseñado para vivir siempre disponible",
  description: "El móvil vibra. Miras.",
  alternates: getBlogAlternates("es", "el-cuerpo-no-fue-disenado-siempre-disponible"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="El cuerpo no fue diseñado para vivir siempre disponible"
        description="El móvil vibra. Miras."
        slug="el-cuerpo-no-fue-disenado-siempre-disponible"
        date="2026-09-29"
        tag="Alto rendimiento"
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
            Alto rendimiento
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            El cuerpo no fue diseñado para vivir siempre disponible
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              El móvil vibra. Miras.
            </p>

            <p className="text-[15px] leading-relaxed">
              Entras en una reunión. Respondes.
            </p>

            <p className="text-[15px] leading-relaxed">
              Sales. Otra notificación.
            </p>

            <p className="text-[15px] leading-relaxed">
              Otro email.<br />
              Otro mensaje.<br />
              Otra decisión.<br />
              Otra urgencia.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y el cuerpo nunca termina de bajar.
            </p>

            <p className="text-[15px] leading-relaxed">
              La mayoría de personas vive en disponibilidad constante sin darse cuenta del impacto fisiológico que eso tiene.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque el problema no es solo trabajar mucho.
            </p>

            <p className="text-[15px] leading-relaxed">
              El problema es que el sistema nervioso nunca recibe una interrupción real de la demanda.
            </p>

            <p className="text-[15px] leading-relaxed">
              Siempre hay algo pendiente:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>alguien esperando respuesta,</li>
              <li>algo por resolver,</li>
              <li>algo por anticipar,</li>
              <li>algo por sostener.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Y eso mantiene al cuerpo en un estado de vigilancia continua.
            </p>

            <p className="text-[15px] leading-relaxed">
              Aunque estés sentado.<br />
              Aunque estés "descansando".<br />
              Aunque estés de vacaciones.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo sigue preparado para responder.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso consume muchísima energía.
            </p>

            <p className="text-[15px] leading-relaxed">
              La atención humana no fue diseñada para vivir fragmentada todo el día. Tampoco el sistema nervioso fue diseñado para alternar microactivaciones constantes durante doce o catorce horas diarias.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cada interrupción pequeña parece insignificante.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero el coste acumulado es enorme:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>respiración superficial,</li>
              <li>tensión mandibular,</li>
              <li>peor digestión,</li>
              <li>menos profundidad mental,</li>
              <li>más fatiga,</li>
              <li>menos capacidad de recuperación.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Y como no hay una gran crisis visible, se normaliza.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí aparece una sensación muy moderna: estar cansado incluso cuando aparentemente no hiciste tanto.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque gran parte del agotamiento actual no viene solo del esfuerzo físico.
            </p>

            <p className="text-[15px] leading-relaxed">
              Viene de sostener disponibilidad constante.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo necesita ciclos:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>activación,</li>
              <li>cierre,</li>
              <li>recuperación,</li>
              <li>silencio,</li>
              <li>pausa real.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              No solo dormir.
            </p>

            <p className="text-[15px] leading-relaxed">
              Silencio fisiológico.
            </p>

            <p className="text-[15px] leading-relaxed">
              Momentos donde el sistema no esté preparado para responder inmediatamente a algo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso es algo que muchísima gente ha perdido completamente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso cuando alguien finalmente baja de verdad, siente algo rarísimo: vacío.
            </p>

            <p className="text-[15px] leading-relaxed">
              Silencio.<br />
              Espacio.<br />
              Ausencia de urgencia.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y muchas veces incluso eso genera incomodidad al principio porque el sistema ya se acostumbró a vivir activado.
            </p>

            <p className="text-[15px] leading-relaxed">
              La productividad moderna premia disponibilidad continua.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo humano no.
            </p>

            <p className="text-[15px] leading-relaxed">
              Tu sistema nervioso necesita momentos donde no tenga que estar pendiente de nada.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque un cuerpo permanentemente disponible termina viviendo permanentemente en alerta.
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
          <RelatedArticles slug="el-cuerpo-no-fue-disenado-siempre-disponible" lang="es" />
        </article>
      </main>
    </div>
  );
}
