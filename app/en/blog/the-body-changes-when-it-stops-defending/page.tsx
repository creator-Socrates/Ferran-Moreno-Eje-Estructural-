import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "The body changes when it stops defending",
  description: "Many symptoms aren't failures. They're defenses. When the body stops feeling threatened, it changes far faster than the mind expects.",
  alternates: getBlogAlternates("en", "the-body-changes-when-it-stops-defending"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The body changes when it stops defending"
        description="Many symptoms aren't failures. They're defenses. When the body stops feeling threatened, it changes far faster than the mind expects."
        slug="the-body-changes-when-it-stops-defending"
        date="2026-08-07"
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
            The body changes when it stops defending
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Many symptoms aren&apos;t failures.
            </p>

            <p className="text-[15px] leading-relaxed">
              They&apos;re defenses.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body doesn&apos;t generate tension, rigidity, or hypervigilance for no reason. It does it because at some point the system felt it needed to protect itself.
            </p>

            <p className="text-[15px] leading-relaxed">
              And when that protection stays active too long, what started as adaptation ends up becoming suffering.
            </p>

            <p className="text-[15px] leading-relaxed">
              The stiff neck.<br />
              The clenched jaw.<br />
              The shallow breathing.<br />
              The contracted abdomen.<br />
              The constant fatigue.<br />
              The background anxiety.
            </p>

            <p className="text-[15px] leading-relaxed">
              Many times these aren&apos;t the problem.
            </p>

            <p className="text-[15px] leading-relaxed">
              They&apos;re the strategy.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body organizes tension to survive.
            </p>

            <p className="text-[15px] leading-relaxed">
              The problem appears when the system no longer knows how to exit that state.
            </p>

            <p className="text-[15px] leading-relaxed">
              Then the protection becomes permanent.
            </p>

            <p className="text-[15px] leading-relaxed">
              And the body starts living as if the threat were still present even when it no longer exists.
            </p>

            <p className="text-[15px] leading-relaxed">
              That consumes an enormous amount of energy.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because defending yourself constantly is exhausting.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why some people rest and don&apos;t recover.<br />
              Go on vacation and don&apos;t come down.<br />
              Sleep and still wake up tired.
            </p>

            <p className="text-[15px] leading-relaxed">
              The system never truly stops watching.
            </p>

            <p className="text-[15px] leading-relaxed">
              What&apos;s striking is how fast the body can change when it stops feeling threatened.
            </p>

            <p className="text-[15px] leading-relaxed">
              I&apos;ve seen breathing open up in minutes. Posture reorganize without forcing. Pain decrease when the system stops holding constant defense.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not because someone &ldquo;fixed&rdquo; the body.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because the body no longer needed to protect itself in the same way.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s when something important happens: the system stops spending resources on surviving.
            </p>

            <p className="text-[15px] leading-relaxed">
              And that energy becomes available again for:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>recovering,</li>
              <li>regenerating,</li>
              <li>moving,</li>
              <li>thinking,</li>
              <li>creating,</li>
              <li>resting.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Many times deep change doesn&apos;t come from doing more.
            </p>

            <p className="text-[15px] leading-relaxed">
              It comes when the body finally receives a signal it had been waiting years for:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              &ldquo;You don&apos;t need to defend yourself anymore.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              And when that signal truly lands, the body changes far faster than the mind ever imagined.
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

          <RelatedArticles slug="the-body-changes-when-it-stops-defending" lang="en" />
        </article>
      </main>
    </div>
  );
}
