import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "The body knows before you do",
  description: "Many decisions first appear as a bodily sensation before becoming a conscious thought.",
  alternates: getBlogAlternates("en", "the-body-knows-before-you-do"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The body knows before you do"
        description="Many decisions first appear as a bodily sensation before becoming a conscious thought."
        slug="the-body-knows-before-you-do"
        date="2026-10-20"
        tag="Manifesto"
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
            Manifesto
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            The body knows before you do
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Many decisions first appear as a bodily sensation before becoming a conscious thought.
            </p>

            <p className="text-[15px] leading-relaxed">
              A knot in the stomach before saying yes to something you don&apos;t want. An opening in the chest when something fits. A contraction when someone lies. A lightness when you are in the right place.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body reads before the mind does.
            </p>

            <p className="text-[15px] leading-relaxed">
              The problem is that most people stopped listening to it a long time ago.
            </p>

            <p className="text-[15px] leading-relaxed">
              And when the body speaks and no one listens, it has to speak louder.
            </p>

            <p className="text-[15px] leading-relaxed">
              That is where pain, anxiety and fatigue appear.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not as failures.
            </p>

            <p className="text-[15px] leading-relaxed">
              As volume.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If something you&apos;ve read resonates, write me.
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
          <RelatedArticles slug="the-body-knows-before-you-do" lang="en" />
        </article>
      </main>
    </div>
  );
}
