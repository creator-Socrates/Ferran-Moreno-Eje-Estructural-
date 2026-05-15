import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Why some injuries never fully heal",
  description: "Some injuries 'healed' years ago. The tissue scarred, the inflammation is gone. But the body never truly went back to normal. The pattern stayed.",
  alternates: {
    canonical: "/en/blog/why-some-injuries-never-fully-heal",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Why some injuries never fully heal"
        description="Some injuries 'healed' years ago. The tissue scarred, the inflammation is gone. But the body never truly went back to normal. The pattern stayed."
        slug="why-some-injuries-never-fully-heal"
        date="2026-08-04"
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
            Why some injuries never fully heal
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Some injuries &ldquo;healed&rdquo; years ago.
            </p>

            <p className="text-[15px] leading-relaxed">
              The MRI came back clean.<br />
              The tissue scarred.<br />
              The inflammation is gone.
            </p>

            <p className="text-[15px] leading-relaxed">
              And yet the body never truly went back to functioning the same way.
            </p>

            <p className="text-[15px] leading-relaxed">
              The knee still feels off.<br />
              The ankle never regained confidence.<br />
              The back locks up periodically.<br />
              The shoulder still feels vulnerable.
            </p>

            <p className="text-[15px] leading-relaxed">
              That happens because one thing is for the tissue to heal.
            </p>

            <p className="text-[15px] leading-relaxed">
              And quite another is for the pattern to disappear.
            </p>

            <p className="text-[15px] leading-relaxed">
              Every injury creates an automatic reorganization of the system.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body changes:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>how it distributes weight,</li>
              <li>how it activates muscles,</li>
              <li>how it breathes,</li>
              <li>how it stabilizes,</li>
              <li>how it protects.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              It&apos;s biological intelligence.
            </p>

            <p className="text-[15px] leading-relaxed">
              If you injure an ankle, the body redistributes load immediately to keep you walking. The problem is that many times that adaptation stays active long after the tissue has already healed.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s where the residual pattern appears.
            </p>

            <p className="text-[15px] leading-relaxed">
              And that pattern can last years.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body keeps functioning as if the threat still existed.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why many people say:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              &ldquo;It&apos;s not broken... but it&apos;s not right either.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              Because the tissue healed. But the system never truly regained trust.
            </p>

            <p className="text-[15px] leading-relaxed">
              Then something very typical shows up:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>constant relapses,</li>
              <li>recurring injuries,</li>
              <li>migratory aches,</li>
              <li>structural fatigue,</li>
              <li>a feeling of fragility.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              The person keeps strengthening, stretching, rehabilitating.
            </p>

            <p className="text-[15px] leading-relaxed">
              But it all happens on top of a protective pattern that&apos;s still active.
            </p>

            <p className="text-[15px] leading-relaxed">
              And as long as the pattern is there, the body never fully feels free.
            </p>

            <p className="text-[15px] leading-relaxed">
              Many times, real recovery begins when the system stops protecting an injury that already passed.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s when movement changes.<br />
              Breathing changes.<br />
              Stability changes.<br />
              The internal sense of safety changes.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s not just about repairing tissue.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s about reorganizing the pattern the injury left behind.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because many injuries don&apos;t persist because of damage.
            </p>

            <p className="text-[15px] leading-relaxed">
              They persist because of physiological memory.
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

          <RelatedArticles slug="why-some-injuries-never-fully-heal" lang="en" />
        </article>
      </main>
    </div>
  );
}
