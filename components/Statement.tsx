import ScrollReveal from "./ScrollReveal";

export default function Statement() {
  return (
    <section className="py-32 px-14 relative max-lg:px-8 max-md:px-5">
      {/* Green-to-blue accent line */}
      <div className="absolute left-14 top-32 bottom-32 w-[3px] rounded-sm bg-gradient-to-b from-green to-blue opacity-30 max-lg:left-8 max-md:hidden" />

      <ScrollReveal>
        <div className="pl-6 max-md:pl-0">
          <blockquote className="font-sans text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.35] tracking-[-0.025em] text-ink max-w-[800px]">
            We started this because we kept having ideas and wanted somewhere to actually build them. Not pitch decks. Not prototypes that sit in a folder.{" "}
            <span className="text-green">Real things, used by real people.</span>
          </blockquote>
          <p className="font-mono text-[0.65rem] text-text-tertiary mt-8">
            Casey Ring &amp; Nick Jackson, Founders
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
