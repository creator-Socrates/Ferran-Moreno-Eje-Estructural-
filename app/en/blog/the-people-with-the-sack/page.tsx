import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "The people with the sack: why unhappy groups drag you down",
  description: "People who carry their sack without knowing it operate like zombies. Collective unhappiness is not personal. It is unconscious.",
  alternates: {
    canonical: "/en/blog/the-people-with-the-sack",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The people with the sack: why unhappy groups drag you down"
        description="People who carry their sack without knowing it operate like zombies. Collective unhappiness is not personal. It is unconscious."
        slug="the-people-with-the-sack"
        date="2026-09-11"
        tag="Process"
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
            Process
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            The people with the sack: why unhappy groups drag you down
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              This is completely different from every other time you&apos;ve come here. Because every time you came before, you came carrying a huge sack.
            </p>

            <p className="text-[15px] leading-relaxed">
              I said that to a client at the start of a session. And that image &mdash; the sack &mdash; is one of the most useful metaphors I know for understanding the emotional inertia of groups.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The zombie metaphor
            </h2>

            <p className="text-[15px] leading-relaxed">
              All those zombie movies we watch &mdash; what are they really about? People with the sack are zombies. They&apos;re the walking dead. They walk, they talk, they function, but they&apos;re not present. They&apos;re carrying something they don&apos;t even know they&apos;re carrying.
            </p>

            <p className="text-[15px] leading-relaxed">
              And the key part: it&apos;s not personal. It&apos;s not that someone looks at you and thinks &ldquo;I&apos;m doing badly and she&apos;s doing well, let me bring her down.&rdquo; It&apos;s unconscious. It&apos;s more like: &ldquo;I&apos;m not happy and she is. Why is she happy if I&apos;m not?&rdquo; That&apos;s not thought. It&apos;s acted out. Without realizing.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The invisible pull
            </h2>

            <p className="text-[15px] leading-relaxed">
              When you&apos;re in a group where most people carry their sack, the group&apos;s inertia pulls you downward. Not with malice. With gravity. It&apos;s the collective weight of everything unprocessed, unexamined, unresolved.
            </p>

            <p className="text-[15px] leading-relaxed">
              And if you start to feel better, to feel lighter, to smile for no reason, that creates friction. Because your lightness reminds them of their weight. And that&apos;s uncomfortable for everyone.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The library of remedies
            </h2>

            <p className="text-[15px] leading-relaxed">
              The answer is not to isolate yourself. It&apos;s to build your own library of remedies. Things that bring you back to yourself when the environment displaces you.
            </p>

            <p className="text-[15px] leading-relaxed">
              Singing. Humming. The vibration cleans. Breathing with intention. Nature. Friends who don&apos;t carry the sack. Movement. Silence. Each person needs to find their own. But you need to have them identified and accessible.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Happiness is not the prize
            </h2>

            <p className="text-[15px] leading-relaxed font-medium">
              If you&apos;re not happy, you can&apos;t be spiritual. Happiness is not the reward at the end of the road. It&apos;s the prerequisite. It&apos;s the foundation from which everything else can be built.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s not about being happy all the time. It&apos;s about your baseline state being light, not heavy. That when you drift, you know how to come back. And that the sack you carry is yours, chosen, and not someone else&apos;s.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you feel like you&apos;re carrying something that isn&apos;t yours, we can work together to put that sack down.
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

          <RelatedArticles slug="the-people-with-the-sack" lang="en" />
        </article>
      </main>
    </div>
  );
}
