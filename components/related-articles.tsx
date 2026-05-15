import Link from "next/link";

type Article = { slug: string; title: string; tag: string };

const articlesEs: Record<string, Article[]> = {
  "20-anos-formandome-en-20-paises": [
    { slug: "todo-es-frecuencia", title: "Todo es frecuencia: los maestros que me enseñaron a sentir", tag: "Formación" },
    { slug: "ansiedad-sin-causa", title: "Ansiedad sin causa aparente", tag: "Sistema nervioso" }
  ],
  "ansiedad-sin-causa": [
    { slug: "el-alivio-no-es-expansion", title: "El alivio no es expansión", tag: "Sistema nervioso" },
    { slug: "el-cuerpo-necesita-seguridad-no-control", title: "El cuerpo no necesita más control. Necesita seguridad", tag: "Sistema nervioso" }
  ],
  "bara-bala-no-puedes-sentir-sin-creer": [
    { slug: "contraccion-o-expansion", title: "Contracción o expansión: la única pregunta que necesitas", tag: "Proceso" },
    { slug: "el-topo-mecanismo-mental", title: "El topo: el mecanismo mental que bloquea tu cuerpo", tag: "Proceso" }
  ],
  "ceos-y-sistema-nervioso": [
    { slug: "el-coste-fisiologico-de-sostener-presion", title: "El coste fisiológico de sostener presión", tag: "Alto rendimiento" },
    { slug: "el-cuerpo-no-fue-disenado-siempre-disponible", title: "El cuerpo no fue diseñado para vivir siempre disponible", tag: "Alto rendimiento" }
  ],
  "compensar-no-es-curar-v2": [
    { slug: "do-no-harm", title: "Primero, no dañar", tag: "Fundamentos" },
    { slug: "el-cuerpo-decide-antes-que-la-mente", title: "El cuerpo decide antes que la mente", tag: "Fundamentos" }
  ],
  "contraccion-o-expansion": [
    { slug: "bara-bala-no-puedes-sentir-sin-creer", title: "Bara bala: no puedes sentir sin creer", tag: "Proceso" },
    { slug: "el-topo-mecanismo-mental", title: "El topo: el mecanismo mental que bloquea tu cuerpo", tag: "Proceso" }
  ],
  "cuando-entendi-que-la-tecnica-me-limitaba": [
    { slug: "el-dia-que-deje-de-ser-pinocho-v2", title: "El día que dejé de ser Pinocho", tag: "Mi historia" },
    { slug: "la-curandera-de-robleda", title: "La mujer que leía la espalda como braille", tag: "Mi historia" }
  ],
  "cuerpos-pidiendo-permiso-para-descansar": [
    { slug: "el-cuerpo-sabe-antes-que-tu", title: "El cuerpo sabe antes que tú", tag: "Manifiesto" },
    { slug: "el-cuerpo-siempre-intenta-protegerte", title: "El cuerpo siempre intenta protegerte", tag: "Manifiesto" }
  ],
  "do-no-harm": [
    { slug: "compensar-no-es-curar-v2", title: "Compensar no es curar", tag: "Fundamentos" },
    { slug: "el-cuerpo-decide-antes-que-la-mente", title: "El cuerpo decide antes que la mente", tag: "Fundamentos" }
  ],
  "el-alivio-no-es-expansion": [
    { slug: "ansiedad-sin-causa", title: "Ansiedad sin causa aparente", tag: "Sistema nervioso" },
    { slug: "el-cuerpo-necesita-seguridad-no-control", title: "El cuerpo no necesita más control. Necesita seguridad", tag: "Sistema nervioso" }
  ],
  "el-coste-fisiologico-de-sostener-presion": [
    { slug: "ceos-y-sistema-nervioso", title: "CEOs y sistema nervioso", tag: "Alto rendimiento" },
    { slug: "el-cuerpo-no-fue-disenado-siempre-disponible", title: "El cuerpo no fue diseñado para vivir siempre disponible", tag: "Alto rendimiento" }
  ],
  "el-cuerpo-cambia-cuando-deja-de-defenderse": [
    { slug: "el-dolor-rara-vez-empieza-donde-duele", title: "El dolor rara vez empieza donde duele", tag: "Trabajo corporal" },
    { slug: "el-freno-de-mano-del-cuerpo", title: "El freno de mano del cuerpo: por qué forzarte es la peor medicina", tag: "Trabajo corporal" }
  ],
  "el-cuerpo-decide-antes-que-la-mente": [
    { slug: "compensar-no-es-curar-v2", title: "Compensar no es curar", tag: "Fundamentos" },
    { slug: "do-no-harm", title: "Primero, no dañar", tag: "Fundamentos" }
  ],
  "el-cuerpo-necesita-seguridad-no-control": [
    { slug: "ansiedad-sin-causa", title: "Ansiedad sin causa aparente", tag: "Sistema nervioso" },
    { slug: "el-alivio-no-es-expansion", title: "El alivio no es expansión", tag: "Sistema nervioso" }
  ],
  "el-cuerpo-no-esta-roto-esta-compensando": [
    { slug: "compensar-no-es-curar-v2", title: "Compensar no es curar", tag: "Fundamentos" },
    { slug: "do-no-harm", title: "Primero, no dañar", tag: "Fundamentos" }
  ],
  "el-cuerpo-no-fue-disenado-siempre-disponible": [
    { slug: "ceos-y-sistema-nervioso", title: "CEOs y sistema nervioso", tag: "Alto rendimiento" },
    { slug: "el-coste-fisiologico-de-sostener-presion", title: "El coste fisiológico de sostener presión", tag: "Alto rendimiento" }
  ],
  "el-cuerpo-organiza-supervivencia": [
    { slug: "compensar-no-es-curar-v2", title: "Compensar no es curar", tag: "Fundamentos" },
    { slug: "do-no-harm", title: "Primero, no dañar", tag: "Fundamentos" }
  ],
  "el-cuerpo-recuerda-lo-que-la-mente-olvido": [
    { slug: "ansiedad-sin-causa", title: "Ansiedad sin causa aparente", tag: "Sistema nervioso" },
    { slug: "el-alivio-no-es-expansion", title: "El alivio no es expansión", tag: "Sistema nervioso" }
  ],
  "el-cuerpo-sabe-antes-que-tu": [
    { slug: "cuerpos-pidiendo-permiso-para-descansar", title: "Hay cuerpos que llevan años pidiendo permiso para descansar", tag: "Manifiesto" },
    { slug: "el-cuerpo-siempre-intenta-protegerte", title: "El cuerpo siempre intenta protegerte", tag: "Manifiesto" }
  ],
  "el-cuerpo-siempre-intenta-protegerte": [
    { slug: "cuerpos-pidiendo-permiso-para-descansar", title: "Hay cuerpos que llevan años pidiendo permiso para descansar", tag: "Manifiesto" },
    { slug: "el-cuerpo-sabe-antes-que-tu", title: "El cuerpo sabe antes que tú", tag: "Manifiesto" }
  ],
  "el-dia-que-deje-de-ser-pinocho-v2": [
    { slug: "cuando-entendi-que-la-tecnica-me-limitaba", title: "Cuando entendí que la técnica me limitaba", tag: "Mi historia" },
    { slug: "la-curandera-de-robleda", title: "La mujer que leía la espalda como braille", tag: "Mi historia" }
  ],
  "el-dolor-rara-vez-empieza-donde-duele": [
    { slug: "el-cuerpo-cambia-cuando-deja-de-defenderse", title: "El cuerpo cambia cuando deja de defenderse", tag: "Trabajo corporal" },
    { slug: "el-freno-de-mano-del-cuerpo", title: "El freno de mano del cuerpo: por qué forzarte es la peor medicina", tag: "Trabajo corporal" }
  ],
  "el-freno-de-mano-del-cuerpo": [
    { slug: "el-cuerpo-cambia-cuando-deja-de-defenderse", title: "El cuerpo cambia cuando deja de defenderse", tag: "Trabajo corporal" },
    { slug: "el-dolor-rara-vez-empieza-donde-duele", title: "El dolor rara vez empieza donde duele", tag: "Trabajo corporal" }
  ],
  "el-problema-no-es-el-estres": [
    { slug: "ansiedad-sin-causa", title: "Ansiedad sin causa aparente", tag: "Sistema nervioso" },
    { slug: "el-alivio-no-es-expansion", title: "El alivio no es expansión", tag: "Sistema nervioso" }
  ],
  "el-sintoma-no-es-el-enemigo": [
    { slug: "cuerpos-pidiendo-permiso-para-descansar", title: "Hay cuerpos que llevan años pidiendo permiso para descansar", tag: "Manifiesto" },
    { slug: "el-cuerpo-sabe-antes-que-tu", title: "El cuerpo sabe antes que tú", tag: "Manifiesto" }
  ],
  "el-topo-mecanismo-mental": [
    { slug: "bara-bala-no-puedes-sentir-sin-creer", title: "Bara bala: no puedes sentir sin creer", tag: "Proceso" },
    { slug: "contraccion-o-expansion", title: "Contracción o expansión: la única pregunta que necesitas", tag: "Proceso" }
  ],
  "intensidad-e-invasion-no-son-lo-mismo": [
    { slug: "el-cuerpo-cambia-cuando-deja-de-defenderse", title: "El cuerpo cambia cuando deja de defenderse", tag: "Trabajo corporal" },
    { slug: "el-dolor-rara-vez-empieza-donde-duele", title: "El dolor rara vez empieza donde duele", tag: "Trabajo corporal" }
  ],
  "la-barista-que-lloro": [
    { slug: "trabajo-energetico-no-es-lo-que-piensas", title: "El trabajo energético no es lo que piensas", tag: "Energía" },
    { slug: "ansiedad-sin-causa", title: "Ansiedad sin causa aparente", tag: "Sistema nervioso" }
  ],
  "la-curandera-de-robleda": [
    { slug: "cuando-entendi-que-la-tecnica-me-limitaba", title: "Cuando entendí que la técnica me limitaba", tag: "Mi historia" },
    { slug: "el-dia-que-deje-de-ser-pinocho-v2", title: "El día que dejé de ser Pinocho", tag: "Mi historia" }
  ],
  "la-diferencia-entre-reorganizar-y-reparar": [
    { slug: "compensar-no-es-curar-v2", title: "Compensar no es curar", tag: "Fundamentos" },
    { slug: "do-no-harm", title: "Primero, no dañar", tag: "Fundamentos" }
  ],
  "la-espalda-casi-nunca-es-el-problema": [
    { slug: "el-cuerpo-cambia-cuando-deja-de-defenderse", title: "El cuerpo cambia cuando deja de defenderse", tag: "Trabajo corporal" },
    { slug: "el-dolor-rara-vez-empieza-donde-duele", title: "El dolor rara vez empieza donde duele", tag: "Trabajo corporal" }
  ],
  "la-fascia-real": [
    { slug: "el-cuerpo-cambia-cuando-deja-de-defenderse", title: "El cuerpo cambia cuando deja de defenderse", tag: "Trabajo corporal" },
    { slug: "el-dolor-rara-vez-empieza-donde-duele", title: "El dolor rara vez empieza donde duele", tag: "Trabajo corporal" }
  ],
  "la-precision-siempre-gana-a-la-fuerza": [
    { slug: "compensar-no-es-curar-v2", title: "Compensar no es curar", tag: "Fundamentos" },
    { slug: "do-no-harm", title: "Primero, no dañar", tag: "Fundamentos" }
  ],
  "la-ram-del-sistema-nervioso": [
    { slug: "ansiedad-sin-causa", title: "Ansiedad sin causa aparente", tag: "Sistema nervioso" },
    { slug: "el-alivio-no-es-expansion", title: "El alivio no es expansión", tag: "Sistema nervioso" }
  ],
  "la-regulacion-no-es-relajacion": [
    { slug: "ansiedad-sin-causa", title: "Ansiedad sin causa aparente", tag: "Sistema nervioso" },
    { slug: "el-alivio-no-es-expansion", title: "El alivio no es expansión", tag: "Sistema nervioso" }
  ],
  "la-sombra-te-hace-olvidar": [
    { slug: "bara-bala-no-puedes-sentir-sin-creer", title: "Bara bala: no puedes sentir sin creer", tag: "Proceso" },
    { slug: "contraccion-o-expansion", title: "Contracción o expansión: la única pregunta que necesitas", tag: "Proceso" }
  ],
  "la-tension-cambia-quien-crees-que-eres": [
    { slug: "cuerpos-pidiendo-permiso-para-descansar", title: "Hay cuerpos que llevan años pidiendo permiso para descansar", tag: "Manifiesto" },
    { slug: "el-cuerpo-sabe-antes-que-tu", title: "El cuerpo sabe antes que tú", tag: "Manifiesto" }
  ],
  "las-casetes-mentales": [
    { slug: "bara-bala-no-puedes-sentir-sin-creer", title: "Bara bala: no puedes sentir sin creer", tag: "Proceso" },
    { slug: "contraccion-o-expansion", title: "Contracción o expansión: la única pregunta que necesitas", tag: "Proceso" }
  ],
  "las-personas-con-la-mochila": [
    { slug: "bara-bala-no-puedes-sentir-sin-creer", title: "Bara bala: no puedes sentir sin creer", tag: "Proceso" },
    { slug: "contraccion-o-expansion", title: "Contracción o expansión: la única pregunta que necesitas", tag: "Proceso" }
  ],
  "lo-que-aprendi-en-kamalaya": [
    { slug: "cuando-entendi-que-la-tecnica-me-limitaba", title: "Cuando entendí que la técnica me limitaba", tag: "Mi historia" },
    { slug: "el-dia-que-deje-de-ser-pinocho-v2", title: "El día que dejé de ser Pinocho", tag: "Mi historia" }
  ],
  "lo-que-aprendi-tocando-miles-de-cuerpos": [
    { slug: "cuando-entendi-que-la-tecnica-me-limitaba", title: "Cuando entendí que la técnica me limitaba", tag: "Mi historia" },
    { slug: "el-dia-que-deje-de-ser-pinocho-v2", title: "El día que dejé de ser Pinocho", tag: "Mi historia" }
  ],
  "lo-que-tus-manos-pueden-leer": [
    { slug: "el-cuerpo-cambia-cuando-deja-de-defenderse", title: "El cuerpo cambia cuando deja de defenderse", tag: "Trabajo corporal" },
    { slug: "el-dolor-rara-vez-empieza-donde-duele", title: "El dolor rara vez empieza donde duele", tag: "Trabajo corporal" }
  ],
  "los-ojos-del-campesino-v2": [
    { slug: "cuando-entendi-que-la-tecnica-me-limitaba", title: "Cuando entendí que la técnica me limitaba", tag: "Mi historia" },
    { slug: "el-dia-que-deje-de-ser-pinocho-v2", title: "El día que dejé de ser Pinocho", tag: "Mi historia" }
  ],
  "manager-o-micromanager-de-tu-vida": [
    { slug: "bara-bala-no-puedes-sentir-sin-creer", title: "Bara bala: no puedes sentir sin creer", tag: "Proceso" },
    { slug: "contraccion-o-expansion", title: "Contracción o expansión: la única pregunta que necesitas", tag: "Proceso" }
  ],
  "no-estan-cansadas-estan-compensando": [
    { slug: "ansiedad-sin-causa", title: "Ansiedad sin causa aparente", tag: "Sistema nervioso" },
    { slug: "el-alivio-no-es-expansion", title: "El alivio no es expansión", tag: "Sistema nervioso" }
  ],
  "no-hay-nada-solo-fisico": [
    { slug: "ansiedad-sin-causa", title: "Ansiedad sin causa aparente", tag: "Sistema nervioso" },
    { slug: "el-alivio-no-es-expansion", title: "El alivio no es expansión", tag: "Sistema nervioso" }
  ],
  "no-necesitas-entender-necesitas-estar-bien": [
    { slug: "bara-bala-no-puedes-sentir-sin-creer", title: "Bara bala: no puedes sentir sin creer", tag: "Proceso" },
    { slug: "contraccion-o-expansion", title: "Contracción o expansión: la única pregunta que necesitas", tag: "Proceso" }
  ],
  "personas-en-defensa-desde-hace-decadas": [
    { slug: "cuerpos-pidiendo-permiso-para-descansar", title: "Hay cuerpos que llevan años pidiendo permiso para descansar", tag: "Manifiesto" },
    { slug: "el-cuerpo-sabe-antes-que-tu", title: "El cuerpo sabe antes que tú", tag: "Manifiesto" }
  ],
  "por-que-algunas-lesiones-nunca-se-curan": [
    { slug: "el-cuerpo-cambia-cuando-deja-de-defenderse", title: "El cuerpo cambia cuando deja de defenderse", tag: "Trabajo corporal" },
    { slug: "el-dolor-rara-vez-empieza-donde-duele", title: "El dolor rara vez empieza donde duele", tag: "Trabajo corporal" }
  ],
  "por-que-trabajo-por-proceso": [
    { slug: "bara-bala-no-puedes-sentir-sin-creer", title: "Bara bala: no puedes sentir sin creer", tag: "Proceso" },
    { slug: "contraccion-o-expansion", title: "Contracción o expansión: la única pregunta que necesitas", tag: "Proceso" }
  ],
  "que-esperar-en-tu-primera-sesion": [
    { slug: "20-anos-formandome-en-20-paises", title: "20 años formándome en 20 países: qué aprendí", tag: "Formación" },
    { slug: "ansiedad-sin-causa", title: "Ansiedad sin causa aparente", tag: "Sistema nervioso" }
  ],
  "que-pasa-en-una-sesion": [
    { slug: "20-anos-formandome-en-20-paises", title: "20 años formándome en 20 países: qué aprendí", tag: "Formación" },
    { slug: "ansiedad-sin-causa", title: "Ansiedad sin causa aparente", tag: "Sistema nervioso" }
  ],
  "rendimiento-sostenible": [
    { slug: "ceos-y-sistema-nervioso", title: "CEOs y sistema nervioso", tag: "Alto rendimiento" },
    { slug: "el-coste-fisiologico-de-sostener-presion", title: "El coste fisiológico de sostener presión", tag: "Alto rendimiento" }
  ],
  "rolfing-europa-vs-usa-v2": [
    { slug: "rolfing-vs-fisioterapia-diferencia", title: "Rolfing vs fisioterapia: cuál es la diferencia", tag: "Rolfing" },
    { slug: "cuando-entendi-que-la-tecnica-me-limitaba", title: "Cuando entendí que la técnica me limitaba", tag: "Mi historia" }
  ],
  "rolfing-vs-fisioterapia-diferencia": [
    { slug: "rolfing-europa-vs-usa-v2", title: "Rolfing en Europa vs USA", tag: "Rolfing" },
    { slug: "cuando-entendi-que-la-tecnica-me-limitaba", title: "Cuando entendí que la técnica me limitaba", tag: "Mi historia" }
  ],
  "roncesvalles-morir-la-coruna-vivir-v2": [
    { slug: "cuando-entendi-que-la-tecnica-me-limitaba", title: "Cuando entendí que la técnica me limitaba", tag: "Mi historia" },
    { slug: "el-dia-que-deje-de-ser-pinocho-v2", title: "El día que dejé de ser Pinocho", tag: "Mi historia" }
  ],
  "siempre-buscar-el-punto-de-origen": [
    { slug: "compensar-no-es-curar-v2", title: "Compensar no es curar", tag: "Fundamentos" },
    { slug: "do-no-harm", title: "Primero, no dañar", tag: "Fundamentos" }
  ],
  "siete-anos-de-dolor": [
    { slug: "cuando-entendi-que-la-tecnica-me-limitaba", title: "Cuando entendí que la técnica me limitaba", tag: "Mi historia" },
    { slug: "el-dia-que-deje-de-ser-pinocho-v2", title: "El día que dejé de ser Pinocho", tag: "Mi historia" }
  ],
  "sostener-tu-luz": [
    { slug: "ceos-y-sistema-nervioso", title: "CEOs y sistema nervioso", tag: "Alto rendimiento" },
    { slug: "el-coste-fisiologico-de-sostener-presion", title: "El coste fisiológico de sostener presión", tag: "Alto rendimiento" }
  ],
  "todo-es-frecuencia": [
    { slug: "20-anos-formandome-en-20-paises", title: "20 años formándome en 20 países: qué aprendí", tag: "Formación" },
    { slug: "ansiedad-sin-causa", title: "Ansiedad sin causa aparente", tag: "Sistema nervioso" }
  ],
  "trabajo-corporal-despues-del-embarazo": [
    { slug: "20-anos-formandome-en-20-paises", title: "20 años formándome en 20 países: qué aprendí", tag: "Formación" },
    { slug: "ansiedad-sin-causa", title: "Ansiedad sin causa aparente", tag: "Sistema nervioso" }
  ],
  "trabajo-energetico-no-es-lo-que-piensas": [
    { slug: "la-barista-que-lloro", title: "La barista que lloró: cuando tu eje cambia lo que te rodea", tag: "Energía" },
    { slug: "ansiedad-sin-causa", title: "Ansiedad sin causa aparente", tag: "Sistema nervioso" }
  ],
  "tu-cuerpo-no-necesita-mas-fuerza": [
    { slug: "cuerpos-pidiendo-permiso-para-descansar", title: "Hay cuerpos que llevan años pidiendo permiso para descansar", tag: "Manifiesto" },
    { slug: "el-cuerpo-sabe-antes-que-tu", title: "El cuerpo sabe antes que tú", tag: "Manifiesto" }
  ],
  "tu-respiracion-cambia-antes": [
    { slug: "ansiedad-sin-causa", title: "Ansiedad sin causa aparente", tag: "Sistema nervioso" },
    { slug: "el-alivio-no-es-expansion", title: "El alivio no es expansión", tag: "Sistema nervioso" }
  ],
  "tu-sistema-nervioso-escucha-todo": [
    { slug: "cuerpos-pidiendo-permiso-para-descansar", title: "Hay cuerpos que llevan años pidiendo permiso para descansar", tag: "Manifiesto" },
    { slug: "el-cuerpo-sabe-antes-que-tu", title: "El cuerpo sabe antes que tú", tag: "Manifiesto" }
  ],
  "tu-sistema-nervioso-no-distingue-amenaza": [
    { slug: "ansiedad-sin-causa", title: "Ansiedad sin causa aparente", tag: "Sistema nervioso" },
    { slug: "el-alivio-no-es-expansion", title: "El alivio no es expansión", tag: "Sistema nervioso" }
  ],
  "tus-organos-se-mueven": [
    { slug: "el-cuerpo-cambia-cuando-deja-de-defenderse", title: "El cuerpo cambia cuando deja de defenderse", tag: "Trabajo corporal" },
    { slug: "el-dolor-rara-vez-empieza-donde-duele", title: "El dolor rara vez empieza donde duele", tag: "Trabajo corporal" }
  ],
  "viajes-jet-lag-deuda-nerviosa": [
    { slug: "ceos-y-sistema-nervioso", title: "CEOs y sistema nervioso", tag: "Alto rendimiento" },
    { slug: "el-coste-fisiologico-de-sostener-presion", title: "El coste fisiológico de sostener presión", tag: "Alto rendimiento" }
  ],
  "vivir-en-naranja": [
    { slug: "ansiedad-sin-causa", title: "Ansiedad sin causa aparente", tag: "Sistema nervioso" },
    { slug: "el-alivio-no-es-expansion", title: "El alivio no es expansión", tag: "Sistema nervioso" }
  ]
};

const articlesEn: Record<string, Article[]> = {
  "20-years-training-across-20-countries": [
    { slug: "everything-is-frequency", title: "Everything is frequency: the teachers who taught me to feel", tag: "Training" },
    { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause: when the body demands attention", tag: "Nervous system" }
  ],
  "anxiety-without-apparent-cause": [
    { slug: "relief-isnt-expansion", title: "Relief isn't expansion", tag: "Nervous system" },
    { slug: "the-body-needs-safety-not-control", title: "The body doesn't need more control. It needs safety", tag: "Nervous system" }
  ],
  "bara-bala-you-cant-feel-without-believing": [
    { slug: "contraction-or-expansion", title: "Contraction or expansion: the only question you need", tag: "Process" },
    { slug: "the-mole-mental-mechanism", title: "The mole: the mental mechanism that blocks your body", tag: "Process" }
  ],
  "ceos-and-the-nervous-system": [
    { slug: "the-physiological-cost-of-sustained-pressure", title: "The physiological cost of sustained pressure", tag: "High performance" },
    { slug: "the-body-wasnt-designed-to-be-always-available", title: "The body wasn't designed to be always available", tag: "High performance" }
  ],
  "compensating-isnt-healing": [
    { slug: "do-no-harm", title: "First, do no harm", tag: "Foundations" },
    { slug: "the-body-decides-before-the-mind", title: "The body decides before the mind", tag: "Fundamentals" }
  ],
  "contraction-or-expansion": [
    { slug: "bara-bala-you-cant-feel-without-believing", title: "Bara bala: you can't feel without believing", tag: "Process" },
    { slug: "the-mole-mental-mechanism", title: "The mole: the mental mechanism that blocks your body", tag: "Process" }
  ],
  "when-technique-becomes-the-limit": [
    { slug: "the-day-i-stopped-being-pinocchio", title: "The day I stopped being Pinocchio", tag: "My story" },
    { slug: "the-healer-of-robleda", title: "The woman who read the back like braille", tag: "My story" }
  ],
  "bodies-asking-permission-to-rest": [
    { slug: "the-body-knows-before-you-do", title: "The body knows before you do", tag: "Manifesto" },
    { slug: "the-body-always-tries-to-protect-you", title: "The body always tries to protect you", tag: "Manifesto" }
  ],
  "do-no-harm": [
    { slug: "compensating-isnt-healing", title: "Compensating isn't healing", tag: "Compensation" },
    { slug: "the-body-decides-before-the-mind", title: "The body decides before the mind", tag: "Fundamentals" }
  ],
  "relief-isnt-expansion": [
    { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause: when the body demands attention", tag: "Nervous system" },
    { slug: "the-body-needs-safety-not-control", title: "The body doesn't need more control. It needs safety", tag: "Nervous system" }
  ],
  "the-physiological-cost-of-sustained-pressure": [
    { slug: "ceos-and-the-nervous-system", title: "CEOs and the nervous system", tag: "High performance" },
    { slug: "the-body-wasnt-designed-to-be-always-available", title: "The body wasn't designed to be always available", tag: "High performance" }
  ],
  "the-body-changes-when-it-stops-defending": [
    { slug: "pain-rarely-starts-where-it-hurts", title: "Pain rarely starts where it hurts", tag: "Bodywork" },
    { slug: "the-bodys-handbrake", title: "The body's handbrake: why forcing yourself is the worst medicine", tag: "Bodywork" }
  ],
  "the-body-decides-before-the-mind": [
    { slug: "compensating-isnt-healing", title: "Compensating isn't healing", tag: "Compensation" },
    { slug: "do-no-harm", title: "First, do no harm", tag: "Foundations" }
  ],
  "the-body-needs-safety-not-control": [
    { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause: when the body demands attention", tag: "Nervous system" },
    { slug: "relief-isnt-expansion", title: "Relief isn't expansion", tag: "Nervous system" }
  ],
  "your-body-isnt-broken-its-compensating": [
    { slug: "compensating-isnt-healing", title: "Compensating isn't healing", tag: "Compensation" },
    { slug: "do-no-harm", title: "First, do no harm", tag: "Foundations" }
  ],
  "the-body-wasnt-designed-to-be-always-available": [
    { slug: "ceos-and-the-nervous-system", title: "CEOs and the nervous system", tag: "High performance" },
    { slug: "the-physiological-cost-of-sustained-pressure", title: "The physiological cost of sustained pressure", tag: "High performance" }
  ],
  "the-body-organizes-survival-before-comfort": [
    { slug: "compensating-isnt-healing", title: "Compensating isn't healing", tag: "Compensation" },
    { slug: "do-no-harm", title: "First, do no harm", tag: "Foundations" }
  ],
  "the-body-remembers-what-the-mind-forgot": [
    { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause: when the body demands attention", tag: "Nervous system" },
    { slug: "relief-isnt-expansion", title: "Relief isn't expansion", tag: "Nervous system" }
  ],
  "the-body-knows-before-you-do": [
    { slug: "bodies-asking-permission-to-rest", title: "There are bodies that have been asking permission to rest for years", tag: "Manifesto" },
    { slug: "the-body-always-tries-to-protect-you", title: "The body always tries to protect you", tag: "Manifesto" }
  ],
  "the-body-always-tries-to-protect-you": [
    { slug: "bodies-asking-permission-to-rest", title: "There are bodies that have been asking permission to rest for years", tag: "Manifesto" },
    { slug: "the-body-knows-before-you-do", title: "The body knows before you do", tag: "Manifesto" }
  ],
  "the-day-i-stopped-being-pinocchio": [
    { slug: "when-technique-becomes-the-limit", title: "When I understood that technique was limiting me", tag: "My story" },
    { slug: "the-healer-of-robleda", title: "The woman who read the back like braille", tag: "My story" }
  ],
  "pain-rarely-starts-where-it-hurts": [
    { slug: "the-body-changes-when-it-stops-defending", title: "The body changes when it stops defending", tag: "Bodywork" },
    { slug: "the-bodys-handbrake", title: "The body's handbrake: why forcing yourself is the worst medicine", tag: "Bodywork" }
  ],
  "the-bodys-handbrake": [
    { slug: "the-body-changes-when-it-stops-defending", title: "The body changes when it stops defending", tag: "Bodywork" },
    { slug: "pain-rarely-starts-where-it-hurts", title: "Pain rarely starts where it hurts", tag: "Bodywork" }
  ],
  "the-problem-isnt-stress": [
    { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause: when the body demands attention", tag: "Nervous system" },
    { slug: "relief-isnt-expansion", title: "Relief isn't expansion", tag: "Nervous system" }
  ],
  "the-symptom-isnt-the-enemy": [
    { slug: "bodies-asking-permission-to-rest", title: "There are bodies that have been asking permission to rest for years", tag: "Manifesto" },
    { slug: "the-body-knows-before-you-do", title: "The body knows before you do", tag: "Manifesto" }
  ],
  "the-mole-mental-mechanism": [
    { slug: "bara-bala-you-cant-feel-without-believing", title: "Bara bala: you can't feel without believing", tag: "Process" },
    { slug: "contraction-or-expansion", title: "Contraction or expansion: the only question you need", tag: "Process" }
  ],
  "intensity-and-invasion-arent-the-same": [
    { slug: "the-body-changes-when-it-stops-defending", title: "The body changes when it stops defending", tag: "Bodywork" },
    { slug: "pain-rarely-starts-where-it-hurts", title: "Pain rarely starts where it hurts", tag: "Bodywork" }
  ],
  "the-barista-who-cried": [
    { slug: "energy-work-isnt-what-you-think", title: "Energy work isn't what you think", tag: "Energy" },
    { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause: when the body demands attention", tag: "Nervous system" }
  ],
  "the-healer-of-robleda": [
    { slug: "when-technique-becomes-the-limit", title: "When I understood that technique was limiting me", tag: "My story" },
    { slug: "the-day-i-stopped-being-pinocchio", title: "The day I stopped being Pinocchio", tag: "My story" }
  ],
  "the-difference-between-reorganizing-and-repairing": [
    { slug: "compensating-isnt-healing", title: "Compensating isn't healing", tag: "Compensation" },
    { slug: "do-no-harm", title: "First, do no harm", tag: "Foundations" }
  ],
  "the-back-is-almost-never-the-problem": [
    { slug: "the-body-changes-when-it-stops-defending", title: "The body changes when it stops defending", tag: "Bodywork" },
    { slug: "pain-rarely-starts-where-it-hurts", title: "Pain rarely starts where it hurts", tag: "Bodywork" }
  ],
  "what-nobody-tells-you-about-fascia": [
    { slug: "the-body-changes-when-it-stops-defending", title: "The body changes when it stops defending", tag: "Bodywork" },
    { slug: "pain-rarely-starts-where-it-hurts", title: "Pain rarely starts where it hurts", tag: "Bodywork" }
  ],
  "precision-always-beats-force": [
    { slug: "compensating-isnt-healing", title: "Compensating isn't healing", tag: "Compensation" },
    { slug: "do-no-harm", title: "First, do no harm", tag: "Foundations" }
  ],
  "the-ram-of-your-nervous-system": [
    { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause: when the body demands attention", tag: "Nervous system" },
    { slug: "relief-isnt-expansion", title: "Relief isn't expansion", tag: "Nervous system" }
  ],
  "regulation-isnt-relaxation": [
    { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause: when the body demands attention", tag: "Nervous system" },
    { slug: "relief-isnt-expansion", title: "Relief isn't expansion", tag: "Nervous system" }
  ],
  "the-shadow-makes-you-forget": [
    { slug: "bara-bala-you-cant-feel-without-believing", title: "Bara bala: you can't feel without believing", tag: "Process" },
    { slug: "contraction-or-expansion", title: "Contraction or expansion: the only question you need", tag: "Process" }
  ],
  "tension-changes-who-you-think-you-are": [
    { slug: "bodies-asking-permission-to-rest", title: "There are bodies that have been asking permission to rest for years", tag: "Manifesto" },
    { slug: "the-body-knows-before-you-do", title: "The body knows before you do", tag: "Manifesto" }
  ],
  "the-mental-cassette-tapes": [
    { slug: "bara-bala-you-cant-feel-without-believing", title: "Bara bala: you can't feel without believing", tag: "Process" },
    { slug: "contraction-or-expansion", title: "Contraction or expansion: the only question you need", tag: "Process" }
  ],
  "the-people-with-the-sack": [
    { slug: "bara-bala-you-cant-feel-without-believing", title: "Bara bala: you can't feel without believing", tag: "Process" },
    { slug: "contraction-or-expansion", title: "Contraction or expansion: the only question you need", tag: "Process" }
  ],
  "what-i-learned-in-kamalaya": [
    { slug: "when-technique-becomes-the-limit", title: "When I understood that technique was limiting me", tag: "My story" },
    { slug: "the-day-i-stopped-being-pinocchio", title: "The day I stopped being Pinocchio", tag: "My story" }
  ],
  "what-i-learned-touching-thousands-of-bodies": [
    { slug: "when-technique-becomes-the-limit", title: "When I understood that technique was limiting me", tag: "My story" },
    { slug: "the-day-i-stopped-being-pinocchio", title: "The day I stopped being Pinocchio", tag: "My story" }
  ],
  "what-your-hands-can-read": [
    { slug: "the-body-changes-when-it-stops-defending", title: "The body changes when it stops defending", tag: "Bodywork" },
    { slug: "pain-rarely-starts-where-it-hurts", title: "Pain rarely starts where it hurts", tag: "Bodywork" }
  ],
  "the-farmers-eyes": [
    { slug: "when-technique-becomes-the-limit", title: "When I understood that technique was limiting me", tag: "My story" },
    { slug: "the-day-i-stopped-being-pinocchio", title: "The day I stopped being Pinocchio", tag: "My story" }
  ],
  "manager-or-micromanager-of-your-life": [
    { slug: "bara-bala-you-cant-feel-without-believing", title: "Bara bala: you can't feel without believing", tag: "Process" },
    { slug: "contraction-or-expansion", title: "Contraction or expansion: the only question you need", tag: "Process" }
  ],
  "not-tired-compensating": [
    { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause: when the body demands attention", tag: "Nervous system" },
    { slug: "relief-isnt-expansion", title: "Relief isn't expansion", tag: "Nervous system" }
  ],
  "nothing-is-just-physical": [
    { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause: when the body demands attention", tag: "Nervous system" },
    { slug: "relief-isnt-expansion", title: "Relief isn't expansion", tag: "Nervous system" }
  ],
  "you-dont-need-to-understand-you-need-to-be-well": [
    { slug: "bara-bala-you-cant-feel-without-believing", title: "Bara bala: you can't feel without believing", tag: "Process" },
    { slug: "contraction-or-expansion", title: "Contraction or expansion: the only question you need", tag: "Process" }
  ],
  "people-in-defense-for-decades": [
    { slug: "bodies-asking-permission-to-rest", title: "There are bodies that have been asking permission to rest for years", tag: "Manifesto" },
    { slug: "the-body-knows-before-you-do", title: "The body knows before you do", tag: "Manifesto" }
  ],
  "why-some-injuries-never-fully-heal": [
    { slug: "the-body-changes-when-it-stops-defending", title: "The body changes when it stops defending", tag: "Bodywork" },
    { slug: "pain-rarely-starts-where-it-hurts", title: "Pain rarely starts where it hurts", tag: "Bodywork" }
  ],
  "why-i-work-by-process-not-single-sessions": [
    { slug: "bara-bala-you-cant-feel-without-believing", title: "Bara bala: you can't feel without believing", tag: "Process" },
    { slug: "contraction-or-expansion", title: "Contraction or expansion: the only question you need", tag: "Process" }
  ],
  "what-to-expect-first-session": [
    { slug: "20-years-training-across-20-countries", title: "20 years training across 20 countries: what I learned", tag: "Training" },
    { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause: when the body demands attention", tag: "Nervous system" }
  ],
  "what-really-happens-in-a-session": [
    { slug: "20-years-training-across-20-countries", title: "20 years training across 20 countries: what I learned", tag: "Training" },
    { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause: when the body demands attention", tag: "Nervous system" }
  ],
  "sustainable-performance": [
    { slug: "ceos-and-the-nervous-system", title: "CEOs and the nervous system", tag: "High performance" },
    { slug: "the-physiological-cost-of-sustained-pressure", title: "The physiological cost of sustained pressure", tag: "High performance" }
  ],
  "european-rolfing-vs-american": [
    { slug: "rolfing-vs-physiotherapy-difference", title: "Rolfing vs physiotherapy: what's the difference", tag: "Rolfing" },
    { slug: "when-technique-becomes-the-limit", title: "When I understood that technique was limiting me", tag: "My story" }
  ],
  "rolfing-vs-physiotherapy-difference": [
    { slug: "european-rolfing-vs-american", title: "European Rolfing vs American: two schools, two outcomes", tag: "Rolfing" },
    { slug: "when-technique-becomes-the-limit", title: "When I understood that technique was limiting me", tag: "My story" }
  ],
  "roncesvalles-to-die-coruna-to-live": [
    { slug: "when-technique-becomes-the-limit", title: "When I understood that technique was limiting me", tag: "My story" },
    { slug: "the-day-i-stopped-being-pinocchio", title: "The day I stopped being Pinocchio", tag: "My story" }
  ],
  "always-find-the-point-of-origin": [
    { slug: "compensating-isnt-healing", title: "Compensating isn't healing", tag: "Compensation" },
    { slug: "do-no-harm", title: "First, do no harm", tag: "Foundations" }
  ],
  "seven-years-of-pain": [
    { slug: "when-technique-becomes-the-limit", title: "When I understood that technique was limiting me", tag: "My story" },
    { slug: "the-day-i-stopped-being-pinocchio", title: "The day I stopped being Pinocchio", tag: "My story" }
  ],
  "hold-your-light": [
    { slug: "ceos-and-the-nervous-system", title: "CEOs and the nervous system", tag: "High performance" },
    { slug: "the-physiological-cost-of-sustained-pressure", title: "The physiological cost of sustained pressure", tag: "High performance" }
  ],
  "everything-is-frequency": [
    { slug: "20-years-training-across-20-countries", title: "20 years training across 20 countries: what I learned", tag: "Training" },
    { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause: when the body demands attention", tag: "Nervous system" }
  ],
  "bodywork-after-pregnancy": [
    { slug: "20-years-training-across-20-countries", title: "20 years training across 20 countries: what I learned", tag: "Training" },
    { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause: when the body demands attention", tag: "Nervous system" }
  ],
  "energy-work-isnt-what-you-think": [
    { slug: "the-barista-who-cried", title: "The barista who cried: when your axis changes what surrounds you", tag: "Energy" },
    { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause: when the body demands attention", tag: "Nervous system" }
  ],
  "your-body-doesnt-need-more-force": [
    { slug: "bodies-asking-permission-to-rest", title: "There are bodies that have been asking permission to rest for years", tag: "Manifesto" },
    { slug: "the-body-knows-before-you-do", title: "The body knows before you do", tag: "Manifesto" }
  ],
  "your-breathing-changes-first": [
    { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause: when the body demands attention", tag: "Nervous system" },
    { slug: "relief-isnt-expansion", title: "Relief isn't expansion", tag: "Nervous system" }
  ],
  "your-nervous-system-hears-everything": [
    { slug: "bodies-asking-permission-to-rest", title: "There are bodies that have been asking permission to rest for years", tag: "Manifesto" },
    { slug: "the-body-knows-before-you-do", title: "The body knows before you do", tag: "Manifesto" }
  ],
  "your-nervous-system-cant-tell-the-difference": [
    { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause: when the body demands attention", tag: "Nervous system" },
    { slug: "relief-isnt-expansion", title: "Relief isn't expansion", tag: "Nervous system" }
  ],
  "your-organs-need-to-move": [
    { slug: "the-body-changes-when-it-stops-defending", title: "The body changes when it stops defending", tag: "Bodywork" },
    { slug: "pain-rarely-starts-where-it-hurts", title: "Pain rarely starts where it hurts", tag: "Bodywork" }
  ],
  "travel-jet-lag-nervous-debt": [
    { slug: "ceos-and-the-nervous-system", title: "CEOs and the nervous system", tag: "High performance" },
    { slug: "the-physiological-cost-of-sustained-pressure", title: "The physiological cost of sustained pressure", tag: "High performance" }
  ],
  "living-in-amber": [
    { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause: when the body demands attention", tag: "Nervous system" },
    { slug: "relief-isnt-expansion", title: "Relief isn't expansion", tag: "Nervous system" }
  ]
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
