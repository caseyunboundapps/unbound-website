import ScrollReveal from "./ScrollReveal";
import { statement } from "@/content/homepage";

export default function Statement() {
  return (
    <section className="py-32 px-14 relative bg-ink max-lg:px-8 max-md:px-5">
      {/* Green-to-blue accent line */}
      <div className="absolute left-14 top-32 bottom-32 w-[3px] rounded-sm bg-gradient-to-b from-green to-blue opacity-50 max-lg:left-8 max-md:hidden" />

      <ScrollReveal>
        <div className="pl-6 max-md:pl-0">
          <blockquote className="font-sans text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.35] tracking-[-0.025em] text-cream max-w-[800px]">
            {statement.quote}{" "}
            <span className="text-green">{statement.quoteAccent}</span>
          </blockquote>
          <p className="font-mono text-[0.65rem] text-cream/45 mt-8">
            {statement.attribution}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
