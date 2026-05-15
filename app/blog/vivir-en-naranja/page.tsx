import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Vivir en naranja parece normal hasta que sales de ahí",
  description: "La mayoría de personas no sabe realmente cómo se siente un sistema nervioso regulado.",
  alternates: {
    canonical: "/blog/vivir-en-naranja",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Vivir en naranja parece normal hasta que sales de ahí"
        description="La mayoría de personas no sabe realmente cómo se siente un sistema nervioso regulado."
        slug="vivir-en-naranja"
        date="2026-06-22"
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
            Sistema nervioso
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Vivir en naranja parece normal hasta que sales de ahí
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              La mayoría de personas no sabe realmente cómo se siente un sistema nervioso regulado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y no porque nunca lo hayan tenido.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque llevan demasiado tiempo lejos de ahí.
            </p>

            <p className="text-[15px] leading-relaxed">
              Uso mucho la imagen del semáforo para explicarlo:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>verde,</li>
              <li>naranja,</li>
              <li>rojo.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Verde es regulación. Hay claridad, capacidad de respuesta, margen interno. El cuerpo puede activarse cuando hace falta y volver a bajar después.
            </p>

            <p className="text-[15px] leading-relaxed">
              Naranja es otra cosa.
            </p>

            <p className="text-[15px] leading-relaxed">
              El sistema sigue funcionando, pero desde vigilancia constante. Hay tensión de fondo, respiración más corta, menos recuperación, menos espacio interno. El cuerpo está preparado para responder incluso cuando no está pasando nada grave.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y lo más importante:
muchísima gente vive ahí desde hace años.
            </p>

            <p className="text-[15px] leading-relaxed">
              Se despiertan ya acelerados.
Comen rápido.
Respiran arriba.
Descansan sin recuperar.
Nunca terminan de bajar del todo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero como esa activación lleva tanto tiempo presente, terminan creyendo que eso es su personalidad.
            </p>

            <p className="text-[15px] leading-relaxed">
              &ldquo;Soy nervioso.&rdquo;
&ldquo;Siempre estoy activo.&rdquo;
&ldquo;No sé parar.&rdquo;
&ldquo;Yo funciono así.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              Muchas veces no es identidad.
Es adaptación fisiológica.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo se acostumbra tanto a vivir en alerta que el estado alterado se convierte en normalidad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso cambia completamente cómo percibes la vida:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>todo parece urgente,</li>
              <li>todo pesa más,</li>
              <li>todo consume más energía,</li>
              <li>el cuerpo nunca termina de sentirse seguro.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Y desde ahí incluso descansar puede generar incomodidad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Hay personas que cuando empiezan a regularse sienten algo rarísimo:
silencio.
            </p>

            <p className="text-[15px] leading-relaxed">
              Silencio interno.
            </p>

            <p className="text-[15px] leading-relaxed">
              De repente el cuerpo deja de sostener ruido constante:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>menos presión,</li>
              <li>menos vigilancia,</li>
              <li>menos tensión de fondo,</li>
              <li>menos necesidad de anticipar.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Y ahí descubren cuánto esfuerzo estaban haciendo simplemente para funcionar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso es algo muy importante:
muchas personas no están cansadas por lo que hacen.
            </p>

            <p className="text-[15px] leading-relaxed">
              Están cansadas por el estado fisiológico desde el que lo hacen.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso regular un sistema nervioso cambia muchísimo más que el estrés.
Cambia la percepción completa de la vida.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo deja de actuar como si estuviera sobreviviendo constantemente.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Y desde ahí aparece algo que mucha gente no recordaba:
tener espacio interno otra vez.
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
