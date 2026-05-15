import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Intensity and invasion aren't the same thing",
  description: "There's a very clear line between intense bodywork and invasive bodywork. Most people were never taught to tell the difference.",
  alternates: {
    canonical: "/en/blog/intensity-and-invasion-arent-the-same",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Intensity and invasion aren't the same thing"
        description="There's a very clear line between intense bodywork and invasive bodywork. Most people were never taught to tell the difference."
        slug="intensity-and-invasion-arent-the-same"
        date="2026-07-20"
        tag="Bodywork"
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
            Bodywork
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Intensity and invasion aren&apos;t the same thing
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              There&apos;s a very clear line between intense bodywork and invasive bodywork.
            </p>

            <p className="text-[15px] leading-relaxed">
              The problem is that most people were never taught to tell the difference.
            </p>

            <p className="text-[15px] leading-relaxed">
              For years the idea was normalized that the more it hurts, the deeper the work. As if the body needed to be conquered to change. As if fascia had to be broken. As if tension yielded through force.
            </p>

            <p className="text-[15px] leading-relaxed">
              My experience has been exactly the opposite.
            </p>

            <p className="text-[15px] leading-relaxed">
              When you push too hard, the body defends itself.
            </p>

            <p className="text-[15px] leading-relaxed">
              The tissue hardens. Breathing shifts. The nervous system goes on alert. It may look like &ldquo;something is happening,&rdquo; but often the only thing happening is a protective response.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s not depth.
It&apos;s defense.
            </p>

            <p className="text-[15px] leading-relaxed">
              Real intensity feels different.
            </p>

            <p className="text-[15px] leading-relaxed">
              There are moments in a session where the body enters deep layers and the sensation can be very strong. There can be emotion, heat, trembling, release, even discomfort. But the system doesn&apos;t close down. There&apos;s a quality of openness. The body allows it to happen.
            </p>

            <p className="text-[15px] leading-relaxed">
              That difference changes everything.
            </p>

            <p className="text-[15px] leading-relaxed">
              Invasive work leaves the body exhausted, reactive, or hardened.
Intense work done well leaves more space, more breath, more sense of axis.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s not about pressure. It&apos;s about listening.
            </p>

            <p className="text-[15px] leading-relaxed">
              One precise contact in the right place generates more change than ten minutes of brute force on the wrong tissue. The body responds far better to precision than to aggression.
            </p>

            <p className="text-[15px] leading-relaxed">
              That was one of the most important things I learned during my training in Munich, especially through the influence of French osteopathy and Jean-Pierre Barral&apos;s visceral work. Subtlety wasn&apos;t weakness. It was precision.
            </p>

            <p className="text-[15px] leading-relaxed">
              Over time I understood something even more important:
the quality of the internal state of the person touching completely changes the outcome.
            </p>

            <p className="text-[15px] leading-relaxed">
              Two people can perform exactly the same technique and produce opposite effects.
            </p>

            <p className="text-[15px] leading-relaxed">
              One tries to impose a correction.
The other listens.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body knows the difference immediately.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why I stopped being so interested in accumulating techniques. Technique matters, of course. But past a certain point, what really changes the work is the ability to perceive. To feel when the system opens and when it protects. To know when to advance and when to stop.
            </p>

            <p className="text-[15px] leading-relaxed">
              Precision always beats force.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not because the body is fragile.
Because it&apos;s intelligent.
            </p>

            <p className="text-[15px] leading-relaxed">
              My best friend Josedavid has lived through my entire progression. He was the victim of my early experiments in therapy and then a client for many years.
            </p>

            <p className="text-[15px] leading-relaxed">
              He had a physio he&apos;d go to for dry needling. It was cheap.
            </p>

            <p className="text-[15px] leading-relaxed">
              To me, dry needling is unnecessary torture most of the time.
            </p>

            <p className="text-[15px] leading-relaxed">
              Dr. Harada, a Japanese acupuncturist I studied with, taught me an acupuncture method originally used for war wounds. Arrows. Sword injuries. It was so aggressive they stopped using it because people were fainting.
            </p>

            <p className="text-[15px] leading-relaxed">
              Modern dry needling comes from that.
            </p>

            <p className="text-[15px] leading-relaxed">
              And there are far more efficient alternatives.
            </p>

            <p className="text-[15px] leading-relaxed">
              A well-done acupuncture session, with precision and listening, produces deep changes without the need to generate pain.
            </p>

            <p className="text-[15px] leading-relaxed">
              But because dry needling is cheaper and faster, it became normalized.
            </p>

            <p className="text-[15px] leading-relaxed">
              Price shouldn&apos;t define the quality of the intervention.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              And pain shouldn&apos;t be the indicator that something is working.
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
