import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "La RAM de tu sistema nervioso: por qué la voluntad no funciona",
  description: "No es falta de voluntad. Es que tu sistema nervioso no tiene ancho de banda disponible. Primero libera espacio, después el cambio ocurre solo.",
  alternates: {
    canonical: "/blog/la-ram-de-tu-sistema-nervioso",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="La RAM de tu sistema nervioso: por qué la voluntad no funciona"
        description="No es falta de voluntad. Es que tu sistema nervioso no tiene ancho de banda disponible. Primero libera espacio, después el cambio ocurre solo."
        slug="la-ram-de-tu-sistema-nervioso"
        date="2026-08-18"
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
            La RAM de tu sistema nervioso: por qué la voluntad no funciona
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Sabes que deberías hacer deporte. Sabes que deberías comer mejor. Sabes que deberías dormir más. Lo sabes. Pero no lo haces. Y te culpas. Te dices que es falta de disciplina, falta de voluntad, falta de carácter. No es nada de eso.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Tu sistema tiene un límite de capacidad
            </h2>

            <p className="text-[15px] leading-relaxed">
              Piensa en tu sistema nervioso como la RAM de un ordenador. Cada responsabilidad, cada preocupación, cada conflicto no resuelto, cada deuda, cada relación que drena, cada decisión pendiente ocupa espacio. Cuando la RAM está al 98%, no puedes abrir una app nueva. Da igual cuánto quieras. El sistema no tiene recursos disponibles.
            </p>

            <p className="text-[15px] leading-relaxed">
              La energía para el deporte no se puede forzar mentalmente cuando la RAM del sistema está ocupada sosteniendo responsabilidades vitales. No es una metáfora bonita. Es fisiología. El sistema nervioso tiene un presupuesto energético finito y lo asigna por prioridad de supervivencia, no por tus intenciones.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Lo viví en primera persona
            </h2>

            <p className="text-[15px] leading-relaxed">
              Estuve 6 o 7 meses sin poder entrenar. Rendimiento al 3%. Problemas digestivos por estrés. Deudas. Mi cuerpo no respondía a nada de lo que le pedía. No era falta de voluntad. Es que mi sistema no tenía ancho de banda disponible. Todo estaba ocupado en sostener la situación vital.
            </p>

            <p className="text-[15px] leading-relaxed">
              Tuve una relación que drenaba el 99% de mi ancho de banda emocional. No quedaba nada para entrenar, para crear, para pensar con claridad. Cuando esa situación se resolvió, la energía volvió sola. Sin forzar. Sin disciplina heroica. Simplemente había espacio otra vez.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Primero libera espacio
            </h2>

            <p className="text-[15px] leading-relaxed">
              No puedes añadir apps a un teléfono sin almacenamiento. No puedes añadir hábitos a un sistema nervioso saturado. El orden es: primero resuelve lo que está drenando el sistema. Después, la energía fluye naturalmente hacia donde quieres que vaya.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Deja de culparte por no tener voluntad. Mira qué está consumiendo tu RAM. Resuelve eso primero. El resto viene solo.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si sientes que tu sistema está al límite y no sabes por dónde empezar a liberar espacio, escríbeme.
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

          <RelatedArticles slug="la-ram-de-tu-sistema-nervioso" lang="es" />
        </article>
      </main>
    </div>
  );
}
