import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay, siteUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rolfing en Barcelona",
  description:
    "Rolfing en Barcelona. Ferran Moreno: más de 20 años de experiencia en trabajo corporal profundo, regulación del sistema nervioso y reorganización estructural. Consulta presencial en Lluçà (1h15 de Barcelona) y sesiones online.",
  alternates: { canonical: "/rolfing-barcelona" },
  keywords: [
    "Rolfing Barcelona",
    "Rolfing en Barcelona",
    "trabajo corporal Barcelona",
    "regulación sistema nervioso Barcelona",
    "reorganización estructural Barcelona",
    "Ferran Moreno Barcelona",
    "dolor crónico Barcelona",
  ],
  openGraph: {
    title: "Rolfing en Barcelona | Ferran Moreno",
    description:
      "Rolfing y trabajo corporal profundo en Barcelona. Consulta presencial en Lluçà (1h15 de Barcelona) y online.",
    url: `${siteUrl}/rolfing-barcelona`,
    siteName: "Ferran Moreno",
    locale: "es_ES",
    type: "website",
  },
};

export default function RolfingBarcelona() {
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
              Rolfing · Trabajo corporal · Barcelona
            </p>
            <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              Rolfing en Barcelona
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Después de años trabajando en Barcelona, trasladé mi consulta a Lluçà, en el Lluçanès. Muchos de mis clientes de Barcelona siguen viniendo — a 1h15 de la ciudad — porque el cambio de entorno es parte del proceso.
            </p>
          </div>
        </section>

        {/* CONTEXTO */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>De Barcelona a Lluçà</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight">
                  La distancia como parte del proceso
                </h2>
                <div className="mt-8 space-y-5 text-base leading-[1.8]">
                  <p>
                    Viví y trabajé en Barcelona durante años. Allí construí mi práctica, mi red de clientes y mi forma de entender este trabajo. Conozco el ritmo de la ciudad — la presión, la velocidad, la dificultad de parar.
                  </p>
                  <p>
                    En 2019 trasladé mi consulta a Lluçà, un pueblo del Lluçanès a una hora y cuarto de Barcelona por la C-17. No fue una retirada. Fue una decisión consciente: el entorno donde trabajas importa tanto como lo que haces con las manos.
                  </p>
                  <p>
                    Muchos de mis clientes de Barcelona siguen viniendo. Algunos combinan la sesión con el trayecto — la hora de coche se convierte en un espacio de transición, de salir del ruido antes de llegar. Otros vienen para procesos intensivos y aprovechan el fin de semana en la zona.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="rounded-[2rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Distancia</div>
                  <div className="mt-2 text-2xl font-semibold">1h 15min desde Barcelona</div>
                  <div className="mt-2 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    C-17 dirección Vic, desvío a Lluçà. Sin peajes. Aparcamiento libre.
                  </div>
                </div>
                <div className="rounded-[2rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Online</div>
                  <div className="mt-2 text-2xl font-semibold">Sesiones a distancia</div>
                  <div className="mt-2 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    Para quienes no pueden desplazarse, ofrezco sesiones online de regulación y trabajo energético. No sustituyen lo presencial, pero sostienen el proceso entre visitas.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUÉ TRABAJO */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Qué hago</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">
              No es masaje. No es fisioterapia. Es reorganización.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-[1.8]">
              <p>
                El Rolfing trabaja con la fascia — el tejido conectivo que organiza la estructura del cuerpo. Pero lo que hago va más allá de una técnica: integro lectura corporal, regulación del sistema nervioso y trabajo energético para abordar el patrón completo, no solo el síntoma.
              </p>
              <p>
                Muchas personas llegan después de años probando tratamientos en Barcelona: fisioterapia, osteopatía, quiropraxia. Han mejorado algo, pero el patrón sigue ahí. El dolor vuelve, la tensión vuelve, la fatiga vuelve. Eso pasa cuando se trata la pieza sin ver el sistema.
              </p>
              <p>
                Trabajo con empresarios bajo presión, creativos que viven en modo activación permanente, deportistas con lesiones que no terminan de resolver, y personas que simplemente sienten que su cuerpo ya no funciona como debería. El denominador común: han probado muchas cosas y siguen en el mismo punto.
              </p>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Testimonios</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">
              Clientes de Barcelona que han pasado por este proceso
            </h2>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {[
                {
                  name: "Neus Ribes · Trade Distribution · Banco Sabadell · Barcelona",
                  text: "Con su terapia estoy consiguiendo salir de una lesión cronificada y evitar una nueva operación, además de encontrar la armonía necesaria para recuperarme.",
                },
                {
                  name: "Julián Santamaría · Digital Performance Manager · Barcelona",
                  text: "Después de 10 años con dolor lumbar permanente, conocer a Ferran y su método fue una experiencia indescriptible. Desde la primera sesión el dolor físico desapareció.",
                },
                {
                  name: "Jose Luis Pagan · Bombero, Barcelona",
                  text: "Pensé que quizá no podría continuar con mi trabajo como bombero. En poco tiempo mi cuerpo cambió y mi mente se volvió más fuerte y conectada.",
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
                <div className="text-sm uppercase tracking-[0.25em] opacity-50">Desde Barcelona</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  Si llevas tiempo buscando y el patrón sigue ahí, hablemos.
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
                  Primera sesión — 360€ · Lluçà, a 1h15 de Barcelona
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
            <a href="https://maps.app.goo.gl/2DvAv9DP6iZBDuXk6?g_st=ic" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">
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
