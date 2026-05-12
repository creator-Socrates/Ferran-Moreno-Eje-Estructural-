import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Why CEOs need bodywork",
  description: "High performers optimize everything except the body. And the body is the infrastructure that runs everything else.",
  alternates: {
    canonical: "/en/blog/why-ceos-need-bodywork",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Why CEOs need bodywork"
        description="High performers optimize everything except the body. And the body is the infrastructure that runs everything else."
        slug="why-ceos-need-bodywork"
        date="2026-07-07"
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
            Why CEOs need bodywork
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              High performers optimize everything &mdash; schedule, team, strategy, sleep, nutrition. But almost nobody optimizes the body as infrastructure. And the body is the hardware that runs everything else.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The body is the infrastructure
            </h2>

            <p className="text-[15px] leading-relaxed">
              When the body is disorganized, decision-making degrades. Energy management fails. Stress accumulates without discharge. The traffic light goes to orange and stays there.
            </p>

            <p className="text-[15px] leading-relaxed">
              From orange, you can still perform. But the cost is enormous: reactive decisions, shortened temper, poor sleep, chronic tension disguised as &quot;just how I am.&quot; The body doesn&apos;t complain because it doesn&apos;t know how. It simply limits your capacity without warning.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Not a luxury. Maintenance
            </h2>

            <p className="text-[15px] leading-relaxed">
              I work with executives, entrepreneurs, and high-pressure professionals. Not as a luxury or cosmetic self-care. As maintenance for the machine that runs everything else.
            </p>

            <p className="text-[15px] leading-relaxed">
              This isn&apos;t about relaxation. It&apos;s about the nervous system being able to transition between activation and recovery efficiently. About the body&apos;s structure not generating unnecessary friction. About available energy going to production, not compensation.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Who comes to work with me
            </h2>

            <p className="text-[15px] leading-relaxed">
              Quim Clark, CEO of MQ Events. Madeleine Cooke, leadership coaching. Neus Ribes, Banco Sabadell. These people didn&apos;t come looking for relaxation. They came because their body was limiting their capacity.
            </p>

            <p className="text-[15px] leading-relaxed">
              The pattern is always the same: people performing at a very high level, managing constant pressure, who at some point notice that the body no longer responds the way it used to. Recovery takes longer. Mental clarity isn&apos;t where it was. The body has become an obstacle instead of an ally.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Optimizing what nobody optimizes
            </h2>

            <p className="text-[15px] leading-relaxed">
              You can have the best team, the best strategy, the best schedule. If the hardware fails, the software can&apos;t execute. The body isn&apos;t an accessory to performance. It&apos;s its precondition.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Optimizing the body isn&apos;t what you do after you&apos;ve handled everything else. It&apos;s what makes everything else work better.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you lead a team, a company, or a high-pressure project and the body is no longer keeping up, write me.
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
          <RelatedArticles slug="why-ceos-need-bodywork" lang="en" />
        </article>
      </main>
    </div>
  );
}
