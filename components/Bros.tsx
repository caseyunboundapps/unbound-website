import ScrollReveal from "./ScrollReveal";
import { bros } from "@/content/bros";

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "instagram":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" />
        </svg>
      );
    case "tiktok":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78c.27 0 .54.04.8.1V9.01a6.27 6.27 0 0 0-.8-.05 6.34 6.34 0 0 0 0 12.68 6.34 6.34 0 0 0 6.34-6.34V9.16a8.16 8.16 0 0 0 3.76.92V6.69Z" />
        </svg>
      );
    case "x":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "youtube":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Bros() {
  return (
    <section className="py-24 px-14 max-lg:px-8 max-md:px-5">
      <ScrollReveal>
        <p className="font-mono text-[0.6rem] font-medium text-text-tertiary tracking-[0.08em] uppercase mb-8">
          Unbound Bros
        </p>
        <h2 className="font-sans text-[2.5rem] font-extrabold tracking-[-0.035em] text-ink leading-[1.08] mb-5 max-w-[500px]">
          {bros.heading}
        </h2>
        <p className="text-[1.05rem] text-text-secondary leading-[1.7] max-w-[440px] mb-10">
          {bros.body}
        </p>
        <div className="flex gap-5">
          {bros.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.platform}
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-border text-text-secondary hover:text-ink hover:border-ink transition-all duration-300"
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
