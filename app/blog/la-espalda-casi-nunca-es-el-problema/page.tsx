import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "La espalda casi nunca es el problema",
  description: "Si pudiera decir una sola cosa a todas las personas que llevan años tratándose la espalda sin resultados sería esto:",
  alternates: getBlogAlternates("es", "la-espalda-casi-nunca-es-el-problema"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="La espalda casi nunca es el problema"
        description="Si pudiera decir una sola cosa a todas las personas que llevan años tratándose la espalda sin resultados sería esto:"
        slug="la-espalda-casi-nunca-es-el-problema"
        date="2026-08-14"
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
            Trabajo corporal
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            La espalda casi nunca es el problema
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Si pudiera decir una sola cosa a todas las personas que llevan años tratándose la espalda sin resultados sería esto:
            </p>

            <p className="text-[15px] leading-relaxed">
              La espalda casi nunca es donde empezó el problema.
            </p>

            <p className="text-[15px] leading-relaxed">
              Es donde termina.
            </p>

            <p className="text-[15px] leading-relaxed">
              Es el lugar que paga la factura de todo lo que no funciona bien por debajo, por delante o por dentro.
            </p>

            <p className="text-[15px] leading-relaxed">
              Una pelvis desorganizada cambia la mecánica lumbar. Un diafragma rígido tensiona las dorsales. Un abdomen con restricciones altera toda la columna. Una respiración superficial mantenida durante años reorganiza la espalda alrededor de un patrón que no debería ser permanente.
            </p>

            <p className="text-[15px] leading-relaxed">
              La espalda compensa.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y como es la zona que más se queja, es la que más se trata.
            </p>

            <p className="text-[15px] leading-relaxed">
              Masajes.<br />
              Estiramientos.<br />
              Fortalecimiento.<br />
              Infiltraciones.<br />
              Calor.<br />
              Frío.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y el alivio viene. Y se va.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque nadie miró qué estaba obligando a la espalda a organizarse así.
            </p>

            <p className="text-[15px] leading-relaxed">
              En consulta, muchas veces ni toco la espalda al principio. Trabajo lo que está delante. Lo que está debajo. Lo que está tirando.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y cuando eso cambia, la espalda se reorganiza sola.
            </p>

            <p className="text-[15px] leading-relaxed">
              Sin forzarla.<br />
              Sin manipularla.<br />
              Sin perseguir el dolor.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque la espalda no era el problema.
            </p>

            <p className="text-[15px] leading-relaxed">
              Era el mensajero.
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
