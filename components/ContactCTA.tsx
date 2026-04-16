import ScrollReveal from "./ScrollReveal";
import { contactCta } from "@/content/homepage";

export default function ContactCTA() {
  return (
    <section className="bg-ink py-40 px-14 text-center relative max-lg:px-8 max-md:py-24 max-md:px-5" id="contact">
      {/* Background watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[clamp(8rem,18vw,16rem)] font-extrabold text-[rgba(250,249,246,0.04)] pointer-events-none whitespace-nowrap z-0 tracking-[-0.05em] max-md:hidden">
        UNBOUND
      </div>

      <div className="relative z-1">
        <ScrollReveal>
          <h2 className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-[-0.04em] text-cream mb-4">
            {contactCta.heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <p className="text-[1.1rem] text-cream/60 mb-10 max-w-[440px] mx-auto leading-[1.65]">
            {contactCta.body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <div className="flex gap-3 justify-center max-sm:flex-col max-sm:items-center">
            <a
              href={contactCta.primaryCta.url}
              className="inline-flex items-center gap-2 font-mono text-[0.7rem] font-medium px-6 py-3 rounded-pill bg-green-dim text-white hover:bg-[#235f43] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,122,86,0.2)] transition-all duration-300"
            >
              {contactCta.primaryCta.label}
            </a>
            <a
              href={contactCta.secondaryCta.url}
              className="inline-flex items-center gap-2 font-mono text-[0.7rem] font-medium px-6 py-3 rounded-pill text-cream shadow-[inset_0_0_0_1.5px_rgba(250,249,246,0.2)] hover:shadow-[inset_0_0_0_1.5px_rgba(250,249,246,0.6)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {contactCta.secondaryCta.label}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
