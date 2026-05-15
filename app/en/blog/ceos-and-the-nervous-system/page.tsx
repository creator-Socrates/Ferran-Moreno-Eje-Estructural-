import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "CEOs and the nervous system",
  description: "High-performance executives optimize everything.",
  alternates: {
    canonical: "/en/blog/ceos-and-the-nervous-system",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="CEOs and the nervous system"
        description="High-performance executives optimize everything."
        slug="ceos-and-the-nervous-system"
        date="2026-09-15"
        tag="High performance"
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
            High performance
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            CEOs and the nervous system
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              High-performance executives optimize everything:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>schedule,</li>
              <li>strategy,</li>
              <li>team,</li>
              <li>productivity,</li>
              <li>metrics,</li>
              <li>nutrition,</li>
              <li>sleep.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              But very few optimize the nervous system from which they are making decisions.
            </p>

            <p className="text-[15px] leading-relaxed">
              And that ends up having an enormous cost.
            </p>

            <p className="text-[15px] leading-relaxed">
              The human body was not designed to live in constant availability. Meetings, messages, pressure, travel, responsibility, continuous decisions. The system can sustain it for years.
            </p>

            <p className="text-[15px] leading-relaxed">
              But the price accumulates silently.
            </p>

            <p className="text-[15px] leading-relaxed">
              I see it constantly in CEOs, founders and high-demand profiles:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>shallow sleep,</li>
              <li>difficulty winding down,</li>
              <li>irritability,</li>
              <li>disrupted digestion,</li>
              <li>a feeling of constant pressure,</li>
              <li>a rigid body,</li>
              <li>fatigue that doesn&apos;t go away with holidays.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              And yet they keep functioning.
            </p>

            <p className="text-[15px] leading-relaxed">
              That is precisely the problem.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body compensates so well that many people don&apos;t detect the wear until the system starts to collapse:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>anxiety,</li>
              <li>pain,</li>
              <li>exhaustion,</li>
              <li>impulsive decisions,</li>
              <li>emotional disconnection,</li>
              <li>a feeling of internal emptiness.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Most try to solve it with more control.
            </p>

            <p className="text-[15px] leading-relaxed">
              More discipline.<br />
              More biohacking.<br />
              More productivity.<br />
              More optimization.
            </p>

            <p className="text-[15px] leading-relaxed">
              But an overloaded nervous system doesn&apos;t need more demands.
            </p>

            <p className="text-[15px] leading-relaxed">
              It needs regulation.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because the physiological state from which you run a company completely changes:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>how you think,</li>
              <li>how you lead,</li>
              <li>how you decide,</li>
              <li>how you handle conflict,</li>
              <li>how you perceive threat,</li>
              <li>how you manage pressure.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              A dysregulated body interprets the entire world from survival.
            </p>

            <p className="text-[15px] leading-relaxed">
              And from survival:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>everything feels urgent,</li>
              <li>everything weighs more,</li>
              <li>decisions get worse,</li>
              <li>creativity decreases,</li>
              <li>tolerance shrinks.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why bodywork in high performance is not wellness.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s infrastructure.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s maintenance of the system that supports absolutely everything else.
            </p>

            <p className="text-[15px] leading-relaxed">
              When the body recovers regulation, something very concrete changes: more internal space appears.
            </p>

            <p className="text-[15px] leading-relaxed">
              And from there:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>decisions are cleaner,</li>
              <li>pressure weighs less,</li>
              <li>the body recovers margin,</li>
              <li>energy stops being drained by constant tension.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Most CEOs work on strategy.
            </p>

            <p className="text-[15px] leading-relaxed">
              Very few work on the nervous system from which that strategy is born.
            </p>

            <p className="text-[15px] leading-relaxed">
              And that makes an enormous difference.
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

          <RelatedArticles slug="ceos-and-the-nervous-system" lang="en" />
        </article>
      </main>
    </div>
  );
}
