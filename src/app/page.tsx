import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { WhyUs } from "../components/WhyUs";
import { Services } from "../components/Services";
import { Products } from "../components/Products";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Services />
      <Products />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}