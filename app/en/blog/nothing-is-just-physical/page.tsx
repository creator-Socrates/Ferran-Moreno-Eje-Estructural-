import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Nothing is just physical: how emotional bugs hijack your body",
  description: "The body doesn't separate the physical from the emotional. Emotional events install themselves like bugs and generate real physical responses.",
  alternates: {
    canonical: "/en/blog/nothing-is-just-physical",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Nothing is just physical: how emotional bugs hijack your body"
        description="The body doesn't separate the physical from the emotional. Emotional events install themselves like bugs and generate real physical responses."
        slug="nothing-is-just-physical"
        date="2026-10-02"
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
            Nothing is just physical: how emotional bugs hijack your body
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Nothing is just physical. It&apos;s one of the phrases I repeat most in sessions. And every time I say it, there&apos;s someone on the other side who needs to hear it.
            </p>

            <p className="text-[15px] leading-relaxed">
              A client comes in with back pain. Tells me it&apos;s from lifting the dog. I tell him no. Lifting the dog was the trigger, not the cause. The cause has been there much longer.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The bug that installs itself
            </h2>

            <p className="text-[15px] leading-relaxed">
              It&apos;s like a software bug. An emotional event gets into your system and then your body, every time it passes through that zone, creates the same story. The same contraction. The same response. A family argument. Witnessing a cardiac arrest. A tax notice. The scale doesn&apos;t matter. The system doesn&apos;t distinguish between real danger and perceived danger. If it installed, it runs.
            </p>

            <p className="text-[15px] leading-relaxed">
              I see it in my own body. A letter from the tax office and my stomach swells. It&apos;s immediate. There&apos;s no rational process. The body reads the threat and responds before the mind can intervene.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The esophagus that closes
            </h2>

            <p className="text-[15px] leading-relaxed">
              Another one: hearing my son cry and feeling the esophagus close. It&apos;s not a metaphor. It&apos;s literal. The body translates emotion into tissue in real time. It always has. We just aren&apos;t trained to see it.
            </p>

            <p className="text-[15px] leading-relaxed">
              In a restaurant, someone choked. I intervened, resolved it. All good for that person. But afterwards I couldn&apos;t breathe. I stayed connected to the energy of that moment, to the urgency, to the other person&apos;s fear. My body didn&apos;t separate what was mine from what was theirs.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Your body doesn&apos;t separate
            </h2>

            <p className="text-[15px] leading-relaxed">
              This is what most conventional therapies ignore. They treat back pain as a mechanical problem. They give it a name. They label it. They assign a protocol. But the pain isn&apos;t mechanical. The pain is the expression of a system running an emotional bug on loop.
            </p>

            <p className="text-[15px] leading-relaxed">
              As long as you don&apos;t identify the bug, the symptom returns. You can massage it, stretch it, medicate it, operate on it. It will come back. Because the origin isn&apos;t physical. It&apos;s systemic.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              The body doesn&apos;t separate the physical from the emotional. Neither should you.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you feel your body repeating patterns that aren&apos;t just physical, write me. I work with the whole system.
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

          <RelatedArticles slug="nothing-is-just-physical" lang="en" />
        </article>
      </main>
    </div>
  );
}
