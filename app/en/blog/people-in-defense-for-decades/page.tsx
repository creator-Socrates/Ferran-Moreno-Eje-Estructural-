import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "There are people who have lived in defense for decades",
  description: "Tense bodies. Short breaths. Clenched jaws. Constant vigilance.",
  alternates: getBlogAlternates("en", "people-in-defense-for-decades"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="There are people who have lived in defense for decades"
        description="Tense bodies. Short breaths. Clenched jaws. Constant vigilance."
        slug="people-in-defense-for-decades"
        date="2026-10-23"
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
            There are people who have lived in defense for decades
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Tense bodies.<br />
              Short breaths.<br />
              Clenched jaws.<br />
              Constant vigilance.
            </p>

            <p className="text-[15px] leading-relaxed">
              The system learned to survive.
            </p>

            <p className="text-[15px] leading-relaxed">
              And forgot how to rest.
            </p>

            <p className="text-[15px] leading-relaxed">
              Many of these people function extraordinarily well. They work. They produce. They take care of others. They solve problems.
            </p>

            <p className="text-[15px] leading-relaxed">
              But all of it from defense.
            </p>

            <p className="text-[15px] leading-relaxed">
              And permanent defense has a cost that is paid in silence:
            </p>

            <p className="text-[15px] leading-relaxed">
              Less energy.<br />
              Less flexibility.<br />
              Less presence.<br />
              Less life.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body can live like this for decades.
            </p>

            <p className="text-[15px] leading-relaxed">
              But that does not mean it is well.
            </p>

            <p className="text-[15px] leading-relaxed">
              It means it is brilliant at surviving.
            </p>

            <p className="text-[15px] leading-relaxed">
              The question is how much longer you want to live surviving.
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
          <RelatedArticles slug="people-in-defense-for-decades" lang="en" />
        </article>
      </main>
    </div>
  );
}
