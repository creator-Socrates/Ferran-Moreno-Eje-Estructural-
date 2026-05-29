import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "Lo que tus manos pueden leer",
  description: "Las manos entrenadas detectan lo que las máquinas no ven. Escaneo térmico, palpación visceral, diagnóstico manual: el oficio de escuchar con las manos.",
  alternates: getBlogAlternates("es", "lo-que-tus-manos-pueden-leer"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Lo que tus manos pueden leer"
        description="Las manos entrenadas detectan lo que las máquinas no ven. Escaneo térmico, palpación visceral, diagnóstico manual: el oficio de escuchar con las manos."
        slug="lo-que-tus-manos-pueden-leer"
        date="2026-08-11"
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
            Lo que tus manos pueden leer
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              En mi formación me enseñaban técnicas para detectar cosas que están pasando en el cuerpo sin necesidad de una máquina. Las manos, cuando están entrenadas, son un instrumento de lectura extraordinariamente preciso. No sustituyen a la medicina. La complementan.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando llegué a Agatharied, en Múnich, para estudiar Rolfing, vi trabajar a Christoph Sommers y me explotó la cabeza. Tenía la misma clase de finura que un sumiller con el vino: alguien capaz de distinguir matices mínimos de olor, densidad, cuerpo o temperatura, y saber lo que significan.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero él no lo hacía con una copa. Lo hacía con el cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed">
              No empezaba preguntándote dónde te dolía ni haciendo una batería de pruebas pasivas y activas para perseguir el síntoma. Te leía. Veía a través del cuerpo. Trabajaba en cosas que aparentemente no tenían nada que ver con tu queja, y al salir te sentías magnífico.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Ahí entendí algo que no he olvidado desde entonces: la percepción lo es todo.
            </p>

            <p className="text-[15px] leading-relaxed">
              No la técnica en sí, sino saber dónde intervenir, cuándo intervenir y cuándo no hacerlo. El silencio también forma parte del oficio. El cuerpo da información constantemente, pero hay que aprender a leerla.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El escaneo de tres puntos
            </h2>

            <p className="text-[15px] leading-relaxed">
              Lo primero que aprendí fue un escaneo simple: cráneo, esternón, abdomen. Tres puntos. Colocar la mano en el esternón y sentir hacia dónde van las tensiones. Si va hacia el pulmón, el hígado, el bazo, el esófago. El cuerpo tiene un mapa de tensiones que las manos pueden leer si sabes qué estás buscando.
            </p>

            <p className="text-[15px] leading-relaxed">
              No es intuición. Es entrenamiento. Miles de horas de práctica hasta que las manos distinguen densidades, temperaturas, restricciones y direcciones de tensión. Lo que al principio parece todo igual, con el tiempo se convierte en información legible.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Diagnóstico térmico
            </h2>

            <p className="text-[15px] leading-relaxed">
              Una de las técnicas más útiles es el escaneo térmico. Pasas la palma de la mano a un palmo de distancia del cuerpo, sin tocar, recorriendo la superficie. Cuando existe una infección o una lesión, el cuerpo aumenta la temperatura en esa zona. Las manos entrenadas detectan diferencias de décimas de grado.
            </p>

            <p className="text-[15px] leading-relaxed">
              Jean-Pierre, uno de mis maestros, detectó cálculos renales en un paciente a través de palpación térmica. Lo mandó a urgencias. La ecografía confirmó exactamente lo que sus manos habían leído. No es magia. Es oficio.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Practicar en casa
            </h2>

            <p className="text-[15px] leading-relaxed">
              Mi madre era la que se dejaba primero en todos los experimentos. Cuando estaba aprendiendo, practicaba con ella cada técnica nueva. Escaneo térmico, palpación visceral, escucha craneal. Necesitas a alguien que confíe en ti y que te deje equivocarte. Así se aprende este oficio.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Siempre junto al sistema médico
            </h2>

            <p className="text-[15px] leading-relaxed">
              Un error puede tener un coste muy alto. Por eso las manos no sustituyen pruebas médicas. Las complementan. Cuando detecto algo que no me cuadra, derivo. Siempre.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              El trabajo manual es potente, pero la humildad profesional es innegociable.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              El cuerpo te da toda la información. El oficio consiste en saber leerla.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si quieres saber qué puede detectar un trabajo manual de calidad, escríbeme. Te explico lo que las manos pueden leer en tu caso.
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

          <RelatedArticles slug="lo-que-tus-manos-pueden-leer" lang="es" />
        </article>
      </main>
    </div>
  );
}
