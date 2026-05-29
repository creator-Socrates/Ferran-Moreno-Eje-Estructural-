import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "Travel, jet lag and nervous debt",
  description: "The human body was not designed to constantly change time zones, sleep in hotels, live between airports and answer messages at any hour of the day.",
  alternates: getBlogAlternates("en", "travel-jet-lag-nervous-debt"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Travel, jet lag and nervous debt"
        description="The human body was not designed to constantly change time zones, sleep in hotels, live between airports and answer messages at any hour of the day."
        slug="travel-jet-lag-nervous-debt"
        date="2026-09-25"
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
            Travel, jet lag and nervous debt
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              The human body was not designed to constantly change time zones, sleep in hotels, live between airports and answer messages at any hour of the day.
            </p>

            <p className="text-[15px] leading-relaxed">
              But millions of people live like this.
            </p>

            <p className="text-[15px] leading-relaxed">
              And the nervous system pays the bill even when the mind keeps functioning.
            </p>

            <p className="text-[15px] leading-relaxed">
              Every flight disrupts circadian rhythm, digestion, sleep, breathing and hormonal regulation. The problem is not a single trip.
            </p>

            <p className="text-[15px] leading-relaxed">
              The problem is the accumulation.
            </p>

            <p className="text-[15px] leading-relaxed">
              That is what I call nervous debt: physiological activation that never fully discharges.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body adapts, yes.
            </p>

            <p className="text-[15px] leading-relaxed">
              But adapting does not mean being regulated.
            </p>

            <p className="text-[15px] leading-relaxed">
              Many high-demand professionals spend years in a state of low-grade permanent activation:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>light sleep,</li>
              <li>a strange kind of fatigue,</li>
              <li>difficulty winding down,</li>
              <li>irritability,</li>
              <li>irregular digestion,</li>
              <li>the feeling of never being fully present.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              And because they keep functioning, they believe they are fine.
            </p>

            <p className="text-[15px] leading-relaxed">
              But the body is holding far more than it seems.
            </p>

            <p className="text-[15px] leading-relaxed">
              Each trip adds a small layer:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>less recovery,</li>
              <li>more vigilance,</li>
              <li>more internal tension,</li>
              <li>less sense of physiological home.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              There comes a point when the system loses its reference for deep rest.
            </p>

            <p className="text-[15px] leading-relaxed">
              That is when very typical things appear:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>waking up tired even after sleeping,</li>
              <li>inability to disconnect,</li>
              <li>background anxiety,</li>
              <li>a body still running fast even on holiday.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Many people try to fix it with supplements, coffee or willpower.
            </p>

            <p className="text-[15px] leading-relaxed">
              But a saturated nervous system does not need more stimulation.
            </p>

            <p className="text-[15px] leading-relaxed">
              It needs to reorient itself.
            </p>

            <p className="text-[15px] leading-relaxed">
              To find rhythm again.<br />
              Safety.<br />
              An internal reference.
            </p>

            <p className="text-[15px] leading-relaxed">
              That is why bodywork for people who travel constantly is often not about &ldquo;relaxing.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              It is about restoring coherence to the system:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>breathing,</li>
              <li>internal rhythm,</li>
              <li>a sense of axis,</li>
              <li>the capacity to recover.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              When that returns, the body stops feeling permanently displaced.
            </p>

            <p className="text-[15px] leading-relaxed">
              And something appears that many people had forgotten: actually resting.
            </p>

            <p className="text-[15px] leading-relaxed">
              Jet lag is not just tiredness.
            </p>

            <p className="text-[15px] leading-relaxed">
              It is physiology trying to reorganize itself constantly without ever finishing the process.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If something you&apos;ve read resonates, write me.
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
