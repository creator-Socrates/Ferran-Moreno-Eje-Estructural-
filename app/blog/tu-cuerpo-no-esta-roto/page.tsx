import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tu cuerpo no está roto. Está mal organizado",
  description: "La diferencia entre roto y desorganizado es enorme. Un cuerpo desorganizado no necesita reparación — necesita reorganización.",
  alternates: {
    canonical: "/blog/tu-cuerpo-no-esta-roto",
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
            <Link href="/#como-trabajo" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Método</Link>
            <Link href="/#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Casos</Link>
            <Link href="/#para-quien" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Para quién</Link>
            <Link href="/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Wall of trust</Link>
            <Link href="/historia" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Mi historia</Link>
            <Link href="/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link>
            <a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contacto</a>
            <span style={{ color: "var(--border-subtle)" }}>|</span>
            <Link href="/en" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">EN</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[700px] px-6 py-24">
        <Link href="/blog" className="text-[11px] uppercase tracking-[0.15em] mb-12 inline-block transition hover:opacity-50" style={{ color: "var(--text-secondary)" }}>
          &larr; Blog
        </Link>

        <article>
          <span className="text-[10px] uppercase tracking-[0.15em] mb-4 block" style={{ color: "var(--text-secondary)" }}>
            Reorganización
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Tu cuerpo no está roto. Está mal organizado
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Llegan personas que han pasado por cinco fisioterapeutas, tres traumatólogos, dos osteópatas y una resonancia que no muestra nada. Llevan años con dolor. Han probado de todo. Y la conclusión a la que llegan es siempre la misma: algo en mi cuerpo está roto.
            </p>

            <p className="text-[15px] leading-relaxed">
              Casi nunca lo está.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Roto y desorganizado no son lo mismo
            </h2>

            <p className="text-[15px] leading-relaxed">
              La diferencia entre roto y desorganizado es enorme. Roto necesita reparación: cirugía, medicación, intervención externa. Desorganizado necesita reorganización: alguien que pueda leer el sistema, encontrar la restricción primaria y darle al cuerpo la información que necesita para encontrar un orden mejor.
            </p>

            <p className="text-[15px] leading-relaxed">
              La mayoría de personas que llegan después de años de tratamientos fallidos no están rotas. Están desorganizadas. Su cuerpo lleva tanto tiempo compensando que ya nadie sabe qué es causa y qué es efecto. El dolor en la espalda puede venir de un tobillo que se lesionó hace quince años. La rigidez en el cuello puede ser la respuesta a un diafragma que no se mueve. La ciática puede empezar en una víscera.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El cuerpo no necesita que lo arregles
            </h2>

            <p className="text-[15px] leading-relaxed">
              Reorganizar no es añadir algo nuevo. Es quitar la interferencia para que el cuerpo pueda hacer lo que ya sabe hacer. El cuerpo tiene una inteligencia organizativa que es anterior a cualquier técnica, a cualquier método, a cualquier terapeuta. No necesita que lo dirijas. Necesita que dejes de estorbar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando encuentras la restricción primaria — el punto del sistema que está sosteniendo todo el patrón — y la liberas, el cuerpo se reorganiza solo. No le dices cómo. Él ya sabe. Solo necesitaba que alguien le quitara el obstáculo.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Por qué los tratamientos convencionales fallan
            </h2>

            <p className="text-[15px] leading-relaxed">
              Porque tratan el síntoma como si fuera el problema. Duele aquí, trato aquí. Pero el cuerpo no funciona así. El cuerpo es un sistema. Todo está conectado. Si solo tratas donde duele, estás tratando la compensación, no la causa. Y la compensación volverá. Siempre vuelve.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ver el cuerpo como un sistema cambia todo. Ya no buscas qué está roto. Buscas qué está desorganizado. Ya no intentas arreglar. Intentas reorganizar. Y cuando lo haces bien, el cuerpo responde de maneras que sorprenden incluso a la persona que lo habita.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Tu cuerpo no necesita tu ayuda. Necesita que dejes de interponerte.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si llevas años buscando soluciones y nada ha funcionado, quizá el problema no es lo que te han dicho. Escríbeme y lo miramos.
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
