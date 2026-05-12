import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Anxiety without apparent cause: when the body demands attention",
  description: "You've checked everything and there's no clear cause. But your body is still on alert. This isn't psychological. It's physiological.",
  alternates: {
    canonical: "/en/blog/anxiety-without-apparent-cause",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Anxiety without apparent cause: when the body demands attention"
        description="You've checked everything and there's no clear cause. But your body is still on alert. This isn't psychological. It's physiological."
        slug="anxiety-without-apparent-cause"
        date="2026-05-29"
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
            <Link href="/en/#method" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Method</Link>
            <Link href="/en/#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Cases</Link>
            <Link href="/en/#who" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Who it&apos;s for</Link>
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
            Anxiety without apparent cause: when the body demands attention
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              You&apos;ve checked everything. Blood work: normal. Thyroid: fine. Therapist: you&apos;ve been going for months. Medication: you tried it. And the anxiety is still there. No clear reason. No trigger. Like a background noise that won&apos;t shut off.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              It&apos;s not your head. It&apos;s your nervous system.
            </h2>

            <p className="text-[15px] leading-relaxed">
              When there&apos;s no clear external cause, anxiety almost always has a physiological origin. Your nervous system is stuck in alert mode. Not because something bad is happening now, but because at some point it activated and never came back down.
            </p>

            <p className="text-[15px] leading-relaxed">
              I use a traffic light model to explain it. Green: the system is regulated, there&apos;s calm, there&apos;s capacity to respond. Orange: there&apos;s activation, vigilance, the body is bracing for something that never arrives. Red: collapse, disconnection, freeze. Most people with chronic anxiety and no apparent cause have been living in orange for years. They&apos;ve adapted so thoroughly they no longer recognize it as an altered state. It&apos;s just how they feel.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The body signals, the mind interprets
            </h2>

            <p className="text-[15px] leading-relaxed">
              What most people call &ldquo;anxiety&rdquo; is the mind&apos;s interpretation of the body&apos;s signals. Racing heart. Chest tightness. Shallow breathing. Knot in the stomach. The body is sending alarm signals. The mind looks for an explanation and can&apos;t find one. And that creates more anxiety.
            </p>

            <p className="text-[15px] leading-relaxed">
              This is not a psychological problem. It&apos;s a nervous system that doesn&apos;t know how to come down. And it won&apos;t come down by talking about it, analyzing it, or understanding it. It comes down when the body receives the signal that it can let go.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              When the system downregulates, the anxiety dissolves
            </h2>

            <p className="text-[15px] leading-relaxed">
              This is what surprises people most. They don&apos;t have to &ldquo;work through&rdquo; anything. They don&apos;t have to understand the origin. They don&apos;t have to relive anything. When the nervous system finds its way back to regulation, the anxiety simply stops being there.
            </p>

            <p className="text-[15px] leading-relaxed">
              Many clients describe it the same way: &ldquo;the noise just stopped.&rdquo; Nothing dramatic happened. No revelation. The body simply stopped being on alert. And with that, the anxiety left.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              It&apos;s not magic. It&apos;s physiology.
            </h2>

            <p className="text-[15px] leading-relaxed font-medium">
              If you&apos;ve been carrying anxiety that has no explanation, maybe it&apos;s not that an explanation is missing. Maybe you&apos;re looking in the wrong place. The origin isn&apos;t in your mind. It&apos;s in your body. And the body has its own way of letting go.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If this sounds like you, write me. You don&apos;t need to have it figured out to take the first step.
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
          <RelatedArticles slug="anxiety-without-apparent-cause" lang="en" />
        </article>
      </main>
    </div>
  );
}
