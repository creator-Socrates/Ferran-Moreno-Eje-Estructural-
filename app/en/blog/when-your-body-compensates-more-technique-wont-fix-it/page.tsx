import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";

export const metadata: Metadata = {
  title: "When your body compensates for years, more technique won't fix it",
  description: "It's not one event. It's everything combined. When the body compensates for too long, the approach has to change.",
  alternates: {
    canonical: "/en/blog/when-your-body-compensates-more-technique-wont-fix-it",
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
            Compensation
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            When your body compensates for years, more technique won&apos;t fix it
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Your body is brilliant at compensating. That&apos;s not the problem. The problem is when those compensations pile up for years and no one looks at the whole picture.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The intelligence of the body
            </h2>

            <p className="text-[15px] leading-relaxed">
              Every time something gets stuck, your body redistributes the load. A stiff ankle makes the knee overwork. A visceral restriction pulls on the fascia and shifts posture. An old scar reorganizes the tensions around it. The body absorbs each restriction and keeps going. It&apos;s extraordinarily good at this.
            </p>

            <p className="text-[15px] leading-relaxed">
              But every compensation has a cost. And costs accumulate.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Death by a thousand paper cuts
            </h2>

            <p className="text-[15px] leading-relaxed">
              It&apos;s not the fall from three years ago. It&apos;s not the work stress. It&apos;s not the bad posture. It&apos;s all of it together. Each micro-tension is nothing on its own. But there are hundreds of them. And when the body can&apos;t absorb one more, the system overflows. Pain shows up. Chronic fatigue. Anxiety with no apparent cause. Insomnia that won&apos;t go away.
            </p>

            <p className="text-[15px] leading-relaxed">
              At that point, treating one cut is useless. You have nine hundred and ninety-nine more.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Why spot treatments fail
            </h2>

            <p className="text-[15px] leading-relaxed">
              You go to the physio. They work on your shoulder. It improves for three days. Comes back. You go to the osteopath. They adjust your neck. It improves for a week. Comes back. You go to the surgeon. They give you an injection. It improves for a month. Comes back.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s not that the treatment was wrong. It&apos;s that the approach is local and the problem is systemic. They&apos;re patching one cut while the body has a thousand. Every time you fix one, the load redistributes and another opens up.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Reorganize, not repair
            </h2>

            <p className="text-[15px] leading-relaxed">
              My approach isn&apos;t chasing the symptom. It&apos;s understanding how the whole body is organized. Where the primary restrictions are. How they relate to each other. What pattern keeps them active. And from there, reorganize.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body isn&apos;t broken. It&apos;s poorly organized. And the difference is enormous. What&apos;s broken needs repair. What&apos;s poorly organized needs reorganization. It needs someone who sees the whole picture and gives the system the information it needs to return to an order that works.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              The question isn&apos;t what technique to apply. The question is what organization to restore.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you&apos;ve tried spot treatments and the problem always returns, maybe it&apos;s time to look at the whole picture.
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
