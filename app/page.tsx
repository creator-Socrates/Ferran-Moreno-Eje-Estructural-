import Link from "next/link";
import {
  audienceProfiles, cases, contactWhatsApp, contactWhatsAppDisplay, featuredTestimonials, goodFor,
  monicaCentral, notFor, pillars, steps,
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

            <nav className="hidden items-center gap-8 md:flex" style={{ color: "var(--text-secondary)" }}>
              <a href="#como-trabajo" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Método</a>
              <a href="#casos" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Casos</a>
              <a href="#para-quien" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Para quién</a>
              <Link href="/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Wall of trust</Link>
              <Link href="/historia" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Mi historia</Link>
              <Link href="/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link>
              <Link href="/contacto" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contacto</Link>
              <span style={{ color: "var(--border-subtle)" }}>|</span>
              <Link href="/en" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">EN</Link>
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
                  <span className="block">CUANDO EL CUERPO PIERDE EJE,{" "}</span>
                  <span className="block">NO NECESITA MÁS FUERZA.{" "}</span>
                  <span className="block" style={{ color: "#F97316" }}>NECESITA PRECISIÓN.</span>
                </h1>

                <p className="mt-10 max-w-xl text-base leading-[1.8]">
                  Tu cuerpo no está roto.<br />Está mal organizado.
                </p>
                <p className="mt-4 max-w-xl text-base leading-[1.8]">
                  No trabajamos el síntoma.<br />Reorganizamos el sistema.
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
                    Cuéntame en 3 líneas qué pasa, desde cuándo y qué has probado.
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
                      No trabajamos el síntoma. Trabajamos el sistema. Leemos cómo se organiza tu cuerpo. Devolvemos margen al sistema nervioso. Quitamos interferencias.
                    </div>
                  </div>

                  <div className="rounded-2xl p-6" style={{ border: "1px solid rgba(124, 58, 237, 0.18)", background: "#DDD6FE", color: "var(--text-main)" }}>
                    <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Cómo se siente</div>
                    <div className="mt-2 text-base leading-[1.8]">
                      No empujo. Permito. El cuerpo ya sabe adónde ir. Solo necesita que alguien le quite lo que sobra.
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
                Situaciones donde este trabajo suele marcar la diferencia
              </h2>

              <div className="mt-12 grid gap-5 md:grid-cols-2">
                {cases.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.75rem] p-6 leading-[1.8]"
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
              <div className="grid gap-16 lg:grid-cols-2">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>MÉTODO</div>
                  <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                    Lo más importante es la percepción, no la técnica
                  </h2>
                  <p className="mt-6 text-lg leading-[1.8]">
                    Percibir qué, dónde y cuándo. La técnica es una herramienta dentro de esa lectura.
                    <br /><br />
                    Cada sesión empieza leyendo cómo se organiza el cuerpo. La intervención surge de esa lectura, no de un protocolo estándar.
                  </p>
                  <div className="mt-10 space-y-4">
                    {pillars.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl p-5 leading-[1.8]"
                        style={{ border: "1px solid rgba(79, 70, 229, 0.15)", background: "#DBE5FB" }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6 content-start">
                  {steps.map((step) => (
                    <div
                      key={step.n}
                      className="rounded-[2rem] p-8"
                      style={{ border: "1px solid rgba(79, 70, 229, 0.15)", background: "#DBE5FB" }}
                    >
                      <h3 className="text-2xl font-medium">{step.title}</h3>
                      <p className="mt-3 leading-[1.8]" style={{ color: "var(--text-secondary)" }}>{step.text}</p>
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
                  <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(0,0,0,0.55)" }}>Para quién es</div>
                  <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                    No trabajamos por sesiones sueltas.<br />Trabajamos por proceso.
                  </h2>
                  <div className="mt-10 space-y-4">
                    {goodFor.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl p-5 leading-[1.8]"
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
                  <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(0,0,0,0.55)" }}>Para quién no es</div>
                  <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                    Este trabajo no encaja en todos los casos.
                  </h2>
                  <div className="mt-10 space-y-4">
                    {notFor.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl p-5 leading-[1.8]"
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
                Este trabajo es especialmente útil para personas cuyo cuerpo no solo vive, sino que sostiene presión, decisiones, impacto o presencia constante.
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
                <p>A los 17 años, una lesión de taekwondo me dejó sin poder funcionar durante siete años. No podía levantar una garrafa de agua. El dolor era constante. Probé de todo. Nada funcionó.</p>
                <p>Una sola sesión de osteopatía me mostró que había otro camino.</p>
                <p>Dejé mi trabajo en una multinacional y empecé a formarme. Durante más de veinte años he aprendido con algunos de los mejores en Rolfing, osteopatía visceral, acupuntura japonesa, medicina ayurvédica, trabajo energético y movimiento. En Alemania, Japón, México, Malasia, Estados Unidos y Tailandia.</p>
                <p>No buscaba técnicas. Buscaba entender el sistema.</p>
                <p>Sé lo que es eso desde dentro. Siete años atrapado con un cuerpo que no respondía. Una sesión de quince minutos me enseñó que había otro camino. Y me dejó una pregunta que todavía me mueve: ¿cómo podía existir una solución y haber estado atrapado tanto tiempo?</p>
                <p className="font-medium">Hoy trabajo con personas que han probado muchas cosas y siguen en el mismo punto.</p>
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
                Este trabajo no es para todo el mundo.
              </p>
              <p className="mt-4 text-base leading-[1.8]" style={{ opacity: 0.75 }}>
                Si el patrón sigue ahí, hablemos.
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
                Primera sesión — 360€ + IVA<br />Punto de entrada al proceso.
              </p>
            </div>
          </section>

          {/* BLOG */}
          <section style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Blog</div>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                Lo que observo, lo que aprendo, lo que funciona.
              </h2>
              <div className="mt-14 grid gap-8 lg:grid-cols-3">
                {[
                  { slug: "el-cuerpo-no-esta-roto-esta-compensando", title: "El cuerpo no está roto. Está compensando", tag: "Fundamentos" },
                  { slug: "el-problema-no-es-el-estres", title: "El problema no es el estrés. Es no salir de él", tag: "Sistema nervioso" },
                  { slug: "do-no-harm", title: "Primero, no dañar", tag: "Fundamentos" },
                ].map((a) => (
                  <Link key={a.slug} href={`/blog/${a.slug}`} className="group rounded-2xl p-6" style={{ border: "1px solid rgba(249, 115, 22, 0.18)", background: "#FEE4B5" }}>
                    <span className="text-[10px] uppercase tracking-[0.15em] block mb-3" style={{ color: "var(--text-secondary)" }}>{a.tag}</span>
                    <span className="text-lg font-semibold tracking-tight group-hover:opacity-70 transition">{a.title}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href="/blog"
                  className="inline-flex rounded-full px-7 py-3.5 text-sm font-medium transition hover:opacity-60"
                  style={{ border: "1px solid var(--border-subtle)", color: "var(--text-main)" }}
                >
                  Ver todos los artículos
                </Link>
              </div>
            </div>
          </section>

          {/* PROCESO */}
          <section style={{ borderTop: "1px solid var(--border-subtle)", background: "#F97316", color: "#fff" }}>
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.8)" }}>Proceso</div>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                No es una sesión.<br />Es una reorganización completa del sistema.
              </h2>
              <p className="mt-6 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                El trabajo se desarrolla en ciclos de 6 meses.<br />
                En el tercer mes evaluamos si continuar o cerrar el proceso.
              </p>

              <div className="mt-14 grid gap-8 lg:grid-cols-2">
                <div className="rounded-[2rem] p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)", color: "var(--text-main)" }}>
                  <div className="text-sm uppercase tracking-[0.2em]" style={{ color: "var(--text-secondary)" }}>Cómo funciona</div>
                  <ul className="mt-6 space-y-4">
                    {[
                      "Trabajo estructural + regulación + energía",
                      "Ajustado a tu ritmo real",
                      "Integrado en tu vida, no aislado de ella",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 leading-[1.8]">
                        <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: "var(--text-main)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[2rem] p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)", color: "var(--text-main)" }}>
                  <div className="text-sm uppercase tracking-[0.2em]" style={{ color: "var(--text-secondary)" }}>Inversión</div>
                  <div className="mt-6 space-y-6">

                    <div>
                      <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Sesión individual</div>
                      <div className="mt-1 text-2xl font-semibold">desde 180€ / hora + IVA</div>
                      <div className="mt-1 text-sm leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
                        Para quien ya conoce el trabajo o necesita una intervención puntual. No es punto de entrada habitual.
                      </div>
                    </div>

                    <div className="pt-6" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                      <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Primera sesión de entrada al proceso</div>
                      <div className="mt-1 text-2xl font-semibold">360€ + IVA</div>
                      <div className="mt-1 text-sm leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
                        Lectura completa del sistema. Define si tiene sentido continuar y cómo.
                      </div>
                    </div>

                    <div className="pt-6" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                      <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Procesos mensuales</div>
                      <div className="mt-1 text-2xl font-semibold">360€ — 600€ / mes + IVA</div>
                      <div className="mt-1 text-sm leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
                        Proceso de 6 meses. El rango depende de la frecuencia y profundidad que tu caso requiera.
                      </div>
                    </div>

                    <div className="pt-6" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                      <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Intervenciones específicas de alta responsabilidad</div>
                      <div className="mt-1 text-2xl font-semibold">Presupuesto personalizado</div>
                      <div className="mt-1 text-sm leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
                        Casos donde el cuerpo sostiene una decisión, una responsabilidad o un rendimiento crítico. Se diseña a medida. También + IVA.
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACTO */}
          <section id="contact" style={{ borderTop: "1px solid var(--border-subtle)", background: "#f5e033", color: "var(--text-main)" }}>
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(0,0,0,0.55)" }}>Primera conversación</div>
                  <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl leading-[1.2]">
                    Si has llegado hasta aquí, ya sabes suficiente.<br />Hablemos.
                  </h2>
                  <p className="mt-5 text-base leading-[1.7]" style={{ color: "rgba(0,0,0,0.7)" }}>
                    Presencial en Lluçà (Barcelona) o online en cualquier parte del mundo.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4 lg:min-w-[260px]">
                  <a
                    href={reserveHref}
                    className="rounded-full px-7 py-3 text-center text-sm font-medium text-white transition hover:opacity-85"
                    style={{ background: "var(--text-main)" }}
                  >
                    Escríbeme
                  </a>
                  <a
                    href="https://wa.me/34679229744?text=Hola%20Ferran%2C"
                    className="text-sm opacity-50 transition hover:opacity-100"
                  >
                    ¿Prefieres hablar antes? Reserva una conversación breve de 15 min.
                  </a>
                </div>
              </div>
            </div>
          </section>

        </main>

        <FAQ lang="es" />

        <Newsletter variant="footer" lang="es" source="home-es" />

        <footer style={{ borderTop: "1px solid #A67432", background: "#C08A3E" }}>
          <div
            className="mx-auto flex max-w-[900px] flex-col gap-3 px-6 py-8 text-sm lg:flex-row lg:items-center lg:justify-between"
            style={{ color: "#FBF6EC" }}
          >
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>Reorganización estructural ·</span>
              <a
                href="https://maps.app.goo.gl/8Hd8KbJKawB7BjWZ6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:opacity-60"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Lluçà (Barcelona)
              </a>
              <span>· Online</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">{contactWhatsAppDisplay}</a>
              <span>·</span>
              <a
                href="https://www.instagram.com/ferran__moreno_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:opacity-60"
                aria-label="Instagram @ferran__moreno_"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
                </svg>
                @ferran__moreno_
              </a>
            </div>
            <div>© 2026 Ferran Moreno</div>
          </div>
        </footer>

      </div>
    </>
  );
}
