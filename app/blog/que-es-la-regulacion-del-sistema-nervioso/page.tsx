import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Qué es la regulación del sistema nervioso y por qué importa",
  description: "Tu cuerpo tiene un semáforo interno. La mayoría de personas llevan años en naranja sin saberlo.",
  alternates: {
    canonical: "/blog/que-es-la-regulacion-del-sistema-nervioso",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Qué es la regulación del sistema nervioso y por qué importa"
        description="Tu cuerpo tiene un semáforo interno. La mayoría de personas llevan años en naranja sin saberlo."
        slug="que-es-la-regulacion-del-sistema-nervioso"
        date="2026-05-09"
        tag="Regulación"
        lang="es"
      />
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
            Regulación
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Qué es la regulación del sistema nervioso y por qué importa
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Tu cuerpo tiene un semáforo interno. No lo ves, pero gobierna todo lo que haces: cómo duermes, cómo digieres, cómo piensas, cómo te relacionas, cómo reaccionas ante lo inesperado.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El semáforo: verde, naranja, rojo
            </h2>

            <p className="text-[15px] leading-relaxed">
              <strong>Verde</strong> es el estado parasimpático. Equilibrio. El sistema nervioso está en calma, disponible. Puedes pensar con claridad, digerir bien, dormir profundo, responder a los demás con proporción. Es tu estado natural.
            </p>

            <p className="text-[15px] leading-relaxed">
              <strong>Naranja</strong> es activación simpática. El sistema detecta algo, una amenaza real o percibida, y empieza a prepararse. El corazón se acelera, la respiración se acorta, los músculos se tensan. Es útil cuando es puntual. Es destructivo cuando se cronifica.
            </p>

            <p className="text-[15px] leading-relaxed">
              <strong>Rojo</strong> es fight, flight o freeze. El cuerpo toma el control. La corteza prefrontal se apaga. Solo hay reacción: atacar, huir o quedarse paralizado. Es el último recurso del sistema para sobrevivir.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El pájaro y la descarga
            </h2>

            <p className="text-[15px] leading-relaxed">
              Cuando un pájaro escapa de un depredador, pasa por toda la secuencia: lucha, huida, congelación. Si sobrevive, se sacude. Tiembla. Descarga la energía acumulada. Y vuelve a la normalidad como si nada hubiera pasado. Su sistema nervioso completa el ciclo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Los humanos rara vez completamos ese ciclo. Nos tragamos el susto. Apretamos los dientes. Seguimos adelante. La energía de activación se queda dentro. Y el sistema nervioso se queda en naranja, esperando la siguiente amenaza que nunca llega pero que el cuerpo sigue anticipando.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Vivir en naranja
            </h2>

            <p className="text-[15px] leading-relaxed">
              La mayoría de personas que veo llevan años en naranja. No lo saben porque se han acostumbrado. Creen que dormir mal es normal. Que estar tenso es su personalidad. Que la ansiedad de fondo es parte de la vida adulta. No lo es.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando tu sistema nervioso está crónicamente activado, nada funciona bien. No digieres bien porque el sistema parasimpático no está disponible. No duermes bien porque tu cuerpo cree que hay peligro. No piensas bien porque la corteza prefrontal pierde recursos. No te relacionas bien porque estás en modo defensa.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Regular no es relajarse
            </h2>

            <p className="text-[15px] leading-relaxed">
              Regulación no es poner música suave y respirar hondo. Regulación es devolver al sistema nervioso su capacidad de oscilar. De activarse cuando toca y volver a la calma cuando la amenaza pasa. De completar el ciclo que los pájaros completan y nosotros no.
            </p>

            <p className="text-[15px] leading-relaxed">
              Lo primero que hago en sesión es parar el sistema. Darle permiso para bajar. A veces eso solo ya es suficiente para que el cuerpo empiece a reorganizarse. Porque un sistema nervioso regulado es la condición previa para que cualquier otra cosa funcione: el trabajo estructural, el visceral, el energético.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              La regulación es la base. Sin ella, nada de lo demás se sostiene.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si sientes que llevas demasiado tiempo en naranja, podemos trabajar en devolver tu sistema a verde.
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
