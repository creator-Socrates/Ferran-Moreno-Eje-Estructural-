import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Por qué tomas malas decisiones cuando estás estresado",
  description: "No decides mal. Decides desregulado. Cómo el sistema nervioso secuestra tus decisiones.",
  alternates: {
    canonical: "/blog/por-que-tomas-malas-decisiones-cuando-estas-estresado",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Por qué tomas malas decisiones cuando estás estresado"
        description="No decides mal. Decides desregulado. Cómo el sistema nervioso secuestra tus decisiones."
        slug="por-que-tomas-malas-decisiones-cuando-estas-estresado"
        date="2026-05-09"
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
            Por qué tomas malas decisiones cuando estás estresado
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              No decides mal. Decides desregulado. Esa es la distinción que cambia todo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Tu sistema nervioso funciona como un semáforo interno. Cuando estás en verde, tu corteza prefrontal está activa. Puedes pensar, evaluar opciones, proyectar consecuencias. Tienes acceso a la parte del cerebro que realmente toma buenas decisiones.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando pasas a naranja, el sistema se activa. Hay una amenaza percibida, un plazo, una discusión, una acumulación de tensión. Tu cuerpo empieza a priorizar la supervivencia sobre el razonamiento. La corteza prefrontal pierde protagonismo. Las decisiones se vuelven reactivas, impulsivas, cortoplacistas.
            </p>

            <p className="text-[15px] leading-relaxed">
              En rojo, directamente se apaga. Fight, flight o freeze. Tu cuerpo toma el mando y la mente queda fuera de juego. En ese estado puedes gritar, huir, quedarte paralizado o decir algo que no piensas. No es un fallo de carácter. Es biología.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El cuerpo decide antes que la mente
            </h2>

            <p className="text-[15px] leading-relaxed">
              Esto no es una teoría. Es neurofisiología básica. El cuerpo procesa la amenaza antes de que la mente consciente se entere. La amígdala reacciona en milisegundos. La corteza prefrontal necesita tiempo, contexto, calma. Si tu sistema nervioso está en naranja o rojo, no le estás dando ninguna de esas condiciones.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso no necesitas más fuerza de voluntad. La voluntad es una función cognitiva que depende de un sistema nervioso regulado. Pedirle voluntad a alguien en rojo es como pedirle a un coche sin gasolina que acelere. No es cuestión de querer. Es cuestión de estado.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El patrón que se repite
            </h2>

            <p className="text-[15px] leading-relaxed">
              Lo veo cada semana. Personas inteligentes, capaces, con recursos, que toman decisiones que no les representan. Comen lo que no quieren comer. Dicen que sí cuando quieren decir que no. Explotan en una conversación que no lo merecía. Se quedan paralizados ante algo que deberían resolver.
            </p>

            <p className="text-[15px] leading-relaxed">
              No es que sean débiles. Es que su sistema nervioso lleva semanas, meses o años en naranja. Crónicamente activado. Y desde ese estado, las únicas decisiones disponibles son las de supervivencia.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Regulación, no control
            </h2>

            <p className="text-[15px] leading-relaxed">
              La solución no es controlar tus emociones. Es devolver tu sistema nervioso a verde. A un estado donde la corteza prefrontal está disponible, donde puedes respirar antes de reaccionar, donde el cuerpo no está pidiendo a gritos que huyas o pelees.
            </p>

            <p className="text-[15px] leading-relaxed">
              Regular no es relajarse. Es devolver al sistema su rango natural de respuesta. Que pueda activarse cuando toca y volver a la calma cuando la amenaza pasa. Eso es regulación.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Si tu cuerpo está en rojo, ningún pensamiento te va a llevar a verde. Primero baja el sistema. Después decide.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si llevas tiempo tomando decisiones desde un estado que no te representa, podemos trabajar en ello.
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

          <RelatedArticles slug="por-que-tomas-malas-decisiones-cuando-estas-estresado" lang="es" />
        </article>
      </main>
    </div>
  );
}
