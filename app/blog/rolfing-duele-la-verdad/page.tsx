import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";

export const metadata: Metadata = {
  title: "¿El Rolfing duele? La verdad sobre el trabajo corporal profundo",
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
              TRABAJO CORPORAL · REGULACIÓN · ENERGÍA
            </div>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" style={{ color: "var(--text-secondary)" }}>
            <Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Inicio</Link>
            <Link href="/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Wall of trust</Link>
            <Link href="/historia" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Mi historia</Link>
            <Link href="/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link>
            <a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contacto</a>
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
            ¿El Rolfing duele? La verdad sobre el trabajo corporal profundo
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Si alguien te ha hablado de Rolfing, probablemente te ha dicho que duele. Es la fama que tiene. Y esa fama tiene una historia.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              De dónde viene la fama del dolor
            </h2>

            <p className="text-[15px] leading-relaxed">
              Jan Sultan, uno de los Rolfers más veteranos del mundo, lo explica así: en Estados Unidos, los primeros practicantes trabajaban con codos y presión extrema. El Rolfing se asoció a una experiencia intensa, a veces agresiva. Esa imagen se quedó grabada.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero en Europa la historia fue distinta. El Rolfing europeo integró muy pronto la influencia de la osteopatía francesa: Jean Pierre Barral, Alain Croibier, el trabajo visceral y neural. También incorporó Somatic Experiencing de Peter Levine, que aportó la comprensión del sistema nervioso y del trauma. El resultado fue un Rolfing mucho más preciso, más sutil, más respetuoso con el sistema.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Mi formación
            </h2>

            <p className="text-[15px] leading-relaxed">
              Me formé en la Escuela Europea de Rolfing en Munich. Después hice todos los cursos del Group of Munich: listening techniques, manipulación visceral, nervios periféricos, tórax, trabajo urogenital. Con Barral, Croibier, Didier Prat y Peter Schwind aprendí a trabajar con una precisión que no tiene nada que ver con la fuerza.
            </p>

            <p className="text-[15px] leading-relaxed">
              En mi trabajo, la intención nunca es generar dolor. Es organizar, liberar, devolver coherencia al cuerpo. Puede haber intensidad. Puede haber sensaciones fuertes. Pero intensidad no es invasión.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Intensidad no es invasión
            </h2>

            <p className="text-[15px] leading-relaxed">
              Hay una diferencia fundamental entre un trabajo que es intenso porque está llegando a algo profundo y un trabajo que es doloroso porque está forzando. Lo primero es terapéutico. Lo segundo es contraproducente. Cuando fuerzas, el cuerpo se defiende. Contrae. Se cierra. Consigues lo contrario de lo que buscas.
            </p>

            <p className="text-[15px] leading-relaxed">
              La precisión siempre gana a la fuerza. Un contacto preciso, con la intención correcta, en el lugar exacto, genera más cambio que diez minutos de presión bruta. El cuerpo no necesita que lo aplastes. Necesita que lo escuches.
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
              Si tienes curiosidad por el Rolfing pero te frena lo que has oído, escríbeme. Te explico cómo trabajo.
            </p>
            <a
              href={contactWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] uppercase tracking-[0.15em] font-medium transition hover:opacity-50"
              style={{ color: "var(--text-main)" }}
            >
              Escríbeme &rarr;
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}
