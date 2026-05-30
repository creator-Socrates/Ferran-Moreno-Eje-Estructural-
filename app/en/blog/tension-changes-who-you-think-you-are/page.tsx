import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Sustained tension changes who you think you are",
  description: "When a body has been in defense for too long, the tension stops feeling like a state. It starts feeling like identity.",
  alternates: getBlogAlternates("en", "tension-changes-who-you-think-you-are"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Sustained tension changes who you think you are"
        description="When a body has been in defense for too long, the tension stops feeling like a state. It starts feeling like identity."
        slug="tension-changes-who-you-think-you-are"
        date="2026-10-27"
        tag="Manifesto"
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
            Manifesto
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Sustained tension changes who you think you are
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              When a body has been in defense for too long, the tension stops feeling like a state.
            </p>

            <p className="text-[15px] leading-relaxed">
              It starts feeling like identity.
            </p>

            <p className="text-[15px] leading-relaxed">
              &ldquo;I&apos;m anxious.&rdquo;<br />
              &ldquo;I&apos;m tense.&rdquo;<br />
              &ldquo;I&apos;m impatient.&rdquo;<br />
              &ldquo;I don&apos;t know how to relax.&rdquo;<br />
              &ldquo;That&apos;s just who I am.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              But most of the time, that is not who you are.
            </p>

            <p className="text-[15px] leading-relaxed">
              It is your nervous system running a pattern that has been active for so long you no longer perceive it as a pattern.
            </p>

            <p className="text-[15px] leading-relaxed">
              You perceive it as you.
            </p>

            <p className="text-[15px] leading-relaxed">
              That is one of the deepest traps of chronic tension:
            </p>

            <p className="text-[15px] leading-relaxed">
              It does not just change how you feel.
            </p>

            <p className="text-[15px] leading-relaxed">
              It changes how you define yourself.
            </p>

            <p className="text-[15px] leading-relaxed">
              And from that definition you make decisions, build relationships and organize your entire life.
            </p>

            <p className="text-[15px] leading-relaxed">
              When the system finally regulates, many people discover something disconcerting:
            </p>

            <p className="text-[15px] leading-relaxed">
              The person they believed themselves to be was not them.
            </p>

            <p className="text-[15px] leading-relaxed">
              It was the tension.
            </p>

            <p className="text-[15px] leading-relaxed">
              And beneath that tension there was someone who had been waiting for a long time.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If something you&apos;ve read resonates, write me.
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
          <RelatedArticles slug="tension-changes-who-you-think-you-are" lang="en" />
        </article>
      </main>
    </div>
  );
}
