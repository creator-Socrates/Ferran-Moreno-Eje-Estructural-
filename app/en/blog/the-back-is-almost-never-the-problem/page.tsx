import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "The back is almost never the problem",
  description: "If I could say one thing to everyone who has spent years treating their back with no results, it would be this.",
  alternates: getBlogAlternates("en", "the-back-is-almost-never-the-problem"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The back is almost never the problem"
        description="If I could say one thing to everyone who has spent years treating their back with no results, it would be this."
        slug="the-back-is-almost-never-the-problem"
        date="2026-08-14"
        tag="Bodywork"
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
            Bodywork
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            The back is almost never the problem
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              If I could say one thing to everyone who has spent years treating their back with no results, it would be this:
            </p>

            <p className="text-[15px] leading-relaxed">
              The back is almost never where the problem started.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s where it ends up.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s the place that pays the bill for everything that isn&apos;t working properly below, in front or inside.
            </p>

            <p className="text-[15px] leading-relaxed">
              A disorganized pelvis changes lumbar mechanics. A rigid diaphragm tenses the thoracic spine. An abdomen with restrictions alters the entire spinal column. Years of shallow breathing reorganize the back around a pattern that was never meant to be permanent.
            </p>

            <p className="text-[15px] leading-relaxed">
              The back compensates.
            </p>

            <p className="text-[15px] leading-relaxed">
              And because it&apos;s the area that complains the most, it&apos;s the one that gets treated the most.
            </p>

            <p className="text-[15px] leading-relaxed">
              Massage.<br />
              Stretching.<br />
              Strengthening.<br />
              Injections.<br />
              Heat.<br />
              Ice.
            </p>

            <p className="text-[15px] leading-relaxed">
              And the relief comes. And it goes.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because nobody looked at what was forcing the back to organize itself that way.
            </p>

            <p className="text-[15px] leading-relaxed">
              In my practice, I often don&apos;t touch the back at all at first. I work what&apos;s in front. What&apos;s underneath. What&apos;s pulling.
            </p>

            <p className="text-[15px] leading-relaxed">
              And when that changes, the back reorganizes on its own.
            </p>

            <p className="text-[15px] leading-relaxed">
              Without forcing it.<br />
              Without manipulating it.<br />
              Without chasing the pain.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because the back was never the problem.
            </p>

            <p className="text-[15px] leading-relaxed">
              It was the messenger.
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

          <RelatedArticles slug="the-back-is-almost-never-the-problem" lang="en" />
        </article>
      </main>
    </div>
  );
}
