import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl, contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";
import { ParadigmShift } from "@/components/paradigm-shift";

export const metadata: Metadata = {
  title: "Online Rolfing & Bodywork Sessions | Ferran Moreno",
  description:
    "Online Rolfing and structural bodywork with Ferran Moreno. 20+ years of experience. Work with clients in Berlin, London, New York, Mexico and worldwide. Same depth, no travel required.",
  alternates: { canonical: "/en/online-bodywork" },
  keywords: [
    "online rolfing",
    "rolfing online sessions",
    "online structural integration",
    "online bodywork",
    "online somatic work",
    "remote nervous system regulation",
    "online deep bodywork",
    "structural bodywork online",
    "rolfing worldwide",
    "bodywork online sessions",
    "somatic experiencing online",
    "nervous system regulation online",
  ],
  openGraph: {
    title: "Online Rolfing & Bodywork | Ferran Moreno",
    description:
      "Online Rolfing and structural bodywork. Same depth as in-person. Clients in Berlin, London, New York, Mexico and worldwide.",
    url: `${siteUrl}/en/online-bodywork`,
    siteName: "Ferran Moreno",
    locale: "en_US",
    type: "website",
  },
};

export default function OnlineBodywork() {
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
            <span style={{ color: "var(--border-subtle)" }}>|</span>
            <Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">ES</Link>
          </nav>
        </div>
      </header>

      <main>

        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <p className="mb-6 text-xs uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
              Online sessions · Worldwide
            </p>
            <h1 className="text-5xl font-semibold leading-[1.15] tracking-tight lg:text-6xl">
              ONLINE ROLFING
              <span className="block" style={{ color: "var(--text-secondary)" }}>& STRUCTURAL BODYWORK</span>
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-[1.8]">
              The work doesn&apos;t require physical contact to be effective. Some of the most significant shifts happen remotely — through perception, guidance, and the body&apos;s own response.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Online sessions include structural reading, nervous system work, movement and postural guidance, and energy work. Everything except direct manual contact.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href={`${contactWhatsApp}?text=Hi%20Ferran%2C%20I%27m%20interested%20in%20online%20sessions`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-85"
                style={{ background: "var(--text-main)" }}
              >
                Book an online session
              </a>
            </div>
          </div>
        </section>

        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>What online sessions include</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">The same process. Different format.</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {[
                { title: "Structural reading", text: "Reading how your body is organized through movement, posture, and visual cues. The same diagnostic process as in-person." },
                { title: "Nervous system regulation", text: "Direct work with the autonomic nervous system. Regulation doesn't require hands — it requires precision and the right conditions." },
                { title: "Movement and postural work", text: "Guided exercises specific to your pattern. Not generic stretching — tailored to what your structural reading shows." },
                { title: "Energy and remote work", text: "This modality works regardless of physical distance. Clients consistently report the same depth as in-person sessions." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] p-8"
                  style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}
                >
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="mt-3 leading-[1.8]" style={{ color: "var(--text-secondary)" }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Who works with Ferran online</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">Clients from Berlin, London, New York, Mexico, and beyond.</h2>
            <p className="mt-6 text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Most clients working remotely have chronic patterns — long-standing pain, persistent tension, fatigue, performance blocks — that haven&apos;t responded to local treatment. They&apos;re not looking for convenience. They&apos;re looking for something that actually works.
            </p>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                "Chronic pain that keeps returning despite treatment",
                "Persistent tension or fatigue without clear cause",
                "Nervous system dysregulation — anxiety, reactivity, hypervigilance",
                "Post-injury patterns that haven't resolved",
                "Performance plateau — executives, athletes, high-demand professionals",
                "People who have tried many things and are still in the same place",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] p-6 leading-[1.8] text-sm"
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
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Process</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">Online or in-person — the same 6-month structure.</h2>
            <p className="mt-6 text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              The work unfolds over 6 months. Two sessions per month. Paid in advance before the first session — the same model as in-person. At month three we assess whether to continue or close.
            </p>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                <div className="text-sm uppercase tracking-[0.2em]" style={{ color: "var(--text-secondary)" }}>Online format</div>
                <ul className="mt-6 space-y-4">
                  {[
                    "Video call (60–90 min per session)",
                    "Structural reading + nervous system work",
                    "Between sessions: specific guidance",
                    "Full 6-month process or single sessions available",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 leading-[1.8]">
                      <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: "var(--text-main)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[2rem] p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                <div className="text-sm uppercase tracking-[0.2em]" style={{ color: "var(--text-secondary)" }}>Investment</div>
                <div className="mt-6 space-y-6">
                  <div>
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Single session</div>
                    <div className="mt-1 text-2xl font-semibold">€180</div>
                  </div>
                  <div className="pt-6" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>6-month process</div>
                    <div className="mt-1 text-2xl font-semibold">€360 — €600 / month</div>
                    <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Defined after the first session.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ParadigmShift lang="en" />

        <section style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px] text-center">
            <p className="text-3xl font-medium tracking-tight">
              If the pattern is still there, let&apos;s talk.
            </p>
            <p className="mt-4 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              First 15 minutes: no charge. We assess if this work makes sense for your case.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={`${contactWhatsApp}?text=Hi%20Ferran%2C%20I%27d%20like%20to%20explore%20online%20sessions`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-10 py-4 text-base font-medium text-white transition hover:opacity-85"
                style={{ background: "var(--text-main)" }}
              >
                Start here
              </a>
            </div>
            <p className="mt-5 text-sm" style={{ color: "var(--text-secondary)" }}>
              {contactWhatsAppDisplay} · Online worldwide
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
  );
}
