import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "The farmer's eyes",
  description: "I was at work. Office. German multinational.",
  alternates: getBlogAlternates("en", "the-farmers-eyes"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The farmer's eyes"
        description="I was at work. Office. German multinational."
        slug="the-farmers-eyes"
        date="2026-08-25"
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
            The farmer&apos;s eyes
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              I was at work. Office. German multinational.
            </p>

            <p className="text-[15px] leading-relaxed">
              I opened the newspaper and saw the photo of a man. He must have been from Vietnam or Cambodia. A farmer.
            </p>

            <p className="text-[15px] leading-relaxed">
              And when I saw that person&apos;s eyes I said:
            </p>

            <p className="text-[15px] leading-relaxed">
              I want to be like that when I&apos;m old.
            </p>

            <p className="text-[15px] leading-relaxed">
              I want to have that tranquility. I want to radiate that energy.
            </p>

            <p className="text-[15px] leading-relaxed">
              Around me the corporate world ran on a different frequency. Nobody respected the body. Nobody respected feeling well. It was always the vices, the infidelities, the addictions. Always that need where nothing is ever enough.
            </p>

            <p className="text-[15px] leading-relaxed">
              And the eyes of that farmer had something that nobody in that office had.
            </p>

            <p className="text-[15px] leading-relaxed">
              Peace.
            </p>

            <p className="text-[15px] leading-relaxed">
              A poker player once said that the goal in life was to discover your passion. And until you knew what it was, your goal was to discover it.
            </p>

            <p className="text-[15px] leading-relaxed">
              My mother enrolled me in a massage course. Mondays and Wednesdays, seven thirty to nine thirty in the evening, in Sants. The schedule fit around work.
            </p>

            <p className="text-[15px] leading-relaxed">
              I started there.
            </p>

            <p className="text-[15px] leading-relaxed">
              While my classmates did one, two, three practice sessions, I did ninety-seven.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because for me it was something very serious.
            </p>

            <p className="text-[15px] leading-relaxed">
              I left a job where I was earning well. My parents thought I had joined a cult. The investment was eighteen thousand euros in training plus fifty thousand in opportunity cost from what I stopped earning.
            </p>

            <p className="text-[15px] leading-relaxed">
              I didn&apos;t know that decision would take me to Germany, Japan, Mexico, Malaysia, to twenty years of training, to thousands of bodies, to leaving an entire career behind.
            </p>

            <p className="text-[15px] leading-relaxed">
              I only knew that the farmer&apos;s eyes had something I needed to find.
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

          <RelatedArticles slug="the-farmers-eyes" lang="en" />
        </article>
      </main>
    </div>
  );
}
