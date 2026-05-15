import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "CEOs y sistema nervioso",
  description: "Los ejecutivos de alto rendimiento optimizan todo:",
  alternates: {
    canonical: "/blog/ceos-y-sistema-nervioso",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="CEOs y sistema nervioso"
        description="Los ejecutivos de alto rendimiento optimizan todo:"
        slug="ceos-y-sistema-nervioso"
        date="2026-09-14"
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
            CEOs y sistema nervioso
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              Los ejecutivos de alto rendimiento optimizan todo:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>agenda,</li>
              <li>estrategia,</li>
              <li>equipo,</li>
              <li>productividad,</li>
              <li>métricas,</li>
              <li>nutrición,</li>
              <li>sueño.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Pero muy pocos optimizan el sistema nervioso desde el que están tomando decisiones.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y eso termina teniendo un coste enorme.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo humano no fue diseñado para vivir en disponibilidad constante. Reuniones, mensajes, presión, viajes, responsabilidad, decisiones continuas. El sistema puede sostenerlo durante años.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero el precio se acumula silenciosamente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Lo veo constantemente en CEOs, fundadores y perfiles de alta exigencia:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>sueño superficial,</li>
              <li>dificultad para bajar,</li>
              <li>irritabilidad,</li>
              <li>digestión alterada,</li>
              <li>sensación de presión constante,</li>
              <li>cuerpo rígido,</li>
              <li>fatiga que no desaparece con vacaciones.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Y aun así siguen funcionando.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ese es precisamente el problema.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo compensa tan bien que muchas personas no detectan el desgaste hasta que el sistema empieza a colapsar:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>ansiedad,</li>
              <li>dolor,</li>
              <li>agotamiento,</li>
              <li>decisiones impulsivas,</li>
              <li>desconexión emocional,</li>
              <li>sensación de vacío interno.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              La mayoría intenta resolver eso con más control.
            </p>

            <p className="text-[15px] leading-relaxed">
              Más disciplina.
Más biohacking.
Más productividad.
Más optimización.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero un sistema nervioso sobrecargado no necesita más exigencia.
            </p>

            <p className="text-[15px] leading-relaxed">
              Necesita regulación.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque el estado fisiológico desde el que diriges una empresa cambia completamente:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>cómo piensas,</li>
              <li>cómo lideras,</li>
              <li>cómo decides,</li>
              <li>cómo manejas conflicto,</li>
              <li>cómo percibes amenaza,</li>
              <li>cómo gestionas presión.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Un cuerpo desregulado interpreta el mundo entero desde supervivencia.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y desde supervivencia:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>todo parece urgente,</li>
              <li>todo pesa más,</li>
              <li>las decisiones empeoran,</li>
              <li>la creatividad disminuye,</li>
              <li>la tolerancia se reduce.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Por eso el trabajo corporal en alto rendimiento no es wellness.
            </p>

            <p className="text-[15px] leading-relaxed">
              Es infraestructura.
            </p>

            <p className="text-[15px] leading-relaxed">
              Es mantenimiento del sistema que sostiene absolutamente todo lo demás.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando el cuerpo recupera regulación, cambia algo muy concreto:
aparece más espacio interno.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y desde ahí:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>las decisiones son más limpias,</li>
              <li>la presión pesa menos,</li>
              <li>el cuerpo recupera margen,</li>
              <li>la energía deja de irse en sostener tensión constante.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              La mayoría de CEOs trabaja sobre estrategia.
            </p>

            <p className="text-[15px] leading-relaxed">
              Muy pocos trabajan sobre el sistema nervioso desde el que esa estrategia nace.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Y eso marca una diferencia enorme.
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
