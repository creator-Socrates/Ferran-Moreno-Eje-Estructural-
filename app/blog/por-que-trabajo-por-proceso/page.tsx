import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";

export const metadata: Metadata = {
  title: "Por qué trabajo por proceso y no por sesiones sueltas | Ferran Moreno",
  description: "Una sesión cambia cómo te sientes hoy. Un proceso cambia cómo está organizado tu cuerpo. La diferencia importa.",
  alternates: {
    canonical: "/blog/por-que-trabajo-por-proceso",
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
            Proceso
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Por qué trabajo por proceso y no por sesiones sueltas
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Una sesión puede cambiar cómo te sientes hoy. Un proceso cambia cómo está organizado tu cuerpo. La diferencia importa.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Lo que puede hacer una sesión
            </h2>

            <p className="text-[15px] leading-relaxed">
              En una sola sesión puedo regular el sistema nervioso, liberar una restricción, desplazar un patrón. Puedes salir sintiéndote diferente, más ligero, más organizado. Y eso tiene valor.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero el cuerpo tiene capas. Lo que aparece en la primera sesión es la capa superficial. La que el sistema muestra porque es la más accesible, la menos amenazante. Debajo hay más. Y para llegar ahí, el cuerpo necesita algo que una sesión suelta no puede dar: confianza.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Lo que aparece en la sesión 3, 4, 5
            </h2>

            <p className="text-[15px] leading-relaxed">
              La reorganización real ocurre cuando el sistema confía lo suficiente como para mostrar lo que tiene debajo. Eso no pasa en la primera visita. Pasa en la tercera, en la cuarta, en la quinta, cuando el cuerpo ya sabe que no vas a forzar, que vas a escuchar, que el proceso tiene un ritmo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí es donde aparecen los patrones profundos. Las compensaciones antiguas. Las restricciones que llevan años organizando todo lo demás. Trabajar eso requiere tiempo, secuencia y una relación terapéutica que se construye sesión a sesión.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              No es por el dinero. Es por tu cuerpo.
            </h2>

            <p className="text-[15px] leading-relaxed">
              No prefiero procesos porque necesite tu dinero durante seis meses. Prefiero procesos porque tu cuerpo necesita tiempo para reorganizarse de verdad. Forzar un cambio profundo en una sesión es como intentar reformar una casa en un día: puedes pintar las paredes, pero la estructura sigue igual.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un proceso bien hecho produce cambios que son permanentes. El cuerpo no vuelve atrás porque la reorganización fue real, no superficial. Una buena sesión te alivia. Un buen proceso te transforma.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La diferencia que importa
            </h2>

            <p className="text-[15px] leading-relaxed">
              Una buena sesión se disipa. Un buen proceso se queda. No porque hayas creado dependencia, sino porque el cuerpo encontró una organización mejor y no tiene razón para volver a la anterior.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Una buena reorganización es permanente. Una buena sesión se pasa.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si quieres saber cómo es un proceso conmigo y qué puedes esperar, escríbeme.
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
