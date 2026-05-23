import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay, siteUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rolfing en Ciudad de México | Polanco · Sesiones online y presenciales",
  description:
    "Rolfing y trabajo corporal con Ferran Moreno para clientes en Ciudad de México. Sesiones online de profundidad real. Más de 20 años de experiencia. Integración estructural, regulación del sistema nervioso, trabajo energético.",
  alternates: { canonical: "/rolfing-ciudad-de-mexico" },
  keywords: [
    "rolfing Ciudad de México",
    "rolfing CDMX",
    "rolfing México DF",
    "rolfing Polanco",
    "integración estructural Ciudad de México",
    "trabajo corporal CDMX",
    "regulación sistema nervioso México",
    "rolfing online México",
    "trabajo somático Ciudad de México",
    "dolor crónico Ciudad de México",
    "trabajo corporal profundo México",
    "Ferran Moreno México",
  ],
  openGraph: {
    title: "Rolfing en Ciudad de México | Ferran Moreno",
    description:
      "Rolfing y trabajo corporal para clientes en Ciudad de México y Polanco. Sesiones online + intensivos presenciales.",
    url: `${siteUrl}/rolfing-ciudad-de-mexico`,
    siteName: "Ferran Moreno",
    locale: "es_MX",
    type: "website",
  },
};

export default function RolfingCiudadDeMexico() {
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
              Rolfing · Ciudad de México · Online y presencial
            </p>
            <h1 className="text-5xl font-semibold leading-[1.15] tracking-tight lg:text-6xl">
              ROLFING EN
              <span className="block" style={{ color: "var(--text-secondary)" }}>CIUDAD DE MÉXICO</span>
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-[1.8]">
              Trabajo con clientes en Ciudad de México mediante sesiones online — con la misma profundidad que en persona. He trabajado en México a lo largo de los años. Conozco el contexto. Para los casos que requieren trabajo manual directo: intensivos presenciales en Barcelona.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Ferran Moreno. Más de 20 años de experiencia. Rolfer certificado. Integración estructural, osteopatía visceral, acupuntura japonesa, trabajo energético. Formado en Alemania, Japón, México, Malasia, Tailandia y Estados Unidos.
            </p>
            <div className="mt-12">
              <a
                href={`${contactWhatsApp}?text=Hola%20Ferran%2C%20estoy%20en%20Ciudad%20de%20México%20y%20me%20interesa%20trabajar%20contigo`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-85"
                style={{ background: "var(--text-main)" }}
              >
                Contactar
              </a>
            </div>
          </div>
        </section>

        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Cómo funciona desde México</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">Dos formatos. El mismo trabajo.</h2>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                <div className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: "var(--text-secondary)" }}>Sesiones online</div>
                <p className="leading-[1.8]">Trabajo regular por videollamada. Lectura estructural, regulación del sistema nervioso, guía de movimiento, trabajo energético. La mayoría de mis clientes internacionales trabajan así de forma continuada. La distancia no reduce la profundidad del trabajo.</p>
                <div className="mt-6 text-sm" style={{ color: "var(--text-secondary)" }}>180€ / sesión</div>
              </div>
              <div className="rounded-[2rem] p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                <div className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: "var(--text-secondary)" }}>Intensivo en Barcelona</div>
                <p className="leading-[1.8]">2-3 días de trabajo manual estructural directo en la consulta de Lluçà (Barcelona). Para los casos donde el siguiente nivel requiere contacto directo: trabajo fascial, visceral, compresión estructural.</p>
                <div className="mt-6 text-sm" style={{ color: "var(--text-secondary)" }}>A convenir · Contactar para detalles</div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Más allá del Rolfing</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">El cuerpo, el sistema nervioso, las emociones y el campo no se separan.</h2>
            <p className="mt-6 text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              El Rolfing fue la formación inicial. Después llegaron veinte años de estudio — osteopatía visceral, acupuntura japonesa, movimiento, trabajo energético, regulación del sistema nervioso, trabajo mental y emocional. Cada sesión es una lectura del sistema entero, no la aplicación de una técnica.
            </p>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div className="rounded-[1.75rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
                <h3 className="text-lg font-medium">Estructura</h3>
                <p className="mt-3 leading-[1.8]" style={{ color: "var(--text-secondary)" }}>Lectura de cómo el cuerpo está organizado en la gravedad. Dónde compensa. Dónde está el origen real del patrón.</p>
              </div>
              <div className="rounded-[1.75rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
                <h3 className="text-lg font-medium">Regulación</h3>
                <p className="mt-3 leading-[1.8]" style={{ color: "var(--text-secondary)" }}>Devolver rango al sistema nervioso. El cuerpo no reorganiza cuando está en respuesta de amenaza.</p>
              </div>
              <div className="rounded-[1.75rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
                <h3 className="text-lg font-medium">Energía</h3>
                <p className="mt-3 leading-[1.8]" style={{ color: "var(--text-secondary)" }}>Trabajo energético directo. Funciona a distancia con la misma profundidad — algo que verificas en sesión.</p>
              </div>
              <div className="rounded-[1.75rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
                <h3 className="text-lg font-medium">Mental y emocional</h3>
                <p className="mt-3 leading-[1.8]" style={{ color: "var(--text-secondary)" }}>Las emociones y patrones mentales son parte del sistema. Cuando el sistema nervioso cambia, el patrón cognitivo cambia.</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Sobre Ferran</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">Más de 20 años. Otro cuerpo. La misma precisión.</h2>
            <div className="mt-8 space-y-5 text-lg leading-[1.8]">
              <p>A los 17 años, una lesión de taekwondo me dejó sin funcionar durante siete años. Dolor constante. Probé todo. Nada funcionaba — hasta que una sola sesión de osteopatía me mostró que había otro camino.</p>
              <p>Dejé un trabajo en una multinacional y empecé a formarme. Más de veinte años. Alemania, Japón, México, Malasia, Tailandia, Estados Unidos. No buscaba técnicas. Buscaba entender el sistema.</p>
              <p className="font-medium">Hoy trabajo con personas que han probado muchas cosas y siguen en el mismo lugar.</p>
            </div>
            <div className="mt-8 flex gap-6">
              <Link href="/historia" className="text-sm underline underline-offset-4 hover:opacity-60">Mi historia completa →</Link>
              <Link href="/wall-of-trust" className="text-sm underline underline-offset-4 hover:opacity-60">Testimonios →</Link>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-[900px] px-6 py-[120px] text-center">
            <p className="text-3xl font-medium tracking-tight">Si el patrón sigue ahí, hablemos.</p>
            <p className="mt-4 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Primeros 15 minutos sin coste. Evaluamos si este trabajo tiene sentido para tu caso.
            </p>
            <div className="mt-10">
              <a
                href={`${contactWhatsApp}?text=Hola%20Ferran%2C%20estoy%20en%20Ciudad%20de%20México%20y%20me%20interesa%20el%20Rolfing`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-10 py-4 text-base font-medium text-white transition hover:opacity-85"
                style={{ background: "var(--text-main)" }}
              >
                Escribir por WhatsApp
              </a>
            </div>
            <p className="mt-5 text-sm" style={{ color: "var(--text-secondary)" }}>
              {contactWhatsAppDisplay} · Online desde México · Presencial en Barcelona
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
