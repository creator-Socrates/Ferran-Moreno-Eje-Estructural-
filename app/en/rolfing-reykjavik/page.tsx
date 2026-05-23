import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl, contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rolfing in Reykjavik | Online & Intensive Sessions",
  description:
    "Bodywork and structural work for clients in Reykjavik and Iceland. Online sessions with the same depth as in-person. In-person intensives in Barcelona. The work goes beyond Rolfing — structural, nervous system, energetic, mental and emotional layers.",
  alternates: { canonical: "/en/rolfing-reykjavik" },
  keywords: [
    "rolfing reykjavik",
    "rolfing iceland",
    "structural integration reykjavik",
    "bodywork reykjavik",
    "somatic work iceland",
    "nervous system regulation iceland",
    "online rolfing iceland",
    "deep bodywork iceland",
    "Ferran Moreno iceland",
  ],
  openGraph: {
    title: "Rolfing in Reykjavik | Ferran Moreno",
    description:
      "Bodywork for clients in Reykjavik. Online sessions + intensive in Barcelona. Beyond Rolfing.",
    url: `${siteUrl}/en/rolfing-reykjavik`,
    siteName: "Ferran Moreno",
    locale: "en_US",
    type: "website",
  },
};

export default function RolfingReykjavik() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <header className="sticky top-0 z-30" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-5">
          <Link href="/en" className="leading-none">
            <div className="text-[17px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-main)" }}>Ferran Moreno</div>
            <div className="mt-[5px] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              BODYWORK · REGULATION · ENERGY
            </div>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" style={{ color: "var(--text-secondary)" }}>
            <Link href="/en" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Home</Link>
            <Link href="/en/my-story" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">My story</Link>
            <Link href="/en/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Wall of trust</Link>
            <Link href="/en/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link>
            <a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <p className="mb-6 text-xs uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
              Bodywork · Reykjavik · Online & In-person
            </p>
            <h1 className="text-5xl font-semibold leading-[1.15] tracking-tight lg:text-6xl">
              ROLFING
              <span className="block" style={{ color: "var(--text-secondary)" }}>FOR CLIENTS IN REYKJAVIK</span>
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-[1.8]">
              I started as a Rolfer over 20 years ago. The work has evolved. Today, sessions include the structural reading of Rolfing — but also visceral osteopathy, nervous system regulation, energy work, and the mental and emotional layers of the pattern.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Online sessions with clients in Reykjavik and Iceland — same depth as in-person. For cases that require direct manual structural work: intensive sessions in Barcelona.
            </p>
            <div className="mt-12">
              <a href={`${contactWhatsApp}?text=Hi%20Ferran%2C%20I%27m%20in%20Reykjavik%20and%20interested%20in%20working%20with%20you`} target="_blank" rel="noopener noreferrer" className="rounded-full px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-85" style={{ background: "var(--text-main)" }}>Get in touch</a>
            </div>
          </div>
        </section>

        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Beyond Rolfing</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">Body, nervous system, emotions and field don&apos;t separate.</h2>
            <p className="mt-6 text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Rolfing was the initial training. Then came twenty years of study — visceral osteopathy, Japanese acupuncture, movement, energy work, nervous system regulation, mental and emotional layers. Each session is a reading of the whole system, not the application of a technique.
            </p>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div className="rounded-[1.75rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                <h3 className="text-lg font-medium">Structure</h3>
                <p className="mt-3 leading-[1.8]" style={{ color: "var(--text-secondary)" }}>Reading how the body is organized in gravity. Where it compensates. Where the real origin of the pattern lives.</p>
              </div>
              <div className="rounded-[1.75rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                <h3 className="text-lg font-medium">Regulation</h3>
                <p className="mt-3 leading-[1.8]" style={{ color: "var(--text-secondary)" }}>Returning range to the nervous system. The body cannot reorganize while in threat response.</p>
              </div>
              <div className="rounded-[1.75rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                <h3 className="text-lg font-medium">Energy</h3>
                <p className="mt-3 leading-[1.8]" style={{ color: "var(--text-secondary)" }}>Direct energetic work. Operates at distance with the same depth — verified in session, repeatedly.</p>
              </div>
              <div className="rounded-[1.75rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                <h3 className="text-lg font-medium">Mental & emotional</h3>
                <p className="mt-3 leading-[1.8]" style={{ color: "var(--text-secondary)" }}>Emotions and cognitive patterns are part of the system. When the nervous system shifts, the cognitive pattern shifts.</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>How it works from Reykjavik</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">Two formats. Same precision.</h2>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
                <div className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: "var(--text-secondary)" }}>Online sessions</div>
                <p className="leading-[1.8]">Regular work via video call. Structural reading, nervous system regulation, movement guidance, energy and emotional work. The distance does not diminish the depth.</p>
                <div className="mt-6 text-sm" style={{ color: "var(--text-secondary)" }}>€180 / session</div>
              </div>
              <div className="rounded-[2rem] p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
                <div className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: "var(--text-secondary)" }}>Intensive in Barcelona</div>
                <p className="leading-[1.8]">2–3 days of direct manual structural work in Lluçà, Barcelona. For cases where the next layer requires direct contact.</p>
                <div className="mt-6 text-sm" style={{ color: "var(--text-secondary)" }}>By arrangement · Contact for details</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-[900px] px-6 py-[120px] text-center">
            <p className="text-3xl font-medium tracking-tight">If the pattern is still there, let&apos;s talk.</p>
            <p className="mt-4 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>First 15 minutes: no charge. We assess if this work makes sense for your case.</p>
            <div className="mt-10">
              <a href={`${contactWhatsApp}?text=Hi%20Ferran%2C%20I%27m%20in%20Reykjavik%20and%20interested%20in%20your%20work`} target="_blank" rel="noopener noreferrer" className="rounded-full px-10 py-4 text-base font-medium text-white transition hover:opacity-85" style={{ background: "var(--text-main)" }}>Contact via WhatsApp</a>
            </div>
            <p className="mt-5 text-sm" style={{ color: "var(--text-secondary)" }}>{contactWhatsAppDisplay} · Online from Reykjavik · In-person in Barcelona</p>
          </div>
        </section>
      </main>

      <footer style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
        <div className="mx-auto flex max-w-[900px] flex-col gap-3 px-6 py-8 text-sm lg:flex-row lg:items-center lg:justify-between" style={{ color: "var(--text-secondary)" }}>
          <div>Lluçà (Barcelona) · Online worldwide</div>
          <div>
            <a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">{contactWhatsAppDisplay}</a>
            {" "}·{" "}
            <a href="https://www.instagram.com/ferran__moreno_/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">@ferran__moreno_</a>
          </div>
          <div>© 2026 Ferran Moreno</div>
        </div>
      </footer>
    </div>
  );
}
