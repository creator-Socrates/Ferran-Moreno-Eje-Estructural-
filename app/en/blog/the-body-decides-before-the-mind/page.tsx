import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "The body decides before the mind",
  description: "Your body responds before you have time to think. That's not philosophy. It's basic neurophysiology.",
  alternates: {
    canonical: "/en/blog/the-body-decides-before-the-mind",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The body decides before the mind"
        description="Your body responds before you have time to think. That's not philosophy. It's basic neurophysiology."
        slug="the-body-decides-before-the-mind"
        date="2026-05-25"
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
            The body decides before the mind
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              Your body responds before you have time to think.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s not philosophy.
It&apos;s basic neurophysiology.
            </p>

            <p className="text-[15px] leading-relaxed">
              Long before a conscious thought appears, the body has already started reacting:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>breathing changed,</li>
              <li>muscle tone changed,</li>
              <li>posture changed,</li>
              <li>heart rate changed,</li>
              <li>perception of the environment changed.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              The mind often arrives after.
            </p>

            <p className="text-[15px] leading-relaxed">
              Interpreting.
            </p>

            <p className="text-[15px] leading-relaxed">
              Justifying.
            </p>

            <p className="text-[15px] leading-relaxed">
              Building a story about something the body already decided.
            </p>

            <p className="text-[15px] leading-relaxed">
              This explains so many things most people experience without understanding:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>why a conversation can physically exhaust you,</li>
              <li>why a notification changes your internal state in seconds,</li>
              <li>why someone walks into a room and your body tenses before you know why,</li>
              <li>why some people regulate you and others activate you.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              The body detects signals constantly.
            </p>

            <p className="text-[15px] leading-relaxed">
              Tone of voice.
Speed.
Eye contact.
Pressure.
Space.
Rhythm.
Microexpressions.
Ambient tension.
            </p>

            <p className="text-[15px] leading-relaxed">
              Your nervous system is reading information all the time, long before a rational thought appears.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why trying to resolve everything through the mind has enormous limits.
            </p>

            <p className="text-[15px] leading-relaxed">
              Most people believe they think first and feel second.
            </p>

            <p className="text-[15px] leading-relaxed">
              Many times it happens the other way around.
            </p>

            <p className="text-[15px] leading-relaxed">
              First the body goes into defense.
Then the mind manufactures an explanation.
            </p>

            <p className="text-[15px] leading-relaxed">
              This is crystal clear in states of anxiety or chronic stress.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body is already activated:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>chest closed,</li>
              <li>jaw tight,</li>
              <li>breathing shallow,</li>
              <li>abdomen contracted,</li>
              <li>system on alert.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              And then the mind starts searching:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              &ldquo;What&apos;s wrong?&rdquo;
            </p>
            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              &ldquo;What did I do wrong?&rdquo;
            </p>
            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              &ldquo;Why do I feel this way?&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              The sensation appeared before the story.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why many seemingly &ldquo;irrational&rdquo; decisions aren&apos;t irrational to the body. They&apos;re survival responses.
            </p>

            <p className="text-[15px] leading-relaxed">
              The problem is that many people live in activation for so long that they end up making decisions from a dysregulated nervous system as if that were normal.
            </p>

            <p className="text-[15px] leading-relaxed">
              That completely changes perception:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>everything feels more urgent,</li>
              <li>everything weighs more,</li>
              <li>everything consumes more energy,</li>
              <li>everything gets interpreted through the lens of threat.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              And from there, even a small situation can feel enormous.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why regulating the body also changes mental clarity.
            </p>

            <p className="text-[15px] leading-relaxed">
              When the nervous system comes out of defense:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>breathing opens,</li>
              <li>perception shifts,</li>
              <li>the ability to think shifts,</li>
              <li>the internal sensation shifts.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Many times you don&apos;t need to think better.
            </p>

            <p className="text-[15px] leading-relaxed">
              You need a body that stops feeling like it&apos;s surviving.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because the body decides before the mind.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              And the mind almost always tries to explain afterward what the body already set in motion.
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
