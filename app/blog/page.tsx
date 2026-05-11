import Link from "next/link";
import { contactEmail } from "@/lib/content";

const articles = [
  {
    slug: "por-que-tomas-malas-decisiones-cuando-estas-estresado",
    title: "Por qué tomas malas decisiones cuando estás estresado",
    excerpt: "No decides mal. Decides desregulado. Tu sistema nervioso lleva las riendas antes de que tu mente se entere.",
    date: "2026-05-09",
    tag: "Sistema nervioso",
  },
  {
    slug: "dolor-cronico-sin-solucion-cuando-el-problema-no-es-donde-duele",
    title: "Dolor crónico sin solución: cuando el problema no es donde duele",
    excerpt: "Has ido a fisio, osteópata, traumatólogo. Nada funciona. Quizás nadie ha mirado donde realmente está el origen.",
    date: "2026-05-09",
    tag: "Dolor crónico",
  },
  {
    slug: "que-es-la-regulacion-del-sistema-nervioso",
    title: "Qué es la regulación del sistema nervioso y por qué importa",
    excerpt: "Tu cuerpo tiene un semáforo interno. Verde, naranja, rojo. La mayoría de personas llevan años en naranja sin saberlo.",
    date: "2026-05-09",
    tag: "Regulación",
  },
  {
    slug: "rolfing-duele-la-verdad",
    title: "¿El Rolfing duele? La verdad sobre el trabajo corporal profundo",
    excerpt: "La fama del Rolfing doloroso tiene una historia. El Rolfing bien hecho no tiene por qué doler. Puede ser intenso. Nunca invasivo.",
    date: "2026-05-09",
    tag: "Rolfing",
  },
  {
    slug: "cuando-el-cuerpo-compensa-mas-tecnica-no-lo-soluciona",
    title: "Cuando el cuerpo compensa durante años, más técnica no lo soluciona",
    excerpt: "No es la caída de hace 3 años. Es la suma de todo. Muerte por mil cortes de papel.",
    date: "2026-05-09",
    tag: "Compensación",
  },
  {
    slug: "no-necesitas-entender-necesitas-estar-bien",
    title: "No necesitas entender. Necesitas estar bien",
    excerpt: "La mente quiere explicaciones. El cuerpo quiere experiencia. ¿Quieres estar bien o quieres entenderlo?",
    date: "2026-05-09",
    tag: "Proceso",
  },
];

export const metadata = {
  title: "Blog — Ferran Moreno",
  description: "Artículos sobre trabajo corporal, regulación del sistema nervioso, dolor crónico y reorganización estructural.",
};

export default function BlogPage() {
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
            <a href={`mailto:${contactEmail}`} className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contacto</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[700px] px-6 py-24">
        <h1 className="text-4xl font-semibold tracking-tight mb-4">Blog</h1>
        <p className="text-[15px] mb-16" style={{ color: "var(--text-secondary)" }}>
          Lo que observo, lo que aprendo, lo que funciona.
        </p>

        <div className="space-y-12">
          {articles.map((a) => (
            <article key={a.slug} style={{ borderBottom: "1px solid var(--border-subtle)" }} className="pb-12">
              <Link href={`/blog/${a.slug}`} className="group">
                <span className="text-[10px] uppercase tracking-[0.15em] mb-3 block" style={{ color: "var(--text-secondary)" }}>
                  {a.tag}
                </span>
                <h2 className="text-2xl font-semibold tracking-tight mb-3 group-hover:opacity-70 transition">
                  {a.title}
                </h2>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {a.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
