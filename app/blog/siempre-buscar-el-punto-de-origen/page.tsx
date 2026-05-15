import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Siempre hay que buscar el punto de origen",
  description: "La mayoría de tratamientos trabajan donde duele.",
  alternates: {
    canonical: "/blog/siempre-buscar-el-punto-de-origen",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Siempre hay que buscar el punto de origen"
        description="La mayoría de tratamientos trabajan donde duele."
        slug="siempre-buscar-el-punto-de-origen"
        date="2026-05-18"
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
            Siempre hay que buscar el punto de origen
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              La mayoría de tratamientos trabajan donde duele.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y a veces eso es necesario. Si hay inflamación, una lesión aguda o un dolor muy intenso, primero hay que bajar el ruido del sistema.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero donde duele casi nunca es donde empezó el problema.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso es algo que el cuerpo muestra constantemente cuando aprendes a leerlo como un sistema y no como una colección de piezas aisladas.
            </p>

            <p className="text-[15px] leading-relaxed">
              Una lumbar puede estar compensando un tobillo que perdió movilidad hace diez años.
Una cervical puede estar sosteniendo una respiración alterada desde hace décadas.
Un hombro puede estar reaccionando a un diafragma rígido o a una caja torácica que dejó de moverse bien.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo siempre redistribuye carga.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y lo hace con una inteligencia extraordinaria.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando una estructura pierde capacidad de adaptación, otra parte absorbe el trabajo para mantener el sistema funcionando. Al principio eso es útil. Gracias a esa capacidad puedes seguir caminando después de una lesión, seguir trabajando bajo estrés o seguir funcionando incluso cuando algo dentro ya no está bien organizado.
            </p>

            <p className="text-[15px] leading-relaxed">
              El problema aparece cuando esa compensación se vuelve permanente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Entonces el cuerpo deja de adaptarse y empieza a sobrevivir alrededor del patrón.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí nace mucho del dolor crónico.
            </p>

            <p className="text-[15px] leading-relaxed">
              La mayoría de personas llegan después de años tratando la compensación:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>masajeando la zona que duele,</li>
              <li>infiltrando la inflamación,</li>
              <li>fortaleciendo músculos que ya están trabajando demasiado,</li>
              <li>intentando "corregir" el último eslabón de la cadena.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Pero el origen sigue intacto.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y mientras el origen siga activo, el cuerpo volverá una y otra vez al mismo lugar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso siempre busco el punto de origen.
            </p>

            <p className="text-[15px] leading-relaxed">
              No el punto más doloroso.
No el síntoma más evidente.
El lugar donde el sistema empezó a reorganizarse.
            </p>

            <p className="text-[15px] leading-relaxed">
              A veces es estructural:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>una pelvis,</li>
              <li>un tobillo,</li>
              <li>una cicatriz,</li>
              <li>una articulación que perdió movilidad.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              A veces es visceral:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>un hígado restringido,</li>
              <li>un intestino con adherencias,</li>
              <li>un diafragma bloqueado,</li>
              <li>órganos que dejaron de moverse bien.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              A veces es nervioso:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>un sistema atrapado en alerta,</li>
              <li>una respiración de supervivencia,</li>
              <li>años de hipervigilancia fisiológica.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Y a veces es emocional.
            </p>

            <p className="text-[15px] leading-relaxed">
              No en el sentido abstracto o psicológico que mucha gente imagina. Emocional significa que el cuerpo organizó tensión alrededor de una experiencia que nunca terminó de procesar.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo no separa las capas igual que nosotros.
            </p>

            <p className="text-[15px] leading-relaxed">
              Estructura, respiración, emoción, postura, fascia y sistema nervioso funcionan juntos todo el tiempo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso cuando encuentras la restricción primaria ocurre algo distinto.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo deja de luchar consigo mismo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Las compensaciones empiezan a soltarse solas.
La respiración cambia.
La postura cambia.
La sensación interna cambia.
            </p>

            <p className="text-[15px] leading-relaxed">
              No porque alguien haya &ldquo;corregido&rdquo; el cuerpo desde fuera.
            </p>

            <p className="text-[15px] leading-relaxed">
              Sino porque el sistema deja de necesitar protegerse de la misma manera.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí empieza la reorganización real.
            </p>

            <p className="text-[15px] leading-relaxed">
              Siempre hay que buscar el punto de origen.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque tratar la compensación puede aliviar.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Pero encontrar el origen es lo que cambia el patrón.
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
