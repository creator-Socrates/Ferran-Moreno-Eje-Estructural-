import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "The woman who read spines like braille",
  description: "In Robleda I met a healer who read the spine with her fingers. That day I learned something no school teaches.",
  alternates: {
    canonical: "/en/blog/the-woman-who-read-spines-like-braille",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The woman who read spines like braille"
        description="In Robleda I met a healer who read the spine with her fingers. That day I learned something no school teaches."
        slug="the-woman-who-read-spines-like-braille"
        date="2026-07-24"
        tag="My story"
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
            My story
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            The woman who read spines like braille
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Robleda. A village in rural Spain where time works differently. I arrived early, without having eaten breakfast. The bar was closed. There was a queue to see the village healer. And there I was, waiting, stomach empty, body spent.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Falling into Diego&apos;s arms
            </h2>

            <p className="text-[15px] leading-relaxed">
              Then everything went dark. I fainted and fell into Diego&apos;s arms. And then something I didn&apos;t expect happened. I felt my time had come. I saw a deep darkness and a tunnel and I began to rise. It felt pleasant, like lying on a beach with the sun on your skin. There was no fear. Just an immense peace and a clear direction: upward.
            </p>

            <p className="text-[15px] leading-relaxed">
              But something brought me back. Presences &mdash; I don&apos;t know what else to call them &mdash; told me it wasn&apos;t my time. That I had to return. I opened my eyes. They gave me goat&apos;s milk with lemon to revive me. And I kept waiting for my turn.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The fingers that read
            </h2>

            <p className="text-[15px] leading-relaxed">
              When I finally went in, the healer began to touch the spine, tracing it with her fingers, as if she could read it the way a blind person reads braille. She didn&apos;t use diagnoses or technical terms. She didn&apos;t need MRIs or X-rays. Her fingers knew. She had learned by setting the bones of goats. From there she had moved on to people. And what she did was real.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              What I saw in the elders of Robleda
            </h2>

            <p className="text-[15px] leading-relaxed">
              There&apos;s a detail that stayed with me. The elderly people of Robleda walked noticeably more upright than in other villages. It wasn&apos;t coincidence. Whole generations had passed through the hands of that woman and those who came before her. The body of the entire village told a different story.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              That day I learned something no school teaches: that the deepest knowledge of the human body sometimes lives in the fingers of someone who has never read an anatomy textbook. And that the wisdom of touch needs no diploma.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you&apos;re looking for bodywork that listens before it acts, write me.
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

          <RelatedArticles slug="the-woman-who-read-spines-like-braille" lang="en" />
        </article>
      </main>
    </div>
  );
}
