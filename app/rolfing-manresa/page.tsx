import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay, siteUrl } from "@/lib/content";
import { LocationStructuredData } from "@/components/structured-data";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Rolfing en Manresa",
  description:
    "Rolfing en Manresa. Ferran Moreno: trabajo corporal profundo, regulación del sistema nervioso y reorganización estructural. Consulta presencial en Lluçà, a 45 minutos de Manresa.",
  alternates: { canonical: "/rolfing-manresa" },
  keywords: [
    "Rolfing Manresa",
    "Rolfing en Manresa",
    "trabajo corporal Manresa",
    "regulación sistema nervioso Manresa",
    "Rolfing Bages",
    "Ferran Moreno Manresa",
    "dolor crónico Manresa",
  ],
  openGraph: {
    title: "Rolfing en Manresa | Ferran Moreno",
    description:
      "Rolfing y trabajo corporal profundo en Manresa. Consulta presencial en Lluçà, a 45 minutos de Manresa.",
    url: `${siteUrl}/rolfing-manresa`,
    siteName: "Ferran Moreno",
    locale: "es_ES",
    type: "website",
  },
};

export default function RolfingManresa() {
  return (
    <>
      <LocationStructuredData
        city="Manresa"
        country="ES"
        lang="es"
        slug="rolfing-manresa"
        description="Rolfing en Manresa. Ferran Moreno: trabajo corporal profundo, regulación del sistema nervioso y reorganización estructural. Consulta presencial en Lluçà, a 45 minutos de Manresa."
      />
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
              Rolfing · Trabajo corporal · Manresa
            </p>
            <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              Rolfing en Manresa
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Manresa y el Bages están a 45 minutos de la consulta en Lluçà. Lo suficientemente cerca para mantener un proceso regular sin el desgaste de ir a Barcelona.
            </p>
          </div>
        </section>

        {/* CONTEXTO */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Desde Manresa</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight">
                  Trabajo corporal profundo sin salir de la Catalunya Central
                </h2>
                <div className="mt-8 space-y-5 text-base leading-[1.8]">
                  <p>
                    Si vives en Manresa, Santpedor, Sant Vicenç de Castellet, Sallent o cualquier pueblo del Bages, acceder a Rolfing o trabajo corporal profundo normalmente implica ir a Barcelona. Eso son dos horas entre ida y vuelta, más aparcamiento, más el estado en el que llegas después de cruzar la ciudad.
                  </p>
                  <p>
                    Lluçà está en la otra dirección — 45 minutos por el Eix Transversal, sin tráfico urbano. Llegas en calma. Y eso no es un detalle menor: el estado del sistema nervioso al empezar la sesión condiciona la profundidad del trabajo.
                  </p>
                  <p>
                    Manresa es una ciudad que trabaja duro. Lo veo en los cuerpos que llegan de allí: tensión acumulada, fatiga que no se va con dormir, dolor que se ha cronificado porque nunca se ha mirado más allá del síntoma. El Rolfing convencional ya es un paso adelante. Lo que hago va un paso más allá: integro estructura, regulación del sistema nervioso y lectura energética en cada sesión.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="rounded-[2rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Distancia</div>
                  <div className="mt-2 text-2xl font-semibold">45 min desde Manresa</div>
                  <div className="mt-2 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    Eix Transversal dirección Vic, desvío a Lluçà. Sin peajes ni tráfico.
                  </div>
                </div>
                <div className="rounded-[2rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Online</div>
                  <div className="mt-2 text-2xl font-semibold">Sesiones a distancia</div>
                  <div className="mt-2 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    Para complementar las sesiones presenciales, ofrezco trabajo online de regulación y alineación energética. No sustituye las manos, pero sostiene la dirección del proceso.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARA QUIÉN */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Para quién</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">
              Situaciones donde este trabajo marca la diferencia
            </h2>
            <div className="mt-8 space-y-5 text-base leading-[1.8]">
              <p>
                Personas con dolor crónico que vuelve una y otra vez después de cada tratamiento. Profesionales que viven bajo presión sostenida y notan que el cuerpo ya no responde como antes. Deportistas con lesiones que no terminan de cerrarse. Personas que sienten que algo está descolocado pero no encuentran explicación médica.
              </p>
              <p>
                No trabajo por sesiones sueltas. Trabajo por proceso. El compromiso mínimo es una primera sesión de evaluación, donde leemos cómo se organiza tu sistema y definimos si tiene sentido continuar juntos. A partir de ahí, el ritmo se ajusta a tu situación — normalmente una sesión cada dos o tres semanas.
              </p>
              <p>
                Más de veinte años de experiencia formándome en Alemania, Japón, México, Estados Unidos y Tailandia. No es teoría. Es práctica acumulada con miles de cuerpos diferentes.
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
                  name: "Jordi Vizcaíno · Manager · Barcelona",
                  text: "Para mí es un mago que ha traído bienestar y salud a mi vida y también a mi familia. Con la técnica Rolfing consigue recolocar el cuerpo y devolver equilibrio.",
                },
                {
                  name: "Beatriz González · Enfermera · Barcelona",
                  text: "Ideas y sentimientos ordenados, cuerpo y mente alineados. Energía positiva totalmente expuesta y preparada para lo que venga. Sorprendente.",
                },
                {
                  name: "Quim Clark · CEO MQ Events · Barcelona",
                  text: "Salí de la sesión literalmente distinto: entré doblado y salí recto, con ganas de comerme el mundo.",
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
                { slug: "el-problema-no-es-el-estres", title: "El problema no es el estrés. Es no salir de él", tag: "Regulación" },
                { slug: "el-dolor-rara-vez-empieza-donde-duele", title: "El dolor rara vez empieza donde duele", tag: "Dolor crónico" },
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
                <div className="text-sm uppercase tracking-[0.25em] opacity-50">Desde Manresa</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  Si el cuerpo ya no responde como antes, hablemos.
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
                  Primera sesión — 360€ + IVA · Lluçà, a 45 min de Manresa
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter lang="es" />

    </div>
    </>
  );
}
