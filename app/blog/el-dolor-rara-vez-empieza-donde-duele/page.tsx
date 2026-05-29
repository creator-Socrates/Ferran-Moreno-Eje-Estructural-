import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "El dolor rara vez empieza donde duele",
  description: "La mayoría de personas piensa el cuerpo de forma local.",
  alternates: getBlogAlternates("es", "el-dolor-rara-vez-empieza-donde-duele"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="El dolor rara vez empieza donde duele"
        description="La mayoría de personas piensa el cuerpo de forma local."
        slug="el-dolor-rara-vez-empieza-donde-duele"
        date="2026-07-31"
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
            El dolor rara vez empieza donde duele
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              La mayoría de personas piensa el cuerpo de forma local.
            </p>

            <p className="text-[15px] leading-relaxed">
              Duele la espalda. El problema está en la espalda.
            </p>

            <p className="text-[15px] leading-relaxed">
              Duele la rodilla. El problema está en la rodilla.
            </p>

            <p className="text-[15px] leading-relaxed">
              Duele el cuello. El problema está en el cuello.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero el cuerpo no funciona así.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo funciona como un sistema de tensiones, compensaciones y relaciones constantes entre estructuras.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso donde duele rara vez es donde empezó el problema.
            </p>

            <p className="text-[15px] leading-relaxed">
              La espalda puede estar compensando un diafragma rígido. La cervical puede responder a una pelvis desorganizada. La mandíbula puede estar reaccionando a un sistema nervioso en alerta. Una rodilla puede estar sosteniendo una pérdida de movilidad en el tobillo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Todo está conectado por fascia, respiración, postura y sistema nervioso.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y el cuerpo redistribuye carga constantemente para mantenerte funcionando.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ese es el motivo por el que tantas personas viven atrapadas en ciclos interminables de tratamiento:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>masajean donde duele,</li>
              <li>fortalecen donde falla,</li>
              <li>infiltran donde hay inflamación,</li>
              <li>estiran donde hay tensión.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Y el síntoma vuelve.
            </p>

            <p className="text-[15px] leading-relaxed">
              No porque el tratamiento sea inútil.
            </p>

            <p className="text-[15px] leading-relaxed">
              Sino porque el cuerpo sigue organizado alrededor del mismo patrón.
            </p>

            <p className="text-[15px] leading-relaxed">
              La zona dolorosa muchas veces es simplemente la estructura que está pagando la factura del resto del sistema.
            </p>

            <p className="text-[15px] leading-relaxed">
              Es la parte que ya no puede compensar más.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso cambia completamente cómo lees el cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed">
              La pregunta deja de ser:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              "¿Dónde duele?"
            </p>

            <p className="text-[15px] leading-relaxed">
              Y pasa a ser:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              "¿Qué está obligando al cuerpo a organizarse así?"
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí es donde aparecen cosas sorprendentes.
            </p>

            <p className="text-[15px] leading-relaxed">
              Personas con dolor lumbar crónico que mejoran trabajando el abdomen o el diafragma. Cervicales que cambian cuando reorganizas la pelvis. Hombros que se liberan cuando el tórax recupera movilidad.
            </p>

            <p className="text-[15px] leading-relaxed">
              No porque sea magia.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque el cuerpo funciona en cadenas, no en piezas aisladas.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando entiendes eso, el dolor deja de ser un enemigo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Empieza a verse como una señal.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un mensajero que te está mostrando dónde el sistema ya no puede seguir compensando.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y muchas veces el lugar donde el cuerpo grita no es el lugar donde empezó el problema.
            </p>

            <p className="text-[15px] leading-relaxed">
              Es simplemente el último eslabón de la cadena.
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
