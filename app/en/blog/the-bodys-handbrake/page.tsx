import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "The body's handbrake: why forcing yourself is the worst medicine",
  description: "A retired truck driver with 4 million kilometres discovered that his body pulled the handbrake every time he forced it. His real medicine was walking.",
  alternates: {
    canonical: "/en/blog/the-bodys-handbrake",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The body's handbrake: why forcing yourself is the worst medicine"
        description="A retired truck driver with 4 million kilometres discovered that his body pulled the handbrake every time he forced it. His real medicine was walking."
        slug="the-bodys-handbrake"
        date="2026-09-01"
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
            Bodywork
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            The body&apos;s handbrake: why forcing yourself is the worst medicine
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Four million kilometres. That&apos;s what this man had done behind a steering wheel. Retired truck driver. Shifts of ten, twelve, fifteen hours sitting for decades. And now, retired, with a body that was calling in its debts in ways he didn&apos;t understand.
            </p>

            <p className="text-[15px] leading-relaxed">
              Someone told him to do squats. Exercise at home. Strengthening. He did it with the same discipline he had driven with his whole life. And his body responded by pulling the handbrake.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The fuse that trips
            </h2>

            <p className="text-[15px] leading-relaxed">
              When you do something the body doesn&apos;t like, the body defends itself. It&apos;s as if it pulls the handbrake, trips a fuse and shuts down. It&apos;s not laziness. It&apos;s not weakness. It&apos;s a protection mechanism. Your system is saying: &ldquo;Not this. Not like this.&rdquo; And it switches off.
            </p>

            <p className="text-[15px] leading-relaxed">
              The squats weren&apos;t bad in themselves. But for a body that has spent decades compressed in a seat, forcing a range of motion without preparing the ground is exactly the opposite of what it needs.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Tune, don&apos;t force
            </h2>

            <p className="text-[15px] leading-relaxed">
              During the session, while working with his tissues, I explained what was going on: &ldquo;It&apos;s not that the body is just relaxing &mdash;it&apos;s more like we&apos;re tuning a guitar.&rdquo; I&apos;m not adding anything. I&apos;m not taking anything away. I&apos;m returning tension to where it belongs and releasing it where it doesn&apos;t. Tuning.
            </p>

            <p className="text-[15px] leading-relaxed">
              And then came a moment of silence. An internal silence. I asked him if he could feel it. &ldquo;That silence inside the body is like being in neutral. An absence of the things that bother you.&rdquo; It&apos;s not euphoria. It&apos;s not deep relaxation. It&apos;s neutrality. It&apos;s your body without noise. Many people haven&apos;t felt that in years. Some, never.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The real medicine
            </h2>

            <p className="text-[15px] leading-relaxed">
              This man had normalised brutal working days for decades. His body had adapted to the unacceptable. And now that he had time, he was still operating with the same logic: more effort, more intensity, more force. But what he needed was exactly the opposite.
            </p>

            <p className="text-[15px] leading-relaxed">
              &ldquo;Your medicine is walking.&rdquo; Walking consciously. Not as cardiovascular exercise. As integration. Every step is an opportunity for the body to reorganise, for the feet to talk to the pelvis, for the breath to synchronise with movement. Walking is the most underrated exercise there is.
            </p>

            <p className="text-[15px] leading-relaxed">
              When he got up from the table he said he felt as if ten kilos had been taken off his shoulders. He hadn&apos;t lost weight. He had lost tension accumulated over decades.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Your body doesn&apos;t need you to force it. It needs you to listen. And sometimes, the best medicine is the simplest one: stop pushing and start walking.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you&apos;ve been forcing your body without results, or if you feel that the more you do the worse you get, write me.
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

          <RelatedArticles slug="the-bodys-handbrake" lang="en" />
        </article>
      </main>
    </div>
  );
}
