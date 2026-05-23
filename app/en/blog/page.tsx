export const dynamic = "force-dynamic";

import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { Newsletter } from "@/components/newsletter";

const allArticles = [
  { slug: "bara-bala-you-cant-feel-without-believing", title: "Bara bala: you can&apos;t feel without believing", date: "2026-05-09", tag: "Process" },
  { slug: "the-barista-who-cried", title: "The barista who cried", date: "2026-05-09", tag: "Energy" },
  { slug: "the-mole-mental-mechanism", title: "The mole: the mental mechanism that blocks your body", date: "2026-05-09", tag: "Process" },
  { slug: "the-mental-cassette-tapes", title: "The mental cassette tapes", date: "2026-05-09", tag: "Process" },
  { slug: "the-shadow-makes-you-forget", title: "The shadow makes you forget you were ever well", date: "2026-05-09", tag: "Process" },
  { slug: "contraction-or-expansion", title: "Contraction or expansion", date: "2026-05-09", tag: "Process" },
  { slug: "the-people-with-the-sack", title: "The people with the sack", date: "2026-05-09", tag: "Process" },
  { slug: "hold-your-light", title: "Hold your light", date: "2026-05-09", tag: "High performance" },
  { slug: "the-bodys-handbrake", title: "The body&apos;s handbrake", date: "2026-05-09", tag: "Bodywork" },
  { slug: "manager-or-micromanager-of-your-life", title: "Manager or micromanager", date: "2026-05-09", tag: "Process" },
  { slug: "nothing-is-just-physical", title: "Nothing is just physical", date: "2026-05-09", tag: "Nervous system" },
  { slug: "you-dont-need-to-understand-you-need-to-be-well", title: "You don&apos;t need to understand. You need to be well", date: "2026-05-09", tag: "Process" },
  { slug: "everything-is-frequency", title: "Everything is frequency", date: "2026-05-09", tag: "Training" },
  { slug: "what-to-expect-first-session", title: "What to expect in your first session", date: "2026-05-09", tag: "First session" },
  { slug: "what-really-happens-in-a-session", title: "What really happens in a session", date: "2026-05-09", tag: "Session" },
  { slug: "bodywork-after-pregnancy", title: "Bodywork after pregnancy", date: "2026-05-09", tag: "Postpartum" },
  { slug: "rolfing-vs-physiotherapy-difference", title: "Rolfing vs physiotherapy", date: "2026-05-09", tag: "Rolfing" },
  { slug: "why-i-work-by-process-not-single-sessions", title: "Why I work by process", date: "2026-05-09", tag: "Process" },
  { slug: "what-your-hands-can-read", title: "What your hands can read", date: "2026-05-09", tag: "Bodywork" },
  { slug: "20-years-training-across-20-countries", title: "20 years training across 20 countries", date: "2026-05-09", tag: "Training" },
  { slug: "energy-work-isnt-what-you-think", title: "Energy work isn&apos;t what you think", date: "2026-05-09", tag: "Energy" },
  { slug: "your-body-isnt-broken-its-compensating", title: "Your body isn&apos;t broken. It&apos;s compensating", date: "2026-05-15", tag: "Fundamentals" },
  { slug: "always-find-the-point-of-origin", title: "Always find the point of origin", date: "2026-05-19", tag: "Fundamentals" },
  { slug: "compensating-isnt-healing", title: "Compensating isn&apos;t healing", date: "2026-05-22", tag: "Fundamentals" },
  { slug: "the-body-decides-before-the-mind", title: "The body decides before the mind", date: "2026-05-26", tag: "Fundamentals" },
  { slug: "the-body-organizes-survival-before-comfort", title: "The body organizes survival before comfort", date: "2026-05-29", tag: "Fundamentals" },
  { slug: "precision-always-beats-force", title: "Precision always beats force", date: "2026-06-02", tag: "Fundamentals" },
  { slug: "do-no-harm", title: "Do no harm", date: "2026-06-05", tag: "Fundamentals" },
  { slug: "the-difference-between-reorganizing-and-repairing", title: "The difference between reorganizing and repairing", date: "2026-06-09", tag: "Fundamentals" },
  { slug: "the-problem-isnt-stress", title: "The problem isn&apos;t stress. It&apos;s not coming back down", date: "2026-06-12", tag: "Nervous system" },
  { slug: "your-nervous-system-cant-tell-the-difference", title: "Your nervous system can&apos;t tell the difference", date: "2026-06-16", tag: "Nervous system" },
  { slug: "not-tired-compensating", title: "Most people aren&apos;t tired. They&apos;re compensating", date: "2026-06-19", tag: "Nervous system" },
  { slug: "living-in-amber", title: "Living in amber feels normal until you step out", date: "2026-06-23", tag: "Nervous system" },
  { slug: "the-body-remembers-what-the-mind-forgot", title: "The body remembers what the mind forgot", date: "2026-06-26", tag: "Nervous system" },
  { slug: "the-ram-of-your-nervous-system", title: "The RAM of your nervous system", date: "2026-06-30", tag: "Nervous system" },
  { slug: "anxiety-without-apparent-cause", title: "Anxiety without apparent cause", date: "2026-07-03", tag: "Nervous system" },
  { slug: "the-body-needs-safety-not-control", title: "The body needs safety, not control", date: "2026-07-07", tag: "Nervous system" },
  { slug: "your-breathing-changes-first", title: "Your breathing changes before your thoughts", date: "2026-07-10", tag: "Nervous system" },
  { slug: "relief-isnt-expansion", title: "Relief isn&apos;t expansion", date: "2026-07-14", tag: "Nervous system" },
  { slug: "regulation-isnt-relaxation", title: "Regulation isn&apos;t relaxation", date: "2026-07-17", tag: "Nervous system" },
  { slug: "intensity-and-invasion-arent-the-same", title: "Intensity and invasion aren&apos;t the same", date: "2026-07-21", tag: "Bodywork" },
  { slug: "what-nobody-tells-you-about-fascia", title: "What nobody tells you about fascia", date: "2026-07-24", tag: "Bodywork" },
  { slug: "your-organs-need-to-move", title: "Your organs need to move", date: "2026-07-28", tag: "Bodywork" },
  { slug: "pain-rarely-starts-where-it-hurts", title: "Pain rarely starts where it hurts", date: "2026-07-31", tag: "Bodywork" },
  { slug: "why-some-injuries-never-fully-heal", title: "Why some injuries never fully heal", date: "2026-08-04", tag: "Bodywork" },
  { slug: "the-body-changes-when-it-stops-defending", title: "The body changes when it stops defending", date: "2026-08-07", tag: "Bodywork" },
  { slug: "european-rolfing-vs-american", title: "European Rolfing vs American", date: "2026-08-11", tag: "Rolfing" },
  { slug: "the-back-is-almost-never-the-problem", title: "The back is almost never the problem", date: "2026-08-14", tag: "Bodywork" },
  { slug: "seven-years-of-pain", title: "Seven years of pain", date: "2026-08-18", tag: "My story" },
  { slug: "the-day-i-stopped-being-pinocchio", title: "The day I stopped being Pinocchio", date: "2026-08-21", tag: "My story" },
  { slug: "the-farmers-eyes", title: "The farmer&apos;s eyes", date: "2026-08-25", tag: "My story" },
  { slug: "the-healer-of-robleda", title: "The healer of Robleda", date: "2026-08-28", tag: "My story" },
  { slug: "roncesvalles-to-die-coruna-to-live", title: "Roncesvalles to die, A Coruña to live", date: "2026-09-01", tag: "My story" },
  { slug: "what-i-learned-in-kamalaya", title: "What I learned in Kamalaya", date: "2026-09-04", tag: "My story" },
  { slug: "what-i-learned-touching-thousands-of-bodies", title: "What I learned touching thousands of bodies", date: "2026-09-08", tag: "My story" },
  { slug: "when-technique-becomes-the-limit", title: "When technique becomes the limit", date: "2026-09-11", tag: "My story" },
  { slug: "ceos-and-the-nervous-system", title: "CEOs and the nervous system", date: "2026-09-15", tag: "High performance" },
  { slug: "the-physiological-cost-of-sustained-pressure", title: "The physiological cost of sustained pressure", date: "2026-09-18", tag: "High performance" },
  { slug: "sustainable-performance", title: "Sustainable performance", date: "2026-09-22", tag: "High performance" },
  { slug: "travel-jet-lag-nervous-debt", title: "Travel, jet lag and nervous debt", date: "2026-09-25", tag: "High performance" },
  { slug: "the-body-wasnt-designed-to-be-always-available", title: "The body wasn&apos;t designed to be always available", date: "2026-09-29", tag: "High performance" },
  { slug: "your-body-doesnt-need-more-force", title: "Your body doesn&apos;t need more force", date: "2026-10-02", tag: "Manifesto" },
  { slug: "bodies-asking-permission-to-rest", title: "Bodies asking permission to rest", date: "2026-10-06", tag: "Manifesto" },
  { slug: "the-symptom-isnt-the-enemy", title: "The symptom isn&apos;t the enemy", date: "2026-10-09", tag: "Manifesto" },
  { slug: "the-body-always-tries-to-protect-you", title: "The body always tries to protect you", date: "2026-10-13", tag: "Manifesto" },
  { slug: "your-nervous-system-hears-everything", title: "Your nervous system hears everything", date: "2026-10-16", tag: "Manifesto" },
  { slug: "the-body-knows-before-you-do", title: "The body knows before you do", date: "2026-10-20", tag: "Manifesto" },
  { slug: "people-in-defense-for-decades", title: "People in defense for decades", date: "2026-10-23", tag: "Manifesto" },
  { slug: "tension-changes-who-you-think-you-are", title: "Tension changes who you think you are", date: "2026-10-27", tag: "Manifesto" }
];

export const metadata = {
  title: "Blog — Ferran Moreno",
  description: "Articles on bodywork, nervous system regulation, Rolfing and structural reorganization.",
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
              </Link>
            </article>
          ))}
        </div>
      </main>

      <Newsletter variant="footer" lang="en" source="blog-index-en" />
    </div>
  );
}
