import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Las personas con la mochila: por qué los grupos infelices te arrastran",
  description: "Las personas que cargan con su mochila sin saberlo funcionan como zombis. La infelicidad colectiva no es personal, es inconsciente.",
  alternates: {
    canonical: "/blog/las-personas-con-la-mochila",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Las personas con la mochila: por qué los grupos infelices te arrastran"
        description="Las personas que cargan con su mochila sin saberlo funcionan como zombis. La infelicidad colectiva no es personal, es inconsciente."
        slug="las-personas-con-la-mochila"
        date="2026-09-11"
        tag="Proceso"
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
            Proceso
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Las personas con la mochila: por qué los grupos infelices te arrastran
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Esto es completamente diferente a todas las otras veces que has venido aquí. Porque cada vez que venías, venías con una mochila enorme.
            </p>

            <p className="text-[15px] leading-relaxed">
              Se lo dije a una clienta al principio de una sesión. Y esa imagen, la de la mochila, es una de las más útiles que conozco para entender cómo funciona la inercia emocional de los grupos.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La metáfora del zombi
            </h2>

            <p className="text-[15px] leading-relaxed">
              Todas esas películas de zombis que vemos, ¿qué son en realidad? Las personas con la mochila son zombis. Son muertos vivientes. Caminan, hablan, funcionan, pero no están presentes. Están cargando algo que ni siquiera saben que llevan.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y lo más importante: no es personal. No es que alguien te mire y piense &ldquo;yo estoy mal y ella está bien, voy a hundirla&rdquo;. Es inconsciente. Es más bien: &ldquo;yo no soy feliz y ella sí lo es. ¿Por qué es feliz si yo no lo soy?&rdquo;. Eso no se piensa. Se actúa. Sin darse cuenta.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El arrastre invisible
            </h2>

            <p className="text-[15px] leading-relaxed">
              Cuando estás en un grupo donde la mayoría carga con su mochila, la inercia del grupo te arrastra hacia abajo. No con maldad. Con gravedad. Es el peso colectivo de todo lo no procesado, lo no mirado, lo no resuelto.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y si tú empiezas a estar mejor, a estar más ligero, a sonreír sin motivo, eso genera una fricción. Porque tu ligereza les recuerda su peso. Y eso es incómodo para todos.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La biblioteca de remedios
            </h2>

            <p className="text-[15px] leading-relaxed">
              La solución no es aislarte. Es construir tu propia biblioteca de remedios. Cosas que te devuelven a ti cuando el entorno te desplaza.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cantar. Tararear. La vibración limpia. Respirar con intención. Naturaleza. Amigos que no cargan mochila. Movimiento. Silencio. Cada persona necesita encontrar los suyos. Pero necesitas tenerlos identificados y accesibles.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La felicidad no es el premio
            </h2>

            <p className="text-[15px] leading-relaxed font-medium">
              Si no estás feliz, no puedes ser espiritual. La felicidad no es la recompensa al final del camino. Es el prerrequisito. Es la base desde la que todo lo demás puede construirse.
            </p>

            <p className="text-[15px] leading-relaxed">
              No se trata de estar feliz todo el tiempo. Se trata de que tu estado base sea ligero, no pesado. Que cuando te desvíes, sepas volver. Y que la mochila que llevas sea tuya, elegida, y no la de otros.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si sientes que cargas con algo que no es tuyo, podemos trabajar para soltar esa mochila.
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

          <RelatedArticles slug="las-personas-con-la-mochila" lang="es" />
        </article>
      </main>
    </div>
  );
}
