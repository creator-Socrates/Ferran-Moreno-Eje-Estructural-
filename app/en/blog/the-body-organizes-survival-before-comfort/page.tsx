import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "The body organizes survival before comfort",
  description: "Your body doesn't seek comfort. It seeks survival. That difference explains more than you think.",
  alternates: {
    canonical: "/en/blog/the-body-organizes-survival-before-comfort",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The body organizes survival before comfort"
        description="Your body doesn't seek comfort. It seeks survival. That difference explains more than you think."
        slug="the-body-organizes-survival-before-comfort"
        date="2026-05-29"
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
            The body organizes survival before comfort
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              Your body doesn&apos;t seek comfort.
            </p>

            <p className="text-[15px] leading-relaxed">
              It seeks survival.
            </p>

            <p className="text-[15px] leading-relaxed">
              That difference explains so much of what people experience without understanding.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body isn&apos;t designed to make you feel good all the time. It&apos;s designed to keep you alive. And when it perceives threat &mdash; physical, emotional, or physiological &mdash; it reorganizes the entire system around that priority.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why patterns appear that seem irrational:
            </p>

            <p className="text-[15px] leading-relaxed">
              constant tension,
clenched jaw,
shallow breathing,
hypervigilance,
difficulty resting,
need for control,
exhaustion that never fully goes away.
            </p>

            <p className="text-[15px] leading-relaxed">
              These aren&apos;t errors.
They&apos;re strategies.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body adapts posture, breathing, muscle tone, and nervous state to maximize survival, not wellbeing.
            </p>

            <p className="text-[15px] leading-relaxed">
              And it does it so well that you often end up believing that way of functioning is you.
            </p>

            <p className="text-[15px] leading-relaxed">
              But a survival strategy sustained too long becomes a physiological prison.
            </p>

            <p className="text-[15px] leading-relaxed">
              A pelvis stiffens to protect an old injury.
The thorax closes after years of stress.
Breathing becomes shallow because the body learned that letting go wasn&apos;t safe.
The jaw clenches because the system needs to stay ready.
            </p>

            <p className="text-[15px] leading-relaxed">
              All of that makes sense to the body.
            </p>

            <p className="text-[15px] leading-relaxed">
              The problem is that many of those responses stay active long after the danger has passed.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s when the system starts paying a huge price:
            </p>

            <p className="text-[15px] leading-relaxed">
              less available energy,
poorer recovery,
more inflammation,
less adaptability,
a constant sense of internal effort.
            </p>

            <p className="text-[15px] leading-relaxed">
              And because the body is extraordinarily adaptable, you keep functioning. You work. You take care of others. You produce. You solve.
            </p>

            <p className="text-[15px] leading-relaxed">
              But with less and less margin.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why deep work isn&apos;t about &ldquo;forcing the body to change.&rdquo; It&apos;s about creating the conditions for it to stop organizing around constant survival.
            </p>

            <p className="text-[15px] leading-relaxed">
              When the system starts to feel real safety, something shifts:
            </p>

            <p className="text-[15px] leading-relaxed">
              breathing drops,
posture reorganizes,
tension decreases,
the body stops bracing for an invisible threat.
            </p>

            <p className="text-[15px] leading-relaxed">
              And many people discover something surprising:
how much energy they were spending just trying to hold themselves together.
            </p>

            <p className="text-[15px] leading-relaxed">
              Your body isn&apos;t trying to sabotage you.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s trying to protect you.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              The problem is that it&apos;s been doing it for too long.
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
