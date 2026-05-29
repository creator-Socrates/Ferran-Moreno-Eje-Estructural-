import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "The shadow makes you forget you were ever okay",
  description: "The shadow hijacks your memory. It makes you forget the times you were regulated. The real work is consolidating the new you until it becomes your default.",
  alternates: getBlogAlternates("en", "the-shadow-makes-you-forget"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The shadow makes you forget you were ever okay"
        description="The shadow hijacks your memory. It makes you forget the times you were regulated. The real work is consolidating the new you until it becomes your default."
        slug="the-shadow-makes-you-forget"
        date="2026-08-25"
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
            The shadow makes you forget you were ever okay
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              The shadow is not a philosophical concept. It&apos;s a hijacking. A hijacking of the person. When the shadow is active, it takes you whole: your perception, your memory, your ability to assess where you stand. And the most insidious thing it does is this: it makes you forget you were ever okay.
            </p>

            <p className="text-[15px] leading-relaxed">
              I&apos;ve seen it hundreds of times. A person has been feeling good for weeks. They&apos;ve had sessions where they left feeling light, clear, connected. Then suddenly the shadow hits and it&apos;s as if none of that ever existed. They can&apos;t access the memory. The shadow generates a selective amnesia toward your own strength.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The old self and the new self
            </h2>

            <p className="text-[15px] leading-relaxed">
              The shadow is built on rejection and lack of validation. It&apos;s a mechanism you learned when there was no other option. But now it no longer protects you &mdash;it limits you. And the real work is understanding that two versions coexist inside you: the old reactive self and the new centred self.
            </p>

            <p className="text-[15px] leading-relaxed">
              The old self is loud. It&apos;s the one that reacts first, the one that dramatises, the one that reads everything as a threat. The new self is quieter but more solid. The problem is that the old self has decades of advantage. Its neural pathways are the most worn-in. The work is not to eliminate it &mdash;you can&apos;t&mdash; but to consolidate the new one until it becomes your default.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Spirituality that doesn&apos;t produce wellbeing
            </h2>

            <p className="text-[15px] leading-relaxed">
              Some people meditate, go on retreats, read personal development books and still feel terrible. That is not spirituality. It is spiritual performance. Real spirituality produces tangible change: you feel better, you think more clearly, you react less. If your practice isn&apos;t producing wellbeing, take a close look at what you&apos;re actually practising.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Co-regulation as a shortcut
            </h2>

            <p className="text-[15px] leading-relaxed">
              When the shadow has you hijacked, willpower doesn&apos;t work. You cannot think your way out of an emotional hijacking. But something else does work: being near someone who is centred. Co-regulation does what willpower cannot. Your nervous system synchronises with the regulated person&apos;s and starts to come down. It&apos;s not magic. It&apos;s biology.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              The shadow will always try to make you forget. Your job is to build a new self so solid that when the hijacking comes, it lasts less, cuts less deep, and you can return sooner to who you really are.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you feel like every time you move forward something pulls you back to square one, write me. We work with that.
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

          <RelatedArticles slug="the-shadow-makes-you-forget" lang="en" />
        </article>
      </main>
    </div>
  );
}
