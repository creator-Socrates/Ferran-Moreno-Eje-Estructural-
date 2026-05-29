import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "When I understood that technique was limiting me",
  description: "I spent over twenty years training.",
  alternates: getBlogAlternates("en", "when-technique-becomes-the-limit"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="When I understood that technique was limiting me"
        description="I spent over twenty years training."
        slug="when-technique-becomes-the-limit"
        date="2026-09-11"
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
            When I understood that technique was limiting me
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              I spent over twenty years training.
            </p>

            <p className="text-[15px] leading-relaxed">
              Rolfing.<br />
              Visceral osteopathy.<br />
              Acupuncture.<br />
              Fascial work.<br />
              Nervous system.<br />
              Energy.<br />
              Movement.
            </p>

            <p className="text-[15px] leading-relaxed">
              And for a long time I thought that evolution meant accumulating more tools.
            </p>

            <p className="text-[15px] leading-relaxed">
              More techniques.<br />
              More precision.<br />
              More knowledge.
            </p>

            <p className="text-[15px] leading-relaxed">
              Until something unexpected happened.
            </p>

            <p className="text-[15px] leading-relaxed">
              I started to feel friction.
            </p>

            <p className="text-[15px] leading-relaxed">
              Every time I went into a session an internal sensation appeared:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              &quot;I have to do something.&quot;
            </p>

            <p className="text-[15px] leading-relaxed">
              I have to correct.<br />
              I have to release.<br />
              I have to produce a result.
            </p>

            <p className="text-[15px] leading-relaxed">
              And I realized something important: technique was beginning to interfere with my ability to listen.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because every technique creates a framework.
            </p>

            <p className="text-[15px] leading-relaxed">
              And every framework, if you&apos;re not careful, ends up becoming a perceptual cage.
            </p>

            <p className="text-[15px] leading-relaxed">
              You start to see the body through the technique instead of listening to what the system actually needs.
            </p>

            <p className="text-[15px] leading-relaxed">
              That was a huge shift for me.
            </p>

            <p className="text-[15px] leading-relaxed">
              I stopped trying to impose solutions.
            </p>

            <p className="text-[15px] leading-relaxed">
              I started to observe more.
            </p>

            <p className="text-[15px] leading-relaxed">
              To listen more.<br />
              To intervene less.<br />
              To trust more in the body&apos;s organizational intelligence.
            </p>

            <p className="text-[15px] leading-relaxed">
              And the less I tried to control the process, the better the results.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not because technique doesn&apos;t serve a purpose.
            </p>

            <p className="text-[15px] leading-relaxed">
              It serves enormously.
            </p>

            <p className="text-[15px] leading-relaxed">
              Training gave me structure, perception and extraordinary tools.
            </p>

            <p className="text-[15px] leading-relaxed">
              But there came a point where I understood something: technique cannot be placed above the body.
            </p>

            <p className="text-[15px] leading-relaxed">
              The real body is always more complex than any method.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why today many sessions start simply by observing:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>how someone breathes,</li>
              <li>how they walk in,</li>
              <li>how they move,</li>
              <li>where the body is holding,</li>
              <li>what it&apos;s trying to protect.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              And from there the solutions emerge.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not from a protocol. Not from a prior agenda.
            </p>

            <p className="text-[15px] leading-relaxed">
              From the real relationship with what the system is presenting.
            </p>

            <p className="text-[15px] leading-relaxed">
              After twenty years, perhaps the most important lesson was this: the body doesn&apos;t need someone to impose order on it.
            </p>

            <p className="text-[15px] leading-relaxed">
              It needs conditions to reorganize.
            </p>

            <p className="text-[15px] leading-relaxed">
              And often the best intervention is to stop getting in the way.
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

          <RelatedArticles slug="when-technique-becomes-the-limit" lang="en" />
        </article>
      </main>
    </div>
  );
}
