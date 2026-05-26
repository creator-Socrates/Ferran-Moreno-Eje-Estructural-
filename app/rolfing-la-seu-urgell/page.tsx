import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay, siteUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rolfing en La Seu d'Urgell",
  description:
    "Rolfing en La Seu d'Urgell. Ferran Moreno: trabajo corporal profundo, regulación del sistema nervioso y reorganización estructural. Consulta presencial en Lluçà (2h de La Seu) — sesiones intensivas y online.",
  alternates: { canonical: "/rolfing-la-seu-urgell" },
  keywords: [
    "Rolfing La Seu d'Urgell",
    "Rolfing en La Seu d'Urgell",
    "trabajo corporal La Seu d'Urgell",
    "Rolfing Alt Urgell",
    "Rolfing Pirineu",
    "Ferran Moreno La Seu d'Urgell",
    "dolor crónico Pirineu",
    "Rolfing Andorra",
  ],
  openGraph: {
    title: "Rolfing en La Seu d'Urgell | Ferran Moreno",
    description:
      "Rolfing y trabajo corporal profundo en La Seu d'Urgell. Sesiones intensivas en Lluçà y trabajo online entre visitas.",
    url: `${siteUrl}/rolfing-la-seu-urgell`,
    siteName: "Ferran Moreno",
    locale: "es_ES",
    type: "website",
  },
};

export default function RolfingLaSeuUrgell() {
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
              Rolfing · Trabajo corporal · La Seu d&apos;Urgell
            </p>
            <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              Rolfing en La Seu d&apos;Urgell
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Clientes del Pirineo vienen para sesiones intensivas — dos o tres sesiones en un fin de semana. Y mantienen el proceso con sesiones online entre visitas.
            </p>
          </div>
        </section>

        {/* CONTEXTO */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Desde el Pirineo</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight">
                  El formato intensivo para quienes vienen de lejos
                </h2>
                <div className="mt-8 space-y-5 text-base leading-[1.8]">
                  <p>
                    La Seu d&apos;Urgell, el Pallars, la Cerdanya, Andorra — el Pirineo tiene sus propias exigencias físicas. Altitud, frío, trabajo al aire libre, deportes de montaña. Los cuerpos de aquí se usan intensamente, y cuando se desorganizan, las opciones locales son limitadas.
                  </p>
                  <p>
                    Lluçà está a unas dos horas de La Seu. No es cerca, pero la distancia deja de importar cuando descubres un formato que funciona: sesiones intensivas concentradas en un fin de semana. Viernes por la tarde y sábado por la mañana, por ejemplo. Dos sesiones que permiten ir más profundo de lo que una sesión suelta permite.
                  </p>
                  <p>
                    Entre visitas presenciales, sostenemos el proceso con sesiones online de regulación y trabajo energético. No sustituyen el trabajo manual, pero mantienen la dirección. El cuerpo no espera — si pasan tres meses sin intervención, parte del trabajo se pierde.
                  </p>
                  <p>
                    Lo que hago integra Rolfing, regulación del sistema nervioso y lectura energética. No es masaje, no es fisioterapia, no es osteopatía. Es una lectura completa del sistema que permite intervenir donde realmente está el origen — no donde aparece el síntoma.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="rounded-[2rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Distancia</div>
                  <div className="mt-2 text-2xl font-semibold">~2h desde La Seu d&apos;Urgell</div>
                  <div className="mt-2 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    Túnel del Cadí y Eix Transversal, o por Berga y carretera comarcal.
                  </div>
                </div>
                <div className="rounded-[2rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Formato intensivo</div>
                  <div className="mt-2 text-2xl font-semibold">2-3 sesiones en un fin de semana</div>
                  <div className="mt-2 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    Concentrar sesiones permite ir más profundo. El entorno rural de Lluçà favorece la integración entre una sesión y la siguiente.
                  </div>
                </div>
                <div className="rounded-[2rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Online</div>
                  <div className="mt-2 text-2xl font-semibold">Entre visitas presenciales</div>
                  <div className="mt-2 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    Regulación y trabajo energético a distancia para que el proceso no se detenga entre desplazamientos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CUERPOS DE MONTAÑA */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Contexto</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">
              Cuerpos de montaña, patrones de montaña
            </h2>
            <div className="mt-8 space-y-5 text-base leading-[1.8]">
              <p>
                Los cuerpos que trabajan y se mueven en montaña tienen características específicas. Cadenas musculares adaptadas al desnivel, articulaciones sometidas a frío y carga, sistemas nerviosos que alternan entre actividad intensa y parada total. Cuando algo se desorganiza en este contexto, no basta con estirar o descargar.
              </p>
              <p>
                El Rolfing nació para trabajar con la estructura completa del cuerpo — no para tratar piezas aisladas. Mi formación amplía eso con regulación del sistema nervioso y lectura energética. El resultado: una intervención que va al patrón de fondo, no al síntoma de superficie.
              </p>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Testimonios</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">
              Lo que dicen quienes han venido de lejos
            </h2>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {[
                {
                  name: "Philip Thompson · USA",
                  text: "Fue absolutamente asombroso. Resolvió mi tendón de Aquiles distendido, trabajó en un viejo problema de espalda y me ayudó a corregir mi postura.",
                },
                {
                  name: "Willemijn De Koning · Jewellery Designer · Holanda",
                  text: "Él me hizo sentir como una especie de plenitud otra vez, y este sentimiento persiste. No sé qué hizo realmente, pero funciona.",
                },
                {
                  name: "Ania K · Ucrania",
                  text: "Sentí el cambio inmediatamente después de solo un par de sesiones. Durante las siguientes semanas mi vida cambió en muchas dimensiones.",
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
                { slug: "rolfing-europa-vs-usa-v2", title: "Rolfing en Europa vs USA", tag: "Rolfing" },
                { slug: "el-dolor-rara-vez-empieza-donde-duele", title: "El dolor rara vez empieza donde duele", tag: "Dolor crónico" },
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
                <div className="text-sm uppercase tracking-[0.25em] opacity-50">Desde el Pirineo</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  Dos horas de viaje. Un fin de semana de transformación.
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
                  Primera sesión — 360€ + IVA · Lluçà, a ~2h de La Seu
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
