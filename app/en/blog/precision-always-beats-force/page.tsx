import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Precision always beats force",
  description: "There's a widespread belief in bodywork: press harder, go deeper. It's not true.",
  alternates: {
    canonical: "/en/blog/precision-always-beats-force",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Precision always beats force"
        description="There's a widespread belief in bodywork: press harder, go deeper. It's not true."
        slug="precision-always-beats-force"
        date="2026-06-01"
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
            Precision always beats force
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              There&apos;s a widespread belief in bodywork: if you press harder, you go deeper.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s not true.
            </p>

            <p className="text-[15px] leading-relaxed">
              Many times the opposite happens.
            </p>

            <p className="text-[15px] leading-relaxed">
              When you force tissue too hard, the body defends itself. It contracts. Protects. Closes down. And at that point you stop working with the system and start fighting against it.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s not depth.
It&apos;s invasion.
            </p>

            <p className="text-[15px] leading-relaxed">
              True depth appears when the body feels safe enough to open without needing to defend.
            </p>

            <p className="text-[15px] leading-relaxed">
              And that&apos;s where precision changes everything.
            </p>

            <p className="text-[15px] leading-relaxed">
              One precise contact, in the right place, with the right intention, generates more reorganization than twenty minutes of brute pressure. I learned this after years of training in Rolfing, visceral osteopathy, and fascial work.
            </p>

            <p className="text-[15px] leading-relaxed">
              At first, like many therapists, I associated intensity with effectiveness. But the more I learned to listen, the more obvious something became:
the body responds far more to the quality of attention than to the quantity of force.
            </p>

            <p className="text-[15px] leading-relaxed">
              This is especially visible in visceral and nervous system work.
            </p>

            <p className="text-[15px] leading-relaxed">
              An organ doesn&apos;t need pressure.
It needs listening.
            </p>

            <p className="text-[15px] leading-relaxed">
              A dysregulated nervous system doesn&apos;t need to be dominated.
It needs to feel that it can stop defending.
            </p>

            <p className="text-[15px] leading-relaxed">
              I&apos;ve seen enormous changes happen with minimal contacts. Breathing that opens. Tension that dissolves. Posture that shifts without aggressive manipulation.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not because I was &ldquo;doing more.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              Because I was interfering less.
            </p>

            <p className="text-[15px] leading-relaxed">
              Force impresses.
Precision transforms.
            </p>

            <p className="text-[15px] leading-relaxed">
              And that doesn&apos;t only apply to bodywork.
            </p>

            <p className="text-[15px] leading-relaxed">
              It also applies to how you speak, how you lead, how you parent, and how you relate to others.
            </p>

            <p className="text-[15px] leading-relaxed">
              Many people try to change their lives using more force:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>more discipline,</li>
              <li>more control,</li>
              <li>more demand,</li>
              <li>more pressure.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              But the human body doesn&apos;t thrive under constant threat.
            </p>

            <p className="text-[15px] leading-relaxed">
              It thrives when it finds coherence, space, and direction.
            </p>

            <p className="text-[15px] leading-relaxed">
              Precision always beats force.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because the body doesn&apos;t need to be conquered.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              It needs you to learn to listen to it.
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
