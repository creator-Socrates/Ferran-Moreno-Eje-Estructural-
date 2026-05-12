import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "20 years training across 20 countries: what I learned | Ferran Moreno",
  description: "Not a CV. What each place taught me about the body, movement, and manual therapy across two decades of international training.",
  alternates: {
    canonical: "/en/blog/20-years-training-across-20-countries",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="20 years training across 20 countries: what I learned | Ferran Moreno"
        description="Not a CV. What each place taught me about the body, movement, and manual therapy across two decades of international training."
        slug="20-years-training-across-20-countries"
        date="2026-06-16"
        tag="Training"
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
            Training
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            20 years training across 20 countries: what I learned
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              This is not a CV. I have no interest in listing diplomas. What I want to share is what each place taught me, what each teacher corrected, what each mistake revealed. Because every training challenged something from the previous one. And that is what actually builds judgment.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Structure, subtlety, silence
            </h2>

            <p className="text-[15px] leading-relaxed">
              In Munich, at the European Rolfing School, I learned structure and precision. How to read the body as a system of relationships, not a list of muscles. That was the foundation.
            </p>

            <p className="text-[15px] leading-relaxed">
              In Paris and Lyon, with Barral and Croibier, I discovered that organs move and pull on everything else. That a visceral restriction can explain a back pain no orthopedic surgeon can find. That changed the way I listen to the body.
            </p>

            <p className="text-[15px] leading-relaxed">
              In Japan, through Japanese acupuncture, I learned that less is more. That before you act, you listen. That the minimal intervention, at the exact point, generates more change than an hour of mechanical work.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The body has its own intelligence
            </h2>

            <p className="text-[15px] leading-relaxed">
              In India, through Ayurveda, I understood that the body has its own intelligence. That it doesn&apos;t always need you to correct it. Sometimes it needs you to remove what&apos;s in the way and let it reorganize on its own.
            </p>

            <p className="text-[15px] leading-relaxed">
              In Mexico I learned that healing doesn&apos;t need to be gentle to be respectful. That there are traditions where intensity is part of the process, not a lack of care.
            </p>

            <p className="text-[15px] leading-relaxed">
              In Thailand I saw movement as medicine. Not exercise. Movement. The difference is enormous.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Trauma lives in the body
            </h2>

            <p className="text-[15px] leading-relaxed">
              In the United States, through Peter Levine&apos;s Somatic Experiencing, I learned something that changed everything: trauma lives in the body, not in the story. You can talk about something for years in therapy and still be stuck, because the charge isn&apos;t in the narrative. It&apos;s in the nervous system, in the fascia, in the tension patterns the body holds long after the mind has &quot;understood.&quot;
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              I stopped looking for the technique. I started looking for what this body needs.
            </h2>

            <p className="text-[15px] leading-relaxed">
              Every teacher corrected something from the one before. Not because they were wrong, but because each one saw a different part. The result of twenty years of searching is not a method. It&apos;s a toolbox built step by step, country by country, body by body.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              I stopped looking for THE technique and started looking for what THIS body needs. That&apos;s the difference between collecting diplomas and knowing how to work.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you&apos;re looking for someone who works from experience rather than protocol, write me.
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
          <RelatedArticles slug="20-years-training-across-20-countries" lang="en" />
        </article>
      </main>
    </div>
  );
}
