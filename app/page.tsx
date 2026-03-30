"use client";

import { useState } from "react";
import Link from "next/link";
import {
  cases,
  contactEmail,
  featuredTestimonials,
  goodFor,
  monicaCentral,
  notFor,
  pillars,
  steps,
} from "@/lib/content";
import { PersonStructuredData } from "@/components/structured-data";

export default function HomePage() {
  const [showMonicaFull, setShowMonicaFull] = useState(false);

  return (
    <>
      <PersonStructuredData />
      <div className="min-h-screen bg-white text-neutral-900">
        <header className="sticky top-0 z-30 border-b border-neutral-200 bg-[#fafafa]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
            <div className="leading-none">
              <div className="text-xl font-semibold tracking-tight text-neutral-900">
                Ferran Moreno
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                TRABAJO CORPORAL · REGULACIÓN · ENERGÍA
              </div>
              <div className="mt-1 text-[11px] tracking-[0.18em] text-neutral-500">
                Lluçà · Barcelona · Online
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.18em] text-neutral-600 md:flex">
              <a href="#como-trabajo" className="transition hover:text-neutral-900">
                Método
              </a>
              <a href="#cases" className="transition hover:text-neutral-900">
                Casos
              </a>
              <a href="#para-quien" className="transition hover:text-neutral-900">
                Para quién
              </a>
              <Link href="/wall-of-trust" className="transition hover:text-neutral-900">
                Wall of trust
              </Link>
              <a href="#contact" className="transition hover:text-neutral-900">
                Contacto
              </a>
            </nav>

            <a
              href={`mailto:${contactEmail}?subject=Reserva%20de%20sesión%20con%20Ferran%20Moreno&body=Hola%20Ferran,%0A%0AMe%20gustaría%20solicitar%20una%20primera%20conversación.%0A%0ANombre:%0AEdad:%0ACiudad:%0AQué%20te%20gustaría%20mejorar%20o%20resolver:%0A%0ADisponibilidad%20aproximada%20para%20hablar:`}
              className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              Reservar
            </a>
          </div>
        </header>

        <main>
          <section className="mx-auto grid max-w-7xl gap-20 px-6 py-28 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-36">
            <div className="flex flex-col justify-center">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-neutral-500">
                Reorganización estructural · Trabajo corporal · Regulación del sistema nervioso
              </p>

              <h1 className="font-serif text-5xl font-semibold leading-tight tracking-tight lg:text-7xl">
                El cuerpo no falla.
                <span className="block text-neutral-500">Se desorganiza.</span>
              </h1>

              <p className="mt-4 text-base text-neutral-700">
                Trabajo sobre el sistema. No sobre el síntoma.
              </p>

              <p className="mt-6 max-w-xl whitespace-pre-line text-base font-normal leading-7 text-neutral-700">
                {`La mayoría de personas que llegan aquí ya han probado de todo.
El patrón sigue ahí.
Ese es el punto de partida.`}
              </p>

              <div className="mt-10">
                <a
                  href="#contact"
                  className="rounded-2xl bg-neutral-900 px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Solicitar primera conversación
                </a>
              </div>

            </div>

            <div className="flex items-center">
              <div className="relative w-full space-y-6 overflow-hidden rounded-[2.5rem] border border-neutral-200 bg-[#fafafa] p-8 shadow-[0_1px_0_rgba(0,0,0,0.04)] lg:p-10">
                <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                  <div className="text-sm text-neutral-500">Lo que suele pasar</div>
                  <div className="mt-2 text-lg font-semibold text-neutral-900">
                    Dolor, agotamiento, bloqueo, tensión interna, sensación de no volver del todo a ti.
                  </div>
                </div>

                <div className="rounded-2xl bg-neutral-900 p-6 text-white">
                  <div className="text-sm text-neutral-400">Lo que buscamos</div>
                  <div className="mt-2 text-lg font-semibold">
                    Más capacidad, más estabilidad y un sistema que vuelve a organizarse.
                  </div>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                  <div className="text-sm text-neutral-500">Cómo se siente</div>
                  <div className="mt-2 text-lg font-semibold text-neutral-900">
                    Menos compensación. Más eje. Más vida disponible.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-y border-neutral-200 bg-[#fafafa]">
            <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
              <div className="max-w-3xl">
                <div className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                  Testimonio destacado
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Un cuerpo que recuerda su orden
                </h2>
              </div>

              <div className="mt-10 rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_1px_0_rgba(0,0,0,0.04)] lg:p-10">
                <p className="whitespace-pre-line text-lg leading-8 text-neutral-800">
                  {`${monicaCentral.text.slice(0, 1050)}...`}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setShowMonicaFull(true)}
                    className="rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    Leer testimonio completo
                  </button>
                  <div className="text-sm font-medium text-neutral-500">— {monicaCentral.name}</div>
                </div>
              </div>
            </div>
          </section>

          {showMonicaFull && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 p-6">
              <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 shadow-2xl lg:p-10">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="text-xl font-semibold text-neutral-900">{monicaCentral.name}</div>
                  <button
                    onClick={() => setShowMonicaFull(false)}
                    className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
                  >
                    Cerrar
                  </button>
                </div>

                <p className="whitespace-pre-line leading-8 text-neutral-800">{monicaCentral.text}</p>
              </div>
            </div>
          )}

          <section className="border-t border-neutral-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
              <div className="max-w-3xl">
                <div className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                  Clientes internacionales
                </div>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Lluçà (Barcelona) · Trabajo con clientes de distintos países
                </h2>

                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  A lo largo de los años he trabajado con clientes y profesionales de distintos lugares del mundo. Muchas sesiones hoy se realizan también online.
                </p>

                <p className="mt-4 text-lg leading-8 text-neutral-600">
                  El objetivo es siempre el mismo: reorganizar el sistema para que el cuerpo recupere margen, claridad y capacidad.
                </p>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-neutral-600">
                  {["Lluçà", "España", "Europa", "Online Worldwide"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="cases" className="border-t border-neutral-200 bg-neutral-50">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
              <div className="max-w-2xl">
                <div className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                  Casos habituales
                </div>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Situaciones donde este trabajo suele marcar la diferencia
                </h2>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {cases.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.75rem] border border-neutral-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition hover:border-neutral-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="como-trabajo" className="mx-auto max-w-7xl bg-white px-6 py-24 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                  MÉTODO
                </div>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Una lectura precisa del sistema completo
                </h2>

                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  No aplico técnicas como fin. La técnica es una herramienta dentro de una lectura global.
                  <br />
                  <br />
                  Cada sesión empieza leyendo cómo se organiza el cuerpo. La intervención surge de esa lectura, no de un protocolo estándar.
                </p>

                <div className="mt-10 space-y-4">
                  {pillars.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:bg-neutral-50"
                    >
                      <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-neutral-900" />
                      <div className="text-neutral-700">{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6">
                {steps.map((step) => (
                  <div
                    key={step.n}
                    className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition hover:border-neutral-300"
                  >
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                    <p className="mt-3 text-neutral-600">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="para-quien" className="border-t border-neutral-200 bg-neutral-50">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
              <div className="grid gap-16 lg:grid-cols-2">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                    Para quién es
                  </div>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    No trabajamos por sesiones sueltas.<br />Trabajamos por proceso.
                  </h2>

                  <div className="mt-10 space-y-4">
                    {goodFor.map((item) => (
                      <div
                        key={item}
                        style={{ minHeight: '80px' }}
                        className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:bg-neutral-50"
                      >
                        <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-neutral-900" />
                        <div className="text-neutral-700">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                    Para quién no es
                  </div>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Casos donde este trabajo no es lo que buscas
                  </h2>

                  <div className="mt-10 space-y-4">
                    {notFor.map((item) => (
                      <div
                        key={item}
                        style={{ minHeight: '80px' }}
                        className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:bg-neutral-50"
                      >
                        <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-neutral-400" />
                        <div className="text-neutral-700">{item}</div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-sm text-neutral-500 italic">
                    Si esto te resuena, ya es suficiente para hablar.
                  </p>
                </div>
              </div>
              <p className="mt-12 border-t border-neutral-200 pt-8 text-sm text-neutral-500">
                Este filtro protege el proceso. El trabajo requiere implicación real.
              </p>
            </div>
          </section>

          <section className="border-t border-neutral-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
              <div className="max-w-2xl">
                <div className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                  Proceso de trabajo
                </div>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  No es una intervención puntual.
                  <br />
                  Es un proceso
                </h2>

                <p className="mt-6 whitespace-pre-line text-lg text-neutral-600">
                  {`El cambio real no ocurre en una sesión.
Se construye en el tiempo.`}
                </p>
              </div>

              <div className="mt-14 rounded-[2rem] border border-neutral-200 bg-[#fafafa] p-10 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                <div className="max-w-2xl">
                  <div className="text-sm text-neutral-500">Entrada al proceso</div>
                  <div className="mt-2 text-xl font-semibold text-neutral-900">
                    Empezamos con una sesión inicial para leer el sistema completo
                  </div>
                  <p className="mt-4 text-neutral-600">
                    A partir de ahí, definimos si tiene sentido continuar y en qué formato.
                  </p>
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                  <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                    <div className="text-sm text-neutral-500">Inicio</div>
                    <div className="mt-1 text-lg font-semibold">Sesión inicial</div>
                    <div className="mt-2 text-neutral-700">Lectura completa del sistema · duración variable</div>
                    <div className="mt-2 font-medium text-neutral-900">Inicio del proceso: 360€</div>
                  </div>

                  <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                    <div className="text-sm text-neutral-500">Continuidad</div>
                    <div className="mt-1 text-lg font-semibold">Seguimiento</div>
                    <div className="mt-2 text-neutral-700">Se define en cada caso</div>
                  </div>

                  <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                    <div className="text-sm text-neutral-500">Proceso completo</div>
                    <div className="mt-1 text-lg font-semibold">Programa</div>
                    <div className="mt-2 text-neutral-700">
                      Se define tras la primera sesión.
                      <br />
                      El trabajo no es puntual. Se desarrolla en el tiempo.
                      <br />
                      En el tercer mes evaluamos el proceso y decidimos cómo continuar.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-14 rounded-2xl border border-neutral-200 bg-white p-8 shadow-[0_1px_0_rgba(0,0,0,0.04)] lg:flex lg:items-center lg:justify-between">
                <div>
                  <div className="text-sm text-neutral-500">Primera conversación</div>
                  <div className="mt-2 text-lg font-semibold text-neutral-900">
                    Un primer contacto para ver si este trabajo tiene sentido para ti
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 lg:mt-0"
                >
                  Solicitar conversación
                </a>
              </div>
            </div>
          </section>

          <section id="testimonios" className="border-t border-neutral-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
              <div className="max-w-2xl">
                <div className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                  Testimonios
                </div>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Seis voces para entender el tipo de cambio que ocurre aquí
                </h2>

                <p className="mt-6 text-lg text-neutral-600">
                  Una selección breve. El resto está en el wall of trust completo.
                </p>
              </div>

              <div className="mt-14 grid gap-10 lg:grid-cols-3">
                {featuredTestimonials.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-[2.5rem] border border-neutral-300 bg-[#fafafa] p-10"
                  >
                    <p className="text-lg text-neutral-800">“{item.text}”</p>
                    <div className="mt-6 text-sm font-semibold text-neutral-500">
                      — {item.name}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/wall-of-trust"
                  className="inline-flex rounded-2xl border border-neutral-300 px-7 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-900"
                >
                  Ver Wall of trust completo
                </Link>
              </div>
            </div>
          </section>

          <section id="contact" className="border-t border-neutral-200">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
              <div className="grid gap-10 rounded-[2.5rem] bg-neutral-900 p-10 text-white lg:grid-cols-[1fr_auto] lg:items-end lg:p-14">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-neutral-400">
                    Primera conversación
                  </div>

                  <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Si el patrón sigue ahí, hablemos.
                  </h2>

                  <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
                    Presencial en Lluçà (Barcelona) o online en cualquier parte del mundo.
                    <br />
                    <br />
                    Primera conversación de 15 minutos.
                    <br />
                    <br />
                    Un primer contacto para entender qué está pasando y ver si este trabajo tiene sentido para ti.
                  </p>
                </div>

                <div className="flex flex-col gap-4 lg:min-w-[280px]">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="rounded-2xl bg-white px-7 py-3 text-center text-sm font-medium text-neutral-900 transition hover:opacity-90"
                  >
                    Iniciar conversación
                  </a>

                  <a
                    href={`mailto:${contactEmail}?subject=Primera%20conversación%20con%20Ferran%20Moreno&body=Hola%20Ferran,%0A%0AMe%20gustaría%20solicitar%20una%20primera%20conversación.%0A%0ANombre:%0AEdad:%0ACiudad:%0AQué%20te%20gustaría%20mejorar%20o%20resolver:%0A%0ADisponibilidad%20aproximada%20para%20hablar:`}
                    className="rounded-2xl border border-white/20 px-7 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    Enviar mensaje
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-neutral-200 bg-[#fafafa]">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-neutral-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>Reorganización estructural · Lluçà (Barcelona) · Online</div>
            <div>{contactEmail} · @ferran__moreno_</div>
            <div>© 2026 Ferran Moreno</div>
          </div>
        </footer>
      </div>
    </>
  );
}
