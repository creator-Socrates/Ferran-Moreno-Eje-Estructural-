export const dynamic = "force-dynamic";

import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";

const allArticles = [
  // --- Semana 1: 12-15 mayo 2026 (ya publicados) ---
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
    excerpt: "La fama del Rolfing doloroso tiene una historia. El Rolfing bien hecho no tiene por qué doler.",
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
  // --- Semana 2: 15-19 mayo ---
  {
    slug: "que-esperar-en-tu-primera-sesion",
    title: "Qué esperar en tu primera sesión de trabajo corporal",
    excerpt: "Qué pasa cuando alguien viene por primera vez. Sin protocolos, sin fórmulas. Cada sesión es única.",
    date: "2026-05-15",
    tag: "Primera sesión",
  },
  {
    slug: "dolor-de-espalda-cronico-origen",
    title: "Dolor de espalda crónico: por qué el origen casi nunca está en la espalda",
    excerpt: "La espalda es donde duele, rara vez donde está el problema. Restricciones viscerales, cicatrices y patrones posturales son las causas reales.",
    date: "2026-05-19",
    tag: "Dolor crónico",
  },
  // --- Semana 3: 22-26 mayo ---
  {
    slug: "rolfing-vs-fisioterapia-diferencia",
    title: "Rolfing vs fisioterapia: cuál es la diferencia",
    excerpt: "No se trata de cuál es mejor. Se trata de qué hace cada una. Dos preguntas distintas, dos alcances distintos.",
    date: "2026-05-22",
    tag: "Rolfing",
  },
  {
    slug: "que-pasa-en-una-sesion",
    title: "«Entré doblado y salí recto» — qué pasa realmente en una sesión",
    excerpt: "Testimonios reales de personas que entraron con un problema y salieron distintas.",
    date: "2026-05-26",
    tag: "Sesión",
  },
  // --- Semana 4: 29 mayo - 2 junio ---
  {
    slug: "ansiedad-sin-causa-aparente",
    title: "Ansiedad sin causa aparente: cuando el cuerpo pide atención",
    excerpt: "Lo has revisado todo y no hay causa clara. Pero tu cuerpo está en alerta constante. No es psicológico: es fisiológico.",
    date: "2026-05-29",
    tag: "Sistema nervioso",
  },
  {
    slug: "trabajo-corporal-despues-del-embarazo",
    title: "Trabajo corporal después del embarazo",
    excerpt: "El embarazo reorganiza todo el cuerpo. Abdominales y suelo pélvico aislados no son suficientes.",
    date: "2026-06-02",
    tag: "Postparto",
  },
  // --- Semana 5: 5-9 junio ---
  {
    slug: "el-topo-mecanismo-mental",
    title: "El topo: el mecanismo mental que bloquea tu cuerpo",
    excerpt: "Tu mente analiza antes de recibir. Juzga antes de sentir. Ese mecanismo es el mayor obstáculo para el cambio.",
    date: "2026-06-05",
    tag: "Proceso",
  },
  {
    slug: "lesiones-deportivas-que-no-se-curan",
    title: "Lesiones deportivas que no se curan: el patrón que nadie mira",
    excerpt: "El tejido sanó pero la lesión sigue. El problema no es la estructura: es el patrón de compensación.",
    date: "2026-06-09",
    tag: "Deporte",
  },
  // --- Semana 6: 12-16 junio ---
  {
    slug: "tu-cuerpo-no-esta-roto",
    title: "Tu cuerpo no está roto. Está mal organizado",
    excerpt: "La diferencia entre roto y desorganizado es enorme. Lo roto necesita reparación. Lo desorganizado necesita reorganización.",
    date: "2026-06-12",
    tag: "Reorganización",
  },
  {
    slug: "20-anos-formandome-en-20-paises",
    title: "20 años formándome en 20 países: qué aprendí",
    excerpt: "No es un currículum. Es lo que cada lugar me enseñó. Munich, Japón, India, México, Tailandia, USA.",
    date: "2026-06-16",
    tag: "Formación",
  },
  // --- Semana 7: 19-23 junio ---
  {
    slug: "trabajo-energetico-no-es-lo-que-piensas",
    title: "El trabajo energético no es lo que piensas",
    excerpt: "Cuando oyes «trabajo energético» piensas en incienso y cristales. Eso no es lo que hago.",
    date: "2026-06-19",
    tag: "Energía",
  },
  {
    slug: "rolfing-europa-vs-usa",
    title: "Rolfing en Europa vs USA: dos escuelas, dos resultados",
    excerpt: "Dos linajes de la misma fuente. Europa integró la osteopatía francesa y el trabajo con el sistema nervioso.",
    date: "2026-06-23",
    tag: "Rolfing",
  },
  // --- Semana 8: 26-30 junio ---
  {
    slug: "diferencia-entre-intensidad-e-invasion",
    title: "La diferencia entre intensidad e invasión",
    excerpt: "Intenso significa que el cuerpo está recibiendo algo profundo. Invasivo significa que estás forzando. El cuerpo sabe la diferencia.",
    date: "2026-06-26",
    tag: "Trabajo corporal",
  },
  {
    slug: "por-que-trabajo-por-proceso",
    title: "Por qué trabajo por proceso y no por sesiones sueltas",
    excerpt: "Una sesión puede cambiar cómo te sientes hoy. Un proceso cambia cómo está organizado tu cuerpo.",
    date: "2026-06-30",
    tag: "Proceso",
  },
  // --- Semana 9: 3-7 julio ---
  {
    slug: "compensar-no-es-curar",
    title: "Compensar no es curar",
    excerpt: "Tu cuerpo es brillante compensando. Eso no es un cumplido: es una advertencia. Cada compensación tiene un coste.",
    date: "2026-07-03",
    tag: "Compensación",
  },
  {
    slug: "por-que-los-ceos-necesitan-trabajo-corporal",
    title: "Por qué los CEOs necesitan trabajo corporal",
    excerpt: "Optimizas agenda, equipo, estrategia. Pero casi nadie optimiza el cuerpo como infraestructura.",
    date: "2026-07-07",
    tag: "Alto rendimiento",
  },
  // --- Semana 10: 10-14 julio ---
  {
    slug: "rendimiento-sostenible-cuerpo-como-infraestructura",
    title: "Rendimiento sostenible: el cuerpo como infraestructura",
    excerpt: "No se trata de trabajar menos. Se trata de que el cuerpo tenga capacidad de recuperarse de lo que le pides.",
    date: "2026-07-10",
    tag: "Alto rendimiento",
  },
  {
    slug: "viajes-jet-lag-sistema-nervioso",
    title: "Viajes, jet lag y presión: cómo el sistema nervioso paga la factura",
    excerpt: "Cada vuelo altera el ritmo circadiano. Cada zona horaria obliga al sistema nervioso a recalibrarse. La deuda se acumula en silencio.",
    date: "2026-07-14",
    tag: "Sistema nervioso",
  },
  // --- Semana 11: 17-31 julio (Mi historia) ---
  {
    slug: "diez-anos-de-dolor-una-sesion",
    title: "Diez años de dolor que se resolvieron en una sesión",
    excerpt: "A los 17, una lesión de taekwondo me dejó sin poder funcionar durante una década. Un día, una sola corrección lo cambió todo.",
    date: "2026-07-17",
    tag: "Mi historia",
  },
  {
    slug: "los-ojos-del-campesino",
    title: "Los ojos del campesino: cuando el éxito dejó de significar lo que pensaba",
    excerpt: "Vi la foto de un campesino en un periódico y supe que quería tener esa serenidad de mayor. Dejé mi carrera corporativa.",
    date: "2026-07-21",
    tag: "Mi historia",
  },
  {
    slug: "la-mujer-que-leia-la-espalda",
    title: "La mujer que leía la espalda como si fuera braille",
    excerpt: "En Robleda, una curandera que aprendió colocando huesos de cabras leía la historia de tu cuerpo con los dedos.",
    date: "2026-07-24",
    tag: "Mi historia",
  },
  {
    slug: "el-dia-que-deje-de-ser-pinocho",
    title: "El día que dejé de ser Pinocho",
    excerpt: "Mi cuerpo era un trozo de madera. Hasta que un osteópata tocó una vértebra rotada y sentí por primera vez que el cuerpo está vivo.",
    date: "2026-07-28",
    tag: "Mi historia",
  },
  {
    slug: "roncesvalles-morir-la-coruna-vivir",
    title: "Roncesvalles morir, La Coruña vivir",
    excerpt: "Después de una crisis que me llevó al límite, caminé el Camino de Santiago. En Santiago, algo se cerró y dejé de ser peregrino.",
    date: "2026-07-31",
    tag: "Mi historia",
  },
  // --- Semana 12: 4-7 agosto ---
  {
    slug: "lo-que-nadie-te-cuenta-sobre-la-fascia",
    title: "Lo que nadie te cuenta sobre la fascia",
    excerpt: "La fascia que te enseñan en los libros es tejido muerto. La fascia real es un líquido vivo, transparente, que se reorganiza constantemente.",
    date: "2026-08-04",
    tag: "Trabajo corporal",
  },
  {
    slug: "tus-organos-necesitan-moverse",
    title: "Tus órganos necesitan moverse",
    excerpt: "La fisiología de cada órgano depende de su movimiento. Cuando un órgano pierde motilidad, todo el sistema lo nota.",
    date: "2026-08-07",
    tag: "Trabajo corporal",
  },
  // --- Semana 13: 11-14 agosto ---
  {
    slug: "lo-que-tus-manos-pueden-leer",
    title: "Lo que tus manos pueden leer",
    excerpt: "Las manos entrenadas detectan lo que las máquinas no ven. Escaneo térmico, palpación visceral, diagnóstico manual: el oficio de escuchar con las manos.",
    date: "2026-08-11",
    tag: "Trabajo corporal",
  },
  {
    slug: "cuando-la-tecnica-te-limita",
    title: "Cuando la técnica te limita: por qué dejé de forzar después de 20 años",
    excerpt: "Después de 20 años aprendiendo técnicas, descubrí que la técnica puede ser el mayor obstáculo. Observar y permitir produce más cambio que forzar.",
    date: "2026-08-14",
    tag: "Proceso",
  },
  // --- Semana 14: 18 agosto ---
  {
    slug: "la-ram-de-tu-sistema-nervioso",
    title: "La RAM de tu sistema nervioso: por qué la voluntad no funciona",
    excerpt: "No es falta de voluntad. Es que tu sistema nervioso no tiene ancho de banda disponible. Primero libera espacio, después el cambio ocurre solo.",
    date: "2026-08-18",
    tag: "Sistema nervioso",
  },
  // --- Semana 15: 21-25 agosto ---
  {
    slug: "sostener-tu-luz",
    title: "Sostener tu luz: por qué imponerte es la estrategia equivocada",
    excerpt: "No tienes por qué imponerte. Si sostienes tu luz, las cosas se ordenan solas.",
    date: "2026-08-21",
    tag: "Alto rendimiento",
  },
  {
    slug: "la-sombra-te-hace-olvidar",
    title: "La sombra te hace olvidar que alguna vez estuviste bien",
    excerpt: "Cuando la sombra domina, no puedes recordar tus momentos de fuerza. Crea amnesia selectiva para tu propio bienestar.",
    date: "2026-08-25",
    tag: "Proceso",
  },
  // --- Semana 16: 28 agosto - 1 septiembre ---
  {
    slug: "las-casetes-mentales",
    title: "Las casetes mentales que recrean tu sufrimiento",
    excerpt: "Son como casetes que te repites. Cada vez que las pones, recrean el sufrimiento. Y algunas ni siquiera son tuyas.",
    date: "2026-08-28",
    tag: "Proceso",
  },
  {
    slug: "el-freno-de-mano-del-cuerpo",
    title: "El freno de mano del cuerpo: por qué forzarte es la peor medicina",
    excerpt: "Cuando haces algo que no le gusta al cuerpo, el cuerpo se defiende. Tira del freno de mano y deja de funcionar.",
    date: "2026-09-01",
    tag: "Trabajo corporal",
  },
  // --- Semana 17: 4-8 septiembre ---
  {
    slug: "manager-o-micromanager-de-tu-vida",
    title: "Manager o micromanager de tu propia vida",
    excerpt: "Cuando microgestiones los problemas de los demás, pierdes la gestión de tu propia vida, felicidad y bienestar.",
    date: "2026-09-04",
    tag: "Proceso",
  },
  {
    slug: "contraccion-o-expansion",
    title: "Contracción o expansión: la única pregunta que necesitas",
    excerpt: "Tu cuerpo se contrae cuando algo no está alineado y se expande cuando sí. Señal binaria, sin interpretación.",
    date: "2026-09-08",
    tag: "Proceso",
  },
  // --- Semana 18: 11-15 septiembre ---
  {
    slug: "las-personas-con-la-mochila",
    title: "Las personas con la mochila: por qué los grupos infelices te arrastran",
    excerpt: "Las personas infelices ejercen una gravedad inconsciente sobre las felices. No es personal. Es automático.",
    date: "2026-09-11",
    tag: "Proceso",
  },
  {
    slug: "del-alivio-a-la-expansion",
    title: "Del alivio a la expansión: tu cuerpo es adicto a la crisis",
    excerpt: "Crisis, tensión, sesión, alivio. Tu cuerpo se acostumbró a ese ciclo. Hay otro: regulación, tratamiento, expansión.",
    date: "2026-09-15",
    tag: "Sistema nervioso",
  },
  // --- Semana 19: 18-22 septiembre ---
  {
    slug: "que-te-diria-tu-yo-del-futuro",
    title: "Qué te diría tu yo de dentro de 20 años",
    excerpt: "Imagina tu yo del futuro. ¿Qué tres consejos te daría? El gap entre lo que dices que quieres y lo que haces genera ansiedad.",
    date: "2026-09-18",
    tag: "Proceso",
  },
  {
    slug: "buscar-el-punto-de-origen",
    title: "Siempre hay que buscar el punto de origen",
    excerpt: "Antes de cualquier intervención, encuentra dónde empezó todo. No donde duele — donde se originó.",
    date: "2026-09-22",
    tag: "Trabajo corporal",
  },
  // --- Semana 20: 25-29 septiembre ---
  {
    slug: "cuando-el-cuerpo-lleva-anos-cayendose",
    title: "Cuando el cuerpo lleva 8 años cayéndose: lo que nadie miró",
    excerpt: "Un hombre de 73 años en silla de ruedas. Múltiples especialistas. Nadie miró el colapso estructural como causa.",
    date: "2026-09-25",
    tag: "Dolor crónico",
  },
  {
    slug: "la-barista-que-lloro",
    title: "La barista que lloró: cuando tu eje cambia lo que te rodea",
    excerpt: "Le sonreí desde mi eje. Ella lloró. Días después me escribió: tu energía me dio fuerza para denunciar.",
    date: "2026-09-29",
    tag: "Energía",
  },
  // --- Semana 21: 2-6 octubre ---
  {
    slug: "no-hay-nada-solo-fisico",
    title: "No hay nada solo físico: cómo los bugs emocionales secuestran tu cuerpo",
    excerpt: "Dolor lumbar que no es del perro. Estómago hinchado por una carta de Hacienda. El cuerpo no separa lo físico de lo emocional.",
    date: "2026-10-02",
    tag: "Sistema nervioso",
  },
  {
    slug: "bara-bala-no-puedes-sentir-sin-creer",
    title: "Bara bala: no puedes sentir sin creer",
    excerpt: "Si digo una palabra que no significa nada, tu cerebro no produce emoción. Cada emoción necesita una creencia que la sostenga.",
    date: "2026-10-06",
    tag: "Proceso",
  },
  // --- Semana 22: 9 octubre ---
  {
    slug: "todo-es-frecuencia",
    title: "Todo es frecuencia: los maestros que me enseñaron a sentir",
    excerpt: "Cada maestro corrigió algo del anterior. Zazen, Rolfing, osteopatía, artes marciales, trabajo energético. Todo es frecuencia.",
    date: "2026-10-09",
    tag: "Formación",
  },
];

export const metadata = {
  title: "Blog — Ferran Moreno",
  description: "Artículos sobre trabajo corporal, regulación del sistema nervioso, dolor crónico y reorganización estructural.",
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
