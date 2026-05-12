import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "From relief to expansion: your body is addicted to crisis",
  description: "The crisis-relief cycle keeps the body in survival mode. Real change happens when you move from relief to expansion.",
  alternates: {
    canonical: "/en/blog/from-relief-to-expansion",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="From relief to expansion: your body is addicted to crisis"
        description="The crisis-relief cycle keeps the body in survival mode. Real change happens when you move from relief to expansion."
        slug="from-relief-to-expansion"
        date="2026-09-15"
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
            From relief to expansion: your body is addicted to crisis
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              The body gets used to being in this system of crisis, tension, session, relief. It becomes a loop. You go to the physio, they give you relief, you tense up again, you go back. The relief feels good, but nothing changes. It just resets the counter.
            </p>

            <p className="text-[15px] leading-relaxed">
              When we shift that, the cycle transforms: regulation, treatment, regulation, expansion. It&apos;s no longer about surviving and resting. It&apos;s about being well and growing from there.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The difference between relief and expansion
            </h2>

            <p className="text-[15px] leading-relaxed">
              Relief is going back to zero. Expansion is going beyond zero. Relief returns you to where you were before the crisis. Expansion takes you somewhere you&apos;ve never been.
            </p>

            <p className="text-[15px] leading-relaxed">
              The problem is that many bodies don&apos;t know expansion. They only know the oscillation between crisis and relief. And they confuse relief with being well. But truly being well doesn&apos;t feel like &ldquo;it doesn&apos;t hurt anymore.&rdquo; It feels like &ldquo;there&apos;s more space.&rdquo;
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The barista
            </h2>

            <p className="text-[15px] leading-relaxed">
              I had just started seeing Alicia. A new relationship, a moment of real expansion. I walked into a coffee shop. I smiled at the barista. I didn&apos;t do anything special. I was simply well, centered, and that transmitted.
            </p>

            <p className="text-[15px] leading-relaxed">
              The woman broke down. She started crying. Days later she wrote to me. She told me my energy had given her the strength to report her husband, who had been abusing her. Fast-track trial in three days. She left for Canada.
            </p>

            <p className="text-[15px] leading-relaxed">
              Just by being there. Without changing anything. Without saying anything. Without forcing anything. That&apos;s what happens when someone is in expansion, not in relief. You don&apos;t need to do. Just be.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The dowser
            </h2>

            <p className="text-[15px] leading-relaxed">
              I&apos;m like a dowser. I work with the pendulum and what I help with is finding the axis so the light can appear. I don&apos;t place the light. I don&apos;t generate it. I just help remove what&apos;s covering it.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              When you stop seeking relief and start seeking expansion, the body shifts paradigm. It no longer manages crisis. It grows. And from that growth, everything you touch transforms. Without effort. Without intention. Just with presence.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you&apos;ve been stuck in the crisis-relief cycle for years, we can break it together.
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

          <RelatedArticles slug="from-relief-to-expansion" lang="en" />
        </article>
      </main>
    </div>
  );
}
