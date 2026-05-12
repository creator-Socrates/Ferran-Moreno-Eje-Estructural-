import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Chronic pain with no solution: when the problem isn't where it hurts",
  description: "You've tried everything and nothing works. Maybe no one has looked where the issue actually starts.",
  alternates: {
    canonical: "/en/blog/chronic-pain-when-the-problem-isnt-where-it-hurts",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Chronic pain with no solution: when the problem isn't where it hurts"
        description="You've tried everything and nothing works. Maybe no one has looked where the issue actually starts."
        slug="chronic-pain-when-the-problem-isnt-where-it-hurts"
        date="2026-05-09"
        tag="Chronic pain"
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
            Chronic pain
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Chronic pain with no solution: when the problem isn&apos;t where it hurts
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              You&apos;ve been to the physio. The osteopath. The orthopedic surgeon. You&apos;ve had MRIs, X-rays, blood work. They gave you anti-inflammatories, stretches, exercises. Some things help for a while. Then the pain comes back. It always comes back.
            </p>

            <p className="text-[15px] leading-relaxed">
              The issue, almost always, is that they&apos;re treating where it hurts. And where it hurts is not where it starts.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Pain is the signal, not the problem
            </h2>

            <p className="text-[15px] leading-relaxed">
              Pain is information. It&apos;s your body&apos;s way of telling you something isn&apos;t working. But the area that hurts is rarely the area that&apos;s stuck. What hurts is what compensates. What&apos;s overworking because another structure isn&apos;t doing its job.
            </p>

            <p className="text-[15px] leading-relaxed">
              In bodywork we call it the primary lesion. The original point where something became disorganized. A fall, a surgery, sustained emotional tension, a postural pattern held for years. That primary lesion generates compensations. The body reorganizes around it to keep functioning. And it works. For years.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Death by a thousand paper cuts
            </h2>

            <p className="text-[15px] leading-relaxed">
              It&apos;s usually not one event. Not one blow. It&apos;s accumulation. Every micro-tension, every compensation, every restriction the body absorbs and manages without you noticing. Each one on its own is nothing. Together, they overwhelm the system.
            </p>

            <p className="text-[15px] leading-relaxed">
              When the body can no longer compensate, pain shows up. But that pain is the last link in a chain that started much earlier, often in a completely different place.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Treating the compensation is a patch
            </h2>

            <p className="text-[15px] leading-relaxed">
              If you treat the area that hurts without resolving what&apos;s generating it, the pain returns. It&apos;s a matter of time. You can massage that back every week. You can needle those trigger points every two weeks. But if the cause is a visceral restriction, a scar pulling on the fascia, a tension pattern the nervous system keeps active, the pain will regenerate.
            </p>

            <p className="text-[15px] leading-relaxed">
              I&apos;ve been seeing this pattern for over twenty years. The person shows up after five, eight, twelve practitioners. It&apos;s not that those practitioners were bad. It&apos;s that they were looking where it hurts instead of asking why the body organized itself that way.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The right question
            </h2>

            <p className="text-[15px] leading-relaxed">
              The question isn&apos;t what hurts. You already know that. The question is why your body organized itself this way. Which structure is locked, forcing others to overwork. Where the primary lesion is that started the chain of compensations.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              When you resolve the origin, the compensations unwind on their own. And the pain, which was the signal, no longer has a reason to exist.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you&apos;ve had a pain no one can resolve, maybe it&apos;s time to look somewhere else.
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
          <RelatedArticles slug="chronic-pain-when-the-problem-isnt-where-it-hurts" lang="en" />
        </article>
      </main>
    </div>
  );
}
