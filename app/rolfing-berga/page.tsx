import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay, siteUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rolfing en Berga",
  description:
    "Rolfing en Berga. Ferran Moreno: trabajo corporal profundo, regulación del sistema nervioso y reorganización estructural. Consulta presencial en Lluçà, a 40 minutos de Berga.",
  alternates: { canonical: "/rolfing-berga" },
  keywords: [
    "Rolfing Berga",
    "Rolfing en Berga",
    "trabajo corporal Berga",
    "regulación sistema nervioso Berga",
    "Rolfing Berguedà",
    "Ferran Moreno Berga",
    "dolor crónico Berga",
  ],
  openGraph: {
    title: "Rolfing en Berga | Ferran Moreno",
    description:
      "Rolfing y trabajo corporal profundo en Berga. Consulta presencial en Lluçà, a 40 minutos del Berguedà.",
    url: `${siteUrl}/rolfing-berga`,
    siteName: "Ferran Moreno",
    locale: "es_ES",
    type: "website",
  },
};

export default function RolfingBerga() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>

      {/* HEADER */}
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
          </nav>
        </div>
      </header>

      <main>

        {/* HERO */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <p className="mb-6 text-xs uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
              Rolfing · Trabajo corporal · Berga
            </p>
            <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              Rolfing en Berga
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              A medio camino entre Barcelona y el Pirineo, Lluçà es el punto donde el ruido para. Mi consulta está a 40 minutos de Berga.
            </p>
          </div>
        </section>

        {/* CONTEXTO */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Desde Berga</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight">
                  El Berguedà y el Lluçanès comparten frontera
                </h2>
                <div className="mt-8 space-y-5 text-base leading-[1.8]">
                  <p>
                    El Berguedà es territorio de montaña — gente que trabaja con el cuerpo, que vive al aire libre, que se mueve. Pero también es territorio donde las opciones de trabajo corporal profundo son escasas. La fisioterapia cubre lo básico, pero cuando el patrón se cronifica, hace falta otra mirada.
                  </p>
                  <p>
                    Lluçà está a 40 minutos de Berga por carretera comarcal. Es una distancia cómoda que permite mantener un proceso regular — una sesión cada dos o tres semanas — sin tener que bajar a Barcelona.
                  </p>
                  <p>
                    Aquí no hago sesiones sueltas de descarga. Leo cómo se organiza tu cuerpo, identifico el patrón que genera la compensación y trabajo para reorganizarlo. La estructura, el sistema nervioso y la energía — todo entra en la misma sesión.
                  </p>
                  <p>
                    Trabajo con personas del Berguedà que llevan años con dolor lumbar, cervical o de rodilla. Personas que han pasado por traumatismos deportivos o laborales y no terminan de recuperarse. Personas con fatiga crónica que la montaña debería curar pero no cura porque el problema está en cómo se organiza el sistema, no en el entorno.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="rounded-[2rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Distancia</div>
                  <div className="mt-2 text-2xl font-semibold">40 min desde Berga</div>
                  <div className="mt-2 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    Carretera comarcal Berga-Lluçà. Sin peajes, sin autopista, sin estrés.
                  </div>
                </div>
                <div className="rounded-[2rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Online</div>
                  <div className="mt-2 text-2xl font-semibold">Sesiones a distancia</div>
                  <div className="mt-2 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    Regulación del sistema nervioso y trabajo energético online para sostener el proceso entre visitas presenciales.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MÉTODO */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Más allá del Rolfing</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">
              Reorganización, no parche
            </h2>
            <div className="mt-8 space-y-5 text-base leading-[1.8]">
              <p>
                El Rolfing trabaja con la fascia para devolver orden a la estructura del cuerpo. Pero eso es solo una capa. Lo que hago integra también la regulación del sistema nervioso — ese estado de alerta constante que muchos ni siquiera reconocen — y la lectura energética, que permite ver interferencias que no aparecen en ninguna prueba médica.
              </p>
              <p>
                Cada sesión empieza con una lectura completa del sistema. No hay protocolo fijo. La intervención responde a lo que encuentro — y a lo que tu cuerpo está preparado para integrar en ese momento. Eso es lo que hace que el cambio se sostenga.
              </p>
              <p>
                Llevo más de veinte años formándome y trabajando con cuerpos en más de veinte países. No es una técnica nueva. Es experiencia acumulada que se traduce en precisión.
              </p>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Testimonios</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">
              Lo que dicen quienes han pasado por el proceso
            </h2>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {[
                {
                  name: "Victoria Osa · Barcelona",
                  text: "Después de mi accidente de coche pasé por varias rehabilitaciones y diferentes terapias, pero fue cuando me puse en manos de Ferran cuando recuperé mi salud.",
                },
                {
                  name: "Rubén Torres · Galerista · Barcelona",
                  text: "No sé muy bien lo que hace, pero funciona. Incluso siendo una persona muy racional, los resultados aparecen tanto a nivel físico como emocional.",
                },
                {
                  name: "Jesús Aragón · Terapeuta y profesor de Pilates · Cantabria",
                  text: "He practicado muchas técnicas y terapias corporales y me produce una gran fascinación lo que hace. Sí que parece mágico.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-[2.5rem] p-8"
                  style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}
                >
                  <p className="text-lg leading-[1.8]">&ldquo;{item.text}&rdquo;</p>
                  <div className="mt-6 text-sm" style={{ color: "var(--text-secondary)" }}>
                    — {item.name}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/wall-of-trust"
                className="inline-flex rounded-full px-7 py-3.5 text-sm font-medium transition hover:opacity-60"
                style={{ border: "1px solid var(--border-subtle)", color: "var(--text-main)" }}
              >
                Ver todos los testimonios
              </Link>
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[80px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Blog</div>
            <h2 className="mt-3 text-2xl font-medium tracking-tight">
              Artículos sobre Rolfing, dolor crónico y regulación
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                { slug: "el-dolor-rara-vez-empieza-donde-duele", title: "El dolor rara vez empieza donde duele", tag: "Dolor crónico" },
                { slug: "rolfing-europa-vs-usa-v2", title: "Rolfing en Europa vs USA", tag: "Rolfing" },
                { slug: "el-problema-no-es-el-estres", title: "El problema no es el estrés. Es no salir de él", tag: "Regulación" },
              ].map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`} className="group rounded-2xl p-6" style={{ border: "1px solid var(--border-subtle)" }}>
                  <span className="text-[10px] uppercase tracking-[0.15em] block mb-3" style={{ color: "var(--text-secondary)" }}>{a.tag}</span>
                  <span className="text-lg font-semibold tracking-tight group-hover:opacity-70 transition">{a.title}</span>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex rounded-full px-7 py-3.5 text-sm font-medium transition hover:opacity-60"
                style={{ border: "1px solid var(--border-subtle)", color: "var(--text-main)" }}
              >
                Leer el blog
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div
              className="grid gap-10 rounded-[2.5rem] p-10 text-white lg:grid-cols-[1fr_auto] lg:items-end lg:p-14"
              style={{ background: "var(--text-main)" }}
            >
              <div>
                <div className="text-sm uppercase tracking-[0.25em] opacity-50">Desde Berga</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  Si el patrón sigue ahí, 40 minutos no son nada. Hablemos.
                </h2>
              </div>
              <div className="flex flex-col items-start gap-4 lg:min-w-[260px]">
                <a
                  href={contactWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-7 py-3 text-center text-sm font-medium transition hover:opacity-90"
                  style={{ color: "var(--text-main)" }}
                >
                  Escríbeme por WhatsApp
                </a>
                <div className="text-sm opacity-50">
                  Primera sesión — 360€ · Lluçà, a 40 min de Berga
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
        <div
          className="mx-auto flex max-w-[900px] flex-col gap-3 px-6 py-8 text-sm lg:flex-row lg:items-center lg:justify-between"
          style={{ color: "var(--text-secondary)" }}
        >
          <div>
            Reorganización estructural ·{" "}
            <a href="https://maps.app.goo.gl/8Hd8KbJKawB7BjWZ6" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">
              Lluçà (Barcelona)
            </a>
            {" "}· Online
          </div>
          <div>
            <a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">{contactWhatsAppDisplay}</a>
            {" "}·{" "}
            <a href="https://www.instagram.com/ferran__moreno_/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">@ferran__moreno_</a>
          </div>
          <div>© 2026 Ferran Moreno</div>
        </div>
      </footer>

    </div>
  );
}
