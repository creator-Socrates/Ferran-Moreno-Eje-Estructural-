import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "The body doesn't need more control. It needs safety",
  description: "The usual response to physical discomfort is to try to control it. But a body in defense doesn't need more demands. It needs safety.",
  alternates: getBlogAlternates("en", "the-body-needs-safety-not-control"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The body doesn't need more control. It needs safety"
        description="The usual response to physical discomfort is to try to control it. But a body in defense doesn't need more demands. It needs safety."
        slug="the-body-needs-safety-not-control"
        date="2026-07-07"
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
            The body doesn&apos;t need more control. It needs safety
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              The usual response to physical discomfort is to try to control it.
            </p>

            <p className="text-[15px] leading-relaxed">
              More discipline.<br />
              More exercise.<br />
              More stretching.<br />
              More information.<br />
              More willpower.
            </p>

            <p className="text-[15px] leading-relaxed">
              But a body in defense doesn&apos;t need more demands.
            </p>

            <p className="text-[15px] leading-relaxed">
              It needs safety.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not intellectual safety. Not convincing yourself you&apos;re fine.
            </p>

            <p className="text-[15px] leading-relaxed">
              Physiological safety.
            </p>

            <p className="text-[15px] leading-relaxed">
              The nervous system receiving the signal that it can stop bracing for something that isn&apos;t happening.
            </p>

            <p className="text-[15px] leading-relaxed">
              That changes the body completely.
            </p>

            <p className="text-[15px] leading-relaxed">
              Breathing drops.<br />
              Muscles release.<br />
              Posture reorganizes.<br />
              Pain decreases.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not because you did something heroic.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because the system stopped spending energy defending itself.
            </p>

            <p className="text-[15px] leading-relaxed">
              Most interventions that try to &ldquo;control&rdquo; the body from the outside generate more tension in a system that&apos;s already overloaded.
            </p>

            <p className="text-[15px] leading-relaxed">
              More pressure on a body that&apos;s already under pressure.
            </p>

            <p className="text-[15px] leading-relaxed">
              Deep change happens when you stop fighting the body and start creating conditions where it can stop fighting on its own.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s not passivity.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s precision.
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

          <RelatedArticles slug="the-body-needs-safety-not-control" lang="en" />
        </article>
      </main>
    </div>
  );
}
