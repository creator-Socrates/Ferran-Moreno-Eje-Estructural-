import type { Metadata } from "next";
import Link from "next/link";
import {
  audienceProfiles,
  contactWhatsApp,
  featuredTestimonials,
  goodFor,
  monicaCentral,
  notFor,
  steps,
} from "@/lib/content";
import { FAQ } from "@/components/faq";
import { Newsletter } from "@/components/newsletter";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Versión limpia",
  robots: {
    index: false,
    follow: false,
  },
};

const reserveHref = `${contactWhatsApp}?text=Hola%20Ferran%2C`;

const trimmedCases = [
  "Dolor que vuelve.",
  "Tensión constante, fatiga o sensación de vivir siempre activado.",
  "Lesiones o molestias que mejoran un tiempo y después reaparecen.",
  "Un sistema nervioso que no termina de bajar.",
  "Bloqueos físicos o energéticos que no encajan del todo en una explicación convencional.",
  "La sensación de que el cuerpo está sosteniendo más de lo que parece.",
];

const storyPreview = [
  "A los 17 años, una lesión de taekwondo me dejó siete años sin poder funcionar. No podía levantar una garrafa de agua. Probé de todo. Nada funcionó.",
  "Una sola sesión de osteopatía me mostró que había otro camino.",
  "Dejé mi trabajo en una multinacional y empecé a formarme. Más de veinte años aprendiendo con algunos de los mejores en Rolfing, osteopatía visceral, acupuntura japonesa, medicina ayurvédica, trabajo energético y movimiento. En Alemania, Japón, México, Malasia, Estados Unidos y Tailandia.",
  "No buscaba técnicas. Buscaba entender el sistema.",
  "Hoy trabajo con personas que siguen sin encontrar la salida que yo tampoco encontraba entonces. Y con otras que sostienen mucho, pero necesitan que su sistema esté a la altura.",
];

const processParagraphs = [
  "Ahí vemos qué sostiene el patrón, cómo responde tu sistema y qué nivel de intervención tiene sentido.",
  "No siempre se puede saber en una sesión hasta dónde llegará el cambio. A veces el patrón aparece rápido. A veces está enterrado bajo varias capas: postura, tejido, respiración, sistema nervioso, emociones, hábitos o forma de pensar.",
  "Lo que sí podemos observar es cómo responde el cuerpo cuando empieza a dejar de defenderse: cambia la postura, cambia la respiración, cambia el tono del tejido, cambia la claridad interna.",
  "Sesión a sesión vamos viendo qué aparece, qué se repite, qué se libera y qué necesita reorganizarse para que el cambio no sea solo alivio, sino una nueva forma de funcionar.",
  "Cada persona es un mapa distinto. El trabajo consiste en leer ese mapa y construir un algoritmo nuevo que sí funcione.",
];

export default function CleanHomePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <header className="sticky top-0 z-30" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-5">
          <div className="leading-none">
            <div className="text-[17px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-main)" }}>Ferran Moreno</div>
            <div className="mt-[5px] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              TRABAJO CORPORAL · REGULACIÓN · ENERGÍA
            </div>
          </div>

          <nav
            className="hidden md:block"
            aria-label="Navegación de la versión limpia"
            style={{ color: "var(--text-secondary)" }}
          >
            <ul className="flex items-center gap-8">
              <li><a href="#metodo" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Método</a></li>
              <li><a href="#casos" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Casos</a></li>
              <li><a href="#para-quien" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Para quién</a></li>
              <li><Link href="/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Wall of trust</Link></li>
              <li><Link href="/historia" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Mi historia</Link></li>
              <li><Link href="/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link></li>
              <li><Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Actual</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "#7C3AED", color: "#fff" }}>
          <div className="mx-auto grid max-w-[900px] gap-12 px-6 py-[140px] lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col justify-center">
              <p className="mb-6 text-xs uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.75)" }}>
                Reorganización estructural · Trabajo corporal · Regulación del sistema nervioso
              </p>

              <h1 className="text-5xl font-semibold leading-[1.15] tracking-tight lg:text-6xl">
                {"CUANDO EL CUERPO PIERDE EJE,"}
                <br />
                {"NO NECESITA MÁS FUERZA."}
                <br />
                <span style={{ color: "#F97316" }}>NECESITA PRECISIÓN.</span>
              </h1>

              <p className="mt-10 max-w-xl text-base leading-[1.8]">
                Tu cuerpo no falla.
                <br />
                Se desorganiza.
              </p>
              <p className="mt-4 max-w-xl text-base leading-[1.8]">
                No trabajamos el síntoma.
                <br />
                Trabajamos sobre el sistema.
              </p>

              <div className="mt-12">
                <a
                  href={reserveHref}
                  className="rounded-full px-7 py-3.5 text-sm font-medium transition hover:opacity-85"
                  style={{ background: "#F97316", color: "#fff" }}
                >
                  Escríbeme
                </a>
                <p className="mt-4 max-w-md text-sm leading-[1.6]" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Qué está pasando, desde cuándo y qué has probado.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="relative w-full space-y-5 rounded-[2.5rem] p-8 lg:p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
                <div className="rounded-2xl p-6" style={{ border: "1px solid rgba(124, 58, 237, 0.18)", background: "#DDD6FE", color: "var(--text-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Lo que suele pasar</div>
                  <div className="mt-2 text-base leading-[1.8] whitespace-pre-line">
                    {`Dolor que vuelve. Tensión constante.
Fatiga. Sensación de no terminar de volver a ti.
Has probado cosas.
Funciona un tiempo. Vuelve.`}
                  </div>
                </div>

                <div className="rounded-2xl p-6 text-white" style={{ background: "var(--text-main)" }}>
                  <div className="text-sm opacity-50">Lo que hacemos</div>
                  <div className="mt-2 text-base leading-[1.8]">
                    Leemos cómo se organiza. Quitamos interferencias. Devolvemos orden y margen.
                  </div>
                </div>

                <div className="rounded-2xl p-6" style={{ border: "1px solid rgba(124, 58, 237, 0.18)", background: "#DDD6FE", color: "var(--text-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Cómo se siente</div>
                  <div className="mt-2 text-base leading-[1.8]">
                    Menos esfuerzo. Más eje. Más espacio.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
              Testimonio destacado
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              Un cuerpo que recuerda su orden
            </h2>

            <div className="mt-10 rounded-[2rem] p-8 lg:p-10" style={{ border: "1px solid rgba(124, 58, 237, 0.15)", background: "#DDD6FE" }}>
              <p className="whitespace-pre-line text-lg leading-[1.8]">
                {monicaCentral.text.slice(0, 1211)}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/monica"
                  className="rounded-full px-6 py-3 text-sm font-medium text-white transition hover:opacity-85"
                  style={{ background: "var(--text-main)" }}
                >
                  Leer testimonio completo
                </Link>
                <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  — {monicaCentral.name}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="casos" style={{ borderTop: "1px solid var(--border-subtle)", background: "#4F46E5", color: "#fff" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.8)" }}>
              Casos habituales
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              Cuando el patrón sigue ahí.
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {trimmedCases.map((item) => (
                <div
                  key={item}
                  className="whitespace-pre-line rounded-[1.75rem] p-6 leading-[1.8]"
                  style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)", color: "var(--text-main)" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="grid gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
              <div>
                <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>MÉTODO</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  Lo más importante es la percepción, no la técnica
                </h2>
                <div className="mt-7 max-w-[33rem] space-y-6 text-[1.08rem] leading-[1.9]">
                  <p>Percibir qué, dónde y cuándo. La técnica viene después.</p>
                </div>
              </div>

              <div className="grid gap-4 content-start lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
                {steps.map((step, index) => (
                  <>
                    <div
                      key={step.n}
                      className="flex min-h-[188px] rounded-[2rem] p-7"
                      style={{ border: "1px solid rgba(34, 211, 238, 0.22)", background: "#DDF7FD" }}
                    >
                      <div>
                        <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: "#0891B2" }}>
                          Paso {step.n}
                        </div>
                        <h3 className="text-[1.7rem] font-medium leading-[1.15] tracking-tight">
                          {step.title.replace(/^→\s*/, "")}
                        </h3>
                        <p className="mt-4 text-[0.98rem] leading-[1.8]" style={{ color: "rgba(29, 29, 31, 0.68)" }}>{step.text}</p>
                      </div>
                    </div>
                    {index < steps.length - 1 ? (
                      <div
                        aria-hidden="true"
                        className="hidden justify-center lg:flex"
                        style={{ color: "#0891B2" }}
                      >
                        <span className="text-[1.8rem] leading-none">→</span>
                      </div>
                    ) : null}
                  </>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="para-quien" style={{ borderTop: "1px solid var(--border-subtle)", background: "#22D3EE" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <div className="min-h-[180px]">
                  <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(0,0,0,0.55)" }}>Para quién es</div>
                  <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                    Esto suele encajar cuando ya intuyes que el patrón va más allá del síntoma.
                  </h2>
                </div>
                <div className="mt-10 space-y-4">
                  {goodFor.map((item) => (
                    <div
                      key={item}
                      className="flex min-h-[104px] items-center rounded-2xl p-5 leading-[1.8]"
                      style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)", color: "var(--text-main)" }}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                  <p>Si vienes solo a probar, quizá no sea el momento.</p>
                  <p className="font-semibold" style={{ color: "var(--text-main)" }}>Si vienes a implicarte, podemos empezar.</p>
                </div>
              </div>

              <div>
                <div className="min-h-[180px]">
                  <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(0,0,0,0.55)" }}>Para quién no es</div>
                  <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                    Este trabajo no encaja en todos los casos.
                  </h2>
                </div>
                <div className="mt-10 space-y-4">
                  {notFor.map((item) => (
                    <div
                      key={item}
                      className="flex min-h-[104px] items-center rounded-2xl p-5 leading-[1.8]"
                      style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)", color: "var(--text-main)" }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ borderTop: "1px solid var(--border-subtle)", background: "#F7F5F2" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Para cuerpos que sostienen mucho
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Presión, decisiones, impacto, exigencia.
            </p>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {audienceProfiles.map((profile) => (
                <div
                  key={profile.title}
                  className="rounded-[1.75rem] p-8"
                  style={{ border: "1px solid rgba(34, 197, 94, 0.18)", background: "#CCF1E0" }}
                >
                  <h3 className="text-[15px] font-semibold uppercase tracking-[0.08em]">
                    {profile.title}
                  </h3>
                  <p className="mt-4 whitespace-pre-line text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    {profile.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
                Una sesión puede aliviar.
              </p>
              <p className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl leading-[1.4]">
                Un proceso puede cambiar la forma en que tu cuerpo se sostiene.
              </p>
            </div>
          </div>
        </section>

        <section style={{ borderTop: "1px solid var(--border-subtle)", background: "#22C55E", color: "#fff" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.8)" }}>Mi historia</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">Ferran Moreno</h2>

            <div className="mt-10 space-y-6 text-lg leading-[1.8]">
              {storyPreview.map((paragraph) => (
                <p key={paragraph} className={paragraph === storyPreview[storyPreview.length - 1] ? "font-medium" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/historia"
                className="inline-flex rounded-full px-7 py-3.5 text-sm font-medium transition hover:opacity-85"
                style={{ background: "#C5E15A", color: "var(--text-main)" }}
              >
                Leer historia completa
              </Link>
            </div>
          </div>
        </section>

        <section style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Testimonios</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              Personas que han pasado por este proceso
            </h2>
            <p className="mt-6 text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Una selección breve. El resto está en el wall of trust completo.
            </p>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {featuredTestimonials.map((item, i) => (
                <div
                  key={i}
                  className="rounded-[2.5rem] p-8"
                  style={{ border: "1px solid rgba(197, 225, 90, 0.4)", background: "#E5F0B8" }}
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
                className="inline-flex rounded-full px-7 py-3.5 text-sm font-medium transition hover:opacity-85"
                style={{ background: "#f5e033", color: "var(--text-main)" }}
              >
                Ver Wall of trust completo
              </Link>
            </div>
          </div>
        </section>

        <section style={{ borderTop: "1px solid var(--border-subtle)", background: "#FBFBFD", color: "var(--text-main)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Proceso</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              No son sesiones sueltas.
              <br />
              Es un proceso de reorganización del sistema.
            </h2>
            <p className="mt-6 max-w-[56rem] text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              La primera sesión sirve para ordenar el mapa y definir si tiene sentido trabajar por proceso. En la mayoría de casos, eso abre un marco aproximado de 6 meses, con frecuencia semanal o quincenal.
            </p>

            <div className="mt-10 max-w-[58rem] space-y-6 text-[1.02rem] leading-[1.85]" style={{ color: "rgba(29, 29, 31, 0.76)" }}>
              <p>
                Ahí vemos qué sostiene el patrón, cómo responde tu sistema y qué nivel de intervención tiene sentido.
              </p>
              <p>
                A veces el patrón aparece rápido. A veces está enterrado bajo varias capas: postura, tejido, respiración, sistema nervioso, emociones, hábitos o forma de pensar.
              </p>
              <p>
                Lo importante no es prometer un resultado cerrado en una sesión. Lo importante es ver cómo responde el cuerpo cuando empieza a dejar de defenderse.
              </p>
              <p>
                A partir de ahí, sesión a sesión, vamos viendo qué aparece, qué se repite y qué necesita reorganizarse para que el cambio no sea solo alivio, sino una nueva forma de funcionar.
              </p>
              <p>
                No se trata solo de quitar lo que molesta. Se trata de ver qué te hace volver ahí y cambiarlo.
              </p>
            </div>
          </div>
        </section>

        <section style={{ borderTop: "1px solid var(--border-subtle)", background: "#F97316", color: "#fff" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.8)" }}>Inversión</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              La inversión se define leyendo el caso.
              <br />
              No antes.
            </h2>
            <p className="mt-6 max-w-[56rem] text-base leading-[1.8]" style={{ color: "rgba(255,255,255,0.8)" }}>
              No todos los casos requieren el mismo nivel de intervención. Algunas personas responden rápido. Otras llegan con años de compensación, más capas y más trabajo previo que ordenar.
            </p>

            <div className="mt-14 rounded-[2rem] p-8 lg:p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)", color: "var(--text-main)" }}>
              <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1.2fr_1fr]">
                <div
                  className="rounded-[1.5rem] p-5"
                  style={{ border: "1px solid var(--border-subtle)", background: "rgba(255,255,255,0.72)" }}
                >
                  <div className="text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--text-secondary)" }}>Sesión individual</div>
                  <div className="mt-2 text-[1.45rem] font-semibold leading-[1.15] tracking-[-0.02em]">180€ / hora + IVA</div>
                  <div className="mt-2 text-sm leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
                    Para un caso puntual o para quien ya conoce el trabajo.
                  </div>
                </div>

                <div
                  className="rounded-[1.5rem] p-5"
                  style={{ border: "1px solid rgba(245, 224, 51, 0.28)", background: "rgba(245,224,51,0.12)" }}
                >
                  <div className="text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--text-secondary)" }}>Primera sesión</div>
                  <div className="mt-2 text-[1.45rem] font-semibold leading-[1.15] tracking-[-0.02em]">360€ + IVA</div>
                  <div className="mt-2 text-sm leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
                    Lectura completa del sistema, análisis y más atención que una sesión estándar.
                  </div>
                </div>

                <div
                  className="rounded-[1.5rem] p-5"
                  style={{ border: "1px solid rgba(196, 167, 106, 0.28)", background: "#FFF3D8" }}
                >
                  <div className="text-[11px] uppercase tracking-[0.16em]" style={{ color: "rgba(29, 29, 31, 0.54)" }}>Proceso</div>
                  <div className="mt-2 text-[1.55rem] font-medium leading-[1.12] tracking-[-0.02em]" style={{ color: "var(--text-main)" }}>
                    Compromiso inicial de 6 meses
                  </div>
                  <div className="mt-3 text-sm leading-[1.75]" style={{ color: "rgba(29, 29, 31, 0.72)" }}>
                    <span className="block">Sesiones semanales o quincenales, según el caso.</span>
                    <span className="mt-2 block">Como referencia, la mayoría de procesos se mueven entre 360€ y 600€ al mes + IVA.</span>
                    <span className="mt-2 block">La inversión final se define tras la primera sesión.</span>
                  </div>
                </div>

                <div
                  className="rounded-[1.5rem] p-5"
                  style={{ border: "1px solid var(--border-subtle)", background: "rgba(255,255,255,0.72)" }}
                >
                  <div className="text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--text-secondary)" }}>Casos específicos</div>
                  <div className="mt-2 text-[1.45rem] font-semibold leading-[1.15] tracking-[-0.02em]">Presupuesto personalizado</div>
                  <div className="mt-2 text-sm leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
                    Intensivos, consulta estratégica o casos de alta responsabilidad.
                  </div>
                  <div className="mt-4">
                    <Link
                      href="/blog/como-se-define-el-precio-de-una-intervencion"
                      className="text-[11px] uppercase tracking-[0.14em] transition hover:opacity-60"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Entender el criterio →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ borderTop: "1px solid var(--border-subtle)", background: "#FBFBFD", color: "var(--text-main)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div
              className="relative overflow-visible rounded-[2.5rem] px-7 py-7 lg:px-8 lg:py-8"
              style={{
                border: "1px solid rgba(249, 115, 22, 0.14)",
                background: "#FFF3DF",
                boxShadow: "0 14px 30px rgba(17, 24, 39, 0.05)",
              }}
            >
              <div
                aria-hidden="true"
                className="absolute -bottom-3 left-10 h-6 w-6 rotate-45"
                style={{ background: "#FFF3DF", borderRight: "1px solid rgba(249, 115, 22, 0.14)", borderBottom: "1px solid rgba(249, 115, 22, 0.14)" }}
              />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_280px] lg:items-end">
                <div>
                  <div
                    className="inline-flex rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.22em]"
                    style={{ background: "#f5e033", color: "#5B4A0D" }}
                  >
                    Primera conversación
                  </div>
                  <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-[2.2rem] leading-[1.12]">
                    Si has llegado hasta aquí,{" "}
                    <span className="block">ya sabes suficiente.</span>{" "}
                    <span className="block" style={{ color: "#F97316" }}>Hablemos.</span>
                  </h2>
                  <p className="mt-4 max-w-[42ch] text-[0.98rem] leading-[1.7]" style={{ color: "rgba(29, 29, 31, 0.72)" }}>
                    Presencial en Lluçà (Barcelona) o online, desde cualquier parte.
                  </p>
                </div>

                <div
                  className="flex flex-col items-start gap-3 rounded-[1.5rem] p-5"
                  style={{ background: "rgba(255,255,255,0.72)", border: "1px solid rgba(249, 115, 22, 0.1)" }}
                >
                  <a
                    href={reserveHref}
                    className="rounded-full px-6 py-2.5 text-center text-sm font-medium transition hover:opacity-85"
                    style={{ background: "#F97316", color: "#fff" }}
                  >
                    Escríbeme
                  </a>
                  <p className="text-[13px] leading-[1.6]" style={{ color: "rgba(29, 29, 31, 0.6)" }}>
                    Qué está pasando, desde cuándo y qué has probado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FAQ lang="es" />

      <Newsletter variant="footer" lang="es" source="clean-home-es" />

      <SiteFooter lang="es" />
    </div>
  );
}
