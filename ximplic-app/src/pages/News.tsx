import { ArrowRight } from "lucide-react";

const TEAL = "#2BE8A5";

const gradText = {
  background: "linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.62))",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

interface NewsItem {
  date: string;
  title: string;
  body: string;
  link?: { href: string; label: string };
}

const items: NewsItem[] = [
  {
    date: "Award · 4 December 2024",
    title: "Ximplic wins 2025 HiPEAC Technology Transfer Award",
    body: "We're honored to be selected as one of five winners of the prestigious 2025 HiPEAC Technology Transfer Awards, recognising our work accelerating the design of computing-in-memory architectures through advanced design automation and IP. Winners are recognised at the HiPEAC conference in January 2025.",
    link: {
      href: "https://www.hipeac.net/news/7126/announcing-winners-2025-hipeac-technology-transfer-awards/",
      label: "Read full announcement",
    },
  },
  {
    date: "Launch · 11 November 2025",
    title: "Ximplic launches website & LinkedIn profile",
    body: "We're thrilled to announce the official launch of Ximplic's website and LinkedIn profile. Connect with us to follow our journey building energy-efficient inference IP for the edge.",
    link: {
      href: "https://www.linkedin.com/company/ximplic-systems",
      label: "Follow on LinkedIn",
    },
  },
  {
    date: "Achievement · 1 September 2025",
    title: "Simranjeet Singh awarded DeepTech Pioneer Fellowship",
    body: "Simranjeet Singh, Co-founder & CTO of Ximplic, has been selected as a DeepTech Pioneer Fellow by the Business Generator Groningen. The fellowship supports development of Ximplic's energy-efficient edge AI technology.",
    link: {
      href: "https://www.businessgeneratorgroningen.com/actualiteit-eng/first-fse-pioneer-deeptech-fellows-selected/",
      label: "Read more",
    },
  },
];

export default function News() {
  return (
    <>
      {/* HEADER */}
      <section className="px-6 pt-32 md:pt-36 pb-8">
        <div className="max-w-3xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>News &amp; updates</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.015em] mb-5" style={{ letterSpacing: "-0.02em" }}>
            <span style={gradText}>Latest from Ximplic</span>
          </h1>
          <p className="text-white/55 leading-relaxed max-w-2xl">
            Developments, achievements and announcements in energy-efficient edge AI.
          </p>
        </div>
      </section>

      {/* NEWS LIST */}
      <section className="px-6 pt-12 pb-24 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto rv">
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <article key={item.title} className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 transition-colors">
                <div className="text-[10px] font-medium tracking-widest uppercase mb-3 text-white/50">{item.date}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{item.body}</p>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener"
                    className="text-sm font-medium mt-5 inline-flex items-center gap-1"
                    style={{ color: TEAL }}
                  >
                    {item.link.label} <ArrowRight size={13} />
                  </a>
                )}
              </article>
            ))}

            <article className="rounded-xl border border-dashed border-white/10 bg-white/[0.02] p-6 text-center hover:border-white/20 transition-colors">
              <h3 className="text-xl font-semibold mb-2">More news coming soon</h3>
              <p className="text-sm text-white/55 leading-relaxed">Stay tuned for more updates and announcements.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
