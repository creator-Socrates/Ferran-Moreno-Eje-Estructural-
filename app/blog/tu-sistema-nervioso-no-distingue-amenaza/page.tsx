import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Tu sistema nervioso no distingue entre una amenaza real y una anticipada",
  description: "Tu cuerpo puede reaccionar a un email igual que reaccionaría a un accidente.",
  alternates: getBlogAlternates("es", "tu-sistema-nervioso-no-distingue-amenaza"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Tu sistema nervioso no distingue entre una amenaza real y una anticipada"
        description="Tu cuerpo puede reaccionar a un email igual que reaccionaría a un accidente."
        slug="tu-sistema-nervioso-no-distingue-amenaza"
        date="2026-06-16"
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
            Tu sistema nervioso no distingue entre una amenaza real y una anticipada
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Tu cuerpo puede reaccionar a un email igual que reaccionaría a un accidente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Esa es una de las cosas que más desconcierta a las personas cuando empiezan a entender cómo funciona realmente el sistema nervioso.
            </p>

            <p className="text-[15px] leading-relaxed">
              La mente sabe que no hay peligro real. El cuerpo no siempre.
            </p>

            <p className="text-[15px] leading-relaxed">
              Una llamada inesperada.<br />
              Un mensaje de Hacienda.<br />
              Una discusión.<br />
              Una notificación en el móvil.<br />
              La sensación de que algo "va mal".
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo responde antes de que tengas tiempo de pensar.
            </p>

            <p className="text-[15px] leading-relaxed">
              La respiración cambia.<br />
              El estómago se contrae.<br />
              La mandíbula aprieta.<br />
              El pecho se cierra.<br />
              El sistema entra en alerta.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y lo más importante: muchas veces esa activación no desaparece cuando el momento pasa.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí empieza el problema.
            </p>

            <p className="text-[15px] leading-relaxed">
              El sistema nervioso humano está diseñado para activarse y después volver a regularse. El problema aparece cuando la activación se queda abierta durante demasiado tiempo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso es lo que veo constantemente: personas funcionando durante años en un estado de activación baja permanente.
            </p>

            <p className="text-[15px] leading-relaxed">
              No están en pánico.<br />
              No están colapsadas.<br />
              Pero tampoco están realmente reguladas.
            </p>

            <p className="text-[15px] leading-relaxed">
              Duermen, pero no descansan.<br />
              Comen, pero no digieren igual.<br />
              Trabajan, pero cada vez con menos margen.<br />
              Viven en una especie de "naranja funcional" constante.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y como el cuerpo se adapta a casi todo, terminan creyendo que eso es su personalidad.
            </p>

            <p className="text-[15px] leading-relaxed">
              "No sé relajarme."<br />
              "Siempre he sido nervioso."<br />
              "Soy así."
            </p>

            <p className="text-[15px] leading-relaxed">
              Muchas veces no eres "así". Muchas veces es un sistema que lleva demasiado tiempo sin bajar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso la regulación no es un lujo ni una moda terapéutica. Es la base fisiológica sobre la que funciona todo lo demás:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>la claridad mental,</li>
              <li>la digestión,</li>
              <li>el sueño,</li>
              <li>la recuperación,</li>
              <li>la toma de decisiones,</li>
              <li>incluso la percepción del dolor.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Un sistema nervioso crónicamente activado cambia cómo interpretas el mundo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Todo pesa más.<br />
              Todo parece más urgente.<br />
              Todo consume más energía.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y desde ahí, incluso pequeñas cosas se vuelven enormes.
            </p>

            <p className="text-[15px] leading-relaxed">
              La mayoría de personas intentan resolver esto desde la mente: más control, más disciplina, más análisis, más fuerza de voluntad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero un cuerpo en alerta no necesita más exigencia. Necesita seguridad.
            </p>

            <p className="text-[15px] leading-relaxed">
              No seguridad intelectual. Seguridad fisiológica.
            </p>

            <p className="text-[15px] leading-relaxed">
              Necesita recibir la señal de que ya no tiene que seguir preparándose para algo que no está ocurriendo ahora mismo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí es donde empieza la regulación real.
            </p>

            <p className="text-[15px] leading-relaxed">
              No cuando te convences de que estás bien.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando tu cuerpo empieza a creérselo.
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
          <RelatedArticles slug="tu-sistema-nervioso-no-distingue-amenaza" lang="es" />
        </article>
      </main>
    </div>
  );
}
