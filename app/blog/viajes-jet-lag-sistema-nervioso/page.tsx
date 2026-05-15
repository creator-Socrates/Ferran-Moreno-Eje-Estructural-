import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Viajes, jet lag y presión: cómo el sistema nervioso paga la factura",
  description: "Cada vuelo altera el ritmo circadiano. Cada zona horaria fuerza al sistema nervioso a recalibrarse. La deuda se acumula en silencio.",
  alternates: {
    canonical: "/blog/viajes-jet-lag-sistema-nervioso",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Viajes, jet lag y presión: cómo el sistema nervioso paga la factura"
        description="Cada vuelo altera el ritmo circadiano. Cada zona horaria fuerza al sistema nervioso a recalibrarse. La deuda se acumula en silencio."
        slug="viajes-jet-lag-sistema-nervioso"
        date="2026-07-14"
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
            Viajes, jet lag y presión: cómo el sistema nervioso paga la factura
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Cada vuelo altera el ritmo circadiano. Cada cambio de zona horaria fuerza al sistema nervioso a recalibrarse. Cada viaje de alta presión añade activación sin descarga. Y la deuda se acumula en silencio.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Adaptación no es regulación
            </h2>

            <p className="text-[15px] leading-relaxed">
              Los viajeros de negocios y los profesionales que giran por el mundo acumulan esta deuda sin darse cuenta. Se adaptan. Los humanos somos buenos en eso. Pero adaptación no es regulación.
            </p>

            <p className="text-[15px] leading-relaxed">
              Adaptación significa que el cuerpo encuentra una manera de funcionar a pesar de estar desorganizado. Lo consigue, pero a un coste. El sistema nervioso se queda en un estado de activación baja-constante. Nunca del todo encendido, nunca del todo apagado. Siempre en guardia.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Las señales que se ignoran
            </h2>

            <p className="text-[15px] leading-relaxed">
              Dormir ocho horas y levantarse cansado. Una digestión que &quot;antes iba bien&quot;. Una tensión de fondo que nunca termina de bajar. Mal genio que aparece &quot;de la nada&quot;. Dificultad para desconectar incluso en vacaciones.
            </p>

            <p className="text-[15px] leading-relaxed">
              El sistema nervioso no está roto. Está atascado. Atascado en modo activación porque nunca recibió la señal de que la amenaza pasó. Cada viaje nuevo se suma al anterior. Cada zona horaria es un reset que el cuerpo no completa del todo.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El cuerpo olvida cómo descansar
            </h2>

            <p className="text-[15px] leading-relaxed">
              Una cosa que veo constantemente en personas que viajan mucho: el cuerpo olvida cómo descansar. No cómo dormir &mdash; cómo bajar de verdad. Cómo soltar la activación acumulada. Cómo completar el ciclo de estrés en lugar de llevarlo encima de un país a otro.
            </p>

            <p className="text-[15px] leading-relaxed">
              Enseñar al sistema a completar ese ciclo es a menudo el primer paso. No se trata de técnicas de relajación. Se trata de que el sistema nervioso recupere la capacidad de transitar entre estados: activarse cuando toca, recuperarse cuando toca. Sin quedarse atrapado en ninguno de los dos.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Resetear el sistema
            </h2>

            <p className="text-[15px] leading-relaxed">
              El trabajo corporal no elimina el jet lag ni la presión. Lo que hace es devolver al sistema nervioso su capacidad de autorregularse. De procesar la carga acumulada. De volver a un estado base desde el que rendir sin desgaste excesivo.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Si viajas mucho, el cuerpo no necesita más horas de sueño. Necesita recordar cómo descansar de verdad.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si viajas constantemente y notas que el cuerpo ya no se recupera como antes, escríbeme.
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

          <RelatedArticles slug="viajes-jet-lag-sistema-nervioso" lang="es" />
        </article>
      </main>
    </div>
  );
}
