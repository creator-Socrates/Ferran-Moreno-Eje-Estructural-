import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "The farmer's eyes: when success stopped meaning what I thought",
  description: "One day at the office I saw a photo of a farmer and knew I wanted to be like him when I grew old. I left the corporate world.",
  alternates: {
    canonical: "/en/blog/the-farmers-eyes",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The farmer's eyes: when success stopped meaning what I thought"
        description="One day at the office I saw a photo of a farmer and knew I wanted to be like him when I grew old. I left the corporate world."
        slug="the-farmers-eyes"
        date="2026-07-21"
        tag="My story"
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
            My story
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            The farmer&apos;s eyes: when success stopped meaning what I thought
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              I was at the office. I had a stable job, a salary, a path laid out. And one day, flipping through a newspaper, I saw a photo of a man who must have been from Vietnam or Cambodia. He was a farmer. And when I saw that man&apos;s eyes I said to myself: that&apos;s who I want to be when I grow old.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              What I saw in the corporate world
            </h2>

            <p className="text-[15px] leading-relaxed">
              It wasn&apos;t just that the job didn&apos;t fulfil me. It was what I saw around me. Nobody respected the body. It was always the women, the vices, the affairs, the addictions. People earning good money and living disconnected from everything that matters. Wrecked bodies, broken relationships, nights that led nowhere.
            </p>

            <p className="text-[15px] leading-relaxed">
              One day, a poker champion told me something that stuck: that the goal in life was to discover your passion. He said it like it was the most obvious thing in the world. And I knew my passion wasn&apos;t in that office.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The massage school
            </h2>

            <p className="text-[15px] leading-relaxed">
              I enrolled in a massage school in Barcelona. Mondays and Wednesdays, 7:30 to 9:30 pm. After the workday, I crossed the city to learn how to touch. While my classmates did between one and three practice sessions outside of class, I did ninety-seven. For me it was something very serious. It wasn&apos;t a hobby or a plan B. It was what I had to do.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The real price of change
            </h2>

            <p className="text-[15px] leading-relaxed">
              Tuition was 18,000 euros. But the real cost was something else: roughly 50,000 euros in opportunity cost from leaving my career. My parents thought I had joined a cult. They didn&apos;t understand. They couldn&apos;t. They watched their son abandon a safe path to study massage at night.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              But I had seen the farmer&apos;s eyes. And I knew that what I was looking for wasn&apos;t in an office. It was in the hands, in the body, in something I couldn&apos;t name yet but that was already moving me.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you feel your life is asking for a change and you don&apos;t know where to start, write me. Sometimes the body knows before the mind does.
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

          <RelatedArticles slug="the-farmers-eyes" lang="en" />
        </article>
      </main>
    </div>
  );
}
