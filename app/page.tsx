import Link from "next/link";
import {
  audienceProfiles, cases, contactWhatsApp, featuredTestimonials, goodFor,
  monicaCentral, notFor, steps,
} from "@/lib/content";
import { PersonStructuredData } from "@/components/structured-data";
import { Newsletter } from "@/components/newsletter";
import { FAQ } from "@/components/faq";
import { SiteFooter } from "@/components/site-footer";

const reserveHref = `https://wa.me/34679229744?text=Hola%20Ferran%2C`;
const finalTalkHref = `https://wa.me/34679229744?text=Hablemos`;

export default function HomePage() {
  return (
    <>
      <PersonStructuredData />
      <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>

        {/* HEADER */}
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
              aria-label="Navegación principal: Método, Casos, Para quién, Wall of trust, Mi historia, Blog, Contacto, EN"
              style={{ color: "var(--text-secondary)" }}
            >
              <ul className="flex items-center gap-8">
                <li><a href="#como-trabajo" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Método</a></li>
                <li><a href="#casos" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Casos</a></li>
                <li><a href="#para-quien" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Para quién</a></li>
                <li><Link href="/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Wall of trust</Link></li>
                <li><Link href="/historia" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Mi historia</Link></li>
                <li><Link href="/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link></li>
                <li><Link href="/contacto" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contacto</Link></li>
                <li aria-hidden="true" style={{ color: "var(--border-subtle)" }}>|</li>
                <li><Link href="/en" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">EN</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main>

          {/* HERO */}
          <section
            data-track-section="home_hero"
            style={{ borderBottom: "1px solid var(--border-subtle)", background: "#7C3AED", color: "#fff" }}
          >
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
                  Tu cuerpo no falla.<br />Se desorganiza.
                </p>
                <p className="mt-4 max-w-xl text-base leading-[1.8]">
                  No trabajamos el síntoma.<br />Trabajamos sobre el sistema.
                </p>

                <div className="mt-12">
                  <a
                    href={reserveHref}
                    data-track-location="home_hero"
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

          {/* TESTIMONIO DESTACADO */}
          <section data-track-section="home_featured_testimonial" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
                Testimonio destacado
              </div>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                Un cuerpo que recuerda su orden
              </h2>

              <div className="mt-10 rounded-[2rem] p-8 lg:p-10" style={{ border: "1px solid rgba(124, 58, 237, 0.15)", background: "#DDD6FE" }}>
                <p className="whitespace-pre-line text-lg leading-[1.8]">
                  {`${monicaCentral.text.slice(0, 1211)}`}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/monica"
                    data-track-event="click_featured_testimonial"
                    data-track-location="home_featured_testimonial"
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

  
          {/* CASOS */}
          <section
            id="casos"
            data-track-section="home_cases"
            style={{ borderTop: "1px solid var(--border-subtle)", background: "#4F46E5", color: "#fff" }}
          >
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.8)" }}>
                Casos habituales
              </div>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                Cuando el patrón sigue ahí.
              </h2>

              <div className="mt-12 grid gap-5 md:grid-cols-2">
                {cases.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.75rem] p-7"
                    style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)", color: "var(--text-main)" }}
                  >
                    <h3 className="text-[1.05rem] font-semibold tracking-tight leading-[1.35]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[1rem] leading-[1.75]" style={{ color: "var(--text-secondary)" }}>
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* MÉTODO */}
          <section id="como-trabajo" data-track-section="home_method" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>MÉTODO</div>
                  <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                    Lo más importante es la percepción, no la técnica
                  </h2>
                  <div className="mt-7 max-w-[34rem] space-y-5 text-[1.06rem] leading-[1.85]">
                    <p>Percibir qué, dónde y cuándo. La técnica viene después.</p>
                  </div>
                </div>

                <ol className="space-y-4">
                  {steps.map((step, index) => (
                    <li key={step.n}>
                      <div
                        className="rounded-[2rem] p-6 sm:p-7"
                        style={{ border: "1px solid rgba(34, 211, 238, 0.24)", background: "#DDF5FC" }}
                      >
                        <div className="text-[12px] font-semibold uppercase tracking-[0.18em]" style={{ color: "#0891B2" }}>
                          Paso {step.n}
                        </div>
                        <div className="mt-4 grid gap-4 sm:grid-cols-[minmax(0,220px)_1fr] sm:items-start">
                          <h3 className="text-[1.45rem] font-medium leading-[1.1] tracking-tight">
                            {step.title.replace(/^→\s*/, "")}
                          </h3>
                          <p className="text-[0.98rem] leading-[1.8]" style={{ color: "rgba(29, 29, 31, 0.68)" }}>
                            {step.text}
                          </p>
                        </div>
                      </div>
                      {index < steps.length - 1 ? (
                        <div aria-hidden="true" className="flex justify-center py-2" style={{ color: "#0891B2" }}>
                          <span className="text-[1.4rem] leading-none">↓</span>
                        </div>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          {/* PARA QUIÉN */}
          <section
            id="para-quien"
            data-track-section="home_who"
            style={{ borderTop: "1px solid var(--border-subtle)", background: "#22D3EE" }}
          >
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <div className="grid gap-16 lg:grid-cols-2">
                <div>
                  <div className="min-h-[180px]">
                    <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(0,0,0,0.55)" }}>Para quién es</div>
                    <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                      No trabajamos por sesiones sueltas.<br />Trabajamos por proceso.
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

          {/* PARA CUERPOS QUE SOSTIENEN MUCHO */}
          <section data-track-section="home_profiles" style={{ borderTop: "1px solid var(--border-subtle)", background: "#F7F5F2" }}>
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                Para cuerpos que sostienen mucho
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                Cuando el cuerpo sostiene presión, decisiones, impacto o presencia constante.
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

          {/* MI HISTORIA */}
          <section
            id="historia"
            data-track-section="home_story"
            style={{ borderTop: "1px solid var(--border-subtle)", background: "#22C55E", color: "#fff" }}
          >
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.8)" }}>Mi historia</div>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">Ferran Moreno</h2>

              <div className="mt-10 space-y-6 text-lg leading-[1.8]">
                <p>A los 17 años, una lesión de taekwondo me dejó siete años sin poder funcionar. No podía levantar una garrafa de agua. Probé de todo. Nada funcionó.</p>
                <p>Una sola sesión de osteopatía me mostró que había otro camino.</p>
                <p>Dejé mi trabajo en una multinacional y empecé a formarme. Más de veinte años aprendiendo con algunos de los mejores en Rolfing, osteopatía visceral, acupuntura japonesa, medicina ayurvédica, trabajo energético y movimiento. En Alemania, Japón, México, Malasia, Estados Unidos y Tailandia.</p>
                <p>No buscaba técnicas. Buscaba entender el sistema. Sé lo que es eso desde dentro.</p>
                <p>Una sesión de quince minutos me enseñó que había otro camino. Esa pregunta sigue moviendo mi trabajo.</p>
                <p className="font-medium">Hoy trabajo con personas que siguen sin encontrar la salida que yo tampoco encontraba entonces. Y con otras que sostienen mucho, pero necesitan que su sistema esté a la altura.</p>
              </div>

              <div className="mt-10">
                <Link
                  href="/historia"
                  data-track-event="click_story_page"
                  data-track-location="home_story"
                  className="inline-flex rounded-full px-7 py-3.5 text-sm font-medium transition hover:opacity-85"
                  style={{ background: "#C5E15A", color: "var(--text-main)" }}
                >
                  Leer historia completa
                </Link>
              </div>
            </div>
          </section>

          {/* TESTIMONIOS */}
          <section
            id="testimonios"
            data-track-section="home_testimonials"
            style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}
          >
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
                  data-track-event="click_wall_of_trust"
                  data-track-location="home_testimonials"
                  className="inline-flex rounded-full px-7 py-3.5 text-sm font-medium transition hover:opacity-85"
                  style={{ background: "#f5e033", color: "var(--text-main)" }}
                >
                  Ver Wall of trust completo
                </Link>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section
            data-track-section="home_mid_cta"
            style={{ borderTop: "1px solid var(--border-subtle)", background: "#f5e033", color: "var(--text-main)" }}
          >
            <div className="mx-auto max-w-[900px] px-6 py-[120px] text-center">
              <p className="text-3xl font-medium tracking-tight sm:text-4xl">
                El siguiente paso es ver qué está sosteniendo el patrón.
              </p>
              <p className="mt-4 text-base leading-[1.8]" style={{ opacity: 0.75 }}>
                No necesitas otra opinión más. Necesitas saber si este trabajo encaja con tu caso.
              </p>
              <div className="mt-10">
                <a
                  href={reserveHref}
                  data-track-location="home_mid_cta"
                  className="rounded-full px-10 py-4 text-base font-medium text-white transition hover:opacity-85"
                  style={{ background: "var(--text-main)" }}
                >
                  Ver si este trabajo encaja con mi caso
                </a>
              </div>
              <p className="mt-5 text-sm" style={{ opacity: 0.75 }}>
                Primera conversación breve. Sin compromiso.
                <br />
                Sin venderte un proceso antes de leerte.
              </p>
            </div>
          </section>

          {/* PROCESO */}
          <section
            data-track-section="home_process"
            style={{ borderTop: "1px solid var(--border-subtle)", background: "#FBFBFD", color: "var(--text-main)" }}
          >
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Proceso</div>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                No son sesiones sueltas.<br />Es un proceso de reorganización del sistema.
              </h2>
              <p className="mt-6 max-w-[56rem] text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                La primera sesión ordena el mapa. A partir de ahí definimos el proceso. En la mayoría de casos, trabajamos dentro de un marco aproximado de 6 meses, con frecuencia semanal o quincenal.
              </p>

              <div className="mt-8 max-w-[58rem] space-y-6 text-[1.02rem] leading-[1.85]" style={{ color: "rgba(29, 29, 31, 0.76)" }}>
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

          {/* INVERSIÓN */}
          <section
            data-track-section="home_investment"
            style={{ borderTop: "1px solid var(--border-subtle)", background: "#F97316", color: "#fff" }}
          >
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.8)" }}>Inversión</div>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                La inversión se define después de leer el caso.<br />No antes.
              </h2>
              <p className="mt-6 max-w-[56rem] text-base leading-[1.8]" style={{ color: "rgba(255,255,255,0.8)" }}>
                No todos los casos requieren el mismo nivel de intervención. Algunas personas responden rápido. Otras llegan con años de compensación, más capas y más trabajo previo que ordenar.
              </p>

              <div className="mt-14 rounded-[2rem] p-8 lg:p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)", color: "var(--text-main)" }}>
                <div className="text-sm uppercase tracking-[0.2em]" style={{ color: "var(--text-secondary)" }}>Inversión</div>
                <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1fr_1.2fr_1fr]">
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
                      <span className="block">Frecuencia semanal o quincenal, según el caso.</span>
                      <span className="mt-2 block">Como referencia, la mayoría de procesos se mueven entre 360€ y 600€ al mes + IVA.</span>
                      <span className="mt-2 block">El marco de trabajo se define tras la primera sesión.</span>
                    </div>
                  </div>

                  <div
                    className="rounded-[1.5rem] p-5"
                    style={{ border: "1px solid var(--border-subtle)", background: "rgba(255,255,255,0.72)" }}
                  >
                    <div className="text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--text-secondary)" }}>Casos específicos</div>
                    <div className="mt-2 text-[1.45rem] font-semibold leading-[1.15] tracking-[-0.02em]">Presupuesto personalizado</div>
                    <div className="mt-2 text-sm leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
                      Intensivos, casos complejos o intervenciones de alta responsabilidad.
                    </div>
                    <div className="mt-4">
                      <Link
                        href="/blog/como-se-define-el-precio-de-una-intervencion"
                        data-track-event="click_pricing_article"
                        data-track-location="home_investment"
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

          {/* CONTACTO */}
          <section
            id="contact"
            data-track-section="home_final_cta"
            style={{ borderTop: "1px solid var(--border-subtle)", background: "#FBFBFD", color: "var(--text-main)" }}
          >
            <div className="mx-auto max-w-[980px] px-6 py-[120px]">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
                <div>
                  <div
                    className="inline-flex rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.22em]"
                    style={{ background: "#F2DE78", color: "#6F5615" }}
                  >
                    Primera conversación
                  </div>
                  <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-[2.2rem] leading-[1.12]">
                    Si has llegado hasta aquí,
                    {" "}
                    <span className="block">ya sabes suficiente.</span>
                    {" "}
                    <span className="block" style={{ color: "#D9732A" }}>Hablemos.</span>
                  </h2>
                  <p className="mt-4 max-w-[42ch] text-[0.98rem] leading-[1.7]" style={{ color: "rgba(29, 29, 31, 0.72)" }}>
                    Presencial en Lluçà (Barcelona) o online, desde cualquier parte.
                  </p>
                  <div className="mt-7">
                    <a
                      href={finalTalkHref}
                      data-track-location="home_final_cta_top"
                      className="inline-flex rounded-full px-7 py-3.5 text-sm font-medium transition hover:opacity-85"
                      style={{ background: "#111111", color: "#FFFFFF" }}
                    >
                      Quiero saber si este trabajo encaja conmigo
                    </a>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <div
                    className="relative w-full max-w-[360px] overflow-hidden rounded-[3.3rem] p-[9px]"
                    style={{
                      background: "#161616",
                      boxShadow: "0 28px 60px rgba(17, 24, 39, 0.16), 0 6px 18px rgba(17, 24, 39, 0.1)",
                    }}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute left-1/2 top-3 z-20 h-6 w-32 -translate-x-1/2 rounded-full"
                      style={{ background: "#0D0D0D" }}
                    />
                    <div
                      className="relative aspect-[390/844] rounded-[2.8rem] px-4 pb-5 pt-12 sm:px-5"
                      style={{
                        background: "linear-gradient(180deg, #FFF7E5 0%, #FFF2D3 100%)",
                      }}
                    >
                      <div
                        className="-mx-4 -mt-3 mb-5 flex items-center justify-between border-b px-4 pb-4 pt-1 sm:-mx-5 sm:px-5"
                        style={{ borderColor: "rgba(215, 167, 91, 0.14)", background: "rgba(255, 249, 239, 0.72)" }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold"
                            style={{ background: "#D9732A", color: "#fff" }}
                          >
                            FM
                          </div>
                          <div className="leading-tight">
                            <div className="text-[0.98rem] font-semibold tracking-tight" style={{ color: "rgba(29, 29, 31, 0.92)" }}>
                              Ferran Moreno
                            </div>
                            <div className="mt-1 text-[0.76rem]" style={{ color: "rgba(29, 29, 31, 0.5)" }}>
                              Primera conversación
                            </div>
                          </div>
                        </div>
                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-full"
                          style={{ background: "#FFFFFF", border: "1px solid rgba(215, 167, 91, 0.12)" }}
                        >
                          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.56 0 1 .44 1 1V20c0 .56-.44 1-1 1C10.85 21 3 13.15 3 3c0-.56.44-1 1-1h3.5c.56 0 1 .44 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" fill="#111111" />
                          </svg>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-start">
                          <div
                            className="relative max-w-[82%] rounded-[1.35rem] px-4 py-3"
                            style={{ background: "#FFFFFF", color: "rgba(29, 29, 31, 0.84)", border: "1px solid rgba(215, 167, 91, 0.12)" }}
                          >
                            <span
                              aria-hidden="true"
                              className="absolute -left-1 top-4 h-3 w-3 rotate-45"
                              style={{ background: "#FFFFFF", borderLeft: "1px solid rgba(215, 167, 91, 0.12)", borderBottom: "1px solid rgba(215, 167, 91, 0.12)" }}
                            />
                            <p className="relative text-[0.97rem] leading-[1.65]">No vienes solo a reparar.</p>
                          </div>
                        </div>

                        <div className="flex justify-start">
                          <div
                            className="relative max-w-[82%] rounded-[1.35rem] px-4 py-3"
                            style={{ background: "#FFFFFF", color: "rgba(29, 29, 31, 0.84)", border: "1px solid rgba(215, 167, 91, 0.12)" }}
                          >
                            <span
                              aria-hidden="true"
                              className="absolute -left-1 top-4 h-3 w-3 rotate-45"
                              style={{ background: "#FFFFFF", borderLeft: "1px solid rgba(215, 167, 91, 0.12)", borderBottom: "1px solid rgba(215, 167, 91, 0.12)" }}
                            />
                            <p className="relative text-[0.97rem] leading-[1.65]">Vienes a recuperar capacidad.</p>
                          </div>
                        </div>

                        <div className="flex justify-start">
                          <div
                            className="relative max-w-[90%] rounded-[1.35rem] px-4 py-3"
                            style={{ background: "#FFFFFF", color: "rgba(29, 29, 31, 0.8)", border: "1px solid rgba(215, 167, 91, 0.12)" }}
                          >
                            <span
                              aria-hidden="true"
                              className="absolute -left-1 top-4 h-3 w-3 rotate-45"
                              style={{ background: "#FFFFFF", borderLeft: "1px solid rgba(215, 167, 91, 0.12)", borderBottom: "1px solid rgba(215, 167, 91, 0.12)" }}
                            />
                            <p className="relative text-[0.95rem] leading-[1.7]">
                              Capacidad para vivir mejor, sostener lo que amas, nutrir tu pasión, tu trabajo, tus sueños y tu presencia.
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-start">
                          <div
                            className="relative max-w-[90%] rounded-[1.35rem] px-4 py-3"
                            style={{ background: "#FFFFFF", color: "rgba(29, 29, 31, 0.84)", border: "1px solid rgba(215, 167, 91, 0.12)" }}
                          >
                            <span
                              aria-hidden="true"
                              className="absolute -left-1 top-4 h-3 w-3 rotate-45"
                              style={{ background: "#FFFFFF", borderLeft: "1px solid rgba(215, 167, 91, 0.12)", borderBottom: "1px solid rgba(215, 167, 91, 0.12)" }}
                            />
                            <p className="relative text-[0.95rem] leading-[1.65]">
                              ¿Hablamos 15 min y vemos si este trabajo es para ti?
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-end pt-3">
                          <div
                            className="relative max-w-[88%] rounded-[1.35rem] px-4 py-3"
                            style={{ background: "#DCF8C6", color: "rgba(29, 29, 31, 0.92)", boxShadow: "0 10px 24px rgba(17, 24, 39, 0.08)" }}
                          >
                            <span
                              aria-hidden="true"
                              className="absolute -right-1 top-4 h-3 w-3 rotate-45"
                              style={{ background: "#DCF8C6" }}
                            />
                            <p className="text-[0.98rem] font-medium leading-[1.6]">
                              Hola Ferran,
                              <br />
                              Me gustar&iacute;a saber si este trabajo encaja conmigo.
                            </p>
                            <div className="mt-2 text-right text-[0.72rem]" style={{ color: "rgba(29, 29, 31, 0.45)" }}>
                              enviado
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 flex items-center gap-3">
                          <div
                            aria-hidden="true"
                            className="flex h-12 w-12 items-center justify-center rounded-full text-[2rem] leading-none"
                            style={{ color: "rgba(29, 29, 31, 0.92)" }}
                          >
                            +
                          </div>
                          <a
                            href={finalTalkHref}
                            data-track-location="home_final_cta_input"
                            className="flex min-h-[56px] flex-1 items-center rounded-full px-5 transition hover:opacity-90"
                            style={{ background: "#FFFFFF", border: "1px solid rgba(17, 24, 39, 0.16)", boxShadow: "0 6px 16px rgba(17, 24, 39, 0.06)" }}
                          >
                            <span className="text-[1.05rem] font-medium tracking-tight" style={{ color: "rgba(29, 29, 31, 0.92)" }}>
                              Hablemos
                            </span>
                          </a>
                          <a
                            href={finalTalkHref}
                            data-track-location="home_final_cta_send"
                            className="flex h-14 w-14 items-center justify-center rounded-full"
                            style={{ background: "#111111", color: "#FFFFFF", boxShadow: "0 10px 24px rgba(17, 24, 39, 0.18)" }}
                          >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                              <path d="M4 12.5 19.2 5.4c.8-.37 1.6.43 1.28 1.24l-5.86 15.1c-.34.88-1.58.95-2.03.11l-2.33-4.35-4.45-2.16c-.9-.44-.86-1.72.07-2.04l12.34-4.24-13 3.44c-.95.25-1.67-.78-1.03-1.45Z" fill="currentColor" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>

        <FAQ lang="es" />

        <Newsletter variant="footer" lang="es" source="home-es" />

        <SiteFooter lang="es" />

      </div>
    </>
  );
}
