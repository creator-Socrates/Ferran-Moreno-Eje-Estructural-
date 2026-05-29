import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "Energy work isn't what you think — Ferran Moreno",
  description: "Serious energy work has nothing to do with incense or crystals. It's reading information the body transmits and responding to it with precision.",
  alternates: getBlogAlternates("en", "energy-work-isnt-what-you-think"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Energy work isn't what you think — Ferran Moreno"
        description="Serious energy work has nothing to do with incense or crystals. It's reading information the body transmits and responding to it with precision."
        slug="energy-work-isnt-what-you-think"
        date="2026-06-19"
        tag="Energy"
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
            Energy
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Energy work isn&apos;t what you think
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              When people hear &ldquo;energy work&rdquo; they picture incense, crystals, mysticism. That&apos;s not what this is. Energy work, done properly, is reading information the body transmits and responding to it. It&apos;s not about belief. It&apos;s about perception.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Signals, not magic
            </h2>

            <p className="text-[15px] leading-relaxed">
              A trained hand detects heat, density, rhythm, resistance. Those are signals. Following those signals leads to restrictions the body is holding. Sometimes the restriction is structural: fascia, joint. Sometimes it&apos;s visceral. And sometimes it&apos;s energetic &mdash; a pattern with no physical anchor that still governs how the body organizes.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ignoring energy because it sounds &ldquo;woo&rdquo; is like ignoring your phone because you don&apos;t understand the technology. It works whether you believe in it or not.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              What people say after experiencing it
            </h2>

            <p className="text-[15px] leading-relaxed">
              Beatriz Gonz&aacute;lez, a nurse in Barcelona, described it this way:
            </p>

            <blockquote className="border-l-2 pl-6 my-6 text-[15px] leading-relaxed" style={{ borderColor: "var(--text-secondary)", color: "var(--text-secondary)" }}>
              &ldquo;Highly recommended. Thoughts and feelings organized, body and mind aligned. Positive energy fully exposed and ready for whatever comes. The word would be... surprising. A pleasure to interact with Ferran&apos;s energy.&rdquo;
              <span className="block mt-2 text-[13px]">— Beatriz Gonz&aacute;lez, Nurse, Barcelona</span>
            </blockquote>

            <p className="text-[15px] leading-relaxed">
              Jose Jimenez, a civil servant in Barcelona, was more direct:
            </p>

            <blockquote className="border-l-2 pl-6 my-6 text-[15px] leading-relaxed" style={{ borderColor: "var(--text-secondary)", color: "var(--text-secondary)" }}>
              &ldquo;He aligns body-mind-spirit without you noticing, or knowing how. Pleasant in manner and an excellent professional. Thank you for everything.&rdquo;
              <span className="block mt-2 text-[13px]">— Jose Jimenez, Civil Servant, Barcelona</span>
            </blockquote>

            <p className="text-[15px] leading-relaxed">
              They&apos;re not talking about mysticism. They&apos;re talking about results they can&apos;t explain. That&apos;s the difference between serious energy work and spectacle.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Structural, visceral, energetic: not alternatives
            </h2>

            <p className="text-[15px] leading-relaxed">
              In my work, energy doesn&apos;t replace structural or visceral approaches. It&apos;s a natural extension. Three layers of the same system. The body doesn&apos;t distinguish between a fascial restriction and an energetic pattern. It simply organizes around whatever it finds. If you only address one layer, you leave the others intact. And the pattern returns.
            </p>

            <p className="text-[15px] leading-relaxed">
              The question isn&apos;t whether energy exists. The question is whether you&apos;re willing to let your body reorganize without needing to understand everything first.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Serious energy work doesn&apos;t need you to believe in it. It just needs you not to block it.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you&apos;re curious but skeptical, write me. I&apos;ll tell you how I integrate energy work into my sessions.
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
          <RelatedArticles slug="energy-work-isnt-what-you-think" lang="en" />
        </article>
      </main>
    </div>
  );
}
