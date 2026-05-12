import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "No hay nada solo físico: cómo los bugs emocionales secuestran tu cuerpo",
  description: "El cuerpo no separa lo físico de lo emocional. Los eventos emocionales se instalan como bugs y generan respuestas físicas reales.",
  alternates: {
    canonical: "/blog/no-hay-nada-solo-fisico",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="No hay nada solo físico: cómo los bugs emocionales secuestran tu cuerpo"
        description="El cuerpo no separa lo físico de lo emocional. Los eventos emocionales se instalan como bugs y generan respuestas físicas reales."
        slug="no-hay-nada-solo-fisico"
        date="2026-10-02"
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
            No hay nada solo físico: cómo los bugs emocionales secuestran tu cuerpo
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              No hay nada solo físico. Es una de las frases que más repito en sesión. Y cada vez que la digo, hay alguien al otro lado que necesita escucharla.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un cliente viene con dolor de espalda. Me dice que es porque cargó al perro. Le digo que no. Cargar al perro fue el detonante, no la causa. La causa lleva ahí mucho más tiempo.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El bug que se instala
            </h2>

            <p className="text-[15px] leading-relaxed">
              Es como un bug informático. Un evento emocional se te mete en el sistema y entonces tu cuerpo, cada vez que pasa por ahí, te crea la misma historia. La misma contracción. La misma respuesta. Una discusión familiar. Presenciar un paro cardíaco. Una notificación de Hacienda. No importa la escala. El sistema no distingue entre peligro real y peligro percibido. Si se instaló, se ejecuta.
            </p>

            <p className="text-[15px] leading-relaxed">
              Lo veo en mi propio cuerpo. Una carta de Hacienda y el estómago se hincha. Es inmediato. No hay proceso racional. El cuerpo lee la amenaza y responde antes de que la mente pueda intervenir.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El esófago que se cierra
            </h2>

            <p className="text-[15px] leading-relaxed">
              Otra: escuchar llorar a mi hijo y sentir que el esófago se cierra. No es una metáfora. Es literal. El cuerpo traduce la emoción a tejido en tiempo real. Siempre lo ha hecho. Lo que pasa es que no estamos entrenados para verlo.
            </p>

            <p className="text-[15px] leading-relaxed">
              En un restaurante, alguien se atragantó. Intervine, lo resolví. Todo bien para esa persona. Pero después yo no podía respirar. Me quedé conectado a la energía de ese momento, a la urgencia, al miedo del otro. Mi cuerpo no separó lo mío de lo suyo.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Tu cuerpo no separa
            </h2>

            <p className="text-[15px] leading-relaxed">
              Esto es lo que la mayoría de terapias convencionales ignoran. Tratan el dolor de espalda como un problema mecánico. Le ponen un nombre. Lo etiquetan. Le dan un protocolo. Pero el dolor no es mecánico. El dolor es la expresión de un sistema que tiene un bug emocional ejecutándose en bucle.
            </p>

            <p className="text-[15px] leading-relaxed">
              Mientras no identifiques el bug, el síntoma vuelve. Puedes masajearlo, estirarlo, medicarlo, operarlo. Volverá. Porque el origen no es físico. Es sistémico.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              El cuerpo no separa lo físico de lo emocional. Tú tampoco deberías.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si sientes que tu cuerpo repite patrones que no son solo físicos, escríbeme. Trabajo con el sistema completo.
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

          <RelatedArticles slug="no-hay-nada-solo-fisico" lang="es" />
        </article>
      </main>
    </div>
  );
}