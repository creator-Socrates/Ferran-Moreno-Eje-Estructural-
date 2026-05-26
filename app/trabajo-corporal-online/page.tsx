import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl, contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { ParadigmShift } from "@/components/paradigm-shift";

export const metadata: Metadata = {
  title: "Trabajo corporal online | Sesiones a distancia con Ferran Moreno",
  description:
    "Trabajo corporal, regulación del sistema nervioso y trabajo energético en sesiones online. Misma profundidad que en persona. Clientes en Argentina, Chile, México y otros países. Más de 20 años de experiencia. Más allá del Rolfing.",
  alternates: { canonical: "/trabajo-corporal-online" },
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
      "Sesiones online de trabajo corporal, regulación del sistema nervioso y trabajo energético. Clientes en Argentina, Chile, México y otros países.",
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
          <nav className="hidden items-center gap-8 md:flex" style={{ color: "var(--text-secondary)" }}>
            <Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Inicio</Link>
            <Link href="/historia" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Mi historia</Link>
            <Link href="/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Testimonios</Link>
            <Link href="/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link>
            <a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contacto</a>
          </nav>
        </div>
      </header>

      <main>

        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <p className="mb-6 text-xs uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
              Sesiones online · En todo el mundo
            </p>
            <h1 className="text-5xl font-semibold leading-[1.15] tracking-tight lg:text-6xl">
              TRABAJO CORPORAL
              <span className="block" style={{ color: "var(--text-secondary)" }}>A DISTANCIA</span>
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-[1.8]">
              El trabajo no requiere contacto físico para ser efectivo. Algunos de los cambios más significativos suceden a distancia — a través de la percepción, la guía, y la respuesta del propio cuerpo.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Las sesiones online incluyen lectura estructural, regulación del sistema nervioso, guía de movimiento y postura, trabajo energético y mental-emocional. Todo excepto el contacto manual directo.
            </p>
            <div className="mt-12">
              <a
                href={`${contactWhatsApp}?text=Hola%20Ferran%2C%20me%20interesan%20las%20sesiones%20online`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-85"
                style={{ background: "var(--text-main)" }}
              >
                Reservar una sesión online
              </a>
            </div>
          </div>
        </section>

        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Más allá del Rolfing</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">El cuerpo, el sistema nervioso, las emociones y el campo no se separan.</h2>
            <p className="mt-6 text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              El Rolfing fue la formación inicial. Después llegaron veinte años de estudio — osteopatía visceral, acupuntura japonesa, movimiento, trabajo energético, regulación del sistema nervioso, trabajo mental y emocional. Cada sesión es una lectura del sistema entero, no la aplicación de una técnica.
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

        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
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

        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Proceso</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">Online o presencial — la misma estructura de 6 meses.</h2>
            <p className="mt-6 text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              El trabajo se desarrolla en 6 meses. Dos sesiones por mes. Pagado por anticipado antes de la primera sesión — el mismo modelo que presencial. Al tercer mes evaluamos si continuar o cerrar.
            </p>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                <div className="text-sm uppercase tracking-[0.2em]" style={{ color: "var(--text-secondary)" }}>Formato online</div>
                <ul className="mt-6 space-y-4">
                  {[
                    "Videollamada (60–90 min por sesión)",
                    "Lectura estructural + trabajo de sistema nervioso",
                    "Entre sesiones: guía específica",
                    "Proceso completo de 6 meses o sesiones sueltas",
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
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Sesión suelta</div>
                    <div className="mt-1 text-2xl font-semibold">180€ + IVA</div>
                  </div>
                  <div className="pt-6" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Proceso de 6 meses</div>
                    <div className="mt-1 text-2xl font-semibold">360€ — 600€ / mes + IVA</div>
                    <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Definido tras la primera sesión.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ParadigmShift lang="es" />

        <section>
          <div className="mx-auto max-w-[900px] px-6 py-[120px] text-center">
            <p className="text-3xl font-medium tracking-tight">Si el patrón sigue ahí, hablemos.</p>
            <p className="mt-4 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Primeros 15 minutos sin coste. Evaluamos si este trabajo tiene sentido para tu caso.
            </p>
            <div className="mt-10">
              <a
                href={`${contactWhatsApp}?text=Hola%20Ferran%2C%20me%20gustaría%20explorar%20sesiones%20online`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-10 py-4 text-base font-medium text-white transition hover:opacity-85"
                style={{ background: "var(--text-main)" }}
              >
                Empezar por aquí
              </a>
            </div>
            <p className="mt-5 text-sm" style={{ color: "var(--text-secondary)" }}>
              {contactWhatsAppDisplay} · Online en todo el mundo
            </p>
          </div>
        </section>

      </main>

      <footer style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
        <div className="mx-auto flex max-w-[900px] flex-col gap-3 px-6 py-8 text-sm lg:flex-row lg:items-center lg:justify-between" style={{ color: "var(--text-secondary)" }}>
          <div>Lluçà (Barcelona) · Online en todo el mundo</div>
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
