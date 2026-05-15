import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Intensidad e invasión no son lo mismo",
  description: "Hay una línea muy clara entre un trabajo corporal intenso y un trabajo invasivo.",
  alternates: {
    canonical: "/blog/intensidad-e-invasion-no-son-lo-mismo",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Intensidad e invasión no son lo mismo"
        description="Hay una línea muy clara entre un trabajo corporal intenso y un trabajo invasivo."
        slug="intensidad-e-invasion-no-son-lo-mismo"
        date="2026-07-20"
        tag="Trabajo corporal"
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
            Trabajo corporal
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Intensidad e invasión no son lo mismo
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              Hay una línea muy clara entre un trabajo corporal intenso y un trabajo invasivo.
            </p>

            <p className="text-[15px] leading-relaxed">
              El problema es que mucha gente nunca aprendió a distinguirla.
            </p>

            <p className="text-[15px] leading-relaxed">
              Durante años se normalizó la idea de que cuanto más duele, más profundo es el trabajo. Como si el cuerpo necesitara ser vencido para cambiar. Como si la fascia tuviera que romperse. Como si la tensión cediera a través de la fuerza.
            </p>

            <p className="text-[15px] leading-relaxed">
              Mi experiencia ha sido exactamente la contraria.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando fuerzas demasiado, el cuerpo se defiende.
            </p>

            <p className="text-[15px] leading-relaxed">
              El tejido se endurece. La respiración cambia. El sistema nervioso entra en alerta. Puede parecer que &ldquo;algo está pasando&rdquo;, pero muchas veces lo único que está ocurriendo es una respuesta de protección.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso no es profundidad.
Es defensa.
            </p>

            <p className="text-[15px] leading-relaxed">
              La intensidad real se siente diferente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Hay momentos en una sesión donde el cuerpo entra en capas profundas y la sensación puede ser muy fuerte. Puede haber emoción, calor, temblor, liberación, incomodidad incluso. Pero el sistema no se cierra. Hay una cualidad de apertura. El cuerpo permite que eso ocurra.
            </p>

            <p className="text-[15px] leading-relaxed">
              Esa diferencia lo cambia todo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un trabajo invasivo deja al cuerpo agotado, reactivo o endurecido.
Un trabajo intenso bien hecho deja más espacio, más respiración, más sensación de eje.
            </p>

            <p className="text-[15px] leading-relaxed">
              No se trata de presión. Se trata de escucha.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un contacto preciso en el lugar correcto genera más cambio que diez minutos de fuerza bruta sobre el tejido equivocado. El cuerpo responde mucho mejor a la precisión que a la agresión.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso fue una de las cosas más importantes que aprendí durante mi formación en Munich, especialmente con la influencia de la osteopatía francesa y el trabajo visceral de Jean-Pierre Barral. La sutileza no era debilidad. Era precisión.
            </p>

            <p className="text-[15px] leading-relaxed">
              Con el tiempo entendí algo todavía más importante:
la calidad del estado interno de quien toca cambia completamente el resultado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Dos personas pueden hacer exactamente la misma técnica y producir efectos opuestos.
            </p>

            <p className="text-[15px] leading-relaxed">
              Una intenta imponer una corrección.
La otra escucha.
            </p>

            <p className="text-[15px] leading-relaxed">
              El cuerpo sabe la diferencia inmediatamente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Por eso dejé de interesarme tanto por acumular técnicas. La técnica importa, claro. Pero después de cierto punto, lo que realmente cambia el trabajo es la capacidad de percibir. De sentir cuándo el sistema abre y cuándo se protege. De saber cuándo avanzar y cuándo parar.
            </p>

            <p className="text-[15px] leading-relaxed">
              La precisión siempre gana a la fuerza.
            </p>

            <p className="text-[15px] leading-relaxed">
              No porque el cuerpo sea frágil.
Porque es inteligente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Mi mejor amigo Josedavid ha vivido toda mi progresión. Ha sido víctima de mis experimentos en terapia y después cliente durante muchos años.
            </p>

            <p className="text-[15px] leading-relaxed">
              Tenía un fisio al que iba a hacerse punción seca. Era barato.
            </p>

            <p className="text-[15px] leading-relaxed">
              Para mí la punción seca es una tortura innecesaria la mayoría de las veces.
            </p>

            <p className="text-[15px] leading-relaxed">
              El Doctor Harada, un acupuntor japonés con el que estudié, me enseñó un método de acupuntura que originalmente se usaba con heridas de guerra. Flechas. Heridas de espada. Era tan agresivo que dejaron de usarlo porque la gente se desmayaba.
            </p>

            <p className="text-[15px] leading-relaxed">
              La punción seca moderna viene de ahí.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y hay alternativas muchísimo más eficientes.
            </p>

            <p className="text-[15px] leading-relaxed">
              Una sesión de acupuntura bien hecha, con precisión y escucha, produce cambios profundos sin necesidad de generar dolor.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero como la punción seca es más barata y más rápida, se ha normalizado.
            </p>

            <p className="text-[15px] leading-relaxed">
              El precio no debería definir la calidad de la intervención.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Y el dolor no debería ser el indicador de que algo está funcionando.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si algo de lo que has leído te resuena, escríbeme.
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
