import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dolor crónico sin solución: cuando el problema no es donde duele",
  description: "Has probado todo y nada funciona. Quizás nadie ha mirado donde realmente esta el origen.",
  alternates: {
    canonical: "/blog/dolor-crónico-sin-solución-cuando-el-problema-no-es-donde-duele",
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
            Dolor crónico
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Dolor crónico sin solución: cuando el problema no es donde duele
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Has ido al fisio. Al osteopata. Al traumatologo. Te han hecho resonancias, radiografias, analíticas. Te han dado antiinflamatorios, estiramientos, ejercicios. Algunas cosas ayudan un tiempo. Después el dolor vuelve. Siempre vuelve.
            </p>

            <p className="text-[15px] leading-relaxed">
              El problema, casi siempre, es qué están tratando donde duele. Y donde duele no es donde esta el origen.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El dolor es la señal, no el problema
            </h2>

            <p className="text-[15px] leading-relaxed">
              El dolor es información. Es la forma que tiene tu cuerpo de decirte que algo no esta funcionando. Pero la zona que duele rara vez es la zona qué esta bloqueada. Lo que duele es lo que compensa. Lo que trabaja de más porque otra estructura no esta haciendo su funcion.
            </p>

            <p className="text-[15px] leading-relaxed">
              En trabajo corporal lo llamamos lesión primaria. Es el punto original donde algo se desorganizó. Una caída, una cirugía, una tensión emociónal mantenida, un patrón postural de años. Esa lesión primaria genera compensaciones. El cuerpo se reorganiza alrededor de ella para seguir funcionando. Y funciona. Durante años.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Muerte por mil cortes de papel
            </h2>

            <p className="text-[15px] leading-relaxed">
              No suele ser un golpe. No suele ser un evento. Es la acumulacion. Cada microtensión, cada compensacion, cada restriccion que el cuerpo absorbe y gestiona sin que lo notes. Cada una por separado es insignificante. Juntas, colapsan el sistema.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando el cuerpo ya no puede compensar mas, aparece el dolor. Pero ese dolor es el ultimo eslabon de una cadena que empezo mucho antes, muchas veces en un lugar completamente distinto.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Tratar la compensacion es un parche
            </h2>

            <p className="text-[15px] leading-relaxed">
              Si tratas la zona que duele sin resolver lo que la esta generando, el dolor vuelve. Es cuestion de tiempo. Puedes masajear esa espalda cada semana. Puedes pinchar esos puntos gatillo cada quince dias. Pero si la causa esta en una restriccion visceral, en una cicatriz que tira de la fascia, en un patrón de tensión que el sistema nervioso mantiene activo, el dolor se va a regenerar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Llevo más de veinte años viendo este patrón. La persona llega después de haber pasado por cinco, ocho, doce profesionales. No es qué esos profesionales sean malos. Es qué están mirando donde duele en lugar de buscar por qué el cuerpo se organizó de esa manera.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La pregunta correcta
            </h2>

            <p className="text-[15px] leading-relaxed">
              La pregunta no es que te duele. Esa ya la sabes. La pregunta es por qué tu cuerpo se ha organizado asi. Qué estructura esta bloqueada que obliga a otras a trabajar de mas. Donde esta la lesión primaria que inicio la cadena de compensaciones.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Cuando resuelves el origen, las compensaciones se deshacen solas. Y el dolor, que era la señal, deja de tener razón de existir.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si llevas tiempo con un dolor que nadie resuelve, quizás falta mirar en otro sitio.
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
