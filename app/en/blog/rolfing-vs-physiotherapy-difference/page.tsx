import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rolfing vs physiotherapy: what's the difference",
  description: "It's not about which is better. It's about what each one does. Physiotherapy treats symptoms. Rolfing reorganizes the structure.",
  alternates: {
    canonical: "/en/blog/rolfing-vs-physiotherapy-difference",
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
            <Link href="/en/#method" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Method</Link>
            <Link href="/en/#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Cases</Link>
            <Link href="/en/#who" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Who it&apos;s for</Link>
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
            Rolfing
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Rolfing vs physiotherapy: what&apos;s the difference
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              This is one of the questions I get most. And the answer isn&apos;t which one is better. It&apos;s what each one does. They don&apos;t compete. They operate on different levels.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Two different questions
            </h2>

            <p className="text-[15px] leading-relaxed">
              Physiotherapy asks: what&apos;s broken? What needs rehabilitation? It works with the symptom, the injury, the lost function. Clear protocols, specific tools, a concrete goal: get you back to where you were before something failed.
            </p>

            <p className="text-[15px] leading-relaxed">
              Rolfing asks something else: how is this body organized? It doesn&apos;t look at the part that&apos;s failing. It looks at the whole system. It finds the patterns that sustain the problem. And it works to reorganize the structure so the body functions better as a whole.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              When physiotherapy works and when it doesn&apos;t
            </h2>

            <p className="text-[15px] leading-relaxed">
              If you tear a ligament, physiotherapy is what you need. Acute injury, post-surgery, loss of range of motion &mdash; the physio is the right professional. That&apos;s not up for debate.
            </p>

            <p className="text-[15px] leading-relaxed">
              But there are people who&apos;ve been doing physio for months or years and the problem keeps coming back. The shoulder that always tightens. The lower back that never fully resolves. The neck that improves for three days and relapses. When that happens, it&apos;s almost always because the problem isn&apos;t local. It&apos;s organizational. The part fails because the system is loading it disproportionately. That&apos;s where Rolfing comes in.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Two worlds, one training
            </h2>

            <p className="text-[15px] leading-relaxed">
              I know both worlds. I trained at the European Rolfing School in Munich. I did every course from the Group of Munich: Barral, Croibier, visceral manipulation, peripheral nerves. And I&apos;ve worked alongside physiotherapists for years.
            </p>

            <p className="text-[15px] leading-relaxed">
              I have no issue with physiotherapy. What I do see is that many people arrive at my practice after exhausting the local treatment route. They&apos;ve done everything possible with the part. They need someone who looks at the system.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              It&apos;s not about which is better
            </h2>

            <p className="text-[15px] leading-relaxed">
              The question isn&apos;t physiotherapy or Rolfing. It&apos;s: what does your body need right now? If the answer is to rehabilitate a specific injury, go to physio. If the answer is that something deeper isn&apos;t working, that symptoms keep repeating, that the body can&apos;t seem to find its place &mdash; then you need a different approach.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Physiotherapy fixes parts. Rolfing reorganizes the system. Both are valid. The key is knowing when you need each one.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you&apos;ve been dealing with a problem that won&apos;t resolve, maybe the approach needs to change. Write me and we&apos;ll figure it out.
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
