import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Unbound Studios",
  description: "Get in touch with Unbound Studios. Tell us what you're working on.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-24 px-14 max-md:px-5">
        <div className="max-w-xl mx-auto">
          <p className="font-mono text-[0.65rem] text-text-tertiary tracking-[0.08em] uppercase mb-6">
            Contact
          </p>
          <h1 className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-[-0.04em] text-ink mb-4">
            Let&apos;s talk.
          </h1>
          <p className="text-text-secondary leading-[1.7] mb-12">
            Have a project in mind, or just want to say hi? Drop us a note and we&apos;ll get back to you.
          </p>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
