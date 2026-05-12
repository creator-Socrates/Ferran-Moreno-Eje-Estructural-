import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Manager or micromanager of your own life",
  description: "When you micromanage other people's problems, you lose the management of your own life. Stop working in crisis mode and start managing from above.",
  alternates: {
    canonical: "/en/blog/manager-or-micromanager-of-your-life",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Manager or micromanager of your own life"
        description="When you micromanage other people's problems, you lose the management of your own life. Stop working in crisis mode and start managing from above."
        slug="manager-or-micromanager-of-your-life"
        date="2026-09-04"
        tag="Process"
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
            Process
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Manager or micromanager of your own life
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              You don&apos;t have to connect with everything. What hurts you is dropping down into the micromanagement, becoming a micromanager and then losing the management. Losing the management of your own life, your happiness, your wellbeing.
            </p>

            <p className="text-[15px] leading-relaxed">
              I see it all the time. People who dive into other people&apos;s problems with absolute dedication. The drama of a colleague. A friend&apos;s crisis. The family conflict that isn&apos;t theirs to solve. They get into the detail of every situation that doesn&apos;t belong to them and when they look up, their own life is unattended.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              I don&apos;t work in crisis mode anymore
            </h2>

            <p className="text-[15px] leading-relaxed">
              I had a client who came three times a month in crisis mode. Three emergency sessions. And every time the story was the same: he had felt terrible, everything hurt, he felt like he was dying. Every time. And every time, when we reviewed what had happened that week, the same cast appeared: croissants, coffee, wine and aged cheese.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s not that these foods are poison. It&apos;s that when your system is already compromised, they&apos;re the trigger. Alcohol, aged cheese and coffee raise histamine. Histamine activates cortisol. Cortisol fires up inflammation. And suddenly you feel like you&apos;re dying. But you&apos;re not dying. You&apos;re activating a system that was already at its limit.
            </p>

            <p className="text-[15px] leading-relaxed">
              I told him: &ldquo;I don&apos;t work in crisis mode anymore. If you want to keep coming in emergency mode, find someone else. I work in management. In prevention. In helping you understand why your body responds the way it does so you stop provoking it.&rdquo;
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Management starts from above
            </h2>

            <p className="text-[15px] leading-relaxed">
              A good manager isn&apos;t putting out fires all day. They&apos;re up above, seeing the whole system, making decisions that prevent the fires. The same applies to your life. If you&apos;re constantly in crisis mode &mdash;reacting to what happens, resolving emergencies you provoked yourself&mdash; you&apos;re not managing. You&apos;re surviving.
            </p>

            <p className="text-[15px] leading-relaxed">
              Death is ruthless, because it puts things right in front of you. It shows you what matters. And when someone close to you dies or you yourself have a serious scare, suddenly you see with brutal clarity what you were doing with your time and your energy. Micromanaging what doesn&apos;t matter. While what matters was slipping away.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Level up
            </h2>

            <p className="text-[15px] leading-relaxed">
              Stop getting into the mud of every drama. Stop micromanaging other people&apos;s problems. Stop provoking your own crises with habits you know are destroying you. Rise. Manage from above. Observe the whole system. Make decisions that protect your energy, your health, your peace.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              The question is not whether you&apos;re capable of managing. The question is at what level you&apos;re managing. If you&apos;re in the micro-detail of other people&apos;s lives, you&apos;ve already lost the management of your own.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you feel like you&apos;re constantly putting out fires and want to start managing your life from a different level, write me.
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

          <RelatedArticles slug="manager-or-micromanager-of-your-life" lang="en" />
        </article>
      </main>
    </div>
  );
}
