type SiteFooterProps = {
  lang?: "es" | "en";
};

export function SiteFooter({ lang = "es" }: SiteFooterProps) {
  const copy =
    lang === "en"
      ? {
          label: "Structural reorganization",
          online: "Online",
          instagramLabel: "Instagram Ferran Moreno",
          linkedIn: "LinkedIn",
        }
      : {
          label: "Reorganización estructural",
          online: "Online",
          instagramLabel: "Instagram Ferran Moreno",
          linkedIn: "LinkedIn",
        };

  const instagramGradientId = lang === "en" ? "secondaryFooterInstagramEn" : "secondaryFooterInstagramEs";

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(139, 104, 40, 0.42)",
        background: "#C4A76A",
      }}
    >
      <div
        className="mx-auto grid max-w-[900px] gap-4 px-6 py-8 text-sm lg:grid-cols-[1.2fr_1fr_auto] lg:items-center"
        style={{ color: "rgba(88, 73, 46, 0.82)" }}
      >
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 whitespace-nowrap">
          <span>{copy.label} ·</span>
          <a
            href="https://maps.app.goo.gl/8Hd8KbJKawB7BjWZ6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:opacity-60"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z" />
              <circle cx="12" cy="11" r="2.3" fill="currentColor" stroke="none" />
            </svg>
            Lluçà (Barcelona)
          </a>
          <span>· {copy.online}</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 lg:justify-self-center">
          <a
            href="https://www.instagram.com/ferran__moreno_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:opacity-60"
            aria-label={copy.instagramLabel}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id={instagramGradientId} x1="3" y1="21" x2="21" y2="3" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F58529" />
                  <stop offset="0.35" stopColor="#FEDA77" />
                  <stop offset="0.6" stopColor="#DD2A7B" />
                  <stop offset="0.85" stopColor="#8134AF" />
                  <stop offset="1" stopColor="#515BD4" />
                </linearGradient>
              </defs>
              <rect x="3" y="3" width="18" height="18" rx="5" fill={`url(#${instagramGradientId})`} />
              <circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="1.8" />
              <circle cx="17.5" cy="6.5" r="1.1" fill="#fff" />
            </svg>
            Instagram
          </a>
          <span>·</span>
          <a
            href="https://www.linkedin.com/in/ferran-moreno-56b04b29/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:opacity-60"
            aria-label="LinkedIn Ferran Moreno"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#0A66C2" />
              <path d="M8.1 10.1H5.9V18h2.2v-7.9ZM7 5.9a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6ZM18.1 13.3c0-2.4-1.3-3.5-3.1-3.5-1.4 0-2 .8-2.4 1.3v-1.1h-2.2V18h2.2v-4.4c0-1.2.2-2.4 1.7-2.4s1.5 1.4 1.5 2.5V18h2.2v-4.7Z" fill="#fff" />
            </svg>
            {copy.linkedIn}
          </a>
        </div>

        <div className="lg:justify-self-end">© 2026 Ferran Moreno</div>
      </div>
    </footer>
  );
}
