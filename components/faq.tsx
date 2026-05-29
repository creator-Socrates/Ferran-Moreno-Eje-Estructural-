import Link from "next/link";

type QA = { q: string; a: string; href?: string; linkText?: string };

function renderAnswer(answer: string) {
  return answer.split("\n\n").map((block, index) => {
    const trimmed = block.trim();
    const isLabel = trimmed.endsWith(":") && trimmed.length < 28;

    return (
      <p
        key={`${trimmed}-${index}`}
        className={isLabel ? "text-[0.98rem] font-semibold tracking-tight" : "text-base leading-[1.8]"}
        style={{ color: isLabel ? "var(--text-main)" : "var(--text-secondary)" }}
      >
        {trimmed}
      </p>
    );
  });
}

const FAQ_ES: QA[] = [
  {
    q: "¿Qué pasa exactamente en una sesión?",
    a: "Primero te pregunto dónde estás, qué necesitas y qué te trae aquí.\n\nLa mayoría me escribe antes, así que muchas veces ya llegamos con una primera lectura del caso.\n\nDespués leo cómo está organizado tu cuerpo en la gravedad: postura, compensaciones, tensiones y dónde parece estar el origen real del patrón.\n\nA partir de ahí trabajo en las capas que estén implicadas: estructura, sistema nervioso, energía y dimensión mental-emocional.\n\nCada sesión dura entre 60 y 90 minutos.\n\nNo sigo un protocolo fijo. La sesión depende de lo que tu sistema muestra y de lo que puede cambiar de verdad ese día.",
  },
  {
    q: "¿Cómo me preparo para la primera sesión? ¿Qué llevo?",
    a: "Sesión presencial:\n\nRopa cómoda que te permita moverte: pantalón corto o legging, top o camiseta. Mejor si es algodón.\n\nSin perfumes, desodorantes ni esencias fuertes. El olor del cuerpo también da información; los aromas externos la tapan.\n\nNo hace falta venir en ayunas, pero sí evitar una comida pesada justo antes.\n\nSi tienes informes médicos relevantes, tráelos.\n\nSesión online:\n\nUn espacio donde puedas moverte con dos o tres metros libres.\n\nBuena luz para que pueda verte con claridad.\n\nBuen wifi y batería cargada para que la sesión no se corte.\n\nRopa cómoda, igual que en presencial.\n\nEn los dos formatos:\n\nBasta con venir como estás. La primera sesión empieza con una conversación, no con técnica.",
  },
  {
    q: "¿En qué se diferencia del Rolfing convencional?",
    a: "Empecé como Rolfer hace más de 20 años, pero el trabajo ha evolucionado mucho.\n\nHoy incluyo la lectura estructural del Rolfing, pero también osteopatía visceral, regulación del sistema nervioso, acupuntura japonesa, trabajo energético y lectura mental-emocional.\n\nNo es Rolfing puro.\n\nEs una lectura del sistema entero.",
  },
  {
    q: "¿El trabajo online tiene la misma profundidad que el presencial?",
    a: "Sí. El trabajo online tiene la misma profundidad y puede producir el mismo tipo de reorganización.\n\nLa lectura estructural, la regulación del sistema nervioso, el trabajo energético y la guía de movimiento funcionan muy bien a distancia.\n\nLo que cambia no es la profundidad del trabajo, sino el formato: online no hay contacto manual directo.\n\nHay personas que prefieren una sesión más física, pero la mayoría se adapta sin problema al formato disponible cuando busca una solución y el trabajo tiene sentido.\n\nCuando es necesario o encaja mejor, organizamos intensivos presenciales en Barcelona.",
  },
  {
    q: "¿Qué formación tienes? ¿Estás certificado?",
    a: "Soy Rolfer certificado por la Escuela Europea de Rolfing (Múnich).\n\nDespués, más de 20 años formándome con maestros en Alemania, Japón, México, Malasia, Tailandia y Estados Unidos.\n\nOsteopatía visceral con Jean-Pierre Barral, Alain Croibier y Peter Schwind.\n\nRegulación del sistema nervioso, trabajo energético y dimensión mental-emocional con distintos maestros a lo largo de los años.\n\nLa formación no se ha detenido. Cada cliente y cada caso siguen enseñándome.",
  },
  {
    q: "¿Cuánto cuesta trabajar contigo?",
    a: "Trabajo con sesiones individuales y procesos.\n\nLa sesión individual es 180€ / hora + IVA.\n\nLa primera sesión, que funciona como punto de entrada al proceso, cuesta 360€ + IVA.\n\nA partir de ahí, si tiene sentido continuar, definimos el proceso según la frecuencia, la profundidad y el nivel de intervención que el caso requiera.\n\nEn la mayoría de casos trabajamos dentro de un marco aproximado de 6 meses, con sesiones semanales o quincenales.\n\nCuando el caso lo requiere, también hay formatos intensivos o intervenciones específicas con presupuesto personalizado.",
    href: "/blog/como-se-define-el-precio-de-una-intervencion",
    linkText: "Cómo se define el precio",
  },
  {
    q: "¿Por qué trabajo por proceso y no por sesiones sueltas?",
    a: "Porque una sesión suelta puede aliviar, pero rara vez reorganiza un patrón que lleva años repitiéndose.\n\nLa primera sesión sirve para leer el sistema y ver si tiene sentido trabajar por proceso.\n\nEn la mayoría de casos, ese proceso se mueve dentro de un marco aproximado de 6 meses.\n\nNo es un paquete rígido. Es una forma de dar continuidad real al cambio.\n\nLas sesiones sueltas tienen sentido para casos puntuales o para personas que ya conocen el trabajo. Para patrones crónicos o sistemas muy cargados, trabajo mejor por proceso.",
    href: "/blog/por-que-trabajo-por-proceso",
    linkText: "Leer artículo sobre proceso",
  },
  {
    q: "¿Qué hago entre sesiones? ¿Hay tarea?",
    a: "Depende del caso.\n\nA veces dejo ejercicios concretos: respiración, movimientos, atención a un patrón específico. Pocas cosas, muy precisas.\n\nOtras veces lo más importante es observar: cómo cambia algo, dónde aparece, qué pasa cuando el sistema empieza a moverse.\n\nNo es tarea de hacer ejercicios cada día. Es trabajo de presencia con tu cuerpo entre sesión y sesión.\n\nSi necesitas más, lo definimos según lo que requiere tu caso.",
  },
  {
    q: "¿Qué resultados puedo esperar y cuándo los noto?",
    a: "Lo normal es que haya algún cambio desde la primera sesión: más espacio para respirar, menos dolor, sensación de eje.\n\nLa pregunta real no es si pasa algo. La pregunta es si pasa exactamente lo que esperabas y en el tiempo que imaginabas.\n\nEso no siempre coincide.\n\nEn un proceso, el patrón suele empezar a moverse en las primeras sesiones y consolidarse más adelante.\n\nCada cuerpo tiene su tiempo.\n\nNo prometo cuándo notarás cambios concretos. Lo que sí puedo decir es lo que veo en consulta: cuando el proceso se completa, suele aparecer reorganización real y duradera.\n\nNo es alivio temporal. Es cambio de organización.\n\nA veces el cuerpo libera capas que llevaba años sosteniendo. Puede aparecer más sensibilidad, fatiga o emoción durante unos días. No siempre pasa, pero cuando pasa, lo acompañamos.",
  },
  {
    q: "¿Es como un masaje o como fisioterapia?",
    a: "No.\n\nEl masaje suele trabajar el músculo.\n\nLa fisioterapia suele trabajar la lesión.\n\nAquí trabajamos el sistema: cómo está organizado tu cuerpo, por qué compensa, qué patrón nervioso sostiene la tensión y qué necesita cambiar para que el cuerpo deje de repetir lo mismo.\n\nLa técnica manual es solo una herramienta.\n\nLo central es la lectura del sistema.",
  },
  {
    q: "¿Puedo combinar este trabajo con mi fisio, osteópata o psicólogo actual?",
    a: "Depende del caso.\n\nEn general, sí. Este trabajo no entra en conflicto con fisioterapia, osteopatía estructural o psicoterapia. De hecho, muchas veces se complementan bien.\n\nPero hay matices.\n\nSi estás en mitad de un tratamiento intensivo con otro profesional (rehabilitación postoperatoria, fisio diaria por una lesión aguda), conviene hablarlo antes para no superponer estímulos.\n\nSi haces psicoterapia, este trabajo aborda una capa distinta (el cuerpo y el sistema nervioso) y suele apoyar el proceso terapéutico.\n\nEn la primera conversación de 15 minutos podemos mirar tu caso específico.",
  },
  {
    q: "¿Trabajas con embarazo, niños o adultos mayores?",
    a: "Sí, con matices según el caso.\n\nEmbarazo: trabajo con embarazadas y postparto. Hay ajustes específicos según el trimestre y la situación.\n\nAdultos mayores: trabajo con personas de cualquier edad. La precisión y suavidad del trabajo lo hacen adecuado también para cuerpos más sensibles.\n\nNiños y adolescentes: a partir de cierta edad y siempre con la presencia o el consentimiento de los padres. Cada caso lo valoramos juntos.\n\nMuchas veces también es necesario trabajar con los padres para que el sistema familiar pueda acompañar mejor el cambio.\n\nEn la primera conversación de 15 minutos vemos si tu caso encaja.",
  },
  {
    q: "Llevo años con dolor crónico, ¿me puede servir?",
    a: "Suele tener sentido justo ahí.\n\nSobre todo cuando ya has probado varias cosas y el patrón sigue volviendo.\n\nNo porque esas herramientas estén mal. Sino porque muchas veces trabajan una parte sin leer el sistema completo.\n\nSi llevas años en el mismo lugar, lo mejor es hablar primero 15 minutos y ver si aquí hay una puerta distinta para tu caso.",
    href: "/contacto",
    linkText: "Ver formas de contacto",
  },
  {
    q: "¿Hay que estar en crisis para venir?",
    a: "No.\n\nMucha gente llega en crisis, y ahí también se puede trabajar. Pero el trabajo más fino suele empezar cuando el sistema ya no está apagando un incendio.\n\nUna sesión puede contener lo urgente. Un proceso permite reorganizar lo que lo produjo.",
    href: "/blog/no-hace-falta-estar-en-crisis-para-venir",
    linkText: "Leer artículo completo",
  },
  {
    q: "¿Trabajas con ejecutivos, atletas o creadores?",
    a: "Sí. Son una parte importante de mi trabajo.\n\nTienen algo en común: la exigencia. Viven cerca del límite. Producen mucho. Necesitan que el cuerpo sostenga ese nivel sin romperse.\n\nEl ejecutivo lidia con presión sostenida, decisiones constantes, jet lag. Su sistema nervioso vive en activación.\n\nEl atleta entrena, compite, se recupera. Necesita más rango, más precisión, mejor lectura de sus señales.\n\nEl creador —escritor, músico, artista, fundador— vive entre la exigencia física y la ansiedad mental. Picos y caídas. Necesita un sistema que sostenga ese ritmo sin colapsar.\n\nEn los tres casos no vienen a curarse. Vienen a tener más base, más capacidad de respuesta, más eje. A sostener mejor lo que ya hacen y a ir más lejos.\n\nEse es el trabajo que más me interesa.",
  },
  {
    q: "¿Cómo se agenda una sesión? ¿Cómo reservo?",
    a: "El primer paso suele ser una conversación breve por WhatsApp o videollamada para ver si el trabajo encaja con tu caso.\n\nSi tiene sentido continuar, agendamos la primera sesión.\n\nLa primera sesión y el proceso se abonan por anticipado. El abono confirma la reserva.",
    href: "/contacto",
    linkText: "Escribirme ahora",
  },
];

const FAQ_EN: QA[] = [
  {
    q: "What exactly happens in a session?",
    a: "First I ask where you are, what you need, and what brings you here.\n\nMost people write before the session, so many times we already arrive with a first reading of the case.\n\nThen I read how your body is organized in gravity: posture, compensations, tensions, and where the real origin of the pattern seems to be.\n\nFrom there I work with the layers involved: structure, nervous system, energy, and the mental-emotional dimension.\n\nEach session lasts between 60 and 90 minutes.\n\nI do not follow a fixed protocol. The session depends on what your system shows and what can truly change that day.",
  },
  {
    q: "How do I prepare for the first session? What do I bring?",
    a: "In-person session:\n\nComfortable clothing that lets you move. Shorts or leggings, top or t-shirt. Cotton if possible.\n\nNo perfume, deodorant, or strong scents. Body scent carries information about the system; external aromas mask it.\n\nYou don't need to come fasting, but it's better not to arrive with a heavy meal just before.\n\nIf you have relevant medical reports (MRIs, blood tests, diagnoses), bring them.\n\nOnline session:\n\nA space where you have two or three meters of movement.\n\nGood lighting so I can see you clearly.\n\nGood wifi and a charged battery (phone or computer) so the session doesn't drop.\n\nComfortable clothing, same as in-person.\n\nIn both formats, just come as you are. The first session starts with a conversation, not with technique.",
  },
  {
    q: "How is this different from conventional Rolfing?",
    a: "I started as a Rolfer more than 20 years ago, but the work has evolved a lot.\n\nToday I include the structural reading of Rolfing, but also visceral osteopathy, nervous system regulation, Japanese acupuncture, energy work, and mental-emotional reading.\n\nIt is not pure Rolfing.\n\nIt is a reading of the whole system.",
  },
  {
    q: "Does online work have the same depth as in-person?",
    a: "Yes. Online work has the same depth and can produce the same kind of reorganization.\n\nStructural reading, nervous system regulation, energy work, and movement guidance work very well at a distance.\n\nWhat changes is not the depth of the work, but the format: online there is no direct manual contact.\n\nSome people prefer a more physical session, but most adapt without a problem to the available format when they are looking for a solution and the work makes sense.\n\nWhen it is necessary or fits better, we organize in-person intensives in Barcelona.",
  },
  {
    q: "What is your training? Are you certified?",
    a: "I am a Rolfer certified by the European Rolfing School (Munich).\n\nAfter that, more than 20 years training with masters in Germany, Japan, Mexico, Malaysia, Thailand, and the United States.\n\nVisceral osteopathy with Jean-Pierre Barral, Alain Croibier, and Peter Schwind.\n\nJapanese acupuncture in Japan.\n\nNervous system regulation, energy work, and mental-emotional dimension with different masters over the years.\n\nThe training hasn't stopped. Every client and every case keeps teaching me.",
  },
  {
    q: "How much does it cost to work with you?",
    a: "I work with single sessions and processes.\n\nA single session is €180 / hour + VAT.\n\nThe first session, which works as the entry point into the process, is €360 + VAT.\n\nFrom there, if it makes sense to continue, we define the process according to the frequency, depth, and level of intervention the case requires.\n\nIn most cases we work within an approximate 6-month frame, with weekly or biweekly sessions.\n\nWhen the case requires it, there are also intensive formats or specific interventions with a custom budget.",
    href: "/en/blog/what-defines-the-price-of-an-intervention",
    linkText: "How pricing is defined",
  },
  {
    q: "Why do I work by process and not through standalone sessions?",
    a: "Because a standalone session can bring relief, but it rarely reorganizes a pattern that has been repeating for years.\n\nThe first session is there to read the system and see whether it makes sense to work through a process.\n\nIn most cases, that process moves within an approximate 6-month frame.\n\nFrom there, depending on the case, we work with weekly or biweekly sessions and a monthly process adjusted to the frequency and depth the system requires.\n\nIt is not a rigid package.\n\nIt is a way to give the change real continuity.\n\nStandalone sessions make sense for specific cases or for people who already know the work. For chronic patterns or heavily loaded systems, I work better through process.",
  },
  {
    q: "What do I do between sessions? Is there homework?",
    a: "It depends on the case.\n\nSometimes I leave specific exercises: breathing, movements, attention to a particular pattern. A few things, very precise.\n\nOther times the most important thing is to observe: how something changes, where it appears, what happens when the system starts to move.\n\nIt's not a task of doing exercises every day. It's a work of presence with your body between sessions.\n\nIf you need more, we define it according to what your case requires.",
  },
  {
    q: "What results can I expect and when will I notice them?",
    a: "Usually there's some change from the first session: more space to breathe, less pain, a sense of axis.\n\nThe real question is whether those changes are the ones you expected them to be.\n\nOften there's a big change in one session and the person creates the expectation that every session will be the same. Or they hear that someone achieved something important in a process —that maybe lasted a year— and they expect to reach the same place in a single session.\n\nIt doesn't work like that.\n\nIn a 6-month process, the pattern usually starts to move in the first 3 or 4 sessions, and the reorganization consolidates around the third or fourth month.\n\nEach body has its own time.\n\nI don't promise when you will notice concrete changes. What I can say is what I see in practice: processes that are completed usually show real and lasting reorganization.\n\nIt is not temporary relief. It is a change of organization.\n\nSometimes the body releases layers it has been holding for years. There can be more sensitivity, fatigue, or emotion for a few days. It does not always happen, but when it does, we work through it.\n\nThere are also year-long or two-year processes, and clients I work with regularly. The goal doesn't have to be waiting for a crisis to come. The most interesting work is often building a better balance when the person is already well.",
  },
  {
    q: "Is this like massage or physiotherapy?",
    a: "No.\n\nMassage usually works the muscle.\n\nPhysiotherapy usually works the injury.\n\nHere we work the system: how your body is organized, why it compensates, what nervous pattern sustains the tension, and what needs to change so the body stops repeating the same thing.\n\nManual technique is only one tool.\n\nWhat matters is the reading of the system.",
  },
  {
    q: "Can I combine this work with my current physio, osteopath, or therapist?",
    a: "It depends on the case.\n\nIn general, yes. This work doesn't conflict with physiotherapy, structural osteopathy, or psychotherapy. They often complement each other well.\n\nBut there are nuances.\n\nIf you're in the middle of intensive treatment with another professional (post-surgery rehab, daily physio for an acute injury), it's better to talk about it first so we don't overlap stimuli.\n\nIf you're doing psychotherapy, this work addresses a different layer (the body and the nervous system) and usually supports the therapeutic process.\n\nIn the first 15-minute conversation we can look at your specific case.",
  },
  {
    q: "Do you work with pregnancy, children, or older adults?",
    a: "Yes, with nuances depending on the case.\n\nPregnancy: I work with pregnant women and postpartum. There are specific adjustments depending on the trimester and the situation.\n\nOlder adults: I work with people of any age. The precision and gentleness of the work also make it suitable for more sensitive bodies.\n\nChildren and adolescents: from a certain age, and always with the presence or consent of the parents. We assess each case together.\n\nVery often it is also necessary to work with the parents so the family system can better support the change.\n\nIn the first 15-minute conversation we see if your case fits.",
  },
  {
    q: "I have had chronic pain for years. Can this help?",
    a: "This work usually makes sense for people who have already tried several things: physiotherapy, osteopathy, chiropractic, massage, yoga, or training, but the pattern keeps coming back.\n\nNot because those tools are wrong.\n\nBut because many times they work one part without reading the whole system.\n\nIf you have been in the same place for years, the best thing is to talk first for 15 minutes at no cost to see if it makes sense to work together.",
  },
  {
    q: "Do you have to be in crisis to come?",
    a: "No.\n\nMany people arrive in crisis, and that can also be worked with. But the finest work usually begins when the system is no longer busy putting out a fire.\n\nA session can contain what is urgent. A process can reorganize what produced it.",
    href: "/en/blog/you-dont-have-to-be-in-crisis-to-come",
    linkText: "Read the full article",
  },
  {
    q: "Do you work with executives, athletes, or creators?",
    a: "Yes. They are an important part of my work.\n\nThey have something in common: demand. They live close to the limit. They produce a lot. They need the body to sustain that level without breaking.\n\nThe executive deals with sustained pressure, constant decisions, jet lag. Their nervous system lives in activation.\n\nThe athlete trains, competes, recovers. They need more range, more precision, better reading of their signals.\n\nThe creator —writer, musician, artist, founder— lives between physical demand and mental anxiety. Peaks and dips. They need a system that sustains that rhythm without collapsing.\n\nIn all three cases they don't come to heal. They come to have more ground, more capacity to respond, more axis. To sustain better what they already do, and to go further.\n\nThat's the work I find most interesting.",
  },
  {
    q: "How do I book a session?",
    a: "The first step is usually a 15-minute conversation by WhatsApp or video call to see if the work fits your case.\n\nIf it makes sense to continue, we book the first session.\n\nThe first session and the process are paid in advance. The payment confirms the booking.\n\nTo reach me: WhatsApp +34 679 22 97 44 or the form at /contacto.",
  },
];

export function FAQ({ lang = "es" }: { lang?: "es" | "en" }) {
  const data = lang === "es" ? FAQ_ES : FAQ_EN;
  const title = lang === "es" ? "Preguntas frecuentes" : "Frequently asked questions";
  const subtitle = lang === "es"
    ? "Lo que la gente suele preguntarme antes de la primera sesión."
    : "What people typically ask me before the first session.";

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section style={{ borderTop: "1px solid var(--border-subtle)", background: "#EF4444", color: "#fff" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-[900px] px-6 py-[120px]">
        <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.8)" }}>
          {title}
        </div>
        <h2 className="mt-3 text-3xl font-medium tracking-tight">
          {subtitle}
        </h2>

        <div className="mt-12 space-y-4">
          {data.map((item, i) => (
            <details
              key={i}
              className="group rounded-[1.5rem] p-6"
              style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}
            >
              <summary
                className="cursor-pointer list-none text-lg font-normal tracking-tight outline-none"
                style={{ color: "var(--text-main)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span>{item.q}</span>
                  <span
                    className="mt-1 text-[10px] uppercase tracking-[0.2em] transition group-open:rotate-45"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    +
                  </span>
                </div>
              </summary>
              <div className="mt-5 space-y-4">
                {renderAnswer(item.a)}
                {item.href && item.linkText ? (
                  <Link
                    href={item.href}
                    className="mt-5 inline-block text-[11px] uppercase tracking-[0.14em] transition hover:opacity-60"
                    style={{ color: "var(--text-main)" }}
                  >
                    {item.linkText} &rarr;
                  </Link>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
