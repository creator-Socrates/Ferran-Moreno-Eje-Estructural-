import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "The physiological cost of sustained pressure",
  description: "The human body can sustain an enormous amount of pressure.",
  alternates: getBlogAlternates("en", "the-physiological-cost-of-sustained-pressure"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The physiological cost of sustained pressure"
        description="The human body can sustain an enormous amount of pressure."
        slug="the-physiological-cost-of-sustained-pressure"
        date="2026-09-18"
        tag="High performance"
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
            High performance
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            The physiological cost of sustained pressure
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              The human body can sustain an enormous amount of pressure.
            </p>

            <p className="text-[15px] leading-relaxed">
              Far more than most people imagine.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s not the problem.
            </p>

            <p className="text-[15px] leading-relaxed">
              The problem is how long you can sustain it before you start paying the price.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because the cost rarely shows up all at once.
            </p>

            <p className="text-[15px] leading-relaxed">
              It accumulates silently.
            </p>

            <p className="text-[15px] leading-relaxed">
              First the margin disappears:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>you recover worse,</li>
              <li>you sleep lighter,</li>
              <li>you need more stimulation to get going,</li>
              <li>the body takes longer to come down.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Then the background tension appears:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>clenched jaw,</li>
              <li>shallow breathing,</li>
              <li>disrupted digestion,</li>
              <li>a feeling of constant vigilance.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              And because you&apos;re still functioning, you normalize it.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s where one of the most common traps in high performance begins: confusing the ability to compensate with health.
            </p>

            <p className="text-[15px] leading-relaxed">
              You can keep producing while your system deteriorates.
            </p>

            <p className="text-[15px] leading-relaxed">
              You can keep leading while your body lives in permanent alert.
            </p>

            <p className="text-[15px] leading-relaxed">
              You can keep making decisions while the physiology from which you decide gets worse every month.
            </p>

            <p className="text-[15px] leading-relaxed">
              The human nervous system is designed to alternate between activation and recovery.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not to live permanently available.
            </p>

            <p className="text-[15px] leading-relaxed">
              But many people live exactly like that:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>constant messages,</li>
              <li>constant pressure,</li>
              <li>constant noise,</li>
              <li>constant stimulation,</li>
              <li>constant responsibility.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              The body never fully receives the signal:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              &quot;You can come down now.&quot;
            </p>

            <p className="text-[15px] leading-relaxed">
              And when that goes on for years, the system starts operating from chronic survival.
            </p>

            <p className="text-[15px] leading-relaxed">
              That changes everything:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>perception,</li>
              <li>emotional tolerance,</li>
              <li>mental clarity,</li>
              <li>recovery capacity,</li>
              <li>even the sense of identity.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Many people believe &quot;that&apos;s just who they are&quot;:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>tense,</li>
              <li>hyperactive,</li>
              <li>impatient,</li>
              <li>wired.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              But most of the time it&apos;s not personality.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s physiology sustained for too long.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why real recovery isn&apos;t just about resting.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s about restoring the body&apos;s ability to stop defending itself constantly.
            </p>

            <p className="text-[15px] leading-relaxed">
              And that isn&apos;t achieved just by sleeping more or going on holiday.
            </p>

            <p className="text-[15px] leading-relaxed">
              I&apos;ve seen people come back from holiday more exhausted than before because the body was still operating from the same internal state.
            </p>

            <p className="text-[15px] leading-relaxed">
              The system didn&apos;t know how to come down.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pressure doesn&apos;t destroy immediately.
            </p>

            <p className="text-[15px] leading-relaxed">
              It wears you down.
            </p>

            <p className="text-[15px] leading-relaxed">
              It reduces margin.<br />
              It reduces flexibility.<br />
              It reduces adaptive capacity.
            </p>

            <p className="text-[15px] leading-relaxed">
              Until one day something seemingly small breaks the balance:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>an argument,</li>
              <li>an injury,</li>
              <li>an infection,</li>
              <li>a stressful period,</li>
              <li>a bad night.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              And the body collapses far more than expected.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not because of that moment.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because of all the pressure accumulated before.
            </p>

            <p className="text-[15px] leading-relaxed">
              The physiological cost of sustained pressure doesn&apos;t appear the day you break.
            </p>

            <p className="text-[15px] leading-relaxed">
              It starts long before.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If something you&apos;ve read here resonates, write me.
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

          <RelatedArticles slug="the-physiological-cost-of-sustained-pressure" lang="en" />
        </article>
      </main>
    </div>
  );
}
