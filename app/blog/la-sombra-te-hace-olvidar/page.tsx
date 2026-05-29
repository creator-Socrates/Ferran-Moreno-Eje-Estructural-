import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "La sombra te hace olvidar que alguna vez estuviste bien",
  description: "La sombra secuestra tu memoria. Te hace olvidar las veces que estuviste regulado. El trabajo real es consolidar el nuevo yo para que se convierta en el predeterminado.",
  alternates: getBlogAlternates("es", "la-sombra-te-hace-olvidar"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="La sombra te hace olvidar que alguna vez estuviste bien"
        description="La sombra secuestra tu memoria. Te hace olvidar las veces que estuviste regulado. El trabajo real es consolidar el nuevo yo para que se convierta en el predeterminado."
        slug="la-sombra-te-hace-olvidar"
        date="2026-08-25"
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
            La sombra te hace olvidar que alguna vez estuviste bien
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              La sombra no es un concepto filosófico. Es un secuestro. Un secuestro de la persona. Cuando la sombra está activa, te toma entero: tu percepción, tu memoria, tu capacidad de evaluar dónde estás. Y lo más perverso que hace es esto: te hace olvidar que alguna vez estuviste bien.
            </p>

            <p className="text-[15px] leading-relaxed">
              He visto esto cientos de veces. Una persona lleva semanas sintiéndose bien. Ha tenido sesiones donde ha salido ligera, clara, conectada. Y de repente entra en sombra y es como si nada de eso hubiera existido. No puede acceder a esa memoria. La sombra genera una amnesia selectiva hacia tu propia fuerza.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El viejo yo y el nuevo yo
            </h2>

            <p className="text-[15px] leading-relaxed">
              La sombra se construye con rechazo y falta de validación. Es un mecanismo que aprendiste cuando no había otra opción. Pero ahora ya no te protege: te limita. Y el trabajo real es entender que dentro de ti conviven dos versiones: el viejo yo reactivo y el nuevo yo centrado. El &ldquo;vell jo&rdquo; y el &ldquo;nou jo&rdquo;, como les digo a mis clientes.
            </p>

            <p className="text-[15px] leading-relaxed">
              El viejo yo es ruidoso. Es el que reacciona primero, el que dramatiza, el que interpreta todo como amenaza. El nuevo yo es más silencioso pero más sólido. El problema es que el viejo yo lleva décadas de ventaja. Tiene los caminos neuronales más trillados. El trabajo no es eliminarlo &mdash;no puedes&mdash; sino consolidar al nuevo hasta que se convierta en el predeterminado.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La espiritualidad que no produce bienestar
            </h2>

            <p className="text-[15px] leading-relaxed">
              Hay personas que meditan, hacen retiros, leen libros de desarrollo personal y siguen sintiéndose mal. Eso no es espiritualidad. Es performance espiritual. La espiritualidad real produce un cambio tangible: te sientes mejor, piensas con más claridad, reaccionas menos. Si tu práctica no produce bienestar, revisa qué estás practicando realmente.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La co-regulación como atajo
            </h2>

            <p className="text-[15px] leading-relaxed">
              Cuando la sombra te tiene secuestrado, la fuerza de voluntad no funciona. No puedes pensar tu camino fuera de un secuestro emocional. Pero hay algo que sí funciona: estar cerca de alguien que está centrado. La co-regulación hace lo que la voluntad no puede. Tu sistema nervioso se sincroniza con el de la persona regulada y empieza a bajar. No es magia. Es biología.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              La sombra siempre va a intentar hacerte olvidar. Tu trabajo es construir un yo nuevo tan sólido que, cuando venga el secuestro, dure menos, sea menos profundo y puedas volver antes a quien realmente eres.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si sientes que cada vez que avanzas algo te devuelve al punto de partida, escríbeme. Trabajamos con eso.
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

          <RelatedArticles slug="la-sombra-te-hace-olvidar" lang="es" />
        </article>
      </main>
    </div>
  );
}
