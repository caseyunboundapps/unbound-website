"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 bg-cream text-ink">
      <h1 className="font-mono text-[0.75rem] tracking-[0.08em] uppercase text-text-tertiary mb-4">
        Something went wrong
      </h1>
      <p className="font-sans text-[1rem] text-text-secondary mb-8 text-center max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="font-mono text-[0.7rem] font-medium px-6 py-3 rounded-pill bg-green text-white hover:bg-green-dim hover:-translate-y-px transition-all duration-300"
      >
        Try again
      </button>
    </main>
  );
}
