import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Relief isn't expansion",
  description: "Many people live oscillating between crisis and relief. But feeling less bad is not the same as being well. Expansion is something else entirely.",
  alternates: {
    canonical: "/en/blog/relief-isnt-expansion",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Relief isn't expansion"
        description="Many people live oscillating between crisis and relief. But feeling less bad is not the same as being well. Expansion is something else entirely."
        slug="relief-isnt-expansion"
        date="2026-07-14"
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
            Relief isn&apos;t expansion
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Many people live oscillating between crisis and relief.
            </p>

            <p className="text-[15px] leading-relaxed">
              Tension.<br />
              Session.<br />
              Relief.<br />
              Tension again.
            </p>

            <p className="text-[15px] leading-relaxed">
              And they mistake it for progress.
            </p>

            <p className="text-[15px] leading-relaxed">
              But feeling less bad is not the same as being well.
            </p>

            <p className="text-[15px] leading-relaxed">
              Relief is the temporary absence of a symptom. Expansion is something else entirely.
            </p>

            <p className="text-[15px] leading-relaxed">
              Expansion means the body gained space.<br />
              More breathing.<br />
              More margin.<br />
              More capacity to respond.<br />
              More available energy.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not that it returned to the starting point.
            </p>

            <p className="text-[15px] leading-relaxed">
              That it moved to a new place.
            </p>

            <p className="text-[15px] leading-relaxed">
              That difference changes everything.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because relief is dependent. It needs to be repeated constantly because the pattern remains intact.
            </p>

            <p className="text-[15px] leading-relaxed">
              Expansion is cumulative. The body integrates the change and stops needing to return to the same point.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why some people have been in treatment for years and are still in the same place.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not because the treatment is bad.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because they&apos;re working within the crisis-relief cycle instead of working toward real reorganization.
            </p>

            <p className="text-[15px] leading-relaxed">
              The goal isn&apos;t to feel less bad.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s for the body to stop generating the pattern that produces the discomfort.
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

          <RelatedArticles slug="relief-isnt-expansion" lang="en" />
        </article>
      </main>
    </div>
  );
}
