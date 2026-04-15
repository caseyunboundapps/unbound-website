import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { contactPage } from "@/content/site";

export const metadata: Metadata = {
  title: contactPage.metadata.title,
  description: contactPage.metadata.description,
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-24 px-14 max-md:px-5">
        <div className="max-w-xl mx-auto">
          <p className="font-mono text-[0.65rem] text-text-tertiary tracking-[0.08em] uppercase mb-6">
            {contactPage.label}
          </p>
          <h1 className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-[-0.04em] text-ink mb-4">
            {contactPage.heading}
          </h1>
          <p className="text-text-secondary leading-[1.7] mb-12">
            {contactPage.body}
          </p>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
