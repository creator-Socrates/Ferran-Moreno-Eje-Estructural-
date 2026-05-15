import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Viajes, jet lag y deuda nerviosa",
  description: "El cuerpo humano no fue diseñado para cambiar constantemente de zona horaria, dormir en hoteles, vivir entre aeropuertos y responder mensajes a cualquier h",
  alternates: {
    canonical: "/blog/viajes-jet-lag-deuda-nerviosa",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Viajes, jet lag y deuda nerviosa"
        description="El cuerpo humano no fue diseñado para cambiar constantemente de zona horaria, dormir en hoteles, vivir entre aeropuertos y responder mensajes a cualquier h"
        slug="viajes-jet-lag-deuda-nerviosa"
        date="2026-09-25"
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
            Viajes, jet lag y deuda nerviosa
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              El cuerpo humano no fue diseñado para cambiar constantemente de zona horaria, dormir en hoteles, vivir entre aeropuertos y responder mensajes a cualquier hora del día.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero millones de personas viven así.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y el sistema nervioso paga la factura aunque la mente siga funcionando.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cada vuelo altera ritmo circadiano, digestión, sueño, respiración y regulación hormonal. El problema no es un viaje aislado.
            </p>

            <p className="text-[15px] leading-relaxed">
              El problema es la acumulación.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso es lo que llamo deuda nerviosa: activación fisiológica que nunca termina de descargarse del todo.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo se adapta, sí.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero adaptarse no significa estar regulado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Muchos profesionales de alta exigencia viven años en un estado de activación baja permanente:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>sueño ligero,</li>
              <li>cansancio raro,</li>
              <li>dificultad para bajar,</li>
              <li>irritabilidad,</li>
              <li>digestión irregular,</li>
              <li>sensación de no estar nunca completamente presentes.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Y como siguen funcionando, creen que están bien.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero el cuerpo está sosteniendo muchísimo más de lo que parece.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cada viaje añade una pequeña capa:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>menos recuperación,</li>
              <li>más vigilancia,</li>
              <li>más tensión interna,</li>
              <li>menos sensación de hogar fisiológico.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Llega un momento en que el sistema pierde referencia de descanso profundo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí aparecen cosas muy típicas:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>despertarse cansado aunque hayas dormido,</li>
              <li>incapacidad de desconectar,</li>
              <li>ansiedad de fondo,</li>
              <li>cuerpo acelerado incluso en vacaciones.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Muchas personas intentan resolverlo con suplementos, café o fuerza de voluntad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero un sistema nervioso saturado no necesita más estímulo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Necesita volver a orientarse.
            </p>

            <p className="text-[15px] leading-relaxed">
              Volver a encontrar ritmo.<br />
              Seguridad.<br />
              Referencia interna.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso muchas veces el trabajo corporal en personas que viajan muchísimo no consiste en "relajar".
            </p>

            <p className="text-[15px] leading-relaxed">
              Consiste en devolver coherencia al sistema:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>respiración,</li>
              <li>ritmo interno,</li>
              <li>sensación de eje,</li>
              <li>capacidad de recuperación.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Cuando eso vuelve, el cuerpo deja de sentirse permanentemente desplazado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y aparece algo que muchas personas no recordaban: descansar de verdad.
            </p>

            <p className="text-[15px] leading-relaxed">
              El jet lag no es solo cansancio.
            </p>

            <p className="text-[15px] leading-relaxed">
              Es fisiología intentando reorganizarse constantemente sin terminar nunca el proceso.
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
