import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "Pain rarely starts where it hurts",
  description: "Most people think about the body locally. But the body works as a system of tensions, compensations and constant relationships between structures.",
  alternates: getBlogAlternates("en", "pain-rarely-starts-where-it-hurts"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Pain rarely starts where it hurts"
        description="Most people think about the body locally. But the body works as a system of tensions, compensations and constant relationships between structures."
        slug="pain-rarely-starts-where-it-hurts"
        date="2026-07-31"
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
            Pain rarely starts where it hurts
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Most people think about the body locally.
            </p>

            <p className="text-[15px] leading-relaxed">
              Back hurts. The problem is in the back.
            </p>

            <p className="text-[15px] leading-relaxed">
              Knee hurts. The problem is in the knee.
            </p>

            <p className="text-[15px] leading-relaxed">
              Neck hurts. The problem is in the neck.
            </p>

            <p className="text-[15px] leading-relaxed">
              But the body doesn&apos;t work that way.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body works as a system of tensions, compensations, and constant relationships between structures.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why where it hurts is rarely where the problem started.
            </p>

            <p className="text-[15px] leading-relaxed">
              The back may be compensating for a rigid diaphragm. The neck may be responding to a disorganized pelvis. The jaw may be reacting to a nervous system on alert. A knee may be holding up for a loss of mobility in the ankle.
            </p>

            <p className="text-[15px] leading-relaxed">
              Everything is connected through fascia, breathing, posture and the nervous system.
            </p>

            <p className="text-[15px] leading-relaxed">
              And the body constantly redistributes load to keep you functioning.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why so many people are trapped in endless treatment cycles:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>they massage where it hurts,</li>
              <li>they strengthen where it fails,</li>
              <li>they inject where there&apos;s inflammation,</li>
              <li>they stretch where there&apos;s tension.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              And the symptom comes back.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not because the treatment is useless.
            </p>

            <p className="text-[15px] leading-relaxed">
              But because the body is still organized around the same pattern.
            </p>

            <p className="text-[15px] leading-relaxed">
              The painful area is often simply the structure paying the bill for the rest of the system.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s the part that can no longer compensate.
            </p>

            <p className="text-[15px] leading-relaxed">
              That completely changes how you read the body.
            </p>

            <p className="text-[15px] leading-relaxed">
              The question stops being:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              &ldquo;Where does it hurt?&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              And becomes:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              &ldquo;What is forcing the body to organize itself this way?&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s where surprising things appear.
            </p>

            <p className="text-[15px] leading-relaxed">
              People with chronic lower back pain who improve when you work on the abdomen or the diaphragm. Necks that change when you reorganize the pelvis. Shoulders that free up when the thorax recovers mobility.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not because it&apos;s magic.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because the body works in chains, not in isolated parts.
            </p>

            <p className="text-[15px] leading-relaxed">
              When you understand that, pain stops being an enemy.
            </p>

            <p className="text-[15px] leading-relaxed">
              It starts to look like a signal.
            </p>

            <p className="text-[15px] leading-relaxed">
              A messenger showing you where the system can no longer keep compensating.
            </p>

            <p className="text-[15px] leading-relaxed">
              And most of the time, the place where the body screams is not where the problem began.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s simply the last link in the chain.
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

          <RelatedArticles slug="pain-rarely-starts-where-it-hurts" lang="en" />
        </article>
      </main>
    </div>
  );
}
