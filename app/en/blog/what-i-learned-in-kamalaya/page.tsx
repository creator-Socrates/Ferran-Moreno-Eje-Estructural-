import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "What I learned in Kamalaya",
  description: "Kamalaya wasn't just a wellness resort.",
  alternates: getBlogAlternates("en", "what-i-learned-in-kamalaya"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="What I learned in Kamalaya"
        description="Kamalaya wasn't just a wellness resort."
        slug="what-i-learned-in-kamalaya"
        date="2026-09-04"
        tag="My story"
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
            My story
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            What I learned in Kamalaya
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Kamalaya wasn&apos;t just a wellness resort.
            </p>

            <p className="text-[15px] leading-relaxed">
              It was a place where the body could come down.
            </p>

            <p className="text-[15px] leading-relaxed">
              And that, today, is far rarer than it seems.
            </p>

            <p className="text-[15px] leading-relaxed">
              I arrived there after years of searching, training and intense work. I had already studied structure, fascia, visceral osteopathy and various therapeutic approaches. But in Kamalaya I understood something different: healing doesn&apos;t depend on technique alone.
            </p>

            <p className="text-[15px] leading-relaxed">
              It depends on the complete state of the system.
            </p>

            <p className="text-[15px] leading-relaxed">
              The space.<br />
              The rhythm.<br />
              The food.<br />
              The silence.<br />
              The nature.<br />
              The human quality.<br />
              The sense of safety.
            </p>

            <p className="text-[15px] leading-relaxed">
              Everything played a part.
            </p>

            <p className="text-[15px] leading-relaxed">
              I saw people arrive completely exhausted:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>executives,</li>
              <li>artists,</li>
              <li>entrepreneurs,</li>
              <li>people who had been sustaining constant pressure for years.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              And often the first thing that happened wasn&apos;t a &quot;spectacular improvement.&quot;
            </p>

            <p className="text-[15px] leading-relaxed">
              It was something much deeper: the body stopped fighting.
            </p>

            <p className="text-[15px] leading-relaxed">
              They slept.<br />
              They breathed.<br />
              They cried.<br />
              They truly rested, perhaps for the first time in years.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s where I understood something important: most people don&apos;t need more information.
            </p>

            <p className="text-[15px] leading-relaxed">
              They need less threat.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because the nervous system doesn&apos;t reorganize in constant war.
            </p>

            <p className="text-[15px] leading-relaxed">
              It reorganizes when it finds conditions where it no longer needs to defend itself all the time.
            </p>

            <p className="text-[15px] leading-relaxed">
              Another thing I learned there was the value of rhythm.
            </p>

            <p className="text-[15px] leading-relaxed">
              In the West, many people try to heal from urgency:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>more techniques,</li>
              <li>more intensity,</li>
              <li>more biohacking,</li>
              <li>more productivity applied to wellness.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              But the human body doesn&apos;t function well under permanent pressure.
            </p>

            <p className="text-[15px] leading-relaxed">
              Nature has rhythm.<br />
              Breathing.<br />
              Oscillation.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body does too.
            </p>

            <p className="text-[15px] leading-relaxed">
              And when you respect that, changes appear that are far deeper than anything you can force.
            </p>

            <p className="text-[15px] leading-relaxed">
              Kamalaya reminded me of something that later became central to my work: the practitioner&apos;s presence matters as much as the technique they apply.
            </p>

            <p className="text-[15px] leading-relaxed">
              A regulated nervous system regulates.
            </p>

            <p className="text-[15px] leading-relaxed">
              An organized body organizes.
            </p>

            <p className="text-[15px] leading-relaxed">
              Coherence transmits.
            </p>

            <p className="text-[15px] leading-relaxed">
              And often what transforms someone most is not a spectacular intervention.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s feeling truly safe inside their own body for the first time.
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

          <RelatedArticles slug="what-i-learned-in-kamalaya" lang="en" />
        </article>
      </main>
    </div>
  );
}
