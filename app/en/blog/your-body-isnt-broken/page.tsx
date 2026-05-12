import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Your body isn't broken. It's disorganized",
  description: "The difference between broken and disorganized is enormous. A disorganized body doesn't need repair — it needs reorganization.",
  alternates: {
    canonical: "/en/blog/your-body-isnt-broken",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Your body isn't broken. It's disorganized"
        description="The difference between broken and disorganized is enormous. A disorganized body doesn't need repair — it needs reorganization."
        slug="your-body-isnt-broken"
        date="2026-06-12"
        tag="Reorganization"
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
            Reorganization
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Your body isn&apos;t broken. It&apos;s disorganized
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              People arrive after five physiotherapists, three orthopedic surgeons, two osteopaths, and an MRI that shows nothing. They&apos;ve been in pain for years. They&apos;ve tried everything. And the conclusion they&apos;ve reached is always the same: something in my body is broken.
            </p>

            <p className="text-[15px] leading-relaxed">
              Almost never is.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Broken and disorganized are not the same thing
            </h2>

            <p className="text-[15px] leading-relaxed">
              The difference between broken and disorganized is enormous. Broken needs repair: surgery, medication, external intervention. Disorganized needs reorganization: someone who can read the system, find the primary restriction, and give the body the information it needs to find a better order.
            </p>

            <p className="text-[15px] leading-relaxed">
              Most people who arrive after years of failed treatments aren&apos;t broken. They&apos;re disorganized. Their body has been compensating for so long that no one knows what&apos;s the cause and what&apos;s the effect anymore. The back pain might come from an ankle injured fifteen years ago. The stiff neck might be a response to a diaphragm that doesn&apos;t move. The sciatica might start in a visceral organ.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The body doesn&apos;t need you to fix it
            </h2>

            <p className="text-[15px] leading-relaxed">
              Reorganization isn&apos;t adding something new. It&apos;s removing the interference so the body can do what it already knows how to do. The body has an organizational intelligence that precedes any technique, any method, any therapist. It doesn&apos;t need you to direct it. It needs you to stop getting in the way.
            </p>

            <p className="text-[15px] leading-relaxed">
              When you find the primary restriction — the point in the system that&apos;s holding the entire pattern — and release it, the body reorganizes on its own. You don&apos;t tell it how. It already knows. It just needed someone to remove the obstacle.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Why conventional treatments fail
            </h2>

            <p className="text-[15px] leading-relaxed">
              Because they treat the symptom as if it were the problem. It hurts here, treat here. But the body doesn&apos;t work that way. The body is a system. Everything is connected. If you only treat where it hurts, you&apos;re treating the compensation, not the cause. And the compensation will return. It always does.
            </p>

            <p className="text-[15px] leading-relaxed">
              Seeing the body as a system changes everything. You stop looking for what&apos;s broken. You look for what&apos;s disorganized. You stop trying to repair. You reorganize. And when you do it well, the body responds in ways that surprise even the person living in it.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Your body doesn&apos;t need your help. It needs you to stop getting in the way.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you&apos;ve been searching for answers for years and nothing has worked, maybe the problem isn&apos;t what you&apos;ve been told. Write me and let&apos;s look at it.
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
