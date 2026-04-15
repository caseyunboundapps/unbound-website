import Link from "next/link";
import { siteFooter } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-ink flex items-center justify-between px-14 py-10 border-t border-white/10 max-lg:px-8 max-md:flex-col max-md:gap-4 max-md:text-center max-md:px-5">
      <div className="font-mono text-[0.6rem] text-cream/40">
        &copy; {new Date().getFullYear()} {siteFooter.copyright}
      </div>
      <div className="font-mono text-[0.7rem] font-bold text-cream/40">
        {siteFooter.wordmark}
      </div>
      <div className="flex gap-8">
        {siteFooter.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-sans text-[0.85rem] text-cream/50 hover:text-cream transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
