import Link from "next/link";
import { contactEmail, featuredTestimonials, testimonialsFull } from "@/lib/content";

export const metadata = {
  title: "Wall of Trust | Ferran Moreno",
  description: "Archivo completo de testimonios de Ferran Moreno. Testimonios completos y sin reescritura.",
};

export default function WallOfTrustPage() {
  const items = testimonialsFull.filter(
    (item) => !featuredTestimonials.some((featured) => featured.name === item.name),
  );

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>

      <header className="sticky top-0 z-30" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
        <div className="mx-auto flex max-w-[900px] items-center justify-between px-6 py-4">
          <Link href="/" className="leading-none">
            <div className="text-xl font-semibold tracking-tight">Ferran Moreno</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--text-secondary)" }}>
              Wall of trust
            </div>
          </Link>
          <Link
            href="/"
            className="rounded-full px-5 py-2 text-sm font-medium transition hover:opacity-60"
            style={{ border: "1px solid var(--border-subtle)", color: "var(--text-main)" }}
          >
            Volver a la home
          </Link>
        </div>
      </header>

      <main>
        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
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

            <div className="mt-16 columns-1 gap-6 md:columns-2 xl:columns-3 [column-fill:_balance]">
              {items.map((item, i) => (
                <div
                  key={`${item.name}-${i}`}
                  className="mb-6 break-inside-avoid rounded-2xl p-6 shadow-sm"
                  style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}
                >
                  <p>"{item.text}"</p>
                  <div className="mt-4 text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                    — {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div
              className="grid gap-10 rounded-[2.5rem] p-10 text-white lg:grid-cols-[1fr_auto] lg:items-end lg:p-14"
              style={{ background: "var(--text-main)" }}
            >
              <div>
                <div className="text-sm uppercase tracking-[0.25em] opacity-50">Primera conversación</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Si has llegado hasta aquí, ya sabes suficiente.<br />Hablemos.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 opacity-70">
                  Presencial en Lluçà (Barcelona) o online en cualquier parte del mundo.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:min-w-[260px]">
                <a
                  href={`mailto:${contactEmail}`}
                  className="rounded-full bg-white px-7 py-3 text-center text-sm font-medium transition hover:opacity-90"
                  style={{ color: "var(--text-main)" }}
                >
                  Iniciar conversación
                </a>
                <Link
                  href="/"
                  className="rounded-full px-7 py-3 text-center text-sm font-medium text-white transition hover:opacity-60"
                  style={{ border: "1px solid rgba(255,255,255,0.2)" }}
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
