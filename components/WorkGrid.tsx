import Link from "next/link";
import { projects } from "@/content/projects";
import ScrollReveal from "./ScrollReveal";

export default function WorkGrid() {
  const featured = projects.find((p) => p.tier === "featured")!;
  const secondary = projects.find((p) => p.tier === "secondary")!;
  const tertiary = projects.find((p) => p.tier === "tertiary")!;
  const compact = projects.filter((p) => p.tier === "compact");

  return (
    <section className="px-14 pt-32 pb-24 max-lg:px-8 max-md:px-5" id="work">
      {/* Section intro */}
      <ScrollReveal>
        <div className="flex justify-between items-end mb-14">
          <h2 className="font-sans text-[2.75rem] font-extrabold tracking-[-0.035em] text-ink leading-[1.05]">
            What we&apos;re<br />building
          </h2>
          <div className="font-mono text-[0.65rem] text-text-tertiary text-right leading-[1.7]">
            5 products in motion<br />More coming
          </div>
        </div>
      </ScrollReveal>

      {/* Bento grid */}
      <div className="grid grid-cols-[1.15fr_1fr] grid-rows-[auto_auto] gap-5 max-md:grid-cols-1">
        {/* Featured: Mirror */}
        <ScrollReveal delay={1} className="row-span-2 max-md:row-span-1">
          <Link href="/work/mirror" className="block h-full">
            <div className="rounded-2xl overflow-hidden relative cursor-pointer hover:scale-[0.985] transition-transform duration-400 h-full min-h-[540px] max-md:min-h-[420px]">
              <div className="h-full p-8 flex flex-col justify-end relative z-1 bg-gradient-to-br from-[#2C2B2A] to-[#1a1918]">
                {/* App preview mockup */}
                <div className="absolute top-8 right-8 w-[180px] h-[360px] bg-[#3C3B39] rounded-3xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-2 hover:-translate-y-2 hover:-rotate-1 transition-transform duration-500 max-md:w-[140px] max-md:h-[280px] max-md:top-6 max-md:right-6">
                  <div className="w-full h-full bg-gradient-to-b from-[#2C2B2A] to-[#1C1B1A] rounded-[18px] flex flex-col items-center px-3 pt-6 gap-2">
                    <span className="font-sans text-[0.55rem] text-[#787776] uppercase tracking-[0.08em]">Today</span>
                    <span className="font-sans text-[0.85rem] font-semibold text-[#FAFAF8]">Evening check-in</span>
                    <div className="w-4/5 h-1.5 bg-[#4A4948] rounded-full mt-1">
                      <div className="h-full rounded-full bg-[#6A8A63] w-[65%]" />
                    </div>
                    <div className="w-[85%] bg-[#3C3B39] rounded-[10px] p-3 mt-auto">
                      <p className="font-sans text-[0.55rem] text-[#A09F9D] leading-[1.5]">
                        What went well today? What felt off?
                      </p>
                    </div>
                    <div className="w-[85%] py-2 bg-[#6A8A63] rounded-lg text-center font-sans text-[0.6rem] font-semibold text-white mt-1.5 mb-3">
                      Reflect
                    </div>
                  </div>
                </div>

                <span className="font-mono text-[0.55rem] font-medium px-3 py-1 rounded-pill bg-[rgba(106,138,99,0.2)] text-[#9AB893] inline-block w-fit mb-3">
                  {featured.statusLabel}
                </span>
                <h3 className="font-sans text-[1.75rem] font-bold text-[#FAFAF8] mb-1">
                  {featured.name}
                </h3>
                <p className="text-[0.9rem] leading-[1.55] text-[#787776] max-w-[280px]">
                  {featured.tagline}
                </p>
              </div>
            </div>
          </Link>
        </ScrollReveal>

        {/* Secondary: Calendar */}
        <ScrollReveal delay={2}>
          <div className="rounded-2xl overflow-hidden cursor-pointer hover:scale-[0.985] transition-transform duration-400">
            <div className="p-8 flex flex-col justify-end min-h-[258px] bg-gradient-to-br from-[#e8eef6] to-[#dce6f2]">
              <span className="font-mono text-[0.55rem] font-medium px-3 py-1 rounded-pill bg-[rgba(74,143,212,0.12)] text-blue inline-block w-fit mb-3">
                {secondary.statusLabel}
              </span>
              <h3 className="font-sans text-[1.5rem] font-bold text-ink mb-1">
                {secondary.name}
              </h3>
              <p className="text-[0.9rem] leading-[1.55] text-text-secondary max-w-[280px]">
                {secondary.tagline}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Tertiary: Apparel */}
        <ScrollReveal delay={3}>
          <Link href="/work/apparel" className="block">
            <div className="rounded-2xl overflow-hidden cursor-pointer hover:scale-[0.985] transition-transform duration-400">
              <div className="p-8 flex flex-col justify-end min-h-[258px] bg-warm-gray">
                <span className="font-mono text-[0.55rem] font-medium px-3 py-1 rounded-pill bg-[rgba(0,0,0,0.04)] text-text-tertiary inline-block w-fit mb-3">
                  {tertiary.statusLabel}
                </span>
                <h3 className="font-sans text-[1.5rem] font-bold text-ink mb-1">
                  {tertiary.name}
                </h3>
                <p className="text-[0.9rem] leading-[1.55] text-text-secondary max-w-[280px]">
                  {tertiary.tagline}
                </p>
              </div>
            </div>
          </Link>
        </ScrollReveal>
      </div>

      {/* Compact cards row */}
      <ScrollReveal>
        <div className="flex gap-5 mt-5 max-md:flex-col">
          {compact.map((project) => (
            <div
              key={project.slug}
              className="flex-1 px-7 py-6 bg-white rounded-xl border border-border hover:border-blue hover:-translate-y-[3px] hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <h4 className="font-sans text-base font-semibold text-ink mb-1">
                {project.name}
              </h4>
              <p className="text-[0.85rem] text-text-secondary">
                {project.tagline}
              </p>
              <span className="font-mono text-[0.55rem] text-text-tertiary mt-2.5 block">
                {project.statusLabel}
              </span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
