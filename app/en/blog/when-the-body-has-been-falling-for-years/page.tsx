import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "When the body has been falling for 8 years: what no one looked at",
  description: "A 73-year-old man in a wheelchair with chronic ulcers. 8 years of decline. Multiple specialists. None of them looked at the structural collapse.",
  alternates: {
    canonical: "/en/blog/when-the-body-has-been-falling-for-years",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="When the body has been falling for 8 years: what no one looked at"
        description="A 73-year-old man in a wheelchair with chronic ulcers. 8 years of decline. Multiple specialists. None of them looked at the structural collapse."
        slug="when-the-body-has-been-falling-for-years"
        date="2026-09-25"
        tag="Chronic pain"
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
            Chronic pain
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            When the body has been falling for 8 years: what no one looked at
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              A 73-year-old man arrives in a wheelchair. Chronic leg ulcers. Real risk of amputation. He&apos;s been in decline for 8 years since a hospital admission left him bedridden. He&apos;s seen multiple specialists. Vascular, orthopedics, dermatology, internal medicine. Each one looked at their own piece. None of them looked at the whole person.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              What I saw when I looked
            </h2>

            <p className="text-[15px] leading-relaxed">
              Before touching anything, I read his structure. The diaphragm wasn&apos;t supporting. The pelvis was rotated and toneless, completely flaccid. One leg collapsed on itself. The ribs on one side were rigid, with no respiratory movement. Distal circulation was so poor there was no palpable pulse in the affected foot.
            </p>

            <p className="text-[15px] leading-relaxed">
              None of this was a consequence of the ulcer. It was its cause. The postural collapse had been strangling circulation, breathing, the body&apos;s ability to deliver nutrients and oxygen to the extremities. Without structure, there is no function. Without function, tissue dies.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              One session, micro-interventions
            </h2>

            <p className="text-[15px] leading-relaxed">
              I didn&apos;t do anything heroic. I worked with what the body allowed. Small adjustments in the pelvis to restore some symmetry. Release of the rigid ribs so the diaphragm could do its job. Gentle work on the collapsed leg to recover some axis.
            </p>

            <p className="text-[15px] leading-relaxed">
              By the end of the session, three things had changed. The pelvis had more balance. Breathing was more harmonious, bilateral. And the distal pulse in the foot &mdash; previously absent &mdash; was present. The person accompanying him confirmed it: he was calmer than they&apos;d seen him in months.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Structure supports function
            </h2>

            <p className="text-[15px] leading-relaxed">
              This case illustrates something I see constantly: the vascular problem didn&apos;t cause the postural collapse. The postural collapse caused the vascular problem. When a body loses its organization, everything that depends on that organization starts to fail. Circulation, breathing, digestion, tissue recovery.
            </p>

            <p className="text-[15px] leading-relaxed">
              8 years looking at the ulcer without asking why the leg wasn&apos;t receiving blood. 8 years treating the symptom without questioning what structure was generating it.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              The body is always trying to reorganize itself. It just needs someone to provide the conditions. Not more force. Not more partial interventions. Space, listening, and precision.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you&apos;ve been dealing with a problem no one can resolve for years, maybe no one has looked where it actually is. Write me.
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

          <RelatedArticles slug="when-the-body-has-been-falling-for-years" lang="en" />
        </article>
      </main>
    </div>
  );
}
