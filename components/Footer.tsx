import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-14 py-10 border-t border-border max-lg:px-8 max-md:flex-col max-md:gap-4 max-md:text-center max-md:px-5">
      <div className="font-mono text-[0.6rem] text-text-tertiary">
        &copy; {new Date().getFullYear()} Unbound Studios. All rights reserved.
      </div>
      <div className="font-mono text-[0.7rem] font-bold text-text-tertiary">
        Unbound Studios
      </div>
      <div className="flex gap-8">
        <Link
          href="/about"
          className="font-sans text-[0.85rem] text-text-secondary hover:text-ink transition-colors duration-200"
        >
          About
        </Link>
        <Link
          href="/privacy"
          className="font-sans text-[0.85rem] text-text-secondary hover:text-ink transition-colors duration-200"
        >
          Privacy
        </Link>
        <Link
          href="/terms"
          className="font-sans text-[0.85rem] text-text-secondary hover:text-ink transition-colors duration-200"
        >
          Terms
        </Link>
      </div>
    </footer>
  );
}
