import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Del alivio a la expansión: tu cuerpo es adicto a la crisis",
  description: "El ciclo crisis-alivio mantiene al cuerpo en supervivencia. El verdadero cambio ocurre cuando pasas de alivio a expansión.",
  alternates: {
    canonical: "/blog/del-alivio-a-la-expansion",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Del alivio a la expansión: tu cuerpo es adicto a la crisis"
        description="El ciclo crisis-alivio mantiene al cuerpo en supervivencia. El verdadero cambio ocurre cuando pasas de alivio a expansión."
        slug="del-alivio-a-la-expansion"
        date="2026-09-15"
        tag="Sistema nervioso"
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
            Sistema nervioso
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Del alivio a la expansión: tu cuerpo es adicto a la crisis
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              El cuerpo se acostumbra a estar en ese sistema de crisis, tensión, sesión, alivio. Se convierte en un bucle. Vas al fisio, te alivia, vuelves a tensarte, vuelves al fisio. El alivio se siente bien, pero no cambia nada. Solo reinicia el contador.
            </p>

            <p className="text-[15px] leading-relaxed">
              Cuando cambiamos eso, el ciclo se transforma: regulación, tratamiento, regulación, expansión. Ya no es sobrevivir y descansar. Es estar bien y crecer desde ahí.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La diferencia entre alivio y expansión
            </h2>

            <p className="text-[15px] leading-relaxed">
              El alivio es volver al punto cero. La expansión es ir más allá del punto cero. El alivio te devuelve a donde estabas antes de la crisis. La expansión te lleva a un lugar donde no habías estado.
            </p>

            <p className="text-[15px] leading-relaxed">
              El problema es que muchos cuerpos no conocen la expansión. Solo conocen la oscilación entre crisis y alivio. Y confunden el alivio con estar bien. Pero estar bien de verdad no se siente como &ldquo;ya no me duele&rdquo;. Se siente como &ldquo;hay más espacio&rdquo;.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La barista
            </h2>

            <p className="text-[15px] leading-relaxed">
              Estaba recién con Alicia. Empezando una relación nueva, en un momento de expansión real. Fui a un café. Le sonreí a la barista. No hice nada especial. Simplemente estaba bien, desde mi eje, y eso se transmitió.
            </p>

            <p className="text-[15px] leading-relaxed">
              La mujer se derrumbó. Se puso a llorar. Días después me escribió. Me dijo que mi energía le había dado la fuerza para denunciar a su marido, que la maltrataba. Juicio rápido en tres días. Se fue a Canadá.
            </p>

            <p className="text-[15px] leading-relaxed">
              Simplemente por estar ahí. Sin cambiar nada. Sin decir nada. Sin forzar nada. Eso es lo que pasa cuando alguien está en expansión y no en alivio. No necesitas hacer. Solo estar.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El zahorí
            </h2>

            <p className="text-[15px] leading-relaxed">
              Yo soy como un zahorí. Trabajo con el péndulo y lo que ayudo es a encontrar el eje para que la luz aparezca. No pongo la luz. No la genero. Solo ayudo a quitar lo que la tapa.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Cuando dejas de buscar alivio y empiezas a buscar expansión, el cuerpo cambia de paradigma. Ya no gestiona crisis. Crece. Y desde ese crecimiento, todo lo que tocas se transforma. Sin esfuerzo. Sin intención. Solo con presencia.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si llevas años en el ciclo de crisis y alivio, podemos romperlo juntos.
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

          <RelatedArticles slug="del-alivio-a-la-expansion" lang="es" />
        </article>
      </main>
    </div>
  );
}
