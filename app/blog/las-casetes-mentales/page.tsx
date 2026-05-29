import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Las casetes mentales que recrean tu sufrimiento",
  description: "Las narrativas repetitivas son como casetes que pones en bucle. Y el cuerpo almacena memorias que ni siquiera son tuyas. Cuando las liberas, la limitación desaparece.",
  alternates: {
    canonical: "/blog/las-casetes-mentales",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Las casetes mentales que recrean tu sufrimiento"
        description="Las narrativas repetitivas son como casetes que pones en bucle. Y el cuerpo almacena memorias que ni siquiera son tuyas. Cuando las liberas, la limitación desaparece."
        slug="las-casetes-mentales"
        date="2026-08-28"
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
            Las casetes mentales que recrean tu sufrimiento
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              &ldquo;Esas son como casetes que te vas repitiendo. Cada vez que lo estás diciendo lo pones y te está recreando el sufrimiento.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              Lo veo constantemente en sesión. La persona llega y empieza a contarme la misma historia que me contó la semana pasada. Con las mismas palabras. El mismo tono. La misma carga emocional. No está procesando. Está reproduciendo. Ha encontrado una narrativa y la pone en bucle como quien mete un casete en el reproductor y le da al play.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La historia que te cuentas es la historia que vives
            </h2>

            <p className="text-[15px] leading-relaxed">
              Cada vez que repites la narrativa, tu cuerpo la recrea. Las mismas hormonas de estrés, la misma tensión muscular, la misma compresión en el pecho. Tu sistema nervioso no distingue entre lo que está pasando ahora y lo que estás recordando con intensidad. Para él, es lo mismo. Así que cada vez que pones el casete, estás viviendo el sufrimiento de nuevo. Literalmente.
            </p>

            <p className="text-[15px] leading-relaxed">
              El primer paso es darte cuenta de que estás en bucle. El segundo es dejar de darle al play.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Memorias falsas que habitan en el cuerpo
            </h2>

            <p className="text-[15px] leading-relaxed">
              La historia es que un día estaba haciendo una sesión con Riccardo Cassiani de TRE, buenísima, y al acabar la sesión, cuando iba a ponerme los zapatos, fue como si alguien soplase sobre mi cabeza y una memoria que tenía desapareciese en ese momento.
            </p>

            <p className="text-[15px] leading-relaxed">
              Durante años había tenido problemas haciendo un estiramiento de aductores. En mi memoria era porque me había hecho daño de pequeño haciendo un estiramiento, pero de repente esa memoria se desvaneció como polvo del desierto que se lleva el viento, y entonces vi lo que había pasado en realidad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Yo debía tener 5 años y estaba haciendo taekwondo. De repente subió las escaleras mi profesor, Luis, que debía tener 14 o 15, y venía cojeando con mucho dolor. Todos estábamos en shock. Y entonces nos dijo que alguien, haciendo la posición del sapo con pies juntos, se le había subido encima y le había hecho daño. Ouch. Todos estremecimos al escuchar la historia.
            </p>

            <p className="text-[15px] leading-relaxed">
              A partir de ese día, cuando íbamos a hacer ese estiramiento, yo decía que no lo podía hacer porque me había hecho daño. Wow wow wow. Y ahora, con 28 años, estaba viéndolo vividamente después de la sesión con Riccardo. Estaba fascinado. Pero a la vez pensaba: si esa memoria es mentira, ¿cuántas cosas de las que tengo 100% certeza no lo son...?
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La liberación es instantánea
            </h2>

            <p className="text-[15px] leading-relaxed">
              Lo fascinante es lo que pasa cuando el cuerpo suelta una memoria falsa. La limitación desaparece. No gradualmente. De golpe. El ejercicio que no podías hacer, lo haces. El movimiento que dabas por peligroso deja de serlo. Porque nunca hubo una lesión real. Hubo una historia que el cuerpo se creyó.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y lo más fuerte no fue solo recuperar el movimiento. Fue darme cuenta de otra cosa: si esa memoria era mentira, cuántas cosas de las que tengo un cien por cien de certeza no lo son. Cuántas decisiones, límites y formas de moverme están organizadas alrededor de historias que el cuerpo guardó como verdad absoluta y nunca volvió a revisar.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Deja de darle al play. Muchas de las historias que te limitan no son tuyas. Y muchas de las que son tuyas ya no son verdad. El cuerpo puede soltar lo que la mente insiste en repetir.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si llevas años con una limitación que nadie te ha sabido resolver, puede que el problema no sea estructural.
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

          <RelatedArticles slug="las-casetes-mentales" lang="es" />
        </article>
      </main>
    </div>
  );
}
