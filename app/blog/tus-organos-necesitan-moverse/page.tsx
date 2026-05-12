import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Tus órganos necesitan moverse",
  description: "La fisiología de cada órgano depende de su movimiento. Cuando un órgano pierde motilidad, todo el sistema lo nota.",
  alternates: {
    canonical: "/blog/tus-organos-necesitan-moverse",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Tus órganos necesitan moverse"
        description="La fisiología de cada órgano depende de su movimiento. Cuando un órgano pierde motilidad, todo el sistema lo nota."
        slug="tus-organos-necesitan-moverse"
        date="2026-08-07"
        tag="Trabajo corporal"
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
            Trabajo corporal
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Tus órganos necesitan moverse
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              La fisiología de los órganos depende de la función del órgano y todos los órganos necesitan un movimiento. Se llama motilidad. No es el movimiento que hace el órgano porque tú te mueves. Es un movimiento propio, interno, inherente al órgano. Y cuando se pierde, la función se degrada.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La metáfora de la dinamo
            </h2>

            <p className="text-[15px] leading-relaxed">
              Es como si fuese una dinamo de una rueda de una bici que necesita moverse para que haya luz. Si la rueda se para, no hay electricidad. Si el órgano pierde su movimiento interno, no hay función óptima. No se apaga de golpe. Se degrada. Pierde eficiencia. Y el cuerpo empieza a compensar sin que te des cuenta.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Qué bloquea el movimiento de un órgano
            </h2>

            <p className="text-[15px] leading-relaxed">
              Muchas cosas. Una inflamación crónica genera adherencias que limitan la movilidad del órgano dentro de su cavidad. Un trauma emocional sostenido puede crear una contracción visceral que nunca se resuelve. Un accidente de coche donde el cinturón frena el torso de golpe puede fijar el hígado, el estómago o el intestino en una posición que restringe su movimiento durante años.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La calidad del tacto
            </h2>

            <p className="text-[15px] leading-relaxed">
              Trabajar con órganos no tiene nada que ver con presionar. No es por presión, no es forzar. Es como si fueses una libélula que está poniendo 10 gramos de presión sobre la superficie del cuerpo. Eso es lo que el órgano necesita para responder. Cualquier cosa más agresiva y el sistema se cierra.
            </p>

            <p className="text-[15px] leading-relaxed">
              Normalmente empiezo por el hígado. Es el órgano más grande, el más accesible y el más fácil de sentir. Cuando el hígado recupera su motilidad, el efecto se nota en digestión, energía y estado de ánimo.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Los pulmones y la capacidad respiratoria
            </h2>

            <p className="text-[15px] leading-relaxed">
              Después de bronquitis, neumonías o episodios largos de tos, la pleura genera adherencias que limitan la expansión pulmonar. La persona respira, pero no respira bien. La capacidad está reducida y nadie sabe por qué. Liberando esas adherencias pleurales, el pulmón vuelve a expandirse completamente.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Aumentando la oxigenación y la capacidad de moverse de los pulmones, estás haciendo que ese sistema tenga una repercusión general. Más oxígeno, más energía, mejor recuperación. Todo conectado.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si sientes que algo no funciona bien por dentro y nadie encuentra la causa, puede que el problema sea de movimiento. Escríbeme.
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

          <RelatedArticles slug="tus-organos-necesitan-moverse" lang="es" />
        </article>
      </main>
    </div>
  );
}
