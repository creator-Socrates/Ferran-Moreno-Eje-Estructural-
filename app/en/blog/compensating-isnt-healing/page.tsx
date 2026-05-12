import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Compensating isn't healing: why your body keeps hurting",
  description: "Your body is brilliant at compensating. That's not a compliment — it's a warning. Every compensation has a cost.",
  alternates: {
    canonical: "/en/blog/compensating-isnt-healing",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Compensating isn't healing: why your body keeps hurting"
        description="Your body is brilliant at compensating. That's not a compliment — it's a warning. Every compensation has a cost."
        slug="compensating-isnt-healing"
        date="2026-07-03"
        tag="Compensation"
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
            <Link href="/en#method" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Method</Link>
            <Link href="/en#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Cases</Link>
            <Link href="/en#who" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Who it&apos;s for</Link>
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
            Compensation
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Compensating isn&apos;t healing
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Your body is brilliant at compensating. That&apos;s not a compliment — it&apos;s a warning. Every compensation has a cost. And that cost accumulates.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The compensation chain
            </h2>

            <p className="text-[15px] leading-relaxed">
              The ankle compensates for the foot. The knee compensates for the ankle. The hip compensates for the knee. The back compensates for the hip. The neck compensates for the back.
            </p>

            <p className="text-[15px] leading-relaxed">
              You feel it in the neck. You treat the neck. The compensation pattern stays intact. And the neck hurts again. It always comes back. Because it was never the problem — it was the last link in a chain that nobody looked at in full.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The silent cost
            </h2>

            <p className="text-[15px] leading-relaxed">
              The body can compensate for decades. It will keep functioning. But each year, the range narrows. The energy required to maintain the compensations increases. The resilience decreases. You wake up stiffer. You tire sooner. You need more warm-up. You recover slower.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s not age. It&apos;s the accumulation of unresolved compensations consuming the system&apos;s margins. The body keeps working, but with less and less room for error.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The last straw
            </h2>

            <p className="text-[15px] leading-relaxed">
              Until one day, something small — a bad night&apos;s sleep, a stressful week, bending down to pick up a shoe — breaks the camel&apos;s back. The back locks up. Sciatica appears. The neck seizes. And the person says: &quot;I didn&apos;t do anything different. I don&apos;t understand what happened.&quot;
            </p>

            <p className="text-[15px] leading-relaxed">
              What happened wasn&apos;t that gesture. That gesture was the last straw on a system that had been compensating beyond its capacity for years. The cause isn&apos;t the last thing you did. The cause is everything the body had been holding without anyone looking at it.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The difference between treating and resolving
            </h2>

            <p className="text-[15px] leading-relaxed">
              Treating the symptom is sometimes necessary. If you&apos;re in crisis, you need to stabilize. But if you only treat the symptom and never look at the pattern producing it, you&apos;re feeding the cycle. More compensation, more cost, less margin, more vulnerability.
            </p>

            <p className="text-[15px] leading-relaxed">
              Resolving is something else. Resolving means looking at the entire system. Finding where the chain started. Releasing the primary restriction that holds the whole pattern. When you do that, the body stops compensating. Not because you told it to stop, but because it no longer needs to.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Compensating is surviving. Resolving is recovering the order the body never stopped searching for.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you feel your body has been compensating for years with less and less margin, write me. Let&apos;s look at the full pattern.
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
        </article>
      </main>
    </div>
  );
}
