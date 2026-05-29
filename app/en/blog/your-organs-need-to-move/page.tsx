import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "Your organs need to move",
  description: "Every organ depends on its own internal movement to function. When an organ loses motility, the whole system feels it.",
  alternates: getBlogAlternates("en", "your-organs-need-to-move"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Your organs need to move"
        description="Every organ depends on its own internal movement to function. When an organ loses motility, the whole system feels it."
        slug="your-organs-need-to-move"
        date="2026-08-07"
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
            Your organs need to move
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Organ physiology depends on organ function, and every organ needs movement. It&apos;s called motility. Not the movement the organ makes because you move your body. It&apos;s an internal, inherent movement belonging to the organ itself. And when it&apos;s lost, function degrades.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The dynamo metaphor
            </h2>

            <p className="text-[15px] leading-relaxed">
              Think of a bicycle dynamo that needs the wheel to spin in order to produce light. If the wheel stops, there&apos;s no electricity. If the organ loses its internal movement, there&apos;s no optimal function. It doesn&apos;t shut off suddenly. It degrades. Loses efficiency. And the body starts compensating without you noticing.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              What blocks an organ&apos;s movement
            </h2>

            <p className="text-[15px] leading-relaxed">
              Many things. Chronic inflammation creates adhesions that limit the organ&apos;s mobility within its cavity. A sustained emotional trauma can produce a visceral contraction that never resolves. A car accident where the seatbelt halts the torso can lock the liver, stomach or intestine in a position that restricts its movement for years.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The quality of touch
            </h2>

            <p className="text-[15px] leading-relaxed">
              Working with organs has nothing to do with pressing. It&apos;s not about pressure, not about forcing. It&apos;s like a dragonfly landing with ten grams of pressure on the surface of the body. That&apos;s what the organ needs in order to respond. Anything more aggressive and the system shuts down.
            </p>

            <p className="text-[15px] leading-relaxed">
              I usually start with the liver. It&apos;s the largest organ, the most accessible and the easiest to feel. When the liver recovers its motility, the effect shows up in digestion, energy and mood.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The lungs and breathing capacity
            </h2>

            <p className="text-[15px] leading-relaxed">
              After bronchitis, pneumonia or prolonged episodes of coughing, the pleura develops adhesions that limit lung expansion. The person breathes, but doesn&apos;t breathe well. Capacity is reduced and nobody knows why. Releasing those pleural adhesions allows the lung to fully expand again.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              By increasing oxygenation and restoring the lungs&apos; ability to move, you create a systemic ripple effect. More oxygen, more energy, better recovery. Everything connected.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you feel something isn&apos;t working inside and nobody can find the cause, it might be a movement problem. Write me.
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

          <RelatedArticles slug="your-organs-need-to-move" lang="en" />
        </article>
      </main>
    </div>
  );
}
