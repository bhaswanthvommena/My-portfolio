import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ width: "100%", overflowX: "hidden", background: "transparent" }}>
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Expertise />
      <Projects />
      <Timeline />
      <TechStack />
      <Footer />
    </main>
  );
}
