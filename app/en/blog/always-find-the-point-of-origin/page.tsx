import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Always find the point of origin",
  description: "Most treatments fail because they treat the compensation, not the origin. Finding where it all started changes everything.",
  alternates: {
    canonical: "/en/blog/always-find-the-point-of-origin",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Always find the point of origin"
        description="Most treatments fail because they treat the compensation, not the origin. Finding where it all started changes everything."
        slug="always-find-the-point-of-origin"
        date="2026-09-22"
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
            Always find the point of origin
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              You always have to find the point of origin. There is no way around it. It&apos;s the most basic principle of everything I do, and the one most ignored in the majority of treatments.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not where it hurts. Where it started.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Compensation vs. origin
            </h2>

            <p className="text-[15px] leading-relaxed">
              The back pain that started with an ankle sprain 15 years ago. The anxiety that started with a childhood belief. The chronic fatigue that started with a visceral restriction nobody looked at. The body compensates. Always. It redistributes the load, adapts posture, reorganizes tension. And it does it so well that the symptom shows up far from the source.
            </p>

            <p className="text-[15px] leading-relaxed">
              Most treatments fail because they treat the compensation. They work where it hurts. They relieve the symptom. And the symptom returns. Because the cause is still there, untouched, generating the same pattern over and over again.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The four levels of the point of origin
            </h2>

            <p className="text-[15px] leading-relaxed">
              The point of origin can be structural: a joint that lost mobility, a fascia that adhered, a bone that shifted after an impact.
            </p>

            <p className="text-[15px] leading-relaxed">
              It can be visceral: an organ with restricted mobility pulling on the structures around it. A liver that doesn&apos;t glide properly drags the diaphragm, which alters breathing, which tenses the neck.
            </p>

            <p className="text-[15px] leading-relaxed">
              It can be energetic: a pattern with no visible physical anchor that organizes the body from another plane. You feel it, you sense it, but you can&apos;t palpate it.
            </p>

            <p className="text-[15px] leading-relaxed">
              And it can be emotional: a belief that created a pattern of holding. An event the body never finished processing, still generating tension as if it were happening now.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Finding it changes everything
            </h2>

            <p className="text-[15px] leading-relaxed">
              When you find the point of origin, the body responds differently. It&apos;s not temporary relief. It&apos;s reorganization. The compensations start to release because they no longer need to hold anything up. The system reorders itself from the cause, not from the effect.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Before any intervention, find the origin. Not where it hurts. Not where it bothers you. Where it started. That&apos;s the difference between managing symptoms and solving the problem.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you&apos;ve been treating symptoms with no results, maybe nobody has looked for the origin. I can help you find it.
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

          <RelatedArticles slug="always-find-the-point-of-origin" lang="en" />
        </article>
      </main>
    </div>
  );
}
