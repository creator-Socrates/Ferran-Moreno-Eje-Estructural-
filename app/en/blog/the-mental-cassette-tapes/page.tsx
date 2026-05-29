import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "The mental cassette tapes that recreate your suffering",
  description: "Repetitive narratives are like cassette tapes you play on loop. And the body stores memories that aren't even yours. When you release them, the limitation disappears.",
  alternates: getBlogAlternates("en", "the-mental-cassette-tapes"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The mental cassette tapes that recreate your suffering"
        description="Repetitive narratives are like cassette tapes you play on loop. And the body stores memories that aren't even yours. When you release them, the limitation disappears."
        slug="the-mental-cassette-tapes"
        date="2026-08-28"
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
            The mental cassette tapes that recreate your suffering
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              &ldquo;Those are like cassette tapes you keep replaying. Every time you tell the story, you press play and it recreates the suffering.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              I see it all the time in sessions. The person arrives and starts telling me the same story they told me last week. Same words. Same tone. Same emotional charge. They&apos;re not processing. They&apos;re replaying. They&apos;ve found a narrative and they put it on loop like someone slipping a cassette into the player and pressing play.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The story you tell yourself is the story you live
            </h2>

            <p className="text-[15px] leading-relaxed">
              Every time you repeat the narrative, your body recreates it. The same stress hormones, the same muscular tension, the same compression in the chest. Your nervous system doesn&apos;t distinguish between what is happening now and what you are remembering with intensity. To your system, it&apos;s the same thing. So every time you press play, you are living the suffering again. Literally.
            </p>

            <p className="text-[15px] leading-relaxed">
              The first step is realising you&apos;re on a loop. The second is stopping yourself from pressing play.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              False memories stored in the body
            </h2>

            <p className="text-[15px] leading-relaxed">
              But there is something even deeper. The body stores memories that are not yours. Borrowed memories from other people&apos;s experiences, from things you were told, from interpretations you made as a child and never revisited.
            </p>

            <p className="text-[15px] leading-relaxed">
              I remember my teacher Luis. Twenty years later, there was an exercise I couldn&apos;t do because my memory had logged that it had injured me. Until it came up in a treatment... &ldquo;Wait &mdash;that was a lie!&rdquo; Twenty years limited by a false memory. My body had stored it as absolute truth and I had organised my movement around that lie.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The release is instant
            </h2>

            <p className="text-[15px] leading-relaxed">
              What&apos;s fascinating is what happens when the body lets go of a false memory. The limitation disappears. Not gradually. All at once. The exercise you couldn&apos;t do, you do. The movement that hurt, stops hurting. Because there was never a real injury. There was a story the body believed.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Stop pressing play. Many of the stories that limit you are not yours. And many of the ones that are yours are no longer true. The body can release what the mind insists on repeating.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you&apos;ve been living with a limitation that no one has been able to resolve, the problem may not be structural. Write me.
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

          <RelatedArticles slug="the-mental-cassette-tapes" lang="en" />
        </article>
      </main>
    </div>
  );
}
