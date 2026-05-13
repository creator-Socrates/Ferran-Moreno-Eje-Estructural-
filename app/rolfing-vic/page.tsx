import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay, siteUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rolfing en Vic",
  description:
    "Rolfing en Vic. Ferran Moreno: trabajo corporal profundo, regulación del sistema nervioso y reorganización estructural. Consulta presencial en Lluçà, a 30 minutos de Vic.",
  alternates: { canonical: "/rolfing-vic" },
  keywords: [
    "Rolfing Vic",
    "Rolfing en Vic",
    "trabajo corporal Vic",
    "regulación sistema nervioso Vic",
    "Rolfing Plana de Vic",
    "Ferran Moreno Vic",
    "dolor crónico Vic",
    "Rolfing Osona",
  ],
  openGraph: {
    title: "Rolfing en Vic | Ferran Moreno",
    description:
      "Rolfing y trabajo corporal profundo en Vic. Consulta presencial en Lluçà, a 30 minutos de la Plana de Vic.",
    url: `${siteUrl}/rolfing-vic`,
    siteName: "Ferran Moreno",
    locale: "es_ES",
    type: "website",
  },
};

export default function RolfingVic() {
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
              Rolfing · Trabajo corporal · Vic
            </p>
            <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              Rolfing en Vic
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Si vives en Vic o la Plana de Vic, mi consulta en Lluçà está a 30 minutos. La ciudad más cercana a mi espacio de trabajo.
            </p>
          </div>
        </section>

        {/* CONTEXTO */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Desde Vic</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight">
                  A media hora de la Plana
                </h2>
                <div className="mt-8 space-y-5 text-base leading-[1.8]">
                  <p>
                    Vic es la capital de Osona y el centro neurálgico de la comarca. Lluçà está justo al lado — treinta minutos por carretera comarcal, sin autopista, sin peajes, sin el ruido de una clínica urbana.
                  </p>
                  <p>
                    Para quienes viven en Vic, Manlleu, Torelló, Centelles o cualquier pueblo de la Plana, acceder a un trabajo corporal profundo como el Rolfing ya no requiere ir a Barcelona. Aquí hay más de veinte años de experiencia en reorganización estructural, regulación del sistema nervioso y trabajo energético.
                  </p>
                  <p>
                    El entorno rural de la consulta no es decoración. El silencio, la ausencia de estímulos y la calma del Lluçanès permiten que el sistema nervioso baje antes de empezar. Cuando el cuerpo está en modo alerta, el trabajo no penetra igual. Aquí llega más profundo.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="rounded-[2rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Distancia</div>
                  <div className="mt-2 text-2xl font-semibold">30 min desde Vic</div>
                  <div className="mt-2 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    Carretera comarcal desde Vic, dirección Lluçà. Aparcamiento libre delante de la consulta.
                  </div>
                </div>
                <div className="rounded-[2rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Proceso</div>
                  <div className="mt-2 text-2xl font-semibold">Sesiones regulares</div>
                  <div className="mt-2 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    La cercanía permite mantener un ritmo estable de sesiones — cada dos o tres semanas — sin que el desplazamiento sea un impedimento. Eso marca la diferencia en los resultados.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUÉ TRABAJO */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Método</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">
              Más allá del Rolfing clásico
            </h2>
            <div className="mt-8 space-y-5 text-base leading-[1.8]">
              <p>
                El Rolfing es el punto de partida de mi formación, pero mi trabajo ha evolucionado durante más de dos décadas incorporando osteopatía visceral, acupuntura japonesa, medicina ayurvédica y lectura energética. No aplico una técnica — leo el sistema y respondo a lo que encuentro.
              </p>
              <p>
                En Osona hay buenos profesionales de fisioterapia y osteopatía. Lo que ofrezco es diferente: una mirada sistémica que incluye estructura, sistema nervioso y campo energético. No trabajo la pieza que duele. Trabajo el patrón que la mantiene ahí.
              </p>
              <p>
                Muchos clientes de Vic llegan después de años de tratamientos que funcionan un tiempo pero no sostienen el cambio. El dolor vuelve, la tensión vuelve, la fatiga no cede. Eso pasa cuando se gestiona el síntoma sin reorganizar la base. Aquí reorganizamos la base.
              </p>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Testimonios</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">
              Personas de la zona que han pasado por el proceso
            </h2>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {[
                {
                  name: "Maria Gorchs · Olost (Barcelona)",
                  text: "Las sesiones con Ferran son únicas y siempre útiles. Confía en ti antes que tú misma y te acompaña a hacerlo posible, cambiando la perspectiva y el foco.",
                },
                {
                  name: "Ester Subirà · Profesora · Lluçà (Barcelona)",
                  text: "No puedo explicar exactamente qué hace Ferran, pero después de sus sesiones mi cuerpo y mi mente se sienten completamente diferentes.",
                },
                {
                  name: "Anna Díez · Barcelona",
                  text: "Ferran me ha ayudado a recuperar estabilidad, no sólo física, sino mental y emocional. Me siento serena y tranquila. Estoy más centrada en todo lo que hago.",
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
                { slug: "dolor-cronico-sin-solucion-cuando-el-problema-no-es-donde-duele", title: "Dolor crónico sin solución: cuando el problema no es donde duele", tag: "Dolor crónico" },
                { slug: "rolfing-duele-la-verdad", title: "¿El Rolfing duele? La verdad sobre el trabajo corporal profundo", tag: "Rolfing" },
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
                <div className="text-sm uppercase tracking-[0.25em] opacity-50">Desde Vic</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  A 30 minutos de un cambio real. Hablemos.
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
                  Primera sesión — 360€ · Lluçà, a 30 min de Vic
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
