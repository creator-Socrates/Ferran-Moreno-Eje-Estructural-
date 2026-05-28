import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl, contactWhatsApp } from "@/lib/content";
import { ParadigmShift } from "@/components/paradigm-shift";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Trabajo corporal online | Sesiones a distancia con Ferran Moreno",
  description:
    "Trabajo corporal online para leer el sistema, regular el sistema nervioso y trabajar el patrón a distancia. Primera conversación para ver si tu caso encaja.",
  alternates: {
    canonical: "/trabajo-corporal-online",
    languages: { es: "/trabajo-corporal-online", en: "/en/online-bodywork" },
  },
  keywords: [
    "trabajo corporal online",
    "rolfing online",
    "trabajo corporal a distancia",
    "regulación sistema nervioso online",
    "trabajo energético online",
    "trabajo somático online",
    "sesiones online trabajo corporal",
    "integración estructural online",
    "trabajo corporal Chile",
    "trabajo corporal Argentina",
    "trabajo corporal México",
    "trabajo corporal Latinoamérica",
    "Ferran Moreno online",
  ],
  openGraph: {
    title: "Trabajo corporal online | Ferran Moreno",
    description:
      "Trabajo corporal online para leer el sistema, regular el sistema nervioso y trabajar el patrón a distancia.",
    url: `${siteUrl}/trabajo-corporal-online`,
    siteName: "Ferran Moreno",
    locale: "es_ES",
    type: "website",
  },
};

export default function TrabajoCorporalOnline() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>

      <header className="sticky top-0 z-30" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-5">
          <Link href="/" className="leading-none">
            <div className="text-[17px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-main)" }}>Ferran Moreno</div>
            <div className="mt-[5px] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              TRABAJO CORPORAL · REGULACIÓN · ENERGÍA
            </div>
          </Link>
          <nav
            className="hidden md:block"
            aria-label="Navegación de Trabajo corporal online"
            style={{ color: "var(--text-secondary)" }}
          >
            <ul className="flex items-center gap-8">
              <li><Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Inicio</Link></li>
              <li><Link href="/historia" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Mi historia</Link></li>
              <li><Link href="/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Testimonios</Link></li>
              <li><Link href="/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link></li>
              <li><a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>

        <section data-track-section="online_hero" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <p className="mb-6 text-xs uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
              Sesiones online · En todo el mundo
            </p>
            <h1 className="text-5xl font-semibold leading-[1.15] tracking-tight lg:text-6xl">
              TRABAJO CORPORAL
              <span className="block" style={{ color: "var(--text-secondary)" }}>A DISTANCIA</span>
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-[1.8]">
              El trabajo no depende del contacto físico para ser efectivo. Muchas veces el cambio empieza antes: en cómo el sistema responde cuando se le lee con precisión.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Las sesiones online incluyen lectura estructural, regulación del sistema nervioso, guía de movimiento y postura, trabajo energético y lectura mental-emocional. Todo excepto el contacto manual directo.
            </p>
            <div className="mt-12">
              <a
                href={`${contactWhatsApp}?text=Hola%20Ferran%2C%20me%20gustaría%20tener%20una%20primera%20conversación%20sobre%20las%20sesiones%20online`}
                target="_blank"
                rel="noopener noreferrer"
                data-track-location="online_hero"
                className="rounded-full px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-85"
                style={{ background: "var(--text-main)" }}
              >
                Reservar primera conversación
              </a>
              <p className="mt-4 text-sm leading-[1.6]" style={{ color: "var(--text-secondary)" }}>
                Qué está pasando, desde cuándo y qué has probado.
              </p>
            </div>
          </div>
        </section>

        <section data-track-section="online_scope" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Más allá del Rolfing</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">El cuerpo, el sistema nervioso, las emociones y el campo no se separan.</h2>
            <p className="mt-6 text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              No es una técnica adaptada a Zoom. Es la misma lectura del sistema en otro formato. El Rolfing fue la formación inicial. Después llegaron más de veinte años de estudio. Cada sesión sigue siendo una lectura del sistema entero, no la aplicación de una técnica.
            </p>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div className="rounded-[1.75rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                <h3 className="text-lg font-medium">Estructura</h3>
                <p className="mt-3 leading-[1.8]" style={{ color: "var(--text-secondary)" }}>Lectura de cómo el cuerpo está organizado a través del movimiento, la postura y las señales visuales. El mismo proceso diagnóstico que en persona.</p>
              </div>
              <div className="rounded-[1.75rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                <h3 className="text-lg font-medium">Regulación</h3>
                <p className="mt-3 leading-[1.8]" style={{ color: "var(--text-secondary)" }}>Trabajo directo sobre el sistema nervioso autónomo. La regulación no requiere manos — requiere precisión y las condiciones adecuadas.</p>
              </div>
              <div className="rounded-[1.75rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                <h3 className="text-lg font-medium">Energía</h3>
                <p className="mt-3 leading-[1.8]" style={{ color: "var(--text-secondary)" }}>Esta modalidad funciona independientemente de la distancia física. Los clientes reportan consistentemente la misma profundidad que en sesiones presenciales.</p>
              </div>
              <div className="rounded-[1.75rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                <h3 className="text-lg font-medium">Mental y emocional</h3>
                <p className="mt-3 leading-[1.8]" style={{ color: "var(--text-secondary)" }}>Las emociones y patrones mentales son parte del sistema. Cuando el sistema nervioso cambia, el patrón cognitivo cambia.</p>
              </div>
            </div>
          </div>
        </section>

        <section data-track-section="online_audience" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Quién trabaja con Ferran online</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">Clientes en Argentina, Chile, México, Berlín y más.</h2>
            <p className="mt-6 text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              La mayoría de los clientes que trabajan a distancia tienen patrones crónicos — dolor que vuelve, tensión persistente, fatiga, bloqueos de rendimiento — que no han respondido al tratamiento local. No buscan comodidad. Buscan algo que realmente funcione.
            </p>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                "Dolor crónico que vuelve a pesar del tratamiento",
                "Tensión o fatiga persistente sin causa clara",
                "Desregulación del sistema nervioso — ansiedad, reactividad, hipervigilancia",
                "Patrones postraumáticos sin resolver",
                "Bloqueos de rendimiento en ejecutivos y profesionales de alta exigencia",
                "Personas que han probado muchas cosas y siguen en el mismo lugar",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] p-6 leading-[1.8] text-sm"
                  style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section data-track-section="online_process" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Proceso</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">No es una sesión suelta online. Es un proceso definido sobre el caso.</h2>
            <p className="mt-6 text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              La primera sesión ordena el mapa. A partir de ahí definimos si tiene sentido trabajar online, con qué frecuencia y durante cuánto tiempo. En la mayoría de casos, dentro de un marco aproximado de 6 meses.
            </p>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                <div className="text-sm uppercase tracking-[0.2em]" style={{ color: "var(--text-secondary)" }}>Formato online</div>
                <ul className="mt-6 space-y-4">
                  {[
                    "Primera sesión como punto de entrada",
                    "Frecuencia semanal o quincenal según el caso",
                    "Trabajo estructural + regulación + energía",
                    "Entre sesiones: guía específica cuando hace falta",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 leading-[1.8]">
                      <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: "var(--text-main)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[2rem] p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                <div className="text-sm uppercase tracking-[0.2em]" style={{ color: "var(--text-secondary)" }}>Inversión</div>
                <div className="mt-6 space-y-6">
                  <div>
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Primera sesión</div>
                    <div className="mt-1 text-2xl font-semibold">360€ + IVA</div>
                    <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Punto de entrada al proceso y lectura completa del sistema.</div>
                  </div>
                  <div className="pt-6" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Sesión individual</div>
                    <div className="mt-1 text-2xl font-semibold">180€ / hora + IVA</div>
                    <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Para un caso puntual o para quien ya conoce el trabajo.</div>
                  </div>
                  <div className="pt-6" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Proceso</div>
                    <div className="mt-1 text-2xl font-semibold">Compromiso inicial de 6 meses</div>
                    <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>La inversión se define tras la primera sesión según frecuencia, profundidad y nivel de acompañamiento.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ParadigmShift lang="es" />

        <section data-track-section="online_final_cta">
          <div className="mx-auto max-w-[900px] px-6 py-[120px] text-center">
            <p className="text-3xl font-medium tracking-tight">Si el patrón sigue ahí, hablemos.</p>
            <p className="mt-4 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Primera conversación breve para ver si tu caso encaja.
            </p>
            <div className="mt-10">
              <a
                href={`${contactWhatsApp}?text=Hola%20Ferran%2C%20me%20gustaría%20tener%20una%20primera%20conversación%20sobre%20las%20sesiones%20online`}
                target="_blank"
                rel="noopener noreferrer"
                data-track-location="online_final_cta"
                className="rounded-full px-10 py-4 text-base font-medium text-white transition hover:opacity-85"
                style={{ background: "var(--text-main)" }}
              >
                Reservar primera conversación
              </a>
            </div>
            <p className="mt-5 text-sm" style={{ color: "var(--text-secondary)" }}>
              Qué está pasando, desde cuándo y qué has probado.
            </p>
          </div>
        </section>

      </main>

      <SiteFooter lang="es" />

    </div>
  );
}
