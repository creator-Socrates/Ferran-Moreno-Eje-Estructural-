import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";

export const metadata: Metadata = {
  title: "You don't need to understand. You need to be well",
  description: "The mind wants explanations. The body wants experience. You don't need to understand to be well.",
  alternates: {
    canonical: "/en/blog/you-dont-need-to-understand-you-need-to-be-well",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
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
            You don&apos;t need to understand. You need to be well
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              There&apos;s a question I ask often in session. I ask it in Catalan because it&apos;s my language and because in Catalan it lands perfectly: <em>Vols estar b&eacute; o vols entendre-ho?</em>
            </p>

            <p className="text-[15px] leading-relaxed">
              Do you want to be well or do you want to understand it? Most people go quiet. Because they&apos;ve never considered that those are two different things.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The mind as a survival algorithm
            </h2>

            <p className="text-[15px] leading-relaxed">
              Your mind is an algorithm optimized for survival. It analyzes, categorizes, predicts, controls. It looks for patterns. It needs explanations. If something hurts, it wants to know why. If something changes, it wants to know how. If something doesn&apos;t fit, it won&apos;t rest until it has a narrative that explains it.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s useful in many contexts. But in the body, understanding doesn&apos;t heal. You can perfectly understand why your back hurts and still be in pain. You can know exactly what triggers your anxiety and still be anxious. Intellectual knowledge doesn&apos;t change the state of the body.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The mole: the mind that interrupts
            </h2>

            <p className="text-[15px] leading-relaxed">
              Will Chung called it the mole. That mechanism of the mind that interrupts before the information is complete. That analyzes before receiving. That judges before feeling. The mole pops up at the exact moment the body is about to have a new experience and says: wait, let me understand this first.
            </p>

            <p className="text-[15px] leading-relaxed">
              And in that moment, the experience is lost. Because you can&apos;t feel and analyze at the same time. They&apos;re different circuits. When one activates, the other shuts off.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Experience erases the narrative
            </h2>

            <p className="text-[15px] leading-relaxed">
              What I&apos;ve seen over more than twenty years of work is this: when the body has a new experience, the old narrative loses power. You don&apos;t need to dismantle the story. You don&apos;t need to analyze the trauma. You don&apos;t need to understand every layer. The body needs to feel something different from what it&apos;s been feeling.
            </p>

            <p className="text-[15px] leading-relaxed">
              When the new state installs, the old narrative becomes irrelevant. It doesn&apos;t disappear. It simply stops governing.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              You don&apos;t need more information
            </h2>

            <p className="text-[15px] leading-relaxed">
              You don&apos;t need another book. Another podcast. Another explanation of why you are the way you are. What you need is for your body to have an experience that reorganizes what the mind cannot reorganize with words.
            </p>

            <p className="text-[15px] leading-relaxed">
              The people who change fastest aren&apos;t the smartest or the most informed. They&apos;re the ones who stop trying to understand and start allowing. Allowing the body to do what it knows how to do when you remove the interference of a mind that needs to control everything.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Vols estar b&eacute; o vols entendre-ho? It&apos;s the most honest question I can ask you. And the answer changes everything.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you want to stop going in circles and start feeling something different, write me.
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
