import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Roncesvalles morir, La Coruña vivir",
  description: "Después de una etapa que me llevó al límite, recibí una señal clara de que tenía que hacer el Camino de Santiago.",
  alternates: {
    canonical: "/blog/roncesvalles-morir-la-coruna-vivir",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Roncesvalles morir, La Coruña vivir"
        description="Después de una etapa que me llevó al límite, recibí una señal clara de que tenía que hacer el Camino de Santiago."
        slug="roncesvalles-morir-la-coruna-vivir"
        date="2026-08-31"
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
            Mi historia
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Roncesvalles morir, La Coruña vivir
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              Después de una etapa que me llevó al límite, recibí una señal clara de que tenía que hacer el Camino de Santiago.
            </p>

            <p className="text-[15px] leading-relaxed">
              No como turismo. No como tradición.
            </p>

            <p className="text-[15px] leading-relaxed">
              Como cierre.
            </p>

            <p className="text-[15px] leading-relaxed">
              Me deshice de todo lo que pude. Di el portátil a un amigo. Dejé ropa. El dinero que intenté transferir no llegó porque la cuenta estaba cerrada.
            </p>

            <p className="text-[15px] leading-relaxed">
              Empecé a caminar con lo mínimo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Roncesvalles era morir.
La Coruña era vivir.
            </p>

            <p className="text-[15px] leading-relaxed">
              Esa era la dirección.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y caminé.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero cuando llegué a Santiago, algo ocurrió que no esperaba.
            </p>

            <p className="text-[15px] leading-relaxed">
              Caí de rodillas.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y de repente hubo un cierre. Algo que se había abierto se cerró de golpe. Dejé de ser peregrino. Ya no tenía que ir a ningún sitio más.
            </p>

            <p className="text-[15px] leading-relaxed">
              No necesité llegar a La Coruña.
            </p>

            <p className="text-[15px] leading-relaxed">
              El proceso se completó antes de lo previsto.
            </p>

            <p className="text-[15px] leading-relaxed">
              No porque yo lo decidiera. Porque el cuerpo decidió que ahí terminaba.
            </p>

            <p className="text-[15px] leading-relaxed">
              Volví a casa de mis padres. Siempre me tenían la puerta abierta. Las veinte veces que he vuelto a casa para empezar mi vida de nuevo.
            </p>

            <p className="text-[15px] leading-relaxed">
              En Barcelona, el primer intento de conseguir clientes fue ir a una carnicería. Mi madre me había dicho que la carnicera estaba interesada. Cuando le dije el precio, me tiró el flyer casi a la cara.
            </p>

            <p className="text-[15px] leading-relaxed">
              Así empiezan las cosas.
            </p>

            <p className="text-[15px] leading-relaxed">
              No con aplausos.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Con un flyer en el suelo y todo por construir.
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
