import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Dolor de espalda crónico: por qué el origen casi nunca está en la espalda",
  description: "La espalda es donde duele, rara vez donde está el problema. Restricciones viscerales, cicatrices antiguas y patrones posturales son las causas reales del dolor de espalda crónico.",
  alternates: {
    canonical: "/blog/dolor-de-espalda-cronico-origen",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Dolor de espalda crónico: por qué el origen casi nunca está en la espalda"
        description="La espalda es donde duele, rara vez donde está el problema. Restricciones viscerales, cicatrices antiguas y patrones posturales son las causas reales del dolor de espalda crónico."
        slug="dolor-de-espalda-cronico-origen"
        date="2026-05-19"
        tag="Dolor crónico"
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
            <Link href="/#como-trabajo" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Método</Link>
            <Link href="/#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Casos</Link>
            <Link href="/#para-quien" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Para quién</Link>
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
            Dolor crónico
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Dolor de espalda crónico: por qué el origen casi nunca está en la espalda
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              La espalda es donde duele. Rara vez es donde está el problema. Esto es lo primero que hay que entender para dejar de dar vueltas por consultas sin resultado.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Lo que tira de la espalda desde dentro
            </h2>

            <p className="text-[15px] leading-relaxed">
              El intestino, el riñón, el diafragma: todos tienen conexiones fasciales directas con la columna lumbar y torácica. Cuando un órgano está restringido &mdash;por inflamación crónica, por una cirugía antigua, por estrés sostenido&mdash; tira de la fascia que lo rodea. Esa tracción cambia la postura. Y la espalda compensa.
            </p>

            <p className="text-[15px] leading-relaxed">
              He trabajado con personas que llevaban años tratándose la espalda. Masajes, fisioterapia, ejercicios de core. Nada sostenía el cambio. Hasta que tocamos una restricción visceral &mdash;un intestino adherido, un diafragma que no se movía&mdash; y la espalda se soltó sola.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La lesión antigua que nadie conecta
            </h2>

            <p className="text-[15px] leading-relaxed">
              Un esguince de tobillo a los 20 años. El cuerpo redistribuyó el peso para proteger ese tobillo. La rodilla compensó. La cadera rotó. Y veinte años después, duele la espalda. El origen está a un metro de distancia del síntoma.
            </p>

            <p className="text-[15px] leading-relaxed">
              Lo mismo ocurre con cicatrices quirúrgicas. Una cesárea, una apendicectomía, cualquier intervención abdominal crea adherencias en la fascia. Esas adherencias reorganizan la mecánica del tronco. La espalda recibe la carga.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El componente emocional que no puedes ignorar
            </h2>

            <p className="text-[15px] leading-relaxed">
              Las costillas se cierran cuando el sistema está en protección. El diafragma se bloquea. Los hombros se enrollan hacia dentro. Todo el tórax se comprime. Y la espalda, que está detrás de todo eso, se queda atrapada entre la rigidez de delante y la gravedad.
            </p>

            <p className="text-[15px] leading-relaxed">
              No estoy diciendo que el dolor sea &laquo;emocional&raquo; en el sentido de imaginado. Estoy diciendo que los patrones emocionales crean patrones posturales. Y los patrones posturales crean dolor real.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La espalda es el mensajero
            </h2>

            <p className="text-[15px] leading-relaxed">
              Mi enfoque es leer el sistema completo antes de tocar la espalda. Cadenas fasciales, restricciones viscerales, cicatrices, patrones de carga, estado del sistema nervioso. Porque si matas al mensajero, te llegará otro.
            </p>

            <p className="text-[15px] leading-relaxed">
              He resuelto dolor de espalda crónico trabajando sobre una cicatriz quirúrgica antigua. Sobre un diafragma que no se había movido bien en años. Sobre un suelo pélvico que estaba desorganizando toda la base del tronco.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              El dolor de espalda casi nunca es un problema de espalda. Es un problema de sistema. Y el sistema hay que saber leerlo.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si llevas tiempo con dolor de espalda y nada ha funcionado, quizá nadie ha mirado donde realmente está el problema. Escríbeme.
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
