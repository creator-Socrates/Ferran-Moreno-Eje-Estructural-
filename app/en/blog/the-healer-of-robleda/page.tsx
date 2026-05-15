import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "The woman who read the back like braille",
  description: "Robleda. A small village.",
  alternates: {
    canonical: "/en/blog/the-healer-of-robleda",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The woman who read the back like braille"
        description="Robleda. A small village."
        slug="the-healer-of-robleda"
        date="2026-08-28"
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
            The woman who read the back like braille
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Robleda. A small village.
            </p>

            <p className="text-[15px] leading-relaxed">
              They took me to see a bone healer. She had learned her craft setting the bones of goats.
            </p>

            <p className="text-[15px] leading-relaxed">
              While I was waiting for my turn, I felt myself fading. I grabbed onto my friend Diego. Then, black out.
            </p>

            <p className="text-[15px] leading-relaxed">
              I was floating. Everything dark. Very pleasant. There was a kind of light. I was ascending.
            </p>

            <p className="text-[15px] leading-relaxed">
              &quot;It&apos;s not your time.&quot;
            </p>

            <p className="text-[15px] leading-relaxed">
              And right at the moment I felt that, I came back. The woman from Robleda was throwing a bucket of water in my face to wake me up.
            </p>

            <p className="text-[15px] leading-relaxed">
              She had me come inside. Gave me goat milk with lemon. And she tended to me.
            </p>

            <p className="text-[15px] leading-relaxed">
              When my turn came, she sat me in a chair. Her fingers began to move across my back. They were capable of reading through the different layers of the body.
            </p>

            <p className="text-[15px] leading-relaxed">
              She said: &quot;This boy has had a lot of pain, but he&apos;s fine now.&quot;
            </p>

            <p className="text-[15px] leading-relaxed">
              Then she had me lean forward and followed me vertebra by vertebra with expert hands. It was spectacular.
            </p>

            <p className="text-[15px] leading-relaxed">
              What struck me most: the elderly people in the village had better posture than anyone I had ever seen in the city.
            </p>

            <p className="text-[15px] leading-relaxed">
              Entire generations had passed through those hands.
            </p>

            <p className="text-[15px] leading-relaxed">
              Although when I walked out the first thing I did was throw up the goat milk with lemon.
            </p>

            <p className="text-[15px] leading-relaxed">
              There is a knowledge in the hands that no degree can give.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If something you&apos;ve read here resonates, write me.
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

          <RelatedArticles slug="the-healer-of-robleda" lang="en" />
        </article>
      </main>
    </div>
  );
}
