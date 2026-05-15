import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Most people aren't tired. They're compensating.",
  description: "There's a huge difference between being tired and compensating. One recovers with rest. The other doesn't.",
  alternates: {
    canonical: "/en/blog/not-tired-compensating",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Most people aren't tired. They're compensating."
        description="There's a huge difference between being tired and compensating. One recovers with rest. The other doesn't."
        slug="not-tired-compensating"
        date="2026-06-19"
        tag="Nervous system"
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
            Nervous system
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Most people aren&apos;t tired. They&apos;re compensating.
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              There&apos;s a huge difference between being tired and compensating.
            </p>

            <p className="text-[15px] leading-relaxed">
              Normal tiredness recovers. You rest, sleep well, eat, slow down for a few days... and the body comes back.
            </p>

            <p className="text-[15px] leading-relaxed">
              Compensation doesn&apos;t work like that.
            </p>

            <p className="text-[15px] leading-relaxed">
              Compensation drains energy constantly, even when you&apos;re doing nothing.
            </p>

            <p className="text-[15px] leading-relaxed">
              A disorganized body spends resources all the time trying to maintain balance:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>muscles overworking,</li>
              <li>breathing restricted,</li>
              <li>nervous system on watch,</li>
              <li>digestion running with less margin,</li>
              <li>tension holding up structures that shouldn&apos;t depend on it anymore.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              It&apos;s like driving with the handbrake slightly on for years. The car keeps moving. But the wear is enormous.
            </p>

            <p className="text-[15px] leading-relaxed">
              Many people live like this for so long they stop noticing.
            </p>

            <p className="text-[15px] leading-relaxed">
              They get used to:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>waking up tired,</li>
              <li>needing coffee to start,</li>
              <li>constant tension,</li>
              <li>recovering poorly,</li>
              <li>living with a background fatigue that never fully goes away.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              And because blood work often comes back &ldquo;normal,&rdquo; they start thinking the problem is psychological, or that they&apos;re simply getting older.
            </p>

            <p className="text-[15px] leading-relaxed">
              But when you observe the body, you see something else.
            </p>

            <p className="text-[15px] leading-relaxed">
              You see breathing that never reaches the abdomen.
You see a pelvis that doesn&apos;t transmit load well.
You see a rigid thorax.
You see nervous systems stuck in low-grade alert.
You see entire bodies holding themselves up through unnecessary tension.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body keeps functioning.
But at too high a cost.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s compensating.
            </p>

            <p className="text-[15px] leading-relaxed">
              And there comes a point where the system runs out of margin. Then the sensation of collapse arrives:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>&ldquo;I can&apos;t take it anymore,&rdquo;</li>
              <li>&ldquo;I have no energy,&rdquo;</li>
              <li>&ldquo;something is wrong with me.&rdquo;</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Many times it&apos;s not energy that&apos;s missing.
It&apos;s organization.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why some people feel more change after a good bodywork reorganization than after weeks of rest. Not because the work &ldquo;gives energy,&rdquo; but because the body stops wasting it sustaining patterns it no longer needs.
            </p>

            <p className="text-[15px] leading-relaxed">
              Something important shifts there.
            </p>

            <p className="text-[15px] leading-relaxed">
              Breathing costs less.
Moving costs less.
Thinking costs less.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body stops fighting itself.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              And when that happens, something appears that many people had forgotten:
having energy without having to force it.
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
