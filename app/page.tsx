import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import Statement from "@/components/Statement";
import Services from "@/components/Services";
import Team from "@/components/Team";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1" id="main">
        <Hero />
        <WorkGrid />
        <Statement />
        <Services />
        <Team />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
