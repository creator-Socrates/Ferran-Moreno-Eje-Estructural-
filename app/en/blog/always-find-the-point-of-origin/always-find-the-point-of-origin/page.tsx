import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Always find the point of origin",
  description: "Most treatments work where it hurts. But where it hurts is almost never where the problem started.",
  alternates: {
    canonical: "/en/blog/always-find-the-point-of-origin",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Always find the point of origin"
        description="Most treatments work where it hurts. But where it hurts is almost never where the problem started."
        slug="always-find-the-point-of-origin"
        date="2026-05-18"
        tag="Fundamentals"
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
            Fundamentals
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Always find the point of origin
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              Most treatments work where it hurts.
            </p>

            <p className="text-[15px] leading-relaxed">
              And sometimes that&apos;s necessary. If there&apos;s inflammation, an acute injury, or severe pain, you need to lower the noise in the system first.
            </p>

            <p className="text-[15px] leading-relaxed">
              But where it hurts is almost never where the problem started.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s something the body shows constantly when you learn to read it as a system rather than a collection of isolated parts.
            </p>

            <p className="text-[15px] leading-relaxed">
              A lower back can be compensating for an ankle that lost mobility ten years ago.
A neck can be holding up a breathing pattern that&apos;s been altered for decades.
A shoulder can be reacting to a rigid diaphragm or a rib cage that stopped moving well.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body always redistributes load.
            </p>

            <p className="text-[15px] leading-relaxed">
              And it does so with extraordinary intelligence.
            </p>

            <p className="text-[15px] leading-relaxed">
              When a structure loses its ability to adapt, another part absorbs the work to keep the system running. At first that&apos;s useful. Thanks to that capacity you can keep walking after an injury, keep working under stress, keep functioning even when something inside is no longer well organized.
            </p>

            <p className="text-[15px] leading-relaxed">
              The problem appears when that compensation becomes permanent.
            </p>

            <p className="text-[15px] leading-relaxed">
              Then the body stops adapting and starts surviving around the pattern.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s where a lot of chronic pain comes from.
            </p>

            <p className="text-[15px] leading-relaxed">
              Most people arrive after years of treating the compensation:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>massaging the area that hurts,</li>
              <li>injecting the inflammation,</li>
              <li>strengthening muscles that are already overworking,</li>
              <li>trying to &ldquo;correct&rdquo; the last link in the chain.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              But the origin stays untouched.
            </p>

            <p className="text-[15px] leading-relaxed">
              And as long as the origin is still active, the body will keep returning to the same place.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why I always look for the point of origin.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not the most painful point.
Not the most obvious symptom.
The place where the system started to reorganize.
            </p>

            <p className="text-[15px] leading-relaxed">
              Sometimes it&apos;s structural:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>a pelvis,</li>
              <li>an ankle,</li>
              <li>a scar,</li>
              <li>a joint that lost mobility.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Sometimes it&apos;s visceral:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>a restricted liver,</li>
              <li>an intestine with adhesions,</li>
              <li>a blocked diaphragm,</li>
              <li>organs that stopped moving well.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Sometimes it&apos;s nervous:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>a system trapped in alert,</li>
              <li>survival breathing,</li>
              <li>years of physiological hypervigilance.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              And sometimes it&apos;s emotional.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not in the abstract or psychological sense most people imagine. Emotional means the body organized tension around an experience it never fully processed.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body doesn&apos;t separate layers the way we do.
            </p>

            <p className="text-[15px] leading-relaxed">
              Structure, breathing, emotion, posture, fascia, and nervous system work together all the time.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why when you find the primary restriction, something different happens.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body stops fighting itself.
            </p>

            <p className="text-[15px] leading-relaxed">
              Compensations start releasing on their own.
Breathing changes.
Posture changes.
The internal sensation changes.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not because someone &ldquo;corrected&rdquo; the body from outside.
            </p>

            <p className="text-[15px] leading-relaxed">
              But because the system no longer needs to protect itself in the same way.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s where real reorganization begins.
            </p>

            <p className="text-[15px] leading-relaxed">
              Always find the point of origin.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because treating the compensation can bring relief.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              But finding the origin is what changes the pattern.
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
