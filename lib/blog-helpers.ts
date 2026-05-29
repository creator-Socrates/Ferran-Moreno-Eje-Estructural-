export type BlogLang = "es" | "en";

const esToEn: Record<string, string> = {
  "20-anos-formandome-en-20-paises": "20-years-training-across-20-countries",
  "ansiedad-sin-causa": "anxiety-without-apparent-cause",
  "bara-bala-no-puedes-sentir-sin-creer": "bara-bala-you-cant-feel-without-believing",
  "ceos-y-sistema-nervioso": "ceos-and-the-nervous-system",
  "compensar-no-es-curar-v2": "compensating-isnt-healing",
  "contraccion-o-expansion": "contraction-or-expansion",
  "cuando-entendi-que-la-tecnica-me-limitaba": "when-technique-becomes-the-limit",
  "cuerpos-pidiendo-permiso-para-descansar": "bodies-asking-permission-to-rest",
  "do-no-harm": "do-no-harm",
  "el-alivio-no-es-expansion": "relief-isnt-expansion",
  "el-coste-fisiologico-de-sostener-presion": "the-physiological-cost-of-sustained-pressure",
  "el-cuerpo-cambia-cuando-deja-de-defenderse": "the-body-changes-when-it-stops-defending",
  "el-cuerpo-decide-antes-que-la-mente": "the-body-decides-before-the-mind",
  "el-cuerpo-necesita-seguridad-no-control": "the-body-needs-safety-not-control",
  "el-cuerpo-no-esta-roto-esta-compensando": "your-body-isnt-broken-its-compensating",
  "el-cuerpo-no-fue-disenado-siempre-disponible": "the-body-wasnt-designed-to-be-always-available",
  "el-cuerpo-organiza-supervivencia": "the-body-organizes-survival-before-comfort",
  "el-cuerpo-recuerda-lo-que-la-mente-olvido": "the-body-remembers-what-the-mind-forgot",
  "el-cuerpo-sabe-antes-que-tu": "the-body-knows-before-you-do",
  "el-cuerpo-siempre-intenta-protegerte": "the-body-always-tries-to-protect-you",
  "el-dia-que-deje-de-ser-pinocho-v2": "the-day-i-stopped-being-pinocchio",
  "el-dolor-rara-vez-empieza-donde-duele": "pain-rarely-starts-where-it-hurts",
  "el-freno-de-mano-del-cuerpo": "the-bodys-handbrake",
  "el-problema-no-es-el-estres": "the-problem-isnt-stress",
  "el-sintoma-no-es-el-enemigo": "the-symptom-isnt-the-enemy",
  "el-topo-mecanismo-mental": "the-mole-mental-mechanism",
  "intensidad-e-invasion-no-son-lo-mismo": "intensity-and-invasion-arent-the-same",
  "la-barista-que-lloro": "the-barista-who-cried",
  "la-curandera-de-robleda": "the-healer-of-robleda",
  "la-diferencia-entre-reorganizar-y-reparar": "the-difference-between-reorganizing-and-repairing",
  "la-espalda-casi-nunca-es-el-problema": "the-back-is-almost-never-the-problem",
  "la-fascia-real": "what-nobody-tells-you-about-fascia",
  "la-precision-siempre-gana-a-la-fuerza": "precision-always-beats-force",
  "la-ram-del-sistema-nervioso": "the-ram-of-your-nervous-system",
  "la-regulacion-no-es-relajacion": "regulation-isnt-relaxation",
  "la-sombra-te-hace-olvidar": "the-shadow-makes-you-forget",
  "la-tension-cambia-quien-crees-que-eres": "tension-changes-who-you-think-you-are",
  "las-casetes-mentales": "the-mental-cassette-tapes",
  "las-personas-con-la-mochila": "the-people-with-the-sack",
  "lo-que-aprendi-en-kamalaya": "what-i-learned-in-kamalaya",
  "lo-que-aprendi-tocando-miles-de-cuerpos": "what-i-learned-touching-thousands-of-bodies",
  "lo-que-tus-manos-pueden-leer": "what-your-hands-can-read",
  "los-ojos-del-campesino-v2": "the-farmers-eyes",
  "manager-o-micromanager-de-tu-vida": "manager-or-micromanager-of-your-life",
  "no-estan-cansadas-estan-compensando": "not-tired-compensating",
  "no-hace-falta-estar-en-crisis-para-venir": "you-dont-have-to-be-in-crisis-to-come",
  "no-hay-nada-solo-fisico": "nothing-is-just-physical",
  "no-necesitas-entender-necesitas-estar-bien": "you-dont-need-to-understand-you-need-to-be-well",
  "personas-en-defensa-desde-hace-decadas": "people-in-defense-for-decades",
  "por-que-algunas-lesiones-nunca-se-curan": "why-some-injuries-never-fully-heal",
  "por-que-trabajo-por-proceso": "why-i-work-by-process-not-single-sessions",
  "que-esperar-en-tu-primera-sesion": "what-to-expect-first-session",
  "que-pasa-en-una-sesion": "what-really-happens-in-a-session",
  "rendimiento-sostenible": "sustainable-performance",
  "rolfing-europa-vs-usa-v2": "european-rolfing-vs-american",
  "rolfing-vs-fisioterapia-diferencia": "rolfing-vs-physiotherapy-difference",
  "roncesvalles-morir-la-coruna-vivir-v2": "roncesvalles-to-die-coruna-to-live",
  "siempre-buscar-el-punto-de-origen": "always-find-the-point-of-origin",
  "siete-anos-de-dolor": "seven-years-of-pain",
  "sostener-tu-luz": "hold-your-light",
  "todo-es-frecuencia": "everything-is-frequency",
  "trabajo-corporal-despues-del-embarazo": "bodywork-after-pregnancy",
  "trabajo-energetico-no-es-lo-que-piensas": "energy-work-isnt-what-you-think",
  "tu-cuerpo-no-necesita-mas-fuerza": "your-body-doesnt-need-more-force",
  "tu-respiracion-cambia-antes": "your-breathing-changes-first",
  "tu-sistema-nervioso-escucha-todo": "your-nervous-system-hears-everything",
  "tu-sistema-nervioso-no-distingue-amenaza": "your-nervous-system-cant-tell-the-difference",
  "tus-organos-se-mueven": "your-organs-need-to-move",
  "viajes-jet-lag-deuda-nerviosa": "travel-jet-lag-nervous-debt",
  "vivir-en-naranja": "living-in-amber",
  "como-se-define-el-precio-de-una-intervencion": "what-defines-the-price-of-an-intervention",
};

const enToEs = Object.fromEntries(
  Object.entries(esToEn).map(([esSlug, enSlug]) => [enSlug, esSlug]),
) as Record<string, string>;

export function getBlogAlternates(lang: BlogLang, slug: string) {
  const canonical =
    lang === "es" ? `/blog/${slug}` : `/en/blog/${slug}`;

  const counterpart =
    lang === "es" ? esToEn[slug] : enToEs[slug];

  if (!counterpart) {
    return { canonical };
  }

  const esPath = lang === "es" ? canonical : `/blog/${counterpart}`;
  const enPath = lang === "en" ? canonical : `/en/blog/${counterpart}`;

  return {
    canonical,
    languages: {
      es: esPath,
      en: enPath,
      "x-default": esPath,
    },
  };
}

export const redistributedBlogDates: Record<string, string> = {
  "por-que-trabajo-por-proceso": "2026-04-29",
  "why-i-work-by-process-not-single-sessions": "2026-04-29",
  "que-esperar-en-tu-primera-sesion": "2026-04-25",
  "what-to-expect-first-session": "2026-04-25",
  "que-pasa-en-una-sesion": "2026-04-22",
  "what-really-happens-in-a-session": "2026-04-22",
  "rolfing-vs-fisioterapia-diferencia": "2026-04-18",
  "rolfing-vs-physiotherapy-difference": "2026-04-18",
  "trabajo-corporal-despues-del-embarazo": "2026-04-15",
  "bodywork-after-pregnancy": "2026-04-15",
  "lo-que-tus-manos-pueden-leer": "2026-03-28",
  "what-your-hands-can-read": "2026-03-28",
  "20-anos-formandome-en-20-paises": "2026-03-24",
  "20-years-training-across-20-countries": "2026-03-24",
  "todo-es-frecuencia": "2026-03-20",
  "everything-is-frequency": "2026-03-20",
  "trabajo-energetico-no-es-lo-que-piensas": "2026-03-16",
  "energy-work-isnt-what-you-think": "2026-03-16",
  "no-hay-nada-solo-fisico": "2026-03-12",
  "nothing-is-just-physical": "2026-03-12",
  "el-freno-de-mano-del-cuerpo": "2026-03-08",
  "the-bodys-handbrake": "2026-03-08",
  "no-necesitas-entender-necesitas-estar-bien": "2026-02-27",
  "you-dont-need-to-understand-you-need-to-be-well": "2026-02-27",
  "las-casetes-mentales": "2026-02-23",
  "the-mental-cassette-tapes": "2026-02-23",
  "el-topo-mecanismo-mental": "2026-02-19",
  "the-mole-mental-mechanism": "2026-02-19",
  "la-sombra-te-hace-olvidar": "2026-02-15",
  "the-shadow-makes-you-forget": "2026-02-15",
  "contraccion-o-expansion": "2026-02-11",
  "contraction-or-expansion": "2026-02-11",
  "bara-bala-no-puedes-sentir-sin-creer": "2026-02-07",
  "bara-bala-you-cant-feel-without-believing": "2026-02-07",
  "manager-o-micromanager-de-tu-vida": "2026-02-03",
  "manager-or-micromanager-of-your-life": "2026-02-03",
  "la-barista-que-lloro": "2026-01-30",
  "the-barista-who-cried": "2026-01-30",
  "las-personas-con-la-mochila": "2026-01-26",
  "the-people-with-the-sack": "2026-01-26",
  "sostener-tu-luz": "2026-01-22",
  "hold-your-light": "2026-01-22",
};

export function getRedistributedBlogDate(slug: string, fallback: string) {
  return redistributedBlogDates[slug] ?? fallback;
}
