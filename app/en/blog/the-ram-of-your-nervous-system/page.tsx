import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "The RAM of your nervous system: why willpower doesn't work",
  description: "It's not a lack of willpower. Your nervous system has no bandwidth left. Free up space first, then change happens on its own.",
  alternates: {
    canonical: "/en/blog/the-ram-of-your-nervous-system",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The RAM of your nervous system: why willpower doesn't work"
        description="It's not a lack of willpower. Your nervous system has no bandwidth left. Free up space first, then change happens on its own."
        slug="the-ram-of-your-nervous-system"
        date="2026-08-18"
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
            The RAM of your nervous system: why willpower doesn&apos;t work
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              You know you should exercise. You know you should eat better. You know you should sleep more. You know. But you don&apos;t do it. And you blame yourself. You tell yourself it&apos;s a lack of discipline, a lack of willpower, a lack of character. It&apos;s none of those things.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Your system has a capacity limit
            </h2>

            <p className="text-[15px] leading-relaxed">
              Think of your nervous system as a computer&apos;s RAM. Every responsibility, every worry, every unresolved conflict, every debt, every draining relationship, every pending decision takes up space. When the RAM is at 98%, you can&apos;t open a new app. No matter how much you want to. The system doesn&apos;t have the resources available.
            </p>

            <p className="text-[15px] leading-relaxed">
              The energy for exercise can&apos;t be mentally forced when the system&apos;s RAM is occupied holding up vital responsibilities. This isn&apos;t a pretty metaphor. It&apos;s physiology. The nervous system has a finite energy budget and allocates it by survival priority, not by your intentions.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              I lived it firsthand
            </h2>

            <p className="text-[15px] leading-relaxed">
              I spent six or seven months unable to train. Performance at 3%. Digestive problems from stress. Debts. My body didn&apos;t respond to anything I asked of it. It wasn&apos;t a lack of willpower. My system simply had no bandwidth available. Everything was occupied sustaining the life situation.
            </p>

            <p className="text-[15px] leading-relaxed">
              I was in a relationship that drained 99% of my emotional bandwidth. Nothing was left for training, for creating, for thinking clearly. When that situation resolved, the energy came back on its own. Without forcing. Without heroic discipline. There was simply space again.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Free up space first
            </h2>

            <p className="text-[15px] leading-relaxed">
              You can&apos;t install apps on a phone with no storage. You can&apos;t add habits to a saturated nervous system. The order is: first resolve what&apos;s draining the system. Then energy naturally flows where you want it to go.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Stop blaming yourself for lacking willpower. Look at what&apos;s consuming your RAM. Resolve that first. The rest follows on its own.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you feel your system is at its limit and you don&apos;t know where to start freeing up space, write me.
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

          <RelatedArticles slug="the-ram-of-your-nervous-system" lang="en" />
        </article>
      </main>
    </div>
  );
}
