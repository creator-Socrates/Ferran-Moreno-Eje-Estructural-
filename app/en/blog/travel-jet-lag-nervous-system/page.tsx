import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Travel, jet lag and pressure: how the nervous system pays the price",
  description: "Every flight disrupts circadian rhythm. Every timezone change forces the nervous system to recalibrate. The debt accumulates silently.",
  alternates: {
    canonical: "/en/blog/travel-jet-lag-nervous-system",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Travel, jet lag and pressure: how the nervous system pays the price"
        description="Every flight disrupts circadian rhythm. Every timezone change forces the nervous system to recalibrate. The debt accumulates silently."
        slug="travel-jet-lag-nervous-system"
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
            Travel, jet lag and pressure: how the nervous system pays the price
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Every flight disrupts circadian rhythm. Every timezone change forces the nervous system to recalibrate. Every high-pressure trip adds activation without discharge. And the debt accumulates silently.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Adaptation is not regulation
            </h2>

            <p className="text-[15px] leading-relaxed">
              Business travelers and touring professionals accumulate this debt quietly. They adapt &mdash; humans are good at that. But adaptation is not regulation.
            </p>

            <p className="text-[15px] leading-relaxed">
              Adaptation means the body finds a way to function despite being disorganized. It manages, but at a cost. The nervous system settles into a state of low-grade constant activation. Never fully on, never fully off. Always on guard.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The signals that get ignored
            </h2>

            <p className="text-[15px] leading-relaxed">
              Sleeping eight hours but waking tired. Digestion that &quot;used to be fine.&quot; A baseline of tension that never fully drops. Short temper that appears &quot;out of nowhere.&quot; Difficulty switching off even on holiday.
            </p>

            <p className="text-[15px] leading-relaxed">
              The nervous system isn&apos;t broken. It&apos;s stuck. Stuck in activation mode because it never got the signal that the threat passed. Each new trip stacks on top of the last. Each timezone is a reset the body never fully completes.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The body forgets how to rest
            </h2>

            <p className="text-[15px] leading-relaxed">
              One thing I consistently see in frequent travelers: the body forgets how to rest. Not how to sleep &mdash; how to truly downregulate. How to release accumulated activation. How to complete the stress cycle instead of carrying it from one country to the next.
            </p>

            <p className="text-[15px] leading-relaxed">
              Teaching the system to complete that cycle is often the first step. This isn&apos;t about relaxation techniques. It&apos;s about the nervous system recovering its ability to move between states: activate when needed, recover when needed. Without getting stuck in either one.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Resetting the system
            </h2>

            <p className="text-[15px] leading-relaxed">
              Bodywork doesn&apos;t eliminate jet lag or pressure. What it does is restore the nervous system&apos;s capacity to self-regulate. To process accumulated load. To return to a baseline from which you can perform without excessive wear.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              If you travel frequently, the body doesn&apos;t need more hours of sleep. It needs to remember how to truly rest.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you travel constantly and feel the body no longer recovers the way it used to, write me.
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
          <RelatedArticles slug="travel-jet-lag-nervous-system" lang="en" />
        </article>
      </main>
    </div>
  );
}
