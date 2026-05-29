import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "The day I stopped being Pinocchio",
  description: "To me the body was a wooden table.",
  alternates: getBlogAlternates("en", "the-day-i-stopped-being-pinocchio"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The day I stopped being Pinocchio"
        description="To me the body was a wooden table."
        slug="the-day-i-stopped-being-pinocchio"
        date="2026-08-21"
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
            The day I stopped being Pinocchio
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              To me the body was a wooden table.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s how it felt.
            </p>

            <p className="text-[15px] leading-relaxed">
              The hip was a fixed block. The back another. The sternum another. Like pieces of furniture assembled without movement.
            </p>

            <p className="text-[15px] leading-relaxed">
              Like Pinocchio.
            </p>

            <p className="text-[15px] leading-relaxed">
              The idea that there could be movement inside the hip didn&apos;t register. It was like a car part. A bolt that&apos;s out of place and you put it back and then it works.
            </p>

            <p className="text-[15px] leading-relaxed">
              That was the idea I had.
            </p>

            <p className="text-[15px] leading-relaxed">
              I had pain in my sternum. Constant. Like a knife lodged there for so long that my brain had normalized it.
            </p>

            <p className="text-[15px] leading-relaxed">
              It was no longer pain.
            </p>

            <p className="text-[15px] leading-relaxed">
              It was part of me.
            </p>

            <p className="text-[15px] leading-relaxed">
              And then, during a session with Josep Castellà, something happened that I didn&apos;t expect.
            </p>

            <p className="text-[15px] leading-relaxed">
              He was working and suddenly I noticed for the first time that he was touching a vertebra. I could feel that the vertebra was rotated. That the spinous process was sticking out more toward the left. There was a palpable bump.
            </p>

            <p className="text-[15px] leading-relaxed">
              Years there.
            </p>

            <p className="text-[15px] leading-relaxed">
              No one had found it.
            </p>

            <p className="text-[15px] leading-relaxed">
              And then Josep, like an aikido master, with total precision and a half-turn, put it back in place.
            </p>

            <p className="text-[15px] leading-relaxed">
              Without causing any harm.<br />
              Without cracking.<br />
              Without any kind of aggression.<br />
              Very subtly.
            </p>

            <p className="text-[15px] leading-relaxed">
              And the sternum pain disappeared.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not gradually.
            </p>

            <p className="text-[15px] leading-relaxed">
              Disappeared.
            </p>

            <p className="text-[15px] leading-relaxed">
              It never bothered me again.
            </p>

            <p className="text-[15px] leading-relaxed">
              That was a revelation to me.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not because the pain went away. That alone was already something.
            </p>

            <p className="text-[15px] leading-relaxed">
              But because I understood that the body is not what I thought it was.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s not a rigid machine.<br />
              It&apos;s not a collection of parts.<br />
              It&apos;s not Pinocchio.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s something alive. Dynamic. Constantly reorganizing itself. And it can change with a precision that has nothing to do with force.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s something magnificent that most people have never had the chance to feel.
            </p>

            <p className="text-[15px] leading-relaxed">
              I fell in love with that art.
            </p>

            <p className="text-[15px] leading-relaxed">
              And I couldn&apos;t understand that it existed. That the solution had been there all along. And that I had spent seven years going in circles with pain without anyone finding it.
            </p>

            <p className="text-[15px] leading-relaxed">
              That day I stopped being Pinocchio.
            </p>

            <p className="text-[15px] leading-relaxed">
              That shift in perception changed my entire life.
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

          <RelatedArticles slug="the-day-i-stopped-being-pinocchio" lang="en" />
        </article>
      </main>
    </div>
  );
}
