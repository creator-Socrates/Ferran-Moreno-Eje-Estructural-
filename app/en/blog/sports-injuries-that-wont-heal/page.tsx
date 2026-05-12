import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Sports injuries that won't heal: the pattern nobody looks at",
  description: "The tissue healed but the injury persists. The problem isn't the structure — it's the compensation pattern the injury left behind.",
  alternates: {
    canonical: "/en/blog/sports-injuries-that-wont-heal",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Sports injuries that won't heal: the pattern nobody looks at"
        description="The tissue healed but the injury persists. The problem isn't the structure — it's the compensation pattern the injury left behind."
        slug="sports-injuries-that-wont-heal"
        date="2026-06-09"
        tag="Sports"
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
            Sports
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Sports injuries that won&apos;t heal: the pattern nobody looks at
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              The ankle healed on the MRI but still doesn&apos;t feel right. The shoulder passed every test but you can&apos;t throw like before. The tissue healed. The pattern didn&apos;t.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              What stays after the tissue heals
            </h2>

            <p className="text-[15px] leading-relaxed">
              Every injury creates a compensation pattern. It&apos;s automatic. The body learns to work around the damage: it redistributes load, changes muscle activation, alters biomechanics. It&apos;s intelligent. It&apos;s necessary. But it&apos;s meant to be temporary.
            </p>

            <p className="text-[15px] leading-relaxed">
              The problem is that when the tissue heals, the compensation pattern stays. The body has no reset button. Nobody tells it: &ldquo;you can go back to normal now.&rdquo; So it keeps running the emergency pattern as if it were the default.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Why more rehab isn&apos;t the answer
            </h2>

            <p className="text-[15px] leading-relaxed">
              If the compensation pattern is still active, you&apos;re strengthening on top of a crooked foundation. More stability work, more proprioception drills, more strength training &mdash; all of it builds on an organization that isn&apos;t right. That&apos;s why many &ldquo;healed&rdquo; injuries keep bothering you, or come back, or create a new injury somewhere else.
            </p>

            <p className="text-[15px] leading-relaxed">
              The fix isn&apos;t more rehab. It&apos;s reorganizing the pattern the injury left behind. First, release the compensation. Then the body can integrate clean movement.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Real cases
            </h2>

            <p className="text-[15px] leading-relaxed">
              Rodrigo Peñafiel had been dealing with a knee that wouldn&apos;t respond to conventional rehab. In one session, we reorganized the pattern. The knee stopped being the problem.
            </p>

            <p className="text-[15px] leading-relaxed">
              Tommy O&apos;Ceilea had a fall and his back wouldn&apos;t fully recover. The tissue was fine. The pattern from the fall was still active in his system. We worked on that.
            </p>

            <p className="text-[15px] leading-relaxed">
              Jose Luis Pagán, a firefighter, thought he wouldn&apos;t be able to keep working. His body had accumulated years of compensation patterns from physical demands. It wasn&apos;t one injury. It was an overloaded system full of patterns nobody had reorganized.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The pattern is the key
            </h2>

            <p className="text-[15px] leading-relaxed font-medium">
              If the injury healed but something still isn&apos;t right, the problem isn&apos;t the tissue. It&apos;s the pattern the injury left behind. And that pattern doesn&apos;t resolve with more reps. It resolves with someone who knows how to read it and reorganize it.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you have an injury that &ldquo;should be healed by now&rdquo; but still doesn&apos;t work right, write me. We find what pattern it left behind.
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
