import Link from "next/link";
import {
  cases, contactWhatsApp, contactWhatsAppDisplay, featuredTestimonials, goodFor,
  monicaCentral, notFor, pillars, steps,
} from "@/lib/content";
import { PersonStructuredData } from "@/components/structured-data";

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
              <a href="#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Casos</a>
              <a href="#para-quien" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Para quién</a>
              <Link href="/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Wall of trust</Link>
              <Link href="/historia" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Mi historia</Link>
              <Link href="/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link>
              <a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contacto</a>
              <span style={{ color: "var(--border-subtle)" }}>|</span>
              <Link href="/en" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">EN</Link>
            </nav>
          </div>
        </header>

        <main>

          {/* HERO */}
          <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
            <div className="mx-auto grid max-w-[900px] gap-12 px-6 py-[140px] lg:grid-cols-2 lg:items-center">
              <div className="flex flex-col justify-center">
                <p className="mb-6 text-xs uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
                  Reorganización estructural · Trabajo corporal · Regulación del sistema nervioso
                </p>

                <h1 className="text-5xl font-semibold leading-[1.15] tracking-tight lg:text-6xl">
                  CUANDO EL CUERPO PIERDE EJE,
                  <span className="block">NO NECESITA MÁS FUERZA.</span>
                  <span className="block" style={{ color: "var(--text-secondary)" }}>NECESITA PRECISIÓN.</span>
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
                    className="rounded-full px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-85"
                    style={{ background: "var(--text-main)" }}
                  >
                    Escríbeme
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="relative w-full space-y-5 rounded-[2.5rem] p-8 lg:p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
                  <div className="rounded-2xl p-6" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                    <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Lo que suele pasar</div>
                    <div className="mt-2 text-base leading-[1.8]">
                      Dolor que vuelve. Tensión constante. Fatiga. Sensación de no terminar de volver a ti. Has probado cosas. Funciona un tiempo. Vuelve.
                    </div>
                  </div>

                  <div className="rounded-2xl p-6 text-white" style={{ background: "var(--text-main)" }}>
                    <div className="text-sm opacity-50">Lo que hacemos</div>
                    <div className="mt-2 text-base leading-[1.8]">
                      No trabajamos el síntoma. Trabajamos el sistema. Leemos cómo se organiza tu cuerpo. Devolvemos margen al sistema nervioso. Quitamos interferencias.
                    </div>
                  </div>

                  <div className="rounded-2xl p-6" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                    <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Cómo se siente</div>
                    <div className="mt-2 text-base leading-[1.8]">
                      Menos compensación. Más estabilidad. Más eje. El cuerpo deja de luchar. Y empieza a sostener.
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

              <div className="mt-10 rounded-[2rem] p-8 lg:p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
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
          <section id="cases" style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
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
                    style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}
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
                    Una lectura precisa del sistema completo
                  </h2>
                  <p className="mt-6 text-lg leading-[1.8]">
                    No aplico técnicas como fin. La técnica es una herramienta dentro de una lectura global.
                    <br /><br />
                    Cada sesión empieza leyendo cómo se organiza el cuerpo. La intervención surge de esa lectura, no de un protocolo estándar.
                  </p>
                  <div className="mt-10 space-y-4">
                    {pillars.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl p-5 leading-[1.8]"
                        style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}
                      >
                        <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: "var(--text-main)" }} />
                        <div>{item}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6 content-start">
                  {steps.map((step) => (
                    <div
                      key={step.n}
                      className="rounded-[2rem] p-8"
                      style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}
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
          <section id="para-quien" style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <div className="grid gap-16 lg:grid-cols-2">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Para quién es</div>
                  <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                    No trabajamos por sesiones sueltas.<br />Trabajamos por proceso.
                  </h2>
                  <div className="mt-10 flex flex-col gap-4">
                    {goodFor.map((item) => (
                      <div
                        key={item}
                        className="flex flex-1 items-start gap-3 rounded-2xl p-5 leading-[1.8]"
                        style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}
                      >
                        <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: "var(--text-main)" }} />
                        <div>{item}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Para quién no es</div>
                  <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                    Casos donde este trabajo no es lo que buscas
                  </h2>
                  <div className="mt-10 flex flex-col gap-4">
                    {notFor.map((item) => (
                      <div
                        key={item}
                        className="flex flex-1 items-start gap-3 rounded-2xl p-5 leading-[1.8]"
                        style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}
                      >
                        <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: "var(--text-secondary)" }} />
                        <div>{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MI HISTORIA */}
          <section id="historia" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Mi historia</div>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">Ferran Moreno</h2>

              <div className="mt-10 space-y-6 text-lg leading-[1.8]">
                <p>A los 17 años, una lesión de taekwondo me dejó sin poder funcionar durante siete años. No podía levantar una garrafa de agua. El dolor era constante. Probé de todo. Nada funcionó.</p>
                <p>Una sola sesión de osteopatía me mostró que había otro camino.</p>
                <p>Dejé mi trabajo en una multinacional y empecé a formarme. Durante más de veinte años he aprendido con algunos de los mejores en Rolfing, osteopatía visceral, acupuntura japonesa, medicina ayurvédica, trabajo energético y movimiento. En Alemania, Japón, México, Malasia, Estados Unidos y Tailandia.</p>
                <p>No buscaba técnicas. Buscaba entender el sistema.</p>
                <p className="font-medium">Hoy trabajo con personas que han probado muchas cosas y siguen en el mismo punto.</p>
              </div>

              <div className="mt-10">
                <Link
                  href="/historia"
                  className="inline-flex rounded-full px-7 py-3.5 text-sm font-medium transition hover:opacity-60"
                  style={{ border: "1px solid var(--border-subtle)", color: "var(--text-main)" }}
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
                  Ver Wall of trust completo
                </Link>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <div className="mx-auto max-w-[900px] px-6 py-[120px] text-center">
              <p className="text-3xl font-medium tracking-tight sm:text-4xl">
                Este trabajo no es para todo el mundo.
              </p>
              <p className="mt-4 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                Si esto te resuena, ya sabes por qué estás aquí.
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
              <p className="mt-5 text-sm" style={{ color: "var(--text-secondary)" }}>
                Primera sesión — 360€<br />Punto de entrada al proceso.
              </p>
            </div>
          </section>

          {/* PROCESO */}
          <section style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Proceso</div>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                No es una sesión.<br />Es una reorganización completa del sistema.
              </h2>
              <p className="mt-6 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                El trabajo se desarrolla en ciclos de 6 meses.<br />
                En el tercer mes evaluamos si continuar o cerrar el proceso.
              </p>

              <div className="mt-14 grid gap-8 lg:grid-cols-2">
                <div className="rounded-[2rem] p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
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

                <div className="rounded-[2rem] p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
                  <div className="text-sm uppercase tracking-[0.2em]" style={{ color: "var(--text-secondary)" }}>Inversión</div>
                  <div className="mt-6 space-y-6">
                    <div>
                      <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Primera sesión</div>
                      <div className="mt-1 text-2xl font-semibold">360€</div>
                      <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Punto de entrada al proceso.</div>
                    </div>
                    <div className="pt-6" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                      <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Programa mensual</div>
                      <div className="mt-1 text-2xl font-semibold">360€ — 600€</div>
                      <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Se define tras la primera sesión.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACTO */}
          <section id="contact" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <div className="mx-auto max-w-[900px] px-6 py-[120px]">
              <div
                className="grid gap-10 rounded-[2.5rem] p-10 text-white lg:grid-cols-[1fr_auto] lg:items-end lg:p-14"
                style={{ background: "var(--text-main)" }}
              >
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] opacity-50">Primera conversación</div>
                  <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                    Si el patrón sigue ahí, hablemos.
                  </h2>
                </div>

                <div className="flex flex-col items-start gap-4 lg:min-w-[260px]">
                  <a
                    href={reserveHref}
                    className="rounded-full bg-white px-7 py-3 text-center text-sm font-medium transition hover:opacity-90"
                    style={{ color: "var(--text-main)" }}
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
    </>
  );
}
