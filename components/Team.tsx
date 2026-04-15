import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const people = [
  {
    name: "Casey Ring",
    role: "Product + Engineering",
    bio: "Builds the products, writes the code, designs the interfaces. Thinks in systems.",
    photo: "/images/portraits/casey.jpg",
    gradient: "from-green to-green-dim",
  },
  {
    name: "Nick Jackson",
    role: "Strategy + Operations",
    bio: "The reason things actually get finished. Strategy, ops, and keeping the whole machine running.",
    photo: "/images/portraits/nick.jpg",
    gradient: "from-blue to-[#3a7fc4]",
  },
];

export default function Team() {
  return (
    <section className="py-24 px-14 bg-warm-gray max-lg:px-8 max-md:px-5" id="about">
      <p className="font-mono text-[0.6rem] font-medium text-text-tertiary tracking-[0.08em] uppercase mb-12">
        Who we are
      </p>

      <ScrollReveal>
        <div className="flex gap-16 max-md:flex-col max-md:gap-10">
          {people.map((person) => (
            <div key={person.name} className="flex gap-6 items-start">
              <Image
                src={person.photo}
                alt={person.name}
                width={80}
                height={80}
                className="rounded-2xl object-cover shrink-0 w-[80px] h-[80px]"
              />
              <div>
                <h4 className="font-sans text-[1.1rem] font-bold text-ink mb-1">
                  {person.name}
                </h4>
                <span className="font-mono text-[0.6rem] text-green mb-2 block">
                  {person.role}
                </span>
                <p className="text-[0.9rem] text-text-secondary leading-[1.6] max-w-[320px]">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
