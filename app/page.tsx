import { navItems } from "@/data/globals";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar"
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="bg-[#f7f7f7] relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 ">
      <div>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Projects />
        <TechStack /> 
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
