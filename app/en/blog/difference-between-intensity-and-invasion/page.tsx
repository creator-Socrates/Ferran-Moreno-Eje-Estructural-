import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "The difference between intensity and invasion in bodywork",
  description: "Intense means the body is receiving something deep. Invasive means you're forcing past its defenses. The body knows the difference.",
  alternates: {
    canonical: "/en/blog/difference-between-intensity-and-invasion",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The difference between intensity and invasion in bodywork"
        description="Intense means the body is receiving something deep. Invasive means you're forcing past its defenses. The body knows the difference."
        slug="difference-between-intensity-and-invasion"
        date="2026-06-26"
        tag="Bodywork"
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
            <Link href="/en#method" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Method</Link>
            <Link href="/en#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Cases</Link>
            <Link href="/en#who" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Who it&apos;s for</Link>
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
            Bodywork
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            The difference between intensity and invasion
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              There&apos;s a line that separates intense bodywork from invasive bodywork. It&apos;s not a line of pressure. It&apos;s not measured in pounds. You feel it. And the body knows it perfectly.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              What intense means
            </h2>

            <p className="text-[15px] leading-relaxed">
              Intense means the body is receiving something deep and meaningful. Something that reaches a layer that hasn&apos;t been touched in a long time. The sensation can be strong. There may be moments of discomfort. But there&apos;s a quality of openness: the tissue says yes. The nervous system doesn&apos;t activate in defense. There&apos;s surrender, not resistance.
            </p>

            <p className="text-[15px] leading-relaxed">
              Well-executed intense work generates real change. The body reorganizes. The breath deepens. Something releases that had been held for years. The person leaves different from how they arrived — not injured, but freed.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              What invasive means
            </h2>

            <p className="text-[15px] leading-relaxed">
              Invasive means you&apos;re forcing past the body&apos;s defenses. You&apos;re entering without permission. And the body responds the way it responds to any invasion: it contracts. It defends. It closes. You get exactly the opposite of what you wanted.
            </p>

            <p className="text-[15px] leading-relaxed">
              A therapist who forces believes they&apos;re doing deep work. They&apos;re not. They&apos;re generating a protective response. The tissue hardens. The nervous system goes on alert. And the next day the pain is worse than before. That&apos;s not deep work. That&apos;s technical violence.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Listen before you act
            </h2>

            <p className="text-[15px] leading-relaxed">
              Learning to feel that difference took years. It&apos;s not something taught in a weekend course. It&apos;s a skill developed through thousands of hours of contact, of listening, of observing what happens when you go too far and what happens when you&apos;re right at the edge.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s not about pressure. It&apos;s about listening. A whisper in the right place does more than a shout in the wrong one. A hand that listens creates more change than an elbow that crushes. Precision always beats force.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why my work can feel intense without ever feeling violent. Because the intention isn&apos;t to dominate the tissue. It&apos;s to dialogue with it. And when there&apos;s dialogue, the body opens doors that force could never unlock.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Jan Sultan, veteran Rolfer and teacher: &quot;Precision always beats force.&quot;
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you&apos;ve had bad experiences with aggressive bodywork, write me. There&apos;s another way to work.
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
