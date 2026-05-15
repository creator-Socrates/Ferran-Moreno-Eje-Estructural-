import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "The difference between reorganizing and repairing",
  description: "Most people believe their body is broken.",
  alternates: {
    canonical: "/en/blog/the-difference-between-reorganizing-and-repairing",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The difference between reorganizing and repairing"
        description="Most people believe their body is broken."
        slug="the-difference-between-reorganizing-and-repairing"
        date="2026-06-09"
        tag="Fundamentals"
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
            Fundamentals
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            The difference between reorganizing and repairing
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Most people believe their body is broken.
            </p>

            <p className="text-[15px] leading-relaxed">
              They arrive after years of pain, treatments and frustration thinking that something inside stopped working and needs to be fixed.
            </p>

            <p className="text-[15px] leading-relaxed">
              But most of the time the body isn&apos;t broken.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s disorganized.
            </p>

            <p className="text-[15px] leading-relaxed">
              And the difference between those two things completely changes how you work.
            </p>

            <p className="text-[15px] leading-relaxed">
              Repairing implies there is a damaged part that needs direct intervention:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>a fracture,</li>
              <li>a torn tissue,</li>
              <li>an acute injury,</li>
              <li>a structure that truly lost its integrity.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Modern medicine is extraordinary at that.
            </p>

            <p className="text-[15px] leading-relaxed">
              But most chronic physical suffering doesn&apos;t work that way.
            </p>

            <p className="text-[15px] leading-relaxed">
              The problem usually isn&apos;t that the body forgot how to function. The problem is that it has spent too long organizing itself around compensations.
            </p>

            <p className="text-[15px] leading-relaxed">
              And then you see:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>tension,</li>
              <li>recurring pain,</li>
              <li>fatigue,</li>
              <li>stiffness,</li>
              <li>physiological anxiety,</li>
              <li>patterns that keep coming back again and again.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              And the longer it goes on, the harder it becomes to tell cause from compensation.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s where reorganizing completely changes the approach.
            </p>

            <p className="text-[15px] leading-relaxed">
              Reorganizing means restoring the conditions for the system to function better as a whole.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not chasing symptoms.<br />
              Not fighting the body.<br />
              Not imposing an external correction.
            </p>

            <p className="text-[15px] leading-relaxed">
              It means:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>restoring mobility where it was lost,</li>
              <li>releasing unnecessary compensations,</li>
              <li>reorganizing breathing,</li>
              <li>recovering adaptive capacity,</li>
              <li>allowing the system to find a more efficient order.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              When that happens, many things change on their own.
            </p>

            <p className="text-[15px] leading-relaxed">
              Posture changes without &quot;correcting posture.&quot;<br />
              Breathing changes without breathing exercises.<br />
              Pain decreases without chasing the pain directly.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because the system no longer needs to sustain the same defensive organization.
            </p>

            <p className="text-[15px] leading-relaxed">
              This is important: most of the time the body doesn&apos;t need help to function.
            </p>

            <p className="text-[15px] leading-relaxed">
              It needs you to stop interfering.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body has an organizational intelligence far more sophisticated than we imagine. When you remove significant restrictions, the system begins to reorganize on its own.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s where real change happens.
            </p>

            <p className="text-[15px] leading-relaxed">
              Repairing fixes parts.
            </p>

            <p className="text-[15px] leading-relaxed">
              Reorganizing changes the entire system.
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

          <RelatedArticles slug="the-difference-between-reorganizing-and-repairing" lang="en" />
        </article>
      </main>
    </div>
  );
}
