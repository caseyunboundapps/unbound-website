import { projects } from "@/content/projects";
import ScrollReveal from "./ScrollReveal";

export default function WorkGrid() {
  const featured = projects.find((p) => p.tier === "featured")!;
  const secondary = projects.filter((p) => p.tier === "secondary");

  return (
    <section className="px-14 pt-32 pb-24 max-lg:px-8 max-md:px-5" id="work">
      {/* Section intro */}
      <ScrollReveal>
        <div className="flex justify-between items-end mb-14">
          <h2 className="font-sans text-[2.75rem] font-extrabold tracking-[-0.035em] text-ink leading-[1.05]">
            What we&apos;re<br />building
          </h2>
          <div className="font-mono text-[0.65rem] text-text-tertiary text-right leading-[1.7]">
            3 products<br />More coming
          </div>
        </div>
      </ScrollReveal>

      {/* Bento grid */}
      <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
        {/* Featured: Mirror */}
        <ScrollReveal delay={1} className="col-span-2 max-md:col-span-1">
          <a href={featured.url} target="_blank" rel="noopener noreferrer" className="block h-full">
            <div className="rounded-2xl overflow-hidden relative cursor-pointer hover:scale-[0.985] transition-transform duration-400 h-full min-h-[540px] max-md:min-h-[420px]">
              <div className="h-full p-8 flex flex-col justify-end relative z-1 bg-gradient-to-br from-[#2C2B2A] to-[#1a1918]">
                {/* App preview mockup */}
                <div className="absolute top-8 right-8 w-[180px] h-[360px] bg-[#3C3B39] rounded-3xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-2 hover:-translate-y-2 hover:-rotate-1 transition-transform duration-500 max-md:w-[140px] max-md:h-[280px] max-md:top-6 max-md:right-6">
                  <div className="w-full h-full bg-gradient-to-b from-[#2C2B2A] to-[#1C1B1A] rounded-[18px] flex flex-col px-4 pt-5 pb-4 gap-0">
                    <span className="font-sans text-[0.5rem] text-[#787776] uppercase tracking-[0.08em]">Today</span>
                    <span className="font-sans text-[0.75rem] font-semibold text-[#FAFAF8] mt-0.5">Be healthier</span>
                    <div className="flex flex-col gap-1.5 mt-3">
                      {[
                        { label: "Morning run", done: true },
                        { label: "Read 20 min", done: true },
                        { label: "Cook dinner", done: false },
                        { label: "No screens after 9", done: false },
                      ].map((habit) => (
                        <div key={habit.label} className="flex items-center gap-2">
                          <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${habit.done ? "border-[#6A8A63] bg-[#6A8A63]" : "border-[#4A4948] bg-transparent"}`}>
                            {habit.done && (
                              <svg width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M1 3l1.5 2L6 1" stroke="#1C1B1A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            )}
                          </div>
                          <span className={`font-sans text-[0.5rem] ${habit.done ? "text-[#787776] line-through" : "text-[#DDDCDA]"}`}>{habit.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="font-sans text-[0.5rem] text-[#787776]">2 of 4</span>
                      <div className="w-12 h-1 bg-[#4A4948] rounded-full">
                        <div className="h-full rounded-full bg-[#6A8A63] w-1/2" />
                      </div>
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
          </a>
        </ScrollReveal>

        {/* Secondary cards */}
        {secondary.map((project, i) => (
          <ScrollReveal key={project.slug} delay={(i + 2) as 0 | 1 | 2 | 3}>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
              <div className="rounded-2xl overflow-hidden cursor-pointer hover:scale-[0.985] transition-transform duration-400">
                <div
                  className={`p-8 flex flex-col justify-end min-h-[258px] ${
                    project.slug === "golf-ai"
                      ? "bg-gradient-to-br from-[#e8eef6] to-[#dce6f2]"
                      : "bg-warm-gray"
                  }`}
                >
                  <span
                    className={`font-mono text-[0.55rem] font-medium px-3 py-1 rounded-pill inline-block w-fit mb-3 ${
                      project.status === "live"
                        ? "bg-[rgba(74,143,212,0.12)] text-blue"
                        : "bg-[rgba(0,0,0,0.04)] text-text-tertiary"
                    }`}
                  >
                    {project.statusLabel}
                  </span>
                  <h3 className="font-sans text-[1.5rem] font-bold text-ink mb-1">
                    {project.name}
                  </h3>
                  <p className="text-[0.9rem] leading-[1.55] text-text-secondary max-w-[280px]">
                    {project.tagline}
                  </p>
                </div>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
