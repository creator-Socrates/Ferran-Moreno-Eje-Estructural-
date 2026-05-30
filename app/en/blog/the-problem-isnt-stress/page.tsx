import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "The problem isn't stress. It's not being able to come back down.",
  description: "Stress isn't the enemy. The real damage starts when your system loses the ability to return to baseline.",
  alternates: getBlogAlternates("en", "the-problem-isnt-stress"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The problem isn't stress. It's not being able to come back down."
        description="Stress isn't the enemy. The real damage starts when your system loses the ability to return to baseline."
        slug="the-problem-isnt-stress"
        date="2026-06-12"
        tag="Nervous system"
        lang="en"
      />
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
            The problem isn&apos;t stress. It&apos;s not being able to come back down.
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              Stress isn&apos;t the enemy.
            </p>

            <p className="text-[15px] leading-relaxed">
              Your body is designed to activate. To run, respond, adapt, solve. The problem appears when the system loses the ability to come back down.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s where the real wear begins.
            </p>

            <p className="text-[15px] leading-relaxed">
              Most people I see aren&apos;t in an acute crisis. They&apos;re in sustained activation. A background state where the body never fully comes down.
            </p>

            <p className="text-[15px] leading-relaxed">
              They sleep, but the system keeps watching.
They rest, but they don&apos;t recover.
They go on holiday and it takes five days before they start feeling something close to calm.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body stays braced for a threat that is no longer happening.
            </p>

            <p className="text-[15px] leading-relaxed">
              That has very concrete consequences:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>slower digestion,</li>
              <li>inflammation,</li>
              <li>constant muscle tension,</li>
              <li>poorer recovery,</li>
              <li>brain fog,</li>
              <li>irritability,</li>
              <li>pain that appears &ldquo;for no reason.&rdquo;</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Not because the body is failing.
Because it&apos;s been holding an activation it was never designed to sustain.
            </p>

            <p className="text-[15px] leading-relaxed">
              An animal escapes a predator and then discharges the energy. It shakes. It breathes. It completes the cycle. The system returns to zero.
            </p>

            <p className="text-[15px] leading-relaxed">
              Humans rarely do that.
            </p>

            <p className="text-[15px] leading-relaxed">
              We swallow the fright.
We keep working.
We answer emails.
We keep functioning as if nothing happened.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body registers it.
            </p>

            <p className="text-[15px] leading-relaxed">
              And when that accumulation lasts months or years, the system starts organizing around stress as if it were the default state.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s when something important appears:
many people no longer remember what it feels like to be truly regulated.
            </p>

            <p className="text-[15px] leading-relaxed">
              They confuse tension with productivity.
Hypervigilance with responsibility.
Exhaustion with maturity.
            </p>

            <p className="text-[15px] leading-relaxed">
              The problem isn&apos;t working a lot.
The problem is the body never receiving the signal that it can leave the alert state.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why regulation isn&apos;t simply about relaxing.
            </p>

            <p className="text-[15px] leading-relaxed">
              Regulating a nervous system means restoring flexibility. So it can activate when needed and come down when the threat is over. Recovering the capacity to transition.
            </p>

            <p className="text-[15px] leading-relaxed">
              That changes everything.
            </p>

            <p className="text-[15px] leading-relaxed">
              Breathing changes.
Pain perception changes.
Mental clarity changes.
Available energy changes.
            </p>

            <p className="text-[15px] leading-relaxed">
              And many times, symptoms that seemed unrelated start disappearing together.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because the problem was never just the neck, the stomach, or the insomnia.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              The problem was a system that hadn&apos;t felt safe in far too long.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If something you read here resonates, write me.
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
          <RelatedArticles slug="the-problem-isnt-stress" lang="en" />
        </article>
      </main>
    </div>
  );
}
