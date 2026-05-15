import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "What I learned touching thousands of bodies",
  description: "After thousands of sessions, you start to see patterns.",
  alternates: {
    canonical: "/en/blog/what-i-learned-touching-thousands-of-bodies",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="What I learned touching thousands of bodies"
        description="After thousands of sessions, you start to see patterns."
        slug="what-i-learned-touching-thousands-of-bodies"
        date="2026-09-08"
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
            What I learned touching thousands of bodies
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              After thousands of sessions, you start to see patterns.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not because all bodies are the same.
            </p>

            <p className="text-[15px] leading-relaxed">
              Precisely because none of them are.
            </p>

            <p className="text-[15px] leading-relaxed">
              Every person arrives with a different story:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>injuries,</li>
              <li>stress,</li>
              <li>surgeries,</li>
              <li>losses,</li>
              <li>compensations,</li>
              <li>different ways of holding life inside the body.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              And yet, after touching thousands of bodies, there are things that repeat constantly.
            </p>

            <p className="text-[15px] leading-relaxed">
              The first: the body is always trying to help you.
            </p>

            <p className="text-[15px] leading-relaxed">
              Even when it hurts.<br />
              Even when it locks up.<br />
              Even when it collapses.
            </p>

            <p className="text-[15px] leading-relaxed">
              Most of the time the symptom isn&apos;t the problem. It&apos;s the system&apos;s attempt to keep functioning under too much load.
            </p>

            <p className="text-[15px] leading-relaxed">
              The second: the body never lies.
            </p>

            <p className="text-[15px] leading-relaxed">
              The mind can justify, rationalize or deny. The body cannot.
            </p>

            <p className="text-[15px] leading-relaxed">
              Breathing, posture, muscle tone and tension tell a story long before the person explains it.
            </p>

            <p className="text-[15px] leading-relaxed">
              Many times the body has already shown everything in the first thirty seconds.
            </p>

            <p className="text-[15px] leading-relaxed">
              The third: most people live far more disconnected from their body than they realize.
            </p>

            <p className="text-[15px] leading-relaxed">
              They don&apos;t feel hunger until they&apos;re running on empty.<br />
              They don&apos;t feel exhaustion until they collapse.<br />
              They don&apos;t feel tension until pain appears.
            </p>

            <p className="text-[15px] leading-relaxed">
              They have learned to ignore signals for so long that the body ends up having to speak louder.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s where you see:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>anxiety,</li>
              <li>fatigue,</li>
              <li>pain,</li>
              <li>insomnia,</li>
              <li>inflammation,</li>
              <li>the feeling of not being able to take any more.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Not because the body is against you. Because it had been trying to warn you for years.
            </p>

            <p className="text-[15px] leading-relaxed">
              Another thing I learned: safety changes the body far faster than force.
            </p>

            <p className="text-[15px] leading-relaxed">
              When the system stops defending itself:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>breathing changes,</li>
              <li>tissue changes,</li>
              <li>posture changes,</li>
              <li>pain changes.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Much faster than most people believe possible.
            </p>

            <p className="text-[15px] leading-relaxed">
              And perhaps the most important: people don&apos;t need physiological perfection to feel well.
            </p>

            <p className="text-[15px] leading-relaxed">
              They need margin.
            </p>

            <p className="text-[15px] leading-relaxed">
              They need internal space. They need to feel that the body is no longer constantly fighting just to hold itself together.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s when something very different appears: presence.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body stops being background noise.
            </p>

            <p className="text-[15px] leading-relaxed">
              And becomes a livable place again.
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

          <RelatedArticles slug="what-i-learned-touching-thousands-of-bodies" lang="en" />
        </article>
      </main>
    </div>
  );
}
