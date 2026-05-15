import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "El cuerpo recuerda lo que la mente ya olvidó",
  description: "El cuerpo guarda experiencias mucho después de que la mente haya dejado de pensar en ellas.",
  alternates: {
    canonical: "/blog/el-cuerpo-recuerda-lo-que-la-mente-olvido",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="El cuerpo recuerda lo que la mente ya olvidó"
        description="El cuerpo guarda experiencias mucho después de que la mente haya dejado de pensar en ellas."
        slug="el-cuerpo-recuerda-lo-que-la-mente-olvido"
        date="2026-06-26"
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
            El cuerpo recuerda lo que la mente ya olvidó
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              El cuerpo guarda experiencias mucho después de que la mente haya dejado de pensar en ellas.
            </p>

            <p className="text-[15px] leading-relaxed">
              Una caída.
Una cirugía.
Un accidente.
Una etapa de estrés intenso.
Una relación donde el sistema vivió demasiado tiempo en defensa.
            </p>

            <p className="text-[15px] leading-relaxed">
              El relato consciente puede desaparecer.
El cuerpo muchas veces sigue organizándose alrededor de eso años después.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso es algo que veo constantemente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Personas que llegan por dolor lumbar y descubren que el cuerpo todavía protege un tobillo lesionado hace quince años. Respiraciones alteradas después de una bronquitis antigua. Abdomen rígido alrededor de una cicatriz que aparentemente &ldquo;ya no molesta&rdquo;.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo no piensa en términos de pasado y presente como la mente.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo piensa en seguridad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y si una experiencia dejó al sistema en alerta o generó una reorganización profunda, el cuerpo puede mantener ese patrón activo muchísimo tiempo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Muchas veces sin que la persona lo relacione.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí aparece algo importante:
el cuerpo no almacena solo recuerdos narrativos.
            </p>

            <p className="text-[15px] leading-relaxed">
              Almacena respuestas.
            </p>

            <p className="text-[15px] leading-relaxed">
              Patrones respiratorios.
Tensión muscular.
Posturas.
Defensas.
Reflejos de protección.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso explica por qué alguien puede reaccionar físicamente antes incluso de entender qué está sintiendo.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo ya reconoció algo.
            </p>

            <p className="text-[15px] leading-relaxed">
              A veces basta un tono de voz.
Un olor.
Un espacio.
Una situación parecida.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y el sistema activa automáticamente el patrón antiguo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso intentar resolver todo desde análisis mental tiene límites.
            </p>

            <p className="text-[15px] leading-relaxed">
              Puedes entender perfectamente una experiencia y aun así seguir sintiendo el cuerpo atrapado en ella.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque la comprensión intelectual no reorganiza automáticamente la fisiología.
            </p>

            <p className="text-[15px] leading-relaxed">
              Lo fascinante es que cuando el cuerpo finalmente siente suficiente seguridad para soltar un patrón antiguo, el cambio puede ser enorme.
            </p>

            <p className="text-[15px] leading-relaxed">
              La respiración cambia.
La postura cambia.
La sensación interna cambia.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y muchas personas dicen algo parecido:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              &ldquo;No sabía cuánto estaba sosteniendo.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso ocurre porque el cuerpo llevaba años haciendo trabajo invisible.
            </p>

            <p className="text-[15px] leading-relaxed">
              Protegiéndote.
            </p>

            <p className="text-[15px] leading-relaxed">
              Preparándose.
            </p>

            <p className="text-[15px] leading-relaxed">
              Anticipando.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo recuerda mucho más de lo que la mente imagina.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Y muchas veces el verdadero cambio empieza cuando deja de necesitar hacerlo.
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
