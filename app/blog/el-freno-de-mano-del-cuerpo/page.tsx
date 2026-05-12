import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "El freno de mano del cuerpo: por qué forzarte es la peor medicina",
  description: "Un camionero jubilado con 4 millones de kilómetros descubrió que su cuerpo tiraba del freno de mano cada vez que lo forzaba. Su medicina real era caminar.",
  alternates: {
    canonical: "/blog/el-freno-de-mano-del-cuerpo",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="El freno de mano del cuerpo: por qué forzarte es la peor medicina"
        description="Un camionero jubilado con 4 millones de kilómetros descubrió que su cuerpo tiraba del freno de mano cada vez que lo forzaba. Su medicina real era caminar."
        slug="el-freno-de-mano-del-cuerpo"
        date="2026-09-01"
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
            El freno de mano del cuerpo: por qué forzarte es la peor medicina
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Cuatro millones de kilómetros. Eso había hecho este hombre detrás de un volante. Camionero jubilado. Jornadas de diez, doce, quince horas sentado durante décadas. Y ahora, jubilado, con un cuerpo que le pasaba factura de formas que no entendía.
            </p>

            <p className="text-[15px] leading-relaxed">
              Alguien le dijo que hiciera sentadillas. Ejercicio en casa. Fortalecimiento. Lo hizo con la misma disciplina con la que había conducido toda su vida. Y el cuerpo respondió tirando del freno de mano.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El fusible que salta
            </h2>

            <p className="text-[15px] leading-relaxed">
              Cuando haces algo que al cuerpo no le gusta, el cuerpo se defiende. Es como si tirara del freno de mano, metiera un fusible abajo y dejara de funcionar. No es pereza. No es debilidad. Es un mecanismo de protección. Tu sistema dice: &ldquo;Esto no. Así no.&rdquo; Y se apaga.
            </p>

            <p className="text-[15px] leading-relaxed">
              Las sentadillas no eran malas en sí mismas. Pero para un cuerpo que ha pasado décadas comprimido en un asiento, forzar un rango de movimiento sin preparar el terreno es exactamente lo contrario de lo que necesita.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Afinar, no forzar
            </h2>

            <p className="text-[15px] leading-relaxed">
              Durante la sesión, mientras trabajaba con sus tejidos, le expliqué lo que estaba pasando: &ldquo;No es que se esté relajando, sino que es como si estuviéramos afinando una guitarra.&rdquo; No estoy añadiendo nada. No estoy quitando nada. Estoy devolviendo tensión a donde tiene que estar y liberando donde sobra. Afinando.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y entonces llegó un momento de silencio. Un silencio interno. Le pregunté si lo notaba. &ldquo;Ese silencio dentro del cuerpo es como estar neutro. Una ausencia de las cosas que te molestan.&rdquo; No es euforia. No es relajación profunda. Es neutralidad. Es tu cuerpo sin ruido. Muchas personas no han sentido eso en años. Algunas, nunca.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La medicina real
            </h2>

            <p className="text-[15px] leading-relaxed">
              Este hombre había normalizado jornadas brutales durante décadas. Su cuerpo se había adaptado a lo inaceptable. Y ahora que tenía tiempo, seguía funcionando con la misma lógica: más esfuerzo, más intensidad, más fuerza. Pero lo que necesitaba era exactamente lo contrario.
            </p>

            <p className="text-[15px] leading-relaxed">
              &ldquo;Tu medicina es caminar.&rdquo; Caminar conscientemente. No como ejercicio cardiovascular. Como integración. Cada paso es una oportunidad de que el cuerpo se reorganice, de que los pies hablen con la pelvis, de que la respiración se sincronice con el movimiento. Caminar es el ejercicio más subestimado que existe.
            </p>

            <p className="text-[15px] leading-relaxed">
              Al levantarse de la camilla dijo que se sentía como si le hubieran quitado diez kilos de encima. No había perdido peso. Había perdido tensión acumulada durante décadas.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Tu cuerpo no necesita que lo forces. Necesita que lo escuches. Y a veces, la mejor medicina es la más simple: dejar de apretar y empezar a caminar.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si llevas tiempo forzando tu cuerpo sin resultados, o si sientes que cuanto más haces peor estás, escríbeme.
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

          <RelatedArticles slug="el-freno-de-mano-del-cuerpo" lang="es" />
        </article>
      </main>
    </div>
  );
}
