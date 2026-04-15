import ScrollReveal from "./ScrollReveal";

const services = [
  {
    num: "01",
    title: "Product strategy",
    desc: "What to build, what to skip, how to get to users fast.",
  },
  {
    num: "02",
    title: "App development",
    desc: "Native and web. From first commit to production.",
  },
  {
    num: "03",
    title: "AI + Automations",
    desc: "Models, agents, and workflows wired into your product or operations.",
  },
];

export default function Services() {
  return (
    <section className="px-14 pt-16 pb-32 max-lg:px-8 max-md:px-5">
      <div className="grid grid-cols-[1fr_1.5fr] gap-24 items-start max-lg:grid-cols-1 max-lg:gap-12">
        {/* Left: sticky heading */}
        <ScrollReveal>
          <div className="sticky top-32 max-lg:static">
            <h2 className="font-sans text-[2.5rem] font-extrabold tracking-[-0.035em] text-ink leading-[1.08] mb-5">
              We also help<br />teams <span className="text-blue">ship.</span>
            </h2>
            <p className="text-[1.05rem] text-text-secondary leading-[1.7] max-w-[340px]">
              We work with a small number of teams at a time. If you&apos;re building a product and need someone who&apos;s been through the whole cycle, we should talk.
            </p>
          </div>
        </ScrollReveal>

        {/* Right: service cards */}
        <div className="flex flex-col gap-4">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.num} delay={i as 0 | 1 | 2 | 3}>
              <div className="p-8 rounded-[18px] bg-white border border-border grid grid-cols-[auto_1fr] gap-6 items-start hover:border-green hover:shadow-[0_4px_20px_rgba(59,156,111,0.06)] hover:translate-x-1 transition-all duration-[350ms]">
                <div className="font-mono text-[0.6rem] font-medium text-green bg-green-light w-9 h-9 flex items-center justify-center rounded-[10px]">
                  {svc.num}
                </div>
                <div>
                  <h3 className="font-sans text-[1.15rem] font-bold text-ink mb-1.5">
                    {svc.title}
                  </h3>
                  <p className="text-[0.92rem] text-text-secondary leading-[1.6]">
                    {svc.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
