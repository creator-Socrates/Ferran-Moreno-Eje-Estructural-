import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "Living in amber feels normal until you step out of it",
  description: "Most people don't actually know what a regulated nervous system feels like. Not because they never had one. Because they've been away from it too long.",
  alternates: getBlogAlternates("en", "living-in-amber"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Living in amber feels normal until you step out of it"
        description="Most people don't actually know what a regulated nervous system feels like. Not because they never had one. Because they've been away from it too long."
        slug="living-in-amber"
        date="2026-06-22"
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
            Living in amber feels normal until you step out of it
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              Most people don&apos;t actually know what a regulated nervous system feels like.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not because they never had one.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because they&apos;ve been away from it too long.
            </p>

            <p className="text-[15px] leading-relaxed">
              I use the traffic light image a lot to explain this:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>green,</li>
              <li>amber,</li>
              <li>red.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Green is regulation. There&apos;s clarity, capacity to respond, internal margin. The body can activate when needed and come back down afterward.
            </p>

            <p className="text-[15px] leading-relaxed">
              Amber is something else.
            </p>

            <p className="text-[15px] leading-relaxed">
              The system keeps functioning, but from constant vigilance. There&apos;s background tension, shorter breathing, less recovery, less internal space. The body stays ready to respond even when nothing serious is happening.
            </p>

            <p className="text-[15px] leading-relaxed">
              And the most important part:
an enormous number of people have been living there for years.
            </p>

            <p className="text-[15px] leading-relaxed">
              They wake up already revved.
They eat fast.
They breathe high.
They rest without recovering.
They never fully come down.
            </p>

            <p className="text-[15px] leading-relaxed">
              But because that activation has been present for so long, they end up believing it&apos;s their personality.
            </p>

            <p className="text-[15px] leading-relaxed">
              &ldquo;I&apos;m a nervous person.&rdquo;
&ldquo;I&apos;m always on.&rdquo;
&ldquo;I don&apos;t know how to stop.&rdquo;
&ldquo;That&apos;s just how I work.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              Many times it&apos;s not identity.
It&apos;s physiological adaptation.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body gets so used to living on alert that the altered state becomes normal.
            </p>

            <p className="text-[15px] leading-relaxed">
              That completely changes how you perceive life:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>everything seems urgent,</li>
              <li>everything weighs more,</li>
              <li>everything consumes more energy,</li>
              <li>the body never fully feels safe.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              And from there, even resting can feel uncomfortable.
            </p>

            <p className="text-[15px] leading-relaxed">
              Some people, when they start to regulate, feel something strange:
silence.
            </p>

            <p className="text-[15px] leading-relaxed">
              Internal silence.
            </p>

            <p className="text-[15px] leading-relaxed">
              Suddenly the body stops holding constant noise:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>less pressure,</li>
              <li>less vigilance,</li>
              <li>less background tension,</li>
              <li>less need to anticipate.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              And there they discover how much effort they were making just to function.
            </p>

            <p className="text-[15px] leading-relaxed">
              This is something important:
many people aren&apos;t tired because of what they do.
            </p>

            <p className="text-[15px] leading-relaxed">
              They&apos;re tired because of the physiological state they do it from.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why regulating a nervous system changes far more than stress.
It changes your entire perception of life.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body stops acting as if it were constantly surviving.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              And from there, something appears that many people had forgotten:
having internal space again.
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
