import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail } from "@/lib/content";

export const metadata: Metadata = {
  title: "My Story | Ferran Moreno",
  description:
    "At 17 a taekwondo injury left me unable to function for seven years. This is the story of how I found another way.",
  alternates: {
    canonical: "/en/my-story",
  },
};

const reserveHref = `https://wa.me/34679229744?text=Hi%20Ferran%2C`;

export default function MyStoryPage() {
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
            <Link href="/en#method" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Method</Link>
            <Link href="/en#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Cases</Link>
            <Link href="/en#who" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Who it&apos;s for</Link>
            <Link href="/en/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Wall of trust</Link>
            <Link href="/en/my-story" className="text-[11px] uppercase tracking-[0.08em]" style={{ color: "var(--text-main)", textDecoration: "underline", textUnderlineOffset: "4px" }}>My story</Link>
            <span style={{ color: "var(--border-subtle)" }}>|</span>
            <Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">ES</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[660px] px-6 py-[100px]">

        <div className="mb-12">
          <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>My story</div>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.1] tracking-tight lg:text-5xl">
            Ferran Moreno
          </h1>
        </div>

        <div className="space-y-8 text-lg leading-8">

          <p>As a child I wanted to be a doctor. How the body works fascinated me. Nature captivated me.</p>

          <p>My father wanted me to study business. I studied business. I graduated in Business Administration.</p>

          <p>But at 17, a kick during a taekwondo competition left me injured for seven years. I couldn&apos;t lift a water jug. The pain was constant. Medicine found no solution. I was told I had one leg shorter than the other, that torn tissue had left a permanent scar, that it was psychosomatic, that it was neural. I had massages, manipulations, promises. Nothing worked.</p>

          <p>Until, seven years later, a single osteopathy session with Josep Castellà, in Sant Quirze del Vallès, resolved it in under fifteen minutes. For the first time I felt aligned. The pain disappeared.</p>

          <p className="font-medium">
            How could a solution exist, and I had been trapped for so long?
          </p>

          <p>From that point I started studying seriously. I devoured books on anatomy, trigger points, meridians, osteopathy, and reflexology. I was fortunate enough to do cadaver practice at the Faculty of Medicine. In 2004 I studied chiropractic massage at the Quirotema School, where I also learned the Benjamin Method with Josep Ferrer, an extraordinary anatomy professor. Between 2005 and 2007 I worked as an apprentice in the practice of Josep Castellà and his son Jonathan. During the day I worked at Duravit and, after hours, I went to learn with them.</p>

          <p>In 2006 I trained as a Pilates instructor with Leah Maidenbaum, a teacher from New York. Private classes, twice a week, at seven in the morning. Another doorway into the body.</p>

          <p>One day, Josep Ferrer told me that the best manual therapy was being taught in Germany and the United States, and that it was called Rolfing. It was expensive. And it required English.</p>

          <p>A month later I landed in Agatharied for my first course: the Rolfing Spectrum Training, with Christoph Sommer and Herbert Battisti. After years of limited diagnoses, I encountered a completely different level: people capable of reading visceral, neural, and fascial imbalances by observing the body and placing a hand on the head. With very little contact they could free a nerve, restore arterial flow, or return mobility to an organ. For me it was like going from the Spanish basketball league to the NBA.</p>

          <p>
            I came back to Barcelona and told a friend:<br />
            <span className="font-medium">&ldquo;I&apos;m going to leave my job, I&apos;m going to study this, and I&apos;m going to become one of the best in the world.&rdquo;</span>
          </p>

          <p>On September 30, 2007, I left my position as Head of Training at Duravit Spain.</p>

          <p>I moved to Munich to train at the European Rolfing School. The process wasn&apos;t easy. The level wasn&apos;t what I had expected after what I&apos;d seen in Agatharied. It was Ray McCall, in the final third of the course, who helped me get real value from the training. And Andrea Clusen, a teacher at the school, who gave me a unique vision of the method. In parallel I studied at the Group of Munich, attending every course they offered: listening techniques, visceral manipulation, nerves, thorax, urogenital work, peripheral nerves. With Jean Pierre Barral, Alain Croibier, Didier Prat, and Peter Schwind I learned visceral osteopathy at another level. Between 2008 and 2012 I took every course they offered.</p>

          <p>In 2011, in Paris, I had a session with Hubert Godard, a world reference in movement within Rolfing. In Leipzig I met Kathrin Grobelnik, who organized the course where I would learn SourcePoint Therapy with Ray McCall, Dona Thompson, and Bob Schrei — a training I completed two years later in Santa Fe, New Mexico. That way of working with energy deeply integrated all of my structural work. In 2013 I certified as an Advanced Practitioner.</p>

          <p>That same 2011, at the Rolfing Annual Meeting in Flims, Switzerland — which I attended as president of the Spanish Rolfing Association — a flight delay left me five hours with Mónica Caspari, Advanced Rolfer. I changed my return ticket to attend the movement workshop she was teaching that weekend. At that same conference, Alfred Stollenwerk showed me his work in functional osteopathy and changed the way I understand the recovery of joint function.</p>

          <p>In August 2011 I worked at Kamalaya Koh Samui, in Thailand. Working in paradise with extraordinary professionals. There I observed something that stayed with me: what in the city might take weeks, in that environment happened in hours.</p>

          <p>In September of that same year I invited Rajesh Ramani to give sessions in Barcelona. A life coach and spiritual teacher, he opened for me the door to inner child and emotional work. A new language for integrating body and energy.</p>

          <p>After Kamalaya, I travelled to Bangkok to work with a client about to undergo hip surgery. He turned out to be Dr. Shuzabura Harada, one of the finest Japanese acupuncturists I have ever met. I gave him three sessions. The next day he treated me. I had a pain in my quadricep that German and French specialists hadn&apos;t been able to resolve. With three needle movements, barely any contact, it disappeared. I asked to learn with him. In the summer of 2012 I spent a month at his home in Japan. His work with ki, tongue diagnosis, and pulse reading gave my professional path a new direction.</p>

          <p>Also in 2012 I encountered the work of Hino Akira Sensei in Valencia. For years I had felt disconnected within my own body, as if split in two. The week I worked with him changed that. I found a connection that has never left me.</p>

          <p>That year I also read an article about Thich Nhat Hanh that struck me so deeply that two months later I went to Ireland to meet him. There I came into contact with mindfulness and a different way of living in service to others.</p>

          <p>In those years, Dr. Riccardo Cassiani introduced me to Dr. Max Martin Rapkin, creator of Rapkinesis. For six years we challenged ideas together. He helped me overcome injuries and find tools for working with energy that appear in no school of Rolfing, physiotherapy, or osteopathy.</p>

          <p>Life also took me to Malaysia, where Dr. C.D. Siby, an Ayurvedic physician, showed me the scope of his system: pulse diagnosis, deep detoxification processes, and results that impressed me profoundly. And Vince Choo, an exceptional coach, who restored my desire to move and opened a new and enjoyable way of training.</p>

          <p>Back in Barcelona I met Pacho Ayaso, psychologist, dancer, and Pilates teacher. He became an indispensable friend and collaborator for years. Through him I encountered Kelly Starrett, Jill Miller, Gray Cook, Andreo Spina, and Ido Portal. In 2012 we certified together in MovNat in Madrid. In 2013 we attended the Corset Training with Ido Portal&apos;s team in Copenhagen.</p>

          <p>In Mexico I met Dr. Víctor Valpuesta, a specialist in internal medicine, anaesthesiology, and integrative functional medicine. For a decade we collaborated with clients and I learned something essential: how far my method reaches, where medicine is indispensable, and where, sometimes, it isn&apos;t quite as necessary as it seems.</p>

          <p>In September 2013 I started Ido Portal&apos;s online training. My body and my way of thinking changed radically again.</p>

          <p>In November 2014 I went to Piacenza for a course with Kit Laughlin — Stretch Therapy for Gymnastics Strength Training. Six years following him online before meeting him in person. He helped me explore the body through stretching and its relationship with the limits of the mind.</p>

          <p>A wrist injury from muscle-ups during Ido Portal&apos;s online programme — one I couldn&apos;t seem to recover from — led me to look for a different approach. I found Will Chung: apparently simple exercises but profoundly effective, exactly what I needed. I went to England for an introductory course and trained online with him for four years.</p>

          <p>In parallel I began giving sessions to animals: horses, dogs, some in competition. There I learned something no book teaches. No mental story. No placebo. Just the body responding.</p>

          <p>In February 2014 I met Samuel Eduardo Minond. His work in radiesthesia, physical body, spirit, and soul helped me understand dimensions of spiritual work that had been unknown to me until then. I knew I didn&apos;t need to keep searching.</p>

          <p>After Covid, Alicia and I went to Sagàs, to the restaurant dels Casals. The next day they showed us the farm. There was a lame horse. I asked permission to give it a session. It recovered and its character changed. From there I started working with the owner, Margaux, who one day told us she had found the perfect house for us in Lluçà. A year later we moved.</p>

          <p className="font-medium">
            Today I have more than twenty years working with people who have tried many things and are still in the same place.
          </p>

          <p>I live in Lluçà, Barcelona, with Alicia and our three sons: Uriel, Ian, and Naïm.</p>

        </div>

        <div className="mt-16 pt-12 text-center" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <p className="text-lg font-medium">If this resonates, you already know why you&apos;re here.</p>
          <div className="mt-8">
            <a
              href={reserveHref}
              className="rounded-full px-10 py-4 text-sm font-medium text-white transition hover:opacity-85"
              style={{ background: "var(--text-main)" }}
            >
              Book a first session
            </a>
          </div>
        </div>

      </main>

      <footer style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
        <div
          className="mx-auto flex max-w-[900px] flex-col gap-3 px-6 py-8 text-sm lg:flex-row lg:items-center lg:justify-between"
          style={{ color: "var(--text-secondary)" }}
        >
          <div>
            Structural reorganization ·{" "}
            <a href="https://maps.app.goo.gl/2DvAv9DP6iZBDuXk6?g_st=ic" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">
              Lluçà (Barcelona)
            </a>
            {" "}· Online
          </div>
          <div>
            <a href={`mailto:${contactEmail}`} className="hover:opacity-60">{contactEmail}</a>
            {" "}·{" "}
            <a href="https://www.instagram.com/ferran__moreno_/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">@ferran__moreno_</a>
          </div>
          <div>© 2026 Ferran Moreno</div>
        </div>
      </footer>
    </div>
  );
}
