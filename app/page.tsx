import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import Bros from "@/components/Bros";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
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
        <Bros />
        <Services />
        <Testimonial />
        <Team />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
