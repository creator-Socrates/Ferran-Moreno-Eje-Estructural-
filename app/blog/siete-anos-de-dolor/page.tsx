import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Siete años de dolor",
  description: "Todo esto empezó por dolor.",
  alternates: getBlogAlternates("es", "siete-anos-de-dolor"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Siete años de dolor"
        description="Todo esto empezó por dolor."
        slug="siete-anos-de-dolor"
        date="2026-08-18"
        tag="Mi historia"
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
            Mi historia
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Siete años de dolor
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Todo esto empezó por dolor.
            </p>

            <p className="text-[15px] leading-relaxed">
              No por espiritualidad.<br />
              No por desarrollo personal.<br />
              No por curiosidad terapéutica.
            </p>

            <p className="text-[15px] leading-relaxed">
              Dolor real.
            </p>

            <p className="text-[15px] leading-relaxed">
              A los 17 años me lesioné haciendo taekwondo. Lo que parecía una lesión más terminó convirtiéndose en siete años con un dolor constante. Como un cuchillo clavado en la pierna.
            </p>

            <p className="text-[15px] leading-relaxed">
              No podía levantar una bolsa de la compra.<br />
              Dormía mal.<br />
              Vivía agotado.<br />
              Mi cuerpo no respondía.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pasé por muchísimos profesionales.<br />
              Fisioterapeutas.<br />
              Traumatólogos.<br />
              Tratamientos.<br />
              Pruebas.
            </p>

            <p className="text-[15px] leading-relaxed">
              Nada cambiaba realmente.
            </p>

            <p className="text-[15px] leading-relaxed">
              Hasta que un médico me dijo algo que todavía recuerdo perfectamente:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              "No puedo ayudarte. No vuelvas."
            </p>

            <p className="text-[15px] leading-relaxed">
              Así.<br />
              Sin alternativa.<br />
              Sin dirección.<br />
              Sin esperanza.
            </p>

            <p className="text-[15px] leading-relaxed">
              Mi madre llevaba más de un año insistiendo en que fuera a ver a Jonathan Castellà. Yo nunca iba.
            </p>

            <p className="text-[15px] leading-relaxed">
              Hasta que un lunes por la mañana, después de seis semanas de Construmat trabajando sin un solo fin de semana libre, me encontré con un día de fiesta y nadie con quien estar. Fui a casa de mis padres pero estaban trabajando. Mi madre, desde el trabajo, me dijo:
            </p>

            <p className="text-[15px] leading-relaxed">
              "Llama al Josep."
            </p>

            <p className="text-[15px] leading-relaxed">
              Llamé esperando que no tuviera hora.
            </p>

            <p className="text-[15px] leading-relaxed">
              Me dio cita para dos horas después.
            </p>

            <p className="text-[15px] leading-relaxed">
              Jonathan me recibió. Greñas. Heavy metal. Me hizo un masaje y me dijo:
            </p>

            <p className="text-[15px] leading-relaxed">
              "El músculo está bien. No tienes nada."
            </p>

            <p className="text-[15px] leading-relaxed">
              Pensé: sí claro, después de todos estos años aquí viene el listo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y entonces añadió:
            </p>

            <p className="text-[15px] leading-relaxed">
              "Pero ahora vendrá mi padre a hacerte las correcciones."
            </p>

            <p className="text-[15px] leading-relaxed">
              Entró Josep.
            </p>

            <p className="text-[15px] leading-relaxed">
              Aire zen. Súper pausado. Tranquilo. Me miró. Hizo dos tests de flexión. Y me dijo que tenía la cadera y el sacro movidos y que me los iba a colocar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Yo había tenido una mala experiencia con quiropráxia. Le tenía miedo a las correcciones. Así que lo primero que le dije, con mi mente analítica:
            </p>

            <p className="text-[15px] leading-relaxed">
              "Pros y contras de manipular."
            </p>

            <p className="text-[15px] leading-relaxed">
              Josep sonrió.
            </p>

            <p className="text-[15px] leading-relaxed">
              "Contras ninguno. Pros: que se te va a ir el dolor y te vas a sentir bien."
            </p>

            <p className="text-[15px] leading-relaxed">
              Su contestación me atravesó.
            </p>

            <p className="text-[15px] leading-relaxed">
              Podía ver toda la certeza en sus palabras.
            </p>

            <p className="text-[15px] leading-relaxed">
              Me hizo las correcciones.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando acabó, estaba llorando.
            </p>

            <p className="text-[15px] leading-relaxed">
              No de tristeza. No de emoción exactamente. Lágrimas de alivio. No entendía bien qué estaba pasando. Había ligereza. Me sentía raro. Como en una nube. Algo había cambiado pero no sabía bien qué era.
            </p>

            <p className="text-[15px] leading-relaxed">
              Hablé con Josep después de la sesión. Me fui a casa de mi madre. Salimos a comprar.
            </p>

            <p className="text-[15px] leading-relaxed">
              Subí corriendo de forma instintiva siete pisos sin dolor.
            </p>

            <p className="text-[15px] leading-relaxed">
              Fuimos a comprar para toda la semana. Y de repente me sentía como el Hulk. Podía llevar dos garrafas de ocho litros y toda la compra yo solo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Durante siete años no podía levantar una bolsa sin dolor constante.
            </p>

            <p className="text-[15px] leading-relaxed">
              Le dije a Josep que iba a hacer todos los cursos que me dijera. Que iba a ir a aprender allí con él.
            </p>

            <p className="text-[15px] leading-relaxed">
              Josep se rió.
            </p>

            <p className="text-[15px] leading-relaxed">
              Durante cuatro años estuve yendo como aprendiz. Me compartieron su conocimiento. Josep, Carme, Jonathan. Se convirtieron en familia.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ese día cambió completamente la dirección de mi vida.
            </p>

            <p className="text-[15px] leading-relaxed">
              Porque dejé de preguntarme:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              "¿Cómo sobrevivo a esto?"
            </p>

            <p className="text-[15px] leading-relaxed">
              Y empecé a preguntarme:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              "¿Qué acaba de pasar aquí?"
            </p>

            <p className="text-[15px] leading-relaxed">
              Toda mi búsqueda empezó ahí.
            </p>

            <p className="text-[15px] leading-relaxed">
              En siete años de dolor.
            </p>

            <p className="text-[15px] leading-relaxed">
              Y en una sesión que me hizo entender que el cuerpo humano funciona de una forma completamente distinta a como nos enseñan.
            </p>

            <p className="text-[15px] leading-relaxed">
              Gracias siempre.
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
          <RelatedArticles slug="siete-anos-de-dolor" lang="es" />
        </article>
      </main>
    </div>
  );
}
