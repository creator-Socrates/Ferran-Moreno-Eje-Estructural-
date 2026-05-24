type QA = { q: string; a: string };

const FAQ_ES: QA[] = [
  {
    q: "¿Qué pasa exactamente en una sesión?",
    a: "Primero leo cómo está organizado tu cuerpo en la gravedad — postura, compensaciones, dónde está el origen real del patrón. Después trabajo en cuatro capas: estructura, sistema nervioso, energía, y las capas mental y emocional. Cada sesión dura 60–90 minutos. No sigo protocolo. Lo que hago depende de lo que tu sistema pide.",
  },
  {
    q: "¿En qué se diferencia del Rolfing convencional?",
    a: "Empecé como Rolfer hace 20 años. El trabajo ha evolucionado. Hoy las sesiones incluyen la lectura estructural del Rolfing, pero también osteopatía visceral, regulación del sistema nervioso, acupuntura japonesa, trabajo energético y las capas mental y emocional. No es Rolfing puro. Es una lectura del sistema entero.",
  },
  {
    q: "¿El trabajo online tiene la misma profundidad que presencial?",
    a: "Sí, para la mayoría de los casos. La lectura estructural, la regulación del sistema nervioso, el trabajo energético y la guía de movimiento funcionan a distancia con la misma profundidad. Lo que no se hace online es el trabajo manual directo (compresión fascial, visceral). Para esos casos: intensivos presenciales en Barcelona.",
  },
  {
    q: "¿Cuánto cuesta una sesión y un proceso?",
    a: "Sesión suelta: 180€ + IVA. Primera sesión del proceso: 360€ (entrada). Proceso de 6 meses: entre 360€ y 600€ al mes, definido tras la primera sesión. El proceso se cobra por anticipado antes de la primera sesión.",
  },
  {
    q: "¿Por qué un proceso de 6 meses y no sesiones sueltas?",
    a: "Cuando el cuerpo lleva años compensando, una sesión no cambia el patrón. El proceso es de 12 sesiones (2 al mes durante 6 meses). Al tercer mes evaluamos si continuar o cerrar. Las sesiones sueltas funcionan para casos puntuales — no para patrones crónicos.",
  },
  {
    q: "¿Es como un masaje o como fisioterapia?",
    a: "No. El masaje trabaja el músculo. La fisioterapia trabaja la lesión. Aquí trabajamos el sistema — cómo el cuerpo está organizado en su totalidad, por qué compensa, qué patrón nervioso sostiene la tensión. La técnica manual es solo una de las herramientas. La lectura del sistema es lo central.",
  },
  {
    q: "Llevo años con dolor crónico, ¿me puede servir?",
    a: "El cliente típico ha probado varias cosas — fisioterapia, osteopatía, quiropraxia, masajes, yoga — y el patrón sigue ahí. No porque las otras cosas estén mal. Porque trabajaban la pieza sin ver el sistema. Si llevas años en el mismo lugar, hablamos primero 15 minutos sin coste para ver si tiene sentido.",
  },
  {
    q: "¿Para quién NO es este trabajo?",
    a: "Para quien busca alivio rápido de un síntoma puntual sin compromiso con un proceso. Para quien decide por precio como criterio principal. Para casos médicos agudos que necesitan intervención clínica primaria (cirugía, urgencia, diagnóstico médico).",
  },
];

const FAQ_EN: QA[] = [
  {
    q: "What exactly happens in a session?",
    a: "First I read how your body is organized in gravity — posture, compensations, where the real origin of the pattern lives. Then I work across four layers: structure, nervous system, energy, and the mental and emotional layers. Each session lasts 60–90 minutes. I don't follow a protocol. What I do depends on what your system asks for.",
  },
  {
    q: "How is this different from conventional Rolfing?",
    a: "I started as a Rolfer 20 years ago. The work has evolved. Today, sessions include the structural reading of Rolfing — but also visceral osteopathy, nervous system regulation, Japanese acupuncture, energy work, and the mental and emotional layers. It is not pure Rolfing. It is a reading of the whole system.",
  },
  {
    q: "Does online work have the same depth as in-person?",
    a: "Yes, for most cases. Structural reading, nervous system regulation, energy work, and movement guidance work at distance with the same depth. What does not happen online is direct manual work (fascial compression, visceral). For those cases: in-person intensives in Barcelona.",
  },
  {
    q: "What does a session and a process cost?",
    a: "Single session: €180. First session of a process: €360 (entry point). Six-month process: between €360 and €600 per month, defined after the first session. The process is paid in advance before the first session.",
  },
  {
    q: "Why a 6-month process and not single sessions?",
    a: "When the body has been compensating for years, one session does not change the pattern. The process is 12 sessions (2 per month over 6 months). At month three we assess whether to continue or close. Single sessions work for one-off cases — not for chronic patterns.",
  },
  {
    q: "Is this like massage or physiotherapy?",
    a: "No. Massage works the muscle. Physiotherapy works the injury. Here we work the system — how the body is organized as a whole, why it compensates, what nervous pattern sustains the tension. Manual technique is only one tool. Reading the system is what matters.",
  },
  {
    q: "I have had chronic pain for years. Can this help?",
    a: "The typical client has tried several things — physiotherapy, osteopathy, chiropractic, massage, yoga — and the pattern is still there. Not because the other things were wrong. Because they worked the piece without seeing the system. If you have been in the same place for years, we talk first for 15 minutes at no cost to see if this makes sense.",
  },
  {
    q: "Who is this work NOT for?",
    a: "For anyone looking for quick relief from a single symptom without commitment to a process. For anyone who decides by price as the main criterion. For acute medical cases requiring primary clinical intervention (surgery, emergency, medical diagnosis).",
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
    <section style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-[900px] px-6 py-[120px]">
        <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
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
                className="cursor-pointer list-none text-lg font-medium tracking-tight outline-none"
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
              <p className="mt-5 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
