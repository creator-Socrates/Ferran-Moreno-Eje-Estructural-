import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl, contactWhatsApp } from "@/lib/content";
import { ParadigmShift } from "@/components/paradigm-shift";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Online Rolfing & Bodywork Sessions | Ferran Moreno",
  description:
    "Online bodywork to read the system, regulate the nervous system, and work the pattern at a distance. First conversation to see whether your case fits.",
  alternates: {
    canonical: "/en/online-bodywork",
    languages: { es: "/trabajo-corporal-online", en: "/en/online-bodywork", "x-default": "/en/online-bodywork" },
  },
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
      "Online bodywork to read the system, regulate the nervous system, and work the pattern at a distance.",
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
          <nav
            className="hidden md:block"
            aria-label="Navigation for Online bodywork"
            style={{ color: "var(--text-secondary)" }}
          >
            <ul className="flex items-center gap-8">
              <li><Link href="/en" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Home</Link></li>
              <li><Link href="/en/my-story" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">My story</Link></li>
              <li><Link href="/en/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Testimonials</Link></li>
              <li><Link href="/en/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link></li>
              <li><a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contact</a></li>
              <li aria-hidden="true" style={{ color: "var(--border-subtle)" }}>|</li>
              <li><Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">ES</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>

        <section data-track-section="online_hero" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <p className="mb-6 text-xs uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
              Online sessions · Worldwide
            </p>
            <h1 className="text-5xl font-semibold leading-[1.15] tracking-tight lg:text-6xl">
              ONLINE ROLFING
              <span className="block" style={{ color: "var(--text-secondary)" }}>& STRUCTURAL BODYWORK</span>
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-[1.8]">
              The work does not depend on physical contact to be effective. Very often the change begins earlier: in how the system responds when it is read with precision.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Online sessions include structural reading, nervous system regulation, movement and postural guidance, energy work, and mental-emotional reading. Everything except direct manual contact.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href={`${contactWhatsApp}?text=Hi%20Ferran%2C%20I%27d%20like%20a%20first%20conversation%20about%20online%20sessions`}
                target="_blank"
                rel="noopener noreferrer"
                data-track-location="online_hero"
                className="rounded-full px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-85"
                style={{ background: "var(--text-main)" }}
              >
                Reserve a first conversation
              </a>
            </div>
            <p className="mt-4 max-w-md text-sm leading-[1.6]" style={{ color: "var(--text-secondary)" }}>
              What&apos;s happening, how long it&apos;s been there, and what you&apos;ve already tried.
            </p>
          </div>
        </section>

        <section data-track-section="online_scope" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>What online sessions include</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">The same process. Different format.</h2>
            <p className="mt-6 text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              This is not a technique adapted to Zoom. It is the same reading of the system in another format.
            </p>
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

        <section data-track-section="online_audience" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
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

        <section data-track-section="online_process" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Process</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">These are not standalone online sessions. This is a process defined around the case.</h2>
            <p className="mt-6 text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              The first session orders the map. From there we define whether working online makes sense, at what frequency, and for how long. In most cases, within an approximate 6-month frame.
            </p>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                <div className="text-sm uppercase tracking-[0.2em]" style={{ color: "var(--text-secondary)" }}>Online format</div>
                <ul className="mt-6 space-y-4">
                  {[
                    "First session as the entry point",
                    "Weekly or biweekly frequency depending on the case",
                    "Structural work + regulation + energy",
                    "Specific guidance between sessions when needed",
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
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>First session</div>
                    <div className="mt-1 text-2xl font-semibold">€360 + VAT</div>
                    <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Entry point to the process and full reading of the system.</div>
                  </div>
                  <div className="pt-6" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Single session</div>
                    <div className="mt-1 text-2xl font-semibold">€180 / hour + VAT</div>
                    <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>For a specific case or for someone who already knows the work.</div>
                  </div>
                  <div className="pt-6" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Process</div>
                    <div className="mt-1 text-2xl font-semibold">Initial 6-month commitment</div>
                    <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Investment is defined after the first session according to frequency, depth, and level of support.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ParadigmShift lang="en" />

        <section data-track-section="online_final_cta" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px] text-center">
            <p className="text-3xl font-medium tracking-tight">
              If the pattern is still there, let&apos;s talk.
            </p>
            <p className="mt-4 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              A brief first conversation to see whether your case fits.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={`${contactWhatsApp}?text=Hi%20Ferran%2C%20I%27d%20like%20a%20first%20conversation%20about%20online%20sessions`}
                target="_blank"
                rel="noopener noreferrer"
                data-track-location="online_final_cta"
                className="rounded-full px-10 py-4 text-base font-medium text-white transition hover:opacity-85"
                style={{ background: "var(--text-main)" }}
              >
                Reserve a first conversation
              </a>
            </div>
            <p className="mt-5 text-sm" style={{ color: "var(--text-secondary)" }}>
              What&apos;s happening, how long it&apos;s been there, and what you&apos;ve already tried.
            </p>
          </div>
        </section>

      </main>

      <SiteFooter lang="en" />

    </div>
  );
}
