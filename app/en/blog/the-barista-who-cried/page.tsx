import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "The barista who cried: when your axis changes what surrounds you",
  description: "When you are in your axis, you don't force change. You emit coherence. And coherence is felt.",
  alternates: {
    canonical: "/en/blog/the-barista-who-cried",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The barista who cried: when your axis changes what surrounds you"
        description="When you are in your axis, you don't force change. You emit coherence. And coherence is felt."
        slug="the-barista-who-cried"
        date="2026-09-29"
        tag="Energy"
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
            Energy
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            The barista who cried: when your axis changes what surrounds you
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              I was with Alicia, deeply in love. We went to grab a coffee to go. While she turned to look at something, I simply smiled at the girl serving us. From my axis. No intention. No forcing. Just being there.
            </p>

            <p className="text-[15px] leading-relaxed">
              The barista broke down. She started crying right in front of us.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              What came after
            </h2>

            <p className="text-[15px] leading-relaxed">
              A few days later she wrote to me. She said that energy &mdash; that presence without words, without agenda &mdash; gave her the strength to report her abusive marriage. There was a fast-track trial in three days. She left the country and went to Canada with her family.
            </p>

            <p className="text-[15px] leading-relaxed">
              I didn&apos;t do anything. I didn&apos;t say anything. I didn&apos;t intervene. I didn&apos;t give her advice. I smiled at her from a clean place. That was all.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The mirror effect
            </h2>

            <p className="text-[15px] leading-relaxed">
              This is what I call the mirror effect. When you are in your axis, you don&apos;t force change in others. You emit coherence. And coherence is felt. It&apos;s not explained, not argued, not sold. It&apos;s felt.
            </p>

            <p className="text-[15px] leading-relaxed">
              Something shifts in the conductivity and then the softness means we don&apos;t react. There&apos;s no defense. No mask. Simply a frequency that resonates with something the other person already knew but couldn&apos;t activate alone.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              You don&apos;t need to do anything
            </h2>

            <p className="text-[15px] leading-relaxed">
              Simply by being there, without changing anything, without saying anything, without forcing anything, you are also nourishing yourself. Because the axis is not a posture. It&apos;s a state. A place from which everything you emit is clean. And everything you receive, you receive without a survival filter.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Your presence is not neutral. When your axis is organized, your field expands. And what it touches, it transforms. Not because you decide it. Because coherence is contagious.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you feel something in you wants to reorganize but you can&apos;t find the space, write me.
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

          <RelatedArticles slug="the-barista-who-cried" lang="en" />
        </article>
      </main>
    </div>
  );
}
