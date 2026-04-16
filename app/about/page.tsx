import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { aboutPage } from "@/content/site";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: aboutPage.metadata.title,
  description: aboutPage.metadata.description,
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-24 px-14 max-md:px-5">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[0.65rem] text-text-tertiary tracking-[0.08em] uppercase mb-6">
            {aboutPage.label}
          </p>
          <h1 className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-[-0.04em] text-ink mb-8">
            {aboutPage.heading}
          </h1>

          <div className="text-text-secondary leading-[1.7] space-y-6 mb-16">
            {aboutPage.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="flex gap-16 max-md:flex-col max-md:gap-10">
            {team.map((person) => (
              <div key={person.name} className="flex gap-6 items-start">
                <Image
                  src={person.photo}
                  alt={person.name}
                  width={80}
                  height={104}
                  sizes="80px"
                  className="rounded-2xl object-cover shrink-0 w-[80px] h-[104px]"
                />
                <div>
                  <h3 className="font-sans text-[1.1rem] font-bold text-ink mb-1">{person.name}</h3>
                  <span className="font-mono text-[0.6rem] text-green-dim mb-2 block">{person.role}</span>
                  <p className="text-[0.9rem] text-text-secondary leading-[1.6] max-w-[320px]">
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
