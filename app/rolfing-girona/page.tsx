import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay, siteUrl } from "@/lib/content";
import { LocationStructuredData } from "@/components/structured-data";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Rolfing en Girona",
  description:
    "Rolfing en Girona. Ferran Moreno: trabajo corporal profundo, regulación del sistema nervioso y reorganización estructural. Consulta presencial en Lluçà (1h30 de Girona) y sesiones online.",
  alternates: { canonical: "/rolfing-girona" },
  keywords: [
    "Rolfing Girona",
    "Rolfing en Girona",
    "trabajo corporal Girona",
    "regulación sistema nervioso Girona",
    "reorganización estructural Girona",
    "Ferran Moreno Girona",
    "dolor crónico Girona",
  ],
  openGraph: {
    title: "Rolfing en Girona | Ferran Moreno",
    description:
      "Rolfing y trabajo corporal profundo en Girona. Consulta presencial en Lluçà (1h30 de Girona) y online.",
    url: `${siteUrl}/rolfing-girona`,
    siteName: "Ferran Moreno",
    locale: "es_ES",
    type: "website",
  },
};

export default function RolfingGirona() {
  return (
    <>
      <LocationStructuredData
        city="Girona"
        country="ES"
        lang="es"
        slug="rolfing-girona"
        description="Rolfing en Girona. Ferran Moreno: trabajo corporal profundo, regulación del sistema nervioso y reorganización estructural. Consulta presencial en Lluçà (1h30 de Girona) y sesiones online."
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
        <section style={{ borderBottom: "1px solid rgba(124,58,237,0.3)", background: "#7C3AED", color: "#fff" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <p className="mb-6 text-xs uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.75)" }}>
              Rolfing · Trabajo corporal · Girona
            </p>
            <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              Rolfing en Girona
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.8]" style={{ color: "rgba(255,255,255,0.85)" }}>
              Salir de la ciudad para entrar en tu cuerpo. Lluçà está a una hora y media de Girona — un trayecto que muchos clientes convierten en parte del proceso.
            </p>
          </div>
        </section>

        {/* CONTEXTO */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Desde Girona</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight">
                  El desplazamiento como transición
                </h2>
                <div className="mt-8 space-y-5 text-base leading-[1.8]">
                  <p>
                    Girona es una ciudad que sabe de equilibrio entre ritmo urbano y naturaleza. Pero incluso allí, el cuerpo acumula. El sistema nervioso se satura. El dolor se cronifica. Y las soluciones convencionales dejan de funcionar.
                  </p>
                  <p>
                    Clientes de Girona y la Costa Brava vienen a Lluçà para sesiones intensivas. Algunos aprovechan un sábado para hacer dos sesiones en un día. Otros vienen una vez al mes y sostienen el trabajo con sesiones online entre visitas.
                  </p>
                  <p>
                    La hora y media de trayecto no es un inconveniente — es una desconexión progresiva del ruido cotidiano. Cuando llegas a la consulta, ya has empezado a bajar. Eso hace que el trabajo sea más profundo desde el primer minuto.
                  </p>
                  <p>
                    No hago Rolfing convencional. Integro lectura estructural, regulación del sistema nervioso y trabajo energético. Es una mirada al sistema completo, no a la pieza que duele.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="rounded-[2rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Distancia</div>
                  <div className="mt-2 text-2xl font-semibold">1h 30min desde Girona</div>
                  <div className="mt-2 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    AP-7 hasta Vic, luego dirección Lluçà. Trayecto tranquilo, sin tráfico urbano.
                  </div>
                </div>
                <div className="rounded-[2rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Online</div>
                  <div className="mt-2 text-2xl font-semibold">Sesiones a distancia</div>
                  <div className="mt-2 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    Regulación y trabajo energético online para sostener el proceso entre sesiones presenciales. No sustituyen la intervención manual, pero mantienen la dirección.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUÉ TRABAJO */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Más allá del Rolfing</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">
              Por qué el entorno rural cambia el resultado
            </h2>
            <div className="mt-8 space-y-5 text-base leading-[1.8]">
              <p>
                Uno de los factores que más interfiere en el trabajo corporal es el nivel de activación del sistema nervioso. En la ciudad, el cuerpo llega a la sesión cargado — con el ruido del tráfico, la prisa, la agenda. Necesita tiempo para bajar antes de que puedas trabajar en profundidad.
              </p>
              <p>
                En Lluçà, el entorno hace la mitad del trabajo. No hay ruido. No hay urgencia. El cuerpo llega y ya empieza a soltar. Eso permite entrar en capas que en un entorno urbano costarían dos o tres sesiones alcanzar.
              </p>
              <p>
                Trabajo con más de veinte años de experiencia en Rolfing, osteopatía visceral, acupuntura japonesa y trabajo energético. No aplico un protocolo estándar: cada sesión responde a lo que el cuerpo necesita en ese momento.
              </p>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "#DDD6FE" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Testimonios</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">
              Lo que dicen quienes han pasado por el proceso
            </h2>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {[
                {
                  name: "Claudia Medina · Emprendedora · Girona",
                  text: "Parece magia... A mi hija le ayuda un montón. Se acabó el dolor y el estado de cansancio permanente. Gracias Ferran.",
                },
                {
                  name: "Laura Cabré · Interior Designer · Barcelona",
                  text: "En solo dos sesiones logró eliminar un vértigo, un bruxismo y varias dolencias crónicas derivadas de un accidente de moto.",
                },
                {
                  name: "Madeleine Cooke · English Coaching for Leaders",
                  text: "Los cambios que experimenté, tanto emocionales como físicos, iniciaron un proceso que tendrá un gran impacto en mi vida.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-[2.5rem] p-8"
                  style={{ border: "1px solid rgba(124,58,237,0.18)", background: "#fff" }}
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
                { slug: "el-dolor-rara-vez-empieza-donde-duele", title: "El dolor rara vez empieza donde duele", tag: "Dolor crónico" },
                { slug: "el-problema-no-es-el-estres", title: "El problema no es el estrés. Es no salir de él", tag: "Regulación" },
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
                <div className="text-sm uppercase tracking-[0.25em] opacity-50">Desde Girona</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  Si el cuerpo pide algo que la ciudad no puede dar, hablemos.
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
                  Primera sesión — 360€ + IVA · Lluçà, a 1h30 de Girona
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
