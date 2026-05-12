import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Sustainable performance: the body as infrastructure",
  description: "Sustainable performance isn't about working less. It's about the body having the capacity to recover from what you ask of it.",
  alternates: {
    canonical: "/en/blog/sustainable-performance-body-as-infrastructure",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Sustainable performance: the body as infrastructure"
        description="Sustainable performance isn't about working less. It's about the body having the capacity to recover from what you ask of it."
        slug="sustainable-performance-body-as-infrastructure"
        date="2026-07-10"
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
            Sustainable performance: the body as infrastructure
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              You can push through for years. The body will let you. Until it doesn&apos;t. Sustainable performance isn&apos;t about working less. It&apos;s about the body having the capacity to recover from what you ask of it.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Three pillars of real performance
            </h2>

            <p className="text-[15px] leading-relaxed">
              That capacity depends on three things. The first is structural organization: posture, movement efficiency, how the body distributes the forces it receives. A poorly organized body spends energy just staying upright.
            </p>

            <p className="text-[15px] leading-relaxed">
              The second is nervous system regulation: the ability to shift between activation and recovery. Not always on. Not always off. Being able to move between states without getting stuck.
            </p>

            <p className="text-[15px] leading-relaxed">
              The third is energetic coherence: no internal conflicts draining resources. Unresolved emotional tensions, holding patterns that consume energy without your knowledge, parts of the body working against the rest.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              When all three align
            </h2>

            <p className="text-[15px] leading-relaxed">
              When all three are aligned, you can handle more with less effort. Recovery is faster. Mental clarity holds even under pressure. The body doesn&apos;t compete with you &mdash; it collaborates.
            </p>

            <p className="text-[15px] leading-relaxed">
              When they&apos;re not, every day is a fight against your own system. You wake up tired. You need coffee to start and something to wind down at night. You perform, but at a cost that keeps accumulating. And the bill always comes.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              This isn&apos;t wellness. This is engineering
            </h2>

            <p className="text-[15px] leading-relaxed">
              We&apos;re not talking about wellness. We&apos;re not talking about self-care. We&apos;re talking about engineering &mdash; applied to the only machine you can&apos;t replace.
            </p>

            <p className="text-[15px] leading-relaxed">
              A racing car needs maintenance between races. Not because it&apos;s fragile, but because it performs at the highest level. The human body under high demand works the same way. It&apos;s not about pampering it. It&apos;s about keeping it operational at the level you need.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Sustainable performance isn&apos;t a slogan. It&apos;s what happens when the body stops being an obstacle and becomes your greatest tool.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you perform at a high level and feel the body is no longer keeping up, write me.
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
