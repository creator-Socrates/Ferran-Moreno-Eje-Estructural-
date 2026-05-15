import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "El cuerpo decide antes que la mente",
  description: "Tu cuerpo responde antes de que tengas tiempo de pensar.",
  alternates: {
    canonical: "/blog/el-cuerpo-decide-antes-que-la-mente",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="El cuerpo decide antes que la mente"
        description="Tu cuerpo responde antes de que tengas tiempo de pensar."
        slug="el-cuerpo-decide-antes-que-la-mente"
        date="2026-05-25"
        tag="Fundamentos"
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
            Fundamentos
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            El cuerpo decide antes que la mente
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              Tu cuerpo responde antes de que tengas tiempo de pensar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso no es filosofía.
Es neurofisiología básica.
            </p>

            <p className="text-[15px] leading-relaxed">
              Mucho antes de que aparezca un pensamiento consciente, el cuerpo ya empezó a reaccionar:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>la respiración cambió,</li>
              <li>el tono muscular cambió,</li>
              <li>la postura cambió,</li>
              <li>el ritmo cardíaco cambió,</li>
              <li>la percepción del entorno cambió.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              La mente muchas veces llega después.
            </p>

            <p className="text-[15px] leading-relaxed">
              Interpretando.
            </p>

            <p className="text-[15px] leading-relaxed">
              Justificando.
            </p>

            <p className="text-[15px] leading-relaxed">
              Construyendo una narrativa sobre algo que el cuerpo ya decidió.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso explica muchísimas cosas que la mayoría de personas viven sin entender:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>por qué una conversación puede agotarte físicamente,</li>
              <li>por qué una notificación cambia tu estado interno en segundos,</li>
              <li>por qué alguien entra en una habitación y tu cuerpo se tensa antes de saber por qué,</li>
              <li>por qué hay personas que te regulan y otras que te activan.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              El cuerpo detecta señales constantemente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Tono de voz.
Velocidad.
Mirada.
Presión.
Espacio.
Ritmo.
Microexpresiones.
Tensión ambiental.
            </p>

            <p className="text-[15px] leading-relaxed">
              Tu sistema nervioso está leyendo información todo el tiempo mucho antes de que aparezca un pensamiento racional.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso intentar resolver todo desde la mente tiene límites enormes.
            </p>

            <p className="text-[15px] leading-relaxed">
              La mayoría de personas creen que primero piensan y después sienten.
            </p>

            <p className="text-[15px] leading-relaxed">
              Muchas veces ocurre al revés.
            </p>

            <p className="text-[15px] leading-relaxed">
              Primero el cuerpo entra en defensa.
Después la mente fabrica una explicación.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso se ve clarísimo en estados de ansiedad o estrés crónico.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo ya está activado:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>pecho cerrado,</li>
              <li>mandíbula tensa,</li>
              <li>respiración corta,</li>
              <li>abdomen contraído,</li>
              <li>sistema en alerta.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Y entonces la mente empieza a buscar:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              &ldquo;¿Qué pasa?&rdquo;
<p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
  &ldquo;¿Qué hice mal?&rdquo;
</p>
<p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
  &ldquo;¿Por qué me siento así?&rdquo;
</p>
            </p>

            <p className="text-[15px] leading-relaxed">
              La sensación apareció antes que la historia.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso muchas decisiones aparentemente &ldquo;irracionales&rdquo; no son irracionales para el cuerpo. Son respuestas de supervivencia.
            </p>

            <p className="text-[15px] leading-relaxed">
              El problema es que muchas personas viven tanto tiempo en activación que terminan tomando decisiones desde un sistema nervioso desregulado como si eso fuera normal.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí cambia completamente la percepción:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>todo parece más urgente,</li>
              <li>todo pesa más,</li>
              <li>todo consume más energía,</li>
              <li>todo se interpreta desde amenaza.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Y desde ahí, incluso una pequeña situación puede sentirse enorme.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso regular el cuerpo cambia también la claridad mental.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando el sistema nervioso sale de defensa:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>la respiración se abre,</li>
              <li>la percepción cambia,</li>
              <li>la capacidad de pensar cambia,</li>
              <li>la sensación interna cambia.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Muchas veces no necesitas pensar mejor.
            </p>

            <p className="text-[15px] leading-relaxed">
              Necesitas un cuerpo que deje de sentir que está sobreviviendo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque el cuerpo decide antes que la mente.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Y la mente casi siempre intenta explicar después lo que el cuerpo ya puso en marcha.
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
