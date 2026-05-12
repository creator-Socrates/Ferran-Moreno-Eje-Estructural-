import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";

export const metadata: Metadata = {
  title: "Why I work by process, not single sessions | Ferran Moreno",
  description: "A single session can change how you feel today. A process changes how your body is organized. The difference matters.",
  alternates: {
    canonical: "/en/blog/why-i-work-by-process-not-single-sessions",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
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
            <Link href="/en#method" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Method</Link>
            <Link href="/en#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Cases</Link>
            <Link href="/en#who" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Who it&apos;s for</Link>
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
            Why I work by process, not single sessions
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              A single session can change how you feel today. A process changes how your body is organized. The difference matters.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              What a single session can do
            </h2>

            <p className="text-[15px] leading-relaxed">
              In one session I can regulate the nervous system, release a restriction, shift a pattern. You can walk out feeling different, lighter, more organized. And that has value.
            </p>

            <p className="text-[15px] leading-relaxed">
              But the body has layers. What shows up in the first session is the surface layer. The one the system reveals because it&apos;s the most accessible, the least threatening. Underneath there&apos;s more. And to get there, the body needs something a single session cannot provide: trust.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              What shows up in sessions 3, 4, 5
            </h2>

            <p className="text-[15px] leading-relaxed">
              The real reorganization happens when the system trusts enough to show what&apos;s underneath. That doesn&apos;t happen on the first visit. It happens on the third, the fourth, the fifth &mdash; when the body already knows you won&apos;t force, you&apos;ll listen, and the process has a rhythm.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s where the deep patterns appear. The old compensations. The restrictions that have been organizing everything else for years. Working with that requires time, sequence, and a therapeutic relationship built session by session.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              It&apos;s not about the money. It&apos;s about your body.
            </h2>

            <p className="text-[15px] leading-relaxed">
              I don&apos;t prefer processes because I need your money for six months. I prefer processes because your body needs time to reorganize properly. Forcing a deep change in one session is like trying to renovate a house in a day: you can paint the walls, but the structure stays the same.
            </p>

            <p className="text-[15px] leading-relaxed">
              A well-done process produces changes that are permanent. The body doesn&apos;t go back because the reorganization was real, not superficial. A good session relieves you. A good process transforms you.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The difference that matters
            </h2>

            <p className="text-[15px] leading-relaxed">
              A good session fades. A good process stays. Not because you&apos;ve created dependency, but because the body found a better organization and has no reason to go back to the old one.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              A good reorganization is permanent. A good session wears off.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you want to know what a process with me looks like and what to expect, write me.
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
