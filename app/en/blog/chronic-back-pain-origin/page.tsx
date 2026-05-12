import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";

export const metadata: Metadata = {
  title: "Chronic back pain: why the real cause is almost never your back",
  description: "Your back is where it hurts, rarely where the problem is. Visceral restrictions, old scars, and compensation patterns are the real cause of chronic back pain.",
  alternates: {
    canonical: "/en/blog/chronic-back-pain-origin",
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
            Chronic pain
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Chronic back pain: why the real cause is almost never your back
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Your back is where it hurts. It&apos;s rarely where the problem is. Understanding this is the first step to stop going in circles from one practitioner to the next with no lasting result.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              What pulls on the back from inside
            </h2>

            <p className="text-[15px] leading-relaxed">
              The intestines, the kidneys, the diaphragm &mdash; all of them have direct fascial connections to the lumbar and thoracic spine. When an organ is restricted, whether from chronic inflammation, old surgery, or sustained stress, it pulls on the surrounding fascia. That pull changes posture. And the back compensates.
            </p>

            <p className="text-[15px] leading-relaxed">
              I&apos;ve worked with people who spent years treating their back. Massage, physiotherapy, core exercises. Nothing held. Until we addressed a visceral restriction &mdash; a bound intestine, a diaphragm that wasn&apos;t moving &mdash; and the back released on its own.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The old injury nobody connects
            </h2>

            <p className="text-[15px] leading-relaxed">
              An ankle sprain at 20. The body redistributed weight to protect that ankle. The knee compensated. The hip rotated. Twenty years later, the back hurts. The origin is a meter away from the symptom.
            </p>

            <p className="text-[15px] leading-relaxed">
              The same happens with surgical scars. A C-section, an appendectomy &mdash; any abdominal surgery creates fascial adhesions. Those adhesions reorganize trunk mechanics. The back takes the load.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The emotional component you can&apos;t ignore
            </h2>

            <p className="text-[15px] leading-relaxed">
              The ribcage closes when the system is in protection mode. The diaphragm locks. The shoulders roll inward. The entire thorax compresses. And the back, sitting behind all of that, gets trapped between the rigidity in front and gravity.
            </p>

            <p className="text-[15px] leading-relaxed">
              I&apos;m not saying the pain is &ldquo;emotional&rdquo; in the sense of imagined. I&apos;m saying emotional patterns create postural patterns. And postural patterns create real pain.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The back is the messenger
            </h2>

            <p className="text-[15px] leading-relaxed">
              My approach is to read the whole system before touching the back. Fascial chains, visceral restrictions, scars, loading patterns, nervous system state. Because if you kill the messenger, another one will show up.
            </p>

            <p className="text-[15px] leading-relaxed">
              I&apos;ve resolved chronic back pain by working on an old surgical scar. On a diaphragm that hadn&apos;t moved properly in years. On a pelvic floor that was disorganizing the entire base of the trunk.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Chronic back pain is almost never a back problem. It&apos;s a system problem. And you need someone who knows how to read the system.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you&apos;ve been dealing with back pain for a long time and nothing has worked, maybe no one has looked where the problem actually is. Write me.
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
