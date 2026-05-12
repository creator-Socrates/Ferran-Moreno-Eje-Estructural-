import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Roncesvalles morir, La Coruña vivir",
  description: "Después de una crisis profunda recibí la instrucción de caminar el Camino de Santiago. Lo regalé todo y empecé a andar.",
  alternates: {
    canonical: "/blog/roncesvalles-morir-la-coruna-vivir",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Roncesvalles morir, La Coruña vivir"
        description="Después de una crisis profunda recibí la instrucción de caminar el Camino de Santiago. Lo regalé todo y empecé a andar."
        slug="roncesvalles-morir-la-coruna-vivir"
        date="2026-07-31"
        tag="Mi historia"
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
            Mi historia
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Roncesvalles morir, La Coruña vivir
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Hubo una relación que abrió algo oscuro en mí. Algo que no sabía que estaba ahí. Empecé a esconder los cuchillos de la cocina. No podía dormir. Dormía con la Biblia en una mano y el incienso encendido. No era religión. Era supervivencia.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La iglesia en Malasia
            </h2>

            <p className="text-[15px] leading-relaxed">
              Estaba en Malasia cuando entré en una iglesia. No sé por qué entré. Sentí que una energía dorada me tocaba y todo yo se abría. No hay otra forma de describirlo. Fue físico, fue emocional, fue algo que no tenía nombre. Y en ese momento recibí la instrucción &mdash; clara, sin dudas &mdash; de que tenía que caminar el Camino de Santiago.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Regalar todo y empezar
            </h2>

            <p className="text-[15px] leading-relaxed">
              Le di el portátil a Xavier. Regalé la ropa. Regalé el dinero que me quedaba. Me quedé con lo mínimo. Pues aquí empiezo. Roncesvalles. El primer paso. Y cada paso después de ese era un paso más lejos de lo que había sido y un paso más cerca de algo que todavía no sabía qué era.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Santiago: el cierre
            </h2>

            <p className="text-[15px] leading-relaxed">
              Cuando llegué a Santiago, caí de rodillas. Y de repente es como que hubo un cierre. Algo que se había abierto se cerró de golpe y entonces yo dejé de ser peregrino. No necesitaba seguir hasta A Coruña. No necesitaba nada más. Lo que tenía que pasar había pasado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Roncesvalles era morir y La Coruña vivir. Pero el punto de llegada fue Santiago. Allí terminó algo. Allí empezó otra cosa.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Volver a empezar, otra vez
            </h2>

            <p className="text-[15px] leading-relaxed">
              Volví a casa de mis padres. Siempre me tenían la puerta abierta, las veinte veces que he vuelto a casa para empezar mi vida de nuevo. Sin juicio. Sin condiciones. La puerta abierta.
            </p>

            <p className="text-[15px] leading-relaxed">
              Mis primeros días en Barcelona buscando clientes: imprimí folletos, fui puerta a puerta. Un carnicero me cogió el folleto, lo miró y me lo tiró a la cara. Así empecé.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Pero ya no era el mismo que había salido de Roncesvalles. Lo que murió en el Camino tenía que morir. Y lo que quedó era suficiente para construir todo lo que vino después.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si sientes que algo necesita cerrarse para que pueda empezar lo siguiente, escríbeme.
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

          <RelatedArticles slug="roncesvalles-morir-la-coruna-vivir" lang="es" />
        </article>
      </main>
    </div>
  );
}
