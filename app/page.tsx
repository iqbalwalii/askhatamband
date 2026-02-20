import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import GeometrySection from "./components/GeometrySection";
import TimelineSection from "./components/TimelineSection";
import ContactSection from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <GeometrySection />
      <TimelineSection />
      <ContactSection />
    </>
  );
}