import Link from "next/link";

type Article = { slug: string; title: string; tag: string };

const articlesEs: Record<string, Article[]> = {
  "por-que-tomas-malas-decisiones-cuando-estas-estresado": [
    { slug: "que-es-la-regulacion-del-sistema-nervioso", title: "Qué es la regulación del sistema nervioso y por qué importa", tag: "Regulación" },
    { slug: "ansiedad-sin-causa-aparente", title: "Ansiedad sin causa aparente: cuando el cuerpo pide atención", tag: "Sistema nervioso" },
  ],
  "dolor-cronico-sin-solucion-cuando-el-problema-no-es-donde-duele": [
    { slug: "dolor-de-espalda-cronico-origen", title: "Dolor de espalda crónico: por qué el origen casi nunca está en la espalda", tag: "Dolor crónico" },
    { slug: "cuando-el-cuerpo-compensa-mas-tecnica-no-lo-soluciona", title: "Cuando el cuerpo compensa durante años, más técnica no lo soluciona", tag: "Compensación" },
  ],
  "que-es-la-regulacion-del-sistema-nervioso": [
    { slug: "por-que-tomas-malas-decisiones-cuando-estas-estresado", title: "Por qué tomas malas decisiones cuando estás estresado", tag: "Sistema nervioso" },
    { slug: "ansiedad-sin-causa-aparente", title: "Ansiedad sin causa aparente: cuando el cuerpo pide atención", tag: "Sistema nervioso" },
  ],
  "rolfing-duele-la-verdad": [
    { slug: "rolfing-vs-fisioterapia-diferencia", title: "Rolfing vs fisioterapia: cuál es la diferencia", tag: "Rolfing" },
    { slug: "diferencia-entre-intensidad-e-invasion", title: "La diferencia entre intensidad e invasión", tag: "Trabajo corporal" },
  ],
  "cuando-el-cuerpo-compensa-mas-tecnica-no-lo-soluciona": [
    { slug: "compensar-no-es-curar", title: "Compensar no es curar", tag: "Compensación" },
    { slug: "tu-cuerpo-no-esta-roto", title: "Tu cuerpo no está roto. Está mal organizado", tag: "Reorganización" },
  ],
  "no-necesitas-entender-necesitas-estar-bien": [
    { slug: "el-topo-mecanismo-mental", title: "El topo: el mecanismo mental que bloquea tu cuerpo", tag: "Proceso" },
    { slug: "por-que-trabajo-por-proceso", title: "Por qué trabajo por proceso y no por sesiones sueltas", tag: "Proceso" },
  ],
  "que-esperar-en-tu-primera-sesion": [
    { slug: "que-pasa-en-una-sesion", title: "Qué pasa realmente en una sesión", tag: "Sesión" },
    { slug: "rolfing-duele-la-verdad", title: "¿El Rolfing duele? La verdad sobre el trabajo corporal profundo", tag: "Rolfing" },
  ],
  "dolor-de-espalda-cronico-origen": [
    { slug: "dolor-cronico-sin-solucion-cuando-el-problema-no-es-donde-duele", title: "Dolor crónico sin solución: cuando el problema no es donde duele", tag: "Dolor crónico" },
    { slug: "compensar-no-es-curar", title: "Compensar no es curar", tag: "Compensación" },
  ],
  "rolfing-vs-fisioterapia-diferencia": [
    { slug: "rolfing-duele-la-verdad", title: "¿El Rolfing duele? La verdad sobre el trabajo corporal profundo", tag: "Rolfing" },
    { slug: "rolfing-europa-vs-usa", title: "Rolfing en Europa vs USA: dos escuelas, dos resultados", tag: "Rolfing" },
  ],
  "que-pasa-en-una-sesion": [
    { slug: "que-esperar-en-tu-primera-sesion", title: "Qué esperar en tu primera sesión", tag: "Primera sesión" },
    { slug: "diferencia-entre-intensidad-e-invasion", title: "La diferencia entre intensidad e invasión", tag: "Trabajo corporal" },
  ],
  "ansiedad-sin-causa-aparente": [
    { slug: "que-es-la-regulacion-del-sistema-nervioso", title: "Qué es la regulación del sistema nervioso", tag: "Regulación" },
    { slug: "viajes-jet-lag-sistema-nervioso", title: "Viajes, jet lag y presión: cómo el sistema nervioso paga la factura", tag: "Sistema nervioso" },
  ],
  "trabajo-corporal-despues-del-embarazo": [
    { slug: "tu-cuerpo-no-esta-roto", title: "Tu cuerpo no está roto. Está mal organizado", tag: "Reorganización" },
    { slug: "que-esperar-en-tu-primera-sesion", title: "Qué esperar en tu primera sesión", tag: "Primera sesión" },
  ],
  "el-topo-mecanismo-mental": [
    { slug: "no-necesitas-entender-necesitas-estar-bien", title: "No necesitas entender. Necesitas estar bien", tag: "Proceso" },
    { slug: "por-que-trabajo-por-proceso", title: "Por qué trabajo por proceso y no por sesiones sueltas", tag: "Proceso" },
  ],
  "lesiones-deportivas-que-no-se-curan": [
    { slug: "compensar-no-es-curar", title: "Compensar no es curar", tag: "Compensación" },
    { slug: "dolor-cronico-sin-solucion-cuando-el-problema-no-es-donde-duele", title: "Dolor crónico sin solución: cuando el problema no es donde duele", tag: "Dolor crónico" },
  ],
  "tu-cuerpo-no-esta-roto": [
    { slug: "cuando-el-cuerpo-compensa-mas-tecnica-no-lo-soluciona", title: "Cuando el cuerpo compensa, más técnica no lo soluciona", tag: "Compensación" },
    { slug: "por-que-trabajo-por-proceso", title: "Por qué trabajo por proceso y no por sesiones sueltas", tag: "Proceso" },
  ],
  "20-anos-formandome-en-20-paises": [
    { slug: "rolfing-europa-vs-usa", title: "Rolfing en Europa vs USA: dos escuelas, dos resultados", tag: "Rolfing" },
    { slug: "trabajo-energetico-no-es-lo-que-piensas", title: "El trabajo energético no es lo que piensas", tag: "Energía" },
  ],
  "trabajo-energetico-no-es-lo-que-piensas": [
    { slug: "20-anos-formandome-en-20-paises", title: "20 años formándome en 20 países: qué aprendí", tag: "Formación" },
    { slug: "que-pasa-en-una-sesion", title: "Qué pasa realmente en una sesión", tag: "Sesión" },
  ],
  "rolfing-europa-vs-usa": [
    { slug: "rolfing-duele-la-verdad", title: "¿El Rolfing duele?", tag: "Rolfing" },
    { slug: "20-anos-formandome-en-20-paises", title: "20 años formándome en 20 países", tag: "Formación" },
  ],
  "diferencia-entre-intensidad-e-invasion": [
    { slug: "rolfing-duele-la-verdad", title: "¿El Rolfing duele?", tag: "Rolfing" },
    { slug: "que-pasa-en-una-sesion", title: "Qué pasa realmente en una sesión", tag: "Sesión" },
  ],
  "por-que-trabajo-por-proceso": [
    { slug: "tu-cuerpo-no-esta-roto", title: "Tu cuerpo no está roto. Está mal organizado", tag: "Reorganización" },
    { slug: "que-esperar-en-tu-primera-sesion", title: "Qué esperar en tu primera sesión", tag: "Primera sesión" },
  ],
  "compensar-no-es-curar": [
    { slug: "cuando-el-cuerpo-compensa-mas-tecnica-no-lo-soluciona", title: "Cuando el cuerpo compensa, más técnica no lo soluciona", tag: "Compensación" },
    { slug: "dolor-de-espalda-cronico-origen", title: "Dolor de espalda crónico: el origen no está en la espalda", tag: "Dolor crónico" },
  ],
  "por-que-los-ceos-necesitan-trabajo-corporal": [
    { slug: "rendimiento-sostenible-cuerpo-como-infraestructura", title: "Rendimiento sostenible: el cuerpo como infraestructura", tag: "Alto rendimiento" },
    { slug: "por-que-tomas-malas-decisiones-cuando-estas-estresado", title: "Por qué tomas malas decisiones cuando estás estresado", tag: "Sistema nervioso" },
  ],
  "rendimiento-sostenible-cuerpo-como-infraestructura": [
    { slug: "por-que-los-ceos-necesitan-trabajo-corporal", title: "Por qué los CEOs necesitan trabajo corporal", tag: "Alto rendimiento" },
    { slug: "viajes-jet-lag-sistema-nervioso", title: "Viajes, jet lag y presión", tag: "Sistema nervioso" },
  ],
  "viajes-jet-lag-sistema-nervioso": [
    { slug: "que-es-la-regulacion-del-sistema-nervioso", title: "Qué es la regulación del sistema nervioso", tag: "Regulación" },
    { slug: "rendimiento-sostenible-cuerpo-como-infraestructura", title: "Rendimiento sostenible: el cuerpo como infraestructura", tag: "Alto rendimiento" },
  ],
};

const articlesEn: Record<string, Article[]> = {
  "why-you-make-bad-decisions-when-stressed": [
    { slug: "what-is-nervous-system-regulation", title: "What is nervous system regulation and why it matters", tag: "Regulation" },
    { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause", tag: "Nervous system" },
  ],
  "chronic-pain-when-the-problem-isnt-where-it-hurts": [
    { slug: "chronic-back-pain-origin", title: "Chronic back pain: why the cause is almost never your back", tag: "Chronic pain" },
    { slug: "when-your-body-compensates-more-technique-wont-fix-it", title: "When your body compensates, more technique won't fix it", tag: "Compensation" },
  ],
  "what-is-nervous-system-regulation": [
    { slug: "why-you-make-bad-decisions-when-stressed", title: "Why you make bad decisions when stressed", tag: "Nervous system" },
    { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause", tag: "Nervous system" },
  ],
  "does-rolfing-hurt-the-truth": [
    { slug: "rolfing-vs-physiotherapy-difference", title: "Rolfing vs physiotherapy: what's the difference", tag: "Rolfing" },
    { slug: "difference-between-intensity-and-invasion", title: "The difference between intensity and invasion", tag: "Bodywork" },
  ],
  "when-your-body-compensates-more-technique-wont-fix-it": [
    { slug: "compensating-isnt-healing", title: "Compensating isn't healing", tag: "Compensation" },
    { slug: "your-body-isnt-broken", title: "Your body isn't broken. It's disorganized", tag: "Reorganization" },
  ],
  "you-dont-need-to-understand-you-need-to-be-well": [
    { slug: "the-mole-mental-mechanism", title: "The mole: the mental mechanism that blocks your body", tag: "Process" },
    { slug: "why-i-work-by-process-not-single-sessions", title: "Why I work by process, not single sessions", tag: "Process" },
  ],
  "what-to-expect-first-session": [
    { slug: "what-really-happens-in-a-session", title: "What really happens in a session", tag: "Session" },
    { slug: "does-rolfing-hurt-the-truth", title: "Does Rolfing hurt? The truth", tag: "Rolfing" },
  ],
  "chronic-back-pain-origin": [
    { slug: "chronic-pain-when-the-problem-isnt-where-it-hurts", title: "Chronic pain: when the problem isn't where it hurts", tag: "Chronic pain" },
    { slug: "compensating-isnt-healing", title: "Compensating isn't healing", tag: "Compensation" },
  ],
  "rolfing-vs-physiotherapy-difference": [
    { slug: "does-rolfing-hurt-the-truth", title: "Does Rolfing hurt?", tag: "Rolfing" },
    { slug: "european-rolfing-vs-american", title: "European Rolfing vs American", tag: "Rolfing" },
  ],
  "what-really-happens-in-a-session": [
    { slug: "what-to-expect-first-session", title: "What to expect in your first session", tag: "First session" },
    { slug: "difference-between-intensity-and-invasion", title: "The difference between intensity and invasion", tag: "Bodywork" },
  ],
  "anxiety-without-apparent-cause": [
    { slug: "what-is-nervous-system-regulation", title: "What is nervous system regulation", tag: "Regulation" },
    { slug: "travel-jet-lag-nervous-system", title: "Travel, jet lag and pressure", tag: "Nervous system" },
  ],
  "bodywork-after-pregnancy": [
    { slug: "your-body-isnt-broken", title: "Your body isn't broken. It's disorganized", tag: "Reorganization" },
    { slug: "what-to-expect-first-session", title: "What to expect in your first session", tag: "First session" },
  ],
  "the-mole-mental-mechanism": [
    { slug: "you-dont-need-to-understand-you-need-to-be-well", title: "You don't need to understand. You need to be well", tag: "Process" },
    { slug: "why-i-work-by-process-not-single-sessions", title: "Why I work by process", tag: "Process" },
  ],
  "sports-injuries-that-wont-heal": [
    { slug: "compensating-isnt-healing", title: "Compensating isn't healing", tag: "Compensation" },
    { slug: "chronic-pain-when-the-problem-isnt-where-it-hurts", title: "Chronic pain: when the problem isn't where it hurts", tag: "Chronic pain" },
  ],
  "your-body-isnt-broken": [
    { slug: "when-your-body-compensates-more-technique-wont-fix-it", title: "When your body compensates, more technique won't fix it", tag: "Compensation" },
    { slug: "why-i-work-by-process-not-single-sessions", title: "Why I work by process", tag: "Process" },
  ],
  "20-years-training-across-20-countries": [
    { slug: "european-rolfing-vs-american", title: "European Rolfing vs American", tag: "Rolfing" },
    { slug: "energy-work-isnt-what-you-think", title: "Energy work isn't what you think", tag: "Energy" },
  ],
  "energy-work-isnt-what-you-think": [
    { slug: "20-years-training-across-20-countries", title: "20 years training across 20 countries", tag: "Training" },
    { slug: "what-really-happens-in-a-session", title: "What really happens in a session", tag: "Session" },
  ],
  "european-rolfing-vs-american": [
    { slug: "does-rolfing-hurt-the-truth", title: "Does Rolfing hurt?", tag: "Rolfing" },
    { slug: "20-years-training-across-20-countries", title: "20 years training across 20 countries", tag: "Training" },
  ],
  "difference-between-intensity-and-invasion": [
    { slug: "does-rolfing-hurt-the-truth", title: "Does Rolfing hurt?", tag: "Rolfing" },
    { slug: "what-really-happens-in-a-session", title: "What really happens in a session", tag: "Session" },
  ],
  "why-i-work-by-process-not-single-sessions": [
    { slug: "your-body-isnt-broken", title: "Your body isn't broken. It's disorganized", tag: "Reorganization" },
    { slug: "what-to-expect-first-session", title: "What to expect in your first session", tag: "First session" },
  ],
  "compensating-isnt-healing": [
    { slug: "when-your-body-compensates-more-technique-wont-fix-it", title: "When your body compensates, more technique won't fix it", tag: "Compensation" },
    { slug: "chronic-back-pain-origin", title: "Chronic back pain: the real cause", tag: "Chronic pain" },
  ],
  "why-ceos-need-bodywork": [
    { slug: "sustainable-performance-body-as-infrastructure", title: "Sustainable performance: the body as infrastructure", tag: "High performance" },
    { slug: "why-you-make-bad-decisions-when-stressed", title: "Why you make bad decisions when stressed", tag: "Nervous system" },
  ],
  "sustainable-performance-body-as-infrastructure": [
    { slug: "why-ceos-need-bodywork", title: "Why CEOs need bodywork", tag: "High performance" },
    { slug: "travel-jet-lag-nervous-system", title: "Travel, jet lag and pressure", tag: "Nervous system" },
  ],
  "travel-jet-lag-nervous-system": [
    { slug: "what-is-nervous-system-regulation", title: "What is nervous system regulation", tag: "Regulation" },
    { slug: "sustainable-performance-body-as-infrastructure", title: "Sustainable performance: the body as infrastructure", tag: "High performance" },
  ],
};

export function RelatedArticles({ slug, lang = "es" }: { slug: string; lang?: "es" | "en" }) {
  const map = lang === "es" ? articlesEs : articlesEn;
  const related = map[slug];
  if (!related) return null;
  const prefix = lang === "es" ? "/blog" : "/en/blog";
  const label = lang === "es" ? "Sigue leyendo" : "Keep reading";
  const wallLabel = lang === "es" ? "Ver testimonios" : "Read testimonials";
  const wallHref = lang === "es" ? "/wall-of-trust" : "/en/wall-of-trust";

  return (
    <div className="mt-16 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="text-[10px] uppercase tracking-[0.15em] mb-6" style={{ color: "var(--text-secondary)" }}>
        {label}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {related.map((a) => (
          <Link key={a.slug} href={`${prefix}/${a.slug}`} className="group rounded-2xl p-5" style={{ border: "1px solid var(--border-subtle)" }}>
            <span className="text-[10px] uppercase tracking-[0.15em] block mb-2" style={{ color: "var(--text-secondary)" }}>{a.tag}</span>
            <span className="text-[15px] font-semibold tracking-tight group-hover:opacity-70 transition">{a.title}</span>
          </Link>
        ))}
      </div>
      <div className="mt-6">
        <Link href={wallHref} className="text-[11px] uppercase tracking-[0.15em] transition hover:opacity-50" style={{ color: "var(--text-secondary)" }}>
          {wallLabel} &rarr;
        </Link>
      </div>
    </div>
  );
}
