import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Your breathing changes before your thoughts do",
  description: "Long before a conscious emotion appears, the body has already shifted its breathing. Breathing is one of the most honest indicators of internal state.",
  alternates: {
    canonical: "/en/blog/your-breathing-changes-first",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Your breathing changes before your thoughts do"
        description="Long before a conscious emotion appears, the body has already shifted its breathing. Breathing is one of the most honest indicators of internal state."
        slug="your-breathing-changes-first"
        date="2026-07-10"
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
            Your breathing changes before your thoughts do
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Long before a conscious emotion appears, the body has already shifted its breathing.
            </p>

            <p className="text-[15px] leading-relaxed">
              Breathing is one of the most honest indicators of internal state.
            </p>

            <p className="text-[15px] leading-relaxed">
              It doesn&apos;t lie.<br />
              It doesn&apos;t rationalize.<br />
              It doesn&apos;t adapt to what you want to believe.
            </p>

            <p className="text-[15px] leading-relaxed">
              It simply reflects what&apos;s happening in the system.
            </p>

            <p className="text-[15px] leading-relaxed">
              When there&apos;s threat, it shortens.<br />
              When there&apos;s safety, it deepens.<br />
              When there&apos;s defense, it rises to the chest.<br />
              When there&apos;s calm, it drops to the abdomen.
            </p>

            <p className="text-[15px] leading-relaxed">
              And all of that happens before you have a single thought about what&apos;s going on.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why observing someone&apos;s breathing tells me more than any questionnaire.
            </p>

            <p className="text-[15px] leading-relaxed">
              In the first few seconds I can already see where they breathe, how much range they have, which areas are blocked, what the system is holding.
            </p>

            <p className="text-[15px] leading-relaxed">
              Breathing is the first door.
            </p>

            <p className="text-[15px] leading-relaxed">
              And often the first thing to change when the body starts to let go.
            </p>

            <p className="text-[15px] leading-relaxed">
              Before the person notices.<br />
              Before they understand it.<br />
              Before they can explain it.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body is already responding.
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

          <RelatedArticles slug="your-breathing-changes-first" lang="en" />
        </article>
      </main>
    </div>
  );
}
