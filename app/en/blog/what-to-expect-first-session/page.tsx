import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "What to expect in your first bodywork session",
  description: "Your first session doesn't follow a protocol. Every body asks for something different. Here's what happens when you come for the first time.",
  alternates: {
    canonical: "/en/blog/what-to-expect-first-session",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="What to expect in your first bodywork session"
        description="Your first session doesn't follow a protocol. Every body asks for something different. Here's what happens when you come for the first time."
        slug="what-to-expect-first-session"
        date="2026-05-15"
        tag="First session"
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
            <Link href="/en/#method" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Method</Link>
            <Link href="/en/#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Cases</Link>
            <Link href="/en/#who" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Who it&apos;s for</Link>
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
            First session
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            What to expect in your first bodywork session
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              You don&apos;t know what&apos;s going to happen. That&apos;s normal. Most people who come for the first time have no frame of reference for this. It&apos;s not a massage. It&apos;s not physiotherapy. It&apos;s not osteopathy. It&apos;s something else. And what throws people off most is that there&apos;s no fixed script.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              First, I read your body
            </h2>

            <p className="text-[15px] leading-relaxed">
              Before I put my hands on you, I observe. I look at how your structure is organized: what compensates for what, where there&apos;s restriction, where there&apos;s excess tone, where the body is holding something it no longer needs. That gives me a map. Not a diagnosis &mdash; an entry point.
            </p>

            <p className="text-[15px] leading-relaxed">
              The question is never &ldquo;where does it hurt&rdquo; as the final word. The question is: how is this body organized? What is it asking for?
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              There is no protocol
            </h2>

            <p className="text-[15px] leading-relaxed">
              I don&apos;t follow a recipe. Each session is unique because each body is unique and each moment is different. I might start with the feet, the cranium, the viscera, or the nervous system. It depends on what I find. It depends on what your system allows that day.
            </p>

            <p className="text-[15px] leading-relaxed">
              This disorients people who are used to protocols. But it&apos;s precisely what makes it work. I&apos;m not applying a technique on you. I&apos;m working with what your body presents.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              What it feels like after
            </h2>

            <p className="text-[15px] leading-relaxed">
              Most people get off the table and feel something different. Taller. Lighter. More present. Some say it&apos;s as if a weight was lifted. Others notice they&apos;re breathing in a way they hadn&apos;t in years.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s not always dramatic. Sometimes the change is subtle and unfolds over the following days. But almost always, there&apos;s a moment during the session when the body shifts state. And you feel it.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The real question
            </h2>

            <p className="text-[15px] leading-relaxed">
              Most people come in asking &ldquo;what are you going to do to me?&rdquo; The real question is different: what is my body asking for? That&apos;s what guides the session. And the answer isn&apos;t something I have before we start. Your body has it.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Most people know within minutes that this is different. Not because it&apos;s strange. Because it&apos;s precise.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you want to know whether this is for you, write me. No commitment, no pressure.
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
        </article>
      </main>
    </div>
  );
}
