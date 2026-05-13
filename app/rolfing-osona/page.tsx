import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay, siteUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rolfing a Osona i Lluçanès",
  description:
    "Rolfing a Osona i el Lluçanès. Ferran Moreno: trabajo corporal profundo, regulación del sistema nervioso y reorganización estructural. Consulta presencial en Lluçà — territorio propio.",
  alternates: { canonical: "/rolfing-osona" },
  keywords: [
    "Rolfing Osona",
    "Rolfing en Osona",
    "Rolfing Lluçanès",
    "Rolfing en Lluçanès",
    "trabajo corporal Osona",
    "regulación sistema nervioso Osona",
    "Ferran Moreno Lluçà",
    "Rolfing Lluçà",
    "dolor crónico Osona",
    "Rolfing Prats de Lluçanès",
  ],
  openGraph: {
    title: "Rolfing a Osona i Lluçanès | Ferran Moreno",
    description:
      "Rolfing y trabajo corporal profundo en Osona y el Lluçanès. Consulta presencial en Lluçà — territorio propio.",
    url: `${siteUrl}/rolfing-osona`,
    siteName: "Ferran Moreno",
    locale: "es_ES",
    type: "website",
  },
};

export default function RolfingOsona() {
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
              Rolfing · Trabajo corporal · Osona · Lluçanès
            </p>
            <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              Rolfing a Osona i Lluçanès
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Soy del Lluçanès. Mi consulta está aquí. Si vives en Osona o el Lluçanès, estás a minutos.
            </p>
          </div>
        </section>

        {/* CONTEXTO */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Territorio propio</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight">
                  No tuve que buscar el silencio. Nací en él.
                </h2>
                <div className="mt-8 space-y-5 text-base leading-[1.8]">
                  <p>
                    Después de años trabajando en Barcelona y viajando por más de veinte países para formarme, volví a donde empecé. Lluçà no fue un retiro. Fue un regreso consciente. El lugar donde la práctica puede ser lo que tiene que ser — sin prisas, sin ruido, sin el formato de 45 minutos de una clínica urbana.
                  </p>
                  <p>
                    Si vives en Prats de Lluçanès, Sant Boi de Lluçanès, Olost, Oristà, Perafita o cualquier pueblo del Lluçanès, la consulta está a minutos. Si vives en Vic, Manlleu, Torelló, Centelles o la Plana de Vic, estás a media hora. No necesitas ir a Barcelona para acceder a un trabajo corporal profundo con más de veinte años de experiencia internacional.
                  </p>
                  <p>
                    El Lluçanès y Osona son comarcas donde la gente trabaja con el cuerpo — en el campo, en la industria, en el deporte. Los cuerpos de aquí tienen patrones específicos: manos y espalda cargadas, cadenas compensadas por años de esfuerzo repetitivo, sistemas nerviosos que oscilan entre la exigencia y el agotamiento. Eso es exactamente lo que este trabajo aborda.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="rounded-[2rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Desde el Lluçanès</div>
                  <div className="mt-2 text-2xl font-semibold">5-15 min</div>
                  <div className="mt-2 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    Prats de Lluçanès, Sant Boi, Olost, Oristà, Perafita — todo a minutos de la consulta.
                  </div>
                </div>
                <div className="rounded-[2rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Desde Osona</div>
                  <div className="mt-2 text-2xl font-semibold">20-35 min</div>
                  <div className="mt-2 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    Vic, Manlleu, Torelló, Centelles, Tona — la Plana de Vic queda a media hora por carretera comarcal.
                  </div>
                </div>
                <div className="rounded-[2rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Online</div>
                  <div className="mt-2 text-2xl font-semibold">También a distancia</div>
                  <div className="mt-2 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    Para quienes no pueden desplazarse por motivos puntuales, ofrezco sesiones online de regulación y trabajo energético.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUÉ HAGO */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Qué hago</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">
              Veinte años de experiencia global, aquí al lado
            </h2>
            <div className="mt-8 space-y-5 text-base leading-[1.8]">
              <p>
                Mi formación incluye Rolfing en Alemania, osteopatía visceral, acupuntura japonesa en Japón, medicina ayurvédica en Malasia y trabajo energético aprendido con maestros de México, Tailandia y Estados Unidos. No cuento esto para impresionar — lo cuento porque aquí, en un pueblo del Lluçanès, hay acceso a algo que normalmente solo encuentras en grandes ciudades o viajando lejos.
              </p>
              <p>
                No hago sesiones de descarga o mantenimiento. Cada sesión parte de una lectura completa: cómo se organiza tu estructura, en qué estado está tu sistema nervioso, qué interferencias energéticas hay. La intervención responde a eso — no a un protocolo estándar.
              </p>
              <p>
                Trabajo con dolor crónico que vuelve, fatiga que no se va con dormir, tensión acumulada que ningún masaje resuelve, y con personas que sienten que algo está descolocado sin encontrar explicación médica. El denominador común: el síntoma es real, pero el origen está en otro sitio.
              </p>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Testimonios</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">
              Vecinos y personas de la comarca
            </h2>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {[
                {
                  name: "Maria Gorchs · Olost (Barcelona)",
                  text: "Las sesiones con Ferran son únicas y siempre útiles. Confía en ti antes que tú misma y te acompaña a hacerlo posible.",
                },
                {
                  name: "Ester Subirà · Profesora · Lluçà (Barcelona)",
                  text: "No puedo explicar exactamente qué hace Ferran, pero después de sus sesiones mi cuerpo y mi mente se sienten completamente diferentes.",
                },
                {
                  name: "Fran Ascón · Barista · Barcelona",
                  text: "Te ayuda a escuchar tus sentimientos y a equilibrar tu yo interior desde una zona neutra. Ciencia y profesionalidad unidas de la mano de una bellísima persona.",
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
                { slug: "que-es-la-regulacion-del-sistema-nervioso", title: "Qué es la regulación del sistema nervioso y por qué importa", tag: "Regulación" },
                { slug: "rolfing-duele-la-verdad", title: "¿El Rolfing duele? La verdad sobre el trabajo corporal profundo", tag: "Rolfing" },
                { slug: "dolor-cronico-sin-solucion-cuando-el-problema-no-es-donde-duele", title: "Dolor crónico sin solución: cuando el problema no es donde duele", tag: "Dolor crónico" },
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
                <div className="text-sm uppercase tracking-[0.25em] opacity-50">Osona · Lluçanès</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  Estás a minutos. Si el cuerpo pide orden, hablemos.
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
                  Primera sesión — 360€ · Lluçà
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
