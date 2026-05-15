import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "El coste fisiológico de sostener presión",
  description: "El cuerpo humano puede sostener muchísima presión.",
  alternates: {
    canonical: "/blog/el-coste-fisiologico-de-sostener-presion",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="El coste fisiológico de sostener presión"
        description="El cuerpo humano puede sostener muchísima presión."
        slug="el-coste-fisiologico-de-sostener-presion"
        date="2026-09-18"
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
            El coste fisiológico de sostener presión
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              El cuerpo humano puede sostener muchísima presión.
            </p>

            <p className="text-[15px] leading-relaxed">
              Muchísima más de la que la mayoría imagina.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ese no es el problema.
            </p>

            <p className="text-[15px] leading-relaxed">
              El problema es cuánto tiempo puedes sostenerla antes de empezar a pagar el precio.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque el coste rara vez aparece de golpe.
            </p>

            <p className="text-[15px] leading-relaxed">
              Se acumula silenciosamente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Primero desaparece el margen:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>recuperas peor,</li>
              <li>duermes más ligero,</li>
              <li>necesitas más estímulo para arrancar,</li>
              <li>el cuerpo tarda más en bajar.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Después aparece la tensión de fondo:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>mandíbula apretada,</li>
              <li>respiración corta,</li>
              <li>digestión alterada,</li>
              <li>sensación de vigilancia constante.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Y como todavía sigues funcionando, lo normalizas.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí empieza una de las trampas más frecuentes del alto rendimiento:
confundir capacidad de compensación con salud.
            </p>

            <p className="text-[15px] leading-relaxed">
              Puedes seguir produciendo mientras tu sistema se degrada.
            </p>

            <p className="text-[15px] leading-relaxed">
              Puedes seguir liderando mientras tu cuerpo vive en alerta permanente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Puedes seguir tomando decisiones mientras la fisiología desde la que decides empeora cada mes.
            </p>

            <p className="text-[15px] leading-relaxed">
              El sistema nervioso humano está diseñado para alternar activación y recuperación.
            </p>

            <p className="text-[15px] leading-relaxed">
              No para vivir permanentemente disponible.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero mucha gente vive exactamente así:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>mensajes constantes,</li>
              <li>presión constante,</li>
              <li>ruido constante,</li>
              <li>estimulación constante,</li>
              <li>responsabilidad constante.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              El cuerpo nunca termina de recibir la señal de:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              &ldquo;Ya puedes bajar.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              Y cuando eso ocurre durante años, el sistema empieza a funcionar desde supervivencia crónica.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí cambia todo:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>la percepción,</li>
              <li>la tolerancia emocional,</li>
              <li>la claridad mental,</li>
              <li>la capacidad de recuperación,</li>
              <li>incluso la sensación de identidad.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Muchas personas creen que &ldquo;son así&rdquo;:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>tensas,</li>
              <li>hiperactivas,</li>
              <li>impacientes,</li>
              <li>aceleradas.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Pero muchas veces no es personalidad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Es fisiología sostenida demasiado tiempo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso la recuperación real no consiste solo en descansar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Consiste en devolver al cuerpo la capacidad de dejar de defenderse constantemente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y eso no se logra únicamente durmiendo más o yéndose de vacaciones.
            </p>

            <p className="text-[15px] leading-relaxed">
              He visto personas volver agotadas de vacaciones porque el cuerpo seguía funcionando desde el mismo estado interno.
            </p>

            <p className="text-[15px] leading-relaxed">
              El sistema no sabía bajar.
            </p>

            <p className="text-[15px] leading-relaxed">
              La presión no destruye inmediatamente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Desgasta.
            </p>

            <p className="text-[15px] leading-relaxed">
              Reduce margen.
Reduce flexibilidad.
Reduce capacidad adaptativa.
            </p>

            <p className="text-[15px] leading-relaxed">
              Hasta que un día algo aparentemente pequeño rompe el equilibrio:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>una discusión,</li>
              <li>una lesión,</li>
              <li>una infección,</li>
              <li>una etapa de estrés,</li>
              <li>una mala noche.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Y el cuerpo colapsa mucho más de lo esperado.
            </p>

            <p className="text-[15px] leading-relaxed">
              No por ese momento.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por toda la presión acumulada antes.
            </p>

            <p className="text-[15px] leading-relaxed">
              El coste fisiológico de sostener presión no aparece el día que explotas.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Empieza muchísimo antes.
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
