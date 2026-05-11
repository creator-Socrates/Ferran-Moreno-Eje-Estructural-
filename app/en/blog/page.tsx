import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";

const articles = [
  {
    slug: "why-you-make-bad-decisions-when-stressed",
    title: "Why you make bad decisions when you're stressed",
    excerpt: "You don't decide badly. You decide dysregulated. Your nervous system takes the wheel before your mind even knows.",
    date: "2026-05-09",
    tag: "Nervous system",
  },
  {
    slug: "chronic-pain-when-the-problem-isnt-where-it-hurts",
    title: "Chronic pain with no solution: when the problem isn't where it hurts",
    excerpt: "You've been to the physio, the osteopath, the specialist. Nothing sticks. Maybe no one has looked where the issue actually starts.",
    date: "2026-05-09",
    tag: "Chronic pain",
  },
  {
    slug: "what-is-nervous-system-regulation",
    title: "What is nervous system regulation and why it matters",
    excerpt: "Your body has an internal traffic light. Green, amber, red. Most people have been stuck on amber for years without knowing it.",
    date: "2026-05-09",
    tag: "Regulation",
  },
  {
    slug: "does-rolfing-hurt-the-truth",
    title: "Does Rolfing hurt? The truth about deep bodywork",
    excerpt: "Rolfing's painful reputation has a history. Good Rolfing doesn't have to hurt. It can be intense. Never invasive.",
    date: "2026-05-09",
    tag: "Rolfing",
  },
  {
    slug: "when-your-body-compensates-more-technique-wont-fix-it",
    title: "When your body compensates for years, more technique won't fix it",
    excerpt: "It's not the fall from three years ago. It's everything combined. Death by a thousand paper cuts.",
    date: "2026-05-09",
    tag: "Compensation",
  },
  {
    slug: "you-dont-need-to-understand-you-need-to-be-well",
    title: "You don't need to understand. You need to be well",
    excerpt: "The mind wants explanations. The body wants experience. Do you want to be well or do you want to understand?",
    date: "2026-05-09",
    tag: "Process",
  },
];

export const metadata = {
  title: "Blog — Ferran Moreno",
  description: "Articles on bodywork, nervous system regulation, chronic pain and structural reorganization.",
};

export default function BlogPage() {
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
            <a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contact</a>
            <span style={{ color: "var(--border-subtle)" }}>|</span>
            <Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">ES</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[700px] px-6 py-24">
        <h1 className="text-4xl font-semibold tracking-tight mb-4">Blog</h1>
        <p className="text-[15px] mb-16" style={{ color: "var(--text-secondary)" }}>
          What I observe. What I learn. What works.
        </p>

        <div className="space-y-12">
          {articles.map((a) => (
            <article key={a.slug} style={{ borderBottom: "1px solid var(--border-subtle)" }} className="pb-12">
              <Link href={`/en/blog/${a.slug}`} className="group">
                <span className="text-[10px] uppercase tracking-[0.15em] mb-3 block" style={{ color: "var(--text-secondary)" }}>
                  {a.tag}
                </span>
                <h2 className="text-2xl font-semibold tracking-tight mb-3 group-hover:opacity-70 transition">
                  {a.title}
                </h2>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {a.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
