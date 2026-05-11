import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail } from "@/lib/content";

export const metadata: Metadata = {
  title: "El Rolfing duele? La verdad sobre el trabajo corporal profundo",
  description: "La fama del Rolfing doloroso tiene una historia. El Rolfing bien hecho no tiene por qué doler.",
  alternates: {
    canonical: "/blog/rolfing-duele-la-verdad",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <header className="sticky top-0 z-30" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-5">
          <Link href="/" className="leading-none">
            <div className="text-[17px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-main)" }}>Ferran Moreno</div>
            <div className="mt-[5px] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              TRABAJO CORPORAL · REGULACION · ENERGIA
            </div>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" style={{ color: "var(--text-secondary)" }}>
            <Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Inicio</Link>
            <Link href="/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Wall of trust</Link>
            <Link href="/historia" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Mi historia</Link>
            <Link href="/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link>
            <a href={`mailto:${contactEmail}`} className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contacto</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[700px] px-6 py-24">
        <Link href="/blog" className="text-[11px] uppercase tracking-[0.15em] mb-12 inline-block transition hover:opacity-50" style={{ color: "var(--text-secondary)" }}>
          &larr; Blog
        </Link>

        <article>
          <span className="text-[10px] uppercase tracking-[0.15em] mb-4 block" style={{ color: "var(--text-secondary)" }}>
            Rolfing
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            El Rolfing duele? La verdad sobre el trabajo corporal profundo
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Si alguien te ha hablado de Rolfing, probablemente te ha dicho que duele. Es la fama que tiene. Y esa fama tiene una historia.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              De donde viene la fama del dolor
            </h2>

            <p className="text-[15px] leading-relaxed">
              Jan Sultan, uno de los Rolfers más veteraños del mundo, lo explica asi: en Estados Unidos, los primeros practicantes trabajaban con codos y presion extrema. El Rolfing se asocio a una experiencia intensa, a veces agresiva. Esa imagen se quedo grabada.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero en Europa la historia fue distinta. El Rolfing europeo integro muy pronto la influencia de la osteopatia francesa: Jean Pierre Barral, Alain Croibier, el trabajo visceral y neural. Tambien incorporo Somatic Experiencing de Peter Levine, que aporto la comprension del sistema nervioso y del trauma. El resultado fue un Rolfing mucho más preciso, más sutil, más respetuoso con el sistema.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Mi formacion
            </h2>

            <p className="text-[15px] leading-relaxed">
              Me forme en la Escuela Europea de Rolfing en Munich. Después hice todos los cursos del Group of Munich: listening techniques, manipulacion visceral, nervios perifericos, torax, trabajo urogenital. Con Barral, Croibier, Didier Prat y Peter Schwind aprendi a trabajar con una precision que no tiene nada que ver con la fuerza.
            </p>

            <p className="text-[15px] leading-relaxed">
              En mi trabajo, la intencion nunca es generar dolor. Es organizar, liberar, devolver coherencia al cuerpo. Puede haber intensidad. Puede haber sensaciones fuertes. Pero intensidad no es invasion.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Intensidad no es invasion
            </h2>

            <p className="text-[15px] leading-relaxed">
              Hay una diferencia fundamental entre un trabajo qué es intenso porqué esta llegando a algo profundo y un trabajo qué es doloroso porqué esta forzando. Lo primero es terapeutico. Lo segundo es contraproducente. Cuando fuerzas, el cuerpo se defiende. Contrae. Se cierra. Consigues lo contrario de lo que buscas.
            </p>

            <p className="text-[15px] leading-relaxed">
              La precision siempre gana a la fuerza. Un contacto preciso, con la intencion correcta, en el lugar exacto, genera más cambio que diez minutos de presion bruta. El cuerpo no necesita que lo aplastes. Necesita que lo escuches.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Si te hicieron Rolfing y fue demasiado
            </h2>

            <p className="text-[15px] leading-relaxed">
              Si alguien te hizo Rolfing y la experiencia fue excesiva, invasiva o dolorosa de forma desproporcionada, no fue el Rolfing. Fue el practicante. La herramienta no tiene la culpa de quien la usa mal.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              El Rolfing bien hecho no tiene por qué doler. Puede ser intenso. Nunca invasivo. Y la diferencia la marca quien lo aplica.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si tienes curiosidad por el Rolfing pero te frena lo que has oido, escribeme. Te explico cómo trabajo.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-block text-[11px] uppercase tracking-[0.15em] font-medium transition hover:opacity-50"
              style={{ color: "var(--text-main)" }}
            >
              Escribeme &rarr;
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}
