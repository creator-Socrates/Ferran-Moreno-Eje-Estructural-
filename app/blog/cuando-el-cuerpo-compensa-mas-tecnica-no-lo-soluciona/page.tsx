import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Cuando el cuerpo compensa durante años, más técnica no lo soluciona",
  description: "No es un golpe. Son mil pequeñas cosas. Cuando el cuerpo compensa demasiado tiempo, el enfoque tiene que cambiar.",
  alternates: {
    canonical: "/blog/cuando-el-cuerpo-compensa-mas-tecnica-no-lo-soluciona",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Cuando el cuerpo compensa durante años, más técnica no lo soluciona"
        description="No es un golpe. Son mil pequeñas cosas. Cuando el cuerpo compensa demasiado tiempo, el enfoque tiene que cambiar."
        slug="cuando-el-cuerpo-compensa-mas-tecnica-no-lo-soluciona"
        date="2026-05-09"
        tag="Compensación"
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
            Compensación
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Cuando el cuerpo compensa durante años, más técnica no lo soluciona
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Tu cuerpo es brillante compensando. Eso no es el problema. El problema es cuando las compensaciones se acumulan durante años y nadie mira el conjunto.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La inteligencia del cuerpo
            </h2>

            <p className="text-[15px] leading-relaxed">
              Cada vez que algo se bloquea, tu cuerpo redistribuye la carga. Un tobillo rígido hace que la rodilla trabaje de más. Una víscera con restricción tira de la fascia y cambia la postura. Una cicatriz antigua reorganiza las tensiones a su alrededor. El cuerpo absorbe cada restricción y sigue funcionando. Es extraordinariamente bueno en eso.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero cada compensación tiene un coste. Y los costes se acumulan.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Muerte por mil cortes de papel
            </h2>

            <p className="text-[15px] leading-relaxed">
              No es la caída de hace tres años. No es el estrés del trabajo. No es la mala postura. Es todo junto. Cada microtensión es nada por separado. Pero son cientos. Y cuando el cuerpo ya no puede absorber una más, el sistema se desborda. Aparece el dolor, la fatiga crónica, la ansiedad sin causa aparente, el insomnio que no se va.
            </p>

            <p className="text-[15px] leading-relaxed">
              En ese punto, tratar un corte no sirve de nada. Tienes novecientos noventa y nueve más.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Cuando el enfoque puntual no es suficiente
            </h2>

            <p className="text-[15px] leading-relaxed">
              Vas al fisio. Te trabajan el hombro. Mejora tres días. Vuelve. Vas al osteópata. Te ajustan la cervical. Mejora una semana. Vuelve. Vas al traumatólogo. Te ponen una infiltración. Mejora un mes. Vuelve.
            </p>

            <p className="text-[15px] leading-relaxed">
              No es que el tratamiento esté mal. Es que el enfoque es puntual y el problema es sistémico. Están poniendo un parche en un corte mientras el cuerpo tiene mil. Cada vez que arreglas uno, la carga se redistribuye y otro se abre.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Reorganizar, no reparar
            </h2>

            <p className="text-[15px] leading-relaxed">
              Mi enfoque no es perseguir el síntoma. Es entender la organización del cuerpo completo. Dónde están las restricciones primarias. Cómo se relacionan. Qué patrón las mantiene activas. Y desde ahí, reorganizar.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo no está roto. Está mal organizado. Y la diferencia es enorme. Lo roto necesita reparación. Lo mal organizado necesita reorganización. Necesita que alguien vea el conjunto y le dé al sistema la información que necesita para volver a un orden que funcione.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              La pregunta no es qué técnica aplicar. La pregunta es qué organización restaurar.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si has probado tratamientos puntuales y el problema siempre vuelve, quizás hace falta mirar el conjunto.
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

          <RelatedArticles slug="cuando-el-cuerpo-compensa-mas-tecnica-no-lo-soluciona" lang="es" />
        </article>
      </main>
    </div>
  );
}
