export const dynamic = "force-dynamic";

import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";

const allArticles = [
  // --- Week 1: May 12-15 2026 (already published) ---
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
  // --- Week 2: May 15-19 ---
  {
    slug: "what-to-expect-first-session",
    title: "What to expect in your first bodywork session",
    excerpt: "What happens when someone comes for the first time. No protocols, no formulas. Each session is unique.",
    date: "2026-05-15",
    tag: "First session",
  },
  {
    slug: "chronic-back-pain-origin",
    title: "Chronic back pain: why the real cause is almost never your back",
    excerpt: "Your back is where it hurts, rarely where the problem is. Visceral restrictions, old scars, and compensation patterns are the real cause.",
    date: "2026-05-19",
    tag: "Chronic pain",
  },
  // --- Week 3: May 22-26 ---
  {
    slug: "rolfing-vs-physiotherapy-difference",
    title: "Rolfing vs physiotherapy: what's the difference",
    excerpt: "It's not about which is better. It's about what each one does. Two different questions, two different scopes.",
    date: "2026-05-22",
    tag: "Rolfing",
  },
  {
    slug: "what-really-happens-in-a-session",
    title: "\"I walked in bent and walked out straight\" — what really happens in a session",
    excerpt: "Real testimonials from people who came in with a problem and left transformed.",
    date: "2026-05-26",
    tag: "Session",
  },
  // --- Week 4: May 29 - Jun 2 ---
  {
    slug: "anxiety-without-apparent-cause",
    title: "Anxiety without apparent cause: when your body is asking for attention",
    excerpt: "You've checked everything and there's no clear cause. But your body is in constant alert. It's not psychological — it's physiological.",
    date: "2026-05-29",
    tag: "Nervous system",
  },
  {
    slug: "bodywork-after-pregnancy",
    title: "Bodywork after pregnancy: why abs and pelvic floor aren't enough",
    excerpt: "Pregnancy reorganizes the entire body. Real postpartum recovery isn't isolated abs and pelvic floor work.",
    date: "2026-06-02",
    tag: "Postpartum",
  },
  // --- Week 5: Jun 5-9 ---
  {
    slug: "the-mole-mental-mechanism",
    title: "The mole: the mental mechanism that blocks your body",
    excerpt: "Your mind analyzes before receiving. Judges before feeling. That mechanism is the single biggest obstacle to change.",
    date: "2026-06-05",
    tag: "Process",
  },
  {
    slug: "sports-injuries-that-wont-heal",
    title: "Sports injuries that won't heal: the pattern nobody looks at",
    excerpt: "The tissue healed but the injury persists. The problem isn't the structure — it's the compensation pattern.",
    date: "2026-06-09",
    tag: "Sports",
  },
  // --- Week 6: Jun 12-16 ---
  {
    slug: "your-body-isnt-broken",
    title: "Your body isn't broken. It's disorganized",
    excerpt: "The difference between broken and disorganized is enormous. Broken needs repair. Disorganized needs reorganization.",
    date: "2026-06-12",
    tag: "Reorganization",
  },
  {
    slug: "20-years-training-across-20-countries",
    title: "20 years training across 20 countries: what I learned",
    excerpt: "Not a CV. What each place taught me. Munich, Japan, India, Mexico, Thailand, USA.",
    date: "2026-06-16",
    tag: "Training",
  },
  // --- Week 7: Jun 19-23 ---
  {
    slug: "energy-work-isnt-what-you-think",
    title: "Energy work isn't what you think",
    excerpt: "When you hear \"energy work\" you think incense and crystals. That's not what this is.",
    date: "2026-06-19",
    tag: "Energy",
  },
  {
    slug: "european-rolfing-vs-american",
    title: "European Rolfing vs American: two schools, two results",
    excerpt: "Two lineages from the same source. Europe integrated French osteopathy and nervous system work.",
    date: "2026-06-23",
    tag: "Rolfing",
  },
  // --- Week 8: Jun 26-30 ---
  {
    slug: "difference-between-intensity-and-invasion",
    title: "The difference between intensity and invasion",
    excerpt: "Intense means the body is receiving something deep. Invasive means you're forcing. The body knows the difference.",
    date: "2026-06-26",
    tag: "Bodywork",
  },
  {
    slug: "why-i-work-by-process-not-single-sessions",
    title: "Why I work by process, not single sessions",
    excerpt: "A single session can change how you feel today. A process changes how your body is organized.",
    date: "2026-06-30",
    tag: "Process",
  },
  // --- Week 9: Jul 3-7 ---
  {
    slug: "compensating-isnt-healing",
    title: "Compensating isn't healing",
    excerpt: "Your body is brilliant at compensating. That's not a compliment — it's a warning. Every compensation has a cost.",
    date: "2026-07-03",
    tag: "Compensation",
  },
  {
    slug: "why-ceos-need-bodywork",
    title: "Why CEOs need bodywork",
    excerpt: "You optimize your schedule, team, strategy. But almost nobody optimizes the body as infrastructure.",
    date: "2026-07-07",
    tag: "High performance",
  },
  // --- Week 10: Jul 10-14 ---
  {
    slug: "sustainable-performance-body-as-infrastructure",
    title: "Sustainable performance: the body as infrastructure",
    excerpt: "It's not about working less. It's about the body having the capacity to recover from what you ask of it.",
    date: "2026-07-10",
    tag: "High performance",
  },
  {
    slug: "travel-jet-lag-nervous-system",
    title: "Travel, jet lag and pressure: how the nervous system pays the bill",
    excerpt: "Every flight disrupts circadian rhythm. Every timezone change forces the nervous system to recalibrate. The debt accumulates silently.",
    date: "2026-07-14",
    tag: "Nervous system",
  },
];

export const metadata = {
  title: "Blog — Ferran Moreno",
  description: "Articles on bodywork, nervous system regulation, chronic pain and structural reorganization.",
};

export default function BlogPage() {
  const today = new Date().toISOString().split("T")[0];
  const articles = allArticles.filter((a) => a.date <= today);

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
