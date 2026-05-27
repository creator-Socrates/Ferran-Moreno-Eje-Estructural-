import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay, featuredTestimonials, siteUrl, testimonialsFull } from "@/lib/content";

export const metadata: Metadata = {
  title: "Wall of trust",
  description: "Archivo completo de testimonios de Ferran Moreno. Testimonios completos y sin reescritura.",
  alternates: {
    canonical: "/wall-of-trust",
    languages: { es: "/wall-of-trust", en: "/en/wall-of-trust" },
  },
  openGraph: {
    title: "Wall of trust | Ferran Moreno",
    description: "Archivo completo de testimonios de Ferran Moreno. Testimonios completos y sin reescritura.",
    url: `${siteUrl}/wall-of-trust`,
    siteName: "Ferran Moreno",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wall of trust | Ferran Moreno",
    description: "Archivo completo de testimonios de Ferran Moreno. Testimonios completos y sin reescritura.",
  },
};

export default function WallOfTrustPage() {
  const items = testimonialsFull.filter(
    (item) => !featuredTestimonials.some((featured) => featured.name === item.name),
  );

  return (
    <div className="min-h-screen" style={{ background: "#E5F0B8", color: "var(--text-main)" }}>

      <header className="sticky top-0 z-30" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-5">
          <Link href="/" className="leading-none">
            <div className="text-[17px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-main)" }}>Ferran Moreno</div>
            <div className="mt-[5px] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              Wall of trust
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50" style={{ color: "var(--text-secondary)" }}>Blog</Link>
            <Link
              href="/"
              className="rounded-full px-5 py-2 text-sm font-medium transition hover:opacity-60"
              style={{ border: "1px solid var(--border-subtle)", color: "var(--text-main)" }}
            >
              Volver a la home
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "#F8E97A" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
              Wall of trust
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Sus palabras, no las mías.
            </h1>
            <p className="mt-6 text-lg leading-8" style={{ color: "var(--text-secondary)" }}>
              Testimonios completos y sin reescritura.
            </p>

            <div className="mt-16 columns-1 gap-7 md:columns-2 [column-fill:_balance]">
              {items.map((item, i) => (
                <div
                  key={`${item.name}-${i}`}
                  className="mb-6 break-inside-avoid rounded-[1.75rem] p-7 shadow-sm"
                  style={{
                    border: "1px solid rgba(17, 24, 39, 0.08)",
                    background: "#ffffff",
                    boxShadow: "0 10px 30px rgba(17, 24, 39, 0.08)",
                  }}
                >
                  <p
                    className="text-[1.08rem] leading-[1.75] tracking-[-0.01em]"
                    style={{ color: "rgba(17, 24, 39, 0.92)" }}
                  >
                    "{item.text}"
                  </p>
                  <div className="mt-5 text-[0.98rem] font-medium leading-[1.5]" style={{ color: "rgba(31, 41, 55, 0.76)" }}>
                    — {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[80px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Blog</div>
            <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
              Entiende cómo funciona este trabajo
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                { slug: "que-pasa-en-una-sesion", title: "Qué pasa realmente en una sesión", tag: "Sesión" },
                { slug: "por-que-trabajo-por-proceso", title: "Por qué trabajo por proceso", tag: "Proceso" },
                { slug: "el-cuerpo-no-esta-roto-esta-compensando", title: "El cuerpo no está roto. Está compensando", tag: "Fundamentos" },
              ].map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`} className="group rounded-2xl p-5" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <span className="text-[10px] uppercase tracking-[0.15em] block mb-2" style={{ color: "var(--text-secondary)" }}>{a.tag}</span>
                  <span className="text-[15px] font-semibold tracking-tight group-hover:opacity-70 transition">{a.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div
              className="grid gap-10 rounded-[2.5rem] p-10 text-white lg:grid-cols-[1fr_auto] lg:items-end lg:p-14"
              style={{ background: "#F97316" }}
            >
              <div>
                <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.68)" }}>Primera conversación</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Si has llegado hasta aquí, ya sabes suficiente.<br />Hablemos.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 opacity-70">
                  Presencial en Lluçà (Barcelona) o online en cualquier parte del mundo.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:min-w-[260px]">
                <a
                  href="https://wa.me/34679229744?text=Hola%20Ferran%2C"
                  className="rounded-full px-7 py-3 text-center text-sm font-medium transition hover:opacity-90"
                  style={{ background: "#f5e033", color: "var(--text-main)" }}
                >
                  Iniciar conversación
                </a>
                <Link
                  href="/"
                  className="rounded-full bg-white px-7 py-3 text-center text-sm font-medium transition hover:opacity-90"
                  style={{ color: "#F97316" }}
                >
                  Volver a la home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
