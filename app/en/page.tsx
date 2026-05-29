import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { Newsletter } from "@/components/newsletter";
import { FAQ } from "@/components/faq";
import {
  audienceProfilesEn, casesEn, featuredTestimonialsEn, goodForEn,
  monicaCentralEn, notForEn, stepsEn,
} from "@/lib/content.en";

const reserveHref = `https://wa.me/34679229744?text=Hi%20Ferran%2C`;
const finalTalkHref = `https://wa.me/34679229744?text=Let%27s%20talk`;

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

          <nav
            className="hidden md:block"
            aria-label="Main navigation: Method, Cases, Who it's for, Testimonials, My story, Blog, Contact, ES"
            style={{ color: "var(--text-secondary)" }}
          >
            <ul className="flex items-center gap-8">
              <li><a href="#method" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Method</a></li>
              <li><a href="#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Cases</a></li>
              <li><a href="#who" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Who it&apos;s for</a></li>
              <li><Link href="/en/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Testimonials</Link></li>
              <li><Link href="/en/my-story" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">My story</Link></li>
              <li><Link href="/en/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link></li>
              <li><a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contact</a></li>
              <li aria-hidden="true" style={{ color: "var(--border-subtle)" }}>|</li>
              <li><Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">ES</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>

        {/* HERO */}
        <section data-track-section="home_hero" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto grid max-w-[900px] gap-12 px-6 py-[140px] lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col justify-center">
              <p className="mb-6 text-xs uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
                Structural reorganization · Bodywork · Nervous system regulation
              </p>

              <h1 className="text-5xl font-semibold leading-[1.15] tracking-tight lg:text-6xl">
                {"WHEN THE BODY LOSES ITS AXIS,"}
                <br />
                {"IT DOESN&apos;T NEED MORE FORCE."}
                <br />
                <span style={{ color: "var(--text-secondary)" }}>IT NEEDS PRECISION.</span>
              </h1>

              <p className="mt-10 max-w-xl text-base leading-[1.8]">
                Your body isn&apos;t broken.<br />It&apos;s out of order.
              </p>
              <p className="mt-4 max-w-xl text-base leading-[1.8]">
                We don&apos;t treat the symptom.<br />We reorganize the system.
              </p>

              <div className="mt-12">
                <a
                  href={reserveHref}
                  data-track-location="home_hero"
                  className="rounded-full px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-85"
                  style={{ background: "var(--text-main)" }}
                >
                  Reserve a first conversation
                </a>
                <p className="mt-4 max-w-md text-sm leading-[1.6]" style={{ color: "var(--text-secondary)" }}>
                  What&apos;s happening, how long it&apos;s been there, and what you&apos;ve already tried.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="relative w-full space-y-5 rounded-[2.5rem] p-8 lg:p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
                <div className="rounded-2xl p-6" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>What usually happens</div>
                  <div className="mt-2 text-base leading-[1.8]">
                    Pain that keeps coming back. Constant tension. Fatigue. A sense that you never quite get back to yourself. You&apos;ve tried things. It works for a while. Then it comes back.
                  </div>
                </div>

                <div className="rounded-2xl p-6 text-white" style={{ background: "var(--text-main)" }}>
                  <div className="text-sm opacity-50">What we do</div>
                  <div className="mt-2 text-base leading-[1.8]">
                    We don&apos;t treat the symptom. We reorganize the system. We read how your body is organized. We remove interference. We restore order and margin.
                  </div>
                </div>

                <div className="rounded-2xl p-6" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>How it feels</div>
                  <div className="mt-2 text-base leading-[1.8]">
                    Less compensation. More stability. More coherence. The body stops fighting. And starts holding itself again.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED TESTIMONIAL */}
        <section data-track-section="home_featured_testimonial" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
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
                  data-track-event="click_featured_testimonial"
                  data-track-location="home_featured_testimonial"
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
        <section
          id="cases"
          data-track-section="home_cases"
          style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}
        >
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
              Common cases
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              When the pattern is still there.
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {casesEn.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] p-7"
                  style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}
                >
                  <h3 className="text-[1.05rem] font-semibold tracking-tight leading-[1.35]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[1rem] leading-[1.75]" style={{ color: "var(--text-secondary)" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METHOD */}
        <section id="method" data-track-section="home_method" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>METHOD</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  What matters most is perception, not technique
                </h2>
                <div className="mt-7 max-w-[34rem] space-y-5 text-[1.06rem] leading-[1.85]">
                  <p>Perceiving what, where, and when. Technique comes after that.</p>
                  <div
                    className="rounded-[1.8rem] p-6"
                    style={{ border: "1px solid rgba(34, 211, 238, 0.18)", background: "#F2FBFE" }}
                  >
                    <p className="text-[0.98rem] leading-[1.8]" style={{ color: "rgba(29, 29, 31, 0.72)" }}>
                      First I read how the system is organising itself. Then I intervene where the body has real capacity to change.
                    </p>
                  </div>
                </div>
              </div>

              <ol className="space-y-4">
                {stepsEn.map((step, index) => (
                  <li key={step.n}>
                    <div
                      className="rounded-[2rem] p-6 sm:p-7"
                      style={{ border: "1px solid rgba(34, 211, 238, 0.2)", background: "#E9F9FD" }}
                    >
                      <div className="text-[12px] font-semibold uppercase tracking-[0.18em]" style={{ color: "#0891B2" }}>
                        Step {step.n}
                      </div>
                      <div className="mt-4 grid gap-4 sm:grid-cols-[minmax(0,220px)_1fr] sm:items-start">
                        <h3 className="text-[1.45rem] font-medium leading-[1.1] tracking-tight">
                          {step.title.replace(/^→\s*/, "")}
                        </h3>
                        <p className="text-[0.98rem] leading-[1.8]" style={{ color: "rgba(29, 29, 31, 0.68)" }}>
                          {step.text}
                        </p>
                      </div>
                    </div>
                    {index < stepsEn.length - 1 ? (
                      <div aria-hidden="true" className="flex justify-center py-2" style={{ color: "#0891B2" }}>
                        <span className="text-[1.4rem] leading-none">↓</span>
                      </div>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section
          id="who"
          data-track-section="home_who"
          style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}
        >
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <div className="min-h-[140px]">
                  <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Who it&apos;s for</div>
                  <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                    We don&apos;t work session by session.<br />We work through a process.
                  </h2>
                </div>
                <div className="mt-10 space-y-4">
                  {goodForEn.map((item) => (
                    <div
                      key={item}
                      className="flex min-h-[104px] items-center gap-3 rounded-2xl p-5 leading-[1.8]"
                      style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}
                    >
                      <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: "var(--text-main)" }} />
                      <div>{item}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                  <p>If you&apos;re just testing the waters, this may not be the right moment.</p>
                  <p className="font-semibold" style={{ color: "var(--text-main)" }}>If you&apos;re coming to commit, we can begin.</p>
                </div>
              </div>

              <div>
                <div className="min-h-[140px]">
                  <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Who this is not for</div>
                  <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                    This work doesn&apos;t fit every case.
                  </h2>
                </div>
                <div className="mt-10 space-y-4">
                  {notForEn.map((item) => (
                    <div
                      key={item}
                      className="flex min-h-[104px] items-center gap-3 rounded-2xl p-5 leading-[1.8]"
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

        {/* FOR BODIES THAT CARRY A LOT */}
        <section data-track-section="home_profiles" style={{ borderTop: "1px solid var(--border-subtle)", background: "#F7F5F2" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              For bodies that carry a lot
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              This work is especially useful for people whose body has to carry pressure, decisions, impact, or constant presence.
            </p>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {audienceProfilesEn.map((profile) => (
                <div
                  key={profile.title}
                  className="rounded-[1.75rem] p-8"
                  style={{ border: "1px solid rgba(34, 197, 94, 0.18)", background: "#CCF1E0" }}
                >
                  <h3 className="text-[15px] font-semibold uppercase tracking-[0.08em]">
                    {profile.title}
                  </h3>
                  <p className="mt-4 whitespace-pre-line text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    {profile.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-16 text-2xl font-medium tracking-tight sm:text-3xl leading-[1.4] text-center">
              A session can bring relief. A process can change the way your body holds itself.
            </p>
          </div>
        </section>

        {/* BIO */}
        <section
          id="story"
          data-track-section="home_story"
          style={{ borderTop: "1px solid var(--border-subtle)", background: "#22C55E", color: "#fff" }}
        >
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.8)" }}>My story</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">Ferran Moreno</h2>

            <div className="mt-10 space-y-6 text-lg leading-[1.8]">
              <p>At 17, a taekwondo injury left me unable to function for seven years. I couldn&apos;t lift a water jug. The pain was constant. I tried everything. Nothing worked.</p>
              <p>A single osteopathy session showed me there was another way.</p>
              <p>I left my job at a multinational and started training. For more than twenty years I&apos;ve learned from some of the best in Rolfing, visceral osteopathy, Japanese acupuncture, Ayurvedic medicine, energy work, and movement — in Germany, Japan, Mexico, Malaysia, the United States, and Thailand.</p>
              <p>I wasn&apos;t looking for techniques. I was looking to understand the system.</p>
              <p>I know what that&apos;s like from the inside. Seven years trapped in a body that wouldn&apos;t respond. A fifteen-minute session showed me there was another way. And it left me with a question that still drives me: how could a solution exist and I&apos;d been stuck for so long?</p>
              <p className="font-medium">Today I work with people still looking for the way out I could not find back then. And with others who carry a lot, but need their system to rise to it.</p>
            </div>

            <div className="mt-10">
              <Link
                href="/en/my-story"
                data-track-event="click_story_page"
                data-track-location="home_story"
                className="inline-flex rounded-full px-7 py-3.5 text-sm font-medium transition hover:opacity-85"
                style={{ background: "#C5E15A", color: "var(--text-main)" }}
              >
                Read full story
              </Link>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section
          id="testimonials"
          data-track-section="home_testimonials"
          style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}
        >
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
                data-track-event="click_wall_of_trust"
                data-track-location="home_testimonials"
                className="inline-flex rounded-full px-7 py-3.5 text-sm font-medium transition hover:opacity-60"
                style={{ border: "1px solid var(--border-subtle)", color: "var(--text-main)" }}
              >
                See full testimonials
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          data-track-section="home_mid_cta"
          style={{ borderTop: "1px solid var(--border-subtle)", background: "#f5e033", color: "var(--text-main)" }}
        >
          <div className="mx-auto max-w-[900px] px-6 py-[120px] text-center">
            <p className="text-3xl font-medium tracking-tight sm:text-4xl">
              The next step is to see what is holding the pattern in place.
            </p>
            <p className="mt-4 text-base leading-[1.8]" style={{ opacity: 0.75 }}>
              You do not need one more opinion. You need to know whether this work fits your case.
            </p>
            <div className="mt-10">
              <a
                href={reserveHref}
                data-track-location="home_mid_cta"
                className="rounded-full px-10 py-4 text-base font-medium text-white transition hover:opacity-85"
                style={{ background: "var(--text-main)" }}
              >
                See if this work fits my case
              </a>
            </div>
              <p className="mt-5 text-sm" style={{ opacity: 0.75 }}>
                A brief first conversation. No pressure.
                <br />
                No selling you a process before reading you.
              </p>
          </div>
        </section>

        {/* PROCESS */}
        <section
          data-track-section="home_process"
          style={{ borderTop: "1px solid var(--border-subtle)", background: "#FBFBFD", color: "var(--text-main)" }}
        >
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Process</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              These are not standalone sessions.<br />This is a process of reorganizing the system.
            </h2>
            <p className="mt-6 max-w-[56rem] text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              The first session orders the map. From there we define the process. In most cases we work within an approximate 6-month frame, with weekly or biweekly sessions depending on the case.
            </p>

            <div className="mt-8 max-w-[58rem] text-[1.02rem] leading-[1.85]" style={{ color: "rgba(29, 29, 31, 0.76)" }}>
              The first session orders the map.
              <br /><br />
              There we see what is holding the pattern in place, how your system responds, and what level of intervention makes sense.
              <br /><br />
              You cannot always know in one session how far the change will go. Sometimes the pattern appears quickly. Sometimes it is held in place by many layers: posture, tissue, breathing, nervous system, emotions, habits, or ways of thinking.
              <br /><br />
              What we can observe is how the body responds when it starts to stop defending itself: posture changes, breathing changes, tissue tone changes, internal clarity changes.
              <br /><br />
              From there we do not work with a closed promise.
              <br /><br />
              We work with a process.
              <br /><br />
              Session by session we see what appears, what repeats, what releases, and what needs to reorganize so the change is not just relief, but a new way of functioning.
              <br /><br />
              Each person is a different map. The work is to read that map and build a new algorithm that actually works.
            </div>
          </div>
        </section>

        {/* INVESTMENT */}
        <section
          data-track-section="home_investment"
          style={{ borderTop: "1px solid var(--border-subtle)", background: "#F97316", color: "#fff" }}
        >
          <div className="mx-auto max-w-[900px] px-6 py-[120px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.8)" }}>Investment</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              Investment is defined by reading the case.<br />Not by promising too early.
            </h2>
            <p className="mt-6 max-w-[56rem] text-base leading-[1.8]" style={{ color: "rgba(255,255,255,0.8)" }}>
              Not every case requires the same level of intervention. Some people respond quickly. Others arrive after years of compensation, with more layers and more work to order.
            </p>

            <div className="mt-14 rounded-[2rem] p-8 lg:p-10" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)", color: "var(--text-main)" }}>
              <div className="text-sm uppercase tracking-[0.2em]" style={{ color: "var(--text-secondary)" }}>Investment</div>
              <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1fr_1.2fr_1fr]">
                <div
                  className="rounded-[1.5rem] p-5"
                  style={{ border: "1px solid var(--border-subtle)", background: "rgba(255,255,255,0.72)" }}
                >
                  <div className="text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--text-secondary)" }}>Single session</div>
                  <div className="mt-2 text-[1.45rem] font-semibold leading-[1.15] tracking-[-0.02em]">€180 / hour + VAT</div>
                  <div className="mt-2 text-sm leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
                    For a specific case or for someone who already knows the work.
                  </div>
                </div>

                <div
                  className="rounded-[1.5rem] p-5"
                  style={{ border: "1px solid rgba(245, 224, 51, 0.28)", background: "rgba(245,224,51,0.12)" }}
                >
                  <div className="text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--text-secondary)" }}>First session</div>
                  <div className="mt-2 text-[1.45rem] font-semibold leading-[1.15] tracking-[-0.02em]">€360 + VAT</div>
                  <div className="mt-2 text-sm leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
                    Full reading of the system, analysis, and more attention than a standard session.
                  </div>
                </div>

                <div
                  className="rounded-[1.5rem] p-5"
                  style={{ border: "1px solid rgba(196, 167, 106, 0.28)", background: "#FFF3D8" }}
                >
                  <div className="text-[11px] uppercase tracking-[0.16em]" style={{ color: "rgba(29, 29, 31, 0.54)" }}>Process</div>
                  <div className="mt-2 text-[1.55rem] font-medium leading-[1.12] tracking-[-0.02em]" style={{ color: "var(--text-main)" }}>
                    Initial 6-month commitment
                  </div>
                  <div className="mt-3 text-sm leading-[1.75]" style={{ color: "rgba(29, 29, 31, 0.72)" }}>
                    In most cases we work within this frame. Frequency may be weekly or biweekly. The investment is defined after the first session.
                  </div>
                </div>

                <div
                  className="rounded-[1.5rem] p-5"
                  style={{ border: "1px solid var(--border-subtle)", background: "rgba(255,255,255,0.72)" }}
                >
                  <div className="text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--text-secondary)" }}>Specific cases</div>
                  <div className="mt-2 text-[1.45rem] font-semibold leading-[1.15] tracking-[-0.02em]">Custom budget</div>
                  <div className="mt-2 text-sm leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
                    Intensives, strategic consultation, or high-responsibility cases.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          data-track-section="home_final_cta"
          style={{ borderTop: "1px solid var(--border-subtle)", background: "#FBFBFD", color: "var(--text-main)" }}
        >
          <div className="mx-auto max-w-[980px] px-6 py-[120px]">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
              <div>
                <div
                  className="inline-flex rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.22em]"
                  style={{ background: "#F2DE78", color: "#6F5615" }}
                >
                  First conversation
                </div>
                <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-[2.2rem] leading-[1.12]">
                  If you&apos;ve made it this far,
                  {" "}
                  <span className="block">you know enough.</span>
                  {" "}
                  <span className="block" style={{ color: "#D9732A" }}>Let&apos;s talk.</span>
                </h2>
                <p className="mt-4 max-w-[42ch] text-[0.98rem] leading-[1.7]" style={{ color: "rgba(29, 29, 31, 0.72)" }}>
                  In person in Lluçà (Barcelona) or online, from anywhere.
                </p>
                <div className="mt-7">
                  <a
                    href={finalTalkHref}
                    data-track-location="home_final_cta_top"
                    className="inline-flex rounded-full px-7 py-3.5 text-sm font-medium transition hover:opacity-85"
                    style={{ background: "#111111", color: "#FFFFFF" }}
                  >
                    I want to know if this work fits my case
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div
                  className="relative w-full max-w-[360px] overflow-hidden rounded-[3.3rem] p-[9px]"
                  style={{
                    background: "#161616",
                    boxShadow: "0 28px 60px rgba(17, 24, 39, 0.16), 0 6px 18px rgba(17, 24, 39, 0.1)",
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-3 z-20 h-6 w-32 -translate-x-1/2 rounded-full"
                    style={{ background: "#0D0D0D" }}
                  />
                  <div
                    className="relative aspect-[390/844] rounded-[2.8rem] px-4 pb-5 pt-12 sm:px-5"
                    style={{
                      background: "linear-gradient(180deg, #FFF7E5 0%, #FFF2D3 100%)",
                    }}
                  >
                    <div
                      className="-mx-4 -mt-3 mb-5 flex items-center justify-between border-b px-4 pb-4 pt-1 sm:-mx-5 sm:px-5"
                      style={{ borderColor: "rgba(215, 167, 91, 0.14)", background: "rgba(255, 249, 239, 0.72)" }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold"
                          style={{ background: "#D9732A", color: "#fff" }}
                        >
                          FM
                        </div>
                        <div className="leading-tight">
                          <div className="text-[0.98rem] font-semibold tracking-tight" style={{ color: "rgba(29, 29, 31, 0.92)" }}>
                            Ferran Moreno
                          </div>
                          <div className="mt-1 text-[0.76rem]" style={{ color: "rgba(29, 29, 31, 0.5)" }}>
                            First conversation
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-full"
                        style={{ background: "#FFFFFF", border: "1px solid rgba(215, 167, 91, 0.12)" }}
                      >
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.56 0 1 .44 1 1V20c0 .56-.44 1-1 1C10.85 21 3 13.15 3 3c0-.56.44-1 1-1h3.5c.56 0 1 .44 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" fill="#111111" />
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-start">
                        <div
                          className="relative max-w-[82%] rounded-[1.35rem] px-4 py-3"
                          style={{ background: "#FFFFFF", color: "rgba(29, 29, 31, 0.84)", border: "1px solid rgba(215, 167, 91, 0.12)" }}
                        >
                          <span
                            aria-hidden="true"
                            className="absolute -left-1 top-4 h-3 w-3 rotate-45"
                            style={{ background: "#FFFFFF", borderLeft: "1px solid rgba(215, 167, 91, 0.12)", borderBottom: "1px solid rgba(215, 167, 91, 0.12)" }}
                          />
                          <p className="relative text-[0.97rem] leading-[1.65]">You are not coming only to repair.</p>
                        </div>
                      </div>

                      <div className="flex justify-start">
                        <div
                          className="relative max-w-[82%] rounded-[1.35rem] px-4 py-3"
                          style={{ background: "#FFFFFF", color: "rgba(29, 29, 31, 0.84)", border: "1px solid rgba(215, 167, 91, 0.12)" }}
                        >
                          <span
                            aria-hidden="true"
                            className="absolute -left-1 top-4 h-3 w-3 rotate-45"
                            style={{ background: "#FFFFFF", borderLeft: "1px solid rgba(215, 167, 91, 0.12)", borderBottom: "1px solid rgba(215, 167, 91, 0.12)" }}
                          />
                          <p className="relative text-[0.97rem] leading-[1.65]">You are coming to recover capacity.</p>
                        </div>
                      </div>

                      <div className="flex justify-start">
                        <div
                          className="relative max-w-[90%] rounded-[1.35rem] px-4 py-3"
                          style={{ background: "#FFFFFF", color: "rgba(29, 29, 31, 0.8)", border: "1px solid rgba(215, 167, 91, 0.12)" }}
                        >
                          <span
                            aria-hidden="true"
                            className="absolute -left-1 top-4 h-3 w-3 rotate-45"
                            style={{ background: "#FFFFFF", borderLeft: "1px solid rgba(215, 167, 91, 0.12)", borderBottom: "1px solid rgba(215, 167, 91, 0.12)" }}
                          />
                          <p className="relative text-[0.95rem] leading-[1.7]">
                            Capacity to live better, sustain what you love, and support your passion, your work, your dreams, and your presence.
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-start">
                        <div
                          className="relative max-w-[90%] rounded-[1.35rem] px-4 py-3"
                          style={{ background: "#FFFFFF", color: "rgba(29, 29, 31, 0.84)", border: "1px solid rgba(215, 167, 91, 0.12)" }}
                        >
                          <span
                            aria-hidden="true"
                            className="absolute -left-1 top-4 h-3 w-3 rotate-45"
                            style={{ background: "#FFFFFF", borderLeft: "1px solid rgba(215, 167, 91, 0.12)", borderBottom: "1px solid rgba(215, 167, 91, 0.12)" }}
                          />
                          <p className="relative text-[0.95rem] font-medium leading-[1.65]">
                            Shall we talk for 15 minutes and see whether this work is for you?
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-end pt-3">
                        <div
                          className="relative max-w-[88%] rounded-[1.35rem] px-4 py-3"
                          style={{ background: "#DCF8C6", color: "rgba(29, 29, 31, 0.92)", boxShadow: "0 10px 24px rgba(17, 24, 39, 0.08)" }}
                        >
                          <span
                            aria-hidden="true"
                            className="absolute -right-1 top-4 h-3 w-3 rotate-45"
                            style={{ background: "#DCF8C6" }}
                          />
                          <p className="text-[0.98rem] font-medium leading-[1.6]">
                            Hi Ferran,
                            <br />
                            I&apos;d like to know if this work fits my case.
                          </p>
                          <div className="mt-2 text-right text-[0.72rem]" style={{ color: "rgba(29, 29, 31, 0.45)" }}>
                            sent
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center gap-3">
                        <div
                          aria-hidden="true"
                          className="flex h-12 w-12 items-center justify-center rounded-full text-[2rem] leading-none"
                          style={{ color: "rgba(29, 29, 31, 0.92)" }}
                        >
                          +
                        </div>
                        <a
                          href={finalTalkHref}
                          data-track-location="home_final_cta_input"
                          className="flex min-h-[56px] flex-1 items-center rounded-full px-5 transition hover:opacity-90"
                          style={{ background: "#FFFFFF", border: "1px solid rgba(17, 24, 39, 0.16)", boxShadow: "0 6px 16px rgba(17, 24, 39, 0.06)" }}
                        >
                          <span className="text-[1.05rem] font-medium tracking-tight" style={{ color: "rgba(29, 29, 31, 0.92)" }}>
                            Let&apos;s talk
                          </span>
                        </a>
                        <a
                          href={finalTalkHref}
                          data-track-location="home_final_cta_send"
                          className="flex h-14 w-14 items-center justify-center rounded-full"
                          style={{ background: "#111111", color: "#FFFFFF", boxShadow: "0 10px 24px rgba(17, 24, 39, 0.18)" }}
                        >
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M4 12.5 19.2 5.4c.8-.37 1.6.43 1.28 1.24l-5.86 15.1c-.34.88-1.58.95-2.03.11l-2.33-4.35-4.45-2.16c-.9-.44-.86-1.72.07-2.04l12.34-4.24-13 3.44c-.95.25-1.67-.78-1.03-1.45Z" fill="currentColor" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <FAQ lang="en" />

      <Newsletter variant="footer" lang="en" source="home-en" />

      <footer
        style={{
          borderTop: "1px solid rgba(139, 104, 40, 0.42)",
          background: "#C4A76A",
        }}
      >
        <div
          className="mx-auto flex max-w-[900px] flex-col gap-3 px-6 py-8 text-sm lg:flex-row lg:items-center lg:justify-between"
          style={{ color: "rgba(88, 73, 46, 0.82)" }}
        >
          <div className="flex items-center gap-x-2 whitespace-nowrap">
            <span>Structural reorganization ·</span>
            <a href="https://maps.app.goo.gl/8Hd8KbJKawB7BjWZ6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:opacity-60">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2.6C8.52 2.6 5.7 5.37 5.7 8.8c0 4.61 4.97 10.14 5.85 11.07a.63.63 0 0 0 .9 0c.88-.93 5.85-6.46 5.85-11.07 0-3.43-2.82-6.2-6.3-6.2Z" fill="#EA4335" />
                <path d="M8.17 13.69A21.9 21.9 0 0 0 12 18.46a21.9 21.9 0 0 0 3.83-4.77L12 12.16l-3.83 1.53Z" fill="#34A853" />
                <path d="M8.17 13.69C6.97 11.82 6.3 10.14 6.3 8.8 6.3 5.7 8.84 3.2 12 3.2v8.96l-3.83 1.53Z" fill="#4285F4" />
                <path d="M12 3.2c3.16 0 5.7 2.5 5.7 5.6 0 1.34-.67 3.02-1.87 4.89L12 12.16V3.2Z" fill="#FBBC04" />
                <circle cx="12" cy="8.8" r="2.35" fill="#fff" />
              </svg>
              Lluçà (Barcelona)
            </a>
            <span>· Online</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <a
              href="https://www.instagram.com/ferran__moreno_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:opacity-60"
              aria-label="Instagram Ferran Moreno"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="instagramGradientEn" x1="3" y1="21" x2="21" y2="3" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F58529" />
                    <stop offset="0.35" stopColor="#FEDA77" />
                    <stop offset="0.6" stopColor="#DD2A7B" />
                    <stop offset="0.85" stopColor="#8134AF" />
                    <stop offset="1" stopColor="#515BD4" />
                  </linearGradient>
                </defs>
                <rect x="3" y="3" width="18" height="18" rx="5" fill="url(#instagramGradientEn)" />
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
              LinkedIn
            </a>
          </div>
          <div>© 2026 Ferran Moreno</div>
        </div>
      </footer>

    </div>
  );
}
