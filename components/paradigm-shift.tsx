type Lang = "es" | "en";

const COPY: Record<Lang, { eyebrow: string; line1: string; line2: string; closing: string }> = {
  es: {
    eyebrow: "Cambio de modelo",
    line1: "No vienes solo a reparar.",
    line2: "Vienes a recuperar capacidad.",
    closing:
      "Capacidad para vivir mejor, sostener lo que amas, nutrir tu pasión, tu trabajo, tus sueños y tu presencia.",
  },
  en: {
    eyebrow: "A different model",
    line1: "You don't come only to repair.",
    line2: "You come to recover capacity.",
    closing:
      "Capacity to live better, to sustain what you love, to nurture your passion, your work, your dreams, and your presence.",
  },
};

export function ParadigmShift({ lang = "es" }: { lang?: Lang }) {
  const t = COPY[lang];
  return (
    <section style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="mx-auto max-w-[900px] px-6 py-[100px] text-center">
        <div
          className="text-sm uppercase tracking-[0.25em]"
          style={{ color: "var(--text-secondary)" }}
        >
          {t.eyebrow}
        </div>
        <p className="mt-6 text-3xl font-medium tracking-tight sm:text-4xl">{t.line1}</p>
        <p className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">{t.line2}</p>
        <p
          className="mx-auto mt-10 max-w-2xl text-lg leading-[1.8]"
          style={{ color: "var(--text-secondary)" }}
        >
          {t.closing}
        </p>
      </div>
    </section>
  );
}
