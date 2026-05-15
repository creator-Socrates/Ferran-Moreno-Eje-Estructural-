export const dynamic = "force-dynamic";

import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";

const allArticles = [
  { slug: "bara-bala-no-puedes-sentir-sin-creer", title: "Bara bala: no puedes sentir sin creer", date: "2026-05-09", tag: "Proceso" },
  { slug: "la-barista-que-lloro", title: "La barista que lloró", date: "2026-05-09", tag: "Energía" },
  { slug: "el-topo-mecanismo-mental", title: "El topo: el mecanismo mental que bloquea tu cuerpo", date: "2026-05-09", tag: "Proceso" },
  { slug: "las-casetes-mentales", title: "Las casetes mentales que recrean tu sufrimiento", date: "2026-05-09", tag: "Proceso" },
  { slug: "la-sombra-te-hace-olvidar", title: "La sombra te hace olvidar que alguna vez estuviste bien", date: "2026-05-09", tag: "Proceso" },
  { slug: "contraccion-o-expansion", title: "Contracción o expansión: la única pregunta que necesitas", date: "2026-05-09", tag: "Proceso" },
  { slug: "las-personas-con-la-mochila", title: "Las personas con la mochila", date: "2026-05-09", tag: "Proceso" },
  { slug: "sostener-tu-luz", title: "Sostener tu luz", date: "2026-05-09", tag: "Alto rendimiento" },
  { slug: "el-freno-de-mano-del-cuerpo", title: "El freno de mano del cuerpo", date: "2026-05-09", tag: "Trabajo corporal" },
  { slug: "manager-o-micromanager-de-tu-vida", title: "Manager o micromanager de tu propia vida", date: "2026-05-09", tag: "Proceso" },
  { slug: "no-hay-nada-solo-fisico", title: "No hay nada solo físico", date: "2026-05-09", tag: "Sistema nervioso" },
  { slug: "no-necesitas-entender-necesitas-estar-bien", title: "No necesitas entender. Necesitas estar bien", date: "2026-05-09", tag: "Proceso" },
  { slug: "todo-es-frecuencia", title: "Todo es frecuencia", date: "2026-05-09", tag: "Formación" },
  { slug: "que-esperar-en-tu-primera-sesion", title: "Qué esperar en tu primera sesión", date: "2026-05-09", tag: "Primera sesión" },
  { slug: "que-pasa-en-una-sesion", title: "Qué pasa realmente en una sesión", date: "2026-05-09", tag: "Sesión" },
  { slug: "trabajo-corporal-despues-del-embarazo", title: "Trabajo corporal después del embarazo", date: "2026-05-09", tag: "Postparto" },
  { slug: "rolfing-vs-fisioterapia-diferencia", title: "Rolfing vs fisioterapia: cuál es la diferencia", date: "2026-05-09", tag: "Rolfing" },
  { slug: "por-que-trabajo-por-proceso", title: "Por qué trabajo por proceso", date: "2026-05-09", tag: "Proceso" },
  { slug: "lo-que-tus-manos-pueden-leer", title: "Lo que tus manos pueden leer", date: "2026-05-09", tag: "Trabajo corporal" },
  { slug: "20-anos-formandome-en-20-paises", title: "20 años formándome en 20 países", date: "2026-05-09", tag: "Formación" },
  { slug: "trabajo-energetico-no-es-lo-que-piensas", title: "El trabajo energético no es lo que piensas", date: "2026-05-09", tag: "Energía" },
  { slug: "el-cuerpo-no-esta-roto-esta-compensando", title: "El cuerpo no está roto. Está compensando", date: "2026-05-15", tag: "Fundamentos" },
  { slug: "siempre-buscar-el-punto-de-origen", title: "Siempre hay que buscar el punto de origen", date: "2026-05-19", tag: "Fundamentos" },
  { slug: "compensar-no-es-curar-v2", title: "Compensar no es curar", date: "2026-05-22", tag: "Fundamentos" },
  { slug: "el-cuerpo-decide-antes-que-la-mente", title: "El cuerpo decide antes que la mente", date: "2026-05-26", tag: "Fundamentos" },
  { slug: "el-cuerpo-organiza-supervivencia", title: "El cuerpo organiza la supervivencia antes que la comodidad", date: "2026-05-29", tag: "Fundamentos" },
  { slug: "la-precision-siempre-gana-a-la-fuerza", title: "La precisión siempre gana a la fuerza", date: "2026-06-02", tag: "Fundamentos" },
  { slug: "do-no-harm", title: "Primero, no dañar", date: "2026-06-05", tag: "Fundamentos" },
  { slug: "la-diferencia-entre-reorganizar-y-reparar", title: "La diferencia entre reorganizar y reparar", date: "2026-06-09", tag: "Fundamentos" },
  { slug: "el-problema-no-es-el-estres", title: "El problema no es el estrés. Es no salir de él.", date: "2026-06-12", tag: "Sistema nervioso" },
  { slug: "tu-sistema-nervioso-no-distingue-amenaza", title: "Tu sistema nervioso no distingue entre una amenaza real y una anticipada", date: "2026-06-16", tag: "Sistema nervioso" },
  { slug: "no-estan-cansadas-estan-compensando", title: "La mayoría de personas no están cansadas. Están compensando.", date: "2026-06-19", tag: "Sistema nervioso" },
  { slug: "vivir-en-naranja", title: "Vivir en naranja parece normal hasta que sales de ahí", date: "2026-06-23", tag: "Sistema nervioso" },
  { slug: "el-cuerpo-recuerda-lo-que-la-mente-olvido", title: "El cuerpo recuerda lo que la mente ya olvidó", date: "2026-06-26", tag: "Sistema nervioso" },
  { slug: "la-ram-del-sistema-nervioso", title: "La RAM de tu sistema nervioso", date: "2026-06-30", tag: "Sistema nervioso" },
  { slug: "ansiedad-sin-causa", title: "Ansiedad sin causa aparente", date: "2026-07-03", tag: "Sistema nervioso" },
  { slug: "el-cuerpo-necesita-seguridad-no-control", title: "El cuerpo no necesita más control. Necesita seguridad", date: "2026-07-07", tag: "Sistema nervioso" },
  { slug: "tu-respiracion-cambia-antes", title: "Tu respiración cambia antes que tus pensamientos", date: "2026-07-10", tag: "Sistema nervioso" },
  { slug: "el-alivio-no-es-expansion", title: "El alivio no es expansión", date: "2026-07-14", tag: "Sistema nervioso" },
  { slug: "la-regulacion-no-es-relajacion", title: "La regulación no es relajación", date: "2026-07-17", tag: "Sistema nervioso" },
  { slug: "intensidad-e-invasion-no-son-lo-mismo", title: "Intensidad e invasión no son lo mismo", date: "2026-07-21", tag: "Trabajo corporal" },
  { slug: "la-fascia-real", title: "Lo que nadie te cuenta sobre la fascia", date: "2026-07-24", tag: "Trabajo corporal" },
  { slug: "tus-organos-se-mueven", title: "Tus órganos necesitan moverse", date: "2026-07-28", tag: "Trabajo corporal" },
  { slug: "el-dolor-rara-vez-empieza-donde-duele", title: "El dolor rara vez empieza donde duele", date: "2026-07-31", tag: "Trabajo corporal" },
  { slug: "por-que-algunas-lesiones-nunca-se-curan", title: "Por qué algunas lesiones nunca terminan de curarse", date: "2026-08-04", tag: "Trabajo corporal" },
  { slug: "el-cuerpo-cambia-cuando-deja-de-defenderse", title: "El cuerpo cambia cuando deja de defenderse", date: "2026-08-07", tag: "Trabajo corporal" },
  { slug: "rolfing-europa-vs-usa-v2", title: "Rolfing en Europa vs USA", date: "2026-08-11", tag: "Rolfing" },
  { slug: "la-espalda-casi-nunca-es-el-problema", title: "La espalda casi nunca es el problema", date: "2026-08-14", tag: "Trabajo corporal" },
  { slug: "siete-anos-de-dolor", title: "Siete años de dolor", date: "2026-08-18", tag: "Mi historia" },
  { slug: "el-dia-que-deje-de-ser-pinocho-v2", title: "El día que dejé de ser Pinocho", date: "2026-08-21", tag: "Mi historia" },
  { slug: "los-ojos-del-campesino-v2", title: "Los ojos del campesino", date: "2026-08-25", tag: "Mi historia" },
  { slug: "la-curandera-de-robleda", title: "La mujer que leía la espalda como braille", date: "2026-08-28", tag: "Mi historia" },
  { slug: "roncesvalles-morir-la-coruna-vivir-v2", title: "Roncesvalles morir, La Coruña vivir", date: "2026-09-01", tag: "Mi historia" },
  { slug: "lo-que-aprendi-en-kamalaya", title: "Lo que aprendí en Kamalaya", date: "2026-09-04", tag: "Mi historia" },
  { slug: "lo-que-aprendi-tocando-miles-de-cuerpos", title: "Lo que aprendí tocando miles de cuerpos", date: "2026-09-08", tag: "Mi historia" },
  { slug: "cuando-entendi-que-la-tecnica-me-limitaba", title: "Cuando entendí que la técnica me limitaba", date: "2026-09-11", tag: "Mi historia" },
  { slug: "ceos-y-sistema-nervioso", title: "CEOs y sistema nervioso", date: "2026-09-15", tag: "Alto rendimiento" },
  { slug: "el-coste-fisiologico-de-sostener-presion", title: "El coste fisiológico de sostener presión", date: "2026-09-18", tag: "Alto rendimiento" },
  { slug: "rendimiento-sostenible", title: "Rendimiento sostenible", date: "2026-09-22", tag: "Alto rendimiento" },
  { slug: "viajes-jet-lag-deuda-nerviosa", title: "Viajes, jet lag y deuda nerviosa", date: "2026-09-25", tag: "Alto rendimiento" },
  { slug: "el-cuerpo-no-fue-disenado-siempre-disponible", title: "El cuerpo no fue diseñado para vivir siempre disponible", date: "2026-09-29", tag: "Alto rendimiento" },
  { slug: "tu-cuerpo-no-necesita-mas-fuerza", title: "Tu cuerpo no necesita más fuerza", date: "2026-10-02", tag: "Manifiesto" },
  { slug: "cuerpos-pidiendo-permiso-para-descansar", title: "Hay cuerpos que llevan años pidiendo permiso para descansar", date: "2026-10-06", tag: "Manifiesto" },
  { slug: "el-sintoma-no-es-el-enemigo", title: "El síntoma no es el enemigo", date: "2026-10-09", tag: "Manifiesto" },
  { slug: "el-cuerpo-siempre-intenta-protegerte", title: "El cuerpo siempre intenta protegerte", date: "2026-10-13", tag: "Manifiesto" },
  { slug: "tu-sistema-nervioso-escucha-todo", title: "Tu sistema nervioso escucha todo", date: "2026-10-16", tag: "Manifiesto" },
  { slug: "el-cuerpo-sabe-antes-que-tu", title: "El cuerpo sabe antes que tú", date: "2026-10-20", tag: "Manifiesto" },
  { slug: "personas-en-defensa-desde-hace-decadas", title: "Hay personas que viven en defensa desde hace décadas", date: "2026-10-23", tag: "Manifiesto" },
  { slug: "la-tension-cambia-quien-crees-que-eres", title: "La tensión sostenida cambia quién crees que eres", date: "2026-10-27", tag: "Manifiesto" }
];

export const metadata = {
  title: "Blog — Ferran Moreno",
  description: "Artículos sobre trabajo corporal, regulación del sistema nervioso, Rolfing y reorganización estructural.",
};

export default function BlogPage() {
  const today = new Date().toISOString().split("T")[0];
  const articles = allArticles.filter((a) => a.date <= today);

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
            <span style={{ color: "var(--border-subtle)" }}>|</span>
            <Link href="/en" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">EN</Link>
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
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
