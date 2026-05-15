import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Regulation isn't relaxation",
  description: "Many people think regulating the nervous system means relaxing. But regulation and relaxation are different things. Regulation is capacity.",
  alternates: {
    canonical: "/en/blog/regulation-isnt-relaxation",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Regulation isn't relaxation"
        description="Many people think regulating the nervous system means relaxing. But regulation and relaxation are different things. Regulation is capacity."
        slug="regulation-isnt-relaxation"
        date="2026-07-17"
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
            Regulation isn&apos;t relaxation
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              There&apos;s a widespread confusion.
            </p>

            <p className="text-[15px] leading-relaxed">
              Many people think that regulating the nervous system means relaxing.
            </p>

            <p className="text-[15px] leading-relaxed">
              Soft music.<br />
              Deep breaths.<br />
              Being calm.
            </p>

            <p className="text-[15px] leading-relaxed">
              But regulation and relaxation are different things.
            </p>

            <p className="text-[15px] leading-relaxed">
              Relaxation is a passive state.
            </p>

            <p className="text-[15px] leading-relaxed">
              Regulation is capacity.
            </p>

            <p className="text-[15px] leading-relaxed">
              The capacity to activate when needed and come back down when the situation is over.
            </p>

            <p className="text-[15px] leading-relaxed">
              The capacity to transition.
            </p>

            <p className="text-[15px] leading-relaxed">
              A regulated nervous system isn&apos;t always calm. It&apos;s available.
            </p>

            <p className="text-[15px] leading-relaxed">
              It can respond with force when necessary. It can recover calm afterwards. It can oscillate between activation and rest without getting stuck in either.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s regulation.
            </p>

            <p className="text-[15px] leading-relaxed">
              And it&apos;s exactly what people who&apos;ve spent years in constant activation have lost.
            </p>

            <p className="text-[15px] leading-relaxed">
              They don&apos;t lack the ability to relax.
            </p>

            <p className="text-[15px] leading-relaxed">
              They lack the flexibility of the system to move between states.
            </p>

            <p className="text-[15px] leading-relaxed">
              They stay up.<br />
              Always ready.<br />
              Always on guard.<br />
              Always holding.
            </p>

            <p className="text-[15px] leading-relaxed">
              And when they try to &ldquo;relax,&rdquo; they can&apos;t. Because the system has forgotten how to come down.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why regulating a nervous system isn&apos;t about forcing calm.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s about restoring the body&apos;s capacity to oscillate.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s where everything changes.
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

          <RelatedArticles slug="regulation-isnt-relaxation" lang="en" />
        </article>
      </main>
    </div>
  );
}
