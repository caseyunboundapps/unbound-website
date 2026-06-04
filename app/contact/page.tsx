import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import CalPopupButton from "@/components/CalPopupButton";
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
          <p className="text-text-secondary leading-[1.7] mb-8">
            {contactPage.body}
          </p>
          <CalPopupButton className="inline-flex items-center gap-2 font-mono text-[0.7rem] font-medium px-6 py-3 rounded-pill bg-green-dim text-white hover:bg-[#235f43] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,122,86,0.2)] transition-all duration-300 mb-10">
            Book a discovery call &rarr;
          </CalPopupButton>
          <p className="font-mono text-[0.65rem] text-text-tertiary tracking-[0.08em] uppercase mb-6">
            Or send us a message
          </p>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
