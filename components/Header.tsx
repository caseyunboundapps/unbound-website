import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-14 py-7 bg-cream/85 backdrop-blur-[20px] backdrop-saturate-[1.2] max-lg:px-8 max-md:px-5 max-md:py-4">
      <Link href="/" className="font-mono text-[0.8rem] font-bold text-ink tracking-[-0.01em]">
        Unbound Studios
      </Link>
      <nav className="flex items-center gap-10 max-md:gap-4">
        <Link
          href="/#work"
          className="font-sans text-[0.9rem] font-medium text-text-secondary hover:text-ink transition-colors duration-300 max-md:hidden"
        >
          Work
        </Link>
        <Link
          href="/#about"
          className="font-sans text-[0.9rem] font-medium text-text-secondary hover:text-ink transition-colors duration-300 max-md:hidden"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="font-mono text-[0.7rem] font-medium text-cream bg-ink px-5 py-2.5 rounded-pill hover:bg-green hover:text-white hover:-translate-y-px transition-all duration-300"
        >
          Get in touch
        </Link>
      </nav>
    </header>
  );
}
