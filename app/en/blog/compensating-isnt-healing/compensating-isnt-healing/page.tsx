import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Compensating isn't healing",
  description: "Your body is brilliant at compensating. That's not the problem. The problem is confusing it with being healed.",
  alternates: {
    canonical: "/en/blog/compensating-isnt-healing",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Compensating isn't healing"
        description="Your body is brilliant at compensating. That's not the problem. The problem is confusing it with being healed."
        slug="compensating-isnt-healing"
        date="2026-05-22"
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
            Compensating isn&apos;t healing
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              Your body is brilliant at compensating.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s not the problem.
            </p>

            <p className="text-[15px] leading-relaxed">
              The problem is that many people confuse compensation with healing because the body can keep functioning for a very long time before it collapses.
            </p>

            <p className="text-[15px] leading-relaxed">
              You can keep working.
You can keep training.
You can keep taking care of others.
You can keep producing.
            </p>

            <p className="text-[15px] leading-relaxed">
              And still be running on an organization that&apos;s been exhausted for years.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s compensating.
            </p>

            <p className="text-[15px] leading-relaxed">
              Compensating means one part of the body is doing the work another part can no longer do well.
            </p>

            <p className="text-[15px] leading-relaxed">
              The back compensates for a disorganized pelvis.
The neck compensates for a rigid thorax.
The jaw compensates for a nervous system on alert.
The breathing compensates for a deep tension that never fully releases.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body constantly redistributes load to keep you operational.
            </p>

            <p className="text-[15px] leading-relaxed">
              At first it&apos;s a masterpiece of adaptation.
            </p>

            <p className="text-[15px] leading-relaxed">
              Thanks to that, you survive injuries, stress, surgeries, difficult emotional periods, and years of physical or mental demand.
            </p>

            <p className="text-[15px] leading-relaxed">
              But every compensation has a cost.
            </p>

            <p className="text-[15px] leading-relaxed">
              And that cost accumulates.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s what many people start to notice past a certain age:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>they recover slower,</li>
              <li>they need more rest,</li>
              <li>they wake up stiff,</li>
              <li>they lose energy,</li>
              <li>they feel the body just doesn&apos;t respond the way it used to.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              It&apos;s not just age.
            </p>

            <p className="text-[15px] leading-relaxed">
              Many times it&apos;s a system that&apos;s been spending resources for decades sustaining emergency patterns as if they were normal.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body keeps going.
But with less and less margin.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why some people one day lock up &ldquo;for no reason.&rdquo; They bend down to pick up a bag and the back collapses. They argue with someone and the body spirals into anxiety. They sleep badly for a week and massive fatigue sets in.
            </p>

            <p className="text-[15px] leading-relaxed">
              The cause isn&apos;t that moment.
            </p>

            <p className="text-[15px] leading-relaxed">
              That moment is the last drop on a system that had been compensating for too long.
            </p>

            <p className="text-[15px] leading-relaxed">
              Healing is something else.
            </p>

            <p className="text-[15px] leading-relaxed">
              Healing means the body no longer needs to sustain the survival pattern it built.
            </p>

            <p className="text-[15px] leading-relaxed">
              Then something different appears:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>more space,</li>
              <li>more breath,</li>
              <li>less effort,</li>
              <li>more capacity to recover,</li>
              <li>a sense of axis,</li>
              <li>energy available again.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              That doesn&apos;t happen by adding more tension on top of the body.
            </p>

            <p className="text-[15px] leading-relaxed">
              It happens when the system recovers organization.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why deep change often doesn&apos;t feel like &ldquo;more strength.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              It feels like:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              &ldquo;My body doesn&apos;t have to fight so hard just to function.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s where true reorganization begins.
            </p>

            <p className="text-[15px] leading-relaxed">
              Compensating lets you survive.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Healing means the body no longer needs to.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If something you read here resonates, write me.
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
