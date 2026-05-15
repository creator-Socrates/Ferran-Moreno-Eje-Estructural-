import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "The body remembers what the mind forgot",
  description: "The body holds experiences long after the mind has stopped thinking about them. A fall, a surgery, a relationship where the system lived in defense for too long.",
  alternates: {
    canonical: "/en/blog/the-body-remembers-what-the-mind-forgot",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The body remembers what the mind forgot"
        description="The body holds experiences long after the mind has stopped thinking about them. A fall, a surgery, a relationship where the system lived in defense for too long."
        slug="the-body-remembers-what-the-mind-forgot"
        date="2026-06-26"
        tag="Nervous system"
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
            Nervous system
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            The body remembers what the mind forgot
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              The body holds experiences long after the mind has stopped thinking about them.
            </p>

            <p className="text-[15px] leading-relaxed">
              A fall.
A surgery.
An accident.
A period of intense stress.
A relationship where the system lived in defense for too long.
            </p>

            <p className="text-[15px] leading-relaxed">
              The conscious story can fade.
The body often keeps organizing around it years later.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s something I see constantly.
            </p>

            <p className="text-[15px] leading-relaxed">
              People who come in for lower back pain and discover the body is still protecting an ankle injured fifteen years ago. Breathing altered since an old bout of bronchitis. A rigid abdomen around a scar that supposedly &ldquo;doesn&apos;t bother them anymore.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              The body doesn&apos;t think in terms of past and present the way the mind does.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body thinks in terms of safety.
            </p>

            <p className="text-[15px] leading-relaxed">
              And if an experience left the system on alert or triggered a deep reorganization, the body can maintain that pattern for a very long time.
            </p>

            <p className="text-[15px] leading-relaxed">
              Often without the person making the connection.
            </p>

            <p className="text-[15px] leading-relaxed">
              Something important shows up here:
the body doesn&apos;t only store narrative memories.
            </p>

            <p className="text-[15px] leading-relaxed">
              It stores responses.
            </p>

            <p className="text-[15px] leading-relaxed">
              Breathing patterns.
Muscle tension.
Postures.
Defenses.
Protective reflexes.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why someone can react physically before they even understand what they&apos;re feeling.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body already recognized something.
            </p>

            <p className="text-[15px] leading-relaxed">
              Sometimes a tone of voice is enough.
A smell.
A space.
A similar situation.
            </p>

            <p className="text-[15px] leading-relaxed">
              And the system automatically activates the old pattern.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why trying to resolve everything through mental analysis has limits.
            </p>

            <p className="text-[15px] leading-relaxed">
              You can understand an experience perfectly and still feel the body trapped in it.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because intellectual understanding doesn&apos;t automatically reorganize physiology.
            </p>

            <p className="text-[15px] leading-relaxed">
              What&apos;s fascinating is that when the body finally feels safe enough to release an old pattern, the change can be enormous.
            </p>

            <p className="text-[15px] leading-relaxed">
              Breathing changes.
Posture changes.
The internal sensation changes.
            </p>

            <p className="text-[15px] leading-relaxed">
              And many people say something similar:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              &ldquo;I had no idea how much I was holding.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              That happens because the body had been doing invisible work for years.
            </p>

            <p className="text-[15px] leading-relaxed">
              Protecting you.
            </p>

            <p className="text-[15px] leading-relaxed">
              Bracing.
            </p>

            <p className="text-[15px] leading-relaxed">
              Anticipating.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body remembers far more than the mind imagines.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              And many times the real change begins when it no longer needs to.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If something you read here resonates, write me.
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
