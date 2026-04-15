import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Unbound Studios",
  description: "Two people building consumer apps and helping teams ship. Based in Kansas.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-24 px-14 max-md:px-5">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[0.65rem] text-text-tertiary tracking-[0.08em] uppercase mb-6">
            About us
          </p>
          <h1 className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-[-0.04em] text-ink mb-8">
            Two people, building full-time.
          </h1>

          <div className="text-text-secondary leading-[1.7] space-y-6 mb-16">
            <p>
              Unbound Studios is Casey Ring and Nick Jackson. We build consumer apps in-house and help a small number of outside teams ship their products.
            </p>
            <p>
              We started this because we kept having ideas and wanted somewhere to actually build them. Not pitch decks. Not prototypes that sit in a folder. Real products, used by real people.
            </p>
            <p>
              Casey handles product, engineering, and design. Nick handles strategy, operations, and making sure things actually get finished. Between the two of us, we cover the full cycle from idea to App Store.
            </p>
          </div>

          <div className="flex gap-16 max-md:flex-col max-md:gap-10">
            <div className="flex gap-6 items-start">
              <Image
                src="/images/portraits/casey.jpg"
                alt="Casey Ring"
                width={80}
                height={104}
                sizes="80px"
                className="rounded-2xl object-cover shrink-0 w-[80px] h-[104px]"
              />
              <div>
                <h3 className="font-sans text-[1.1rem] font-bold text-ink mb-1">Casey Ring</h3>
                <span className="font-mono text-[0.6rem] text-green mb-2 block">Product + Engineering</span>
                <p className="text-[0.9rem] text-text-secondary leading-[1.6] max-w-[320px]">
                  Builds the products, writes the code, designs the interfaces. Thinks in systems.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <Image
                src="/images/portraits/nick.jpg"
                alt="Nick Jackson"
                width={80}
                height={104}
                sizes="80px"
                className="rounded-2xl object-cover shrink-0 w-[80px] h-[104px]"
              />
              <div>
                <h3 className="font-sans text-[1.1rem] font-bold text-ink mb-1">Nick Jackson</h3>
                <span className="font-mono text-[0.6rem] text-green mb-2 block">Strategy + Operations</span>
                <p className="text-[0.9rem] text-text-secondary leading-[1.6] max-w-[320px]">
                  The reason things actually get finished. Strategy, ops, and keeping the whole machine running.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
