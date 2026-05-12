import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Entré doblado y salí recto — Qué pasa realmente en una sesión",
  description: "Qué pasa en una sesión de Rolfing y trabajo corporal con Ferran Moreno. Testimonios reales de personas que entraron con un problema y salieron distintas.",
  alternates: {
    canonical: "/blog/que-pasa-en-una-sesion",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Entré doblado y salí recto — Qué pasa realmente en una sesión"
        description="Qué pasa en una sesión de Rolfing y trabajo corporal con Ferran Moreno. Testimonios reales de personas que entraron con un problema y salieron distintas."
        slug="que-pasa-en-una-sesion"
        date="2026-05-26"
        tag="Sesión"
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
            Sesión
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            &ldquo;Entré doblado y salí recto&rdquo; — qué pasa realmente en una sesión
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Quim Clark, CEO de MQ Events, lo dijo así:
            </p>

            <blockquote className="border-l-2 pl-6 my-6 text-[15px] leading-relaxed" style={{ borderColor: "var(--text-secondary)", color: "var(--text-secondary)" }}>
              &ldquo;Pocos somos conscientes de la importancia de tener a un profesional que te ayude con cómo te sientes y cómo gestionarlo. Ferran es mucho más que eso. Trabajo bajo mucha presión en el sector de eventos y salí de la sesión literalmente distinto: entré doblado y salí recto, con ganas de comerme el mundo.&rdquo;
              <span className="block mt-2 text-[13px]">— Quim Clark, CEO MQ Events, Barcelona</span>
            </blockquote>

            <p className="text-[15px] leading-relaxed">
              Philip Thompson vino de visita con su familia. Durante su sesión, al final, mencionó que tenía un dedo con esguince. Cuando fue a comprobarlo, el dolor ya no estaba.
            </p>

            <blockquote className="border-l-2 pl-6 my-6 text-[15px] leading-relaxed" style={{ borderColor: "var(--text-secondary)", color: "var(--text-secondary)" }}>
              &ldquo;Estuvimos de visita por Barcelona unos días y un amigo nos recomendó a Ferran. Fuimos con nuestros tres hijos y nos vio a todos. Fue absolutamente asombroso. Al final de mi sesión me preguntó si tenía otros dolores o molestias. Dije que en realidad mi dedo tenía un esguince. ¡Dijo que lo revisara y ya no estaba! Resolvió mi tendón de Aquiles distendido, trabajó en un viejo problema de espalda y me ayudó a corregir mi postura. Este hombre realmente sabe lo que hace. Muy recomendable, ¡y también fue genial con los niños!&rdquo;
              <span className="block mt-2 text-[13px]">— Philip Thompson, USA</span>
            </blockquote>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              No son milagros
            </h2>

            <p className="text-[15px] leading-relaxed">
              La ansiedad de Lorena desapareció. Laura Cabré llegó con vértigo, bruxismo y dolor crónico de un accidente de moto. En dos sesiones, todo resuelto.
            </p>

            <blockquote className="border-l-2 pl-6 my-6 text-[15px] leading-relaxed" style={{ borderColor: "var(--text-secondary)", color: "var(--text-secondary)" }}>
              &ldquo;Las sesiones con Ferran han sido el descubrimiento del verano. Una amiga me lo recomendó y desde la primera sesión noté mejora. Mi ansiedad desapareció, mi postura cambió y me siento más fuerte y con más seguridad. Gracias Ferran. Estoy súper bien.&rdquo;
              <span className="block mt-2 text-[13px]">— Lorena S. T., Funcionaria, Valencia</span>
            </blockquote>

            <blockquote className="border-l-2 pl-6 my-6 text-[15px] leading-relaxed" style={{ borderColor: "var(--text-secondary)", color: "var(--text-secondary)" }}>
              &ldquo;En solo dos sesiones logró eliminar un vértigo, un bruxismo y varias dolencias crónicas derivadas de un accidente de moto. Además, en cada sesión salgo con una profunda sensación de paz interior. Solo puedo dar las gracias.&rdquo;
              <span className="block mt-2 text-[13px]">— Laura Cabré, Interior Designer, Barcelona</span>
            </blockquote>

            <p className="text-[15px] leading-relaxed">
              Esto no es magia. Es lo que pasa cuando abordas la organización del cuerpo en lugar de perseguir síntomas.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Cómo es una sesión típica
            </h2>

            <p className="text-[15px] leading-relaxed">
              Leo el cuerpo de pie. Después, en la camilla. El trabajo manual puede ser estructural, visceral o energético. La sesión sigue lo que el cuerpo presenta, no un plan predeterminado. Cada persona es distinta. Cada sesión es distinta.
            </p>

            <p className="text-[15px] leading-relaxed">
              La mayoría de personas reportan sentirse más altas, más ligeras, más claras. Algunas lo describen como: &ldquo;no sé qué me has hecho, pero algo es diferente.&rdquo;
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El denominador común
            </h2>

            <p className="text-[15px] leading-relaxed">
              Lo que tienen en común todos estos casos es que nadie vino buscando exactamente lo que encontró. Quim vino por presión laboral y salió recto. Philip vino por la espalda y se fue sin el esguince del dedo. Lorena vino por recomendación y perdió la ansiedad.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Cuando el cuerpo se reorganiza, los síntomas caen solos. No hace falta perseguirlos uno a uno.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si quieres saber qué pasaría en tu caso, escríbeme. Cada cuerpo cuenta una historia distinta.
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
