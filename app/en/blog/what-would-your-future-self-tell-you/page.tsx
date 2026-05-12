import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "What would your future self tell you",
  description: "The future self exercise: visualize who you will be in 20 years and let that version write you a letter with 3 concrete pieces of advice.",
  alternates: {
    canonical: "/en/blog/what-would-your-future-self-tell-you",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="What would your future self tell you"
        description="The future self exercise: visualize who you will be in 20 years and let that version write you a letter with 3 concrete pieces of advice."
        slug="what-would-your-future-self-tell-you"
        date="2026-09-18"
        tag="Process"
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
            Process
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            What would your future self tell you
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Close your eyes. Picture yourself 20 years from now. What does that person look like? Where do they live? What do they do? How do they move? What matters to them?
            </p>

            <p className="text-[15px] leading-relaxed">
              Don&apos;t think about what you &ldquo;should&rdquo; be. Observe what comes up. What your body shows you when you ask it, without filters.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The letter
            </h2>

            <p className="text-[15px] leading-relaxed">
              Now write a letter from that future version to your present self. Not from your current mind. From that person who has already lived through the next 20 years. Who already knows what worked and what didn&apos;t. Who is no longer in a hurry.
            </p>

            <p className="text-[15px] leading-relaxed">
              Write it in first person. And include three concrete pieces of advice. Not philosophy. Not pretty phrases. Three things you would do differently if you could speak to your present self.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Dream vs. illusion
            </h2>

            <p className="text-[15px] leading-relaxed">
              The gap between what you say you want and what you actually do generates anxiety. That gap is the source of almost all the existential tension I know.
            </p>

            <p className="text-[15px] leading-relaxed">
              Most people confuse a dream with an illusion. A dream has commitment and steps. There&apos;s a direction, there&apos;s action, there&apos;s something you do every day that brings you closer. An illusion is wanting without structure. Desiring without moving. Waiting for something to change while everything stays the same.
            </p>

            <p className="text-[15px] leading-relaxed">
              If the letter from your future self points to things you&apos;ve been putting off for months or years, it&apos;s not a motivational letter. It&apos;s a diagnosis.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Not doing is also an action
            </h2>

            <p className="text-[15px] leading-relaxed">
              Sometimes the most powerful action is to do nothing. But only when it comes from clarity. Not doing from avoidance is paralysis disguised as patience. Not doing from clarity is conscious waiting &mdash; knowing that now is not the time.
            </p>

            <p className="text-[15px] leading-relaxed">
              You can feel the difference in your body. Avoidance is heavy. Clarity is not.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The exercise
            </h2>

            <p className="text-[15px] leading-relaxed font-medium">
              Do it today. 15 minutes. Visualize your future self. Write the letter with the 3 pieces of advice. Then look at your week and ask yourself: does anything I&apos;m doing this week bring me closer to that person? If the answer is no, you already know where to start.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you need help closing the gap between what you want and what you do, we can work together.
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

          <RelatedArticles slug="what-would-your-future-self-tell-you" lang="en" />
        </article>
      </main>
    </div>
  );
}
