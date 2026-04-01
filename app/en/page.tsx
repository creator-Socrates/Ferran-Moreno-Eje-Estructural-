import Link from "next/link";
import { contactEmail } from "@/lib/content";
import {
  casesEn, featuredTestimonialsEn, goodForEn,
  monicaCentralEn, notForEn, pillarsEn, stepsEn,
} from "@/lib/content.en";

const reserveHref = `https://wa.me/34679229744?text=Hi%20Ferran%2C`;

export default function HomePageEn() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>

      {/* HEADER */}
      <header className="sticky top-0 z-30" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-5">
          <div className="leading-none">
            <div className="text-[17px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-main)" }}>Ferran Moreno</div>
            <div className="mt-[5px] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              BODYWORK · REGULATION · ENERGY
            </div>
          </div>

          <Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50 md:hidden" style={{ color: "var(--text-secondary)" }}>ES</Link>

          <nav className="hidden items-center gap-8 md:flex" style={{ color: "var(--text-secondary)" }}>
            <a href="#method" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Method</a>
            <a href="#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Cases</a>
            <a href="#who" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Who it&apos;s for</a>
            <Link href="/en/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Wall of trust</Link>
            <Link href="/en/my-story" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">My story</Link>
            <a href={`mailto:${contactEmail}`} className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contact</a>
            <span style={{ color: "var(--border-subtle)" }}>|</span>
            <Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">ES</Link>
          </nav>
        </div>
      </header>

      <main>

        {/* HERO */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto grid max-w-[900px] gap-12 px-6 py-[140px] lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col justify-center">
              <p className="mb-6 text-xs uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
                Structural reorganization · Bodywork · Nervous system regulation
              </p>

              <h1 className="text-5xl font-semibold leading-[1.15] tracking-tight lg:text-6xl">
                WHEN THE BODY LOSES ITS AXIS,
                <span className="block">IT DOESN&apos;T NEED MORE FORCE.</span>
                <span className="block" style={{ color: "var(--text-secondary)" }}>IT NEEDS PRECISION.</span>
              </h1>

              <p className="mt-10 max-w-xl text-base leading-[1.8]">
                Your body isn&apos;t broken.<br />It&apos;s disorganized.
              </p>
              <p className="mt-4 max-w-xl text-base leading-[1.8]">
                We don&apos;t treat the symptom.<br />We reorganize the system.
              </p>

              <div className="mt-12">
                <a
                  href={reserveHref}
                  className="rounded-full px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-85"
                  style={{ background: "var(--text-main)" }}
                >
                  Book a first session
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="relative w-full space-y-5 rounded-[2.5rem] p-8 lg:p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
                <div className="rounded-2xl p-6" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>What usually happens</div>
                  <div className="mt-2 text-base leading-[1.8]">
                    Pain that keeps coming back. Constant tension. Fatigue. A feeling of not quite returning to yourself. You&apos;ve tried things. It works for a while. Then it comes back.
                  </div>
                </div>

                <div className="rounded-2xl p-6 text-white" style={{ background: "var(--text-main)" }}>
                  <div className="text-sm opacity-50">What we do</div>
                  <div className="mt-2 text-base leading-[1.8]">
                    We don&apos;t work on the symptom. We work on the system. We read how your body is organized. We give your nervous system room to breathe. We remove interference.
                  </div>
                </div>

                <div className="rounded-2xl p-6" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>How it feels</div>
                  <div className="mt-2 text-base leading-[1.8]">
                    Less compensation. More stability. More axis. The body stops fighting. And starts holding.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED TESTIMONIAL */}
        <section style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
              Featured testimonial
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              A body that remembers its order
            </h2>

            <div className="mt-10 rounded-[2rem] p-8 lg:p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
              <p className="whitespace-pre-line text-lg leading-[1.8]">
                {monicaCentralEn.text.split('\n\n').slice(0, 3).join('\n\n')}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/en/monica"
                  className="rounded-full px-6 py-3 text-sm font-medium text-white transition hover:opacity-85"
                  style={{ background: "var(--text-main)" }}
                >
                  Read full testimonial
                </Link>
                <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  — {monicaCentralEn.name}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* CASES */}
        <section id="cases" style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
              Common cases
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              Situations where this work tends to make a real difference
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {casesEn.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.75rem] p-6 leading-[1.8]"
                  style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METHOD */}
        <section id="method" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>METHOD</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  A precise reading of the complete system
                </h2>
                <p className="mt-6 text-lg leading-[1.8]">
                  I don&apos;t apply techniques as an end in themselves. Technique is a tool within a broader reading.
                  <br /><br />
                  Every session begins by reading how the body is organized. The intervention comes from that reading — not from a standard protocol.
                </p>
                <div className="mt-10 space-y-4">
                  {pillarsEn.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl p-5 leading-[1.8]"
                      style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}
                    >
                      <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: "var(--text-main)" }} />
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 content-start">
                {stepsEn.map((step) => (
                  <div
                    key={step.n}
                    className="rounded-[2rem] p-8"
                    style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}
                  >
                    <h3 className="text-2xl font-medium">{step.title}</h3>
                    <p className="mt-3 leading-[1.8]" style={{ color: "var(--text-secondary)" }}>{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section id="who" style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Who it&apos;s for</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  We don&apos;t work session by session.<br />We work through a process.
                </h2>
                <div className="mt-10 space-y-4">
                  {goodForEn.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl p-5 leading-[1.8]"
                      style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}
                    >
                      <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: "var(--text-main)" }} />
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Who it&apos;s not for</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  Cases where this work isn&apos;t what you&apos;re looking for
                </h2>
                <div className="mt-10 space-y-4">
                  {notForEn.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl p-5 leading-[1.8]"
                      style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}
                    >
                      <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: "var(--text-secondary)" }} />
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BIO */}
        <section id="story" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>My story</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">Ferran Moreno</h2>

            <div className="mt-10 space-y-6 text-lg leading-[1.8]">
              <p>At 17, a taekwondo injury left me unable to function for seven years. I couldn&apos;t lift a water jug. The pain was constant. I tried everything. Nothing worked.</p>
              <p>A single osteopathy session showed me there was another way.</p>
              <p>I left my job at a multinational and started training. For more than twenty years I&apos;ve learned from some of the best in Rolfing, visceral osteopathy, Japanese acupuncture, Ayurvedic medicine, energy work, and movement — in Germany, Japan, Mexico, Malaysia, the United States, and Thailand.</p>
              <p>I wasn&apos;t looking for techniques. I was looking to understand the system.</p>
              <p className="font-medium">Today I work with people who have tried many things and are still in the same place.</p>
            </div>

            <div className="mt-10">
              <Link
                href="/en/my-story"
                className="inline-flex rounded-full px-7 py-3.5 text-sm font-medium transition hover:opacity-60"
                style={{ border: "1px solid var(--border-subtle)", color: "var(--text-main)" }}
              >
                Read full story
              </Link>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Testimonials</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              People who have been through this process
            </h2>
            <p className="mt-6 text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              A brief selection. The rest is on the full wall of trust.
            </p>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {featuredTestimonialsEn.map((item, i) => (
                <div
                  key={i}
                  className="rounded-[2.5rem] p-8"
                  style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}
                >
                  <p className="text-lg leading-[1.8]">&ldquo;{item.text}&rdquo;</p>
                  <div className="mt-6 text-sm" style={{ color: "var(--text-secondary)" }}>
                    — {item.name}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/en/wall-of-trust"
                className="inline-flex rounded-full px-7 py-3.5 text-sm font-medium transition hover:opacity-60"
                style={{ border: "1px solid var(--border-subtle)", color: "var(--text-main)" }}
              >
                See full wall of trust
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px] text-center">
            <p className="text-3xl font-medium tracking-tight sm:text-4xl">
              This work isn&apos;t for everyone.
            </p>
            <p className="mt-4 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              If this resonates, you already know why you&apos;re here.
            </p>
            <div className="mt-10">
              <a
                href={reserveHref}
                className="rounded-full px-10 py-4 text-base font-medium text-white transition hover:opacity-85"
                style={{ background: "var(--text-main)" }}
              >
                Book a first session
              </a>
            </div>
            <p className="mt-5 text-sm" style={{ color: "var(--text-secondary)" }}>
              First session — €360<br />Entry point to the process.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Process</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              This isn&apos;t a session.<br />It&apos;s a complete reorganization of the system.
            </h2>
            <p className="mt-6 text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              The work unfolds in 6-month cycles.<br />
              At month three we assess whether to continue or close the process.
            </p>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
                <div className="text-sm uppercase tracking-[0.2em]" style={{ color: "var(--text-secondary)" }}>How it works</div>
                <ul className="mt-6 space-y-4">
                  {[
                    "Structural work + regulation + energy",
                    "Adapted to your real rhythm",
                    "Integrated into your life, not isolated from it",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 leading-[1.8]">
                      <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: "var(--text-main)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
                <div className="text-sm uppercase tracking-[0.2em]" style={{ color: "var(--text-secondary)" }}>Investment</div>
                <div className="mt-6 space-y-6">
                  <div>
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>First session</div>
                    <div className="mt-1 text-2xl font-semibold">€360</div>
                    <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Entry point to the process.</div>
                  </div>
                  <div className="pt-6" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Monthly programme</div>
                    <div className="mt-1 text-2xl font-semibold">€360 — €600</div>
                    <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Defined after the first session.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div
              className="grid gap-10 rounded-[2.5rem] p-10 text-white lg:grid-cols-[1fr_auto] lg:items-end lg:p-14"
              style={{ background: "var(--text-main)" }}
            >
              <div>
                <div className="text-sm uppercase tracking-[0.25em] opacity-50">First conversation</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  If the pattern is still there, let&apos;s talk.
                </h2>
              </div>

              <div className="flex flex-col items-start gap-4 lg:min-w-[260px]">
                <a
                  href={reserveHref}
                  className="rounded-full bg-white px-7 py-3 text-center text-sm font-medium transition hover:opacity-90"
                  style={{ color: "var(--text-main)" }}
                >
                  Book a first session
                </a>
                <a
                  href={reserveHref}
                  className="text-sm opacity-50 transition hover:opacity-100"
                >
                  Prefer to talk first? Book a 15-min conversation.
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
        <div
          className="mx-auto flex max-w-[900px] flex-col gap-3 px-6 py-8 text-sm lg:flex-row lg:items-center lg:justify-between"
          style={{ color: "var(--text-secondary)" }}
        >
          <div>
            <a href="https://maps.app.goo.gl/2DvAv9DP6iZBDuXk6?g_st=ic" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">
              Lluçà (Barcelona)
            </a>
            {" "}· Online
          </div>
          <div>
            <a href={`mailto:${contactEmail}`} className="hover:opacity-60">{contactEmail}</a>
            {" "}·{" "}
            <a href="https://www.instagram.com/ferran__moreno_/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">@ferran__moreno_</a>
          </div>
          <div>© 2026 Ferran Moreno</div>
        </div>
      </footer>

    </div>
  );
}
