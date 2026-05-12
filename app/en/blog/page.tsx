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
  // --- Week 11: Jul 17-31 (My story) ---
  {
    slug: "ten-years-of-pain-one-session",
    title: "Ten years of pain that resolved in one session",
    excerpt: "At 17, a taekwondo injury left me unable to function for a decade. One day, a single correction changed everything.",
    date: "2026-07-17",
    tag: "My story",
  },
  {
    slug: "the-farmers-eyes",
    title: "The farmer's eyes: when success stopped meaning what I thought",
    excerpt: "I saw a newspaper photo of a farmer and knew I wanted that serenity. I left my corporate career.",
    date: "2026-07-21",
    tag: "My story",
  },
  {
    slug: "the-woman-who-read-spines-like-braille",
    title: "The woman who read spines like braille",
    excerpt: "In Robleda, a healer who learned by setting goat bones read the history of your body with her fingers.",
    date: "2026-07-24",
    tag: "My story",
  },
  {
    slug: "the-day-i-stopped-being-pinocchio",
    title: "The day I stopped being Pinocchio",
    excerpt: "My body was a piece of wood. Until an osteopath touched a rotated vertebra and I felt for the first time that the body is alive.",
    date: "2026-07-28",
    tag: "My story",
  },
  {
    slug: "roncesvalles-to-die-coruna-to-live",
    title: "Roncesvalles to die, A Coruña to live",
    excerpt: "After a crisis that pushed me to the edge, I walked the Camino de Santiago. In Santiago, something closed and I stopped being a pilgrim.",
    date: "2026-07-31",
    tag: "My story",
  },
  // --- Week 12: Aug 4-7 ---
  {
    slug: "what-nobody-tells-you-about-fascia",
    title: "What nobody tells you about fascia",
    excerpt: "The fascia in textbooks is dead tissue. Real fascia is a living, transparent liquid that constantly reorganizes.",
    date: "2026-08-04",
    tag: "Bodywork",
  },
  {
    slug: "your-organs-need-to-move",
    title: "Your organs need to move",
    excerpt: "Every organ depends on movement to function. When an organ loses motility, the whole system notices.",
    date: "2026-08-07",
    tag: "Bodywork",
  },
  // --- Week 13: Aug 11-14 ---
  {
    slug: "what-your-hands-can-read",
    title: "What your hands can read",
    excerpt: "Trained hands detect what machines cannot. Thermal scanning, visceral palpation, manual diagnosis: the craft of listening with your hands.",
    date: "2026-08-11",
    tag: "Bodywork",
  },
  {
    slug: "when-technique-becomes-the-limit",
    title: "When technique becomes the limit: why I stopped forcing after 20 years",
    excerpt: "After 20 years learning techniques, I discovered that technique itself can be the biggest obstacle.",
    date: "2026-08-14",
    tag: "Process",
  },
  // --- Week 14: Aug 18 ---
  {
    slug: "the-ram-of-your-nervous-system",
    title: "The RAM of your nervous system: why willpower doesn't work",
    excerpt: "It's not lack of willpower. Your nervous system has no bandwidth left. Free up space first, then change happens on its own.",
    date: "2026-08-18",
    tag: "Nervous system",
  },
  // --- Week 15: Aug 21-25 ---
  {
    slug: "hold-your-light",
    title: "Hold your light: why imposing yourself is the wrong strategy",
    excerpt: "You don't need to impose. If you hold your light, things organize themselves.",
    date: "2026-08-21",
    tag: "High performance",
  },
  {
    slug: "the-shadow-makes-you-forget",
    title: "The shadow makes you forget you were ever well",
    excerpt: "When the shadow dominates, you can't remember your moments of strength. It creates selective amnesia for your own wellbeing.",
    date: "2026-08-25",
    tag: "Process",
  },
  // --- Week 16: Aug 28 - Sep 1 ---
  {
    slug: "the-mental-cassette-tapes",
    title: "The mental cassette tapes that recreate your suffering",
    excerpt: "They're like cassettes you keep replaying. Every time you press play, they recreate the suffering. Some aren't even yours.",
    date: "2026-08-28",
    tag: "Process",
  },
  {
    slug: "the-bodys-handbrake",
    title: "The body's handbrake: why forcing yourself is the worst medicine",
    excerpt: "When you do something the body doesn't like, it defends itself. Pulls the handbrake and stops working.",
    date: "2026-09-01",
    tag: "Bodywork",
  },
  // --- Week 17: Sep 4-8 ---
  {
    slug: "manager-or-micromanager-of-your-life",
    title: "Manager or micromanager of your own life",
    excerpt: "When you micromanage other people's problems, you lose management of your own life, happiness and wellbeing.",
    date: "2026-09-04",
    tag: "Process",
  },
  {
    slug: "contraction-or-expansion",
    title: "Contraction or expansion: the only question you need",
    excerpt: "Your body contracts when something is misaligned and expands when it's right. Binary signal, no interpretation needed.",
    date: "2026-09-08",
    tag: "Process",
  },
  // --- Week 18: Sep 11-15 ---
  {
    slug: "the-people-with-the-sack",
    title: "The people with the sack: why unhappy groups pull you down",
    excerpt: "Unhappy people exert unconscious gravitational pull on happy ones. It's not personal. It's automatic.",
    date: "2026-09-11",
    tag: "Process",
  },
  {
    slug: "from-relief-to-expansion",
    title: "From relief to expansion: your body is addicted to crisis",
    excerpt: "Crisis, tension, session, relief. Your body got used to that cycle. There's another: regulation, treatment, expansion.",
    date: "2026-09-15",
    tag: "Nervous system",
  },
  // --- Week 19: Sep 18-22 ---
  {
    slug: "what-would-your-future-self-tell-you",
    title: "What would your future self tell you",
    excerpt: "Imagine your future self. What three pieces of advice would they give? The gap between what you say you want and what you do generates anxiety.",
    date: "2026-09-18",
    tag: "Process",
  },
  {
    slug: "always-find-the-point-of-origin",
    title: "Always find the point of origin",
    excerpt: "Before any intervention, find where it started. Not where it hurts — where it originated.",
    date: "2026-09-22",
    tag: "Bodywork",
  },
  // --- Week 20: Sep 25-29 ---
  {
    slug: "when-the-body-has-been-falling-for-years",
    title: "When the body has been falling for 8 years: what nobody looked at",
    excerpt: "A 73-year-old man in a wheelchair. Multiple specialists. Nobody looked at the structural collapse as the cause.",
    date: "2026-09-25",
    tag: "Chronic pain",
  },
  {
    slug: "the-barista-who-cried",
    title: "The barista who cried: when your axis changes what surrounds you",
    excerpt: "I smiled at her from my axis. She broke down. Days later she wrote: your energy gave me the strength to report.",
    date: "2026-09-29",
    tag: "Energy",
  },
  // --- Week 21: Oct 2-6 ---
  {
    slug: "nothing-is-just-physical",
    title: "Nothing is just physical: how emotional bugs hijack your body",
    excerpt: "Back pain that isn't from the dog. Bloated stomach from a tax letter. The body doesn't separate physical from emotional.",
    date: "2026-10-02",
    tag: "Nervous system",
  },
  {
    slug: "bara-bala-you-cant-feel-without-believing",
    title: "Bara bala: you can't feel without believing",
    excerpt: "If I say a word that means nothing, your brain produces zero emotion. Every feeling needs a belief to sustain it.",
    date: "2026-10-06",
    tag: "Process",
  },
  // --- Week 22: Oct 9 ---
  {
    slug: "everything-is-frequency",
    title: "Everything is frequency: the teachers who taught me to feel",
    excerpt: "Each teacher corrected something from the previous one. Zazen, Rolfing, osteopathy, martial arts, energy work. Everything is frequency.",
    date: "2026-10-09",
    tag: "Training",
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
