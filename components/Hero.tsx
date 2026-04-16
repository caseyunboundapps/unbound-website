import ScrollReveal from "./ScrollReveal";
import { hero } from "@/content/homepage";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end px-14 pb-24 pt-24 relative max-lg:px-8 max-md:px-5 max-md:pb-16">
      <ScrollReveal>
        <p className="font-mono text-[0.65rem] font-normal text-text-tertiary tracking-[0.08em] uppercase mb-7">
          {hero.badge}
        </p>
      </ScrollReveal>

      <ScrollReveal delay={1}>
        <h1 className="font-sans text-[clamp(3.25rem,6.5vw,5.75rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-ink max-w-[900px] mb-10">
          {hero.heading}{hero.headingBreak && <br />}people <span className="text-green italic">{hero.headingAccent}</span> {hero.headingEnd}
        </h1>
      </ScrollReveal>

      <div className="flex items-end justify-between gap-12 max-md:flex-col max-md:items-start">
        <ScrollReveal delay={2}>
          <p className="text-[1.15rem] font-normal text-text-secondary leading-[1.65] max-w-[420px]">
            {hero.subheading}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={3} className="shrink-0">
          <div className="flex gap-2.5">
            <a
              href={hero.primaryCta.url}
              className="inline-flex items-center gap-2 font-mono text-[0.7rem] font-medium px-6 py-3 rounded-pill bg-green-dim text-white hover:bg-[#235f43] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,122,86,0.2)] transition-all duration-300"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.url}
              className="inline-flex items-center gap-2 font-mono text-[0.7rem] font-medium px-6 py-3 rounded-pill text-ink shadow-[inset_0_0_0_1.5px_var(--border)] hover:shadow-[inset_0_0_0_1.5px_var(--ink)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 w-px h-12 bg-gradient-to-b from-transparent to-text-tertiary animate-[scrollPulse_2.5s_ease-in-out_infinite]" />
    </section>
  );
}
