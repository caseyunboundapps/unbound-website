import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/content/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects
    .filter((p) => p.tier === "featured" || p.slug === "apparel")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Unbound Studios`,
    description: project.tagline,
  };
}

const mirrorScreenshots = [
  "today-dark.webp",
  "reflect-dark.webp",
  "plan-dark.webp",
  "add-action-dark.webp",
  "add-goal-dark.webp",
  "add-routine-dark.webp",
  "settings-dark.webp",
];

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-24 px-14 max-md:px-5">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <span className="font-mono text-[0.6rem] font-medium text-green bg-green-light px-3 py-1 rounded-pill inline-block mb-6">
            {project.statusLabel}
          </span>
          <h1 className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-[-0.04em] text-ink mb-4">
            {project.name}
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed mb-12 max-w-xl">
            {project.description}
          </p>

          {/* Mirror-specific content */}
          {slug === "mirror" && (
            <>
              {/* Summary */}
              <section className="mb-16">
                <h2 className="font-sans text-2xl font-bold text-ink mb-4">
                  What Mirror does
                </h2>
                <p className="text-text-secondary leading-[1.7] mb-4">
                  Mirror is a daily check-in app. You log actions, set goals, build routines, and reflect on how your days are going. It&apos;s not a habit tracker with streaks and punishment. It&apos;s a tool for noticing patterns in your own behavior, on your own terms.
                </p>
                <p className="text-text-secondary leading-[1.7]">
                  We tested streaks with 50 beta users and found that 73% felt worse after breaking one. Not motivated. Worse. So we designed around reflection instead: honest snapshots of when you show up and when you don&apos;t. A missed day isn&apos;t a failure. It&apos;s just a day with no check-in.
                </p>
              </section>

              {/* Screenshot gallery */}
              <section className="mb-16">
                <h2 className="font-sans text-2xl font-bold text-ink mb-6">
                  Screenshots
                </h2>
                <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2">
                  {mirrorScreenshots.map((file) => (
                    <div
                      key={file}
                      className="rounded-2xl overflow-hidden bg-[#1a1918] p-2"
                    >
                      <Image
                        src={`/images/mirror/${file}`}
                        alt={file.replace(/-/g, " ").replace(".webp", "")}
                        width={300}
                        height={600}
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="rounded-xl w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* How it's built */}
              <section className="mb-16">
                <h2 className="font-sans text-2xl font-bold text-ink mb-4">
                  How it&apos;s built
                </h2>
                <p className="text-text-secondary leading-[1.7] mb-4">
                  Mirror is a native iOS app written in SwiftUI. We chose SwiftUI over UIKit for the check-in flow because the tradeoff was clear: we lost fine-grained animation control but cut implementation time from 3 weeks to 5 days. For a screen users see for 4 seconds, that math was easy.
                </p>
                <p className="text-text-secondary leading-[1.7]">
                  Data is stored locally on device with optional iCloud sync. No accounts, no sign-up walls. Open the app, start reflecting.
                </p>
              </section>

              {/* CTA */}
              <div className="flex gap-3">
                <a
                  href="https://usemirror.app"
                  className="inline-flex items-center gap-2 font-mono text-[0.7rem] font-medium px-6 py-3 rounded-pill bg-green text-white hover:bg-green-dim hover:-translate-y-0.5 transition-all duration-300"
                >
                  Download on the App Store
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 font-mono text-[0.7rem] font-medium px-6 py-3 rounded-pill text-ink shadow-[inset_0_0_0_1.5px_var(--border)] hover:shadow-[inset_0_0_0_1.5px_var(--ink)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Back to home
                </Link>
              </div>
            </>
          )}

          {/* Apparel stub */}
          {slug === "apparel" && (
            <section>
              <p className="text-text-secondary leading-[1.7] mb-4">
                A small line of clothing designed by the same people who build the apps. Simple pieces we actually want to wear, made with care.
              </p>
              <p className="text-text-secondary leading-[1.7] mb-8">
                Photography coming soon.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-mono text-[0.7rem] font-medium px-6 py-3 rounded-pill text-ink shadow-[inset_0_0_0_1.5px_var(--border)] hover:shadow-[inset_0_0_0_1.5px_var(--ink)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Back to home
              </Link>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
