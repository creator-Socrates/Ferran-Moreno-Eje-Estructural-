import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Contraction or expansion: the only question you need",
  description: "Your body knows before your mind does. Contraction and expansion are the most reliable compass you have for making decisions.",
  alternates: {
    canonical: "/en/blog/contraction-or-expansion",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Contraction or expansion: the only question you need"
        description="Your body knows before your mind does. Contraction and expansion are the most reliable compass you have for making decisions."
        slug="contraction-or-expansion"
        date="2026-09-08"
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
            Contraction or expansion: the only question you need
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Let&apos;s use your body to find out whether something is true for you or not. Based on whether you feel contraction or expansion.
            </p>

            <p className="text-[15px] leading-relaxed">
              That simple. That binary. And that reliable.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The cleanest signal you have
            </h2>

            <p className="text-[15px] leading-relaxed">
              The body contracts when something is not aligned with you. It closes, it tenses, it shrinks. It doesn&apos;t need to explain why. It doesn&apos;t need arguments. It simply reacts.
            </p>

            <p className="text-[15px] leading-relaxed">
              And it expands when something is aligned. There&apos;s openness, there&apos;s space, there&apos;s a sense that air enters more easily. It doesn&apos;t need justification either. It&apos;s a binary signal: yes or no. Contraction or expansion.
            </p>

            <p className="text-[15px] leading-relaxed">
              No interpretation needed. No analysis. Just feeling.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              When fear shows up
            </h2>

            <p className="text-[15px] leading-relaxed">
              If fear shows up, you can&apos;t make the decision. Fear contaminates the signal. When you&apos;re in fear, everything contracts &mdash; even what&apos;s good for you. The nervous system goes into protection mode and you can no longer tell the difference between a real contraction and a defensive one.
            </p>

            <p className="text-[15px] leading-relaxed">
              When doubt appears, it&apos;s telling you that you&apos;re running the old pattern. Doubt is not a sign that you need more information. It&apos;s a sign that your mind is trying to take back control.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The mind is the interference
            </h2>

            <p className="text-[15px] leading-relaxed">
              The mind is the one pushing. Always. It wants to understand, justify, compare, project. And while it does all of that, it covers the only signal that matters: the body&apos;s.
            </p>

            <p className="text-[15px] leading-relaxed">
              I&apos;m not saying the mind is useless. It&apos;s good for executing, planning, organizing. But not for deciding. Important decisions are not thought. They&apos;re felt.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The practice
            </h2>

            <p className="text-[15px] leading-relaxed">
              Before any decision, stop. Breathe. Bring your attention to the body. And ask yourself: am I contracting or expanding?
            </p>

            <p className="text-[15px] leading-relaxed">
              Don&apos;t ask your head. Don&apos;t make a pros and cons list. Don&apos;t ask for opinions. Just observe what your body does when you think about that option.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              That&apos;s the only compass you need. And it has been working long before you learned how to think.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you want to learn how to hear that signal clearly, I can help you clear what&apos;s covering it.
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

          <RelatedArticles slug="contraction-or-expansion" lang="en" />
        </article>
      </main>
    </div>
  );
}
