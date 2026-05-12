import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "La mujer que leía la espalda como si fuera braille",
  description: "En Robleda conocí a una curandera que leía la espalda con los dedos. Ese día aprendí algo que no enseñan en ninguna escuela.",
  alternates: {
    canonical: "/blog/la-mujer-que-leia-la-espalda",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="La mujer que leía la espalda como si fuera braille"
        description="En Robleda conocí a una curandera que leía la espalda con los dedos. Ese día aprendí algo que no enseñan en ninguna escuela."
        slug="la-mujer-que-leia-la-espalda"
        date="2026-07-24"
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
            La mujer que leía la espalda como si fuera braille
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Robleda. Un pueblo en la España rural donde el tiempo funciona diferente. Llegué temprano, sin haber desayunado. El bar estaba cerrado. Había cola para ver a la curandera del pueblo. Y yo esperando, con el estómago vacío y el cuerpo agotado.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Caer en brazos de Diego
            </h2>

            <p className="text-[15px] leading-relaxed">
              De repente todo se fue. Me desvanecí y caí en los brazos de Diego. Y entonces vino algo que no esperaba. Sentí que había llegado mi hora. Vi esa oscuridad muy profunda y un túnel y empecé a subir. Se sentía muy agradable, como una sensación de estar en la playa cuando te da el sol. No había miedo. Solo una paz enorme y una dirección clara: hacia arriba.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero algo me devolvió. Unas presencias &mdash; no sé cómo llamarlas de otra forma &mdash; me dijeron que no era mi momento. Que tenía que volver. Abrí los ojos. Me dieron leche de cabra con limón para reanimarme. Y seguí esperando mi turno.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Los dedos que leían
            </h2>

            <p className="text-[15px] leading-relaxed">
              Cuando por fin entré, la curandera empezó a tocar la espalda, a recorrerla con sus dedos, como si fuese capaz de ir leyendo como una persona invidente que lee el braille. No usaba diagnósticos ni nombres técnicos. No necesitaba resonancias ni radiografías. Sus dedos sabían. Había aprendido colocando huesos de cabras. De ahí había pasado a personas. Y lo que hacía era real.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Lo que vi en los ancianos de Robleda
            </h2>

            <p className="text-[15px] leading-relaxed">
              Hay un detalle que se me quedó grabado. Las personas mayores de Robleda caminaban notablemente más erguidas que en otros pueblos. No era casualidad. Generaciones enteras habían pasado por las manos de esa mujer y de quienes vinieron antes que ella. El cuerpo del pueblo entero contaba una historia diferente.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Ese día aprendí algo que no enseñan en ninguna escuela: que el conocimiento más profundo sobre el cuerpo humano a veces vive en los dedos de alguien que nunca ha leído un libro de anatomía. Y que la sabiduría del tacto no necesita título.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si buscas un trabajo corporal que escuche antes de actuar, escríbeme.
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

          <RelatedArticles slug="la-mujer-que-leia-la-espalda" lang="es" />
        </article>
      </main>
    </div>
  );
}
