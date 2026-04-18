import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { teamSection, team } from "@/content/team";

export default function Team() {
  return (
    <section className="py-24 px-14 bg-warm-gray max-lg:px-8 max-md:px-5" id="about">
      <p className="font-mono text-[0.6rem] font-medium text-text-tertiary tracking-[0.08em] uppercase mb-12">
        {teamSection.label}
      </p>

      <ScrollReveal>
        <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1 max-md:gap-10">
          {team.map((person) => (
            <div key={person.name} className="flex flex-col">
              <Image
                src={person.photo}
                alt={person.name}
                width={280}
                height={340}
                sizes="(max-width: 768px) 100vw, 280px"
                className="rounded-2xl object-cover w-full max-w-[280px] aspect-[4/5] mb-6"
              />
              <h4 className="font-sans text-[1.25rem] font-bold text-ink mb-1">
                {person.name}
              </h4>
              <span className="font-mono text-[0.6rem] text-green-dim mb-3 block">
                {person.role}
              </span>
              <p className="text-[0.95rem] text-text-secondary leading-[1.65] max-w-[360px]">
                {person.bio}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
