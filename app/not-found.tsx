import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center pt-24">
        <div className="text-center">
          <p className="font-mono text-[0.65rem] text-text-tertiary tracking-[0.08em] uppercase mb-6">
            404
          </p>
          <h1 className="font-sans text-4xl font-extrabold tracking-[-0.04em] text-ink mb-4">
            Page not found.
          </h1>
          <p className="text-lg text-text-secondary mb-8">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="font-mono text-[0.7rem] font-medium text-cream bg-ink px-6 py-3 rounded-pill hover:bg-green hover:text-white transition-all duration-300 inline-block"
          >
            Go home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
