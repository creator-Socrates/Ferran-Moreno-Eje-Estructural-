import Link from "next/link";
import {
  audienceProfiles, cases, contactWhatsApp, featuredTestimonials, goodFor,
  monicaCentral, notFor, steps,
} from "@/lib/content";
import { PersonStructuredData } from "@/components/structured-data";
import { Newsletter } from "@/components/newsletter";
import { FAQ } from "@/components/faq";

const reserveHref = `https://wa.me/34679229744?text=Hola%20Ferran%2C`;

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
          <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "#7C3AED", color: "#fff" }}>
            <div className="mx-auto grid max-w-[900px] gap-12 px-6 py-[140px] lg:grid-cols-2 lg:items-center">
              <div className="flex flex-col justify-center">
                <p className="mb-6 text-xs uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Reorganización estructural · Trabajo corporal · Regulación del sistema nervioso
                </p>

                <h1 className="text-5xl font-semibold leading-[1.15] tracking-tight lg:text-6xl">
                  <span className="sr-only">CUANDO EL CUERPO PIERDE EJE, NO NECESITA MÁS FUERZA. NECESITA PRECISIÓN.</span>
                  <span aria-hidden="true" className="block">CUANDO EL CUERPO PIERDE EJE,</span>
                  <span aria-hidden="true" className="block">NO NECESITA MÁS FUERZA.</span>
                  <span aria-hidden="true" className="block" style={{ color: "#F97316" }}>NECESITA PRECISIÓN.</span>
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
                  {`${monicaCentral.text.slice(0, 1211)}`}
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

  
          {/* CASOS */}
          <section id="casos" style={{ borderTop: "1px solid var(--border-subtle)", background: "#4F46E5", color: "#fff" }}>
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

          {/* MÉTODO */}
          <section id="como-trabajo" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <div className="grid gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>MÉTODO</div>
                  <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                    Lo más importante es la percepción, no la técnica
                  </h2>
                  <div className="mt-7 max-w-[33rem] space-y-7 text-[1.1rem] leading-[1.9]">
                    <p>
                      Percibir qué, dónde y cuándo. La técnica viene después.
                    </p>
                    <p>
                      Cada sesión empieza leyendo cómo se organiza el cuerpo. La intervención sale de esa lectura.
                    </p>
                  </div>
                  <div
                    className="mt-12 rounded-[2rem] p-8"
                    style={{ border: "1px solid rgba(79, 70, 229, 0.15)", background: "#DBE5FB" }}
                  >
                    <div className="max-w-[28rem] space-y-5 text-[1.02rem] leading-[1.85]">
                      <p>
                        No trabajo aplicando una técnica fija.
                      </p>
                      <p>
                        Primero leo cómo se organiza el sistema.
                      </p>
                      <p>
                        Después intervengo donde el cuerpo tiene capacidad real de cambio.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 content-start">
                  {steps.map((step) => (
                    <div
                      key={step.n}
                      className="flex min-h-[176px] rounded-[2rem] p-8"
                      style={{ border: "1px solid rgba(34, 211, 238, 0.22)", background: "#DDF7FD" }}
                    >
                      <div>
                        <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: "#0891B2" }}>
                          Paso {step.n}
                        </div>
                        <h3 className="text-[2rem] font-medium leading-[1.15] tracking-tight">{step.title}</h3>
                        <p className="mt-4 text-[1.02rem] leading-[1.85]" style={{ color: "rgba(29, 29, 31, 0.68)" }}>{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* PARA QUIÉN */}
          <section id="para-quien" style={{ borderTop: "1px solid var(--border-subtle)", background: "#22D3EE" }}>
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <div className="grid gap-16 lg:grid-cols-2">
                <div>
                  <div className="min-h-[140px]">
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
                  <div className="min-h-[140px]">
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
          <section style={{ borderTop: "1px solid var(--border-subtle)", background: "#F7F5F2" }}>
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
          <section id="historia" style={{ borderTop: "1px solid var(--border-subtle)", background: "#22C55E", color: "#fff" }}>
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.8)" }}>Mi historia</div>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">Ferran Moreno</h2>

              <div className="mt-10 space-y-6 text-lg leading-[1.8]">
                <p>A los 17 años, una lesión de taekwondo me dejó siete años sin poder funcionar. No podía levantar una garrafa de agua. Probé de todo. Nada funcionó.</p>
                <p>Una sola sesión de osteopatía me mostró que había otro camino.</p>
                <p>Dejé mi trabajo en una multinacional y empecé a formarme. Más de veinte años aprendiendo con algunos de los mejores en Rolfing, osteopatía visceral, acupuntura japonesa, medicina ayurvédica, trabajo energético y movimiento. En Alemania, Japón, México, Malasia, Estados Unidos y Tailandia.</p>
                <p>No buscaba técnicas. Buscaba entender el sistema. Sé lo que es eso desde dentro.</p>
                <p>Una sesión de quince minutos me enseñó que había otro camino. Esa pregunta sigue moviendo mi trabajo.</p>
                <p className="font-medium">Hoy trabajo con personas que siguen buscando la salida que yo tampoco encontraba entonces. Y con otras que sostienen mucho, pero necesitan que su sistema esté a la altura.</p>
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

          {/* TESTIMONIOS */}
          <section id="testimonios" style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
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

          {/* CTA */}
          <section style={{ borderTop: "1px solid var(--border-subtle)", background: "#f5e033", color: "var(--text-main)" }}>
            <div className="mx-auto max-w-[900px] px-6 py-[120px] text-center">
              <p className="text-3xl font-medium tracking-tight sm:text-4xl">
                Si el patrón sigue ahí, hablemos.
              </p>
              <p className="mt-4 text-base leading-[1.8]" style={{ opacity: 0.75 }}>
                Primera conversación breve para ver si tu caso encaja.
              </p>
              <div className="mt-10">
                <a
                  href={reserveHref}
                  className="rounded-full px-10 py-4 text-base font-medium text-white transition hover:opacity-85"
                  style={{ background: "var(--text-main)" }}
                >
                  Escríbeme
                </a>
              </div>
              <p className="mt-5 text-sm" style={{ opacity: 0.75 }}>
                Qué está pasando, desde cuándo y qué has probado.
              </p>
            </div>
          </section>

          {/* PROCESO */}
          <section style={{ borderTop: "1px solid var(--border-subtle)", background: "#FBFBFD", color: "var(--text-main)" }}>
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Proceso</div>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                No son sesiones sueltas.<br />Es un proceso de reorganización del sistema.
              </h2>
              <p className="mt-6 max-w-[56rem] text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                La primera sesión ordena el mapa. A partir de ahí definimos el proceso. En la mayoría de casos, trabajamos dentro de un marco aproximado de 6 meses, con frecuencia semanal o quincenal.
              </p>

              <div className="mt-8 max-w-[58rem] text-[1.02rem] leading-[1.85]" style={{ color: "rgba(29, 29, 31, 0.76)" }}>
                La primera sesión ordena el mapa.
                <br /><br />
                Ahí vemos qué sostiene el patrón, cómo responde tu sistema y qué nivel de intervención tiene sentido.
                <br /><br />
                No siempre se puede saber en una sesión hasta dónde llegará el cambio. A veces el patrón aparece rápido. A veces está sostenido por muchas capas: postura, tejido, respiración, sistema nervioso, emociones, hábitos o forma de pensar.
                <br /><br />
                Lo que sí podemos observar es cómo responde el cuerpo cuando empieza a dejar de defenderse: cambia la postura, cambia la respiración, cambia el tono del tejido, cambia la claridad interna.
                <br /><br />
                A partir de ahí no trabajamos con una promesa cerrada.
                <br /><br />
                Trabajamos con un proceso.
                <br /><br />
                Sesión a sesión vamos viendo qué aparece, qué se repite, qué se libera y qué necesita reorganizarse para que el cambio no sea solo alivio, sino una nueva forma de funcionar.
                <br /><br />
                Cada persona es un mapa distinto. El trabajo consiste en leer ese mapa y construir un algoritmo nuevo que sí funcione.
              </div>
            </div>
          </section>

          {/* INVERSIÓN */}
          <section style={{ borderTop: "1px solid var(--border-subtle)", background: "#F97316", color: "#fff" }}>
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.8)" }}>Inversión</div>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                La inversión se define leyendo el caso.<br />No prometiendo antes de tiempo.
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
                      En la mayoría de casos, trabajamos dentro de este marco. La frecuencia puede ser semanal o quincenal. La inversión se informa tras la primera sesión.
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
                        Cómo se define el precio →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACTO */}
          <section id="contact" style={{ borderTop: "1px solid var(--border-subtle)", background: "#FBFBFD", color: "var(--text-main)" }}>
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
                      Si has llegado hasta aquí,
                      <span className="block">ya sabes suficiente.</span>
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

        <Newsletter variant="footer" lang="es" source="home-es" />

        <footer
          style={{
            borderTop: "1px solid rgba(139, 104, 40, 0.42)",
            background: "#C4A76A",
          }}
        >
          <div
            className="mx-auto grid max-w-[900px] gap-4 px-6 py-8 text-sm lg:grid-cols-[1.2fr_1fr_auto] lg:items-center"
            style={{ color: "rgba(88, 73, 46, 0.82)" }}
          >
            <div className="flex items-center gap-x-2 whitespace-nowrap">
              <span>Reorganización estructural ·</span>
              <a
                href="https://maps.app.goo.gl/8Hd8KbJKawB7BjWZ6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:opacity-60"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z" />
                  <circle cx="12" cy="11" r="2.3" fill="currentColor" stroke="none" />
                </svg>
                Lluçà (Barcelona)
              </a>
              <span>· Online</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 lg:justify-self-center">
                <a
                  href="https://www.instagram.com/ferran__moreno_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:opacity-60"
                  aria-label="Instagram @ferran__moreno_"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="instagramGradientEs" x1="3" y1="21" x2="21" y2="3" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F58529" />
                        <stop offset="0.35" stopColor="#FEDA77" />
                        <stop offset="0.6" stopColor="#DD2A7B" />
                        <stop offset="0.85" stopColor="#8134AF" />
                        <stop offset="1" stopColor="#515BD4" />
                      </linearGradient>
                    </defs>
                    <rect x="3" y="3" width="18" height="18" rx="5" fill="url(#instagramGradientEs)" />
                    <circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="1.8" />
                    <circle cx="17.5" cy="6.5" r="1.1" fill="#fff" />
                  </svg>
                  Instagram
                </a>
                <span>·</span>
                <a
                  href="https://www.linkedin.com/in/ferran-moreno-56b04b29/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:opacity-60"
                  aria-label="LinkedIn Ferran Moreno"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#0A66C2" />
                    <path d="M8.1 10.1H5.9V18h2.2v-7.9ZM7 5.9a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6ZM18.1 13.3c0-2.4-1.3-3.5-3.1-3.5-1.4 0-2 .8-2.4 1.3v-1.1h-2.2V18h2.2v-4.4c0-1.2.2-2.4 1.7-2.4s1.5 1.4 1.5 2.5V18h2.2v-4.7Z" fill="#fff" />
                  </svg>
                  LinkedIn
                </a>
            </div>
            <div className="lg:justify-self-end">© 2026 Ferran Moreno</div>
          </div>
        </footer>

      </div>
    </>
  );
}
