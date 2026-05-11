import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";

export const metadata: Metadata = {
  title: "Why you make bad decisions when you're stressed",
  description: "You don't decide badly. You decide dysregulated. How the nervous system hijacks your decisions.",
  alternates: {
    canonical: "/en/blog/why-you-make-bad-decisions-when-stressed",
  },
};

export default function ArticlePage() {
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

          <Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50 md:hidden" style={{ color: "var(--text-secondary)" }}>ES</Link>

          <nav className="hidden items-center gap-8 md:flex" style={{ color: "var(--text-secondary)" }}>
            <Link href="/en" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Home</Link>
            <Link href="/en/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Wall of trust</Link>
            <Link href="/en/my-story" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">My story</Link>
            <Link href="/en/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link>
            <a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contact</a>
            <span style={{ color: "var(--border-subtle)" }}>|</span>
            <Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">ES</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[700px] px-6 py-24">
        <Link href="/en/blog" className="text-[11px] uppercase tracking-[0.15em] mb-12 inline-block transition hover:opacity-50" style={{ color: "var(--text-secondary)" }}>
          &larr; Blog
        </Link>

        <article>
          <span className="text-[10px] uppercase tracking-[0.15em] mb-4 block" style={{ color: "var(--text-secondary)" }}>
            Nervous system
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Why you make bad decisions when you&apos;re stressed
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              You don&apos;t decide badly. You decide dysregulated. That distinction changes everything.
            </p>

            <p className="text-[15px] leading-relaxed">
              Your nervous system works like an internal traffic light. When you&apos;re on green, your prefrontal cortex is online. You can think, weigh options, project consequences. You have access to the part of your brain that actually makes good decisions.
            </p>

            <p className="text-[15px] leading-relaxed">
              When you shift to amber, the system activates. A perceived threat, a deadline, an argument, accumulated tension. Your body starts prioritizing survival over reasoning. The prefrontal cortex loses the lead. Decisions become reactive, impulsive, short-term.
            </p>

            <p className="text-[15px] leading-relaxed">
              On red, it shuts down entirely. Fight, flight or freeze. Your body takes over and the mind is out of the game. In that state you might yell, run, go blank, or say something you don&apos;t mean. It&apos;s not a character flaw. It&apos;s biology.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The body decides before the mind
            </h2>

            <p className="text-[15px] leading-relaxed">
              This isn&apos;t theory. It&apos;s basic neurophysiology. The body processes threat before conscious awareness kicks in. The amygdala reacts in milliseconds. The prefrontal cortex needs time, context, calm. If your nervous system is on amber or red, you&apos;re giving it none of those conditions.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why you don&apos;t need more willpower. Willpower is a cognitive function that depends on a regulated nervous system. Asking someone on red for willpower is like asking a car with no fuel to accelerate. It&apos;s not about wanting. It&apos;s about state.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The pattern that keeps repeating
            </h2>

            <p className="text-[15px] leading-relaxed">
              I see it every week. Smart, capable people with resources, making decisions that don&apos;t represent them. They eat what they don&apos;t want to eat. They say yes when they mean no. They explode in a conversation that didn&apos;t warrant it. They freeze in front of something they should be resolving.
            </p>

            <p className="text-[15px] leading-relaxed">
              They&apos;re not weak. Their nervous system has been on amber for weeks, months, or years. Chronically activated. And from that state, the only decisions available are survival decisions.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Regulation, not control
            </h2>

            <p className="text-[15px] leading-relaxed">
              The answer isn&apos;t controlling your emotions. It&apos;s bringing your nervous system back to green. To a state where the prefrontal cortex is available, where you can breathe before reacting, where your body isn&apos;t screaming at you to run or fight.
            </p>

            <p className="text-[15px] leading-relaxed">
              Regulation isn&apos;t relaxation. It&apos;s restoring the system&apos;s natural range of response. Being able to activate when needed and return to calm when the threat passes. That&apos;s regulation.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              If your body is on red, no thought will take you to green. Bring the system down first. Then decide.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you&apos;ve been making decisions from a state that doesn&apos;t represent you, we can work on that.
            </p>
            <a
              href={contactWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] uppercase tracking-[0.15em] font-medium transition hover:opacity-50"
              style={{ color: "var(--text-main)" }}
            >
              Write me &rarr;
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}
