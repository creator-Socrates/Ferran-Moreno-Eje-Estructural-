import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";

export const metadata: Metadata = {
  title: "What is nervous system regulation and why it matters",
  description: "Your body has an internal traffic light. Most people have been stuck on amber for years without knowing it.",
  alternates: {
    canonical: "/en/blog/what-is-nervous-system-regulation",
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
            Regulation
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            What is nervous system regulation and why it matters
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Your body has an internal traffic light. You can&apos;t see it, but it governs everything you do: how you sleep, how you digest, how you think, how you relate to others, how you react to the unexpected.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The traffic light: green, amber, red
            </h2>

            <p className="text-[15px] leading-relaxed">
              <strong>Green</strong> is the parasympathetic state. Balance. The nervous system is calm, available. You can think clearly, digest well, sleep deeply, respond to others with proportion. This is your natural state.
            </p>

            <p className="text-[15px] leading-relaxed">
              <strong>Amber</strong> is sympathetic activation. The system detects something, a real or perceived threat, and starts preparing. Heart rate goes up, breathing gets shallow, muscles tighten. Useful when it&apos;s temporary. Destructive when it becomes chronic.
            </p>

            <p className="text-[15px] leading-relaxed">
              <strong>Red</strong> is fight, flight or freeze. The body takes over. The prefrontal cortex goes offline. All that&apos;s left is reaction: attack, run, or shut down. It&apos;s the system&apos;s last resort for survival.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The bird and the discharge
            </h2>

            <p className="text-[15px] leading-relaxed">
              When a bird escapes a predator, it goes through the full sequence: fight, flight, freeze. If it survives, it shakes. It trembles. It discharges the accumulated energy. And it returns to normal as if nothing happened. Its nervous system completes the cycle.
            </p>

            <p className="text-[15px] leading-relaxed">
              Humans rarely complete that cycle. We swallow the shock. Clench our teeth. Push through. The activation energy stays inside. And the nervous system stays on amber, waiting for the next threat that never comes but the body keeps anticipating.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Living on amber
            </h2>

            <p className="text-[15px] leading-relaxed">
              Most people I see have been on amber for years. They don&apos;t know it because they&apos;ve gotten used to it. They think sleeping badly is normal. That being tense is their personality. That background anxiety is just part of adult life. It isn&apos;t.
            </p>

            <p className="text-[15px] leading-relaxed">
              When your nervous system is chronically activated, nothing works well. You don&apos;t digest properly because the parasympathetic system isn&apos;t available. You don&apos;t sleep well because your body thinks there&apos;s danger. You don&apos;t think clearly because the prefrontal cortex is losing resources. You don&apos;t relate well because you&apos;re in defense mode.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Regulation is not relaxation
            </h2>

            <p className="text-[15px] leading-relaxed">
              Regulation isn&apos;t soft music and deep breaths. Regulation is restoring the nervous system&apos;s ability to oscillate. To activate when needed and return to calm when the threat passes. To complete the cycle that birds complete and we don&apos;t.
            </p>

            <p className="text-[15px] leading-relaxed">
              The first thing I do in a session is slow the system down. Give it permission to come down. Sometimes that alone is enough for the body to start reorganizing. Because a regulated nervous system is the precondition for anything else to work: structural work, visceral work, energetic work.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Regulation is the foundation. Without it, nothing else holds.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you feel like you&apos;ve been on amber for too long, we can work on bringing your system back to green.
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
