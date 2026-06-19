import { ArrowRight } from "lucide-react";
import RequestAccessButton from "@/components/RequestAccessButton";

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const TEAL = "#2BE8A5";
const gradText = {
  background: "linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.62))",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

const TEAM = [
  {
    photo: "/image/simranjeet.jpg",
    name: "Simranjeet Singh",
    role: "Co-founder & CTO",
    linkedin: "https://www.linkedin.com/in/simranbhangu/",
  },
  {
    photo: "/image/farhad.png",
    name: "Farhad Merchant",
    role: "Co-founder & CSA",
    linkedin: "https://www.linkedin.com/in/farhad-merchant-7996a04/",
  },
  {
    photo: "/image/stealth.jpg",
    name: "Stealth Mode",
    role: "Co-founder & CEO",
    linkedin: null,
  },
];

const PARTNERS = [
  {
    href: "https://www.businessgeneratorgroningen.com/",
    src: "/image/partners/logo-bgg.svg",
    alt: "Business Generator Groningen",
  },
  {
    href: "https://www.rug.nl/",
    src: "/image/partners/logo--en.svg",
    alt: "University of Groningen",
  },
  {
    href: "https://www.innokite.nl/",
    src: "/image/partners/innokite.svg",
    alt: "Innokite",
  },
  {
    href: "https://www.rug.nl/research/fse/cognitive-systems-and-materials/?lang=en",
    src: "/image/partners/cognigron.jpeg",
    alt: "Cognigron",
  },
];

export default function About() {
  return (
    <>
      {/* PAGE HEAD */}
      <section className="px-6 pt-32 md:pt-36 pb-16">
        <div className="max-w-7xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>About</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 max-w-4xl" style={{ letterSpacing: "-0.04em" }}>
            <span style={gradText}>The people building efficient edge AI</span>
          </h1>
          <p className="text-white/55 max-w-2xl leading-relaxed">
            A small, deep-tech team turning computing-in-memory research into shippable RTL IP, backed by leading institutions.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>Team</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 max-w-2xl">Small team, deep expertise</h2>
          <p className="text-white/55 max-w-2xl mb-12">
            Focused on energy-efficient inference IP and memory systems, from device physics to system integration.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TEAM.map((m) => (
              <div
                key={m.name}
                className="group relative flex flex-col items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-8 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20"
              >
                {/* teal wave rising on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 origin-bottom scale-y-0 rounded-t-[50%] bg-gradient-to-t from-[#2BE8A5]/15 to-transparent transition-transform duration-500 ease-out group-hover:scale-y-100"
                />
                {/* avatar: teal ring + zoom on hover */}
                <div className="relative z-10 h-28 w-28 overflow-hidden rounded-full border-2 border-white/10 transition-all duration-500 ease-out group-hover:scale-105 group-hover:border-[#2BE8A5]">
                  <img src={m.photo} alt={m.name} className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
                </div>
                <div className="relative z-10 mt-5 font-semibold text-white">{m.name}</div>
                <div className="relative z-10 text-sm text-white/55">{m.role}</div>
                <div className="relative z-10 mt-4 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                  {m.linkedin ? (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener"
                      aria-label={`${m.name} on LinkedIn`}
                      className="inline-flex text-white/55 transition-colors hover:text-[#2BE8A5]"
                    >
                      <LinkedinIcon size={18} />
                    </a>
                  ) : (
                    <span className="inline-flex text-white/25" aria-label="Profile coming soon">
                      <LinkedinIcon size={18} />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto rv">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: TEAL }}>Partners &amp; backers</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 max-w-2xl">Building with leading institutions</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {PARTNERS.map((p) => (
              <a
                key={p.alt}
                href={p.href}
                target="_blank"
                rel="noopener"
                className="bg-white rounded-xl p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
              >
                <img src={p.src} alt={p.alt} className="max-h-12 w-auto object-contain" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto text-center rv">
          <span className="inline-block text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-full border mb-6" style={{ color: TEAL, borderColor: `${TEAL}40`, background: `${TEAL}14` }}>Work with us</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-5" style={{ letterSpacing: "-0.03em" }}>Let's build efficient edge AI together</h2>
          <p className="text-white/55 mb-9">
            Evaluate Ximplic Vyzora on target workloads, or talk to us about partnership and design-in.
          </p>
          <div className="flex items-center justify-center">
            <RequestAccessButton subject="Ximplic Vyzora evaluation" className="inline-flex items-center gap-2 text-sm md:text-base font-medium px-7 h-12 rounded-lg text-black transition-transform hover:scale-[1.04] active:scale-95" style={{ background: TEAL }}>
              Request evaluation <ArrowRight size={16} />
            </RequestAccessButton>
          </div>
          <p className="text-xs text-white/55 mt-7">Email <a href="mailto:info@ximplic.com" style={{ color: TEAL }}>info@ximplic.com</a> · Groningen, The Netherlands</p>
        </div>
      </section>
    </>
  );
}
