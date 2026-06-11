import ScrollReveal from "./ScrollReveal";
import { testimonial } from "@/content/homepage";

export default function Testimonial() {
  return (
    <section className="py-32 px-14 relative bg-ink max-lg:px-8 max-md:px-5">
      <div className="absolute left-14 top-32 bottom-32 w-[3px] rounded-sm bg-gradient-to-b from-green to-blue opacity-50 max-lg:left-8 max-md:hidden" />

      <ScrollReveal>
        <div className="pl-6 max-md:pl-0">
          <blockquote className="font-sans text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium leading-[1.5] tracking-[-0.015em] text-cream/80 max-w-[700px] italic">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div className="mt-10">
            <p className="font-sans text-[1rem] font-semibold text-cream">
              {testimonial.name}
            </p>
            <p className="font-mono text-[0.7rem] text-green mt-1.5 tracking-[0.02em]">
              {testimonial.title}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
