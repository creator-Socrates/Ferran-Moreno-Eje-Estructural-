import Link from "next/link";
import { contactEmail, featuredTestimonials, testimonialsFull } from "@/lib/content";

export const metadata = {
  title: "Wall of Trust | Ferran Moreno",
  description:
    "Archivo completo de testimonios de Ferran Moreno. Testimonios completos y sin reescritura.",
};

export default function WallOfTrustPage() {
  const items = testimonialsFull.filter(
    (item) => !featuredTestimonials.some((featured) => featured.name === item.name),
  );

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="border-b border-neutral-200 bg-[#fafafa]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-xl font-semibold tracking-tight">Ferran Moreno</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              Wall of trust
            </div>
          </div>
          <Link
            href="/"
            className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-900"
          >
            Volver a la home
          </Link>
        </div>
      </header>

      <main>
        <section className="border-b border-neutral-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                Wall of trust
              </div>

              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                El archivo completo de testimonios
              </h1>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Testimonios completos y sin reescritura.
              </p>
            </div>

            <div className="mt-16 columns-1 gap-6 md:columns-2 xl:columns-3 [column-fill:_balance]">
              {items.map((item, i) => (
                <div
                  key={`${item.name}-${i}`}
                  className="mb-6 break-inside-avoid rounded-2xl border border-neutral-200 bg-[#fafafa] p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
                >
                  <p className="text-neutral-700">“{item.text}”</p>
                  <div className="mt-4 text-sm font-medium text-neutral-500">— {item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-10 rounded-[2.5rem] bg-neutral-900 p-10 text-white lg:grid-cols-[1fr_auto] lg:items-end lg:p-14">
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-neutral-400">
                  Primera conversación
                </div>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Si has llegado hasta aquí, ya sabes suficiente.
                  <br />
                  Hablemos.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
                  Presencial en Lluçà (Barcelona) o online en cualquier parte del mundo.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:min-w-[280px]">
                <a
                  href={`mailto:${contactEmail}`}
                  className="rounded-2xl bg-white px-7 py-3 text-center text-sm font-medium text-neutral-900 transition hover:opacity-90"
                >
                  Iniciar conversación
                </a>

                <Link
                  href="/"
                  className="rounded-2xl border border-white/20 px-7 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10"
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
