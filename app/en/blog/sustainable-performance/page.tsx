import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Sustainable performance",
  description: "You can push through for years. Your body allows it. That is precisely the problem.",
  alternates: {
    canonical: "/en/blog/sustainable-performance",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Sustainable performance"
        description="You can push through for years. Your body allows it. That is precisely the problem."
        slug="sustainable-performance"
        date="2026-09-22"
        tag="High performance"
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
            High performance
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Sustainable performance
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              You can push through for years.
            </p>

            <p className="text-[15px] leading-relaxed">
              Your body allows it.
            </p>

            <p className="text-[15px] leading-relaxed">
              That is precisely the problem.
            </p>

            <p className="text-[15px] leading-relaxed">
              Many people build their entire lives on compensation:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>more coffee,</li>
              <li>more effort,</li>
              <li>more hours,</li>
              <li>more control,</li>
              <li>more demand.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              And for a while it works.
            </p>

            <p className="text-[15px] leading-relaxed">
              But the body always collects.
            </p>

            <p className="text-[15px] leading-relaxed">
              Sustainable performance is not about doing less.
            </p>

            <p className="text-[15px] leading-relaxed">
              It is about having a system that can recover from what you ask of it.
            </p>

            <p className="text-[15px] leading-relaxed">
              That difference changes everything.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because some people apparently work less yet produce far more. Not because they have more discipline. Because they have a body that wastes less energy holding constant tension.
            </p>

            <p className="text-[15px] leading-relaxed">
              Real performance depends on three things:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>structure,</li>
              <li>regulation,</li>
              <li>available energy.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              If the structure is disorganized, the body spends resources just to stay operational. If the nervous system lives on alert, much of its energy goes toward surviving. If breathing is compromised, the entire system runs on a thinner margin.
            </p>

            <p className="text-[15px] leading-relaxed">
              And from there, even simple tasks cost more.
            </p>

            <p className="text-[15px] leading-relaxed">
              That is why some people feel they are constantly dragging themselves through life.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body never quite cooperates.
            </p>

            <p className="text-[15px] leading-relaxed">
              It only compensates.
            </p>

            <p className="text-[15px] leading-relaxed">
              When the system recovers its organization, something shifts:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>recovery improves,</li>
              <li>sleep deepens,</li>
              <li>mental clarity increases,</li>
              <li>energy stops leaking into unnecessary tension.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              That is where real performance appears.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not the kind born from forcing yourself.
            </p>

            <p className="text-[15px] leading-relaxed">
              The kind born from having an efficient system.
            </p>

            <p className="text-[15px] leading-relaxed">
              This completely changes your relationship with work, sport and life.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body stops feeling like an obstacle you have to drag along.
            </p>

            <p className="text-[15px] leading-relaxed">
              It starts feeling like infrastructure that supports you.
            </p>

            <p className="text-[15px] leading-relaxed">
              And that difference is enormous.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because most people are not tired from doing too much.
            </p>

            <p className="text-[15px] leading-relaxed">
              They are tired from how much internal effort it takes to sustain what they do.
            </p>

            <p className="text-[15px] leading-relaxed">
              Sustainable performance is not about pushing harder.
            </p>

            <p className="text-[15px] leading-relaxed">
              It is about spending less energy surviving.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If something you&apos;ve read resonates, write me.
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
