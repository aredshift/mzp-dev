import Image from "next/image";

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#151515]">
      <title>mzp.dev</title>
      <Navbar/>
      <HeroSection/>
      <div className="container mx-auto px-6 py-4 mt-6">
        <AboutSection/>
        <ProjectSection/>
        <ContactSection/>
      </div>
      <Footer/>
    </main>
  );
}
