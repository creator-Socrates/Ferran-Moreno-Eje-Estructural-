import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl, contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { LocationStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Rolfing in Tel Aviv | Online & Intensive Sessions",
  description:
    "Rolfing and structural bodywork for clients in Tel Aviv and Israel. Online sessions worldwide. In-person intensives in Barcelona. Ferran Moreno — Certified Rolfer with 20+ years of experience in structural integration and nervous system regulation.",
  alternates: { canonical: "/en/rolfing-tel-aviv" },
  keywords: [
    "rolfing tel aviv",
    "structural integration tel aviv",
    "bodywork tel aviv",
    "somatic work tel aviv",
    "nervous system regulation tel aviv",
    "online rolfing israel",
    "rolfing israel",
    "deep bodywork tel aviv",
    "structural bodywork israel",
    "chronic pain tel aviv",
    "somatic therapy israel",
  ],
  openGraph: {
    title: "Rolfing in Tel Aviv | Ferran Moreno",
    description:
      "Rolfing and structural bodywork for clients in Tel Aviv. Online sessions + intensive in Barcelona.",
    url: `${siteUrl}/en/rolfing-tel-aviv`,
    siteName: "Ferran Moreno",
    locale: "en_US",
    type: "website",
  },
};

export default function RolfingTelAviv() {
  return (
    <>
      <LocationStructuredData
        city="Tel Aviv"
        country="IL"
        lang="en"
        slug="rolfing-tel-aviv"
        description="Rolfing and structural bodywork for clients in Tel Aviv and Israel. Online sessions worldwide. In-person intensives in Barcelona. Ferran Moreno — Certified Rolfer with 20+ years of experience in structural integration and nervous system regulation."
      />
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
              Rolfing · Tel Aviv · Online & In-person
            </p>
            <h1 className="text-5xl font-semibold leading-[1.15] tracking-tight lg:text-6xl">
              ROLFING
              <span className="block" style={{ color: "var(--text-secondary)" }}>FOR CLIENTS IN TEL AVIV</span>
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-[1.8]">
              Online sessions with clients in Tel Aviv and Israel — same depth as in-person. For cases that require direct manual structural work: intensive sessions in Barcelona.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Ferran Moreno. 20+ years of experience. Certified Rolfer. Structural integration, visceral osteopathy, Japanese acupuncture, energy work — trained in Germany, Japan, Mexico, Malaysia, Thailand, and the United States.
            </p>
            <div className="mt-12">
              <a
                href={`${contactWhatsApp}?text=Hi%20Ferran%2C%20I%27m%20in%20Tel%20Aviv%20and%20interested%20in%20working%20with%20you`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-85"
                style={{ background: "var(--text-main)" }}
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Beyond Rolfing</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">Body, nervous system, emotions and field don&apos;t separate.</h2>
            <p className="mt-6 text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Rolfing was the initial training. Then came twenty years of study — visceral osteopathy, Japanese acupuncture, movement, energy work, nervous system regulation, mental and emotional layers. Each session is a reading of the whole system, not the application of a technique.
            </p>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div className="rounded-[1.75rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
                <h3 className="text-lg font-medium">Structure</h3>
                <p className="mt-3 leading-[1.8]" style={{ color: "var(--text-secondary)" }}>Reading how the body is organized in gravity. Where it compensates. Where the real origin of the pattern lives.</p>
              </div>
              <div className="rounded-[1.75rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
                <h3 className="text-lg font-medium">Regulation</h3>
                <p className="mt-3 leading-[1.8]" style={{ color: "var(--text-secondary)" }}>Returning range to the nervous system. The body cannot reorganize while in threat response.</p>
              </div>
              <div className="rounded-[1.75rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
                <h3 className="text-lg font-medium">Energy</h3>
                <p className="mt-3 leading-[1.8]" style={{ color: "var(--text-secondary)" }}>Direct energetic work. Operates at distance with the same depth — verified in session, repeatedly.</p>
              </div>
              <div className="rounded-[1.75rem] p-8" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
                <h3 className="text-lg font-medium">Mental & emotional</h3>
                <p className="mt-3 leading-[1.8]" style={{ color: "var(--text-secondary)" }}>Emotions and cognitive patterns are part of the system. When the nervous system shifts, the cognitive pattern shifts.</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>How it works from Tel Aviv</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">Two formats. Same precision.</h2>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                <div className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: "var(--text-secondary)" }}>Online sessions</div>
                <p className="leading-[1.8]">Regular work via video call. Structural reading, nervous system regulation, movement guidance, energy work. Most international clients work this way long-term. The depth doesn&apos;t diminish with distance.</p>
                <div className="mt-6 text-sm" style={{ color: "var(--text-secondary)" }}>€180 / session</div>
              </div>
              <div className="rounded-[2rem] p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                <div className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: "var(--text-secondary)" }}>Intensive in Barcelona</div>
                <p className="leading-[1.8]">2–3 days of direct manual structural work in Lluçà, Barcelona. Tel Aviv to Barcelona is a short flight. Used when the next layer requires direct contact — fascial work, visceral manipulation, structural compression.</p>
                <div className="mt-6 text-sm" style={{ color: "var(--text-secondary)" }}>By arrangement · Contact for details</div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Common cases</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">Situations where this work tends to make a real difference.</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {[
                "Chronic pain that keeps returning despite treatment",
                "Persistent tension or fatigue without clear origin",
                "Nervous system dysregulation — anxiety, burnout, hypervigilance",
                "Post-injury or post-surgery patterns that haven't resolved",
                "Performance blocks in high-demand professionals and executives",
                "People who have tried many approaches and remain in the same place",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] p-6 leading-[1.8]"
                  style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>About Ferran</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">20+ years. Different body. Same precision.</h2>
            <div className="mt-8 space-y-5 text-lg leading-[1.8]">
              <p>At 17, a taekwondo injury left me unable to function for seven years. Constant pain. Everything tried. Nothing worked — until a single osteopathy session showed me there was another way.</p>
              <p>I left a multinational and spent two decades training across Europe, Asia, Latin America, and the United States. Not collecting techniques. Understanding the system.</p>
              <p className="font-medium">Today I work with people who have tried many things and are still in the same place.</p>
            </div>
            <div className="mt-8 flex gap-6">
              <Link href="/en/my-story" className="text-sm underline underline-offset-4 hover:opacity-60">Read full story →</Link>
              <Link href="/en/wall-of-trust" className="text-sm underline underline-offset-4 hover:opacity-60">Wall of trust →</Link>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-[900px] px-6 py-[120px] text-center">
            <p className="text-3xl font-medium tracking-tight">If the pattern is still there, let&apos;s talk.</p>
            <p className="mt-4 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              First 15 minutes: no charge. We assess if this work makes sense for your case.
            </p>
            <div className="mt-10">
              <a
                href={`${contactWhatsApp}?text=Hi%20Ferran%2C%20I%27m%20in%20Tel%20Aviv%20and%20interested%20in%20Rolfing`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-10 py-4 text-base font-medium text-white transition hover:opacity-85"
                style={{ background: "var(--text-main)" }}
              >
                Contact via WhatsApp
              </a>
            </div>
            <p className="mt-5 text-sm" style={{ color: "var(--text-secondary)" }}>
              {contactWhatsAppDisplay} · Online from Tel Aviv · In-person in Barcelona
            </p>
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
    </>
  );
}
